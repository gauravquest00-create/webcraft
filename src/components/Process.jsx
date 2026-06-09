// src/sections/Process.jsx
import React, { useEffect } from 'react'
import './Process.css'

export default function Process() {
  useEffect(() => {
    // Staggered animation for timeline steps
    const steps = document.querySelectorAll('.premium-timeline-step, .premium-mobile-step')
    steps.forEach((step, index) => {
      step.style.animation = `premiumStepFadeInUp 0.5s ease forwards ${index * 0.08}s`
    })
  }, [])

  const steps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'Understanding your goals and requirements',
      icon: '🔍',
      delay: '0s',
      color: '#6366F1'
    },
    {
      number: '02',
      title: 'Planning',
      description: 'Creating a strategic roadmap for success',
      icon: '📋',
      delay: '0.1s',
      color: '#10B981'
    },
    {
      number: '03',
      title: 'Design',
      description: 'Crafting beautiful, intuitive interfaces',
      icon: '🎨',
      delay: '0.2s',
      color: '#F59E0B'
    },
    {
      number: '04',
      title: 'Development',
      description: 'Building with clean, maintainable code',
      icon: '💻',
      delay: '0.3s',
      color: '#EF4444'
    },
    {
      number: '05',
      title: 'Testing',
      description: 'Ensuring quality across all devices',
      icon: '✅',
      delay: '0.4s',
      color: '#8B5CF6'
    },
    {
      number: '06',
      title: 'Launch',
      description: 'Deploying and monitoring your website',
      icon: '🚀',
      delay: '0.5s',
      color: '#EC4899'
    }
  ]

  return (
    <section className="premium-process" id="process">
      {/* Animated Background */}
      <div className="premium-process-bg-glow"></div>
      <div className="premium-process-bg-grid"></div>
      <div className="premium-process-particles">
        {[...Array(30)].map((_, i) => (
          <div key={i} className="process-particle-dot" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${4 + Math.random() * 8}s`
          }}></div>
        ))}
      </div>

      <div className="premium-process-container">
        <div className="premium-process-header">
          <div className="premium-process-badge">
            <span className="badge-icon">⚡</span>
            <span>How We Work</span>
            <span className="badge-pulse-ring"></span>
          </div>
          <h2 className="premium-process-title">
            Simple <span className="title-highlight">Process</span>
            <div className="title-glow"></div>
          </h2>
          <p className="premium-process-subtitle">
            A clear, structured approach to building your website
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="premium-process-timeline">
          <div className="premium-timeline-line">
            <div className="timeline-line-glow"></div>
          </div>
          <div className="premium-timeline-grid">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="premium-timeline-step" 
                style={{ '--step-color': step.color }}
              >
                <div className="step-number-wrapper">
                  <div className="step-number-glow"></div>
                  <div className="step-number">{step.number}</div>
                </div>
                <div className="step-icon-wrapper">
                  <span className="step-icon">{step.icon}</span>
                  <div className="step-icon-ring"></div>
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
                <div className="step-connector"></div>
                <div className="step-progress"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Vertical */}
        <div className="premium-process-mobile">
          {steps.map((step, index) => (
            <div key={index} className="premium-mobile-step" style={{ '--step-color': step.color }}>
              <div className="mobile-step-number-wrapper">
                <div className="mobile-step-number">{step.number}</div>
                <div className="mobile-step-line"></div>
              </div>
              <div className="mobile-step-icon-wrapper">
                <span className="mobile-step-icon">{step.icon}</span>
                <div className="mobile-step-icon-ring"></div>
              </div>
              <div className="mobile-step-content">
                <h3 className="mobile-step-title">{step.title}</h3>
                <p className="mobile-step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="premium-process-scroll">
        <div className="scroll-line">
          <div className="scroll-progress"></div>
        </div>
      </div>
    </section>
  )
}