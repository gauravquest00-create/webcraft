// src/sections/About.jsx
import { useNavigate } from 'react-router-dom'
import React, { useEffect } from 'react'
import './About.css'

export default function About() {
  const navigate = useNavigate()

  useEffect(() => {
    // Staggered animation for stats
    const statsItems = document.querySelectorAll('.premium-stat-item')
    statsItems.forEach((item, index) => {
      item.style.animation = `premiumStatFadeInUp 0.5s ease forwards ${index * 0.1}s`
    })
  }, [])

  const handleGetStarted = () => {
    navigate('/get-website')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const stats = [
    { value: '3+', label: 'Projects Delivered', icon: '🚀', delay: '0s', color: '#6366F1' },
    { value: '1+', label: 'Happy Clients', icon: '😊', delay: '0.1s', color: '#10B981' },
    { value: '100%', label: 'Client Satisfaction', icon: '⭐', delay: '0.2s', color: '#F59E0B' },
    { value: '24/7', label: 'Support Available', icon: '💬', delay: '0.3s', color: '#EF4444' }
  ]

  return (
    <section className="premium-about" id="about">
      {/* Animated Background */}
      <div className="premium-about-bg-glow"></div>
      <div className="premium-about-bg-grid"></div>
      <div className="premium-about-particles">
        {[...Array(40)].map((_, i) => (
          <div key={i} className="about-particle-dot" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${5 + Math.random() * 10}s`
          }}></div>
        ))}
      </div>

      <div className="premium-about-container">
        <div className="premium-about-grid">
          {/* Left Side - Image with floating elements */}
          <div className="premium-about-image-wrapper">
            <div className="premium-about-image-card">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=500&fit=crop" 
                alt="Webcraft workspace"
                className="premium-about-image"
                loading="lazy"
              />
              <div className="premium-image-floating-card experience">
                <div className="floating-icon-wrapper">
                  <span className="floating-icon">🎯</span>
                  <div className="floating-icon-glow"></div>
                </div>
                <div className="floating-text">
                  <strong>1 Years</strong>
                  <span>Of Excellence</span>
                </div>
              </div>
              <div className="premium-image-floating-card projects">
                <div className="floating-icon-wrapper">
                  <span className="floating-icon">✅</span>
                  <div className="floating-icon-glow"></div>
                </div>
                <div className="floating-text">
                  <strong>3+</strong>
                  <span>Projects Done</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="premium-about-content">
            <div className="premium-about-badge">
              <span className="badge-icon">✨</span>
              <span>About Webcraft</span>
              <span className="badge-pulse-ring"></span>
            </div>
            <h2 className="premium-about-title">
              Building <span className="title-highlight">Digital Solutions</span> That Work
              <div className="title-glow"></div>
            </h2>
            <p className="premium-about-text">
              At Webcraft, I build simple, professional websites that help businesses 
              establish a strong online presence. My focus is on creating clean, fast, 
              and reliable websites that are easy to use and manage.
            </p>
            <p className="premium-about-text">
              Every project starts with understanding your unique goals and ends with 
              a website that truly represents your brand. No fluff, no complexity — 
              just effective web solutions that deliver real results.
            </p>

            {/* Stats Grid */}
            <div className="premium-about-stats">
              {stats.map((stat, index) => (
                <div key={index} className="premium-stat-item" style={{ '--stat-color': stat.color }}>
                  <div className="stat-icon-wrapper">
                    <span className="stat-icon">{stat.icon}</span>
                    <div className="stat-icon-ring"></div>
                  </div>
                  <div className="stat-number">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-progress"></div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="premium-about-cta" onClick={handleGetStarted}>
              <span className="btn-text">Start Your Project</span>
              <span className="btn-glow"></span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="premium-about-scroll">
        <div className="scroll-line">
          <div className="scroll-progress"></div>
        </div>
      </div>
    </section>
  )
}
