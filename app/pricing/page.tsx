import { CheckCircle, ArrowRight } from 'lucide-react'

export default function PricingPage() {
  const pricingPlans = [
    {
      name: 'Single Session',
      description: 'Perfect for trying coaching',
      price: '150',
      duration: '1 session',
      features: [
        '60-minute coaching session',
        'Goal setting and planning',
        'Email follow-up',
        'Access to resources',
      ],
      cta: 'Book Session',
      featured: false,
    },
    {
      name: 'Starter Package',
      description: 'Build momentum',
      price: '540',
      duration: '4 sessions',
      originalPrice: '600',
      savings: 'Save $60',
      features: [
        '4 × 60-minute sessions',
        'Monthly accountability check-ins',
        'Custom action plans',
        'Email support',
        'Access to resource library',
        'Progress tracking',
      ],
      cta: 'Choose Plan',
      featured: false,
    },
    {
      name: 'Growth Package',
      description: 'Most popular',
      price: '1080',
      duration: '8 sessions',
      originalPrice: '1200',
      savings: 'Save $120',
      features: [
        '8 × 60-minute sessions',
        'Bi-weekly accountability',
        'Advanced action planning',
        'Priority email support',
        'Full resource library access',
        'Monthly progress reviews',
        'Habit tracking tools',
      ],
      cta: 'Choose Plan',
      featured: true,
    },
    {
      name: 'Transformation Package',
      description: 'Best for lasting change',
      price: '1620',
      duration: '12 sessions',
      originalPrice: '1800',
      savings: 'Save $180',
      features: [
        '12 × 60-minute sessions',
        'Weekly accountability',
        'Comprehensive life planning',
        'Premium support access',
        'Unlimited resource access',
        'Bi-weekly progress reviews',
        'Advanced tracking & tools',
        'One bonus session',
      ],
      cta: 'Choose Plan',
      featured: false,
    },
  ]

  const faqs = [
    {
      question: 'How long are coaching sessions?',
      answer: 'All coaching sessions are 60 minutes long. This duration allows us to dive deep into your goals and create meaningful action plans.',
    },
    {
      question: 'How often should I have coaching sessions?',
      answer: 'This depends on your goals and preferences. Many clients find weekly or bi-weekly sessions most effective, but we can customize the schedule to your needs.',
    },
    {
      question: 'Can I change packages?',
      answer: 'Absolutely! You can upgrade or downgrade your package at any time. We want you to have the support level that works best for you.',
    },
    {
      question: 'Do you offer a money-back guarantee?',
      answer: 'Yes! If you\'re not satisfied with your coaching after the first session, we\'ll offer a full refund.',
    },
    {
      question: 'Do packages expire?',
      answer: 'Packages are valid for 6 months from the date of purchase. We recommend scheduling your sessions within this timeframe for best results.',
    },
    {
      question: 'What if I need to reschedule?',
      answer: 'We understand life happens! You can reschedule up to 24 hours in advance. We\'re flexible and work with your schedule.',
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
            Transparent, Flexible Pricing
          </h1>
          <p
            className="text-lg text-foreground max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            Choose the coaching plan that works best for your goals and budget. All packages include personalized coaching and access to our resource library.
          </p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl transition-all ${
                  plan.featured
                    ? 'bg-gradient-to-br from-primary to-accent text-white border-2 border-accent shadow-xl lg:scale-105 lg:col-span-2 md:col-span-2'
                    : 'bg-muted/20 border border-border hover:shadow-lg text-foreground'
                }`}
              >
                <div className="p-8">
                  <h3
                    className={`text-2xl font-bold mb-2 ${plan.featured ? 'text-white' : 'text-secondary'}`}
                    style={{ fontFamily: 'var(--font-jost)' }}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-sm mb-6 ${plan.featured ? 'text-white/90' : 'text-foreground'}`}
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-white/20">
                    <div className="flex items-baseline gap-1 mb-2">
                      <span
                        className={`text-4xl font-bold ${plan.featured ? 'text-white' : 'text-primary'}`}
                        style={{ fontFamily: 'var(--font-jost)' }}
                      >
                        ${plan.price}
                      </span>
                      {plan.originalPrice && (
                        <span className={`text-sm line-through ${plan.featured ? 'text-white/60' : 'text-foreground/60'}`}>
                          ${plan.originalPrice}
                        </span>
                      )}
                    </div>
                    <p
                      className={`text-sm ${plan.featured ? 'text-white/90' : 'text-foreground'}`}
                      style={{ fontFamily: 'var(--font-inter)' }}
                    >
                      {plan.duration}
                    </p>
                    {plan.savings && (
                      <p
                        className={`text-sm font-semibold mt-2 ${plan.featured ? 'text-white' : 'text-green-600'}`}
                        style={{ fontFamily: 'var(--font-inter)' }}
                      >
                        {plan.savings}
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle
                          size={20}
                          className={`flex-shrink-0 mt-0.5 ${
                            plan.featured ? 'text-white' : 'text-primary'
                          }`}
                        />
                        <span
                          className={`text-sm ${plan.featured ? 'text-white' : 'text-foreground'}`}
                          style={{ fontFamily: 'var(--font-inter)' }}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full px-6 py-3 rounded-lg font-semibold transition-colors ${
                      plan.featured
                        ? 'bg-white text-primary hover:bg-gray-100'
                        : 'bg-primary text-white hover:bg-accent'
                    }`}
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <p
            className="text-center text-sm text-foreground max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            All prices are in USD. Payment plans available. Contact us for custom packages or corporate coaching.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold text-secondary"
              style={{ fontFamily: 'var(--font-jost)' }}
            >
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-border hover:shadow-lg transition-shadow">
                <h3
                  className="text-lg font-semibold text-secondary mb-3"
                  style={{ fontFamily: 'var(--font-jost)' }}
                >
                  {faq.question}
                </h3>
                <p
                  className="text-foreground"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  {faq.answer}
                </p>
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
            Ready to invest in yourself?
          </h2>
          <p
            className="text-lg text-foreground mb-8 max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            Schedule a free 15-minute consultation to discuss which package is best for your goals.
          </p>
          <button
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg hover:bg-accent transition-colors font-semibold"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            Schedule Free Consultation <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </main>
  )
}
