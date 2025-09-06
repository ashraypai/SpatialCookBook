import { useState } from 'react'
import { motion } from 'framer-motion'

const RecipeCard = ({ recipe, index }) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleRecipeClick = () => {
    const recipeUrl = `/recipe/${recipe.id}`
    window.open(recipeUrl, '_blank', 'width=1200,height=800,scrollbars=yes,resizable=yes')
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, type: "spring" }}
    >
      <motion.div
        className="recipe-card"
        style={{
          background: 'white',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: isHovered ? '0 20px 50px rgba(0,0,0,0.2)' : '0 10px 30px rgba(0,0,0,0.1)',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
          transform: isHovered ? 'translateY(-10px) rotateX(5deg) rotateY(5deg)' : 'none',
          transformStyle: 'preserve-3d'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleRecipeClick}
        whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
        whileTap={{ scale: 0.95 }}
      >
        <img
          src={recipe.image}
          alt={recipe.title}
          style={{
            width: '100%',
            height: '200px',
            objectFit: 'cover',
            objectPosition: 'center'
          }}
        />
        <div style={{ padding: '20px' }}>
          <h3 style={{ 
            fontSize: '1.5rem', 
            fontWeight: 'bold', 
            marginBottom: '10px',
            color: '#333'
          }}>
            {recipe.title}
          </h3>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            color: '#666',
            fontSize: '0.9rem'
          }}>
            <span>⏱️ {recipe.cookTime}</span>
            <span>📊 {recipe.difficulty}</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default RecipeCard