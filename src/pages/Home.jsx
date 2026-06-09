import { useState } from 'react'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import WhyChoose from '../components/WhyChoose'
import Services from '../components/Services'
import FeaturedProjects from '../components/FeaturedProjects'
import About from '../components/About'
import Process from '../components/Process'
import Technologies from '../components/Technologies'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import ProjectModal from '../components/ProjectModal'

export default function LandingPage() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <div>
      <Navigation />
     
    <landing></landing>
      <Footer />
     
    </div>
  )
}