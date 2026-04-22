import Link from 'next/link'
import { CheckCircle, ArrowRight } from 'lucide-react'

export default function ServicesPage() {
  const services = [
    {
      title: 'Life Coaching',
      description: 'Transform your life with personalized guidance through life\'s transitions.',
      benefits: [
        'Clarity on life goals and values',
        'Overcome limiting beliefs',
        'Create actionable life plans',
        'Build confidence and resilience',
        'Navigate major life transitions',
        'Develop sustainable habits',
      ],
      price: '$150',
      session: 'per session',
    },
    {
      title: 'Career Coaching',
      description: 'Advance your career and achieve professional success on your terms.',
      benefits: [
        'Career path clarification',
        'Resume and interview prep',
        'Leadership skill development',
        'Salary negotiation coaching',
        'Work-life balance strategies',
        'Professional networking guidance',
      ],
      price: '$175',
      session: 'per session',
    },
    {
      title: 'Wellness Coaching',
      description: 'Create sustainable habits for better health, balance, and well-being.',
      benefits: [
        'Personalized health goals',
        'Nutrition and fitness guidance',
        'Stress management techniques',
        'Sleep improvement strategies',
        'Mental health support',
        'Accountability and motivation',
      ],
      price: '$160',
      session: 'per session',
    },
  ]

  const packages = [
    {
      name: 'Starter',
      sessions: 4,
      description: 'Perfect for getting started',
      price: '$540',
      savings: 'Save $60',
    },
    {
      name: 'Growth',
      sessions: 8,
      description: 'Most popular',
      price: '$1,080',
      savings: 'Save $120',
      featured: true,
    },
    {
      name: 'Transformation',
      sessions: 12,
      description: 'Best for lasting change',
      price: '$1,620',
      savings: 'Save $180',
    },
  ]

  return (
    <main className="w-full">
      {/* Page Header */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-muted via-background to-background">
        <div className="container mx-auto px-4 text-center">
          <h1
            className="text-5xl md:text-6xl font-bold text-secondary mb-6"
            style={{ fontFamily: 'var(--font-jost)' }}
          >
            Our Services
          </h1>
          <p
            className="text-lg text-foreground max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            Specialized coaching programs designed to help you achieve your goals and create lasting change.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-muted/20 rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow">
                <h3
                  className="text-2xl font-bold text-secondary mb-3"
                  style={{ fontFamily: 'var(--font-jost)' }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-foreground mb-6"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  {service.description}
                </p>

                {/* Benefits */}
                <ul className="space-y-3 mb-8">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
                      <span
                        className="text-foreground text-sm"
                        style={{ fontFamily: 'var(--font-inter)' }}
                      >
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="mb-6 pb-6 border-b border-border">
                  <div className="flex items-baseline gap-1">
                    <span
                      className="text-3xl font-bold text-primary"
                      style={{ fontFamily: 'var(--font-jost)' }}
                    >
                      {service.price}
                    </span>
                    <span
                      className="text-foreground text-sm"
                      style={{ fontFamily: 'var(--font-inter)' }}
                    >
                      {service.session}
                    </span>
                  </div>
                </div>

                <button
                  className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-accent transition-colors font-semibold"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  Book Session
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold text-secondary mb-4"
              style={{ fontFamily: 'var(--font-jost)' }}
            >
              Coaching Packages
            </h2>
            <p
              className="text-lg text-foreground"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              Save more with our coaching packages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 transition-all ${
                  pkg.featured
                    ? 'bg-gradient-to-br from-primary to-accent text-white border-2 border-accent shadow-xl scale-105'
                    : 'bg-white border border-border hover:shadow-lg'
                }`}
              >
                <h3
                  className={`text-2xl font-bold mb-2 ${pkg.featured ? 'text-white' : 'text-secondary'}`}
                  style={{ fontFamily: 'var(--font-jost)' }}
                >
                  {pkg.name}
                </h3>
                <p
                  className={`text-sm mb-4 ${pkg.featured ? 'text-white/90' : 'text-foreground'}`}
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  {pkg.description}
                </p>

                <div className="mb-6">
                  <div
                    className={`text-sm font-semibold mb-2 ${pkg.featured ? 'text-white/80' : 'text-primary'}`}
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    {pkg.sessions} sessions
                  </div>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span
                      className={`text-3xl font-bold ${pkg.featured ? 'text-white' : 'text-primary'}`}
                      style={{ fontFamily: 'var(--font-jost)' }}
                    >
                      {pkg.price}
                    </span>
                  </div>
                  <p
                    className={`text-sm font-semibold ${pkg.featured ? 'text-white' : 'text-green-600'}`}
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    {pkg.savings}
                  </p>
                </div>

                <button
                  className={`w-full px-6 py-3 rounded-lg font-semibold transition-colors ${
                    pkg.featured
                      ? 'bg-white text-primary hover:bg-gray-100'
                      : 'bg-primary text-white hover:bg-accent'
                  }`}
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  Choose Package
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2
            className="text-4xl md:text-5xl font-bold text-secondary mb-6"
            style={{ fontFamily: 'var(--font-jost)' }}
          >
            Not sure which service is right for you?
          </h2>
          <p
            className="text-lg text-foreground mb-8 max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            Schedule a free 15-minute consultation to discuss your goals and find the perfect coaching program.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg hover:bg-accent transition-colors font-semibold"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            Schedule Free Consultation <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  )
}
