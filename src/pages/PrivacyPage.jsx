// src/pages/PrivacyPage.jsx
import { Link } from 'react-router-dom'
import './PrivacyPage.css'

export default function PrivacyPage() {
  return (
    <div className="privacy-page-3d">
      {/* 6D Animated Background */}
      <div className="privacy-bg-6d">
        <div className="bg-layer layer-1"></div>
        <div className="bg-layer layer-2"></div>
        <div className="bg-layer layer-3"></div>
        <div className="bg-layer layer-4"></div>
        <div className="bg-layer layer-5"></div>
        <div className="bg-layer layer-6"></div>
      </div>
      
      {/* 3D Particles */}
      <div className="privacy-particles-3d">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="particle-3d" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${4 + Math.random() * 8}s`,
            width: `${2 + Math.random() * 3}px`,
            height: `${2 + Math.random() * 3}px`
          }}></div>
        ))}
      </div>

      <div className="privacy-container-3d">
        {/* Back Button */}
        <Link to="/" className="privacy-back-btn">
          <div className="back-3d-wrapper">
            <span className="back-icon">←</span>
            <span className="back-text">Back to Home</span>
            <div className="back-glow"></div>
          </div>
        </Link>

        {/* Header */}
        <div className="privacy-header-3d">
          <div className="privacy-badge-3d">
            <span className="badge-icon">🔒</span>
            <span>Legal</span>
            <div className="badge-pulse"></div>
          </div>
          <h1 className="privacy-title-3d">
            Privacy <span className="title-highlight">Policy</span>
            <div className="title-glow"></div>
          </h1>
          <p className="privacy-subtitle-3d">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          <div className="header-line-3d">
            <div className="line-dot"></div>
          </div>
        </div>

        <div className="privacy-content-3d">
          {/* Sections with 3D effect */}
          <div className="privacy-section-3d">
            <h2>1. Introduction</h2>
            <p>At Webcraft ("we", "our", "us"), we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>
            <p>By using our services, you consent to the data practices described in this policy.</p>
          </div>

          <div className="privacy-section-3d">
            <h2>2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
              <li><strong>Personal Information:</strong> Name, email address, phone number, company name</li>
              <li><strong>Project Information:</strong> Website requirements, project details, budget range</li>
              <li><strong>Technical Data:</strong> IP address, browser type, device information, pages visited</li>
              <li><strong>Communication Data:</strong> Messages, emails, chat conversations</li>
            </ul>
          </div>

          <div className="privacy-section-3d">
            <h2>3. How We Collect Information</h2>
            <ul>
              <li><strong>Contact Forms:</strong> When you fill out our contact or quote forms</li>
              <li><strong>Email Communication:</strong> When you email us directly</li>
              <li><strong>Cookies:</strong> When you browse our website</li>
              <li><strong>Third-party Sources:</strong> Analytics tools like Google Analytics</li>
            </ul>
          </div>

          <div className="privacy-section-3d">
            <h2>4. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Respond to your enquiries and provide quotes</li>
              <li>Deliver and manage our services</li>
              <li>Process payments and send invoices</li>
              <li>Improve our website and services</li>
              <li>Send important updates about your project</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>

          <div className="privacy-section-3d">
            <h2>5. Sharing Your Information</h2>
            <p>We do not sell your personal information. We may share your information with:</p>
            <ul>
              <li><strong>Service Providers:</strong> Hosting providers, email services, payment processors</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In case of merger, acquisition, or sale of assets</li>
            </ul>
            <p>All third-party providers are contractually obligated to protect your data.</p>
          </div>

          <div className="privacy-section-3d highlight-section">
            <h2>6. Data Security</h2>
            <p>We implement industry-standard security measures to protect your information:</p>
            <ul>
              <li>SSL encryption for all data transmission</li>
              <li>Secure servers with firewalls</li>
              <li>Regular security updates and monitoring</li>
              <li>Limited access to personal data</li>
            </ul>
            <p className="highlight-text">🔒 However, no method of transmission over the internet is 100% secure.</p>
          </div>

          <div className="privacy-section-3d">
            <h2>7. Data Retention</h2>
            <p>We retain your personal information for as long as necessary to:</p>
            <ul>
              <li>Provide our services to you</li>
              <li>Comply with legal obligations</li>
              <li>Resolve disputes</li>
              <li>Enforce our agreements</li>
            </ul>
            <p>Typically, we retain client data for 3 years after project completion.</p>
          </div>

          <div className="privacy-section-3d">
            <h2>8. Cookies</h2>
            <p>We use cookies to enhance your browsing experience. Cookies are small files stored on your device. We use:</p>
            <ul>
              <li><strong>Essential Cookies:</strong> Required for website functionality</li>
              <li><strong>Analytics Cookies:</strong> To understand how visitors use our site (Google Analytics)</li>
              <li><strong>Preference Cookies:</strong> To remember your settings (e.g., dark mode)</li>
            </ul>
            <p>You can disable cookies in your browser settings, but this may affect website functionality.</p>
          </div>

          <div className="privacy-section-3d">
            <h2>9. Third-Party Links</h2>
            <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of these sites. We encourage you to read their privacy policies.</p>
          </div>

          <div className="privacy-section-3d">
            <h2>10. Children's Privacy</h2>
            <p>Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children.</p>
          </div>

          <div className="privacy-section-3d">
            <h2>11. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li><strong>Access:</strong> Request a copy of your data</li>
              <li><strong>Correction:</strong> Correct inaccurate data</li>
              <li><strong>Deletion:</strong> Request deletion of your data</li>
              <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
              <li><strong>Portability:</strong> Receive your data in a readable format</li>
            </ul>
            <p>To exercise these rights, contact us at <a href="mailto:hello@webcraft.dev">hello@webcraft.dev</a>.</p>
          </div>

          <div className="privacy-section-3d">
            <h2>12. Google Analytics</h2>
            <p>We use Google Analytics to understand website traffic. Google Analytics collects:</p>
            <ul>
              <li>Pages visited and time spent</li>
              <li>Device and browser information</li>
              <li>Approximate location (city level)</li>
              <li>Referral sources</li>
            </ul>
            <p>You can opt-out of Google Analytics by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a>.</p>
          </div>

          <div className="privacy-section-3d">
            <h2>13. International Data Transfers</h2>
            <p>Your information may be transferred to and processed in countries other than India. We ensure appropriate safeguards are in place for such transfers.</p>
          </div>

          <div className="privacy-section-3d">
            <h2>14. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date.</p>
          </div>

          <div className="privacy-section-3d">
            <h2>15. Grievance Officer</h2>
            <p>In accordance with Indian law, we have appointed a Grievance Officer to address any concerns:</p>
            <ul>
              <li><strong>Name:</strong> Webcraft Support Team</li>
              <li><strong>Email:</strong> <a href="mailto:grievance@webcraft.dev">grievance@webcraft.dev</a></li>
              <li><strong>Response Time:</strong> Within 7 business days</li>
            </ul>
          </div>

          <div className="privacy-section-3d">
            <h2>16. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
            <ul>
              <li>📧 Email: <a href="mailto:hello@webcraft.dev">hello@webcraft.dev</a></li>
              <li>📞 Phone: <a href="tel:+919876543210">+91 98765 43210</a></li>
              <li>📍 Address: Webcraft Studio, Bengaluru, India</li>
            </ul>
          </div>

          {/* Consent */}
          <div className="privacy-consent-3d">
            <p>By using our website and services, you consent to this Privacy Policy.</p>
          </div>
        </div>
      </div>
    </div>
  )
}