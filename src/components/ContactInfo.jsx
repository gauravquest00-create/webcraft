// src/components/ContactInfo.jsx
import { useEffect } from 'react'
import './ContactInfo.css'

export default function ContactInfo() {
  const contactInfo = [
    { icon: '📧', title: 'Email Us', details: 'heywebcraft@gmail.com', link: 'mailto:hello@webcraft.dev', color: '#3B82F6', subtext: 'We reply within 24h' },
    { icon: '📞', title: 'Call Us', details: '+91 8130839987', link: 'tel:+919876543210', color: '#10B981', subtext: 'Mon-Fri, 9AM-6PM' },
    { icon: '💬', title: 'WhatsApp', details: '+91 8130839987', link: 'https://wa.me/919876543210', color: '#25D366', subtext: 'Quick replies' },
    { icon: '🕒', title: 'Response Time', details: 'Within 24 hours', link: null, color: '#F59E0B', subtext: 'Average 12 hours' }
  ]

  useEffect(() => {
    // Staggered animation for contact cards
    const cards = document.querySelectorAll('.premium-contact-info-card')
    cards.forEach((card, index) => {
      card.style.animation = `premiumContactFadeInUp 0.5s ease forwards ${index * 0.1}s`
    })
  }, [])

  return (
    <div className="premium-contact-info-grid">
      {contactInfo.map((info, index) => (
        <div 
          key={index} 
          className="premium-contact-info-card" 
          style={{ '--contact-color': info.color }}
        >
          {/* 3D Glow Effect */}
          <div className="card-3d-glow"></div>
          
          {/* Floating Particles */}
          <div className="card-particles">
            <span className="particle"></span>
            <span className="particle"></span>
            <span className="particle"></span>
          </div>
          
          <div className="card-inner">
            <div className="info-icon-wrapper">
              <span className="info-icon">{info.icon}</span>
              <div className="icon-glow-ring"></div>
              <div className="icon-pulse"></div>
            </div>
            
            <h3 className="contact-title">{info.title}</h3>
            
            {info.link ? (
              <a 
                href={info.link} 
                target={info.title === 'WhatsApp' ? '_blank' : '_self'} 
                rel="noopener noreferrer"
                className="contact-link"
              >
                <span className="link-text">{info.details}</span>
                <span className="link-arrow">→</span>
                <span className="link-glow"></span>
              </a>
            ) : (
              <p className="contact-detail">{info.details}</p>
            )}
            
            <p className="contact-subtext">{info.subtext}</p>
            
            {/* Decorative Line */}
            <div className="card-decorative-line">
              <div className="line-progress"></div>
            </div>
          </div>
          
          {/* Hover Border */}
          <div className="card-hover-border"></div>
        </div>
      ))}
    </div>
  )
}
