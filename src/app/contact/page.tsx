'use client'

import { useState } from 'react'
// import { Metadata } from 'next'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
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
      response: 'Within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Office Hours',
      description: 'General inquiries and business partnerships',
      contact: 'Mon-Fri 9AM-6PM PST',
      response: 'Within 2 business days'
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
                Get in{' '}
                <span className="bg-gradient-to-r from-accent-teal to-accent-green bg-clip-text text-transparent">
                  Touch
                </span>
              </h1>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                We&apos;re here to help. Whether you need technical support, have questions about our service, 
                or are in crisis, we&apos;re just a message away.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <FadeIn direction="right">
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-6">
                Send us a Message
              </h2>
              <p className="text-text-secondary mb-8">
                Fill out the form below and we&apos;ll get back to you as soon as possible.
              </p>

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
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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

                  <Button
                    type="submit"
                    size="lg"
                    loading={isSubmitting}
                    className="w-full"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </FadeIn>

          {/* Contact Information */}
          <FadeIn direction="left">
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-6">
                Other Ways to Reach Us
              </h2>
              <p className="text-text-secondary mb-8">
                Choose the method that works best for you. We&apos;re here to help.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <Card key={info.title} variant="glass" hover>
                    <CardHeader>
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-accent-teal to-accent-green rounded-xl flex items-center justify-center mr-4">
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-xl font-bold text-text-primary">
                            {info.title}
                          </CardTitle>
                          <CardDescription className="text-text-secondary">
                            {info.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <span className="text-text-primary font-medium">
                            {info.contact}
                          </span>
                        </div>
                        <div className="flex items-center text-sm text-text-secondary">
                          <Clock className="w-4 h-4 mr-2" />
                          Response time: {info.response}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* App Support Notice */}
              <Card variant="glass" className="mt-8 border-accent-teal border-2">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-accent-teal">
                    Need Personalized Support?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-text-secondary mb-4">
                    Use the App for personalized support, based on your region. 
                    Get region-specific crisis resources and guidance tailored to your needs.
                  </p>
                  <a 
                    href="https://apps.apple.com/gb/app/gutcheck-app/id6754253217" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full bg-gradient-to-r from-accent-teal to-accent-green text-white px-6 py-3 rounded-xl font-semibold hover:from-accent-green hover:to-accent-teal transition-all duration-300 shadow-lg hover:shadow-xl mt-4"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Download iOS App
                  </a>
                </CardContent>
              </Card>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  )
}

export default Contact
