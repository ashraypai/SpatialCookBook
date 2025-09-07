import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import RecipeDetail from './pages/RecipeDetail'
import IngredientsWindow from './pages/IngredientsWindow'
import InstructionsWindow from './pages/InstructionsWindow'
import TimersWindow from './pages/TimersWindow'
import VideoWindow from './pages/VideoWindow'

function App() {
  return (
    <Router>
      <Routes>
        {/* Main routes with header */}
        <Route path="/" element={
          <div className="container">
            <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h1 style={{ 
                color: 'white', 
                fontSize: '3rem', 
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)' 
              }}>
                🍳 SpatialChef
              </h1>
            </header>
            <Home />
          </div>
        } />
        <Route path="/recipe/:id" element={
          <div className="container">
            <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h1 style={{ 
                color: 'white', 
                fontSize: '3rem', 
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)' 
              }}>
                🍳 SpatialChef
              </h1>
            </header>
            <RecipeDetail />
          </div>
        } />
        
        {/* Popup routes without header */}
        <Route path="/ingredients/:id" element={<IngredientsWindow />} />
        <Route path="/instructions/:id" element={<InstructionsWindow />} />
        <Route path="/timers/:id" element={<TimersWindow />} />
        <Route path="/video/:id" element={<VideoWindow />} />
      </Routes>
    </Router>
  )
}

export default App