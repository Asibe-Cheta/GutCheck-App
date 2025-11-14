'use client'

import React from 'react'
import { Star, Quote } from 'lucide-react'

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 'user',
      content: 'This app helped me recognize manipulation patterns I never would have seen on my own. The anonymous analysis gave me the confidence to trust my gut feeling.',
      rating: 5
    },
    {
      id: 'user022',
      content: 'I was in a toxic friendship and didn\'t realize it until GutCheck showed me the red flags. The evidence-based approach made everything so clear.',
      rating: 5
    },
    {
      id: 'user145',
      content: 'The pattern tracking feature is incredible. It helped me see how someone was gradually isolating me over time. I\'m so grateful for this tool.',
      rating: 5
    },
    {
      id: 'user089',
      content: 'As someone who struggles with trusting my intuition, GutCheck has been a game-changer. It validates my feelings with actual evidence.',
      rating: 5
    },
    {
      id: 'user203',
      content: 'The anonymity is what sold me. I could analyze my situation without fear of judgment. This app truly understands what young people need.',
      rating: 5
    },
    {
      id: 'user156',
      content: 'I wish I had this app years ago. It would have saved me from so much emotional harm. Now I recommend it to all my friends.',
      rating: 5
    }
  ]

  return (
    <section id="testimonials" className="glass-section">
      <div className="container">
        <div className="glass-card fade-in">
          <div className="section-badge">What Users Say</div>
          <h2 className="section-title">Trusted by Thousands</h2>
          <p className="section-subtitle">Real stories from anonymous users who found clarity and safety with GutCheck.</p>
          
          <div className="features-grid" style={{ marginTop: '60px' }}>
            {testimonials.map((testimonial, index) => (
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
                  — {testimonial.id}
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

