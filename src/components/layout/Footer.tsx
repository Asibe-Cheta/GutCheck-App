import React from 'react'
import { Smartphone, Download } from 'lucide-react'
import Image from 'next/image'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#" className="logo">
              <Image 
                src="/gc-dark.png" 
                alt="GutCheck Logo" 
                width={48} 
                height={48} 
                className="logo-icon"
              />
              GutCheck
            </a>
            <p>Your private space to decode relationships and trust your instincts. Empowering young adults with AI-powered emotional intelligence and relationship safety tools.</p>
            <div style={{ display: 'flex', gap: '16px', marginTop: '24px' }}>
              <a href="#" className="app-button" style={{ minWidth: 'auto', padding: '12px' }}>
                <div className="app-icon" style={{ width: '32px', height: '32px' }}>
                  <Smartphone className="w-4 h-4 text-white" />
                </div>
              </a>
              <a href="#" className="app-button" style={{ minWidth: 'auto', padding: '12px' }}>
                <div className="app-icon" style={{ width: '32px', height: '32px' }}>
                  <Download className="w-4 h-4 text-white" />
                </div>
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h3>Product</h3>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#security">Security</a>
            <a href="#get-started">Get Started</a>
          </div>
          <div className="footer-section">
            <h3>Resources</h3>
            <a href="#help">Help Center</a>
            <a href="#crisis">Crisis Resources</a>
            <a href="#blog">Safety Blog</a>
            <a href="#guides">Safety Guides</a>
            <a href="#community">Community</a>
          </div>
          <div className="footer-section">
            <h3>Support</h3>
            <a href="#contact">Contact Us</a>
            <a href="#live-chat">Live Chat</a>
            <a href="#emergency">Emergency Help</a>
            <a href="#feedback">Feedback</a>
            <a href="#partnerships">Partnerships</a>
          </div>
          <div className="footer-section">
            <h3>About</h3>
            <a href="#about">About Us</a>
            <a href="#mission">Our Mission</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="#careers">Careers</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 GutCheck. All rights reserved. | Protecting your emotional wellbeing with privacy and respect. | Available on Android and iOS</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer