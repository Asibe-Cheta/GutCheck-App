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
            <p>GutCheck – empowering users with ai powered emotional intelligence adults to transform innate intuition into visible, understandable guide, protecting their safety and mental health</p>
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
            <h3>Resources</h3>
            <a href="/resources">Resources</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/contact">Contact Us</a>
            <a href="#feedback">Feedback</a>
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