'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Mail, MapPin, Clock, Send, CheckCircle, Download } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input, Textarea } from '@/components/ui/Input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import FadeIn from '@/components/animations/FadeIn'
import { contactFormSchema, type ContactFormData } from '@/lib/validations'

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  })

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      console.log('Form submitted:', data)
      setIsSubmitted(true)
      reset()
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get help with your account or technical issues',
      contact: 'contact@mygutcheck.org',
      response: 'Response time: Within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Office Hours',
      description: 'General inquiries and business partnerships',
      contact: 'Mon-Fri 9AM-6PM PST',
      response: 'Response time: Within 2 business days'
    }
  ]

  return (
    <div className="min-h-screen pt-32 flex flex-col items-center">
      {/* Hero Section */}
      <section className="page-section w-full bg-gradient-to-b from-primary-dark to-secondary-dark flex justify-center">
        <div className="w-full max-w-4xl px-6 sm:px-8 lg:px-12">
          <FadeIn direction="up">
            <div className="text-center space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-primary">
                Get in{' '}
                <span className="bg-gradient-to-r from-accent-teal to-accent-green bg-clip-text text-transparent">
                  Touch
                </span>
              </h1>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                We&apos;re here to help. Whether you need technical support, have questions about our service, 
                or are in crisis, we&apos;re just a message away.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="page-section w-full flex justify-center">
        <div className="w-full max-w-3xl px-6 sm:px-8 lg:px-12">
          <FadeIn direction="up">
            <div className="text-center space-y-6 mb-12">
              <h2 className="text-3xl font-bold text-text-primary">
                Send us a Message
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Fill out the form below and we&apos;ll get back to you as soon as possible.
              </p>
            </div>

            {isSubmitted ? (
              <Card variant="glass" className="p-8 text-center">
                <CheckCircle className="w-16 h-16 text-success-green mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-text-primary mb-2">
                  Message Sent!
                </h3>
                <p className="text-text-secondary mb-6">
                  Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
                <Button onClick={() => setIsSubmitted(false)}>
                  Send Another Message
                </Button>
              </Card>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 glass-card p-8 rounded-2xl border border-accent-teal/20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Name"
                    placeholder="Your full name"
                    {...register('name')}
                    error={errors.name?.message}
                  />
                  <Input
                    label="Email"
                    type="email"
                    placeholder="your@email.com"
                    {...register('email')}
                    error={errors.email?.message}
                  />
                </div>

                <Input
                  label="Subject"
                  placeholder="What's this about?"
                  {...register('subject')}
                  error={errors.subject?.message}
                />

                <Textarea
                  label="Message"
                  placeholder="Tell us how we can help..."
                  rows={6}
                  {...register('message')}
                  error={errors.message?.message}
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </FadeIn>
        </div>
      </section>

      {/* Contact Information */}
      <section className="page-section w-full bg-gradient-to-b from-transparent to-primary-dark/30 flex justify-center">
        <div className="w-full max-w-3xl px-6 sm:px-8 lg:px-12">
          <FadeIn direction="up">
            <div className="text-center space-y-6 mb-12">
              <h2 className="text-3xl font-bold text-text-primary">
                Other Ways to Reach Us
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Choose the method that works best for you. We&apos;re here to help.
              </p>
            </div>

            <div className="space-y-8 max-w-2xl mx-auto">
              {contactInfo.map((info) => (
                <Card key={info.title} variant="glass" hover className="p-8">
                  <div className="text-center space-y-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-accent-teal to-accent-green rounded-xl flex items-center justify-center mx-auto">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-text-primary">
                        {info.title}
                      </h3>
                      <p className="text-text-secondary">
                        {info.description}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-center">
                        <span className="text-text-primary font-medium">
                          {info.contact}
                        </span>
                      </div>
                      <div className="flex items-center justify-center text-sm text-text-secondary">
                        <Clock className="w-4 h-4 mr-2" />
                        {info.response}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}

              {/* App Support Notice */}
              <Card variant="glass" className="p-8 border-accent-teal border-2">
                <div className="text-center space-y-6">
                  <h3 className="text-xl font-bold text-accent-teal">
                    Need Personalized Support?
                  </h3>
                  <p className="text-text-secondary max-w-2xl mx-auto leading-relaxed">
                    Use the App for personalized support, based on your region. 
                    Get region-specific crisis resources and guidance tailored to your needs.
                  </p>
                  <a 
                    href="https://apps.apple.com/gb/app/gutcheck-app/id6754253217" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full max-w-xs mx-auto bg-gradient-to-r from-accent-teal to-accent-green text-white px-6 py-3 rounded-xl font-semibold hover:from-accent-green hover:to-accent-teal transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download iOS App
                  </a>
                </div>
              </Card>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}

export default Contact
