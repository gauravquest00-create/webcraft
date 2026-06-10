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
  { 
    name: 'LinkedIn', 
    url: 'https://linkedin.com', 
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.204 0 22.225 0z" fill="currentColor"/>
      </svg>
    ),
    color: '#0077B5' 
  },
  { 
    name: 'GitHub', 
    url: 'https://github.com', 
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.86 1.23 1.095 1.83 2.85 1.32 3.555 1.005.105-.78.42-1.32.765-1.62-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57C20.565 21.795 24 17.31 24 12c0-6.63-5.37-12-12-12z" fill="currentColor"/>
      </svg>
    ),
    color: '#333333' 
  },
  { 
    name: 'Twitter', 
    url: 'https://twitter.com', 
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.846-12.185c.003-.001.005-.002.008-.003z" fill="currentColor"/>
      </svg>
    ),
    color: '#1DA1F2' 
  },
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
  },
  { 
    name: 'YouTube', 
    url: 'https://youtube.com', 
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.376.505A3.017 3.017 0 0 0 .502 6.186C0 8.073 0 12 0 12s0 3.927.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.376-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.927 24 12 24 12s0-3.927-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="currentColor"/>
      </svg>
    ),
    color: '#FF0000' 
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
