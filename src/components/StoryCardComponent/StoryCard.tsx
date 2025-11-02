import './StoryCard.css'

const StoryCard = () => {
  return (
    <div className="story-card">
      <div className="story-title">
        <h2>Story Title</h2>
      </div>
      <div className="img"><p>Image</p></div>
      <div className="description"><p>Description</p></div>
    </div>
  )
}

export default StoryCard