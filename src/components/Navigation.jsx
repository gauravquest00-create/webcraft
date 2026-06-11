// src/components/Navigation.jsx
import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './Navigation.css'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState(null)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const handleNavigation = (path) => {
    setIsMobileMenuOpen(false)
    navigate(path)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navLinks = [
    { name: 'Home', path: '/', icon: '' },
     { name: 'Services', path: '/services', icon: '' }, 
    { name: 'Project', path: '/project', icon: '' },
    { name: 'About', path: '/about', icon: '' },
    { name: 'Contact', path: '/contact', icon: '' }
  ]

  const isActive = (path) => location.pathname === path

  return (
    <>
      <nav className={`premium-navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
        {/* Animated Background */}
        <div className="premium-nav-bg-glow"></div>
        <div className="premium-nav-bg-grid"></div>
        
        <div className="premium-navbar-container">
          {/* Logo with 3D effect */}
          <button onClick={() => handleNavigation('/')} className="premium-logo">
            <div className="logo-3d-wrapper">
              <img src="/logo.png" alt="Webcraft" className="logo-img" />
              <div className="logo-glow-ring"></div>
            </div>
            {/* <span className="logo-text">Webcraft</span> */}
          </button>

          {/* Desktop Menu with 3D hover effects */}
          <div className="premium-nav-menu">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavigation(link.path)}
                className={`premium-nav-link ${isActive(link.path) ? 'active' : ''}`}
                onMouseEnter={() => setActiveLink(link.name)}
                onMouseLeave={() => setActiveLink(null)}
              >
                <span className="nav-icon">{link.icon}</span>
                <span className="nav-text">{link.name}</span>
                <span className="nav-glow"></span>
                {isActive(link.path) && <span className="nav-active-dot"></span>}
              </button>
            ))}
            <button 
              className="premium-nav-btn"
              onClick={() => handleNavigation('/get-website')}
            >
              <span className="btn-text">Get a Website</span>
              <span className="btn-shine"></span>
              <span className="btn-arrow">→</span>
            </button>
          </div>

          {/* Mobile Menu Button with 3D effect */}
          <button 
            className="premium-mobile-menu-btn" 
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <div className="menu-icon-wrapper">
              <span className="menu-line"></span>
              <span className="menu-line"></span>
              <span className="menu-line"></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay with blur */}
      {isMobileMenuOpen && (
        <div className="premium-mobile-nav-overlay" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      {/* Mobile Menu with slide-in animation */}
      <div className={`premium-mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-header">
          <div className="mobile-logo-3d">
            <img src="/logo.png" alt="Webcraft" className="mobile-logo-img" />
            <div className="mobile-logo-glow"></div>
          </div>
          <button className="premium-close-menu" onClick={() => setIsMobileMenuOpen(false)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
            <span className="close-text">Close</span>
          </button>
        </div>

        <div className="mobile-nav-links">
          {navLinks.map((link, index) => (
            <button
              key={link.name}
              onClick={() => handleNavigation(link.path)}
              className="premium-mobile-nav-link"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="mobile-nav-icon">{link.icon}</span>
              <span className="mobile-nav-text">{link.name}</span>
              <span className="mobile-nav-arrow">→</span>
            </button>
          ))}
          <button 
            className="premium-mobile-nav-btn" 
            onClick={() => handleNavigation('/get-website')}
            style={{ animationDelay: `0.3s` }}
          >
            <span className="btn-text">Get a Website</span>
            <span className="btn-glow"></span>
          </button>
        </div>

        {/* Mobile Menu Footer */}
        <div className="mobile-nav-footer">
          <div className="mobile-social-links">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="mobile-social-link">💼</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="mobile-social-link">🐙</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="mobile-social-link">🐦</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="mobile-social-link">📷</a>
          </div>
        </div>
      </div>
    </>
  )
}
