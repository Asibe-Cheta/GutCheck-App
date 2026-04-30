'use client'

import React from 'react'
import Image from 'next/image'
import appleIcon from '../../../apple2.svg'
import googlePlayIcon from '../../../google-play.svg'

const AppDownload: React.FC = () => {
  return (
    <section id="get-app" className="app-download">
      <div className="container">
        <div className="fade-in" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div className="section-badge">Get the App</div>
          <h2 className="section-title">Available on All Devices</h2>
          <p className="section-subtitle">Download GutChecks on iOS and Android now.</p>
          
          <div className="app-buttons">
            <a 
              href="https://apps.apple.com/gb/app/gutcheck-app/id6754253217" 
              target="_blank" 
              rel="noopener noreferrer"
              className="app-button"
            >
              <div className="app-icon">
                <Image src={appleIcon} alt="Apple App Store" width={22} height={22} />
              </div>
              <div className="app-text">
                <small>Download on the</small>
                <strong>App Store</strong>
              </div>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=org.mygutcheck.app&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="app-button"
            >
              <div className="app-icon">
                <Image src={googlePlayIcon} alt="Google Play Store" width={22} height={22} />
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
