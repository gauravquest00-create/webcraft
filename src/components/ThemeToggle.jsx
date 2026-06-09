import { useState, useEffect } from 'react'

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    return savedTheme || 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
      {theme === 'light' ? (
        <>
          <span className="theme-toggle-icon dark-icon"></span>
          <span style={{ fontSize: '14px' }}>Dark</span>
        </>
      ) : (
        <>
          <span className="theme-toggle-icon light-icon"></span>
          <span style={{ fontSize: '14px' }}>Light</span>
        </>
      )}
    </button>
  )
}