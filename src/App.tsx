import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbarComponent/Navbar'
import StorySelectionPage from './pages/StorySelectionPage'
import './App.css'

function App() {

  return (
    <Router>
      <Navbar />
      <main className="main">
        <Routes>
          <Route path="/" element={<StorySelectionPage />} />
          <Route path="/about" element={<div>About Page</div>} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
