import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './ThankYouPage.css'

export default function ThankYouPage() {
  const [enquiryData, setEnquiryData] = useState(null)

  useEffect(() => {
    // Get enquiry data from sessionStorage
    const data = sessionStorage.getItem('enquiryData')
    if (data) {
      setEnquiryData(JSON.parse(data))
    }
  }, [])

  return (
    <div className="thankyou-page">
      <div className="thankyou-container">
        
        {/* Animated Checkmark */}
        <div className="success-animation">
          <div className="checkmark-circle">
            <div className="checkmark-check"></div>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="thankyou-title">Thank You, {enquiryData?.name || 'Friend'}! 🎉</h1>
        
        {/* Subtitle */}
        <p className="thankyou-subtitle">
          Your enquiry has been received successfully.
        </p>

        {/* Enquiry Summary Card */}
        <div className="enquiry-summary">
          <h3>📋 Your Enquiry Details</h3>
          <div className="summary-grid">
            <div className="summary-item">
              <span className="summary-label">Name</span>
              <span className="summary-value">{enquiryData?.name || 'Not provided'}</span>
            </div>
            <div className="summary-item">
              <span className="summary-label">Email</span>
              <span className="summary-value">{enquiryData?.email || 'Not provided'}</span>
            </div>
            <div className="summary-item">
              <span className="summary-label">Subject</span>
              <span className="summary-value">{enquiryData?.subject || 'General'}</span>
            </div>
            <div className="summary-item">
              <span className="summary-label">Submitted On</span>
              <span className="summary-value">{enquiryData?.timestamp || new Date().toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Trust Cards */}
        <div className="trust-cards">
          <div className="trust-card">
            <span className="trust-icon">⏱️</span>
            <h4>Quick Response</h4>
            <p>We'll get back to you within 24 hours</p>
          </div>
          <div className="trust-card">
            <span className="trust-icon">🎯</span>
            <h4>Free Consultation</h4>
            <p>30-min free consultation call</p>
          </div>
          <div className="trust-card">
            <span className="trust-icon">💯</span>
            <h4>Satisfaction Guaranteed</h4>
            <p>100% money-back guarantee</p>
          </div>
        </div>

        {/* What Happens Next */}
        <div className="next-steps">
          <h3>🚀 What Happens Next?</h3>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-text">
                <strong>We'll Review</strong>
                <span>Our team will review your enquiry</span>
              </div>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-text">
                <strong>We'll Contact You</strong>
                <span>Via email or phone within 24 hours</span>
              </div>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-text">
                <strong>Free Consultation</strong>
                <span>Discuss your project in detail</span>
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp Contact */}
        <div className="whatsapp-contact">
          <p>Need immediate assistance?</p>
          <a href="https://wa.me/919876543210?text=Hi%2C%20I%20just%20submitted%20an%20enquiry" target="_blank" rel="noopener noreferrer">
            💬 Chat with us on WhatsApp
          </a>
        </div>

        {/* Buttons */}
        <div className="thankyou-buttons">
          <Link to="/" className="btn-primary">🏠 Back to Home</Link>
          <Link to="/get-website" className="btn-secondary">📄 Get a Website</Link>
        </div>

        {/* Reference ID */}
        <p className="reference-id">
          Ref: WEBCRAFT-{Date.now().toString().slice(-8)}
        </p>
      </div>
    </div>
  )
}