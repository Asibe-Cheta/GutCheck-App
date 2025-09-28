import { Metadata } from 'next'
import { Shield, Lock, Eye, Database } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import FadeIn from '@/components/animations/FadeIn'

export const metadata: Metadata = {
  title: 'Privacy Policy - Your Data is Protected',
  description: 'Learn how GutCheck protects your privacy and keeps your conversations secure with end-to-end encryption.',
}

const Privacy = () => {
  const privacyPrinciples = [
    {
      icon: Lock,
      title: 'End-to-End Encryption',
      description: 'All your conversations are encrypted before they leave your device and can only be decrypted by you.',
      details: [
        'AES-256 encryption standard',
        'Zero-knowledge architecture',
        'Local processing when possible'
      ]
    },
    {
      icon: Eye,
      title: 'No Data Mining',
      description: 'We never read, analyze, or store your personal conversations for advertising or other purposes.',
      details: [
        'No conversation logging',
        'No data selling',
        'No third-party sharing'
      ]
    },
    {
      icon: Database,
      title: 'Minimal Data Collection',
      description: 'We only collect the minimum data necessary to provide our service and keep you safe.',
      details: [
        'Account information only',
        'Usage analytics (anonymized)',
        'Safety alerts (encrypted)'
      ]
    },
    {
      icon: Shield,
      title: 'Your Control',
      description: 'You have complete control over your data. Delete it anytime, export it, or revoke access.',
      details: [
        'Data deletion on demand',
        'Export your data',
        'Revoke access anytime'
      ]
    }
  ]

  const dataTypes = [
    {
      category: 'Account Information',
      data: ['Email address', 'Account preferences', 'Subscription status'],
      purpose: 'To provide our service and communicate with you',
      retention: 'Until you delete your account'
    },
    {
      category: 'Safety Data',
      data: ['Encrypted safety alerts', 'Pattern analysis (local)', 'Crisis intervention logs'],
      purpose: 'To protect you and provide crisis support',
      retention: '7 years (for legal protection)'
    },
    {
      category: 'Usage Analytics',
      data: ['App usage patterns', 'Feature usage', 'Performance metrics'],
      purpose: 'To improve our service and ensure reliability',
      retention: '2 years (anonymized)'
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
                Your Privacy is{' '}
                <span className="bg-gradient-to-r from-accent-teal to-accent-green bg-clip-text text-transparent">
                  Sacred
                </span>
              </h1>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                We believe your conversations are private. That&apos;s why we&apos;ve built GutCheck 
                with privacy-first principles and end-to-end encryption.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-text-primary mb-6">
                Our Privacy Principles
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                These principles guide everything we do to protect your privacy and keep your data secure.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {privacyPrinciples.map((principle, index) => (
              <FadeIn key={principle.title} direction="up" delay={index * 0.1}>
                <Card variant="glass" hover className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-r from-accent-teal to-accent-green rounded-xl flex items-center justify-center mb-4">
                      <principle.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-text-primary">
                      {principle.title}
                    </CardTitle>
                    <CardDescription className="text-text-secondary">
                      {principle.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {principle.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-sm text-text-secondary">
                          <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mr-3 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Data Collection */}
      <section className="py-20 bg-gradient-to-b from-transparent to-primary-dark/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-text-primary mb-6">
                What Data We Collect
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Transparency is key. Here&apos;s exactly what data we collect and why.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-8">
            {dataTypes.map((dataType, index) => (
              <FadeIn key={dataType.category} direction="up" delay={index * 0.1}>
                <Card variant="glass">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-text-primary">
                      {dataType.category}
                    </CardTitle>
                    <CardDescription className="text-text-secondary">
                      Purpose: {dataType.purpose}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-text-primary mb-2">Data Collected:</h4>
                        <ul className="space-y-1">
                          {dataType.data.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-center text-sm text-text-secondary">
                              <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mr-3 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary mb-2">Retention Period:</h4>
                        <p className="text-sm text-text-secondary">{dataType.retention}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Security Measures */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-text-primary mb-6">
                Security Measures
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                We use industry-leading security practices to protect your data.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn direction="up" delay={0.1}>
              <Card variant="glass" className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-accent-teal to-accent-green rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Lock className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-text-primary">
                    Encryption
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-text-secondary">
                    AES-256 encryption for all data at rest and in transit. 
                    Your conversations are unreadable to anyone but you.
                  </CardDescription>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <Card variant="glass" className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-accent-green to-accent-teal rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Database className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-text-primary">
                    Local Processing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-text-secondary">
                    Most analysis happens on your device. Your conversations 
                    never leave your phone unless you choose to share them.
                  </CardDescription>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <Card variant="glass" className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-warning-coral to-accent-teal rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-text-primary">
                    Compliance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-text-secondary">
                    SOC 2 compliant infrastructure with regular security audits. 
                    We meet the highest industry standards for data protection.
                  </CardDescription>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="py-20 bg-gradient-to-b from-transparent to-primary-dark/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-text-primary mb-6">
                Your Rights
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                You have complete control over your data. Here&apos;s what you can do.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn direction="right">
              <Card variant="glass">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-text-primary">
                    Data Control
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center text-text-secondary">
                      <div className="w-2 h-2 bg-accent-teal rounded-full mr-3" />
                      Delete your account and all data
                    </li>
                    <li className="flex items-center text-text-secondary">
                      <div className="w-2 h-2 bg-accent-teal rounded-full mr-3" />
                      Export your data in standard formats
                    </li>
                    <li className="flex items-center text-text-secondary">
                      <div className="w-2 h-2 bg-accent-teal rounded-full mr-3" />
                      Revoke access to third-party services
                    </li>
                    <li className="flex items-center text-text-secondary">
                      <div className="w-2 h-2 bg-accent-teal rounded-full mr-3" />
                      Opt out of analytics and marketing
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn direction="left">
              <Card variant="glass">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-text-primary">
                    Transparency
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center text-text-secondary">
                      <div className="w-2 h-2 bg-accent-green rounded-full mr-3" />
                      Request a copy of all your data
                    </li>
                    <li className="flex items-center text-text-secondary">
                      <div className="w-2 h-2 bg-accent-green rounded-full mr-3" />
                      See exactly what data we have about you
                    </li>
                    <li className="flex items-center text-text-secondary">
                      <div className="w-2 h-2 bg-accent-green rounded-full mr-3" />
                      Understand how your data is used
                    </li>
                    <li className="flex items-center text-text-secondary">
                      <div className="w-2 h-2 bg-accent-green rounded-full mr-3" />
                      Contact us with privacy questions
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn direction="up">
            <div className="glass-card p-12 rounded-2xl">
              <h2 className="text-3xl md:text-4xl font-black text-text-primary mb-6">
                Questions About Privacy?
              </h2>
              <p className="text-xl text-text-secondary mb-8">
                We&apos;re committed to transparency. If you have any questions about our 
                privacy practices or want to exercise your rights, we&apos;re here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-accent-teal to-accent-green text-white px-8 py-4 rounded-xl font-semibold hover:from-accent-green hover:to-accent-teal transition-all duration-300 shadow-lg hover:shadow-xl">
                  Contact Privacy Team
                </button>
                <button className="border-2 border-accent-teal text-accent-teal px-8 py-4 rounded-xl font-semibold hover:bg-accent-teal hover:text-white transition-all duration-300">
                  Download Your Data
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}

export default Privacy
