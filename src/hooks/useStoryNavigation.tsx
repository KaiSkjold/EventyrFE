import { useCallback } from 'react';
import type { Page, Story } from '../services/api/Types';
import { pagesApi } from '../services/api/PagesApi';

export function useStoryNavigation(
    story: Story | null,
    setCurrentPage: (page: Page | null) => void
) {
    // Handle story choice navigation to next page
  const handleStoryChoice = useCallback(async (nextPageId: string) => {
    if (!story) return;

    try {
        console.log('Navigating to page ID:', nextPageId);

        // Get the next page in the story
        const pageData = story.pages.find((p) => p.pageId === nextPageId);

        // If page not found, log an error and return
        if (!pageData) {
            console.error('Page not found in story:', nextPageId);
            return;
        }

        // Now get all the pageLinks
        const pageLinksByPageId = await pagesApi.getPageLinks(nextPageId);

    // Add the pageLinks to the current page using the correct property name
    // The rest of the app expects `outgoingPageLinks` (see Types.tsx)
    const fullPageData = { ...pageData, outgoingPageLinks: pageLinksByPageId };

    // Set the current page with the full data which includes outgoingPageLinks
    setCurrentPage(fullPageData);
    } catch (error) {
        // If error doing this, set fallback page from story.pages
        console.error('Error navigating to page:', error);

        const fallbackPage = story.pages.find(p => p.pageId === nextPageId);
        console.log('Error fetching page, fallback page is:', fallbackPage);
        if (fallbackPage) {
            setCurrentPage({
                ...fallbackPage,
                outgoingPageLinks: []
            });
        }
    }
}, [story, setCurrentPage]);

  const resetStory = useCallback(async () => {
    if (!story) return;

    //TODO: I am assuming story has a pages array and we start at pageNumber 1, but in case of errors do something else??
    const startingPage = story.pages.find(p => p.pageNumber === 1) || story.pages[0];
  
    if (startingPage) {
        try {
            // Fetch the page links for the starting page
            const startingPageLinks = await pagesApi.getPageLinks(startingPage.pageId);

            // Same as above, but set the starting page with page links
            setCurrentPage({
                ...startingPage,
                outgoingPageLinks: startingPageLinks
            });
        } catch (error) {
            console.error('Error resetting story:', error);
            // Fallback page again
            setCurrentPage({
                ...startingPage,
                outgoingPageLinks: []
            });
        }
    }

}, [story, setCurrentPage])

  return (
    {handleStoryChoice, resetStory}
  )
}
