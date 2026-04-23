'use client'

import React from 'react'

const WHAT_IT_HELPS_WITH = [
  "Someone's messages feel manipulative but you are not sure why",
  'A friendship or relationship feels toxic and you keep second-guessing yourself',
  'An online interaction feels off and you want a second opinion',
  'You are being pressured, guilt-tripped, or gaslit at school, work, home, or online',
  'Someone is trying to recruit you into extreme views or isolate you from people you trust',
  'You think you or someone you know is being groomed or exploited',
  'You want to track a pattern of behaviour over time',
  'You want to understand red flags in a scam, catfish, or financial manipulation',
  'A family member, landlord, or authority figure is behaving in a controlling way',
]

const WhatItHelpsWith: React.FC = () => {
  return (
    <section className="how-it-works">
      <div className="container">
        <div className="fade-in" style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="section-badge">What it helps with</div>
          <h2 className="section-title">Use GutChecks when...</h2>
        </div>

        <div className="glass-card fade-in">
          <p style={{ color: 'var(--text-secondary)', maxWidth: '900px', margin: '0 auto 16px', textAlign: 'left' }}>
            Use cases include the scenarios below, but GutChecks is not limited to these only.
          </p>
          <ul style={{ color: 'var(--text-secondary)', maxWidth: '900px', margin: '0 auto', lineHeight: 1.85, textAlign: 'left', listStyleType: 'disc', paddingLeft: '26px' }}>
            {WHAT_IT_HELPS_WITH.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="section-subtitle" style={{ marginTop: '24px', marginBottom: 0, textAlign: 'right', maxWidth: '900px' }}>
            GutChecks helps users understand what they are seeing in any situation, online or offline. It does not make decisions for them.
          </p>
        </div>
      </div>
    </section>
  )
}

export default WhatItHelpsWith
