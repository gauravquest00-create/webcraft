// src/sections/Technologies.jsx
import React, { useEffect, useRef } from 'react'
import './Technologies.css'

export default function Technologies() {
  const techRefs = useRef([])

  useEffect(() => {
    // Staggered animation for tech items
    techRefs.current.forEach((item, index) => {
      if (item) {
        item.style.animation = `premiumTechFadeInUp 0.5s ease forwards ${index * 0.03}s`
      }
    })
  }, [])

  const technologies = [
    { name: 'HTML5', icon: '🌐', category: 'Frontend', color: '#E44D26', delay: '0s' },
    { name: 'CSS3', icon: '🎨', category: 'Frontend', color: '#264DE4', delay: '0.03s' },
    { name: 'JavaScript', icon: '⚡', category: 'Frontend', color: '#F7DF1E', delay: '0.06s' },
    { name: 'React', icon: '⚛️', category: 'Frontend', color: '#61DAFB', delay: '0.09s' },
    { name: 'Node.js', icon: '🟢', category: 'Backend', color: '#339933', delay: '0.12s' },
    { name: 'Express', icon: '🚂', category: 'Backend', color: '#000000', delay: '0.15s' },
    { name: 'MongoDB', icon: '🍃', category: 'Database', color: '#47A248', delay: '0.18s' },
    { name: 'GitHub', icon: '🐙', category: 'Tools', color: '#181717', delay: '0.21s' },
    { name: 'Vercel', icon: '▲', category: 'Hosting', color: '#000000', delay: '0.24s' },
    { name: 'Tailwind', icon: '🎨', category: 'CSS', color: '#06B6D4', delay: '0.27s' },
    { name: 'TypeScript', icon: '📘', category: 'Language', color: '#3178C6', delay: '0.3s' },
    { name: 'Next.js', icon: '▲', category: 'Framework', color: '#000000', delay: '0.33s' },
    { name: 'PostgreSQL', icon: '🐘', category: 'Database', color: '#336791', delay: '0.36s' },
    { name: 'Docker', icon: '🐳', category: 'DevOps', color: '#2496ED', delay: '0.39s' },
    { name: 'Figma', icon: '🎨', category: 'Design', color: '#F24E1E', delay: '0.42s' }
  ]

  // Group technologies by category
  const categories = {
    'Frontend': technologies.filter(t => t.category === 'Frontend'),
    'Backend': technologies.filter(t => t.category === 'Backend'),
    'Database': technologies.filter(t => t.category === 'Database'),
    'Tools & Hosting': technologies.filter(t => ['Tools', 'Hosting', 'CSS', 'Language', 'Framework', 'Design', 'DevOps'].includes(t.category))
  }

  return (
    <section className="premium-technologies" id="technologies">
      {/* Animated Background */}
      <div className="premium-tech-bg-glow"></div>
      <div className="premium-tech-bg-grid"></div>
      <div className="premium-tech-particles">
        {[...Array(40)].map((_, i) => (
          <div key={i} className="tech-particle-dot" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${5 + Math.random() * 10}s`
          }}></div>
        ))}
      </div>

      <div className="premium-tech-container">
        <div className="premium-tech-header">
          <div className="premium-tech-badge">
            <span className="badge-icon">⚙️</span>
            <span>Tech Stack</span>
            <span className="badge-pulse-ring"></span>
          </div>
          <h2 className="premium-tech-title">
            Modern <span className="title-highlight">Technologies</span>
            <div className="title-glow"></div>
          </h2>
          <p className="premium-tech-subtitle">
            Cutting-edge tools for modern web development
          </p>
        </div>

        {/* Category Grid */}
        {Object.entries(categories).map(([category, items]) => (
          <div key={category} className="premium-tech-category">
            <div className="category-header">
              <div className="category-icon">{category === 'Frontend' ? '🎨' : category === 'Backend' ? '⚙️' : category === 'Database' ? '🗄️' : '🛠️'}</div>
              <h3 className="category-title">{category}</h3>
              <div className="category-line"></div>
            </div>
            <div className="premium-tech-grid">
              {items.map((tech, idx) => (
                <div 
                  key={idx} 
                  className="premium-tech-item"
                  ref={el => techRefs.current.push(el)}
                  style={{ '--tech-color': tech.color }}
                >
                  <div className="tech-3d-card">
                    <div className="tech-card-front">
                      <div className="tech-icon-wrapper">
                        <span className="tech-icon">{tech.icon}</span>
                        <div className="tech-icon-glow"></div>
                      </div>
                      <span className="tech-name">{tech.name}</span>
                      <span className="tech-category">{tech.category}</span>
                    </div>
                    <div className="tech-card-back">
                      <div className="tech-back-content">
                        <span className="tech-back-icon">🚀</span>
                        <span className="tech-back-text">Expert Level</span>
                        <div className="tech-progress">
                          <div className="tech-progress-bar" style={{ width: '90%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="premium-tech-scroll">
        <div className="scroll-line">
          <div className="scroll-progress"></div>
        </div>
      </div>
    </section>
  )
}