// src/sections/Services.jsx
import { useNavigate } from 'react-router-dom'
import React, { useEffect } from 'react'
import './Services.css'

export default function Services() {
  const navigate = useNavigate()

  useEffect(() => {
    // Staggered animation for cards
    const cards = document.querySelectorAll('.premium-service-card')
    cards.forEach((card, index) => {
      card.style.animation = `premiumServiceFadeInUp 0.6s ease forwards ${index * 0.1}s`
    })
  }, [])

  const handleCardClick = () => {
    navigate('/get-website')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const services = [
    {
      title: 'Business Websites',
      description: 'Professional corporate websites that establish credibility and showcase your company.',
      features: ['Custom design', 'Contact forms', 'Google Maps integration'],
      icon: '🏢',
      delay: '0s',
      color: '#6366F1'
    },
    {
      title: 'Portfolio Websites',
      description: 'Beautiful portfolio layouts to showcase your work and attract clients.',
      features: ['Project gallery', 'Client testimonials', 'Downloadable resume'],
      icon: '🎨',
      delay: '0.1s',
      color: '#10B981'
    },
    {
      title: 'Landing Pages',
      description: 'High-converting landing pages designed for marketing campaigns.',
      features: ['Lead capture forms', 'A/B testing ready', 'Analytics integrated'],
      icon: '📈',
      delay: '0.2s',
      color: '#F59E0B'
    },
    {
      title: 'Custom Web Solutions',
      description: 'Tailored web applications built to solve your specific business needs.',
      features: ['Custom features', 'Database integration', 'API connections'],
      icon: '⚙️',
      delay: '0.3s',
      color: '#EF4444'
    }
  ]

  return (
    <section className="premium-services" id="services">
      {/* Animated Background */}
      <div className="premium-services-bg-glow"></div>
      <div className="premium-services-bg-grid"></div>
      <div className="premium-services-particles">
        {[...Array(40)].map((_, i) => (
          <div key={i} className="service-particle-dot" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${5 + Math.random() * 10}s`
          }}></div>
        ))}
      </div>

      <div className="premium-services-container">
        <div className="premium-services-header">
          <div className="premium-services-badge">
            <span className="badge-icon">🚀</span>
            <span>What We Build</span>
            <span className="badge-pulse-ring"></span>
          </div>
          <h2 className="premium-services-title">
            Comprehensive <span className="title-highlight">Web Solutions</span>
            <div className="title-glow"></div>
          </h2>
          <p className="premium-services-subtitle">
            Tailored to your business goals and requirements
          </p>
        </div>

        <div className="premium-services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="premium-service-card"
              onClick={handleCardClick}
              style={{ '--card-color': service.color }}
            >
              <div className="premium-service-card-glow"></div>
              <div className="premium-service-card-content">
                <div className="premium-service-icon-wrapper">
                  <span className="premium-service-icon">{service.icon}</span>
                  <div className="service-icon-ring"></div>
                </div>
                <h3 className="premium-service-title">{service.title}</h3>
                <p className="premium-service-description">{service.description}</p>
                <ul className="premium-service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="feature-check">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="premium-service-arrow">
                  <span>Get This Service</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </div>
              <div className="premium-service-card-border"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="premium-services-scroll">
        <div className="scroll-line">
          <div className="scroll-progress"></div>
        </div>
      </div>
    </section>
  )
}