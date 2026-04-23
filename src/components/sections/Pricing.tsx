'use client'

import React from 'react'

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <div className="fade-in" style={{ textAlign: 'center' }}>
          <div className="section-badge">Transparent Pricing</div>
          <h2 className="section-title">Simple pricing. Serious clarity.</h2>
        </div>
        
        <div className="pricing-cards">
          <div className="pricing-card featured fade-in">
            <div className="plan-name">Premium</div>
            <div className="plan-price">£6.99<small>/month</small></div>
            <div className="plan-subtitle">23p/day billed monthly</div>
            <ul className="plan-features">
              <li>Unlimited conversations</li>
              <li>Pattern tracking over time</li>
              <li>Red flag breakdown with clear explanations</li>
              <li>Save and export your records</li>
              <li>Helpline links for your region</li>
              <li>100% private and anonymous</li>
            </ul>
            <a href="#get-started" className="btn-primary">Experience the app for free</a>
            <p style={{ color: 'var(--text-secondary)', marginTop: '12px', fontSize: '0.9rem' }}>3 days free, then £6.99/month</p>
          </div>
          <div className="pricing-card fade-in">
            <div className="plan-name">Yearly Plan</div>
            <div className="plan-price">£59.99<small>/year</small></div>
            <div className="plan-subtitle">16p/day billed annually</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--success-green)', fontWeight: 600, marginBottom: '8px' }}>
              Save 28% vs monthly
            </div>
            <ul className="plan-features">
              <li>Unlimited conversations</li>
              <li>Pattern tracking over time</li>
              <li>Red flag breakdown with clear explanations</li>
              <li>Save and export your records</li>
              <li>Helpline links for your region</li>
              <li>100% private and anonymous</li>
            </ul>
            <a href="#get-started" className="btn-secondary">Experience the app for free</a>
            <p style={{ color: 'var(--text-secondary)', marginTop: '12px', fontSize: '0.9rem' }}>3 days free, then £59.99/year</p>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Trusted by 1,000+ users • 100% private</p>
        </div>
      </div>
    </section>
  )
}

export default Pricing
