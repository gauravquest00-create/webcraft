// src/sections/CTA.jsx
import React, { useEffect, useRef } from 'react'
import './CTA.css'

export default function CTA({ onNavigate }) {
  const ctaRef = useRef(null)
  const cardRef = useRef(null)

  useEffect(() => {
    // Parallax 3D effect on mouse move
    const handleMouseMove = (e) => {
      if (!cardRef.current) return
      const rect = cardRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      
      cardRef.current.style.transform = `perspective(1000px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-10px)`
    }

    const handleMouseLeave = () => {
      if (cardRef.current) {
        cardRef.current.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateY(0)'
      }
    }

    const card = cardRef.current
    if (card) {
      card.addEventListener('mousemove', handleMouseMove)
      card.addEventListener('mouseleave', handleMouseLeave)
    }

    return () => {
      if (card) {
        card.removeEventListener('mousemove', handleMouseMove)
        card.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [])

  const handleGetQuote = () => {
    if (onNavigate) {
      onNavigate('getwebsite')
    } else {
      window.location.href = '/get-website'
    }
  }

  const handleLetsTalk = () => {
    if (onNavigate) {
      onNavigate('contact')
    } else {
      window.location.href = '/contact'
    }
  }

  return (
    <section className="premium-cta" ref={ctaRef}>
      {/* Animated Background */}
      <div className="premium-cta-bg-glow"></div>
      <div className="premium-cta-bg-grid"></div>
      <div className="premium-cta-particles">
        {[...Array(30)].map((_, i) => (
          <div key={i} className="cta-particle-dot" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${4 + Math.random() * 8}s`
          }}></div>
        ))}
      </div>

      <div className="premium-cta-container">
        <div className="premium-cta-card" ref={cardRef}>
          {/* 3D Glow Effect */}
          <div className="cta-3d-glow"></div>
          
          {/* Floating Elements */}
          <div className="cta-floating-element element-1">🚀</div>
          <div className="cta-floating-element element-2">⚡</div>
          <div className="cta-floating-element element-3">💎</div>
          <div className="cta-floating-element element-4">🎯</div>
          
          <div className="premium-cta-content">
            <div className="premium-cta-badge">
              <span className="badge-icon">✨</span>
              <span>Ready to Start?</span>
              <span className="badge-pulse-ring"></span>
            </div>
            
            <h2 className="premium-cta-title">
              Let's Build Your <span className="title-highlight">Website Today</span>
              <div className="title-glow"></div>
            </h2>
            
            <p className="premium-cta-subtitle">
              Get a professional website that grows your business. 
              Start your project now with zero upfront payment.
            </p>
            
            <div className="premium-cta-buttons">
              <button className="premium-cta-btn-primary" onClick={handleGetQuote}>
                <span className="btn-text">Let's Build →</span>
                <span className="btn-glow"></span>
                <span className="btn-shine"></span>
              </button>
              <button className="premium-cta-btn-secondary" onClick={handleLetsTalk}>
                <span className="btn-icon">💬</span>
                <span className="btn-text">Let's Talk</span>
                <span className="btn-wave"></span>
              </button>
            </div>
            
            <div className="premium-cta-features">
              <div className="feature-chip">
                <span className="chip-icon">✅</span>
                <span>No upfront payment</span>
                <div className="chip-glow"></div>
              </div>
              <div className="feature-chip">
                <span className="chip-icon">⚡</span>
                <span>5 days delivery</span>
                <div className="chip-glow"></div>
              </div>
              <div className="feature-chip">
                <span className="chip-icon">🔒</span>
                <span>100% satisfaction</span>
                <div className="chip-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="premium-cta-scroll">
        <div className="scroll-line">
          <div className="scroll-progress"></div>
        </div>
      </div>
    </section>
  )
}