'use client'

import React from 'react'
import { Smartphone, Download } from 'lucide-react'

const AppDownload: React.FC = () => {
  return (
    <section id="get-app" className="app-download">
      <div className="container">
        <div className="fade-in" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div className="section-badge">Get the App</div>
          <h2 className="section-title">Available on All Devices</h2>
          <p className="section-subtitle">Download GutCheck for iOS and Android. Your safety companion, wherever you are.</p>
          
          <div className="app-buttons">
            <a href="#" className="app-button">
              <div className="app-icon">
                <Smartphone className="w-5 h-5 text-white" />
              </div>
              <div className="app-text">
                <small>Download on the</small>
                <strong>App Store</strong>
              </div>
            </a>
            <a href="#" className="app-button">
              <div className="app-icon">
                <Download className="w-5 h-5 text-white" />
              </div>
              <div className="app-text">
                <small>Get it on</small>
                <strong>Google Play</strong>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppDownload
