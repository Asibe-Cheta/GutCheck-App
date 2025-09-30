'use client'

import React from 'react'

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <div className="fade-in" style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div className="section-badge">How It Works</div>
          <h2 className="section-title">Simple, Private, Powerful</h2>
          <p className="section-subtitle">Get clarity on your interractions in three simple steps. No technical knowledge required.</p>
        </div>
        
        <div className="steps-container">
          <div className="step fade-in">
            <div className="step-number">1</div>
            <h3>Describe Your Situation</h3>
            <p>Tell us what happened or how someone made you feel in your own words. Our guided prompts help you share the full context.</p>
          </div>
          <div className="step fade-in">
            <div className="step-number">2</div>
            <h3>Get Expert Analysis</h3>
            <p>Our specialized AI analyzes for toxic patterns, assigns confidence scores, and identifies specific toxic behaviors.</p>
          </div>
          <div className="step fade-in">
            <div className="step-number">3</div>
            <h3>Take Informed Action</h3>
            <p>Receives guided response strategies, and provides resources. Disclaimer: It is an assistant, not an authority.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
