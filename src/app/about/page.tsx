import { Metadata } from 'next'
import { Heart, Shield, Users, Target } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import FadeIn from '@/components/animations/FadeIn'

export const metadata: Metadata = {
  title: 'About GutChecks - Our Mission to Protect Young Adults',
  description: 'Learn about GutChecks\' mission to help young people spot manipulation, red flags, and toxic behaviour safely and anonymously.',
}

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Empathy First',
      description: 'We believe everyone deserves to feel safe in their relationships. Our AI is designed with compassion and understanding.'
    },
    {
      icon: Shield,
      title: 'Privacy Protected',
      description: 'Your conversations are sacred. We use end-to-end encryption and never share your data with third parties.'
    },
    {
      icon: Target,
      title: 'Evidence Based',
      description: 'Our AI is trained on peer-reviewed research and validated by mental health professionals and relationship experts.'
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
                We&apos;re on a mission to help young people spot red flags, trust their instincts,
                and navigate any interaction safely — with the power of AI.
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
                  GutChecks was born from a real moment — a founder who discovered her daughter had been
                  silently navigating confusing, pressuring interactions online, turning to equally
                  confused friends rather than coming to her.
                </p>
                <p className="text-lg text-text-secondary leading-relaxed">
                  She searched for a tool that could help her recognise red flags before they escalated.
                  It did not exist. So she built it.
                </p>
                <div className="glass-card p-6 rounded-xl mt-auto">
                  <h3 className="text-xl font-bold text-text-primary mb-3">
                    Support when you need it
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    If a situation sounds serious, GutChecks connects you to real helplines and resources
                    in your area. If you are in immediate danger, please contact emergency services.
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
                    Dating, friendships, family, work, online — GutChecks covers every context, not
                    just relationships.
                  </p>
                  <p>
                    <strong className="text-text-primary">Clear Explanations:</strong>{' '}
                    GutChecks breaks down what it sees and explains why something might be a red flag —
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
                Built by people who care deeply about safety, privacy, and empowering young people.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            <FadeIn direction="up" delay={0.1} className="flex flex-col">
              <Card variant="glass" className="text-center flex flex-col h-full">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-r from-accent-teal to-accent-green rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">MH</span>
                  </div>
                  <CardTitle className="text-xl font-bold text-text-primary">
                    Mental Health Team
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription className="text-text-secondary leading-relaxed">
                    Licensed therapists, counsellors, and social workers who ensure our responses
                    align with professional safeguarding and wellbeing recommendations.
                  </CardDescription>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn direction="up" delay={0.2} className="flex flex-col">
              <Card variant="glass" className="text-center flex flex-col h-full">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-r from-accent-green to-accent-teal rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">AI</span>
                  </div>
                  <CardTitle className="text-xl font-bold text-text-primary">
                    AI Research Team
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription className="text-text-secondary leading-relaxed">
                    Machine learning experts who develop our AI models with privacy
                    and safety as top priorities — not engagement metrics.
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
                Try GutChecks free
              </h2>
              <p className="text-xl text-text-secondary mb-8 max-w-xl mx-auto">
                No sign-up needed to explore. Trusted by 1,000+ users who needed clarity — and found it.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://apps.apple.com/gb/app/gutcheck-app/id6754253217"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-accent-teal to-accent-green text-white px-8 py-4 rounded-xl font-semibold hover:from-accent-green hover:to-accent-teal transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Try It Free
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
