import { Metadata } from 'next'
import { Heart, Shield, Users, Target } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import FadeIn from '@/components/animations/FadeIn'

export const metadata: Metadata = {
  title: 'About GutChecks - Spot Manipulation in Any Interaction',
  description: 'Learn about GutChecks and our mission to help users recognise manipulation, red flags, and toxic behaviour in any interaction.',
}

const About = () => {
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
    }
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary-dark to-secondary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-primary mb-6">
                About{' '}
                <span className="bg-gradient-to-r from-accent-teal to-accent-green bg-clip-text text-transparent">
                  GutChecks
                </span>
              </h1>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                We&apos;re on a mission to help users recognise manipulation, red flags, and toxic behaviour, even when disguised as friendship, love, or opportunity, and guide them to safer next steps.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
            <FadeIn direction="right" className="flex flex-col">
              <div className="flex flex-col h-full gap-6">
                <h2 className="text-3xl md:text-4xl font-black text-text-primary">
                  Our Mission
                </h2>
                <p className="text-lg text-text-secondary leading-relaxed">
                  GutChecks was built after a moment that changed everything; a mum discovering her 11-year-old daughter was silently navigating manipulation, pressure, and confusing interactions alone.
                </p>
                <p className="text-lg text-text-secondary leading-relaxed">
                  She searched for a tool that could help her recognise red flags in her interactions, both online and offline, before they became real harm. It did not exist. So she built it.
                </p>
                <div className="glass-card p-6 rounded-xl mt-auto">
                  <h3 className="text-xl font-bold text-text-primary mb-3">Our mission</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    GutChecks exists to educate and empower users to recognise what grooming, manipulation, and toxic behaviour actually looks like, even when disguised as friendship, love, or opportunity, and guide them to safer next steps.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left" className="flex flex-col">
              <div className="glass-card p-8 rounded-2xl h-full flex flex-col gap-5">
                <h3 className="text-2xl font-bold text-text-primary">
                  Why GutChecks works differently
                </h3>
                <div className="space-y-5 text-text-secondary flex-1">
                  <p>
                    <strong className="text-text-primary">100% Private &amp; Anonymous:</strong>{' '}
                    No account required. No personal data collected. Your conversations are encrypted
                    and never shared.
                  </p>
                  <p>
                    <strong className="text-text-primary">All Interactions:</strong>{' '}
                    Dating, friendships, family, work, and online interactions; GutChecks covers every context, not
                    just relationships.
                  </p>
                  <p>
                    <strong className="text-text-primary">Clear Explanations:</strong>{' '}
                    GutChecks breaks down what it sees and explains why something might be a red flag,
                    so you can decide for yourself.
                  </p>
                  <p>
                    <strong className="text-text-primary">Built with Professional Guidance:</strong>{' '}
                    Developed with input from mental health practitioners, social workers, and
                    counsellors.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="glass-card p-8 md:p-10 rounded-2xl">
              <h2 className="text-3xl md:text-4xl font-black text-text-primary mb-6">
                The Story Behind GutChecks
              </h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  I&apos;m a Royal Navy veteran, a former Goldman Sachs manager, and a single mum. My career was about spotting risk before it arrived.
                </p>
                <p>
                  But as a parent, I almost missed it.
                </p>
                <p>
                  In 2025, I fell ill and for the first time in years, I slowed down. That is when I discovered my 11-year-old daughter had been silently navigating manipulation, pressure, and confusing interactions. When I asked why she had not come to me, she said: &quot;You have a lot going on, Mum. I didn&apos;t want to add to your stress.&quot;
                </p>
                <p>
                  She was getting advice from other 11-year-olds, children just as confused as she was.
                </p>
                <p>
                  I searched for a tool that could help her recognise red flags before they became real harm. Not a monitoring app. Not surveillance. Something that would teach her to trust her own instincts.
                </p>
                <p>
                  It did not exist. So I quit my job and built it.
                </p>
                <p className="font-semibold text-text-primary">
                  I started this for my daughter. I&apos;m building it for her entire generation.
                </p>
              </div>
              <p className="text-sm text-text-secondary italic mt-6">
                Placeholder: insert founder professional headshot beside this section.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-primary-dark/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-text-primary mb-4">
                Our Values
              </h2>
              <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                Everything we do is guided by these core principles that put your safety and privacy first.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {values.map((value, index) => (
              <FadeIn key={value.title} direction="up" delay={index * 0.1} className="flex flex-col">
                <Card variant="glass" hover className="flex flex-col h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-r from-accent-teal to-accent-green rounded-xl flex items-center justify-center mb-4">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-text-primary">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <CardDescription className="text-text-secondary leading-relaxed">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-text-primary mb-4">
                Our Team
              </h2>
              <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                Built by people who care deeply about safety, privacy, and prevention.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            <FadeIn direction="up" delay={0.1} className="flex flex-col">
              <Card variant="glass" className="text-center flex flex-col h-full">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-r from-accent-teal to-accent-green rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">F</span>
                  </div>
                  <CardTitle className="text-xl font-bold text-text-primary">
                    Founder
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription className="text-text-secondary leading-relaxed">
                    GutChecks was founded by a single mum, Royal Navy veteran, and former Goldman Sachs compliance and risk manager.
                  </CardDescription>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn direction="up" delay={0.2} className="flex flex-col">
              <Card variant="glass" className="text-center flex flex-col h-full">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-r from-accent-green to-accent-teal rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">AP</span>
                  </div>
                  <CardTitle className="text-xl font-bold text-text-primary">
                    Advisory Panel
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription className="text-text-secondary leading-relaxed">
                    GutChecks is guided by a panel of practising mental health practitioners, social workers, and counsellors whose input shapes how the app responds.
                  </CardDescription>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn direction="up" delay={0.3} className="flex flex-col">
              <Card variant="glass" className="text-center flex flex-col h-full">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-r from-accent-teal to-accent-green rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-text-primary">
                    Development
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription className="text-text-secondary leading-relaxed">
                    GutChecks is developed by a small, focused team committed to user privacy, safety, and building prevention tools.
                  </CardDescription>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-primary-dark/30 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn direction="up">
            <div className="glass-card p-12 rounded-2xl">
              <h2 className="text-3xl md:text-4xl font-black text-text-primary mb-6">
                Ready to get started?
              </h2>
              <p className="text-xl text-text-secondary mb-8 max-w-xl mx-auto">
                GutChecks helps users recognise manipulation, red flags, and toxic behaviour, even when disguised as friendship, love, or opportunity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://apps.apple.com/gb/app/gutcheck-app/id6754253217"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-accent-teal to-accent-green text-white px-8 py-4 rounded-xl font-semibold hover:from-accent-green hover:to-accent-teal transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Experience the app for free
                </a>
                <a
                  href="/learn-more"
                  className="border-2 border-accent-teal text-accent-teal px-8 py-4 rounded-xl font-semibold hover:bg-accent-teal hover:text-white transition-all duration-300"
                >
                  See How It Works
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}

export default About
