import StoryCard from '../StoryCardComponent/StoryCard'
import './StorySelection.css'

const StorySelection = () => {
  return (
    <div className='storyContainer'>
        {/* Page heading */}
        <div className="title">
            <h1>Vælg en historie at læse</h1>
        </div>

        {/* Story cards */}
        <div className="storyCards">
            <StoryCard />
            <StoryCard />
            <StoryCard />
            <StoryCard />
        </div>
    </div>
  )
}

export default StorySelection