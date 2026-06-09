// src/components/common/FloatingActionButtons.jsx
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import API_CONFIG from '../../config/api'
import './FloatingActionButtons.css'

const FloatingActionButtons = () => {
  const navigate = useNavigate()
  const [isExpanded, setIsExpanded] = useState(false)
  const [showEnquiryForm, setShowEnquiryForm] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    if (submitStatus) setSubmitStatus(null)
  }

  const handleEnquirySubmit = async (e) => {
    e.preventDefault()
    
    if (!formData.name.trim()) {
      setSubmitStatus({ type: 'error', message: 'Please enter your name' })
      return
    }
    if (!formData.phone.trim()) {
      setSubmitStatus({ type: 'error', message: 'Please enter your phone number' })
      return
    }
    if (!formData.message.trim()) {
      setSubmitStatus({ type: 'error', message: 'Please enter your message' })
      return
    }

    setIsSubmitting(true)
    
    try {
      await fetch(API_CONFIG.GOOGLE_SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          source: 'floating-enquiry',
          timestamp: new Date().toISOString()
        })
      })
      
      setSubmitStatus({ type: 'success', message: '✓ Enquiry sent! We\'ll contact you soon.' })
      setFormData({ name: '', email: '', phone: '', message: '' })
      
      setTimeout(() => {
        setSubmitStatus(null)
        setShowEnquiryForm(false)
        setIsExpanded(false)
      }, 3000)
      
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Something went wrong. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleWhatsApp = () => {
    const phoneNumber = '8130839987'
    const message = 'Hi! I am interested in getting a website for my business. Please share more details.'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleGetWebsite = () => {
    navigate('/get-website')
  }

  const handleMainClick = () => {
    setIsExpanded(!isExpanded)
    setShowEnquiryForm(false)
  }

  const handleEnquiryClick = () => {
    setShowEnquiryForm(true)
  }

  const handleBack = () => {
    setShowEnquiryForm(false)
  }

  const handleCloseAll = () => {
    setIsExpanded(false)
    setShowEnquiryForm(false)
  }

  return (
    <div className="floating-actions-3d">
      {/* WhatsApp Button - Always Visible */}
     

      {/* Main Expandable Button */}
      <div className={`floating-main-wrapper ${isExpanded ? 'expanded' : ''}`}>
        {/* Step 1: Main Button */}
        <button 
          className="floating-main-btn-3d" 
          onClick={handleMainClick}
        >
          <div className="main-3d-icon">✨</div>
          <span className="main-3d-text">Quick Actions</span>
          <div className="main-arrow">{isExpanded ? '×' : '▼'}</div>
        </button>

        {/* Step 2: Options Panel (Shows after main button click) */}
        <div className={`floating-options-panel ${isExpanded ? 'open' : ''}`}>
          {!showEnquiryForm ? (
            // Option Buttons
            <div className="options-buttons">
              <button className="option-btn" onClick={handleEnquiryClick}>
                <span className="option-icon">📧</span>
                <span className="option-text">Quick Enquiry</span>
                <span className="option-arrow">→</span>
              </button>
              <button className="option-btn" onClick={handleWhatsApp}>
                <span className="option-icon">💬</span>
                <span className="option-text">WhatsApp Chat</span>
                <span className="option-arrow">→</span>
              </button>
              <button className="option-btn" onClick={handleGetWebsite}>
                <span className="option-icon">🚀</span>
                <span className="option-text">Let's Build</span>
                <span className="option-arrow">→</span>
              </button>
            </div>
          ) : (
            // Step 3: Enquiry Form (After clicking Quick Enquiry)
            <div className="enquiry-form-panel">
              <div className="enquiry-header">
                <button className="back-btn" onClick={handleBack}>
                  ← Back
                </button>
                <button className="close-btn" onClick={handleCloseAll}>✕</button>
              </div>
              <div className="enquiry-title">
                <h4>Quick Enquiry</h4>
                <p>We'll respond within 24 hours</p>
              </div>

              {submitStatus && (
                <div className={`enquiry-status ${submitStatus.type}`}>
                  {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleEnquirySubmit}>
                <div className="enquiry-form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="enquiry-form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="enquiry-form-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="enquiry-form-group">
                  <textarea
                    name="message"
                    rows="3"
                    placeholder="Tell us about your project *"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="enquiry-submit-btn" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Enquiry →'}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default FloatingActionButtons