// src/sections/Footer.jsx
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  const [logoError, setLogoError] = useState(false)
  const currentYear = new Date().getFullYear()
  const navigate = useNavigate()

  useEffect(() => {
    // Staggered animation for footer columns
    const columns = document.querySelectorAll('.premium-footer-col')
    columns.forEach((col, index) => {
      col.style.animation = `premiumFooterFadeInUp 0.5s ease forwards ${index * 0.1}s`
    })
  }, [])

  const handleNavigation = (path) => {
    navigate(path)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: '💼', color: '#0077B5' },
    { name: 'GitHub', url: 'https://github.com', icon: '🐙', color: '#333' },
    { name: 'Twitter', url: 'https://twitter.com', icon: '🐦', color: '#1DA1F2' },
     { 
    name: 'Instagram', 
    url: 'https://instagram.com', 
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.34 3.608 1.318.977.978 1.255 2.244 1.318 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.063 1.366-.34 2.633-1.318 3.608-.978.977-2.244 1.255-3.608 1.318-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.063-2.633-.34-3.608-1.318-.977-.978-1.255-2.244-1.318-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.063-1.366.34-2.633 1.318-3.608.978-.977 2.244-1.255 3.608-1.318C8.416 2.176 8.796 2.163 12 2.163zM12 0C8.741 0 8.332.015 7.052.074 5.776.133 4.666.42 3.723 1.364 2.78 2.307 2.493 3.417 2.434 4.693 2.376 5.973 2.361 6.382 2.361 9.641s.015 3.668.074 4.948c.059 1.276.346 2.386 1.289 3.329.943.943 2.053 1.23 3.329 1.289 1.28.059 1.689.074 4.948.074s3.668-.015 4.948-.074c1.276-.059 2.386-.346 3.329-1.289.943-.943 1.23-2.053 1.289-3.329.059-1.28.074-1.689.074-4.948s-.015-3.668-.074-4.948c-.059-1.276-.346-2.386-1.289-3.329-.943-.943-2.053-1.23-3.329-1.289C15.668.015 15.259 0 12 0z" fill="currentColor"/>
        <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z" fill="currentColor"/>
        <circle cx="18.406" cy="5.594" r="1.44" fill="currentColor"/>
      </svg>
    ),
    color: '#E4405F' 
  }
  ]

  const quickLinks = [
    { name: 'Home', path: '/', icon: '🏠' },
    { name: 'About', path: '/about', icon: '👤' },
    { name: 'Contact', path: '/contact', icon: '📞' },
    { name: 'Get a Website', path: '/get-website', icon: '🚀' }
  ]

  const services = [
    { name: 'Business Websites', path: '/get-website', icon: '🏢' },
    { name: 'Portfolio Websites', path: '/get-website', icon: '🎨' },
    { name: 'Landing Pages', path: '/get-website', icon: '📈' },
    { name: 'Custom Solutions', path: '/get-website', icon: '⚙️' }
  ]

  return (
    <footer className="premium-footer">
      {/* Animated Background */}
      <div className="premium-footer-bg-glow"></div>
      <div className="premium-footer-bg-grid"></div>
      <div className="premium-footer-particles">
        {[...Array(30)].map((_, i) => (
          <div key={i} className="footer-particle-dot" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${5 + Math.random() * 10}s`
          }}></div>
        ))}
      </div>

      <div className="premium-footer-container">
        <div className="premium-footer-grid">
          {/* Brand Column */}
          <div className="premium-footer-col brand-col">
            <div className="premium-footer-logo">
              {!logoError ? (
                <img 
                  src="/logo.png" 
                  alt="Webcraft" 
                  className="footer-logo-img" 
                  onError={() => setLogoError(true)} 
                />
              ) : (
                <div className="footer-logo-placeholder">W</div>
              )}
              <div className="logo-glow"></div>
            </div>
            <p className="premium-footer-description">
              Building professional websites that help businesses grow online.
            </p>
            <div className="premium-footer-social">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="premium-social-link"
                  style={{ '--social-color': social.color }}
                >
                  <span className="social-icon">{social.icon}</span>
                  <span className="social-tooltip">{social.name}</span>
                  <div className="social-glow"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="premium-footer-col">
            <h4 className="premium-footer-title">Quick Links</h4>
            <div className="title-underline"></div>
            <ul className="premium-footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button onClick={() => handleNavigation(link.path)} className="premium-footer-link">
                    <span className="link-icon">{link.icon}</span>
                    <span className="link-text">{link.name}</span>
                    <span className="link-arrow">→</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="premium-footer-col">
            <h4 className="premium-footer-title">Services</h4>
            <div className="title-underline"></div>
            <ul className="premium-footer-links">
              {services.map((service, index) => (
                <li key={index}>
                  <button onClick={() => handleNavigation(service.path)} className="premium-footer-link">
                    <span className="link-icon">{service.icon}</span>
                    <span className="link-text">{service.name}</span>
                    <span className="link-arrow">→</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="premium-footer-col">
            <h4 className="premium-footer-title">Get In Touch</h4>
            <div className="title-underline"></div>
            <ul className="premium-footer-contact">
              <li>
                <a href="mailto:hello@webcraft.dev" className="premium-contact-link">
                  <span className="contact-icon">📧</span>
                  <span>hello@webcraft.in</span>
                  <div className="contact-hover"></div>
                </a>
              </li>
              <li>
                <a href="tel:+919876543210" className="premium-contact-link">
                  <span className="contact-icon">📞</span>
                  <span>WA: 8130839987</span>
                  <div className="contact-hover"></div>
                </a>
              </li>
              <li>
                <div className="premium-contact-link">
                  <span className="contact-icon">🕒</span>
                  <span>Mon-Fri: 9AM - 6PM</span>
                </div>
              </li>
            </ul>
             <div className="premium-footer-bottom-links">
              <button onClick={() => handleNavigation('/terms')} className="bottom-link">
                Terms & Conditions
                <span className="link-dot"></span>
              </button>
              <span className="bottom-separator">|</span>
              <button onClick={() => handleNavigation('/privacy')} className="bottom-link">
                Privacy Policy
                <span className="link-dot"></span>
              </button>
            </div>

            {/* Newsletter Section
            <div className="premium-newsletter">
              <h4 className="premium-footer-title-small">Newsletter</h4>
              <div className="newsletter-form">
                <input type="email" placeholder="Your email" className="newsletter-input" />
                <button className="newsletter-btn">Subscribe</button>
              </div>
            </div> */}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="premium-footer-bottom">
          <div className="footer-bottom-content">
            <p className="premium-footer-copyright">
              © {currentYear} Webcraft. All rights reserved.
            </p>
           
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button className="premium-scroll-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <span className="scroll-icon">↑</span>
        <span className="scroll-text">Top</span>
      </button>
    </footer>
  )
}
