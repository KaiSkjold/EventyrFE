import './App.css'
import Navbar from './components/navbarComponent/Navbar'
import StorySelection from './components/storySelectionComponent/StorySelection'

function App() {

  return (
    <>
    <Navbar />
    <div className="main">
      <StorySelection />
    </div>
    </>
  )
}

export default App
