import { Metadata } from 'next'
import { Shield, Lock, Eye, Database } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import FadeIn from '@/components/animations/FadeIn'

export const metadata: Metadata = {
  title: 'Privacy Policy - Complete Anonymity & Data Protection',
  description: 'Learn how GutCheck protects your privacy with complete anonymity, end-to-end encryption, and no personal data retention.',
}

const Privacy = () => {
  const privacyPrinciples = [
    {
      icon: Lock,
      title: 'Complete Anonymity',
      description: 'We do not collect or retain your real name, address, or any personally identifiable information. You remain completely anonymous.',
      details: [
        'No name or address collection',
        'Anonymous account creation',
        'No identity verification required',
        'Payment details fully encrypted'
      ]
    },
    {
      icon: Eye,
      title: 'Zero-Knowledge Architecture',
      description: 'We cannot access your conversations. All data is encrypted before it leaves your device and only you hold the decryption keys.',
      details: [
        'End-to-end encryption (AES-256)',
        'Client-side encryption',
        'No server-side access to content',
        'Zero-knowledge proof system'
      ]
    },
    {
      icon: Database,
      title: 'Encrypted Payment Processing',
      description: 'Payment details are processed through PCI-DSS compliant providers. We never see or store your full payment information.',
      details: [
        'Tokenized payment processing',
        'No storage of card details',
        'Anonymous transaction IDs only',
        'Stripe-level encryption'
      ]
    },
    {
      icon: Shield,
      title: 'UK GDPR Compliant',
      description: 'Full compliance with UK GDPR and Data Protection Act 2018. Your rights are protected by law.',
      details: [
        'Right to erasure (be forgotten)',
        'Data portability guaranteed',
        'Transparent data practices',
        'ICO registered'
      ]
    }
  ]

  const dataTypes = [
    {
      category: 'Anonymous Account Data',
      data: ['Encrypted email address (hashed)', 'Anonymous user ID', 'Subscription status', 'Account preferences'],
      purpose: 'To provide service access without knowing your identity',
      retention: 'Until you delete your account (instant deletion available)',
      anonymous: true
    },
    {
      category: 'Payment Information',
      data: ['Anonymous transaction ID', 'Payment status (active/cancelled)', 'Subscription tier'],
      purpose: 'To process payments and manage subscriptions securely',
      retention: '7 years (UK tax law requirement) - names and card details are NOT stored',
      anonymous: true
    },
    {
      category: 'Encrypted Conversation Data',
      data: ['End-to-end encrypted messages', 'Client-side pattern analysis', 'Encrypted safety scores'],
      purpose: 'To provide analysis and safety insights - we cannot read this data',
      retention: 'Stored locally on your device or encrypted on servers with your keys only',
      anonymous: true
    },
    {
      category: 'Anonymized Usage Analytics',
      data: ['App usage frequency (no content)', 'Feature usage statistics', 'Performance metrics'],
      purpose: 'To improve service quality - all analytics are fully anonymized',
      retention: '2 years (completely anonymized, cannot be linked to you)',
      anonymous: true
    }
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-primary-dark to-secondary-dark">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-text-primary mb-8">
                Your Privacy is{' '}
                <span className="bg-gradient-to-r from-accent-teal to-accent-green bg-clip-text text-transparent">
                  Sacred
                </span>
              </h1>
              <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                GutCheck is designed for <strong className="text-accent-teal">complete anonymity</strong>. 
                We don&apos;t collect your name, we don&apos;t store your payment details, and we can&apos;t read your conversations. 
                You are truly anonymous.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center mb-20">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-text-primary mb-6">
                Our Privacy Principles
              </h2>
              <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                These principles guide everything we do to protect your privacy and keep your data secure.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-5xl mx-auto">
            {privacyPrinciples.map((principle, index) => (
              <FadeIn key={principle.title} direction="up" delay={index * 0.1}>
                <Card variant="glass" hover className="h-full text-center">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-r from-accent-teal to-accent-green rounded-xl flex items-center justify-center mb-4 mx-auto">
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
                    <ul className="space-y-2 text-left max-w-sm mx-auto">
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
      <section className="py-24 md:py-32 bg-gradient-to-b from-transparent to-primary-dark/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center mb-20">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-text-primary mb-6">
                What Data We Collect
              </h2>
              <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                Transparency is key. Here&apos;s exactly what data we collect and why.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-10 md:space-y-12 max-w-4xl mx-auto">
            {dataTypes.map((dataType, index) => (
              <FadeIn key={dataType.category} direction="up" delay={index * 0.1}>
                <Card variant="glass" className="text-center">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg md:text-xl font-bold text-text-primary mb-3">
                      {dataType.category}
                    </CardTitle>
                    <CardDescription className="text-sm md:text-base text-text-secondary leading-relaxed max-w-2xl mx-auto">
                      Purpose: {dataType.purpose}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-4 md:space-y-6 max-w-2xl mx-auto">
                      <div>
                        <div className="flex items-center justify-center gap-2 mb-4">
                          <span className="px-3 py-1 bg-accent-teal/20 text-accent-teal text-xs font-semibold rounded-full">
                            100% ANONYMOUS
                          </span>
                        </div>
                        <h4 className="font-semibold text-text-primary mb-3 text-sm md:text-base">Data Collected:</h4>
                        <ul className="space-y-2 text-left">
                          {dataType.data.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start text-sm md:text-base text-text-secondary leading-relaxed">
                              <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mr-3 flex-shrink-0 mt-2" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="text-left">
                        <h4 className="font-semibold text-text-primary mb-2 text-sm md:text-base">Retention Period:</h4>
                        <p className="text-sm md:text-base text-text-secondary leading-relaxed">{dataType.retention}</p>
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
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center mb-20">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-text-primary mb-6">
                Security Measures
              </h2>
              <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                We use industry-leading security practices to protect your data.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-5xl mx-auto">
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
      <section className="py-24 md:py-32 bg-gradient-to-b from-transparent to-primary-dark/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center mb-20">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-text-primary mb-6">
                Your Rights
              </h2>
              <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                You have complete control over your data. Here&apos;s what you can do.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-4xl mx-auto">
            <FadeIn direction="right">
              <Card variant="glass" className="text-center">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-text-primary">
                    Data Control
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-left max-w-xs mx-auto">
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
              <Card variant="glass" className="text-center">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-text-primary">
                    Transparency
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-left max-w-xs mx-auto">
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
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="glass-card p-8 md:p-12 rounded-2xl text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-text-primary mb-8">
                Questions About Privacy?
              </h2>
              <p className="text-lg md:text-xl text-text-secondary mb-10 leading-relaxed max-w-3xl mx-auto">
                We&apos;re committed to transparency and your anonymity. If you have any questions about our 
                privacy practices or want to exercise your rights under UK GDPR, we&apos;re here to help.
              </p>
              <div className="mb-10 p-6 bg-accent-teal/10 border border-accent-teal/30 rounded-xl text-left max-w-2xl mx-auto">
                <h3 className="text-base md:text-lg font-bold text-accent-teal mb-4 text-center">Important: What We DON&apos;T Collect</h3>
                <ul className="space-y-3 text-sm md:text-base text-text-secondary">
                  <li className="flex items-start">
                    <span className="text-accent-teal mr-2 flex-shrink-0">✓</span>
                    <span>Your real name or identity - you remain completely anonymous</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-teal mr-2 flex-shrink-0">✓</span>
                    <span>Your payment card details - processed securely by Stripe, we never see them</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-teal mr-2 flex-shrink-0">✓</span>
                    <span>The content of your conversations - encrypted end-to-end, unreadable to us</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-teal mr-2 flex-shrink-0">✓</span>
                    <span>Your location, device info, or browsing history beyond basic analytics</span>
                  </li>
                </ul>
                <p className="mt-4 text-xs md:text-sm text-text-secondary italic text-center">
                  Last Updated: January 2025 | Compliant with UK GDPR, Data Protection Act 2018, and registered with the ICO
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="bg-gradient-to-r from-accent-teal to-accent-green text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold hover:from-accent-green hover:to-accent-teal transition-all duration-300 shadow-lg hover:shadow-xl text-center"
                >
                  Contact Privacy Team
                </a>
                <button className="border-2 border-accent-teal text-accent-teal px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold hover:bg-accent-teal hover:text-white transition-all duration-300">
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
