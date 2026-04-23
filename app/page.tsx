import WhatWeOfferSection from '@/components/home/what-we-offer-section'
import WhyChooseSection from '@/components/home/why-choose-section'
import FinalCTASection from '@/components/home/final-cta-section'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <section className="relative overflow-hidden bg-black text-white">
        <div className="mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-center px-6 py-24 md:px-10 lg:px-16">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/70">
              GME Trading
            </p>

            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
              Building stronger distribution, trading, and business growth.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 md:text-lg">
              Welcome to GME Trading. This homepage is now using only the
              components that currently exist in your repository so the Vercel
              build can run properly.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/about"
                className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
              >
                About Us
              </Link>

              <Link
                href="/services"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Our Services
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      <WhatWeOfferSection />
      <WhyChooseSection />
      <FinalCTASection />
    </main>
  )
}
