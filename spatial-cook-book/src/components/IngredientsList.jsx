import { useState } from 'react'
import { motion } from 'framer-motion'

const IngredientsList = ({ ingredients }) => {
  const [checkedItems, setCheckedItems] = useState({})

  const handleCheck = (index) => {
    setCheckedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  return (
    <div style={{
      background: 'white',
      borderRadius: '15px',
      boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
      width: '100%',
      boxSizing: 'border-box',
      minHeight: '200px' // Minimum height to ensure it's visible
    }}>
      <h3 style={{
        margin: '0',
        padding: '20px',
        color: '#333',
        borderBottom: '2px solid #667eea',
        background: 'white',
        borderRadius: '15px 15px 0 0',
        textAlign: 'center'
      }}>
        📝 Ingredients
      </h3>
      <div style={{
        padding: '15px 20px 20px 20px',
        boxSizing: 'border-box'
      }}>
        {ingredients.map((ingredient, index) => (
          <motion.div
            key={index}
            whileHover={{ x: 5 }}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              marginBottom: '10px',
              padding: '10px',
              background: '#f8f9fa',
              borderRadius: '8px',
              transition: 'all 0.2s ease'
            }}
          >
            <input
              type="checkbox"
              id={`ingredient-${index}`}
              checked={checkedItems[index] || false}
              onChange={() => handleCheck(index)}
              style={{ 
                marginRight: '10px', 
                transform: 'scale(1.2)', 
                flexShrink: 0,
                marginTop: '2px'
              }}
            />
            <label
              htmlFor={`ingredient-${index}`}
              style={{
                textDecoration: checkedItems[index] ? 'line-through' : 'none',
                opacity: checkedItems[index] ? 0.6 : 1,
                cursor: 'pointer',
                flex: 1,
                wordWrap: 'break-word',
                overflowWrap: 'break-word',
                lineHeight: '1.4'
              }}
            >
              {ingredient}
            </label>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default IngredientsList