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
    <div className="popup" style={{
      background: 'white',
      borderRadius: '15px',
      padding: '20px',
      boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
      flex: 1,
      maxHeight: '50%',
      overflowY: 'auto'
    }}>
      <h3 style={{
        marginBottom: '15px',
        color: '#333',
        borderBottom: '2px solid #667eea',
        paddingBottom: '10px'
      }}>
        👨‍🍳 Instructions
      </h3>
      <div>
        {instructions.map((instruction, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
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
              id={`instruction-${index}`}
              checked={checkedSteps[index] || false}
              onChange={() => handleStepCheck(index)}
              style={{ marginRight: '10px', transform: 'scale(1.2)' }}
            />
            <label
              htmlFor={`instruction-${index}`}
              style={{
                textDecoration: checkedSteps[index] ? 'line-through' : 'none',
                opacity: checkedSteps[index] ? 0.6 : 1
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