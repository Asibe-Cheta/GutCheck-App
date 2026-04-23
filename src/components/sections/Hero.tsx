'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      {/* Hero Floating Elements */}
      <div className="hero-floating-elements">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 1, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="floating-card floating-card-1"
        >
          <div style={{ color: '#4fd1c7', fontWeight: 600 }}>100% Private</div>
          <div style={{ color: '#a0aec0', fontSize: '14px' }}>& Anonymous</div>
        </motion.div>

        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, -1, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="floating-card floating-card-2"
        >
          <div style={{ color: '#68d391', fontWeight: 600 }}>Spot the Pattern</div>
          <div style={{ color: '#a0aec0', fontSize: '14px' }}>No Judgment</div>
        </motion.div>

        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 1, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="floating-card floating-card-3"
        >
          <div style={{ color: '#4fd1c7', fontWeight: 600 }}>Free to Try</div>
          <div style={{ color: '#a0aec0', fontSize: '14px' }}>No sign-up needed</div>
        </motion.div>
      </div>
      
      <div className="container">
        <div className="hero-content fade-in">
          <div className="hero-badge">
            AI Powered
          </div>
          <div className="hero-icon">
            <Image 
              src="/gc-dark.png" 
              alt="GutCheck Logo" 
              width={120} 
              height={120} 
              className="hero-logo-image"
            />
          </div>
          <h1>GutChecks: Red Flags &amp; Safety</h1>
          <div className="tagline">Spot the red flags before they spot you</div>
          <p className="subtitle">The private app that helps you spot manipulation, red flags, and toxic behaviour in DMs, dating, friendships, at work, with family, or anywhere online and offline. No judgment. Just clarity.</p>

          <div className="hero-buttons">
            <a
              href="https://apps.apple.com/gb/app/gutcheck-app/id6754253217"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Experience the app for free
            </a>
            <a href="/learn-more" className="btn-secondary">See How It Works</a>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '12px' }}>No sign-up needed to explore</p>

          <div className="trust-indicators">
            <div className="trust-item">
              <div className="trust-icon">✓</div>
              <span>100% Private</span>
            </div>
            <div className="trust-item">
              <div className="trust-icon">✓</div>
              <span>No Judgment</span>
            </div>
            <div className="trust-item">
              <div className="trust-icon">✓</div>
              <span>Just Clarity</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
