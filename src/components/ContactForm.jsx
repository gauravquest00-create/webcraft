// src/components/ContactForm.jsx
import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import API_CONFIG from '../config/api'
import './ContactForm.css'

export default function ContactForm() {
  const navigate = useNavigate()
  const formRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [focusedField, setFocusedField] = useState(null)

  useEffect(() => {
    // Staggered animation for form elements
    const inputs = document.querySelectorAll('.premium-form-group')
    inputs.forEach((input, index) => {
      input.style.animation = `premiumFormFadeInUp 0.5s ease forwards ${index * 0.05}s`
    })
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    if (submitStatus) setSubmitStatus(null)
  }

  const handleFocus = (field) => {
    setFocusedField(field)
  }

  const handleBlur = () => {
    setFocusedField(null)
  }

  const validateForm = () => {
    if (!formData.name.trim()) {
      setSubmitStatus({ type: 'error', message: '❌ Please enter your name' })
      return false
    }
    // Stricter email validation
    const emailRegex = /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      setSubmitStatus({ type: 'error', message: '❌ Please enter a valid email address' })
      return false
    }
    // Phone validation (if entered, must be valid Indian number)
    if (formData.phone && !/^[6-9]\d{9}$/.test(formData.phone)) {
      setSubmitStatus({ type: 'error', message: '❌ Enter valid 10-digit mobile number (starts with 6-9)' })
      return false
    }
    if (!formData.message.trim()) {
      setSubmitStatus({ type: 'error', message: '❌ Please enter your message' })
      return false
    }
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      // Send to Google Sheet
      const response = await fetch(API_CONFIG.GOOGLE_SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim() || 'Not provided',
          subject: formData.subject || 'General',
          message: formData.message.trim(),
          source: 'contact-form',
          timestamp: new Date().toISOString()
        })
      })

      // Store enquiry data for thank you page
      sessionStorage.setItem('enquiryData', JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        timestamp: new Date().toLocaleString()
      }))
      
      setSubmitStatus({ type: 'success', message: '✓ Message sent successfully! Redirecting...' })
      
      setTimeout(() => {
        navigate('/thank-you')
      }, 1500)
      
    } catch (error) {
      console.error('Submission error:', error)
      setSubmitStatus({ type: 'error', message: '❌ Something went wrong. Please try again.' })
      setIsSubmitting(false)
    }
  }

  const subjects = [
    { value: 'general', label: 'General Inquiry', icon: '💬' },
    { value: 'project', label: 'Project Discussion', icon: '🚀' },
    { value: 'support', label: 'Technical Support', icon: '🔧' },
    { value: 'other', label: 'Other', icon: '📝' }
  ]

  return (
    <div className="premium-contact-form-card" ref={formRef}>
      {/* 3D Floating Elements */}
      <div className="form-3d-element element-1">✨</div>
      <div className="form-3d-element element-2">⚡</div>
      <div className="form-3d-element element-3">🎯</div>
      
      <div className="premium-form-header">
        <div className="header-badge">
          <span className="badge-icon">📬</span>
          <span>Get in Touch</span>
        </div>
        <h3 className="premium-form-title">Send a <span className="title-highlight">Message</span></h3>
        <p className="premium-form-subtitle">Fill out the form and we'll get back to you soon</p>
        <div className="title-underline"></div>
      </div>

      {submitStatus && (
        <div className={`premium-form-status ${submitStatus.type}`}>
          <div className="status-icon">{submitStatus.type === 'success' ? '✓' : '⚠️'}</div>
          <span>{submitStatus.message}</span>
          <div className="status-progress"></div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="premium-contact-form">
        <div className="premium-form-row">
          <div className="premium-form-group">
            <label className={focusedField === 'name' || formData.name ? 'focused' : ''}>
              <span className="label-icon">👤</span>
              <span>Full Name</span>
              <span className="required">*</span>
            </label>
            <div className="input-wrapper">
              <input 
                type="text" 
                name="name" 
                required 
                value={formData.name} 
                onChange={handleChange}
                onFocus={() => handleFocus('name')}
                onBlur={handleBlur}
                placeholder="John Doe"
              />
              <div className="input-glow"></div>
              <div className="input-border"></div>
            </div>
          </div>
          
          <div className="premium-form-group">
            <label className={focusedField === 'email' || formData.email ? 'focused' : ''}>
              <span className="label-icon">📧</span>
              <span>Email Address</span>
              <span className="required">*</span>
            </label>
            <div className="input-wrapper">
              <input 
                type="email" 
                name="email" 
                required 
                value={formData.email} 
                onChange={handleChange}
                onFocus={() => handleFocus('email')}
                onBlur={handleBlur}
                placeholder="john@example.com"
              />
              <div className="input-glow"></div>
              <div className="input-border"></div>
            </div>
          </div>
        </div>

        <div className="premium-form-row">
          <div className="premium-form-group">
            <label className={focusedField === 'phone' || formData.phone ? 'focused' : ''}>
              <span className="label-icon">📞</span>
              <span>Phone Number</span>
              <span className="optional">(Optional)</span>
            </label>
            <div className="input-wrapper">
              <input 
                type="tel" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange}
                onFocus={() => handleFocus('phone')}
                onBlur={handleBlur}
                placeholder="+91 XXXXX XXXXX"
              />
              <div className="input-glow"></div>
              <div className="input-border"></div>
            </div>
            <small>10-digit mobile number</small>
          </div>
          
          <div className="premium-form-group">
            <label className={focusedField === 'subject' || formData.subject ? 'focused' : ''}>
              <span className="label-icon">📋</span>
              <span>Subject</span>
              <span className="optional">(Optional)</span>
            </label>
            <div className="input-wrapper select-wrapper">
              <select name="subject" value={formData.subject} onChange={handleChange}>
                <option value="">Select subject</option>
                {subjects.map(sub => (
                  <option key={sub.value} value={sub.value}>
                    {sub.icon} {sub.label}
                  </option>
                ))}
              </select>
              <div className="select-arrow">▼</div>
              <div className="input-glow"></div>
              <div className="input-border"></div>
            </div>
          </div>
        </div>

        <div className="premium-form-group full-width">
          <label className={focusedField === 'message' || formData.message ? 'focused' : ''}>
            <span className="label-icon">💬</span>
            <span>Your Message</span>
            <span className="required">*</span>
          </label>
          <div className="input-wrapper">
            <textarea 
              name="message" 
              required 
              rows="5" 
              value={formData.message} 
              onChange={handleChange}
              onFocus={() => handleFocus('message')}
              onBlur={handleBlur}
              placeholder="Tell us about your project, question, or feedback..."
            />
            <div className="input-glow"></div>
            <div className="input-border"></div>
          </div>
        </div>

        <button type="submit" className="premium-submit-btn" disabled={isSubmitting}>
          <span className="btn-text">{isSubmitting ? 'Sending...' : 'Send Message'}</span>
          <span className="btn-arrow">→</span>
          <span className="btn-shine"></span>
          <span className="btn-glow"></span>
        </button>

        <p className="premium-form-note">
          <span className="note-icon">🔒</span>
          We'll never share your information with anyone else.
        </p>
      </form>
    </div>
  )
}
