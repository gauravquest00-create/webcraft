// src/components/QuickAnswers.jsx
import { useState, useEffect } from 'react'
import './QuickAnswers.css'

export default function QuickAnswers() {
  const [activeIndex, setActiveIndex] = useState(null)
  const [hoveredIndex, setHoveredIndex] = useState(null)

  useEffect(() => {
    // Staggered animation for FAQ items
    const items = document.querySelectorAll('.premium-faq-item')
    items.forEach((item, index) => {
      item.style.animation = `premiumFaqFadeInUp 0.5s ease forwards ${index * 0.1}s`
    })
  }, [])

  const faqs = [
    { 
      q: 'How fast do you respond?', 
      a: 'Within 24 hours on business days. We prioritize urgent inquiries and typically respond within 12 hours.',
      icon: '⚡',
      color: '#6366F1'
    },
    { 
      q: 'Do you offer free consultation?', 
      a: 'Yes, 30-min free consultation for projects. Discuss your requirements and get expert advice at no cost.',
      icon: '🎯',
      color: '#10B981'
    },
    { 
      q: 'What is your refund policy?', 
      a: '100% money-back if not satisfied. Your satisfaction is our top priority.',
      icon: '💰',
      color: '#F59E0B'
    },
    { 
      q: 'How long does it take?', 
      a: '5-14 days depending on project scope. We provide estimated timelines during consultation.',
      icon: '⏱️',
      color: '#EF4444'
    }
  ]

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="premium-quick-answers-card">
      {/* 3D Floating Elements */}
      <div className="qa-3d-element element-1">❓</div>
      <div className="qa-3d-element element-2">💡</div>
      <div className="qa-3d-element element-3">⚡</div>
      
      <div className="premium-qa-header">
        <div className="header-icon-wrapper">
          <span className="header-icon">💬</span>
          <div className="header-icon-glow"></div>
        </div>
        <h3 className="premium-qa-title">Quick <span className="title-highlight">Answers</span></h3>
        <div className="title-underline"></div>
        <p className="premium-qa-subtitle">Common questions, simple answers</p>
      </div>

      <div className="premium-faq-list">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`premium-faq-item ${activeIndex === index ? 'active' : ''}`}
            style={{ '--faq-color': faq.color }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="faq-item-glow"></div>
            <div className="faq-question-wrapper" onClick={() => toggleFaq(index)}>
              <div className="faq-icon-wrapper">
                <span className="faq-icon">{faq.icon}</span>
                <div className="faq-icon-ring"></div>
              </div>
              <div className="faq-question-text">
                <span className="question">{faq.q}</span>
                <span className="question-dot"></span>
              </div>
              <div className="faq-toggle-icon">
                <span className="toggle-line"></span>
                <span className={`toggle-plus ${activeIndex === index ? 'active' : ''}`}>
                  {activeIndex === index ? '−' : '+'}
                </span>
              </div>
            </div>
            <div className={`faq-answer-wrapper ${activeIndex === index ? 'expanded' : ''}`}>
              <div className="faq-answer-content">
                <div className="answer-icon">💬</div>
                <p className="faq-answer">{faq.a}</p>
              </div>
              <div className="answer-progress"></div>
            </div>
            <div className="faq-hover-effect"></div>
          </div>
        ))}
      </div>

      {/* Contact CTA */}
      <div className="premium-qa-footer">
        <div className="footer-glow"></div>
        <p>Still have questions?</p>
        <button className="qa-contact-btn">
          <span>Contact Support</span>
          <span className="btn-arrow">→</span>
          <span className="btn-shine"></span>
        </button>
      </div>
    </div>
  )
}