// src/pages/ServicesPage.jsx
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import servicesData from '../data/services.json'
import './ServicesPage.css'

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(null)
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [activeCategory, setActiveCategory] = useState('all')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const categories = ['all', ...new Set(servicesData.services.map(s => s.category))]

  const filteredServices = activeCategory === 'all' 
    ? servicesData.services 
    : servicesData.services.filter(s => s.category === activeCategory)

  const handleViewPlans = (service) => {
    setSelectedService(service)
    setSelectedPlan(null)
    setShowModal(true)
    document.body.style.overflow = 'hidden'
  }

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setSelectedService(null)
    setSelectedPlan(null)
    document.body.style.overflow = 'auto'
  }

  const handleGetQuote = (service, plan) => {
    const projectType = service.id.replace('_', '')
    const price = plan.price
    window.location.href = `/get-website?service=${projectType}&price=${price}`
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price)
  }

  return (
    <div className="services-page-3d">
      {/* 6D Animated Background */}
      <div className="services-bg-6d">
        <div className="bg-layer layer-1"></div>
        <div className="bg-layer layer-2"></div>
        <div className="bg-layer layer-3"></div>
        <div className="bg-layer layer-4"></div>
        <div className="bg-layer layer-5"></div>
        <div className="bg-layer layer-6"></div>
      </div>

      {/* 3D Particles */}
      <div className="services-particles-3d">
        {[...Array(60)].map((_, i) => (
          <div key={i} className="particle-3d" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${4 + Math.random() * 8}s`,
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`
          }}></div>
        ))}
      </div>

      <div className="services-page-container">
        {/* Back Button */}
        <Link to="/" className="services-back-btn">
          <div className="back-3d-wrapper">
            <span className="back-icon">←</span>
            <span className="back-text">Back to Home</span>
            <div className="back-glow"></div>
          </div>
        </Link>

        {/* Header */}
        <div className="services-page-header">
          <div className="header-badge-3d">
            <span className="badge-icon">🚀</span>
            <span>Our Services</span>
            <div className="badge-pulse"></div>
          </div>
          <h1 className="services-page-title">
            Comprehensive <span className="title-highlight">Web Solutions</span>
            <div className="title-glow-3d"></div>
          </h1>
          <p className="services-page-subtitle">
            Choose from our range of professional web development services
          </p>
          <div className="header-line-3d">
            <div className="line-dot"></div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="services-filter-3d">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className={`filter-btn-3d ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat === 'all' ? 'All Services' : cat}
              {activeCategory === cat && <div className="filter-active-glow"></div>}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="services-3d-grid">
          {filteredServices.map((service, index) => (
            <div 
              key={service.id} 
              className="service-3d-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="service-3d-inner">
                <div className="service-3d-front">
                  <div className="service-3d-header">
                    <div className="service-icon-wrapper">
                      <span className="service-icon">
                        {service.id === 'business_website' && '🏢'}
                        {service.id === 'real_estate_website' && '🏠'}
                        {service.id === 'landing_page' && '📈'}
                        {service.id === 'portfolio_website' && '🎨'}
                        {service.id === 'ecommerce_website' && '🛒'}
                        {service.id === 'custom_solution' && '💎'}
                      </span>
                    </div>
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-category">{service.category}</p>
                  </div>
                  <p className="service-description">{service.description}</p>
                  <div className="service-price-range">
                    {service.plans.length > 0 && (
                      <span>
                        {formatPrice(service.plans[0].price)} 
                        {service.plans.length > 1 && ` - ${formatPrice(service.plans[service.plans.length - 1].price)}`}
                      </span>
                    )}
                  </div>
                  <button 
                    className="service-view-btn"
                    onClick={() => handleViewPlans(service)}
                  >
                    View Plans →
                  </button>
                </div>
              </div>
              <div className="service-3d-glow"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Details Modal */}
      {showModal && selectedService && (
        <div className="services-modal-overlay" onClick={handleCloseModal}>
          <div className="services-modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={handleCloseModal}>✕</button>
            
            <div className="modal-header">
              <div className="modal-icon">
                {selectedService.id === 'business_website' && '🏢'}
                {selectedService.id === 'real_estate_website' && '🏠'}
                {selectedService.id === 'landing_page' && '📈'}
                {selectedService.id === 'portfolio_website' && '🎨'}
                {selectedService.id === 'ecommerce_website' && '🛒'}
                {selectedService.id === 'custom_solution' && '💎'}
              </div>
              <h2>{selectedService.title}</h2>
              <p>{selectedService.description}</p>
            </div>

            <div className="modal-plans">
              {selectedService.plans.map((plan, idx) => (
                <div 
                  key={idx} 
                  className={`modal-plan-card ${selectedPlan === plan ? 'selected' : ''}`}
                  onClick={() => handleSelectPlan(plan)}
                >
                  <div className="plan-header">
                    <h3>{plan.name}</h3>
                    <div className="plan-price">{formatPrice(plan.price)}</div>
                    {plan.best_for && <span className="plan-badge">{plan.best_for}</span>}
                  </div>
                  <div className="plan-features">
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="plan-feature">
                        <span className="feature-check">✓</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="plan-footer">
                    <div className="plan-delivery">⏱️ Delivery: {plan.delivery_time}</div>
                    <button 
                      className="plan-select-btn"
                      onClick={() => handleGetQuote(selectedService, plan)}
                    >
                      Get Quote →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}