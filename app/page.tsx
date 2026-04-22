import WhatWeOfferSection from "@/components/home/what-we-offer-section"
import WhyChooseSection from "@/components/home/why-choose-section"
import FinalCTASection from "@/components/home/final-cta-section"

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <WhatWeOfferSection />
      <WhyChooseSection />
      <FinalCTASection />
    </main>
  )
}
