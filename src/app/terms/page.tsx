import { Metadata } from 'next'
import { Shield, FileText, AlertTriangle, CheckCircle } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import FadeIn from '@/components/animations/FadeIn'

export const metadata: Metadata = {
  title: 'Terms of Service - GutCheck',
  description: 'Terms of Service for GutCheck - Understanding your rights and our commitment to your safety and anonymity.',
}

const Terms = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary-dark to-secondary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-primary mb-6">
                Terms of{' '}
                <span className="bg-gradient-to-r from-accent-teal to-accent-green bg-clip-text text-transparent">
                  Service
                </span>
              </h1>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Clear, fair terms that protect your rights while ensuring GutCheck remains a safe space for everyone.
              </p>
              <p className="text-sm text-text-secondary mt-4 italic">
                Last Updated: January 2025 | Governed by the laws of England and Wales
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Key Terms Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-text-primary mb-6">
                Key Points
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                The most important things you need to know about using GutCheck.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn direction="up" delay={0.1}>
              <Card variant="glass" hover className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-accent-teal to-accent-green rounded-xl flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-text-primary">
                    Complete Anonymity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-text-secondary">
                    You are not required to provide your real name or identity to use GutCheck. 
                    We process payments anonymously through encrypted payment providers. 
                    Your anonymity is protected at all times.
                  </CardDescription>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <Card variant="glass" hover className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-accent-green to-accent-teal rounded-xl flex items-center justify-center mb-4">
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-text-primary">
                    Not Professional Advice
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-text-secondary">
                    GutCheck is an AI assistant tool, not a replacement for professional advice. 
                    In emergencies, always contact authorities, counselors, or crisis services. 
                    We provide guidance, not legal or medical advice.
                  </CardDescription>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <Card variant="glass" hover className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-warning-coral to-accent-teal rounded-xl flex items-center justify-center mb-4">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-text-primary">
                    Your Data, Your Control
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-text-secondary">
                    All conversations are encrypted and only you can access them. 
                    You can delete your account and all data at any time with immediate effect. 
                    We comply fully with UK GDPR.
                  </CardDescription>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn direction="up" delay={0.4}>
              <Card variant="glass" hover className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-accent-teal to-success-green rounded-xl flex items-center justify-center mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-text-primary">
                    Fair Pricing & Refunds
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-text-secondary">
                    Transparent pricing with 7-day free trial. Cancel anytime. 
                    Refunds available within 14 days under UK Consumer Rights Act 2015. 
                    No hidden fees or automatic renewals without notice.
                  </CardDescription>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Detailed Terms */}
      <section className="py-20 bg-gradient-to-b from-transparent to-primary-dark/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-text-primary mb-6">
                Detailed Terms
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Complete terms and conditions for using GutCheck services.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-8">
            {/* Section 1 */}
            <FadeIn direction="up">
              <Card variant="glass">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-text-primary">
                    1. Acceptance of Terms
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-text-secondary">
                  <p>
                    By accessing or using GutCheck (&quot;the Service&quot;), you agree to be bound by these Terms of Service 
                    (&quot;Terms&quot;). If you do not agree to these Terms, you may not use the Service.
                  </p>
                  <p>
                    These Terms constitute a legally binding agreement between you and GutCheck Ltd, a company 
                    registered in England and Wales. The Service is provided from the United Kingdom and governed 
                    by UK law.
                  </p>
                  <p className="text-accent-teal font-semibold">
                    You may use the Service anonymously. We do not require your real name or identity.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>

            {/* Section 2 */}
            <FadeIn direction="up">
              <Card variant="glass">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-text-primary">
                    2. Service Description & Limitations
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-text-secondary">
                  <p>
                    <strong className="text-text-primary">What GutCheck Is:</strong> GutCheck is an AI-powered 
                    analysis tool designed to help you identify toxic patterns, manipulation, and concerning behaviors 
                    in your interactions. It provides guidance, safety scores, and evidence-based insights.
                  </p>
                  <p>
                    <strong className="text-text-primary">What GutCheck Is NOT:</strong> GutCheck is not a substitute 
                    for professional medical, legal, psychological, or therapeutic advice. It is an assistant, not an authority.
                  </p>
                  <div className="p-4 bg-warning-coral/10 border-l-4 border-warning-coral rounded">
                    <p className="font-semibold text-warning-coral">Important Disclaimer:</p>
                    <ul className="mt-2 space-y-2 list-disc list-inside">
                      <li>In case of immediate danger, contact emergency services (999 in the UK)</li>
                      <li>For mental health crises, contact Samaritans (116 123) or other crisis services</li>
                      <li>GutCheck cannot guarantee the accuracy of AI analysis - use it as guidance, not absolute truth</li>
                      <li>Always consult qualified professionals for legal, medical, or therapeutic matters</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            {/* Section 3 */}
            <FadeIn direction="up">
              <Card variant="glass">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-text-primary">
                    3. Privacy & Anonymity
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-text-secondary">
                  <p>
                    <strong className="text-accent-teal">Your anonymity is fundamental to our service.</strong> 
                    We have designed GutCheck to protect your identity at all times.
                  </p>
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li><strong>No Name Required:</strong> You are not required to provide your real name, address, or identity</li>
                    <li><strong>Encrypted Payments:</strong> Payment details are processed through PCI-DSS compliant providers (Stripe). We only receive anonymous transaction IDs - never your name or full card details</li>
                    <li><strong>End-to-End Encryption:</strong> All conversations are encrypted before leaving your device. We cannot read your conversations</li>
                    <li><strong>Anonymous Analytics:</strong> Usage data is fully anonymized and cannot be linked back to your identity</li>
                  </ul>
                  <p className="text-accent-teal font-semibold">
                    For full details, please see our Privacy Policy. We comply fully with UK GDPR and Data Protection Act 2018.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>

            {/* Section 4 */}
            <FadeIn direction="up">
              <Card variant="glass">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-text-primary">
                    4. Payment Terms & UK Consumer Rights
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-text-secondary">
                  <p><strong className="text-text-primary">Subscription Plans:</strong></p>
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li>Monthly Plan: £9.92/month</li>
                    <li>Yearly Plan: £98.55/year (equivalent to 27p per day)</li>
                    <li>All plans include a 7-day free trial</li>
                  </ul>
                  
                  <p><strong className="text-text-primary">Payment Processing:</strong></p>
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li>Payments are processed securely by Stripe, a PCI-DSS Level 1 certified provider</li>
                    <li>We store only anonymous transaction IDs - your full payment details are never accessible to us</li>
                    <li>Transaction records are retained for 7 years to comply with UK tax law (HMRC requirements)</li>
                    <li>Your name and card details are NOT stored by GutCheck</li>
                  </ul>

                  <p><strong className="text-text-primary">UK Consumer Rights - 14-Day Cooling Off Period:</strong></p>
                  <p>
                    Under the Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013, 
                    you have the right to cancel your subscription within 14 days of purchase and receive a full refund, 
                    unless you have expressly agreed to begin receiving the service immediately and acknowledged that 
                    you will lose your right to cancel once the service has been fully performed.
                  </p>

                  <p><strong className="text-text-primary">Cancellation & Refunds:</strong></p>
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li>Cancel anytime through your account settings</li>
                    <li>No cancellation fees</li>
                    <li>Refunds available within 14 days of purchase under UK Consumer Rights Act 2015</li>
                    <li>After cancellation, access continues until the end of your paid period</li>
                  </ul>
                </CardContent>
              </Card>
            </FadeIn>

            {/* Section 5 */}
            <FadeIn direction="up">
              <Card variant="glass">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-text-primary">
                    5. Acceptable Use Policy
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-text-secondary">
                  <p><strong className="text-text-primary">You agree NOT to:</strong></p>
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li>Use the Service for any illegal activities</li>
                    <li>Attempt to reverse engineer, hack, or compromise the Service&apos;s security</li>
                    <li>Share your account credentials with others</li>
                    <li>Use the Service to harm, harass, or threaten others</li>
                    <li>Attempt to circumvent payment or subscription requirements</li>
                    <li>Upload malicious code, viruses, or harmful content</li>
                    <li>Scrape, data mine, or extract data from the Service beyond your personal use</li>
                  </ul>
                  <p>
                    Violation of these terms may result in immediate suspension or termination of your account.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>

            {/* Section 6 */}
            <FadeIn direction="up">
              <Card variant="glass">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-text-primary">
                    6. Data Retention & Deletion Rights
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-text-secondary">
                  <p>
                    <strong className="text-text-primary">Your Right to Deletion (UK GDPR Article 17):</strong>
                  </p>
                  <p>
                    You have the right to request deletion of your account and all associated data at any time. 
                    Upon request, we will permanently delete:
                  </p>
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li>Your encrypted account data</li>
                    <li>All conversation history and analysis</li>
                    <li>User preferences and settings</li>
                    <li>Encrypted safety documentation</li>
                  </ul>
                  
                  <p><strong className="text-text-primary">Exceptions (Legal Requirements):</strong></p>
                  <p>
                    Under UK law, we must retain certain financial records for 7 years for tax purposes (HMRC requirement). 
                    These records contain ONLY:
                  </p>
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li>Anonymous transaction IDs</li>
                    <li>Payment amounts and dates</li>
                    <li>Subscription status history</li>
                  </ul>
                  <p className="text-accent-teal font-semibold">
                    These records do NOT contain your name, address, or any conversation data. They are fully anonymized.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>

            {/* Section 7 */}
            <FadeIn direction="up">
              <Card variant="glass">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-text-primary">
                    7. Limitation of Liability
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-text-secondary">
                  <p>
                    To the fullest extent permitted by UK law:
                  </p>
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li>GutCheck is provided &quot;as is&quot; without warranties of any kind</li>
                    <li>We do not guarantee the accuracy, completeness, or reliability of AI analysis</li>
                    <li>We are not liable for any decisions you make based on information from the Service</li>
                    <li>We are not liable for any indirect, consequential, or incidental damages</li>
                    <li>Our total liability to you shall not exceed the amount you paid for the Service in the 12 months preceding the claim</li>
                  </ul>
                  
                  <p className="text-warning-coral font-semibold">
                    Nothing in these Terms excludes or limits our liability for death or personal injury caused by 
                    negligence, fraud, or any other liability that cannot be excluded under UK law.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>

            {/* Section 8 */}
            <FadeIn direction="up">
              <Card variant="glass">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-text-primary">
                    8. Governing Law & Dispute Resolution
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-text-secondary">
                  <p>
                    These Terms are governed by the laws of England and Wales. Any disputes arising from these 
                    Terms or your use of the Service shall be subject to the exclusive jurisdiction of the courts 
                    of England and Wales.
                  </p>
                  <p>
                    <strong className="text-text-primary">Alternative Dispute Resolution:</strong> If you are a 
                    consumer in the UK, you may also submit complaints to the Online Dispute Resolution platform 
                    provided by the European Commission (if applicable during transition periods) or seek mediation 
                    through approved UK ADR schemes.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>

            {/* Section 9 */}
            <FadeIn direction="up">
              <Card variant="glass">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-text-primary">
                    9. Changes to Terms
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-text-secondary">
                  <p>
                    We may update these Terms from time to time to reflect changes in our Service, legal requirements, 
                    or business practices. We will notify you of material changes by:
                  </p>
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li>Posting the updated Terms on our website</li>
                    <li>Sending an email notification (if you have provided an email)</li>
                    <li>Displaying an in-app notification</li>
                  </ul>
                  <p>
                    Your continued use of the Service after changes take effect constitutes acceptance of the updated Terms. 
                    If you do not agree to the changes, you may cancel your subscription.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>

            {/* Section 10 */}
            <FadeIn direction="up">
              <Card variant="glass">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-text-primary">
                    10. Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-text-secondary">
                  <p>
                    If you have questions about these Terms or wish to exercise your rights under UK GDPR, please contact us:
                  </p>
                  <div className="p-4 bg-accent-teal/10 border border-accent-teal/30 rounded-lg">
                    <p><strong className="text-text-primary">GutCheck Ltd</strong></p>
                    <p>Email: legal@gutcheck.app</p>
                    <p>Privacy Team: privacy@gutcheck.app</p>
                    <p>Support: support@gutcheck.app</p>
                    <p className="mt-4 text-sm italic">
                      ICO Registration Number: [To be added upon registration]
                    </p>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn direction="up">
            <div className="glass-card p-12 rounded-2xl">
              <h2 className="text-3xl md:text-4xl font-black text-text-primary mb-6">
                Summary: Your Rights
              </h2>
              <div className="text-left space-y-4 text-text-secondary mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent-teal flex-shrink-0 mt-1" />
                  <p>Use GutCheck completely anonymously - no name or identity required</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent-teal flex-shrink-0 mt-1" />
                  <p>Your payment details are encrypted and we never store your full card information</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent-teal flex-shrink-0 mt-1" />
                  <p>14-day cooling off period with full refund rights under UK Consumer Rights Act</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent-teal flex-shrink-0 mt-1" />
                  <p>Cancel anytime with no fees - access continues until end of paid period</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent-teal flex-shrink-0 mt-1" />
                  <p>Delete all your data instantly at any time under UK GDPR rights</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent-teal flex-shrink-0 mt-1" />
                  <p>All conversations are end-to-end encrypted - we cannot read them</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-accent-teal to-accent-green text-white px-8 py-4 rounded-xl font-semibold hover:from-accent-green hover:to-accent-teal transition-all duration-300 shadow-lg hover:shadow-xl">
                  Start Your Free Trial
                </button>
                <button className="border-2 border-accent-teal text-accent-teal px-8 py-4 rounded-xl font-semibold hover:bg-accent-teal hover:text-white transition-all duration-300">
                  Contact Legal Team
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}

export default Terms

