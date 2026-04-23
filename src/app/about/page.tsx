import { Metadata } from 'next'
import { Heart, Shield, Target, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About GutChecks - Spot Manipulation in Any Interaction',
  description: 'Learn about GutChecks and our mission to help users recognise manipulation, red flags, and toxic behaviour in any interaction.',
}

const values = [
  {
    icon: Heart,
    title: 'Education over lectures',
    description: 'We do not tell users what to do; we help them see patterns and make their own decisions.'
  },
  {
    icon: Shield,
    title: 'Privacy without exception',
    description: 'No account required. No personal data stored. Conversations are encrypted and never shared.'
  },
  {
    icon: Target,
    title: 'Guided by professionals',
    description: 'Our advisory panel of mental health practitioners, social workers, and counsellors shapes how the app responds.'
  },
  {
    icon: Users,
    title: 'Prevention, not reaction',
    description: 'We give users the language to recognise manipulation before it becomes harm, not just support afterwards.'
  },
]

const About = () => {
  return (
    <div className="pt-32">
      <section className="glass-section">
        <div className="container">
          <div className="glass-card fade-in">
            <div className="section-badge">About GutChecks</div>
            <h1 className="section-title">More than an app. A movement.</h1>
            <p className="section-subtitle">
              We&apos;re on a mission to help users recognise manipulation, red flags, and toxic behaviour, even when disguised as friendship, love, or opportunity, and guide them to safer next steps.
            </p>
          </div>
        </div>
      </section>

      <section className="glass-section">
        <div className="container">
          <div className="features-grid" style={{ marginTop: 0 }}>
            <div className="feature-card fade-in">
              <h3>Our Mission</h3>
              <p>
                GutChecks was built after a moment that changed everything; a mum discovering her 11-year-old daughter was silently navigating manipulation, pressure, and confusing interactions alone.
              </p>
              <p>
                She searched for a tool that could help her recognise red flags in her interactions, both online and offline, before they became real harm. It did not exist. So she built it.
              </p>
              <p>
                Our mission is to educate and empower users to recognise what grooming, manipulation, and toxic behaviour actually looks like, even when disguised as friendship, love, or opportunity, and guide them to safer next steps.
              </p>
            </div>
            <div className="feature-card fade-in">
              <h3>Why GutChecks works differently</h3>
              <p>
                <strong>Anonymous &amp; Private:</strong> No account required. No personal data stored. Conversations are 100% anonymous and encrypted.
              </p>
              <p>
                <strong>Built for Every Interaction:</strong> GutChecks covers relationships, friendships, family, school, work, online strangers, and more.
              </p>
              <p>
                <strong>Professional Guidance:</strong> Developed with input from mental health practitioners, social workers, and counsellors.
              </p>
              <p>
                <strong>Regional Support:</strong> Access to official helplines in the UK, US, Canada, and Australia, including support for domestic abuse, scams, grooming, and radicalisation concerns.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="glass-section">
        <div className="container">
          <div className="glass-card fade-in">
            <div className="section-badge">Founder Story</div>
            <h2 className="section-title">The Story Behind GutChecks</h2>
            <p className="section-subtitle" style={{ marginBottom: '24px' }}>
              I&apos;m a Royal Navy veteran, a former Goldman Sachs manager, and a single mum. My career was about spotting risk before it arrived.
            </p>
            <div style={{ color: 'var(--text-secondary)', maxWidth: '980px', margin: '0 auto', lineHeight: 1.8, fontSize: '1.05rem' }}>
              <p>But as a parent, I almost missed it.</p>
              <p>
                In 2025, I fell ill and for the first time in years, I slowed down. That is when I discovered my 11-year-old daughter had been silently navigating manipulation, pressure, and confusing interactions. When I asked why she had not come to me, she said: &quot;You have a lot going on, Mum. I didn&apos;t want to add to your stress.&quot;
              </p>
              <p>She was getting advice from other 11-year-olds, children just as confused as she was.</p>
              <p>
                I searched for a tool that could help her recognise red flags before they became real harm. Not a monitoring app. Not surveillance. Something that would teach her to trust her own instincts.
              </p>
              <p>It did not exist. So I quit my job and built it.</p>
              <p><strong>I started this for my daughter. I&apos;m building it for her entire generation.</strong></p>
            </div>
            <p style={{ color: 'var(--text-secondary)', marginTop: '20px', fontStyle: 'italic', textAlign: 'center' }}>
              Placeholder: insert founder professional headshot beside this section.
            </p>
          </div>
        </div>
      </section>

      <section className="glass-section">
        <div className="container">
          <div className="glass-card fade-in">
            <div className="section-badge">Our Values</div>
            <h2 className="section-title">Guided by clear principles</h2>
            <p className="section-subtitle">Everything we do is designed around safety, privacy, and prevention.</p>
            <div className="features-grid" style={{ marginTop: 0 }}>
              {values.map((value) => (
                <div className="feature-card fade-in" key={value.title}>
                  <div className="feature-icon">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="glass-section">
        <div className="container">
          <div className="glass-card fade-in">
            <div className="section-badge">Our Team</div>
            <h2 className="section-title">Built by people who care</h2>
            <div className="features-grid" style={{ marginTop: 0 }}>
              <div className="feature-card fade-in">
                <h3>Founder</h3>
                <p>GutChecks was founded by a single mum, Royal Navy veteran, and former Goldman Sachs compliance and risk manager.</p>
              </div>
              <div className="feature-card fade-in">
                <h3>Advisory Panel</h3>
                <p>Guided by practising mental health practitioners, social workers, and counsellors whose input shapes how the app responds.</p>
              </div>
              <div className="feature-card fade-in">
                <h3>Development</h3>
                <p>Built by a small, focused team committed to user privacy, safety, and prevention-first product design.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <div className="container">
          <div className="glass-card fade-in" style={{ textAlign: 'center' }}>
            <h2 className="section-title">Ready to get started?</h2>
            <p className="section-subtitle">
              GutChecks helps users recognise manipulation, red flags, and toxic behaviour, even when disguised as friendship, love, or opportunity.
            </p>
            <div className="hero-buttons" style={{ justifyContent: 'center' }}>
              <a href="https://apps.apple.com/gb/app/gutcheck-app/id6754253217" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Experience the app for free
              </a>
              <a href="/learn-more" className="btn-secondary">See How It Works</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
