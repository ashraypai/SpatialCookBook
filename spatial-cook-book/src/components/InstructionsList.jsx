import { useState } from 'react'
import { motion } from 'framer-motion'

const InstructionsList = ({ instructions }) => {
  const [checkedSteps, setCheckedSteps] = useState({})

  const handleStepCheck = (index) => {
    setCheckedSteps(prev => ({
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
      minHeight: '200px'
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
        👨‍🍳 Instructions
      </h3>
      <div style={{
        padding: '15px 20px 20px 20px',
        boxSizing: 'border-box'
      }}>
        {instructions.map((instruction, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ x: 5 }}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              marginBottom: '15px',
              padding: '15px',
              background: '#f8f9fa',
              borderRadius: '8px',
              transition: 'all 0.2s ease'
            }}
          >
            <input
              type="checkbox"
              id={`instruction-${index}`}
              checked={checkedSteps[index] || false}
              onChange={() => handleStepCheck(index)}
              style={{ 
                marginRight: '15px', 
                transform: 'scale(1.2)', 
                flexShrink: 0,
                marginTop: '2px'
              }}
            />
            <label
              htmlFor={`instruction-${index}`}
              style={{
                textDecoration: checkedSteps[index] ? 'line-through' : 'none',
                opacity: checkedSteps[index] ? 0.6 : 1,
                cursor: 'pointer',
                flex: 1,
                wordWrap: 'break-word',
                overflowWrap: 'break-word',
                lineHeight: '1.5',
                fontSize: '1rem'
              }}
            >
              <strong>Step {index + 1}:</strong> {instruction}
            </label>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default InstructionsList