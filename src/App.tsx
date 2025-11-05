import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import StorySelectionPage from './pages/StorySelectionPage'
import StoryPage from './pages/StoryPage'
import SettingsPage from './pages/SettingsPage'

function App() {

  return (
    <Router>
      <Navbar />
      <main className="main">
        <Routes>
          <Route path="/" element={<StorySelectionPage />} />
          <Route path="/indstillinger" element={<SettingsPage />} />
          <Route path="/story/:storyId" element={<StoryPage />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
