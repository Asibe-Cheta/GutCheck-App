'use client'

import React from 'react'

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <div className="fade-in" style={{ textAlign: 'center' }}>
          <div className="section-badge">Transparent Pricing</div>
          <h2 className="section-title">Unlimited Peace of Mind</h2>
          <p className="section-subtitle">For just 32p a day, protect yourself with specialized relationship safety tools.</p>
        </div>
        
        <div className="pricing-cards">
          <div className="pricing-card fade-in">
            <div className="plan-name">Free</div>
            <div className="plan-price">£0<small>/month</small></div>
            <ul className="plan-features">
              <li>3 analyses per month</li>
              <li>Basic pattern recognition</li>
              <li>Risk level indicators</li>
              <li>Email support</li>
              <li>Privacy protection</li>
              <li>Crisis resource access</li>
            </ul>
            <a href="#get-started" className="btn-secondary">Start Free</a>
          </div>
          <div className="pricing-card featured fade-in">
            <div className="plan-name">Premium</div>
            <div className="plan-price">£9.47<small>/month</small></div>
            <ul className="plan-features">
              <li>Unlimited analyses</li>
              <li>Advanced pattern tracking</li>
              <li>Confidence scoring system</li>
              <li>Evidence documentation</li>
              <li>Relationship mapping</li>
              <li>Cultural sensitivity analysis</li>
              <li>Priority crisis support</li>
              <li>Export reports for professionals</li>
              <li>Trigger identification system</li>
            </ul>
            <a href="#get-started" className="btn-primary">Start 7-Day Free Trial</a>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Join 1000+ users who feel safer • End-to-end encrypted • 100% private</p>
        </div>
      </div>
    </section>
  )
}

export default Pricing
