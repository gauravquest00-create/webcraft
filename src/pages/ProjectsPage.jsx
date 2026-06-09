// src/pages/ProjectsPage.jsx
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import projectsData from '../data/projects.json'
import './ProjectsPage.css'

export default function ProjectsPage() {
  const navigate = useNavigate()
  const [filter, setFilter] = useState('all')
  const [displayProjects, setDisplayProjects] = useState([])

  useEffect(() => {
    window.scrollTo(0, 0)
    
    // Map projects from JSON with display images (SAME PATTERN as FeaturedProjects)
    const mappedProjects = projectsData.projects.map((project, index) => {
      // Get the primary image for each project based on slug
      let primaryImage = ''
      if (project.slug === 'luxurynest') {
        primaryImage = project.images?.home || '/luxurynest/home.png'
      } else if (project.slug === 'ironparadise') {
        primaryImage = project.images?.home || '/ironparadise/home.png'
      } else if (project.slug === 'gauravassociates') {
        primaryImage = project.images?.home || '/GA/about.png'
      }

      return {
        id: project.id,
        title: project.title,
        slug: project.slug,
        category: project.category,
        client: project.client,
        location: project.location,
        price: project.price,
        year: project.year,
        duration: project.duration,
        description: project.description,
        challenge: project.challenge,
        solution: project.solution,
        features: project.features,
        technologies: project.technologies,
        image: primaryImage,
        images: project.images,
        testimonial: project.testimonial,
        stats: project.stats,
        isLive: project.isLive,
        liveUrl: project.liveUrl,
        demoUrl: project.demoUrl
      }
    })
    
    setDisplayProjects(mappedProjects)
  }, [])

  // Get unique categories
  const categories = ['all', ...new Set(displayProjects.map(p => p.category))]

  const filteredProjects = filter === 'all' 
    ? displayProjects 
    : displayProjects.filter(p => p.category === filter)

  const handleProjectClick = (projectId) => {
    navigate(`/project/${projectId}`)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (displayProjects.length === 0) {
    return (
      <div className="projects-loading-3d">
        <div className="loading-cube-3d">
          <div className="cube-face front"></div>
          <div className="cube-face back"></div>
          <div className="cube-face right"></div>
          <div className="cube-face left"></div>
          <div className="cube-face top"></div>
          <div className="cube-face bottom"></div>
        </div>
        <p>Loading amazing projects...</p>
      </div>
    )
  }

  return (
    <div className="projects-page-3d">
      {/* 6D Animated Background */}
      <div className="projects-bg-6d">
        <div className="bg-layer layer-1"></div>
        <div className="bg-layer layer-2"></div>
        <div className="bg-layer layer-3"></div>
        <div className="bg-layer layer-4"></div>
        <div className="bg-layer layer-5"></div>
        <div className="bg-layer layer-6"></div>
      </div>
      
      {/* 3D Particles */}
      <div className="projects-particles-3d">
        {[...Array(60)].map((_, i) => (
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

      <div className="projects-page-container">
        {/* Back Button */}
        <button className="back-3d-btn" onClick={() => navigate(-1)}>
          <div className="back-3d-wrapper">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            <span>Back</span>
            <div className="back-3d-glow"></div>
          </div>
        </button>

        {/* Header */}
        <div className="projects-page-header">
          <div className="header-badge-3d">
            <span className="badge-icon">🏆</span>
            <span>Our Work</span>
            <div className="badge-pulse"></div>
          </div>
          <h1 className="projects-page-title">
            Featured <span className="title-highlight">Projects</span>
            <div className="title-glow-3d"></div>
          </h1>
          <p className="projects-page-subtitle">
            Explore our latest web development projects
          </p>
          <div className="header-line-3d">
            <div className="line-dot"></div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="filter-3d-container">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className={`filter-3d-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat === 'all' ? 'All Projects' : cat}
              {filter === cat && <div className="filter-active-glow"></div>}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-3d-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-3d-card"
              onClick={() => handleProjectClick(project.id)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-3d-inner">
                <div className="project-3d-front">
                  <div className="project-3d-image-wrapper">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="project-3d-image"
                      onError={(e) => {
                        e.target.src = `https://placehold.co/600x400/0A1929/FFFFFF?text=${project.title}`
                      }}
                    />
                    {project.isLive && (
                      <div className="live-badge-3d">
                        <span className="live-dot"></span>
                        LIVE
                      </div>
                    )}
                    <div className="project-3d-overlay">
                      <div className="overlay-content">
                        <span className="view-project">View Project</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="project-3d-content">
                    <span className="project-3d-category">{project.category}</span>
                    <h3 className="project-3d-title">{project.title}</h3>
                    <p className="project-3d-description">
                      {project.description.length > 100 
                        ? project.description.substring(0, 100) + '...' 
                        : project.description}
                    </p>
                    <div className="project-3d-tech">
                      {project.technologies && project.technologies.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="tech-3d-badge">{tech}</span>
                      ))}
                    </div>
                    <div className="project-3d-footer">
                      <div className="project-3d-price">{project.price}</div>
                      <div className="project-3d-link">
                        <span>View Details</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-3d-glow"></div>
            </div>
          ))}
        </div>

        {/* No Projects Found */}
        {filteredProjects.length === 0 && (
          <div className="no-projects-3d">
            <div className="no-projects-icon">🔍</div>
            <h3>No projects found</h3>
            <p>Try changing the filter or check back later</p>
            <button className="reset-filter-btn" onClick={() => setFilter('all')}>
              Show All Projects
            </button>
          </div>
        )}
      </div>
    </div>
  )
}