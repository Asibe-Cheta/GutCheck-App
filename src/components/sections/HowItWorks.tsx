'use client'

import React from 'react'

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <div className="fade-in" style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div className="section-badge">How It Works</div>
          <h2 className="section-title">How GutChecks works in 3 simple steps</h2>
          <p className="section-subtitle">Get clarity on your interactions in three simple steps. No technical knowledge required.</p>
        </div>

        <div className="steps-container">
          <div className="step fade-in">
            <div className="step-number">1</div>
            <h3>Tell us what happened</h3>
            <p>Describe the situation in your own words, a message, a conversation, something at school, work, home, or online. You can paste screenshots or type it out.</p>
          </div>
          <div className="step fade-in">
            <div className="step-number">2</div>
            <h3>See the red flags clearly</h3>
            <p>GutChecks identifies possible warning signs, pressure tactics, and unhealthy patterns, and explains what it found and why.</p>
          </div>
          <div className="step fade-in">
            <div className="step-number">3</div>
            <h3>Decide what to do next</h3>
            <p>Use the insight to reflect, set boundaries, talk to someone you trust, or keep tracking patterns. GutChecks helps you think; it does not decide for you.</p>
          </div>
        </div>

        <div className="glass-card fade-in" style={{ marginTop: '48px', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.35rem', marginBottom: '16px', color: 'var(--text-primary)' }}>
            App analysis preview
          </h3>
          <img
            src="/app-analysis.jpg"
            alt="GutChecks app analysis preview"
            style={{ maxWidth: '100%', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.12)', margin: '0 auto' }}
          />
          <p className="section-subtitle" style={{ marginTop: '14px', marginBottom: 0 }}>
            If this image does not appear, add your App Store or Google Play analysis screenshot as <code>/public/app-analysis.jpg</code>.
          </p>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
