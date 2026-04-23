import type { Metadata } from 'next'
import { Mail, Trash2, Clock, Shield } from 'lucide-react'
import FadeIn from '@/components/animations/FadeIn'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'GutChecks Red Flags & Safety Account Deletion',
  description:
    'Request deletion of your GutChecks Red Flags & Safety account and associated personal data.',
}

export default function DeleteAccountPage() {
  return (
    <div className="min-h-screen pt-32 flex flex-col items-center">
      <section className="page-section w-full bg-gradient-to-b from-primary-dark to-secondary-dark flex justify-center">
        <div className="w-full max-w-4xl px-6 sm:px-8 lg:px-12">
          <FadeIn direction="up">
            <div className="text-center space-y-8">
              <div className="section-badge">Account Deletion</div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-text-primary">
                GutChecks Red Flags &amp; Safety{' '}
                <span className="bg-gradient-to-r from-accent-teal to-accent-green bg-clip-text text-transparent">
                  Account Deletion
                </span>
              </h1>
              <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                Request deletion of your <strong className="text-text-primary">GutChecks Red Flags &amp; Safety</strong> account and associated personal data.
                This page is provided for users of the app published by <strong className="text-accent-teal">Justice Asibe</strong>.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="page-section w-full flex justify-center">
        <div className="w-full max-w-4xl px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <FadeIn direction="up" delay={0.1}>
              <Card variant="glass" className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-accent-teal to-accent-green rounded-xl flex items-center justify-center mb-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-text-primary">How to Request Deletion</CardTitle>
                  <CardDescription className="text-text-secondary">
                    To request deletion of your account, email{' '}
                    <a
                      href="mailto:support@mygutcheck.org?subject=Account%20Deletion%20Request%20-%20GutChecks%20Red%20Flags%20%26%20Safety"
                      className="text-accent-teal hover:underline"
                    >
                      support@mygutcheck.org
                    </a>.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-text-secondary">
                  <p className="text-sm">
                    <strong className="text-text-primary">Recommended subject:</strong>{' '}
                    Account Deletion Request - GutChecks Red Flags &amp; Safety
                  </p>
                  <p className="text-sm font-semibold text-text-primary">Please include:</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start"><div className="w-1.5 h-1.5 bg-accent-teal rounded-full mr-3 mt-2" />Your full name</li>
                    <li className="flex items-start"><div className="w-1.5 h-1.5 bg-accent-teal rounded-full mr-3 mt-2" />The email address or phone number associated with your account</li>
                    <li className="flex items-start"><div className="w-1.5 h-1.5 bg-accent-teal rounded-full mr-3 mt-2" />Any additional details that may help us identify your account</li>
                  </ul>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <Card variant="glass" className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-warning-coral to-accent-teal rounded-xl flex items-center justify-center mb-4">
                    <Trash2 className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-text-primary">What Happens Next</CardTitle>
                  <CardDescription className="text-text-secondary">
                    Once we verify your request, we begin deleting your GutChecks Red Flags &amp; Safety account.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-text-secondary text-sm leading-relaxed">
                  We may contact you for additional information to confirm your identity before completing deletion.
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="page-section w-full bg-gradient-to-b from-transparent to-primary-dark/30 flex justify-center">
        <div className="w-full max-w-4xl px-6 sm:px-8 lg:px-12">
          <FadeIn direction="up">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-text-primary">
                Data Handling Details
              </h2>
              <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
                Clear details on what is deleted, what may be retained, and how long deletion takes.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-8 max-w-3xl mx-auto">
            <FadeIn direction="up" delay={0.1}>
              <Card variant="glass" className="p-6">
                <h3 className="text-xl font-bold text-text-primary mb-4">What Data Will Be Deleted</h3>
                <ul className="space-y-2 text-text-secondary">
                  <li className="flex items-start"><div className="w-1.5 h-1.5 bg-accent-teal rounded-full mr-3 mt-2" />Account profile information</li>
                  <li className="flex items-start"><div className="w-1.5 h-1.5 bg-accent-teal rounded-full mr-3 mt-2" />App usage data linked to your account</li>
                  <li className="flex items-start"><div className="w-1.5 h-1.5 bg-accent-teal rounded-full mr-3 mt-2" />User-submitted content, where applicable</li>
                  <li className="flex items-start"><div className="w-1.5 h-1.5 bg-accent-teal rounded-full mr-3 mt-2" />Other personal information associated with your account, unless retention is required by law</li>
                </ul>
              </Card>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <Card variant="glass" className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-5 h-5 text-accent-teal" />
                  <h3 className="text-xl font-bold text-text-primary">What Data May Be Retained</h3>
                </div>
                <p className="text-text-secondary mb-3">We may retain limited information when required for:</p>
                <ul className="space-y-2 text-text-secondary">
                  <li className="flex items-start"><div className="w-1.5 h-1.5 bg-accent-teal rounded-full mr-3 mt-2" />Legal compliance</li>
                  <li className="flex items-start"><div className="w-1.5 h-1.5 bg-accent-teal rounded-full mr-3 mt-2" />Fraud prevention</li>
                  <li className="flex items-start"><div className="w-1.5 h-1.5 bg-accent-teal rounded-full mr-3 mt-2" />Dispute resolution</li>
                  <li className="flex items-start"><div className="w-1.5 h-1.5 bg-accent-teal rounded-full mr-3 mt-2" />Enforcement of our legal terms and obligations</li>
                </ul>
                <p className="text-text-secondary mt-4 text-sm">
                  Any retained data is kept only as long as necessary for these purposes. Where retention is legally required,
                  we retain only the minimum necessary data for the required period.
                </p>
              </Card>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <Card variant="glass" className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-5 h-5 text-accent-teal" />
                  <h3 className="text-xl font-bold text-text-primary">How Long Deletion Takes</h3>
                </div>
                <p className="text-text-secondary">
                  We aim to process verified account deletion requests within 30 days.
                </p>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="page-section w-full flex justify-center">
        <div className="w-full max-w-3xl px-6 sm:px-8 lg:px-12">
          <FadeIn direction="up">
            <div className="glass-card p-8 md:p-10 rounded-2xl text-center">
              <h2 className="text-2xl md:text-3xl font-black text-text-primary mb-4">How to Contact Support</h2>
              <p className="text-text-secondary text-lg">
                If you have questions about account deletion or your data, contact{' '}
                <a href="mailto:support@mygutcheck.org" className="text-accent-teal hover:underline font-semibold">
                  support@mygutcheck.org
                </a>.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
