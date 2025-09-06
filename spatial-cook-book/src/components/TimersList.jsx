import { motion } from 'framer-motion'
import { useTimer } from '../hooks/useTimer'
import { extractTimers } from '../utils/extractTimers'

const TimersList = ({ instructions }) => {
  const { activeTimers, startTimer, stopTimer, formatTime } = useTimer()
  const timers = extractTimers(instructions)

  const handleTimerClick = (timer, index) => {
    const timerId = `timer-${index}`
    
    if (activeTimers[timerId]?.isActive) {
      stopTimer(timerId)
    } else {
      startTimer(timerId, timer.duration, timer.label)
    }
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
        ⏰ Smart Timers
      </h3>
      <div>
        {timers.map((timer, index) => {
          const timerId = `timer-${index}`
          const activeTimer = activeTimers[timerId]
          const isActive = activeTimer?.isActive
          const isComplete = activeTimer && !activeTimer.isActive && activeTimer.remaining === 0

          return (
            <motion.div
              key={index}
              onClick={() => handleTimerClick(timer, index)}
              whileHover={{ y: -3, rotateX: 10 }}
              whileTap={{ scale: 0.95 }}
              animate={isActive ? { scale: [1, 1.05, 1] } : {}}
              transition={{
                scale: { repeat: Infinity, duration: 1 },
                hover: { type: "spring", stiffness: 400 }
              }}
              style={{
                background: isComplete 
                  ? 'linear-gradient(135deg, #00b894, #00cec9)'
                  : isActive 
                  ? 'linear-gradient(135deg, #ff6b6b, #ee5a24)'
                  : 'linear-gradient(135deg, #667eea, #764ba2)',
                color: 'white',
                padding: '15px',
                marginBottom: '10px',
                borderRadius: '10px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                transformStyle: 'preserve-3d'
              }}
            >
              <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>
                Step {timer.stepIndex}: {timer.label}
              </div>
              <div style={{ fontSize: '1.2rem', opacity: 0.9 }}>
                {isComplete 
                  ? 'DONE! ✅' 
                  : isActive 
                  ? formatTime(activeTimer.remaining)
                  : timer.originalTime
                }
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default TimersList