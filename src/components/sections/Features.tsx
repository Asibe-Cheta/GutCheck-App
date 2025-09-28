'use client'

import React from 'react'
import { Brain, BarChart3, RotateCcw, Target, Shield, FileText } from 'lucide-react'

const Features: React.FC = () => {
  return (
    <section id="features" className="glass-section">
      <div className="container">
        <div className="glass-card fade-in">
          <div className="section-badge">Why Choose GutCheck</div>
          <h2 className="section-title">Beyond Generic AI Assistance</h2>
          <p className="section-subtitle">Unlike ChatGPT or Claude, GutCheck is specifically trained on manipulation patterns and relationship safety. Get specialized analysis, not generic responses.</p>
          
          <div className="features-grid">
            <div className="feature-card fade-in">
              <div className="feature-icon">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3>Specialized AI Intelligence</h3>
              <p>Trained exclusively on 10,000+ manipulation scenarios and toxic behavior patterns. Get forensic-level analysis, not generic chat responses.</p>
            </div>
            <div className="feature-card fade-in">
              <div className="feature-icon">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3>Evidence-Based Scoring</h3>
              <p>Confidence percentages and risk levels based on research, not opinions. See exactly why something feels wrong with concrete evidence.</p>
            </div>
            <div className="feature-card fade-in">
              <div className="feature-icon">
                <RotateCcw className="w-8 h-8 text-white" />
              </div>
              <h3>Pattern Memory System</h3>
              <p>Remembers your relationship history and tracks recurring patterns over time. Generic AI forgets everything between conversations.</p>
            </div>
            <div className="feature-card fade-in">
              <div className="feature-icon">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3>Cultural Context Awareness</h3>
              <p>Understands cultural relationship norms and power dynamics. Analysis adjusted for your specific cultural background and context.</p>
            </div>
            <div className="feature-card fade-in">
              <div className="feature-icon">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3>Crisis Safety Protocols</h3>
              <p>Built-in emergency resources and escalation pathways. Automatic crisis detection with immediate support connections.</p>
            </div>
            <div className="feature-card fade-in">
              <div className="feature-icon">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3>Evidence Documentation</h3>
              <p>Systematic collection and organization of incidents for potential reporting to authorities or counselors. Legal-ready documentation.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
