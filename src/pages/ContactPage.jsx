// src/pages/ContactPage.jsx
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ContactInfo from '../components/ContactInfo'
import ContactForm from '../components/ContactForm'
import QuickAnswers from '../components/QuickAnswers'
import './ContactPage.css'
import { Link } from 'react-router-dom'

export default function ContactPage() {
  const navigate = useNavigate()

  useEffect(() => {
    // Staggered animation for page sections
    const sections = document.querySelectorAll('.premium-contact-section')
    sections.forEach((section, index) => {
      section.style.animation = `premiumContactSectionFadeIn 0.6s ease forwards ${index * 0.15}s`
    })
  }, [])

  const goBack = () => {
    navigate(-1)
  }

  return (
    <div className="premium-contact-page-wrapper">
      {/* Animated Background */}
      <div className="contact-page-bg-glow"></div>
      <div className="contact-page-bg-grid"></div>
      <div className="contact-page-particles">
        {[...Array(40)].map((_, i) => (
          <div key={i} className="contact-particle-dot" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${5 + Math.random() * 10}s`
          }}></div>
        ))}
      </div>

      <div className="premium-contact-page-container">
        {/* Back Button */}
      <Link to="/" className="premium-back-button">
  <div className="back-button-3d">
    <span className="back-icon">←</span>
    <span className="back-text">Back</span>
    <span className="back-glow"></span>
  </div>
</Link>

        {/* Header */}
        <div className="premium-contact-page-header premium-contact-section">
          <div className="premium-header-badge">
            <span className="badge-icon">✨</span>
            <span>Get in Touch</span>
            <span className="badge-pulse-ring"></span>
          </div>
          <h1 className="premium-header-title">
            Let's <span className="title-highlight">Connect</span>
            <div className="title-glow"></div>
          </h1>
          <p className="premium-header-subtitle">
            Have questions? We'll respond within 24 hours.
          </p>
          <div className="header-decorative-line">
            <div className="line-dot"></div>
          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="premium-contact-info-wrapper premium-contact-section">
          <ContactInfo />
        </div>

        {/* Form and Quick Answers */}
        <div className="premium-contact-bottom-section">
          <div className="premium-contact-form-wrapper premium-contact-section">
            <ContactForm />
          </div>
          <div className="premium-quick-answers-wrapper premium-contact-section">
            <QuickAnswers />
          </div>
        </div>
      </div>
    </div>
  )
}