import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import LandingPage from './pages/LandingPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import GetWebsitePage from './pages/GetWebsitePage'
import ProjectDetailsPage from './pages/ProjectDetailsPage'
import ThankYouPage from './pages/ThankYouPage'
import TermsPage from './pages/TermsPage'
import PrivacyPage from './pages/PrivacyPage'
import ProjectsPage from './pages/ProjectsPage'

function App() {
  return (
    <Router>
      <CustomCursor />
      <Navigation />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/get-website" element={<GetWebsitePage />} />
        <Route path="/project/:id" element={<ProjectDetailsPage />} />
                <Route path="/thank-you" element={<ThankYouPage />} />
<Route path="/terms" element={<TermsPage />} />
<Route path="/privacy" element={<PrivacyPage />} />
<Route path="/project" element={<ProjectsPage />} />

      </Routes>
      <Footer />
    </Router>
  )
}

export default App