import { useState } from 'react';
import { Bookmark } from '../Svg/Bookmark';
import Button from '../ui/Button/Button';
import './PageCard.css';
import { Link, useParams } from 'react-router-dom';
import useBackgroundImage from '../../hooks/useBackgroundImage';
import { useStoryNavigation } from '../../hooks/useStoryNavigation';
import { useStoryAndFirstPage } from '../../hooks/useStoryAndFirstPage';
import { useStoryPageStates } from '../../hooks/useStoryPageState';
import { Cogwheel } from '../Svg/Cogwheel';
import SettingsModal from '../SettingsModal/SettingsModal';
import ArrowNarrowLeft from '../Svg/ArrowNarrowLeft';
import ArrowNarrowRight from '../Svg/ArrowNarrowRight';

const StoryPage = () => {
  // Get storyId from URL parameters
  const { storyId } = useParams<{ storyId: string }>();

  // Use the hook to get story data and current page
  const { story, currentPage, setCurrentPage, loading, error } = useStoryAndFirstPage(storyId || '');

  // Debug: log page / story state to help diagnose invisible page content
  // We'll print these every render — remove after debugging.
  console.log('[PageCard] render - story, currentPage, loading, error:', { story, currentPage, loading, error });

  // Use navigation hook for choice handling and story reset
  const { handleStoryChoice, resetStory } = useStoryNavigation(story, setCurrentPage);

  // Use state hook to determine current state
  const pageState = useStoryPageStates(story, currentPage, loading, error);

  // bookmark state
  const [isBookmarked, setIsBookmarked] = useState<'filled' | 'outlined'>('outlined');
  const handleBookmarkClick = () => {
    setIsBookmarked(isBookmarked === 'filled' ? 'outlined' : 'filled')
  };

  // settings modal state
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // set background image from cover image of story
  useBackgroundImage(story?.imgUrl);

  // Render loading, error, or page content based on state as per hook in a switch case
  switch (pageState.type) {
    // Loading state
    case 'loading':
      return (
        <div className="story-page-loading">
          <h1>Loading...</h1>
          <Link to="/">
          <ArrowNarrowLeft width={20} height={20} strokeColor='var(--text-color)'/>
            <p>Tilbage til forsiden: Læs en historie</p>
          </Link>
        </div>
      );

    // Error state TODO: improve error handling by error component?
    case 'error':
      return <div>Error</div>;

    // Reading story page
    case 'reading':
      return (
        <div className="story-page-container">
          {/* Story header with back link and story title */}
            <Link to="/" className="story-page-back-link">
              <ArrowNarrowLeft width={20} height={20} strokeColor='var(--text-color)'/>
              <p>Vælg en anden historie at læse?</p>
            </Link>
          <div className="story-page-header">
            <h3 className="story-page-story-title">{pageState.story.title}</h3>
            <Button borderStyle='no-border' onClick={() => setIsSettingsOpen(true)}><Cogwheel width={20} height={20} strokeColor='var(--text-color)'/></Button>
          </div>

          {/* Page content */}
          <div className="page">
            <span className="page-bookmark" onClick={handleBookmarkClick}><Bookmark width={30} height={30} bookmarkType={isBookmarked}/></span>
            <div className="page-reading">
              <div className="page-title"><h3>{pageState.currentPage?.title}</h3></div>
              <div 
                className="page-image" 
                style={{ backgroundImage: `url(${pageState.currentPage?.imgUrl})` }} 
                />
              <div className="page-description"><p>
                {pageState.currentPage?.description}
              </p></div>
            </div>
          </div>

          {/* Choice text container */}
          {pageState.currentPage?.outgoingPageLinks?.length > 0 ? (
          <div className="page-choice-text-container">
            <div className="page-actions">
              {pageState.currentPage?.outgoingPageLinks?.map((link) =>
                <Button
                  key={link.pageLinkId}
                  borderStyle='with-border'
                  onClick={() => handleStoryChoice(link.toPageId)}
                  >
                    {link.choiceText}
                </Button>
              )}
            </div>
          </div>
          ) : (
              <div>
                <h3>Dit eventyr er slut for denne gang!</h3>
                <div className="story-page-end-choices-footer">
                  <Button
                    borderStyle='no-border'
                    onClick={resetStory}
                  >
                    <ArrowNarrowLeft width={20} height={20} strokeColor='var(--text-color)'/>
                    <p>Vil du læse den igen?</p>
                  </Button>
                  <Button
                    borderStyle='no-border'
                    onClick={() => window.location.href = '/'}
                  >
                    <p>Vælg en anden historie at læse</p>
                    <ArrowNarrowRight width={20} height={20} strokeColor='var(--text-color)'/>
                  </Button>
                </div>
              </div>
          )}
          {/* Settings modal */}
          <SettingsModal isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
        </div>
      );
        
      default:
        return null;
    }
};

export default StoryPage;