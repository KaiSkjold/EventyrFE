import './App.css'
import NavbarComponent from './components/NavbarComponent'
import StorySelectionComponent from './components/StorySelectionComponent'

function App() {

  return (
    <>
    <NavbarComponent />
    <div className="main">
      <StorySelectionComponent />
    </div>
    </>
  )
}

export default App
