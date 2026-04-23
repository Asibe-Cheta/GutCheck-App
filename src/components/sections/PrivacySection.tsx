'use client'

import React from 'react'

const PrivacySection: React.FC = () => {
  return (
    <section className="glass-section">
      <div className="container">
        <div className="glass-card fade-in">
          <div className="section-badge">Privacy</div>
          <h2 className="section-title">Your space. Your privacy. No exceptions.</h2>
          <p className="section-subtitle">
            GutChecks is 100% private and anonymous. We do not collect your name, email, or any personal details. Conversation analysis runs on-device where possible, and conversation content is not stored by us. If AI guidance is used, content is processed only to generate your response and is not used to train models. Your data is never sold or shared with advertisers or third parties.
          </p>
          <ul style={{ maxWidth: '760px', margin: '0 auto', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            <li>No account required to start</li>
            <li>No personal data collected</li>
            <li>On-device processing where possible</li>
            <li>No conversation storage by us</li>
            <li>Encrypted transfer for supported AI guidance</li>
            <li>Delete your data anytime</li>
            <li>GDPR compliant</li>
          </ul>
          <div style={{ textAlign: 'center', marginTop: '24px' }}>
            <a href="/privacy" className="btn-secondary">Read our full privacy policy</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PrivacySection
