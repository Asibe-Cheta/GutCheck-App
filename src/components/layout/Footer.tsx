import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import appleIcon from '../../../apple2.svg'
import googlePlayIcon from '../../../google-play.svg'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <Link href="/" className="logo">
              <Image 
                src="/gc-dark.png" 
                alt="GutCheck Logo" 
                width={48} 
                height={48} 
                className="logo-icon"
              />
              GutChecks
            </Link>
            <p>GutChecks helps users recognise manipulation, red flags, and toxic behaviour, even when disguised as friendship, love, or opportunity, and guides them to safer next steps.</p>
            <div style={{ display: 'flex', gap: '16px', marginTop: '24px' }}>
              <a 
                href="https://apps.apple.com/gb/app/gutcheck-app/id6754253217" 
                target="_blank" 
                rel="noopener noreferrer"
                className="app-button" 
                style={{ minWidth: 'auto', padding: '12px' }}
              >
                <div className="app-icon" style={{ width: '32px', height: '32px' }}>
                  <Image src={appleIcon} alt="Apple App Store" width={18} height={18} />
                </div>
              </a>
              <a 
                href="https://play.google.com/store/apps/details?id=org.mygutcheck.app&pcampaignid=web_share" 
                target="_blank" 
                rel="noopener noreferrer"
                className="app-button" 
                style={{ minWidth: 'auto', padding: '12px' }}
              >
                <div className="app-icon" style={{ width: '32px', height: '32px' }}>
                  <Image src={googlePlayIcon} alt="Google Play Store" width={18} height={18} />
                </div>
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h3>Resources</h3>
            <a href="/resources">Resources</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/delete-account">Delete Account</a>
            <a href="/contact">Contact Us</a>
            <a href="#feedback">Feedback</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025-2026 GutChecks. All rights reserved. | Protecting your wellbeing with privacy and respect. | Available on iOS and Android now</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer