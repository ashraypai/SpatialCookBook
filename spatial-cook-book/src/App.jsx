import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import RecipeDetail from './pages/RecipeDetail'

function App() {
  return (
    <Router>
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App