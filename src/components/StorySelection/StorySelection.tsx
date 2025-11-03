import { useEffect, useState } from 'react'
import StoryCard from '../StoryCard/StoryCard'
import './StorySelection.css'
import type { Story } from '../../services/api/Types'
import { storiesApi } from '../../services/api/StoryApi'

const StorySelection = () => {

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
                    key={story.id}
                    title={story.title}
                    description={story.description}
                    imageUrl={story.imgUrl}
                />
            ))}
        </div>
    </div>
  )
}

export default StorySelection