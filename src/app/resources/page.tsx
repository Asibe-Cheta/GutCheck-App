import { Metadata } from 'next'
import { Shield, BookOpen, Users, Phone, AlertTriangle, Heart, Brain, Lock } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import FadeIn from '@/components/animations/FadeIn'

export const metadata: Metadata = {
  title: 'Resources - Safety Guides and Crisis Support',
  description: 'Access safety guides, crisis resources, and educational content to help you navigate relationships safely.',
}

const Resources = () => {
  const safetyGuides = [
    {
      icon: Shield,
      title: 'Recognizing Manipulation',
      description: 'Learn to identify common manipulation tactics and red flags in relationships.',
      topics: ['Gaslighting', 'Love bombing', 'Isolation tactics', 'Emotional blackmail']
    },
    {
      icon: Heart,
      title: 'Building Healthy Boundaries',
      description: 'Understand how to set and maintain healthy boundaries in all relationships.',
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
    }
  ]

  const crisisResources = [
    {
      title: 'National Suicide Prevention Lifeline',
      number: '988',
      description: '24/7 crisis support for anyone in emotional distress or suicidal crisis.',
      available: '24/7'
    },
    {
      title: 'Crisis Text Line',
      number: 'Text HOME to 741741',
      description: 'Free, 24/7 crisis support via text message.',
      available: '24/7'
    },
    {
      title: 'National Domestic Violence Hotline',
      number: '1-800-799-7233',
      description: 'Support for anyone experiencing domestic violence.',
      available: '24/7'
    },
    {
      title: 'RAINN National Sexual Assault Hotline',
      number: '1-800-656-4673',
      description: 'Confidential support for survivors of sexual assault.',
      available: '24/7'
    }
  ]

  const communityResources = [
    {
      icon: Users,
      title: 'Support Groups',
      description: 'Connect with others who understand your experiences.',
      link: 'Find a group near you'
    },
    {
      icon: BookOpen,
      title: 'Educational Materials',
      description: 'Books, articles, and resources for healing and growth.',
      link: 'Browse resources'
    },
    {
      icon: Heart,
      title: 'Therapy Resources',
      description: 'Find mental health professionals who specialize in relationship trauma.',
      link: 'Find a therapist'
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
                Safety{' '}
                <span className="bg-gradient-to-r from-accent-teal to-accent-green bg-clip-text text-transparent">
                  Resources
                </span>
              </h1>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Your safety is our priority. Access guides, crisis support, and educational 
                resources to help you navigate relationships safely.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Crisis Support Section */}
      <section id="crisis" className="py-20 bg-gradient-to-b from-transparent to-warning-coral/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-warning-coral/20 rounded-full text-warning-coral mb-6">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Crisis Support
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-text-primary mb-6">
                Need Help Right Now?
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                If you're in immediate danger or having thoughts of self-harm, 
                please reach out to these crisis resources immediately.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {crisisResources.map((resource, index) => (
              <FadeIn key={resource.title} direction="up" delay={index * 0.1}>
                <Card variant="glass" className="border-warning-coral border-2">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-text-primary">
                      {resource.title}
                    </CardTitle>
                    <div className="text-2xl font-black text-warning-coral">
                      {resource.number}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-text-secondary mb-4">
                      {resource.description}
                    </CardDescription>
                    <div className="flex items-center text-sm text-warning-coral">
                      <span className="font-semibold">Available: {resource.available}</span>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Guides */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-text-primary mb-6">
                Safety Guides
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Learn to recognize manipulation, build healthy boundaries, and protect yourself 
                in all types of relationships.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {safetyGuides.map((guide, index) => (
              <FadeIn key={guide.title} direction="up" delay={index * 0.1}>
                <Card variant="glass" hover className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-r from-accent-teal to-accent-green rounded-xl flex items-center justify-center mb-4">
                      <guide.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-text-primary">
                      {guide.title}
                    </CardTitle>
                    <CardDescription className="text-text-secondary">
                      {guide.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-text-primary mb-2">Topics covered:</h4>
                      <ul className="space-y-1">
                        {guide.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-center text-sm text-text-secondary">
                            <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mr-3 flex-shrink-0" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button variant="outline" className="w-full mt-4">
                      Read Guide
                    </Button>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 bg-gradient-to-b from-transparent to-primary-dark/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-text-primary mb-6">
                Community Resources
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Connect with others, find professional help, and access educational 
                materials to support your healing journey.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {communityResources.map((resource, index) => (
              <FadeIn key={resource.title} direction="up" delay={index * 0.1}>
                <Card variant="glass" hover className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-r from-accent-green to-accent-teal rounded-xl flex items-center justify-center mb-4">
                      <resource.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-text-primary">
                      {resource.title}
                    </CardTitle>
                    <CardDescription className="text-text-secondary">
                      {resource.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">
                      {resource.link}
                    </Button>
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
                Remember: You're Not Alone
              </h2>
              <p className="text-xl text-text-secondary mb-8">
                If you're struggling with manipulation, abuse, or toxic relationships, 
                help is available. You deserve to feel safe and respected.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  Get Help Now
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}

export default Resources
