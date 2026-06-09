// src/sections/FeaturedProjects.jsx
import { useNavigate } from 'react-router-dom'
import React, { useEffect } from 'react'
import projectsData from '../data/projects.json'
import './FeaturedProjects.css'

export default function FeaturedProjects() {
  const navigate = useNavigate()

  useEffect(() => {
    // Staggered animation for project cards
    const cards = document.querySelectorAll('.premium-project-card')
    cards.forEach((card, index) => {
      card.style.animation = `premiumProjectFadeInUp 0.6s ease forwards ${index * 0.1}s`
    })
  }, [])

  const handleProjectClick = (projectId) => {
    navigate(`/project/${projectId}`)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Map projects from JSON with display images
  const displayProjects = projectsData.projects.map((project, index) => {
    // Get the primary image for each project
    let primaryImage = ''
    if (project.slug === 'luxurynest') {
      primaryImage = project.images.home || '/luxurynest/home.png'
    } else if (project.slug === 'ironparadise') {
      primaryImage = project.images.home || '/ironparadise/home.png'
    } else if (project.slug === 'gauravassociates') {
      primaryImage = project.images.home || '/GA/about.png'
    }

    return {
      id: project.id,
      title: project.title,
      category: project.category,
      description: project.description,
      image: primaryImage,
      tags: project.technologies.slice(0, 3),
      delay: `${index * 0.1}s`,
      slug: project.slug,
      isLive: project.isLive
    }
  })

  return (
    <section className="premium-projects" id="projects">
      {/* Animated Background */}
      <div className="premium-projects-bg-glow"></div>
      <div className="premium-projects-bg-grid"></div>
      <div className="premium-projects-particles">
        {[...Array(35)].map((_, i) => (
          <div key={i} className="project-particle-dot" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${4 + Math.random() * 8}s`
          }}></div>
        ))}
      </div>

      <div className="premium-projects-container">
        <div className="premium-projects-header">
          <div className="premium-projects-badge">
            <span className="badge-icon">🏆</span>
            <span>Our Work</span>
            <span className="badge-pulse-ring"></span>
          </div>
          <h2 className="premium-projects-title">
            Featured <span className="title-highlight">Projects</span>
            <div className="title-glow"></div>
          </h2>
          <p className="premium-projects-subtitle">
            Real websites built for real businesses
          </p>
        </div>

        <div className="premium-projects-grid">
          {displayProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="premium-project-card"
              onClick={() => handleProjectClick(project.id)}
              style={{ '--card-color': '#6366F1' }}
            >
              <div className="premium-project-card-glow"></div>
              <div className="premium-project-image-wrapper">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="premium-project-img"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = 'https://placehold.co/600x400/0A1929/FFFFFF?text=Webcraft'
                  }}
                />
                {project.isLive && (
                  <div className="premium-live-badge">
                    <span className="live-dot"></span>
                    LIVE
                  </div>
                )}
                <div className="premium-project-overlay">
                  <div className="premium-overlay-content">
                    <span className="view-project-text">View Project</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="premium-project-content">
                <div className="premium-project-category">{project.category}</div>
                <h3 className="premium-project-title">{project.title}</h3>
                <p className="premium-project-description">{project.description}</p>
                <div className="premium-project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="premium-project-tag">{tag}</span>
                  ))}
                </div>
                <div className="premium-project-link">
                  <span>View Details</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </div>
              <div className="premium-project-card-border"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="premium-projects-scroll">
        <div className="scroll-line">
          <div className="scroll-progress"></div>
        </div>
      </div>
    </section>
  )
}