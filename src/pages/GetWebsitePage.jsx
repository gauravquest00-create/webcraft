// src/pages/GetWebsitePage.jsx
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './GetWebsitePage.css'
import { Link } from 'react-router-dom'  // Add this if not already there
export default function GetWebsitePage() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [focusedField, setFocusedField] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
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
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      setSubmitStatus({ type: 'error', message: '❌ Please enter a valid email address' })
      return false
    }
    if (!formData.projectType) {
      setSubmitStatus({ type: 'error', message: '❌ Please select a project type' })
      return false
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setSubmitStatus({ type: 'error', message: '❌ Please provide project details (minimum 10 characters)' })
      return false
    }
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    setTimeout(() => {
      sessionStorage.setItem('enquiryData', JSON.stringify({
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: `Website Project: ${formData.projectType}`,
        timestamp: new Date().toLocaleString()
      }))
      setSubmitStatus({ type: 'success', message: '✓ Request sent! Redirecting...' })
      setTimeout(() => navigate('/thank-you'), 1500)
    }, 1000)
  }

  const goBack = () => navigate(-1)

const projectTypes = [
  { value: 'business', label: 'Business Website', price: '₹9,999 - ₹14,999', icon: '🏢', color: '#3B82F6' },
  { value: 'portfolio', label: 'Portfolio Website', price: '₹5,999 - ₹9,999', icon: '🎨', color: '#10B981' },
  { value: 'landing', label: 'Landing Page', price: '₹3,999 - ₹6,999', icon: '📈', color: '#F59E0B' },
  { value: 'realestate', label: 'Real Estate Website', price: '₹12,999 - ₹24,999', icon: '🏠', color: '#EF4444' },
  { value: 'ecommerce', label: 'E-commerce Website', price: '₹18,999 - ₹34,999', icon: '🛒', color: '#8B5CF6' },
  { value: 'custom', label: 'Custom Solution', price: 'Custom Quote', icon: '💎', color: '#EC4899' }
]

const budgetRanges = [
  { value: 'under-6k', label: 'Under ₹5,999' },
  { value: '10k-15k', label: '₹10,000 - ₹15,000' },
  { value: '15k-20k', label: '₹15,000 - ₹20,000' },
  { value: 'above-20k', label: 'Above ₹20,000' }
]

  return (
    <div className="gw-page-wrapper">
      {/* 3D Animated Background */}
      <div className="gw-bg-glow"></div>
      <div className="gw-bg-grid"></div>
      <div className="gw-bg-gradient"></div>
      <div className="gw-particles">
        {[...Array(60)].map((_, i) => (
          <div key={i} className="gw-particle" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${4 + Math.random() * 8}s`,
            width: `${2 + Math.random() * 3}px`,
            height: `${2 + Math.random() * 3}px`
          }}></div>
        ))}
      </div>

      <div className="gw-container">
        {/* 3D Back Button */}
       <Link to="/" className="gw-back-btn-3d">
  <div className="gw-back-3d-wrapper">
    <span className="gw-back-icon">←</span>
    <span className="gw-back-text">Back to Home</span>
    <div className="gw-back-glow"></div>
  </div>
</Link>

        {/* Animated Header */}
        <div className="gw-header">
          <div className="gw-badge">
            <span className="gw-badge-icon">🚀</span>
            <span>Start Your Project</span>
            <div className="gw-badge-pulse"></div>
          </div>
          <h1 className="gw-title">
            Turn Visitor Into Customers <span className="gw-title-highlight"> With a Professional Website</span>
            <div className="gw-title-glow"></div>
          </h1>
          <p className="gw-subtitle">
            Let's create something amazing together. Fill out the form below to get started.
            <br />Response within <strong className="gw-highlight-text">24 hours</strong>.
          </p>
          <div className="gw-header-line">
            <div className="gw-line-dot"></div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="gw-main-grid">
          {/* Left Column - Info Cards with 3D */}
          <div className="gw-left-col">
            {/* Services Card 3D */}
            <div className="gw-card-3d">
              <div className="gw-card-3d-inner">
                <div className="gw-card-front">
                  <div className="gw-card-header">
                    <div className="gw-card-icon-wrapper">
                      <span className="gw-card-icon">📋</span>
                      <div className="gw-card-icon-glow"></div>
                    </div>
                    <h3>Our Services</h3>
                  </div>
                  <div className="gw-service-list">
                    {projectTypes.map((service, idx) => (
                      <div key={idx} className="gw-service-item-3d" style={{ '--service-color': service.color }}>
                        <span className="gw-service-icon">{service.icon}</span>
                        <div className="gw-service-details">
                          <span className="gw-service-name">{service.label}</span>
                          <span className="gw-service-price">{service.price}</span>
                        </div>
                        <div className="gw-service-hover-line"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Process Card 3D */}
            <div className="gw-card-3d">
              <div className="gw-card-3d-inner">
                <div className="gw-card-front">
                  <div className="gw-card-header">
                    <div className="gw-card-icon-wrapper">
                      <span className="gw-card-icon">🚀</span>
                      <div className="gw-card-icon-glow"></div>
                    </div>
                    <h3>How It Works</h3>
                  </div>
                  <div className="gw-process-steps">
                    {[
                      { num: '01', title: 'Fill the form', desc: 'Tell us about your project', icon: '📝' },
                      { num: '02', title: 'Free consultation', desc: '30-min call to understand needs', icon: '🎯' },
                      { num: '03', title: 'Get quote & timeline', desc: 'Custom proposal within 2 days', icon: '📊' },
                      { num: '04', title: 'Start development', desc: 'Launch in 5-14 days', icon: '⚡' }
                    ].map((step, idx) => (
                      <div key={idx} className="gw-step-3d">
                        <div className="gw-step-number-wrapper">
                          <div className="gw-step-number">{step.num}</div>
                          <div className="gw-step-number-glow"></div>
                        </div>
                        <div className="gw-step-content">
                          <strong>{step.title}</strong>
                          <span>{step.desc}</span>
                        </div>
                        <div className="gw-step-connector"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Guarantee Card 3D */}
            <div className="gw-card-3d">
              <div className="gw-card-3d-inner">
                <div className="gw-card-front">
                  <div className="gw-card-header">
                    <div className="gw-card-icon-wrapper">
                      <span className="gw-card-icon">✅</span>
                      <div className="gw-card-icon-glow"></div>
                    </div>
                    <h3>Our Guarantee</h3>
                  </div>
                  <div className="gw-guarantee-items-3d">
                    {[
                      { icon: '🏆', text: 'Projet Delivered As Agreed', color: '#F59E0B' },
                      { icon: '💰', text: '100% Money Back', color: '#10B981' },
                      { icon: '🔒', text: '30 Days Free Support', color: '#3B82F6' },
                      { icon: '📞', text: '24/7 Support', color: '#EF4444' }
                    ].map((item, idx) => (
                      <div key={idx} className="gw-guarantee-item-3d" style={{ '--item-color': item.color }}>
                        <span className="gw-guarantee-icon">{item.icon}</span>
                        <span>{item.text}</span>
                        <div className="gw-guarantee-glow"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form with 3D */}
          <div className="gw-right-col">
            <div className="gw-form-card-3d">
              <div className="gw-form-3d-glow"></div>
              <div className="gw-floating-elements">
                <div className="gw-floating-1">✨</div>
                <div className="gw-floating-2">⚡</div>
                <div className="gw-floating-3">🎯</div>
              </div>

              <div className="gw-form-header-3d">
                <div className="gw-form-badge">
                  <span>💬</span>
                  <span>Get a Quote</span>
                </div>
                <h3>Request a <span className="gw-form-highlight">Quote</span></h3>
                <p>Fill the form and get response within 24 hours</p>
                <div className="gw-form-line-3d"></div>
              </div>

              {submitStatus && (
                <div className={`gw-form-status-3d gw-form-status-${submitStatus.type}`}>
                  <span className="gw-status-icon">{submitStatus.type === 'success' ? '✓' : '⚠️'}</span>
                  <span>{submitStatus.message}</span>
                  <div className="gw-status-progress"></div>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="gw-form-row-3d">
                  <div className="gw-form-group-3d">
                    <label className={focusedField === 'name' || formData.name ? 'focused' : ''}>
                      <span>Full Name</span>
                      <span className="gw-required">*</span>
                    </label>
                    <div className="gw-input-3d-wrapper">
                      <input 
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange}
                        onFocus={() => handleFocus('name')}
                        onBlur={handleBlur}
                        placeholder="John Doe"
                      />
                      <div className="gw-input-glow"></div>
                      <div className="gw-input-border"></div>
                    </div>
                  </div>
                  <div className="gw-form-group-3d">
                    <label className={focusedField === 'email' || formData.email ? 'focused' : ''}>
                      <span>Email</span>
                      <span className="gw-required">*</span>
                    </label>
                    <div className="gw-input-3d-wrapper">
                      <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange}
                        onFocus={() => handleFocus('email')}
                        onBlur={handleBlur}
                        placeholder="john@example.com"
                      />
                      <div className="gw-input-glow"></div>
                      <div className="gw-input-border"></div>
                    </div>
                  </div>
                </div>

                <div className="gw-form-row-3d">
                  <div className="gw-form-group-3d">
                    <label>Phone</label>
                    <div className="gw-input-3d-wrapper">
                      <input 
                        type="tel" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                      />
                      <div className="gw-input-glow"></div>
                      <div className="gw-input-border"></div>
                    </div>
                  </div>
                  <div className="gw-form-group-3d">
                    <label>Project Type <span className="gw-required">*</span></label>
                    <div className="gw-input-3d-wrapper gw-select-wrapper">
                      <select name="projectType" value={formData.projectType} onChange={handleChange}>
                        <option value="">Select project type</option>
                        {projectTypes.map(type => (
                          <option key={type.value} value={type.value}>
                            {type.icon} {type.label} - {type.price}
                          </option>
                        ))}
                      </select>
                      <div className="gw-select-arrow">▼</div>
                      <div className="gw-input-glow"></div>
                      <div className="gw-input-border"></div>
                    </div>
                  </div>
                </div>

                <div className="gw-form-group-3d">
                  <label>Budget Range <span className="gw-optional">(Optional)</span></label>
                  <div className="gw-input-3d-wrapper gw-select-wrapper">
                    <select name="budget" value={formData.budget} onChange={handleChange}>
                      <option value="">Select budget range</option>
                      {budgetRanges.map(range => (
                        <option key={range.value} value={range.value}>{range.label}</option>
                      ))}
                    </select>
                    <div className="gw-select-arrow">▼</div>
                    <div className="gw-input-glow"></div>
                    <div className="gw-input-border"></div>
                  </div>
                </div>

                <div className="gw-form-group-3d">
                  <label>Project Details <span className="gw-required">*</span></label>
                  <div className="gw-input-3d-wrapper">
                    <textarea 
                      name="message" 
                      rows="5" 
                      value={formData.message} 
                      onChange={handleChange}
                      placeholder="Tell us about your business, what features you need, any specific requirements..."
                    />
                    <div className="gw-input-glow"></div>
                    <div className="gw-input-border"></div>
                  </div>
                  <small>Minimum 10 characters</small>
                </div>

                <button type="submit" className="gw-submit-btn-3d" disabled={isSubmitting}>
                  <span className="gw-btn-text">{isSubmitting ? 'Sending...' : 'Send Request'}</span>
                  <span className="gw-btn-arrow">→</span>
                  <span className="gw-btn-shine"></span>
                  <span className="gw-btn-glow"></span>
                </button>

                <p className="gw-form-note-3d">
                  <span className="gw-note-icon">🔒</span>
                  We respect your privacy. No spam, ever.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
