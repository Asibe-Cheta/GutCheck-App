'use client'

import React from 'react'

const TrustDisclaimer: React.FC = () => {
  return (
    <section className="how-it-works">
      <div className="container">
        <div className="glass-card fade-in" style={{ textAlign: 'center' }}>
          <div className="section-badge">Important</div>
          <h2 className="section-title">A helpful tool, not a replacement for real help</h2>
          <p className="section-subtitle">
            GutChecks is designed to help users reflect on interactions and spot possible red flags. It is not a crisis service, counsellor, legal authority, or clinical tool. If you are in immediate danger or need urgent support, please contact emergency services or a helpline in your area.
          </p>
          <p className="section-subtitle" style={{ marginTop: 0 }}>
            Advisory note: GutChecks is developed with guidance from mental health practitioners, social workers, and counsellors to help ensure responses align with professional recommendations.
          </p>
          <a href="/resources" className="btn-primary">Find support resources near you</a>
        </div>
      </div>
    </section>
  )
}

export default TrustDisclaimer
