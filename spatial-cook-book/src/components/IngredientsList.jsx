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
    <div className="popup" style={{
      background: 'white',
      borderRadius: '15px',
      padding: '20px',
      boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
      flex: 1,
      maxHeight: '100%',
      overflowY: 'auto'
    }}>
      <h3 style={{
        marginBottom: '15px',
        color: '#333',
        borderBottom: '2px solid #667eea',
        paddingBottom: '10px'
      }}>
        📝 Ingredients
      </h3>
      <div>
        {ingredients.map((ingredient, index) => (
          <motion.div
            key={index}
            whileHover={{ x: 5 }}
            style={{
              display: 'flex',
              alignItems: 'center',
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
              style={{ marginRight: '10px', transform: 'scale(1.2)' }}
            />
            <label
              htmlFor={`ingredient-${index}`}
              style={{
                textDecoration: checkedItems[index] ? 'line-through' : 'none',
                opacity: checkedItems[index] ? 0.6 : 1
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