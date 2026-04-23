import { Mail, Download } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import FadeIn from '@/components/animations/FadeIn'

const Contact = () => {

  return (
    <div className="min-h-screen pt-32 flex flex-col items-center">
      {/* Hero Section */}
      <section className="py-20 w-full bg-gradient-to-b from-primary-dark to-secondary-dark flex justify-center">
        <div className="w-full max-w-4xl px-6 sm:px-8 lg:px-12">
          <FadeIn direction="up">
            <div className="text-center space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-primary">
                Get in Touch
              </h1>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                Whether you are a user with a question, a parent seeking guidance, an educator exploring GutChecks for your school, a journalist, or a potential partner, we would love to hear from you.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 w-full flex justify-center">
        <div className="w-full max-w-3xl px-6 sm:px-8 lg:px-12">
          <FadeIn direction="up">
            <div className="text-center space-y-8">
              <Card variant="glass" className="p-12">
                <div className="text-center space-y-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-accent-teal to-accent-green rounded-xl flex items-center justify-center mx-auto">
                    <Mail className="w-10 h-10 text-white" />
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
                      Email Support
                    </h2>
                    <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">General enquiries, parents and educators, press, partnerships, and advisory panel enquiries:</p>
                    <a 
                      href="mailto:contact@mygutcheck.org"
                      className="text-2xl md:text-3xl font-bold text-accent-teal hover:text-accent-green transition-colors inline-block"
                    >
                      contact@mygutcheck.org
                    </a>
                    <p className="text-sm text-text-secondary pt-4">Response time: Within 24-48 hours</p>
                  </div>
                </div>
              </Card>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* App Download Section */}
      <section className="page-section w-full bg-gradient-to-b from-transparent to-primary-dark/30 flex justify-center">
        <div className="w-full max-w-3xl px-6 sm:px-8 lg:px-12">
          <FadeIn direction="up">
            <Card variant="glass" className="p-10 bg-accent-teal/10 border-accent-teal/30">
              <div className="text-center space-y-6">
                <div className="w-14 h-14 bg-gradient-to-r from-warning-coral to-accent-teal rounded-xl flex items-center justify-center mx-auto">
                  <Download className="w-6 h-6 text-white" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-text-primary">
                    Need urgent support?
                  </h3>
                  <p className="text-text-secondary">
                    GutChecks is not a crisis service. If you are in immediate danger or need urgent support, please contact emergency services or a helpline in your area.
                  </p>
                  <p className="text-text-secondary">
                    The GutChecks app provides regional helplines for the UK, US, Canada, and Australia. You can also access these directly on our Resources page.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a href="/resources" className="btn-secondary">View Resources</a>
                  <a href="https://apps.apple.com/gb/app/gutcheck-app/id6754253217" target="_blank" rel="noopener noreferrer" className="btn-primary w-full max-w-xs mx-auto flex items-center justify-center">
                    <Download className="w-5 h-5 mr-2" />
                    Download iOS App
                  </a>
                </div>
              </div>
            </Card>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 w-full flex justify-center">
        <div className="w-full max-w-3xl px-6 sm:px-8 lg:px-12">
          <FadeIn direction="up">
            <Card variant="glass" className="p-10">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold text-text-primary">Follow the Movement</h3>
                <p className="text-text-secondary">
                  GutChecks is more than an app. It is a movement to educate and empower users to recognise manipulation, grooming, and toxic behaviour before it becomes harm.
                </p>
                <p className="text-text-secondary">Instagram: @gutchecksapp | TikTok: @gutchecksapp | LinkedIn: GutChecks</p>
              </div>
            </Card>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}

export default Contact
