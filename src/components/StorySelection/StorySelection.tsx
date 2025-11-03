import StoryCard from '../StoryCard/StoryCard'
import './StorySelection.css'

const StorySelection = () => {
  return (
    <div className='story-container'>
        {/* Page heading */}
        <div className="title">
            <h1>Vælg en historie at læse</h1>
        </div>

        {/* Story cards */}
        <div className="story-cards">
            <StoryCard />
            <StoryCard />
            <StoryCard />
            <StoryCard />
        </div>
    </div>
  )
}

export default StorySelection