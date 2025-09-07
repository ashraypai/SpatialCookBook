import { useParams } from 'react-router-dom'
import { getRecipeById } from '../data/recipes'
import TimersList from '../components/TimersList'

export default function TimersWindow() {
  const { id } = useParams()
  const recipe = getRecipeById(id)

  if (!recipe) {
    return (
      <div style={{ 
        padding: '20px', 
        textAlign: 'center',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      }}>
        <h2 style={{ color: 'white' }}>Recipe not found</h2>
      </div>
    )
  }

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      margin: '0',
      padding: '0',
      boxSizing: 'border-box',
      overflowY: 'auto',
      overflowX: 'hidden'
    }}>
      <div style={{
        width: '100%',
        padding: '15px',
        display: 'flex',
        justifyContent: 'center',
        minHeight: '100%',
        boxSizing: 'border-box'
      }}>
        <div style={{
          width: '100%',
          maxWidth: '400px'
        }}>
          <TimersList instructions={recipe.instructions} />
        </div>
      </div>
    </div>
  )
}