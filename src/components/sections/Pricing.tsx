'use client'

import React from 'react'

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <div className="fade-in" style={{ textAlign: 'center' }}>
          <div className="section-badge">Transparent Pricing</div>
          <h2 className="section-title">For less than a cookie, users will protect what matters most: safety and mental health in a world that never sleeps.</h2>
        </div>
        
        <div className="pricing-cards">
          <div className="pricing-card featured fade-in">
            <div className="plan-name">Premium</div>
            <div className="plan-price">£9.99<small>/month</small></div>
            <div className="plan-subtitle">32p/day billed monthly</div>
            <ul className="plan-features">
              <li>Unlimited analysis</li>
              <li>Advanced pattern tracking</li>
              <li>Confidence scoring</li>
              <li>Evidence documentation</li>
              <li>Relationship mapping</li>
              <li>Cultural sensitivity analysis</li>
              <li>Priority crisis support</li>
              <li>Export report</li>
              <li>Trigger identification system</li>
            </ul>
            <a href="#get-started" className="btn-primary">Start 7-Day Free Trial</a>
          </div>
          <div className="pricing-card fade-in">
            <div className="plan-name">Yearly Plan</div>
            <div className="plan-price">£99.99<small>/year</small></div>
            <div className="plan-subtitle">27p/day billed annually</div>
            <ul className="plan-features">
              <li>Unlimited analysis</li>
              <li>Advanced pattern tracking</li>
              <li>Confidence scoring</li>
              <li>Evidence documentation</li>
              <li>Relationship mapping</li>
              <li>Cultural sensitivity analysis</li>
              <li>Priority crisis support</li>
              <li>Export report</li>
              <li>Trigger identification system</li>
            </ul>
            <a href="#get-started" className="btn-secondary">Start 7-Day Free Trial</a>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Join 1000+ people seeking safety • 100% private</p>
        </div>
      </div>
    </section>
  )
}

export default Pricing
