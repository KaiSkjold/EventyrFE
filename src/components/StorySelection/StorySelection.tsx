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
            <StoryCard
                title="Story Title 1"
                description="A classic fairy tale about a clever tailor who outsmarts giants and wins a kingdom."
                imageUrl="https://picsum.photos/200/100"
            />
            <StoryCard
                title="Story Title 2"
                description="A classic fairy tale about a clever tailor who outsmarts giants and wins a kingdom."
                imageUrl="https://picsum.photos/200/100"
            />
            <StoryCard
                title="Story Title 3"
                description="A classic fairy tale about a clever tailor who outsmarts giants and wins a kingdom."
                imageUrl="https://picsum.photos/200/100"
            />
        </div>
    </div>
  )
}

export default StorySelection