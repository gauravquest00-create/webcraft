// src/sections/Hero.jsx
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Hero.css'

export default function Hero({ onNavigate }) {
  const navigate = useNavigate()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const buttonsRef = useRef(null)
  const mockupRef = useRef(null)

  useEffect(() => {
    // Parallax effect on mouse move
    const handleMouseMove = (e) => {
      if (!heroRef.current) return
      const rect = heroRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      setMousePosition({ x, y })
      
      if (mockupRef.current) {
        mockupRef.current.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Staggered text animation
  useEffect(() => {
    const letters = document.querySelectorAll('.animated-letter')
    letters.forEach((letter, index) => {
      letter.style.animation = `fadeInUp 0.6s ease forwards ${index * 0.03}s`
    })
  }, [])

  const handleLetBuild = () => {
    if (onNavigate) {
      onNavigate('getwebsite')
    } else {
      navigate('/get-website')
    }
  }

  const handleWhatsApp = () => {
    const phoneNumber = '8130839987'
    const message = 'Hi! I am interested in getting a website for my business. Please share more details.'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  // Split text into animated letters
  const titleText = "Get More Leads. More Calls. More Sales."
  const highlightText = "In 5Days"
  const freeText = "or FREE DOMAIN"

  return (
    <section className="premium-hero" ref={heroRef}>
      {/* Animated Background Elements */}
      <div className="premium-bg-glow"></div>
      <div className="premium-bg-grid"></div>
      <div className="premium-bg-particles">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${5 + Math.random() * 10}s`
          }}></div>
        ))}
      </div>

      <div className="premium-hero-container">
        {/* Left Content */}
        <div className="premium-hero-content">
          {/* Trust Badge */}
          <div className="premium-trust-badge">
            <span className="badge-icon">⭐</span>
            <span className="badge-text">Trusted by Businesses</span>
            <span className="badge-pulse"></span>
          </div>

          {/* Main Heading with Animated Letters */}
          <h1 className="premium-hero-title" ref={titleRef}>
            <span className="title-line">
              {titleText.split('').map((char, i) => (
                <span key={i} className="animated-letter" style={{ animationDelay: `${i * 0.02}s` }}>
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </span>
            <span className="title-line highlight-line">
              {highlightText.split('').map((char, i) => (
                <span key={i} className="animated-letter highlight" style={{ animationDelay: `${(titleText.length + i) * 0.02}s` }}>
                  {char}
                </span>
              ))}
            </span>
            <span className="title-line free-line">
              {freeText.split('').map((char, i) => (
                <span key={i} className="animated-letter free" style={{ animationDelay: `${(titleText.length + highlightText.length + i) * 0.02}s` }}>
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="premium-hero-subtitle" ref={subtitleRef}>
            Your business needs a website that works 24/7. Get more leads starting at ₹25,000.
          </p>

          {/* Offer Banner */}
          <div className="premium-offer-banner">
            <div className="offer-content">
              <span className="offer-icon">🎉</span>
              <span className="offer-text">Limited Time Offer: Free Domain + 1 Month Free Support (₹5,000 Value)</span>
              <span className="offer-tag">HOT</span>
            </div>
            <div className="offer-progress"></div>
          </div>

          {/* CTA Buttons */}
          <div className="premium-hero-buttons" ref={buttonsRef}>
            <button className="premium-btn-primary" onClick={handleLetBuild}>
              <span className="btn-text">Let's Build →</span>
              <span className="btn-glow"></span>
            </button>
            <button className="premium-btn-whatsapp" onClick={handleWhatsApp}>
              <span className="btn-icon">💬</span>
              <span className="btn-text">Contact on WhatsApp</span>
              <span className="btn-wave"></span>
            </button>
          </div>

          {/* Social Proof */}
          <div className="premium-social-proof">
            <div className="reviews">
              <div className="stars-container">
                <span className="stars">★★★★★</span>
                <div className="stars-glow"></div>
              </div>
              <span className="rating">4.9/5</span>
              <span className="review-count">from 1 reviews</span>
            </div>
            <div className="trust-indicators">
              <div className="trust-item">
                <span className="trust-icon">✅</span>
                <span>100% Satisfaction</span>
              </div>
              <div className="trust-item">
                <span className="trust-icon">🚀</span>
                <span>Fast Delivery</span>
              </div>
            </div>
          </div>

          {/* Guarantee */}
          <div className="premium-guarantee">
            <span className="guarantee-icon">🔒</span>
            <span>100% Money Back Guarantee</span>
            <span className="separator">|</span>
            <span className="guarantee-icon">⚡</span>
            <span>Free Lifetime Updates</span>
            <span className="separator">|</span>
            <span className="guarantee-icon">💎</span>
            <span>Premium Support</span>
          </div>
        </div>

        {/* Right Side - Premium Mockup */}
        <div className="premium-hero-mockup" ref={mockupRef}>
          <div className="mockup-3d">
            <div className="mockup-browser premium">
              <div className="browser-bar">
                <div className="browser-dots">
                  <div className="browser-dot red"></div>
                  <div className="browser-dot yellow"></div>
                  <div className="browser-dot green"></div>
                </div>
                <div className="browser-url">
                  <span className="url-text">yourbusiness.com</span>
                  <span className="url-lock">🔒</span>
                </div>
                <div className="browser-actions">
                  <span className="action-icon">⋮</span>
                </div>
              </div>
              <div className="browser-content premium">
                <div className="mockup-preview premium">
                  <div className="preview-header">
                    <div className="preview-placeholder premium"></div>
                    <div className="preview-title">Your Business Name</div>
                  </div>
                  <div className="preview-body">
                    <div className="preview-line long premium"></div>
                    <div className="preview-line medium premium"></div>
                    <div className="preview-line short premium"></div>
                  </div>
                  <div className="preview-buttons premium">
                    <div className="preview-btn primary"></div>
                    <div className="preview-btn outline"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Floating Cards */}
          <div className="premium-floating-cards">
            <div className="premium-floating-card" style={{ animationDelay: '0s' }}>
              <div className="card-icon-wrapper">
                <span className="card-icon">⚡</span>
                <div className="card-icon-glow"></div>
              </div>
              <div className="card-info">
                <span className="card-text">5 Day Delivery</span>
                <span className="card-subtext">Guaranteed</span>
              </div>
            </div>
            <div className="premium-floating-card" style={{ animationDelay: '0.2s' }}>
              <div className="card-icon-wrapper">
                <span className="card-icon">📱</span>
                <div className="card-icon-glow"></div>
              </div>
              <div className="card-info">
                <span className="card-text">Mobile Ready</span>
                <span className="card-subtext">Responsive Design</span>
              </div>
            </div>
            <div className="premium-floating-card" style={{ animationDelay: '0.4s' }}>
              <div className="card-icon-wrapper">
                <span className="card-icon">🔒</span>
                <div className="card-icon-glow"></div>
              </div>
              <div className="card-info">
                <span className="card-text">Free SSL</span>
                <span className="card-subtext">Security Included</span>
              </div>
            </div>
            <div className="premium-floating-card" style={{ animationDelay: '0.6s' }}>
              <div className="card-icon-wrapper">
                <span className="card-icon">💰</span>
                <div className="card-icon-glow"></div>
              </div>
              <div className="card-info">
                <span className="card-text">₹25k Only</span>
                <span className="card-subtext">Starting Price</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="premium-scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span className="scroll-text">Scroll to explore</span>
        <div className="scroll-arrows">
          <span>↓</span>
          <span>↓</span>
        </div>
      </div>
    </section>
  )
}
