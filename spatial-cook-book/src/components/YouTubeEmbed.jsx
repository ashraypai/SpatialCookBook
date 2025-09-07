const YouTubeEmbed = ({ videoId }) => {
  if (!videoId) {
    return (
      <div style={{
        width: '100%',
        height: '100%',
        background: '#000',
        borderRadius: '15px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '1.2rem'
      }}>
        <div>🎥 Recipe Video<br /><small>(No video available)</small></div>
      </div>
    )
  }

  return (
    <div style={{
      width: '100%',
      height: '100%',
      borderRadius: '15px',
      overflow: 'hidden'
    }}>
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
        title="Recipe Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          borderRadius: '15px'
        }}
      />
    </div>
  )
}

export default YouTubeEmbed