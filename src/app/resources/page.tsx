import { Metadata } from 'next'
import { Shield, BookOpen, Users, AlertTriangle, Heart, Brain, Lock } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import FadeIn from '@/components/animations/FadeIn'

export const metadata: Metadata = {
  title: 'Resources - Safety Guides and Crisis Support',
  description: 'Access safety guides, crisis resources, and educational content to help you navigate relationships safely.',
}

const Resources = () => {
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
    {
      icon: Users,
      title: 'NSPCC (UK)',
      description: 'Child protection and family support resources.',
      link: 'https://www.nspcc.org.uk/'
    },
    {
      icon: BookOpen,
      title: 'Childline (UK)',
      description: 'Confidential support for young people.',
      link: 'https://www.childline.org.uk/'
    },
    {
      icon: Shield,
      title: 'Lucy Faithfull Foundation / Stop It Now!',
      description: 'Resources for preventing abuse and safeguarding.',
      link: 'https://www.stopitnow.org.uk/'
    },
    {
      icon: Heart,
      title: 'Refuge',
      description: 'Support for domestic abuse and violence.',
      link: 'https://refuge.org.uk/'
    },
    {
      icon: Lock,
      title: 'Internet Matters',
      description: 'Digital safety support for families and young people.',
      link: 'https://www.internetmatters.org/'
    },
  ]

  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-primary-dark to-secondary-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-primary mb-6">
                Safety{' '}
                <span className="bg-gradient-to-r from-accent-teal to-accent-green bg-clip-text text-transparent">
                  Resources
                </span>
              </h1>
              <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                Access crisis helplines, safety guides, and educational resources to help you understand what you are experiencing and decide what to do next, whatever the situation.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Crisis Support Section */}
      <section id="crisis" className="py-20 bg-gradient-to-b from-transparent to-warning-coral/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center mb-14">
              <div className="inline-flex items-center px-4 py-2 bg-warning-coral/20 rounded-full text-warning-coral mb-6">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Crisis Support
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-text-primary mb-4">
                Need Help Right Now?
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                If you are in immediate danger, experiencing a mental health crisis, or need to speak to someone urgently, please contact the services below. They are confidential, free, and available 24/7.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {crisisResources.map((resource, index) => (
              <FadeIn key={resource.title} direction="up" delay={index * 0.08} className="flex flex-col">
                <Card variant="glass" className="border-warning-coral border-2 flex flex-col h-full">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-text-primary">
                      {resource.title}
                    </CardTitle>
                    <div className="text-xl font-black text-warning-coral mt-1">
                      {resource.number}
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col justify-between gap-3">
                    <CardDescription className="text-text-secondary leading-relaxed">
                      {resource.description}
                    </CardDescription>
                    <div>
                      <p className="text-sm font-semibold text-warning-coral">
                        Available: {resource.available}
                      </p>
                      
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
          <p className="text-center text-sm text-text-secondary mt-8">
            Regional helplines for the UK, US, Canada, and Australia are available directly in the GutChecks app.
          </p>
        </div>
      </section>

      {/* Safety Guides */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-text-primary mb-4">
                Safety Guides
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Learn to recognise manipulation, build healthy boundaries, and protect yourself
                in all types of interactions.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {safetyGuides.map((guide, index) => (
              <FadeIn key={guide.title} direction="up" delay={index * 0.08} className="flex flex-col">
                <Card variant="glass" hover className="flex flex-col h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-r from-accent-teal to-accent-green rounded-xl flex items-center justify-center mb-4">
                      <guide.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-text-primary">
                      {guide.title}
                    </CardTitle>
                    <CardDescription className="text-text-secondary leading-relaxed">
                      {guide.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col justify-between gap-4">
                    <div>
                      <h4 className="font-semibold text-text-primary mb-3 text-sm uppercase tracking-wide">
                        Topics covered
                      </h4>
                      <ul className="space-y-2">
                        {guide.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-center text-sm text-text-secondary">
                            <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mr-3 flex-shrink-0" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <span className="btn-secondary w-full block text-center mt-2">Coming Soon</span>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 bg-gradient-to-b from-transparent to-primary-dark/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-text-primary mb-4">
                Community Resources
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Connect with others, find professional help, and access educational
                materials to support your journey.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {communityResources.map((resource, index) => (
              <FadeIn key={resource.title} direction="up" delay={index * 0.1} className="flex flex-col">
                <Card variant="glass" hover className="flex flex-col h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-r from-accent-green to-accent-teal rounded-xl flex items-center justify-center mb-4">
                      <resource.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-text-primary">
                      {resource.title}
                    </CardTitle>
                    <CardDescription className="text-text-secondary leading-relaxed">
                      {resource.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col justify-end">
                    <a href={resource.link} target="_blank" rel="noopener noreferrer" className="btn-primary w-full block text-center">Visit resource</a>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn direction="up">
            <div className="glass-card p-12 rounded-2xl">
              <h2 className="text-3xl md:text-4xl font-black text-text-primary mb-6">
                Remember: You&apos;re Not Alone
              </h2>
              <p className="text-xl text-text-secondary mb-8 max-w-xl mx-auto">
                If you&apos;re struggling with manipulation, abuse, or toxic situations,
                help is available. You deserve to feel safe and respected.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#crisis" className="btn-primary">
                  Get Help Now
                </a>
                <a href="https://apps.apple.com/gb/app/gutcheck-app/id6754253217" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  Experience the app for free
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}

export default Resources
