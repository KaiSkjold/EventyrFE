import { useEffect, useState } from 'react'
import StoryCard from '../StoryCard/StoryCard'
import './StorySelection.css'
import type { Story } from '../../services/api/Types'
import { storiesApi } from '../../services/api/StoryApi'
import { useTheme } from '../../hooks/useTheme'

const StorySelection = () => {

  // set stories
  const [stories, setStories] = useState<Story[]>([])

  const { theme } = useTheme()

  useEffect(() => {
    const fetchStories = async () => {
      const stories = await storiesApi.getAllStories();
      setStories(stories);
    };

    fetchStories();
  }, []);



  return (
    <div className='story-container'>
        {/* Page heading TODO should i keep or use SVG??? */}
        {/* <div className="story-selection-title">
            <h2>Vælg en historie at læse</h2>
        </div> */}
        {theme === 'dark' ? (
          <span>
            <img className='top-logo' src="src/assets/svg/Top2.svg"/>
          </span>
        ) : (
          <span>
            <img className='top-logo' src="src/assets/svg/Top.svg"/>
          </span>
        )}

        {/* Story cards */}
        <div className="story-cards">
            {stories.map((story) => (
        <StoryCard
          key={story.storyId}
          title={story.title}
          description={story.description}
          imgUrl={story.imgUrl}
          storyId={story.storyId}
        />
            ))}
        </div>
    </div>
  )
}

export default StorySelection