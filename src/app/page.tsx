import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import HowItWorks from '@/components/sections/HowItWorks'
import PrivacySection from '@/components/sections/PrivacySection'
import WhatItHelpsWith from '@/components/sections/WhatItHelpsWith'
import Pricing from '@/components/sections/Pricing'
import Testimonials from '@/components/sections/Testimonials'
import MovementSnippet from '@/components/sections/MovementSnippet'
import AppDownload from '@/components/sections/AppDownload'
import TrustDisclaimer from '@/components/sections/TrustDisclaimer'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <PrivacySection />
      <WhatItHelpsWith />
      <Pricing />
      <Testimonials />
      <MovementSnippet />
      <AppDownload />
      <TrustDisclaimer />
    </>
  )
}
