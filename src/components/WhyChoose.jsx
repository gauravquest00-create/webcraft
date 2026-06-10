// src/sections/WhyChoose.jsx
import { useNavigate } from 'react-router-dom'
import React, { useEffect, useRef } from 'react'
import './WhyChoose.css'

export default function WhyChoose() {
  const navigate = useNavigate()
  const sectionRef = useRef(null)

  useEffect(() => {
    // Staggered animation for cards
    const cards = document.querySelectorAll('.premium-feature-card')
    cards.forEach((card, index) => {
      card.style.animation = `premiumFadeInUp 0.6s ease forwards ${index * 0.1}s`
    })
  }, [])

  const handleCardClick = () => {
    navigate('/get-website')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

const features = [
  {
    title: 'More Client Calls',
    description: 'Websites optimized for phone calls and contact form submissions.',
    icon: '📞',
    delay: '0s',
    color: '#6366F1'
  },
  {
    title: 'Lead Generation',
    description: 'Built-in forms and CTAs that convert visitors into paying customers.',
    icon: '📈',
    delay: '0.1s',
    color: '#10B981'
  },
  {
    title: 'SEO Ready',
    description: 'Rank higher on Google and get found by customers searching for you.',
    icon: '🔍',
    delay: '0.2s',
    color: '#F59E0B'
  },
  {
    title: 'Fast Loading',
    description: '5-second load time = more customers. Speed matters for sales.',
    icon: '⚡',
    delay: '0.3s',
    color: '#EF4444'
  },
  {
    title: '24/7 Presence',
    description: 'Your business works even while you sleep. Never miss a lead.',
    icon: '🕒',
    delay: '0.4s',
    color: '#8B5CF6'
  },
  {
    title: 'Better ROI',
    description: 'Get more business for every rupee spent. Websites that pay for themselves.',
    icon: '💰',
    delay: '0.5s',
    color: '#EC4899'
  }
]

  return (
    <section className="premium-why-choose" id="services" ref={sectionRef}>
      {/* Animated Background */}
      <div className="premium-why-bg-glow"></div>
      <div className="premium-why-bg-grid"></div>
      <div className="premium-why-particles">
        {[...Array(30)].map((_, i) => (
          <div key={i} className="particle-dot" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${4 + Math.random() * 8}s`
          }}></div>
        ))}
      </div>

      <div className="premium-why-container">
        <div className="premium-section-header">
          <div className="premium-section-badge">
            <span className="badge-icon">✨</span>
            <span>Why Choose Us</span>
            <span className="badge-pulse-ring"></span>
          </div>
          <h2 className="premium-section-title">
            Why Businesses Choose 
            <span className="title-highlight"> Webcraft</span>
            <div className="title-glow"></div>
          </h2>
          <p className="premium-section-subtitle">
            Professional websites that deliver real results for your business
          </p>
        </div>

        <div className="premium-features-grid">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="premium-feature-card"
              onClick={handleCardClick}
              style={{ '--card-color': feature.color }}
            >
              <div className="premium-card-glow"></div>
              <div className="premium-card-content">
                <div className="premium-icon-wrapper">
                  <span className="premium-icon">{feature.icon}</span>
                  <div className="icon-ring"></div>
                </div>
                <h3 className="premium-feature-title">{feature.title}</h3>
                <p className="premium-feature-description">{feature.description}</p>
                <div className="premium-feature-arrow">
                  <span>Get Started</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </div>
              <div className="premium-card-border"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="premium-section-scroll">
        <div className="scroll-line">
          <div className="scroll-progress"></div>
        </div>
      </div>
    </section>
  )
}
