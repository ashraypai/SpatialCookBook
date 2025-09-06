import { useState, useEffect, useRef } from 'react'

export const useTimer = () => {
  const [activeTimers, setActiveTimers] = useState({})
  const intervalsRef = useRef({})

  const startTimer = (id, duration, label) => {
    if (activeTimers[id]) {
      stopTimer(id)
    }

    setActiveTimers(prev => ({
      ...prev,
      [id]: {
        remaining: duration * 60,
        duration: duration * 60,
        label,
        isActive: true
      }
    }))

    intervalsRef.current[id] = setInterval(() => {
      setActiveTimers(prev => {
        const timer = prev[id]
        if (!timer || timer.remaining <= 0) {
          clearInterval(intervalsRef.current[id])
          delete intervalsRef.current[id]
          
          // Timer complete notification
          if (typeof window !== 'undefined' && 'Notification' in window) {
            new Notification(`Timer Complete: ${label}`)
          }
          alert(`Timer complete: ${label}`)
          
          return {
            ...prev,
            [id]: { ...timer, isActive: false, remaining: 0 }
          }
        }
        
        return {
          ...prev,
          [id]: { ...timer, remaining: timer.remaining - 1 }
        }
      })
    }, 1000)
  }

  const stopTimer = (id) => {
    if (intervalsRef.current[id]) {
      clearInterval(intervalsRef.current[id])
      delete intervalsRef.current[id]
    }
    
    setActiveTimers(prev => {
      const newTimers = { ...prev }
      delete newTimers[id]
      return newTimers
    })
  }

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  useEffect(() => {
    // Request notification permission
    if (typeof window !== 'undefined' && 'Notification' in window) {
      Notification.requestPermission()
    }

    return () => {
      Object.keys(intervalsRef.current).forEach(id => {
        clearInterval(intervalsRef.current[id])
      })
    }
  }, [])

  return {
    activeTimers,
    startTimer,
    stopTimer,
    formatTime
  }
}