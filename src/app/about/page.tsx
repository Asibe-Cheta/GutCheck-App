import { Metadata } from 'next'
import { Heart, Shield, Users, Target } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import FadeIn from '@/components/animations/FadeIn'

export const metadata: Metadata = {
  title: 'About GutCheck - Our Mission to Protect Young Adults',
  description: 'Learn about GutCheck&apos;s mission to help young adults navigate relationships safely with AI-powered emotional intelligence.',
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
                  GutCheck
                </span>
              </h1>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                We&apos;re on a mission to help young adults navigate relationships safely 
                and build emotional intelligence with the power of AI.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="right">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-text-primary mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-text-secondary mb-6">
                  GutCheck was born from a simple belief: everyone deserves to feel safe 
                  in their relationships. We&apos;ve seen too many young adults struggle with 
                  manipulation, gaslighting, and toxic dynamics that leave lasting scars.
                </p>
                <p className="text-lg text-text-secondary mb-8">
                  Our AI-powered platform helps you recognize red flags, trust your instincts, 
                  and build the emotional intelligence needed for healthy relationships.
                </p>
                <div className="glass-card p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-text-primary mb-3">
                    Access to Crisis Helplines
                  </h3>
                  <p className="text-text-secondary">
                    Our app provides access to official crisis helplines in your region (UK, US, Canada, Australia). 
                    If you&apos;re in immediate danger, please contact emergency services in your area.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left">
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-text-primary mb-6">
                  Why Choose GutCheck?
                </h3>
                <div className="space-y-4 text-text-secondary">
                  <p>
                    <strong className="text-text-primary">Anonymous & Private:</strong> Your conversations are completely anonymous. 
                    We never collect your real name or identity.
                  </p>
                  <p>
                    <strong className="text-text-primary">AI-Powered Insights:</strong> Our specialized AI helps you recognize 
                    patterns and red flags in your relationships.
                  </p>
                  <p>
                    <strong className="text-text-primary">Evidence-Based:</strong> Built on peer-reviewed research and validated 
                    by relationship experts.
                  </p>
                  <p>
                    <strong className="text-text-primary">Crisis Resources:</strong> Access to official helplines in UK, US, 
                    Canada, and Australia.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-primary-dark/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-text-primary mb-6">
                Our Values
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Everything we do is guided by these core principles that put your safety and privacy first.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <FadeIn key={value.title} direction="up" delay={index * 0.1}>
                <Card variant="glass" hover className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-r from-accent-teal to-accent-green rounded-xl flex items-center justify-center mb-4">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-text-primary">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-text-secondary">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-text-primary mb-6">
                Our Team
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                We&apos;re a diverse team of mental health professionals, AI researchers, 
                and survivors who are passionate about protecting young adults.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <FadeIn direction="up" delay={0.1}>
              <Card variant="glass" className="text-center">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-r from-accent-teal to-accent-green rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">MH</span>
                  </div>
                  <CardTitle className="text-xl font-bold text-text-primary">
                    Mental Health Team
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-text-secondary">
                    Licensed therapists and counselors who ensure our AI recommendations 
                    are safe and evidence-based.
                  </CardDescription>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <Card variant="glass" className="text-center">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-r from-accent-green to-accent-teal rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">AI</span>
                  </div>
                  <CardTitle className="text-xl font-bold text-text-primary">
                    AI Research Team
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-text-secondary">
                    Machine learning experts who develop our AI models with privacy 
                    and safety as top priorities.
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
                Ready to Get Started?
              </h2>
              <p className="text-xl text-text-secondary mb-8">
                Join thousands of young adults who are learning to trust their instincts 
                and build healthier relationships.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-accent-teal to-accent-green text-white px-8 py-4 rounded-xl font-semibold hover:from-accent-green hover:to-accent-teal transition-all duration-300 shadow-lg hover:shadow-xl">
                  Start Free Trial
                </button>
                <button className="border-2 border-accent-teal text-accent-teal px-8 py-4 rounded-xl font-semibold hover:bg-accent-teal hover:text-white transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}

export default About
