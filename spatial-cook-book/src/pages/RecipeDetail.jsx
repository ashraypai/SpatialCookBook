import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getRecipeById } from '../data/recipes'
import IngredientsList from '../components/IngredientsList'
import InstructionsList from '../components/InstructionsList'
import TimersList from '../components/TimersList'
import YouTubeEmbed from '../components/YouTubeEmbed'


export default function RecipeDetail() {
  const { id } = useParams()
  const recipe = getRecipeById(id)

  if (!recipe) {
    return (
      <div style={{ textAlign: 'center', color: 'white', padding: '50px' }}>
        <h2>Recipe not found</h2>
        <button 
          onClick={() => window.close()}
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            background: '#667eea',
            color: 'white',
            border: 'none',
            borderRadius: '25px',
            cursor: 'pointer'
          }}
        >
          ← Close Window
        </button>
      </div>
    )
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(0,0,0,0.8)',
        zIndex: 1000,
        padding: '20px'
      }}
    >
      <button 
        onClick={() => window.close()}
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          background: '#ff6b6b',
          color: 'white',
          border: 'none',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          fontSize: '1.2rem',
          cursor: 'pointer',
          zIndex: 1001
        }}
      >
        ×
      </button>

      <div style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        gap: '20px'
      }}>
        {/* Ingredients Popup */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <IngredientsList ingredients={recipe.ingredients} />
        </motion.div>

        {/* Center Container */}
        <div style={{ flex: 2, display: 'flex', flexDirection: 'column', gap: '20px' ,
          height: '100%',
          minWidth: 0
        }}>
          {/* Video Section */}
          <motion.div 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{
              flex: '1 1 50%',
              minHeight: '300px'
            }}
          >
            <YouTubeEmbed videoId={recipe.youtubeId} />
          </motion.div>

          {/* Instructions Popup */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <InstructionsList instructions={recipe.instructions} />
          </motion.div>
        </div>

        {/* Timers Popup */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <TimersList instructions={recipe.instructions} />
        </motion.div>
      </div>
    </motion.div>
  )
}