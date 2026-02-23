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
    },
    {
      category: 'Payment Information',
      data: ['Anonymous transaction ID', 'Payment status (active/cancelled)', 'Subscription tier'],
      purpose: 'To process payments and manage subscriptions securely',
      retention: '7 years (UK tax law requirement) - names and card details are NOT stored',
    },
    {
      category: 'Encrypted Conversation Data',
      data: ['End-to-end encrypted messages', 'Client-side pattern analysis', 'Encrypted safety scores'],
      purpose: 'To provide analysis and safety insights - we cannot read this data',
      retention: 'Stored locally on your device or encrypted on servers with your keys only',
    },
    {
      category: 'Conversation Content and Images (AI Chat & Guidance)',
      data: ['Messages you send in chat or guidance', 'Images or documents you attach when using these features'],
      purpose: 'To provide you with personalised guidance. This data is sent to Anthropic (Claude), a third-party AI service, solely to generate responses for you. We do not use your content to train AI models. We ask for your consent in the app before any of this data is sent.',
      retention: 'Processed only to generate your response. Anthropic\'s handling of data is described in their privacy policy (see Third-Party AI Provider section below).',
      hideAnonymousBadge: true,
    },
    {
      category: 'Anonymized Usage Analytics',
      data: ['App usage frequency (no content)', 'Feature usage statistics', 'Performance metrics'],
      purpose: 'To improve service quality - all analytics are fully anonymized',
      retention: '2 years (completely anonymized, cannot be linked to you)',
    }
  ]

  return (
    <div className="min-h-screen pt-32 flex flex-col items-center">
      {/* Hero Section */}
      <section className="page-section w-full bg-gradient-to-b from-primary-dark to-secondary-dark flex justify-center">
        <div className="w-full max-w-4xl px-6 sm:px-8 lg:px-12">
          <FadeIn direction="up">
            <div className="text-center space-y-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-text-primary">
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
      <section className="page-section w-full flex justify-center">
        <div className="w-full max-w-4xl px-6 sm:px-8 lg:px-12">
          <FadeIn direction="up">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-text-primary">
                Our Privacy Principles
              </h2>
              <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
                These principles guide everything we do to protect your privacy and keep your data secure.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {privacyPrinciples.map((principle, index) => (
              <FadeIn key={principle.title} direction="up" delay={index * 0.1}>
                <Card variant="glass" hover className="h-full">
                  <CardHeader className="text-center space-y-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-accent-teal to-accent-green rounded-xl flex items-center justify-center mx-auto">
                      <principle.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-text-primary">
                      {principle.title}
                    </CardTitle>
                    <CardDescription className="text-text-secondary">
                      {principle.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
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
      <section className="page-section w-full bg-gradient-to-b from-transparent to-primary-dark/30 flex justify-center">
        <div className="w-full max-w-4xl px-6 sm:px-8 lg:px-12">
          <FadeIn direction="up">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-text-primary">
                What Data We Collect
              </h2>
              <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
                Transparency is key. Here&apos;s exactly what data we collect and why.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-8 max-w-3xl mx-auto">
            {dataTypes.map((dataType, index) => (
              <FadeIn key={dataType.category} direction="up" delay={index * 0.1}>
                <Card variant="glass" className="p-6">
                  <div className="text-center space-y-4">
                    <h3 className="text-lg md:text-xl font-bold text-text-primary">
                      {dataType.category}
                    </h3>
                    <p className="text-sm md:text-base text-text-secondary leading-relaxed">
                      Purpose: {dataType.purpose}
                    </p>
                    
                    {!('hideAnonymousBadge' in dataType && dataType.hideAnonymousBadge) && (
                    <div className="flex items-center justify-center py-3">
                      <span className="px-3 py-1 bg-accent-teal/20 text-accent-teal text-xs font-semibold rounded-full">
                        100% ANONYMOUS
                      </span>
                    </div>
                    )}

                    <div className="text-left space-y-4 pt-2">
                      <div>
                        <h4 className="font-semibold text-text-primary mb-2 text-sm md:text-base">Data Collected:</h4>
                        <ul className="space-y-2">
                          {dataType.data.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start text-sm md:text-base text-text-secondary leading-relaxed">
                              <div className="w-1.5 h-1.5 bg-accent-teal rounded-full mr-3 flex-shrink-0 mt-2" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary mb-2 text-sm md:text-base">Retention Period:</h4>
                        <p className="text-sm md:text-base text-text-secondary leading-relaxed">{dataType.retention}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Third-Party AI Provider (Anthropic) - App Store compliance */}
      <section className="page-section w-full flex justify-center">
        <div className="w-full max-w-4xl px-6 sm:px-8 lg:px-12">
          <FadeIn direction="up">
            <div className="text-center space-y-6 mb-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-text-primary">
                AI-Powered Features & Third-Party Provider
              </h2>
              <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
                When you use our chat or guidance features, your data is handled as follows.
              </p>
            </div>
          </FadeIn>
          <FadeIn direction="up">
            <Card variant="glass" className="p-6 md:p-8 max-w-3xl mx-auto">
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  When you use GutCheck&apos;s chat or guidance features, we collect the messages you send and any images or documents you attach. This data is collected when you send messages or attach images in the app (for example in the chat, when starting a conversation from the home screen, or from a notification). This data is used to provide you with personalised guidance. To do this, we send your conversation content and any attached images to <strong className="text-text-primary">Anthropic (Claude)</strong>, a third-party AI service, <strong className="text-text-primary">solely to generate responses for you</strong>. We do not use your content to train AI models. We ask for your consent in the app before any of your data is sent to this provider.
                </p>
                <p>
                  Anthropic&apos;s handling of data is described in their privacy policy:{' '}
                  <a 
                    href="https://www.anthropic.com/privacy" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-accent-teal hover:underline"
                  >
                    https://www.anthropic.com/privacy
                  </a>
                  . For full details of what we collect, how we use it, and how we protect it, see the rest of this policy.
                </p>
              </div>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* Security Measures */}
      <section className="page-section w-full flex justify-center">
        <div className="w-full max-w-4xl px-6 sm:px-8 lg:px-12">
          <FadeIn direction="up">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-text-primary">
                Security Measures
              </h2>
              <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
                We use industry-leading security practices to protect your data.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <FadeIn direction="up" delay={0.1}>
              <Card variant="glass" className="text-center p-6">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-accent-teal to-accent-green rounded-full mx-auto flex items-center justify-center">
                    <Lock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary">
                    Encryption
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    AES-256 encryption for all data at rest and in transit. 
                    Your conversations are unreadable to anyone but you.
                  </p>
                </div>
              </Card>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <Card variant="glass" className="text-center p-6">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-accent-green to-accent-teal rounded-full mx-auto flex items-center justify-center">
                    <Database className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary">
                    Local Processing
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    Most analysis happens on your device. Your conversations 
                    never leave your phone unless you choose to share them.
                  </p>
                </div>
              </Card>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <Card variant="glass" className="text-center p-6">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-warning-coral to-accent-teal rounded-full mx-auto flex items-center justify-center">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary">
                    Compliance
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    SOC 2 compliant infrastructure with regular security audits. 
                    We meet the highest industry standards for data protection.
                  </p>
                </div>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="page-section w-full bg-gradient-to-b from-transparent to-primary-dark/30 flex justify-center">
        <div className="w-full max-w-4xl px-6 sm:px-8 lg:px-12">
          <FadeIn direction="up">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-text-primary">
                Your Rights
              </h2>
              <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
                You have complete control over your data. Here&apos;s what you can do.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <FadeIn direction="right">
              <Card variant="glass" className="p-6">
                <div className="text-center space-y-4">
                  <h3 className="text-xl font-bold text-text-primary">
                    Data Control
                  </h3>
                  <ul className="space-y-3 text-left">
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
                </div>
              </Card>
            </FadeIn>

            <FadeIn direction="left">
              <Card variant="glass" className="p-6">
                <div className="text-center space-y-4">
                  <h3 className="text-xl font-bold text-text-primary">
                    Transparency
                  </h3>
                  <ul className="space-y-3 text-left">
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
                </div>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="page-section w-full flex justify-center">
        <div className="w-full max-w-3xl px-6 sm:px-8 lg:px-12">
          <FadeIn direction="up">
            <div className="glass-card p-8 md:p-12 rounded-2xl">
              <div className="text-center space-y-8">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-text-primary">
                  Questions About Privacy?
                </h2>
                <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
                  We&apos;re committed to transparency and your anonymity. If you have any questions about our 
                  privacy practices or want to exercise your rights under UK GDPR, we&apos;re here to help.
                </p>
                
                <div className="p-8 bg-accent-teal/10 border-2 border-accent-teal/30 rounded-xl">
                  <h3 className="text-lg md:text-xl font-bold text-accent-teal mb-6">Important: What We DON&apos;T Collect</h3>
                  <ul className="space-y-4 text-sm md:text-base text-text-secondary text-left">
                    <li className="flex items-start">
                      <span className="text-accent-teal mr-3 flex-shrink-0 text-xl">✓</span>
                      <span>Your real name or identity - you remain completely anonymous</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-teal mr-3 flex-shrink-0 text-xl">✓</span>
                      <span>Your payment card details - processed securely by Stripe, we never see them</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-teal mr-3 flex-shrink-0 text-xl">✓</span>
                      <span>The content of your conversations for our own use — encrypted and unreadable to us. When you use our AI chat or guidance features, we only send that content to Anthropic (Claude) with your prior consent, solely to generate responses; we do not use it to train AI models (see AI-Powered Features & Third-Party Provider above).</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-teal mr-3 flex-shrink-0 text-xl">✓</span>
                      <span>Your location, device info, or browsing history beyond basic analytics</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-xs md:text-sm text-text-secondary italic text-center">
                    Last Updated: January 2025 | Compliant with UK GDPR, Data Protection Act 2018, and registered with the ICO
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <a 
                    href="/contact" 
                    className="btn-primary"
                  >
                    Contact Privacy Team
                  </a>
                  <a 
                    href="/contact"
                    className="btn-primary"
                  >
                    Download Your Data
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}

export default Privacy
