'use client'

import React from 'react'
import { Brain, BarChart3, RotateCcw, Target, Shield, FileText } from 'lucide-react'

const Features: React.FC = () => {
  return (
    <section id="features" className="glass-section">
      <div className="container">
        <div className="glass-card fade-in">
          <div className="section-badge">Why GutChecks Works Differently</div>
          <h2 className="section-title">Built for red flags; everywhere</h2>
          <p className="section-subtitle">GutChecks does not give generic advice. It is built specifically to help users recognise manipulation, red flags, and toxic behaviour, even when disguised as friendship, love, or opportunity, across every interaction, online and offline.</p>

          <div className="features-grid">
            <div className="feature-card fade-in">
              <div className="feature-icon">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3>Built for red flags; everywhere</h3>
              <p>GutChecks is designed specifically for spotting manipulation, pressure tactics, and toxic patterns across all interactions; dating, friendships, work, family, online, and offline.</p>
            </div>
            <div className="feature-card fade-in">
              <div className="feature-icon">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3>Clear explanations, not just opinions</h3>
              <p>GutChecks breaks down what it sees and explains why something might be a red flag, so you can decide for yourself.</p>
            </div>
            <div className="feature-card fade-in">
              <div className="feature-icon">
                <RotateCcw className="w-8 h-8 text-white" />
              </div>
              <h3>Remembers the bigger picture</h3>
              <p>GutChecks tracks patterns across your conversations over time, so you can see whether something is a one-off or a trend.</p>
            </div>
            <div className="feature-card fade-in">
              <div className="feature-icon">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3>Works for your world</h3>
              <p>Whether it is DMs, group chats, dating apps, school, work, family, or strangers online, GutChecks understands different social contexts.</p>
            </div>
            <div className="feature-card fade-in">
              <div className="feature-icon">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3>Support when you need it</h3>
              <p>If a situation sounds serious, GutChecks connects you to real helplines and resources in your area, including support for radicalisation concerns.</p>
            </div>
            <div className="feature-card fade-in">
              <div className="feature-icon">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3>Keep a record if you need one</h3>
              <p>Save and organise your conversations so you have a clear timeline if you ever want to share with someone you trust.</p>
            </div>
          </div>

          <div className="feature-card fade-in" style={{ marginTop: '32px' }}>
            <h3>AI you can trust. Built with professional safeguards</h3>
            <p>
              We know AI can get it wrong. When safety is involved, getting it wrong is not an option. That is why GutChecks is not a chatbot that gives life advice. It is a pattern recognition tool that helps users see red flags in their interactions and understand why something feels off. It does not tell users what to do; it helps them think more clearly and guides them to appropriate support. Responses are shaped by guidance from our advisory panel of mental health practitioners, social workers, and counsellors to help ensure the app aligns with professional safeguarding recommendations. GutChecks is designed to educate and empower; never to replace human judgement or professional help.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
