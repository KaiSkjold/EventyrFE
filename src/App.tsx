import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbarComponent/Navbar'

function App() {

  return (
    <Router>
      <Navbar />
      <main className="main">
        <Routes>
          <Route path="/" element={<div>Story Selection</div>} />
          <Route path="/about" element={<div>About Page</div>} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
