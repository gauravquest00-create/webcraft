// src/pages/AboutPage.jsx
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import About from '../components/About'
import Process from '../components/Process'
import Technologies from '../components/Technologies'
import CTA from '../components/CTA'
import './AboutPage.css'

export default function AboutPage({ onNavigate }) {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const goBack = () => navigate(-1)

  return (
    <div className="about-page-wrapper">
      {/* 3D Animated Background */}
      <div className="about-bg-glow"></div>
      <div className="about-bg-grid"></div>
      <div className="about-bg-gradient"></div>
      <div className="about-particles">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="about-particle" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${4 + Math.random() * 8}s`,
            width: `${2 + Math.random() * 3}px`,
            height: `${2 + Math.random() * 3}px`
          }}></div>
        ))}
      </div>

      <div className="about-page-container">
        {/* 3D Back Button */}
        <button className="about-back-btn-3d" onClick={goBack}>
          <div className="about-back-3d-wrapper">
            <span className="about-back-icon">←</span>
            <span className="about-back-text">Back to Home</span>
            <div className="about-back-glow"></div>
          </div>
        </button>

        {/* Animated Header */}
        <div className="about-page-header">
          <div className="about-page-badge">
            <span className="about-badge-icon">✨</span>
            <span>About Us</span>
            <div className="about-badge-pulse"></div>
          </div>
          <h1 className="about-page-title">
            Building <span className="about-title-highlight">Digital Excellence</span>
            <div className="about-title-glow"></div>
          </h1>
          <p className="about-page-subtitle">
            We create stunning, high-performance websites that help businesses grow and succeed online.
          </p>
          <div className="about-header-line">
            <div className="about-line-dot"></div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="about-content-sections">
          <div className="about-section-wrapper">
            <About />
          </div>
          <div className="about-section-wrapper">
            <Process />
          </div>
          <div className="about-section-wrapper">
            <Technologies />
          </div>
          <div className="about-section-wrapper">
            <CTA onNavigate={onNavigate} />
          </div>
        </div>
      </div>
    </div>
  )
}