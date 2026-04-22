import { Award, Users, Heart, Target } from 'lucide-react'
import Image from 'next/image'

export default function AboutPage() {
  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & Head Coach',
      image: '/team-member-1.jpg',
      bio: 'With 12+ years of experience in life coaching, Sarah has helped 200+ women transform their lives and achieve their dreams.',
      specialties: ['Life Coaching', 'Career Development', 'Leadership'],
    },
    {
      name: 'Emily Chen',
      role: 'Wellness Coach',
      image: '/team-member-2.jpg',
      bio: 'Certified holistic wellness coach specializing in stress management, nutrition, and sustainable lifestyle changes.',
      specialties: ['Wellness', 'Nutrition', 'Mindfulness'],
    },
    {
      name: 'Jessica Martinez',
      role: 'Career Coach',
      image: '/team-member-3.jpg',
      bio: 'Dedicated to helping women advance their careers with confidence. Over 150+ successful career transitions coached.',
      specialties: ['Career Coaching', 'Leadership', 'Communication'],
    },
  ]

  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'We approach every client with empathy, understanding, and genuine care for their well-being.',
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'Our coaching is focused on measurable outcomes and sustainable change that lasts.',
    },
    {
      icon: Users,
      title: 'Empowerment',
      description: 'We believe in empowering women to take control of their lives and achieve their dreams.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards of professionalism and expertise in all we do.',
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
            About Flourishia
          </h1>
          <p
            className="text-lg text-foreground max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            Dedicated to empowering women to flourish in every area of their lives.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span
                className="text-primary font-semibold text-sm"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                OUR STORY
              </span>
              <h2
                className="text-4xl md:text-5xl font-bold text-secondary mt-2 mb-6"
                style={{ fontFamily: 'var(--font-jost)' }}
              >
                Founded on a Passion for Empowerment
              </h2>
              <p
                className="text-lg text-foreground mb-6 leading-relaxed"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                Flourishia was founded by Sarah Johnson, a certified life coach with over a decade of experience helping women achieve their goals. After witnessing the transformative power of coaching in her own life, Sarah decided to dedicate her career to helping other women experience the same growth and fulfillment.
              </p>
              <p
                className="text-lg text-foreground mb-6 leading-relaxed"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                Today, Flourishia has grown into a thriving coaching practice with a team of dedicated coaches specializing in life, career, and wellness coaching. Our mission is simple: empower women to create the lives they truly desire.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground" style={{ fontFamily: 'var(--font-inter)' }}>
                    500+ women empowered
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground" style={{ fontFamily: 'var(--font-inter)' }}>
                    10+ years combined experience
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground" style={{ fontFamily: 'var(--font-inter)' }}>
                    95% success rate
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl aspect-square flex items-center justify-center">
              <div className="text-6xl">✨</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold text-secondary"
              style={{ fontFamily: 'var(--font-jost)' }}
            >
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="text-center">
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <Icon size={32} className="text-primary" />
                  </div>
                  <h3
                    className="text-xl font-semibold text-secondary mb-3"
                    style={{ fontFamily: 'var(--font-jost)' }}
                  >
                    {value.title}
                  </h3>
                  <p
                    className="text-foreground text-sm"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span
              className="text-primary font-semibold text-sm"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              OUR TEAM
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold text-secondary mt-2"
              style={{ fontFamily: 'var(--font-jost)' }}
            >
              Meet Our Coaches
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-muted/20 rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative h-64 w-full overflow-hidden bg-muted">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                <h3
                  className="text-xl font-bold text-secondary mb-1 text-center"
                  style={{ fontFamily: 'var(--font-jost)' }}
                >
                  {member.name}
                </h3>
                <p
                  className="text-sm text-primary font-semibold text-center mb-4"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  {member.role}
                </p>
                <p
                  className="text-sm text-foreground mb-4"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  {member.bio}
                </p>
                <div className="flex flex-wrap gap-2">
                  {member.specialties.map((specialty, i) => (
                    <span
                      key={i}
                      className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                      style={{ fontFamily: 'var(--font-inter)' }}
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
