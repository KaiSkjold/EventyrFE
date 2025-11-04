import { useEffect, useState } from "react";
import type { Page, Story } from "../services/api/Types";
import { storiesApi } from "../services/api/StoryApi";
import pagesApi from "../services/api/PagesApi";



export function useStoryAndFirstPage(storyId: string) {
    const [story, setStory] = useState<Story | null>(null);
    const [currentPage, setCurrentPage] = useState<Page | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!storyId) {
            setError('No story ID');
            setLoading(false);
            return;
        }

        const fetchStory = async () => {
            try {
                setLoading(true);
                setError(null);

                const storyData = await storiesApi.getStoryById(storyId);
                    console.log('[useStoryAndFirstPage] fetched storyData:', storyData);
                if (!storyData) {
                    setError('Failed to fetch story');
                    return;
                }

                setStory(storyData);
                    console.log('[useStoryAndFirstPage] story set, searching for first page');

                // Determine a reasonable starting page:
                // Prefer pageNumber === 1, otherwise pick the page with the smallest pageNumber,
                // otherwise fallback to the first element in the pages array.
                let startingPage: Page | undefined;
                if (Array.isArray(storyData.pages) && storyData.pages.length > 0) {
                    startingPage = storyData.pages.find(p => p.pageNumber === 1) ||
                                   storyData.pages.reduce((min, p) => (p.pageNumber < min.pageNumber ? p : min), storyData.pages[0]);
                }

                if (!startingPage) {
                    // No pages available on the story — set an error and stop.
                    setError('No pages available for this story');
                    setLoading(false);
                    return;
                }

                // Now fetch pageLinks for the chosen starting page and attach them
                try {
                    const outgoingLinks = await pagesApi.getPageLinks(startingPage.pageId);
                    console.log('[useStoryAndFirstPage] outgoing links for starting page:', outgoingLinks);

                    const startingPageWithLinks = { ...startingPage, outgoingPageLinks: outgoingLinks };
                    console.log('[useStoryAndFirstPage] setting currentPage to startingPageWithLinks', startingPageWithLinks);
                    setCurrentPage(startingPageWithLinks);
                } catch (err) {
                    console.error('Failed to fetch page links:', err);
                    // Fallback to page without links (will show end screen)
                    setCurrentPage({ ...startingPage, outgoingPageLinks: [] });
                }

            }
            catch (error) {
                setError(`Failed to load story : ${error}`);
            } finally {
                setLoading(false);
            }
        };

        fetchStory();
    }, [storyId]);

    return { story, currentPage, setCurrentPage, loading, error };
}