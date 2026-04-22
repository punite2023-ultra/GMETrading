import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function FinalCTASection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/coaching-guidance.jpg"
          alt="Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/85 to-secondary/80"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center space-y-8 animate-fade-in max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight" style={{ fontFamily: 'var(--font-jost)' }}>
            Explore Personalized Feminine Coaching and Flourish in Every Aspect
          </h2>

          <p className="text-xl text-gray-100" style={{ fontFamily: 'var(--font-inter)' }}>
            Take the first step towards transformation. Our expert coaches are ready to guide you on your journey to success and fulfillment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-up pt-6">
            <Link
              href="/contact"
              className="px-10 py-4 bg-primary text-white rounded-lg hover:bg-accent transition-all duration-300 font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:-translate-y-1"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              Get Started Now <ArrowRight size={20} />
            </Link>
            <Link
              href="/services"
              className="px-10 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold hover:shadow-lg hover:-translate-y-1"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
