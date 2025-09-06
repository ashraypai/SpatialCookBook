export const extractTimers = (instructions) => {
  const timers = []
  
  instructions.forEach((instruction, index) => {
    const timeRegex = /(\d+)\s*(minutes?|mins?|seconds?|secs?|hours?|hrs?)/gi
    const matches = instruction.match(timeRegex)
    
    if (matches) {
      matches.forEach(match => {
        const timeValue = match.match(/\d+/)[0]
        const unit = match.match(/(minutes?|mins?|seconds?|secs?|hours?|hrs?)/i)[0]
        
        let duration
        if (unit.toLowerCase().includes('hour') || unit.toLowerCase().includes('hr')) {
          duration = parseInt(timeValue) * 60
        } else if (unit.toLowerCase().includes('second') || unit.toLowerCase().includes('sec')) {
          duration = Math.ceil(parseInt(timeValue) / 60)
        } else {
          duration = parseInt(timeValue)
        }
        
        const label = instruction.substring(0, 30) + (instruction.length > 30 ? '...' : '')
        timers.push({
          label,
          duration,
          originalTime: match,
          stepIndex: index + 1
        })
      })
    }
  })
  
 return timers
}