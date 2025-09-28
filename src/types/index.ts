export interface Feature {
  id: string
  title: string
  description: string
  icon: string
  benefits: string[]
}

export interface PricingPlan {
  id: string
  name: string
  price: string
  period: string
  description: string
  features: string[]
  isPopular?: boolean
  cta: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  content: string
  avatar?: string
  rating: number
}

export interface FAQ {
  id: string
  question: string
  answer: string
}

export interface NavigationItem {
  label: string
  href: string
  external?: boolean
}

export interface SocialLink {
  platform: string
  href: string
  icon: string
}
