export default function WhyChooseSection() {
  const benefits = [
    {
      title: 'Personalized Approach',
      description: 'Every coaching plan is tailored to your unique needs, goals, and circumstances for maximum impact.',
      icon: '✨',
    },
    {
      title: 'Expert Coaching',
      description: 'Our certified coaches bring years of experience and proven methodologies to support your growth.',
      icon: '🎯',
    },
    {
      title: 'Confidential Support',
      description: 'Your privacy and trust are paramount. All coaching conversations remain completely confidential.',
      icon: '🔒',
    },
    {
      title: 'Life Balance',
      description: 'Learn strategies to balance career, relationships, and personal wellbeing for holistic success.',
      icon: '⚖️',
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-primary" style={{ fontFamily: 'var(--font-inter)' }}>
            wHY CHOOSE US
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground" style={{ fontFamily: 'var(--font-jost)' }}>
            Nurturing Your Feminine Strengths for a Life of Radiance and Success
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-muted/30 rounded-2xl p-8 border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-lg font-semibold text-foreground mb-3" style={{ fontFamily: 'var(--font-jost)' }}>
                {benefit.title}
              </h3>
              <p className="text-muted-foreground" style={{ fontFamily: 'var(--font-inter)' }}>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
