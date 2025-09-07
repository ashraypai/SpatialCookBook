import { useState } from 'react'
import { motion } from 'framer-motion'

// Improved layout configuration
const LAYOUT_CONFIG = {
  TARGET_RESOLUTION: { width: 1920, height: 1080 },
  
  // Account for browser chrome and taskbars
  CHROME_OFFSET: { top: 80, left: 0, right: 0, bottom: 80 },
  
  WINDOWS: {
    ingredients: {
      widthPercent: 0.22,
      heightPercent: 0.85,
      xPercent: 0.02,
      yPercent: 0.05
    },
    video: {
      widthPercent: 0.48,
      heightPercent: 0.28,    // Reduced to ensure space for instructions
      xPercent: 0.26,
      yPercent: 0.05
    },
    instructions: {
      widthPercent: 0.48,
      heightPercent: 0.52,    // Will be calculated dynamically
      xPercent: 0.26,
      yPercent: 0.38          // Will be calculated dynamically
    },
    timers: {
      widthPercent: 0.22,
      heightPercent: 0.85,
      xPercent: 0.76,
      yPercent: 0.05
    }
  }
}

const RecipeCard = ({ recipe, index }) => {
  const [isHovered, setIsHovered] = useState(false)

  const calculateAllWindowDimensions = () => {
    const { TARGET_RESOLUTION, CHROME_OFFSET, WINDOWS } = LAYOUT_CONFIG
    
    // Calculate usable screen space
    const usableWidth = TARGET_RESOLUTION.width - CHROME_OFFSET.left - CHROME_OFFSET.right
    const usableHeight = TARGET_RESOLUTION.height - CHROME_OFFSET.top - CHROME_OFFSET.bottom
    
    // Calculate ingredients and timers (these are fixed)
    const ingredients = {
      width: Math.round(usableWidth * WINDOWS.ingredients.widthPercent),
      height: Math.round(usableHeight * WINDOWS.ingredients.heightPercent),
      left: Math.round((usableWidth * WINDOWS.ingredients.xPercent) + CHROME_OFFSET.left),
      top: Math.round((usableHeight * WINDOWS.ingredients.yPercent) + CHROME_OFFSET.top)
    }
    
    const timers = {
      width: Math.round(usableWidth * WINDOWS.timers.widthPercent),
      height: Math.round(usableHeight * WINDOWS.timers.heightPercent),
      left: Math.round((usableWidth * WINDOWS.timers.xPercent) + CHROME_OFFSET.left),
      top: Math.round((usableHeight * WINDOWS.timers.yPercent) + CHROME_OFFSET.top)
    }
    
    // Calculate video with optimal aspect ratio
    const videoWidth = Math.round(usableWidth * WINDOWS.video.widthPercent)
    const videoLeft = Math.round((usableWidth * WINDOWS.video.xPercent) + CHROME_OFFSET.left)
    const videoTop = Math.round((usableHeight * WINDOWS.video.yPercent) + CHROME_OFFSET.top)
    
    // Calculate video height for 16:9 aspect ratio, but cap it
    const idealVideoHeight = Math.round(videoWidth * (9/16)) + 80 // +80 for header/padding
    const maxVideoHeight = Math.round(usableHeight * 0.25) // Max 25% of screen height
    const videoHeight = Math.min(idealVideoHeight, maxVideoHeight)
    
    const video = {
      width: videoWidth,
      height: videoHeight,
      left: videoLeft,
      top: videoTop
    }
    
    // Calculate instructions to fill remaining space in center column
    const gap = 15 // Gap between video and instructions
    const instructionsTop = video.top + video.height + gap
    const instructionsLeft = videoLeft
    const instructionsWidth = videoWidth
    
    // Calculate available height for instructions
    const screenBottom = CHROME_OFFSET.top + usableHeight
    const availableHeight = screenBottom - instructionsTop - 20 // -20 for bottom margin
    
    const instructions = {
      width: instructionsWidth,
      height: Math.max(200, availableHeight), // Minimum 200px height
      left: instructionsLeft,
      top: instructionsTop
    }
    
    return { ingredients, video, instructions, timers }
  }

  const handleRecipeClick = () => {
    const recipeId = recipe.id
    const baseUrl = window.location.origin
    
    // Calculate all window dimensions
    const windows = calculateAllWindowDimensions()
    
    console.log('Window positions:', windows)
    console.log('Video bottom:', windows.video.top + windows.video.height)
    console.log('Instructions top:', windows.instructions.top)
    console.log('Gap between video and instructions:', windows.instructions.top - (windows.video.top + windows.video.height))
    
    // Open windows with staggered timing
    setTimeout(() => {
      window.open(
        `${baseUrl}/ingredients/${recipeId}`,
        'ingredients',
        `width=${windows.ingredients.width},height=${windows.ingredients.height},left=${windows.ingredients.left},top=${windows.ingredients.top},scrollbars=yes,resizable=yes,toolbar=no,menubar=no,location=no`
      )
    }, 0)
    
    setTimeout(() => {
      window.open(
        `${baseUrl}/video/${recipeId}`,
        'video',
        `width=${windows.video.width},height=${windows.video.height},left=${windows.video.left},top=${windows.video.top},scrollbars=yes,resizable=yes,toolbar=no,menubar=no,location=no`
      )
    }, 100)
    
    setTimeout(() => {
      window.open(
        `${baseUrl}/instructions/${recipeId}`,
        'instructions',
        `width=${windows.instructions.width},height=${windows.instructions.height},left=${windows.instructions.left},top=${windows.instructions.top},scrollbars=yes,resizable=yes,toolbar=no,menubar=no,location=no`
      )
    }, 200)
    
    setTimeout(() => {
      window.open(
        `${baseUrl}/timers/${recipeId}`,
        'timers',
        `width=${windows.timers.width},height=${windows.timers.height},left=${windows.timers.left},top=${windows.timers.top},scrollbars=yes,resizable=yes,toolbar=no,menubar=no,location=no`
      )
    }, 300)
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
          <div style={{
            marginTop: '10px',
            fontSize: '0.75rem',
            color: '#999',
            textAlign: 'center'
          }}>
            No-Overlap Layout: {LAYOUT_CONFIG.TARGET_RESOLUTION.width}x{LAYOUT_CONFIG.TARGET_RESOLUTION.height}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default RecipeCard