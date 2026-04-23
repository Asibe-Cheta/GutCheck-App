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
            GutChecks is 100% private and anonymous. We do not collect your name, email, or any personal details. Your conversations are encrypted and never shared with anyone; not advertisers, not third parties, not us. You are in control of your data at all times.
          </p>
          <ul style={{ maxWidth: '760px', margin: '0 auto', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            <li>No account required to start</li>
            <li>No personal data collected</li>
            <li>Conversations encrypted end-to-end</li>
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
