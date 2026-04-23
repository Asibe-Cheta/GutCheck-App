'use client'

import React from 'react'
import { Star, Quote } from 'lucide-react'

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 'Anonymous (aged 19)',
      content: 'I kept going back and forth on whether I was overreacting. GutChecks helped me see it was actually a pattern.',
      rating: 5
    },
    {
      id: 'Anonymous (aged 16)',
      content: 'Someone at school was being really manipulative and I didn\'t know how to explain it. GutChecks broke it down so I could see what was happening.',
      rating: 5
    },
    {
      id: 'Anonymous (aged 21)',
      content: 'I used it when an online conversation started feeling really off. It flagged things I hadn\'t even noticed.',
      rating: 5
    },
    {
      id: 'Anonymous (aged 17)',
      content: 'The privacy was everything. I wasn\'t ready to talk to anyone yet.',
      rating: 5
    },
    {
      id: 'Anonymous (aged 24)',
      content: 'The pattern tracking showed me it wasn\'t just a bad day, it was a habit. That made it so much easier to trust what I was feeling.',
      rating: 5
    },
    {
      id: 'Anonymous (aged 20)',
      content: 'I could finally put into words what had been making me uncomfortable for months. It gave me the clarity to do something about it.',
      rating: 5
    }
  ]

  return (
    <section id="testimonials" className="glass-section">
      <div className="container">
        <div className="glass-card fade-in">
          <div className="section-badge">What Users Say</div>
          <h2 className="section-title">Why people use GutChecks</h2>
          <p className="section-subtitle">Real experiences from people who needed a second opinion, and got clarity.</p>
          
          <div className="features-grid" style={{ marginTop: '60px' }}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="feature-card fade-in">
                <div className="feature-icon" style={{ background: 'rgba(79, 209, 199, 0.2)', color: 'var(--accent-teal)' }}>
                  <Quote className="w-8 h-8" />
                </div>
                <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-accent-teal" style={{ color: 'var(--accent-teal)' }} />
                  ))}
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '16px', fontStyle: 'italic' }}>
                  &quot;{testimonial.content}&quot;
                </p>
                <div style={{ color: 'var(--accent-teal)', fontWeight: 600, fontSize: '0.9rem' }}>
                  {testimonial.id}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

