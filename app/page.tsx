import Link from 'next/link'
import HeroSection from '@/components/home/hero-section'
import StatsSection from '@/components/home/stats-section'
import TeamSection from '@/components/home/team-section'
import ValuesSection from '@/components/home/values-section'
import CoachingSection from '@/components/home/coaching-section'
import WhatWeOfferSection from '@/components/home/what-we-offer-section'
import ServicesGridSection from '@/components/home/services-grid-section'
import WhyChooseSection from '@/components/home/why-choose-section'
import TestimonialsSection from '@/components/home/testimonials-section'
import FinalCTASection from '@/components/home/final-cta-section'

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <HeroSection />
      <StatsSection />
      <TeamSection />
      <ValuesSection />
      <CoachingSection />
      <WhatWeOfferSection />
      <ServicesGridSection />
      <CoachingSection variant="dark" />
      <WhyChooseSection />
      <TestimonialsSection />
      <FinalCTASection />
    </main>
  )
}
