import { useEffect, useState } from 'react'
import StoryCard from '../StoryCard/StoryCard'
import './StorySelection.css'
import type { Story } from '../../services/api/Types'
import { storiesApi } from '../../services/api/StoryApi'

const StorySelection = () => {

  // set stories
  const [stories, setStories] = useState<Story[]>([])

  useEffect(() => {
    const fetchStories = async () => {
      const stories = await storiesApi.getAllStories();
      setStories(stories);
    };

    fetchStories();
  }, []);



  return (
    <div className='story-container'>
        {/* Page heading */}
        <div className="title">
            <h1>Vælg en historie at læse</h1>
        </div>

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