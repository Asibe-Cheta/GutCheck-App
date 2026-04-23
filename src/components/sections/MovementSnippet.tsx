'use client'

import React from 'react'

const MovementSnippet: React.FC = () => {
  return (
    <section className="glass-section">
      <div className="container">
        <div className="glass-card fade-in">
          <div className="section-badge">Why we built this</div>
          <h2 className="section-title">More than an app. A movement.</h2>
          <p className="section-subtitle">
            GutChecks was built after a single moment. A Royal Navy veteran and former Goldman Sachs manager discovered her 11-year-old daughter was silently navigating manipulation, pressure, and confusing interactions alone. When asked why she had not come to her mum, she said: &quot;You have a lot going on, Mum. I did not want to add to your stress.&quot;
          </p>
          <p className="section-subtitle" style={{ marginTop: 0 }}>
            She searched for a tool that could help her daughter recognise red flags before they became real harm. It did not exist. So she built it.
          </p>
          <p className="section-subtitle" style={{ marginTop: 0, marginBottom: '24px' }}>
            GutChecks is more than an app. It is a mission to educate and empower users to recognise manipulation, grooming, and toxic behaviour, even when disguised as friendship, love, or opportunity, and guide them to safer next steps.
          </p>
          <div style={{ textAlign: 'center' }}>
            <a href="/about" className="btn-secondary">Read the full story</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MovementSnippet
