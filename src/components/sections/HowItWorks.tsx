'use client'

import React from 'react'
import Image from 'next/image'
import appAnalysisImage from '../../../new-analysis.png'

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
          <div style={{ maxWidth: '320px', margin: '0 auto', padding: '10px', borderRadius: '28px', background: 'linear-gradient(145deg, rgba(255,255,255,0.14), rgba(255,255,255,0.04))', border: '1px solid rgba(255,255,255,0.16)', boxShadow: '0 20px 60px rgba(0,0,0,0.35)' }}>
            <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
              <Image
                src={appAnalysisImage}
                alt="GutChecks app analysis mobile demo"
                style={{ width: '100%', height: 'auto', display: 'block' }}
                priority
              />
            </div>
          </div>
          <p className="section-subtitle" style={{ marginTop: '14px', marginBottom: 0 }}>
            App analysis demo view.
          </p>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
