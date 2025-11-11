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
        {theme === 'dark' ? (
          <span>
            <img className='top-logo' src="src/assets/svg/LogoBogLight.svg"/>
          </span>
        ) : (
          <span>
            <img className='top-logo' src="src/assets/svg/LogoBogDark.svg"/>
          </span>
        )}

  
        <h1 className="story-selection-title">Vælg en historie at læse</h1>


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