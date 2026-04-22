import Image from 'next/image'
import Link from 'next/link'

export default function WhatWeOfferSection() {
  const services = [
    {
      image: '/coaching-guidance.jpg',
      title: 'One-on-One Coaching',
    },
    {
      image: '/wellness-moment.jpg',
      title: 'Wellness Coaching',
    },
    {
      image: '/hero-woman.jpg',
      title: 'Career Development',
    },
    {
      image: '/personal-growth.jpg',
      title: 'Personal Growth',
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-primary" style={{ fontFamily: 'var(--font-inter)' }}>
            what we offer
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground" style={{ fontFamily: 'var(--font-jost)' }}>
            Flourishia: Your Personal Feminine Life Coach for a Flourishing Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-inter)' }}>
            Discover our comprehensive coaching services designed to support every aspect of your feminine journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl aspect-square hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-semibold text-white" style={{ fontFamily: 'var(--font-jost)' }}>
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
