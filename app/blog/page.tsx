import Link from 'next/link'
import { Calendar, User, ArrowRight } from 'lucide-react'

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: '5 Keys to Building Unshakeable Confidence',
      excerpt: 'Discover the fundamental principles that successful women use to build lasting confidence in their personal and professional lives.',
      author: 'Sarah Johnson',
      date: 'March 15, 2024',
      category: 'Personal Growth',
      image: '💪',
      readTime: '5 min read',
    },
    {
      id: 2,
      title: 'How to Navigate Career Transitions with Grace',
      excerpt: 'Making a career change can be daunting, but with the right mindset and strategy, you can transition smoothly to a more fulfilling path.',
      author: 'Jessica Martinez',
      date: 'March 10, 2024',
      category: 'Career',
      image: '🚀',
      readTime: '7 min read',
    },
    {
      id: 3,
      title: 'The Power of Intentional Goal Setting',
      excerpt: 'Learn how to set meaningful goals that align with your values and create a clear roadmap to success.',
      author: 'Sarah Johnson',
      date: 'March 5, 2024',
      category: 'Goal Setting',
      image: '🎯',
      readTime: '6 min read',
    },
    {
      id: 4,
      title: 'Work-Life Balance: It\'s Not What You Think',
      excerpt: 'Exploring what real balance means and practical strategies to achieve harmony between your personal and professional life.',
      author: 'Emily Chen',
      date: 'February 28, 2024',
      category: 'Wellness',
      image: '⚖️',
      readTime: '8 min read',
    },
    {
      id: 5,
      title: 'Breaking Through Limiting Beliefs',
      excerpt: 'Identify the thoughts holding you back and learn powerful techniques to rewire your mindset for success.',
      author: 'Sarah Johnson',
      date: 'February 20, 2024',
      category: 'Mindset',
      image: '🧠',
      readTime: '6 min read',
    },
    {
      id: 6,
      title: 'The Art of Effective Communication',
      excerpt: 'Master the skills that successful women use to communicate confidently and build stronger relationships.',
      author: 'Amanda Williams',
      date: 'February 15, 2024',
      category: 'Communication',
      image: '💬',
      readTime: '5 min read',
    },
  ]

  const categories = [
    'All',
    'Personal Growth',
    'Career',
    'Goal Setting',
    'Wellness',
    'Mindset',
    'Communication',
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
            Flourishia Blog
          </h1>
          <p
            className="text-lg text-foreground max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            Expert insights, tips, and inspiration for women on their journey to flourish.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full font-semibold transition-colors ${
                  index === 0
                    ? 'bg-primary text-white'
                    : 'bg-muted text-foreground hover:bg-primary/10'
                }`}
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-muted/20 rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow group"
              >
                {/* Featured Image */}
                <div className="bg-gradient-to-br from-primary/20 to-accent/20 aspect-video flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
                  {post.image}
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category */}
                  <span
                    className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    {post.category}
                  </span>

                  {/* Title */}
                  <h3
                    className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors"
                    style={{ fontFamily: 'var(--font-jost)' }}
                  >
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p
                    className="text-foreground text-sm mb-4"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 mb-4 pb-4 border-b border-border text-xs text-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span style={{ fontFamily: 'var(--font-inter)' }}>
                        {post.date}
                      </span>
                    </div>
                    <span style={{ fontFamily: 'var(--font-inter)' }}>
                      {post.readTime}
                    </span>
                  </div>

                  {/* Author */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <User size={14} className="text-primary" />
                      <span
                        className="text-xs text-foreground"
                        style={{ fontFamily: 'var(--font-inter)' }}
                      >
                        {post.author}
                      </span>
                    </div>
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-primary hover:text-accent transition-colors"
                    >
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4 text-center">
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: 'var(--font-jost)' }}
          >
            Get Weekly Tips & Insights
          </h2>
          <p
            className="text-lg text-white/90 mb-8 max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            Subscribe to our newsletter for exclusive coaching tips, success stories, and resources to help you flourish.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white"
              style={{ fontFamily: 'var(--font-inter)' }}
            />
            <button
              className="px-6 py-3 bg-white text-primary rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
