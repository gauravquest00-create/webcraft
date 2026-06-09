import Hero from '../components/Hero'
import WhyChoose from '../components/WhyChoose'
import Services from '../components/Services'
import FeaturedProjects from '../components/FeaturedProjects'
import About from '../components/About'
import Process from '../components/Process'
import Technologies from '../components/Technologies'
import CTA from '../components/CTA'
import FloatingActionButtons from '../components/common/FloatingActionButtons'  // ← Added

export default function LandingPage() {
  return (
    <>
      <Hero />
      <WhyChoose />
      <Services />
      <FeaturedProjects />
      <About />
      <Process />
      <Technologies />
      <CTA />
      <FloatingActionButtons />  {/* ← Added - Bottom right floating buttons */}
    </>
  )
}