import Link from 'next/link'
import { ArrowLeft, Calendar, User, Share2 } from 'lucide-react'

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const postId = parseInt(params.id)

  // Sample blog post content
  const posts: { [key: number]: any } = {
    1: {
      title: '5 Keys to Building Unshakeable Confidence',
      author: 'Sarah Johnson',
      date: 'March 15, 2024',
      category: 'Personal Growth',
      image: '💪',
      readTime: '5 min read',
      content: `
        <h2>Introduction</h2>
        <p>Confidence is not something you're born with—it's something you build. Over the past decade of coaching hundreds of women, I've identified five key principles that successful women use to develop unshakeable confidence that lasts.</p>

        <h2>1. Know Your Why</h2>
        <p>Before you can be confident in your abilities, you need to understand why what you're doing matters to you. When your actions align with your values, confidence becomes natural. Take time to identify what truly matters to you and let that guide your decisions.</p>

        <h2>2. Focus on Progress, Not Perfection</h2>
        <p>One of the biggest confidence killers is perfectionism. Instead of aiming for perfection, focus on progress. Celebrate small wins along the way. Every step forward, no matter how small, is building your confidence muscle.</p>

        <h2>3. Embrace Your Unique Strengths</h2>
        <p>Stop comparing yourself to others. You have a unique set of strengths that make you valuable. Spend time identifying what you're naturally good at and lean into those strengths. Confidence comes from knowing and owning what makes you special.</p>

        <h2>4. Take Consistent Action</h2>
        <p>Confidence is built through action. The more you do things, the more capable you become. Start small if you need to, but keep moving forward. Each action you take reinforces your belief in your abilities.</p>

        <h2>5. Build a Support System</h2>
        <p>Surrounding yourself with people who believe in you is crucial. Find mentors, coaches, or friends who support your growth. When you're surrounded by positive influences, your confidence naturally grows.</p>

        <h2>Conclusion</h2>
        <p>Building unshakeable confidence takes time and intention, but it's absolutely possible. Start with one of these keys and build from there. Remember, confidence is a practice, not a destination.</p>
      `,
      relatedPosts: [2, 3, 5],
    },
    2: {
      title: 'How to Navigate Career Transitions with Grace',
      author: 'Jessica Martinez',
      date: 'March 10, 2024',
      category: 'Career',
      image: '🚀',
      readTime: '7 min read',
      content: `
        <h2>Introduction</h2>
        <p>Career transitions can feel scary and uncertain, but they don't have to be chaotic. With the right approach and mindset, you can navigate your career change smoothly and confidently.</p>

        <h2>Planning Your Transition</h2>
        <p>The first step is to create a clear plan. Identify what you want from your new career and what skills you need to develop. Set a realistic timeline and break it down into manageable steps.</p>

        <h2>Managing the Uncertainty</h2>
        <p>Career transitions come with uncertainty, and that's okay. Instead of trying to eliminate uncertainty, learn to get comfortable with it. Focus on what you can control and let go of what you can't.</p>

        <h2>Building Your Network</h2>
        <p>Your network is invaluable during a career transition. Reach out to people in your desired field, ask for informational interviews, and build genuine connections. Most opportunities come through relationships.</p>

        <h2>Taking Action</h2>
        <p>Don't wait until everything is perfect to take action. Start learning, networking, and moving toward your goal now. The path becomes clearer as you move forward.</p>

        <h2>Conclusion</h2>
        <p>Career transitions are opportunities for growth. With the right mindset and preparation, you can create a career that truly fulfills you.</p>
      `,
      relatedPosts: [1, 3, 6],
    },
    3: {
      title: 'The Power of Intentional Goal Setting',
      author: 'Sarah Johnson',
      date: 'March 5, 2024',
      category: 'Goal Setting',
      image: '🎯',
      readTime: '6 min read',
      content: `
        <h2>Introduction</h2>
        <p>Most people know the importance of setting goals, but few actually set them in a way that leads to success. The difference is intention. Intentional goal setting is a powerful practice that can transform your life.</p>

        <h2>Get Clear on What You Want</h2>
        <p>Before setting any goals, get crystal clear on what you actually want. What does success look like for you? What would make you feel truly fulfilled?</p>

        <h2>Align Goals with Values</h2>
        <p>The most sustainable goals are those that align with your values. If a goal doesn't resonate with what matters to you, it's unlikely you'll stay motivated to pursue it.</p>

        <h2>Create Your Action Plan</h2>
        <p>Once you have your goals, break them down into specific, actionable steps. Make each step measurable so you know when you've accomplished it.</p>

        <h2>Review and Adjust</h2>
        <p>Your goals aren't set in stone. Review them regularly and adjust as needed. Life changes, and so should your goals.</p>

        <h2>Conclusion</h2>
        <p>Intentional goal setting is a skill that gets better with practice. Start today by setting one meaningful goal and watch how it changes your life.</p>
      `,
      relatedPosts: [1, 2, 4],
    },
  }

  const post = posts[postId]

  if (!post) {
    return (
      <main className="w-full">
        <section className="py-24">
          <div className="container mx-auto px-4 text-center">
            <h1
              className="text-4xl font-bold text-secondary mb-4"
              style={{ fontFamily: 'var(--font-jost)' }}
            >
              Post Not Found
            </h1>
            <p className="text-foreground mb-8" style={{ fontFamily: 'var(--font-inter)' }}>
              The blog post you&apos;re looking for doesn&apos;t exist.
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-accent transition-colors"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              <ArrowLeft size={20} /> Back to Blog
            </Link>
          </div>
        </section>
      </main>
    )
  }

  const relatedPosts = [
    { id: 1, title: '5 Keys to Building Unshakeable Confidence' },
    { id: 2, title: 'How to Navigate Career Transitions with Grace' },
    { id: 3, title: 'The Power of Intentional Goal Setting' },
  ]

  return (
    <main className="w-full">
      {/* Back Button */}
      <section className="py-6 bg-white border-b border-border">
        <div className="container mx-auto px-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            <ArrowLeft size={20} /> Back to Blog
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <span
            className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-4"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            {post.category}
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold text-secondary mb-6"
            style={{ fontFamily: 'var(--font-jost)' }}
          >
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-6 text-sm text-foreground mb-6 pb-6 border-b border-border">
            <div className="flex items-center gap-2">
              <User size={16} className="text-primary" />
              <span style={{ fontFamily: 'var(--font-inter)' }}>By {post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-primary" />
              <span style={{ fontFamily: 'var(--font-inter)' }}>{post.date}</span>
            </div>
            <span style={{ fontFamily: 'var(--font-inter)' }}>{post.readTime}</span>
          </div>

          {/* Featured Image */}
          <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl aspect-video flex items-center justify-center text-8xl mb-8">
            {post.image}
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div
            className="prose prose-lg max-w-none"
            style={{ fontFamily: 'var(--font-inter)' }}
            dangerouslySetInnerHTML={{
              __html: post.content
                .replace(/<h2>/g, '<h2 style="font-family: var(--font-jost); font-size: 1.875rem; font-weight: 700; color: #110E0E; margin-top: 2rem; margin-bottom: 1rem;">')
                .replace(/<p>/g, '<p style="color: #493C3C; line-height: 1.8; margin-bottom: 1rem;">'),
            }}
          />
        </div>
      </section>

      {/* Share Section */}
      <section className="py-8 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex items-center gap-4">
            <span
              className="font-semibold text-secondary"
              style={{ fontFamily: 'var(--font-jost)' }}
            >
              Share:
            </span>
            <button className="p-2 hover:bg-primary/10 rounded-lg transition-colors">
              <Share2 size={20} className="text-primary" />
            </button>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2
            className="text-4xl font-bold text-secondary mb-12 text-center"
            style={{ fontFamily: 'var(--font-jost)' }}
          >
            Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {relatedPosts.map((relPost) => (
              <Link
                key={relPost.id}
                href={`/blog/${relPost.id}`}
                className="group"
              >
                <div className="bg-muted/20 rounded-xl p-6 border border-border hover:shadow-lg transition-shadow h-full">
                  <div className="text-4xl mb-4">📚</div>
                  <h3
                    className="font-bold text-secondary group-hover:text-primary transition-colors mb-3"
                    style={{ fontFamily: 'var(--font-jost)' }}
                  >
                    {relPost.title}
                  </h3>
                  <div className="flex items-center gap-2 text-primary font-semibold">
                    Read More <ArrowLeft size={16} className="rotate-180" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
