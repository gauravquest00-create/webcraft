// src/pages/TermsPage.jsx
import { Link } from 'react-router-dom'
import './TermsPage.css'

export default function TermsPage() {
  return (
    <div className="terms-page-3d">
      {/* 6D Animated Background */}
      <div className="terms-bg-6d">
        <div className="bg-layer layer-1"></div>
        <div className="bg-layer layer-2"></div>
        <div className="bg-layer layer-3"></div>
        <div className="bg-layer layer-4"></div>
        <div className="bg-layer layer-5"></div>
        <div className="bg-layer layer-6"></div>
      </div>
      
      {/* 3D Particles */}
      <div className="terms-particles-3d">
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

      <div className="terms-container-3d">
        {/* Back Button */}
        <Link to="/" className="terms-back-btn">
          <div className="back-3d-wrapper">
            <span className="back-icon">←</span>
            <span className="back-text">Back to Home</span>
            <div className="back-glow"></div>
          </div>
        </Link>

        {/* Header */}
        <div className="terms-header-3d">
          <div className="terms-badge-3d">
            <span className="badge-icon">⚖️</span>
            <span>Legal</span>
            <div className="badge-pulse"></div>
          </div>
          <h1 className="terms-title-3d">
            Terms & <span className="title-highlight">Conditions</span>
            <div className="title-glow"></div>
          </h1>
          <p className="terms-subtitle-3d">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          <div className="header-line-3d">
            <div className="line-dot"></div>
          </div>
        </div>

        <div className="terms-content-3d">
          {/* Introduction */}
          <div className="terms-section-3d">
            <h2>1. Introduction</h2>
            <p>Welcome to Webcraft. By accessing or using our website and services, you agree to be bound by these Terms & Conditions. If you disagree with any part of these terms, you may not access our services.</p>
          </div>

          {/* Services */}
          <div className="terms-section-3d">
            <h2>2. Our Services</h2>
            <p>Webcraft provides professional website development services including but not limited to:</p>
            <ul>
              <li>Business Websites</li>
              <li>Portfolio Websites</li>
              <li>Landing Pages</li>
              <li>Real Estate Websites</li>
              <li>Custom Web Solutions</li>
              <li>CRM Integration</li>
            </ul>
          </div>

          {/* Payment Terms */}
          <div className="terms-section-3d">
            <h2>3. Payment Terms</h2>
            <p>Our payment structure is as follows:</p>
            <ul>
              <li><strong>50% advance</strong> payment required before starting any project</li>
              <li><strong>50% balance</strong> payment due upon project completion before final delivery</li>
              <li>All prices are in <strong>Indian Rupees (₹)</strong></li>
              <li>Payments are non-refundable after work has commenced</li>
              <li>Monthly subscription plans are billed in advance</li>
            </ul>
          </div>

          {/* Delivery Timeline */}
          <div className="terms-section-3d">
            <h2>4. Delivery Timeline</h2>
            <ul>
              <li><strong>Static Websites:</strong> 3-5 business days</li>
              <li><strong>WordPress Sites:</strong> 5-7 business days</li>
              <li><strong>Real Estate Websites:</strong> 7-10 business days</li>
              <li><strong>Custom Solutions:</strong> As per project agreement</li>
            </ul>
            <p>Delays due to client feedback or content availability will extend the timeline accordingly.</p>
          </div>

          {/* Client Responsibilities */}
          <div className="terms-section-3d">
            <h2>5. Client Responsibilities</h2>
            <p>As a client, you agree to:</p>
            <ul>
              <li>Provide all necessary content (text, images, logos) in a timely manner</li>
              <li>Respond to feedback requests within 48 hours</li>
              <li>Provide accurate and complete information</li>
              <li>Ensure you have rights to all content you provide</li>
            </ul>
          </div>

          {/* Intellectual Property */}
          <div className="terms-section-3d">
            <h2>6. Intellectual Property</h2>
            <ul>
              <li><strong>Upon full payment:</strong> You own the completed website design and code</li>
              <li><strong>Webcraft retains:</strong> Rights to reuse generic code components</li>
              <li><strong>Third-party assets:</strong> Images, fonts, plugins remain under their respective licenses</li>
            </ul>
          </div>

          {/* Refund Policy */}
          <div className="terms-section-3d highlight-section">
            <h2>7. Refund Policy</h2>
            <p>We offer a <strong>100% money-back guarantee</strong> under these conditions:</p>
            <ul>
              <li>You are not satisfied with the initial design concept</li>
              <li>Request must be made within 7 days of project start</li>
              <li>No work has been completed beyond design phase</li>
              <li>Monthly subscriptions can be cancelled anytime (no refund for current month)</li>
            </ul>
            <p className="highlight-text">🎯 Our 5 Days or FREE Guarantee: If we don't deliver in 5 days (for eligible projects), you get the website FREE.</p>
          </div>

          {/* Support & Maintenance */}
          <div className="terms-section-3d">
            <h2>8. Support & Maintenance</h2>
            <ul>
              <li><strong>Free Support:</strong> 30 days included with every project</li>
              <li><strong>Monthly Maintenance:</strong> ₹3,000 - ₹5,000/month (optional)</li>
              <li>Support includes bug fixes, security updates, and minor content changes</li>
              <li>Response time: Within 24 hours (business days)</li>
            </ul>
          </div>

          {/* Hosting */}
          <div className="terms-section-3d">
            <h2>9. Hosting</h2>
            <p>Webcraft can arrange hosting for your website at additional cost. We are not responsible for:</p>
            <ul>
              <li>Third-party hosting downtime</li>
              <li>Server-related issues outside our control</li>
              <li>Data loss due to hosting provider issues</li>
            </ul>
          </div>

          {/* Limitation of Liability */}
          <div className="terms-section-3d">
            <h2>10. Limitation of Liability</h2>
            <p>Webcraft shall not be liable for:</p>
            <ul>
              <li>Any indirect, incidental, or consequential damages</li>
              <li>Loss of profits, data, or business opportunities</li>
              <li>Damages exceeding the amount paid for the service</li>
            </ul>
          </div>

          {/* Termination */}
          <div className="terms-section-3d">
            <h2>11. Termination</h2>
            <p>We reserve the right to terminate services if:</p>
            <ul>
              <li>Payment is not received on time</li>
              <li>Client provides inappropriate or illegal content</li>
              <li>Client violates these terms</li>
            </ul>
          </div>

          {/* Changes to Terms */}
          <div className="terms-section-3d">
            <h2>12. Changes to Terms</h2>
            <p>Webcraft may update these terms at any time. Continued use of our services constitutes acceptance of the updated terms.</p>
          </div>

          {/* Governing Law */}
          <div className="terms-section-3d">
            <h2>13. Governing Law</h2>
            <p>These terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Bengaluru, Karnataka.</p>
          </div>

          {/* Contact */}
          <div className="terms-section-3d">
            <h2>14. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us:</p>
            <ul>
              <li>📧 Email: <a href="mailto:hello@webcraft.dev">hello@webcraft.in</a></li>
              <li>📞 Phone: <a href="tel:+919876543210">+91 8130839987</a></li>
            </ul>
          </div>

          {/* Acceptance */}
          <div className="terms-acceptance-3d">
            <p>By using Webcraft services, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions.</p>
          </div>
        </div>
      </div>
    </div>
  )
}