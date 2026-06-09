import { useState, useEffect } from 'react'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const updateHoverState = (e) => {
      const target = e.target
      const isClickable = target.closest('a, button, .btn-primary, .btn-secondary, .nav-link, .project-card, .feature-card, .service-card, .footer-link, .logo, .mobile-nav-link, .theme-toggle-btn, .project-btn, .cta-btn-primary, .cta-btn-secondary')
      setIsHovering(!!isClickable)
    }

    window.addEventListener('mousemove', updatePosition)
    window.addEventListener('mouseover', updateHoverState)
    
    // Loading state simulation (can be triggered by navigation)
    const handleStart = () => setIsLoading(true)
    const handleStop = () => setTimeout(() => setIsLoading(false), 500)
    
    // Magnetic effect for buttons
const magneticElements = document.querySelectorAll('.btn-primary, .btn-secondary, .nav-btn, .project-btn')
magneticElements.forEach(el => {
  el.addEventListener('mousemove', (e) => {
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`
  })
  el.addEventListener('mouseleave', () => {
    el.style.transform = 'translate(0px, 0px)'
  })
})

    window.addEventListener('beforeunload', handleStart)
    window.addEventListener('load', handleStop)
    
    return () => {
      window.removeEventListener('mousemove', updatePosition)
      window.removeEventListener('mouseover', updateHoverState)
      window.removeEventListener('beforeunload', handleStart)
      window.removeEventListener('load', handleStop)
    }
  }, [])

  return (
    <>
      <div 
        className={`custom-cursor ${isHovering ? 'hover' : ''} ${isLoading ? 'loading' : ''}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div 
        className={`custom-cursor-dot ${isHovering ? 'hover' : ''}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
    </>
  )
}