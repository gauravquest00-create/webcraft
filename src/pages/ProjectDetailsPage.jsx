// src/pages/ProjectDetailsPage.jsx
import { useParams, Link } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'
import projectsData from '../data/projects.json'
import './ProjectDetailsPage.css'

export default function ProjectDetailsPage() {
  const { id } = useParams()
  const [project, setProject] = useState(null)
  const [loading, setLoading] = useState(true)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      const foundProject = projectsData.projects.find(p => p.id === parseInt(id))
      setProject(foundProject || null)
      setLoading(false)
      window.scrollTo(0, 0)
    }, 300)
  }, [id])

  useEffect(() => {
    // 3D Parallax effect on mouse move
    const handleMouseMove = (e) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      setMousePosition({ x, y })
      
      if (heroRef.current) {
        heroRef.current.style.transform = `perspective(1000px) rotateY(${x * 8}deg) rotateX(${-y * 5}deg) translateZ(20px)`
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const getProjectImages = (project) => {
    if (!project) return { hero: '', gallery: [] }
    
    if (project.slug === 'luxurynest') {
      return {
        hero: project.images.home || '/luxurynest/home.png',
        gallery: [
          project.images.home,
          project.images.about,
          project.images.property,
          project.images.launch,
          project.images.construction,
          project.images.constructionDetails
        ].filter(Boolean)
      }
    } else if (project.slug === 'ironparadise') {
      return {
        hero: project.images.home || '/ironparadise/home.png',
        gallery: [
          project.images.home,
          project.images.contact,
          project.images.plan,
          project.images.program
        ].filter(Boolean)
      }
    } else if (project.slug === 'gauravassociates') {
      return {
        hero: project.images.home || '/GA/about.png',
        gallery: [
          project.images.home,
          project.images.about,
          project.images.property
        ].filter(Boolean)
      }
    }
    return { hero: '', gallery: [] }
  }

  const images = project ? getProjectImages(project) : { hero: '', gallery: [] }

  if (loading) {
    return (
      <div className="project-loading-3d">
        <div className="loading-3d-container">
          <div className="loading-cube">
            <div className="loading-face front"></div>
            <div className="loading-face back"></div>
            <div className="loading-face right"></div>
            <div className="loading-face left"></div>
            <div className="loading-face top"></div>
            <div className="loading-face bottom"></div>
          </div>
          <p>Loading masterpiece...</p>
        </div>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="project-not-found-3d">
        <div className="not-found-3d-container">
          <div className="not-found-3d-icon">🔍</div>
          <h1>Project Not Found</h1>
          <p>The project you're looking for doesn't exist.</p>
          <Link to="/" className="btn-primary-3d">Back to Home</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="project-details-3d-page" ref={containerRef}>
      {/* 6D Animated Background */}
      <div className="project-bg-6d">
        <div className="bg-layer layer-1"></div>
        <div className="bg-layer layer-2"></div>
        <div className="bg-layer layer-3"></div>
        <div className="bg-layer layer-4"></div>
        <div className="bg-layer layer-5"></div>
        <div className="bg-layer layer-6"></div>
      </div>
      <div className="project-particles-3d">
        {[...Array(80)].map((_, i) => (
          <div key={i} className="particle-3d" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${3 + Math.random() * 7}s`,
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`
          }}></div>
        ))}
      </div>

      <div className="project-3d-container">
        {/* 3D Back Button */}
        <Link to="/project" className="back-button-3d">
          <div className="back-3d-wrapper">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            <span>Back to Projects</span>
            <div className="back-3d-glow"></div>
          </div>
        </Link>

        {/* 3D Hero Section */}
        <div className="project-hero-3d" ref={heroRef}>
          <div className="hero-3d-inner">
            <img 
              src={images.hero} 
              alt={project.title} 
              className="hero-3d-image"
              onError={(e) => {
                e.target.src = 'https://placehold.co/1200x500/0A1929/FFFFFF?text=Webcraft'
              }}
            />
            <div className="hero-3d-overlay">
              <div className="hero-3d-content">
                <span className="hero-3d-category">{project.category}</span>
                <h1 className="hero-3d-title">{project.title}</h1>
                {project.isLive && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="live-demo-3d-btn">
                    <span>🔗 View Live Demo</span>
                    <div className="btn-3d-glow"></div>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="project-3d-content-grid">
          {/* Left Column - Main Content */}
          <div className="project-3d-main">
            <div className="info-3d-section">
              <div className="section-3d-icon">📖</div>
              <h2>About the Project</h2>
              <p>{project.description}</p>
            </div>

            <div className="info-3d-section">
              <div className="section-3d-icon">⚠️</div>
              <h2>Challenge</h2>
              <p>{project.challenge}</p>
            </div>

            <div className="info-3d-section">
              <div className="section-3d-icon">💡</div>
              <h2>Solution</h2>
              <p>{project.solution}</p>
            </div>

            <div className="info-3d-section">
              <div className="section-3d-icon">✨</div>
              <h2>Key Features</h2>
              <div className="features-3d-list">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="feature-3d-item">
                    <span className="feature-3d-check">✓</span>
                    {feature}
                    <div className="feature-3d-glow"></div>
                  </div>
                ))}
              </div>
            </div>

            {images.gallery.length > 0 && (
              <div className="info-3d-section">
                <div className="section-3d-icon">🖼️</div>
                <h2>Gallery</h2>
                <div className="gallery-3d-grid">
                  {images.gallery.map((img, idx) => (
                    <div key={idx} className="gallery-3d-item">
                      <img 
                        src={img} 
                        alt={`${project.title} screenshot ${idx + 1}`}
                        onError={(e) => {
                          e.target.src = 'https://placehold.co/600x400/0A1929/FFFFFF?text=Image'
                        }}
                      />
                      <div className="gallery-3d-overlay">
                        <span>🔍 View</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - 3D Sidebar */}
          <div className="project-3d-sidebar">
            <div className="sidebar-3d-card">
              <div className="card-3d-glow"></div>
              <h3>Project Info</h3>
              <div className="info-3d-row">
                <span className="info-3d-label">Client</span>
                <span className="info-3d-value">{project.client}</span>
              </div>
              <div className="info-3d-row">
                <span className="info-3d-label">Location</span>
                <span className="info-3d-value">{project.location}</span>
              </div>
              <div className="info-3d-row">
                <span className="info-3d-label">Year</span>
                <span className="info-3d-value">{project.year}</span>
              </div>
              <div className="info-3d-row">
                <span className="info-3d-label">Duration</span>
                <span className="info-3d-value">{project.duration}</span>
              </div>
              <div className="info-3d-row">
                <span className="info-3d-label">Category</span>
                <span className="info-3d-value">{project.category}</span>
              </div>
              {project.price && (
                <div className="info-3d-row">
                  <span className="info-3d-label">Project Value</span>
                  <span className="info-3d-value">{project.price}</span>
                </div>
              )}
            </div>

            <div className="sidebar-3d-card">
              <div className="card-3d-glow"></div>
              <h3>Technologies</h3>
              <div className="tech-3d-list">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-3d-tag">{tech}</span>
                ))}
              </div>
            </div>

            {project.testimonial && (
              <div className="sidebar-3d-card testimonial-3d">
                <div className="card-3d-glow"></div>
                <div className="testimonial-3d-quote">"</div>
                <h3>Client Says</h3>
                <div className="testimonial-3d-text">"{project.testimonial.text}"</div>
                <div className="testimonial-3d-author">
                  <strong>{project.testimonial.name}</strong>
                  <span>{project.testimonial.role}</span>
                </div>
              </div>
            )}

            {project.liveUrl && (
              <div className="sidebar-3d-card demo-3d">
                <div className="card-3d-glow"></div>
                <h3>Live Demo</h3>
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="demo-3d-link"
                >
                  🌐 {project.slug === 'luxurynest' ? 'luxurynest.vercel.app' : 
                     project.slug === 'ironparadise' ? 'ironparadisgyms.vercel.app' : 
                     'gauravassociates.vercel.app'}
                  <div className="demo-3d-glow"></div>
                </a>
              </div>
            )}

            <div className="sidebar-3d-card cta-3d">
              <div className="card-3d-glow"></div>
              <h3>Start a Project</h3>
              <p>Have a similar project in mind?</p>
              <Link to="/get-website" className="cta-3d-btn">
                Get Free Quote →
                <div className="btn-3d-shine"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}