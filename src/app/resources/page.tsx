import { Metadata } from 'next'
import { Shield, BookOpen, Users, AlertTriangle, Heart, Brain, Lock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Resources - Safety Guides and Crisis Support',
  description: 'Access crisis helplines, safety guides, and educational resources to help you understand what you are experiencing and decide what to do next.',
}

const safetyGuides = [
  {
    icon: Shield,
    title: 'Recognising Manipulation',
    description: 'Learn to identify common manipulation tactics and red flags across all types of interactions.',
    topics: ['Gaslighting', 'Love bombing', 'Isolation tactics', 'Emotional blackmail']
  },
  {
    icon: Heart,
    title: 'Building Healthy Boundaries',
    description: 'Understand how to set and maintain healthy boundaries in any relationship or situation.',
    topics: ['Communication skills', 'Saying no', 'Respecting others', 'Self-care']
  },
  {
    icon: Brain,
    title: 'Trusting Your Intuition',
    description: 'Develop your emotional intelligence and learn to trust your gut feelings.',
    topics: ['Body signals', 'Emotional awareness', 'Pattern recognition', 'Decision making']
  },
  {
    icon: Lock,
    title: 'Digital Safety',
    description: 'Protect yourself online and in digital communications.',
    topics: ['Privacy settings', 'Safe sharing', 'Cyberstalking', 'Password security']
  },
  {
    icon: AlertTriangle,
    title: 'Recognising Grooming & Radicalisation',
    description: 'Learn warning signs of grooming and coercive recruitment so you can seek support early.',
    topics: ['Isolation patterns', 'Coercive influence', 'Escalation signals', 'Where to get help']
  }
]

const crisisResources = [
  {
    title: 'Samaritans',
    number: '116 123',
    description: '24/7 crisis support for anyone in emotional distress or suicidal crisis.',
    available: '24/7'
  },
  {
    title: 'Shout Crisis Text Line',
    number: 'Text SHOUT to 85258',
    description: 'Free, 24/7 crisis support via text message.',
    available: '24/7'
  },
  {
    title: 'National Domestic Abuse Helpline',
    number: '0808 2000 247',
    description: 'Support for anyone experiencing domestic abuse (for men and women).',
    available: '24/7'
  },
  {
    title: 'Rape Crisis National Helpline',
    number: '0808 802 9999',
    description: 'Confidential support for survivors of sexual assault.',
    available: '24/7'
  },
  {
    title: 'Police / Emergency Services',
    number: '999 (Emergency) · 101 (Non-Emergency)',
    description: 'For immediate danger or emergency assistance.',
    available: '24/7'
  }
]

const communityResources = [
  { icon: Users, title: 'NSPCC (UK)', description: 'Child protection and family support resources.', link: 'https://www.nspcc.org.uk/' },
  { icon: BookOpen, title: 'Childline (UK)', description: 'Confidential support for users and families.', link: 'https://www.childline.org.uk/' },
  { icon: Shield, title: 'Lucy Faithfull Foundation / Stop It Now!', description: 'Resources for preventing abuse and safeguarding.', link: 'https://www.stopitnow.org.uk/' },
  { icon: Heart, title: 'Refuge', description: 'Support for domestic abuse and violence.', link: 'https://refuge.org.uk/' },
  { icon: Lock, title: 'Internet Matters', description: 'Digital safety support for users and families.', link: 'https://www.internetmatters.org/' },
]

const Resources = () => {
  return (
    <div className="pt-32">
      <section className="glass-section">
        <div className="container">
          <div className="glass-card fade-in">
            <div className="section-badge">Safety Resources</div>
            <h1 className="section-title">Support when you need it</h1>
            <p className="section-subtitle">
              Access crisis helplines, safety guides, and educational resources to help you understand what you are experiencing and decide what to do next, whatever the situation.
            </p>
          </div>
        </div>
      </section>

      <section id="crisis" className="glass-section">
        <div className="container">
          <div className="glass-card fade-in">
            <div className="section-badge">Crisis Support</div>
            <h2 className="section-title">Need Help Right Now?</h2>
            <p className="section-subtitle">
              If you are in immediate danger, experiencing a mental health crisis, or need to speak to someone urgently, please contact the services below. They are confidential, free, and available 24/7.
            </p>
            <div className="features-grid" style={{ marginTop: 0 }}>
              {crisisResources.map((resource) => (
                <div key={resource.title} className="feature-card fade-in">
                  <h3>{resource.title}</h3>
                  <p style={{ fontWeight: 700, color: 'var(--text-primary)', marginBottom: '12px' }}>{resource.number}</p>
                  <p>{resource.description}</p>
                  <p style={{ marginTop: '12px', fontWeight: 600 }}>Available: {resource.available}</p>
                </div>
              ))}
            </div>
            <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginTop: '24px' }}>
              Regional helplines for the UK, US, Canada, and Australia are available directly in the GutChecks app.
            </p>
          </div>
        </div>
      </section>

      <section className="glass-section">
        <div className="container">
          <div className="glass-card fade-in">
            <div className="section-badge">Safety Guides</div>
            <h2 className="section-title">Learn the patterns</h2>
            <p className="section-subtitle">Five practical guides are listed below and marked as coming soon.</p>
            <div className="features-grid" style={{ marginTop: 0 }}>
              {safetyGuides.map((guide) => (
                <div key={guide.title} className="feature-card fade-in">
                  <div className="feature-icon">
                    <guide.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3>{guide.title}</h3>
                  <p>{guide.description}</p>
                  <ul style={{ color: 'var(--text-secondary)', marginTop: '10px', marginBottom: '12px', paddingLeft: '18px', lineHeight: 1.7 }}>
                    {guide.topics.map((topic) => <li key={topic}>{topic}</li>)}
                  </ul>
                  <span className="btn-secondary" style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>Coming Soon</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="glass-section">
        <div className="container">
          <div className="glass-card fade-in">
            <div className="section-badge">Community Resources</div>
            <h2 className="section-title">Trusted organisations</h2>
            <p className="section-subtitle">Direct links to support organisations and educational safety resources.</p>
            <div className="features-grid" style={{ marginTop: 0 }}>
              {communityResources.map((resource) => (
                <div key={resource.title} className="feature-card fade-in">
                  <div className="feature-icon">
                    <resource.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3>{resource.title}</h3>
                  <p>{resource.description}</p>
                  <a href={resource.link} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'inline-block', width: '100%', textAlign: 'center', marginTop: '12px' }}>
                    Visit resource
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <div className="container">
          <div className="glass-card fade-in" style={{ textAlign: 'center' }}>
            <h2 className="section-title">Remember: you&apos;re not alone</h2>
            <p className="section-subtitle">
              If you&apos;re struggling with manipulation, abuse, or toxic situations, help is available. You deserve to feel safe and respected.
            </p>
            <div className="hero-buttons" style={{ justifyContent: 'center' }}>
              <a href="#crisis" className="btn-primary">Get Help Now</a>
              <a href="https://apps.apple.com/gb/app/gutcheck-app/id6754253217" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                Experience the app for free
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Resources
