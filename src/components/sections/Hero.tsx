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
          <div style={{ color: '#4fd1c7', fontWeight: 600 }}>85% Confidence</div>
          <div style={{ color: '#a0aec0', fontSize: '14px' }}>High risk detected</div>
        </motion.div>
        
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, -1, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="floating-card floating-card-2"
        >
          <div style={{ color: '#68d391', fontWeight: 600 }}>Pattern Found</div>
          <div style={{ color: '#a0aec0', fontSize: '14px' }}>Gaslighting detected</div>
        </motion.div>
        
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 1, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="floating-card floating-card-3"
        >
          <div style={{ color: '#4fd1c7', fontWeight: 600 }}>Safe Space</div>
          <div style={{ color: '#a0aec0', fontSize: '14px' }}>100% Anonymous</div>
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
          <h1>GutCheck</h1>
          <div className="tagline">Visualize Your Intuition</div>
          <p className="subtitle">Your private space to decode everyday interactions, a second check to your instincts. Get evidence-based analysis of manipulation, bullying, blackmail, sextortion, grooming and predatory patterns with complete anonymity.</p>
          
          <div className="hero-buttons">
            <a 
              href="https://apps.apple.com/gb/app/gutcheck-app/id6754253217" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Get Started Anonymously
            </a>
            <a href="/learn-more" className="btn-secondary">More About GutCheck</a>
          </div>

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
