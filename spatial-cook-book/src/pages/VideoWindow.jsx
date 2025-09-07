import { useParams } from 'react-router-dom'
import { getRecipeById } from '../data/recipes'
import YouTubeEmbed from '../components/YouTubeEmbed'

export default function VideoWindow() {
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
          maxWidth: '100%'
        }}>
          <div style={{
            width: '100%',
            background: 'white',
            borderRadius: '15px',
            padding: '20px',
            boxSizing: 'border-box',
            boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
            minHeight: '400px'
          }}>
            <h3 style={{
              marginBottom: '15px',
              color: '#333',
              borderBottom: '2px solid #667eea',
              paddingBottom: '10px',
              textAlign: 'center'
            }}>
              🎥 {recipe.title}
            </h3>
            <div style={{ 
              height: '350px',
              minHeight: '350px'
            }}>
              <YouTubeEmbed videoId={recipe.youtubeId} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}