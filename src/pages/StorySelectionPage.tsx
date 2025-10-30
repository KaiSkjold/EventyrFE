import StorySelection from "../components/storySelectionComponent/StorySelection"

const StorySelectionPage = () => {
  return (
    <div>
        {/* Page heading */}
        <div className="title">
            <h1>Vælg en historie at læse</h1>
        </div>

        {/* Story cards */}
        <div className="storyCards">
            <StorySelection />
        </div>
    </div>
  )
}

export default StorySelectionPage