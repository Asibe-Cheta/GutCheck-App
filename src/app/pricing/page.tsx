import { Metadata } from 'next'
import { Check, Star, Shield, Zap } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import FadeIn from '@/components/animations/FadeIn'

export const metadata: Metadata = {
  title: 'Pricing - Choose Your Plan',
  description: 'Simple, transparent pricing for GutCheck. Start with our free plan or upgrade for advanced features.',
}

const Pricing = () => {
  const plans = [
    {
      name: 'Monthly',
      price: '£6.99',
      period: 'month',
      description: 'Perfect for trying out GutCheck',
      features: [
        'AI-powered conversation analysis',
        'Emotional pattern detection',
        'Red flag identification',
        'Relationship health insights',
        'Anonymous and private',
        'Access to crisis helplines (UK, US, Canada, Australia)',
        '3-day free trial'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Yearly',
      price: '£59.99',
      period: 'year',
      description: 'Best value - Save 28%',
      features: [
        'Everything in Monthly',
        'AI-powered conversation analysis',
        'Emotional pattern detection',
        'Red flag identification',
        'Relationship health insights',
        'Anonymous and private',
        'Access to crisis helplines (UK, US, Canada, Australia)',
        'Save £24 per year',
        '3-day free trial'
      ],
      cta: 'Start Free Trial',
      popular: true
    }
  ]

  const faqs = [
    {
      question: 'Is there a free trial?',
      answer: 'Yes! All plans come with a 3-day free trial. You can cancel anytime during the trial period.'
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Absolutely. Cancel your subscription anytime with one click. No hidden fees or contracts.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards via Stripe. All payments are processed securely and we never see your payment details.'
    },
    {
      question: 'Is my data really private?',
      answer: 'Yes! We use end-to-end encryption and your conversations are completely anonymous. We never collect your real name or identity.'
    },
    {
      question: 'What regions do you support for crisis helplines?',
      answer: 'Our app provides access to official crisis helplines for the UK, United States, Canada, and Australia.'
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
                Simple{' '}
                <span className="bg-gradient-to-r from-accent-teal to-accent-green bg-clip-text text-transparent">
                  Pricing
                </span>
              </h1>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Choose the plan that fits your needs. All plans include our core safety features 
                and come with a 3-day free trial.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plans.map((plan, index) => (
              <FadeIn key={plan.name} direction="up" delay={index * 0.1}>
                <Card 
                  variant={plan.popular ? "glass" : "default"} 
                  hover 
                  className={`h-full ${plan.popular ? 'border-accent-teal border-2' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="bg-gradient-to-r from-accent-teal to-accent-green text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold text-text-primary">
                      {plan.name}
                    </CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-black text-text-primary">
                        {plan.price}
                      </span>
                      <span className="text-text-secondary ml-2">
                        /{plan.period}
                      </span>
                    </div>
                    <CardDescription className="text-text-secondary mt-2">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className="w-5 h-5 text-accent-green mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-text-secondary">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      variant={plan.popular ? "primary" : "outline"} 
                      size="lg" 
                      className="w-full"
                    >
                      {plan.cta}
                    </Button>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-primary-dark/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-text-primary mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-text-secondary">
                Everything you need to know about our pricing and plans.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <FadeIn key={faq.question} direction="up" delay={index * 0.1}>
                <Card variant="glass">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-text-primary">
                      {faq.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-text-secondary">
                      {faq.answer}
                    </CardDescription>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-text-primary mb-6">
                Trusted by Thousands
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Join thousands of young adults who trust GutCheck to keep them safe.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn direction="up" delay={0.1}>
              <Card variant="glass" className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-accent-teal to-accent-green rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-text-primary">
                    SOC 2 Compliant
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-text-secondary">
                    We meet the highest industry standards for data security and privacy protection.
                  </CardDescription>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <Card variant="glass" className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-accent-green to-accent-teal rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-text-primary">
                    99.9% Uptime
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-text-secondary">
                    Our service is available when you need it most. We maintain 99.9% uptime.
                  </CardDescription>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <Card variant="glass" className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-warning-coral to-accent-teal rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Check className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-text-primary">
                    HIPAA Ready
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-text-secondary">
                    We&apos;re working toward HIPAA compliance to serve healthcare providers and institutions.
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
                Start your 3-day free trial today. 
                Cancel anytime if you&apos;re not completely satisfied.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  Start Free Trial
                </Button>
                <Button variant="outline" size="lg">
                  Contact Sales
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}

export default Pricing
