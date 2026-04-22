'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<'contact' | 'booking'>('contact')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleBookingChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value,
    })
  }

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setBookingData({ name: '', email: '', phone: '', service: '', date: '', time: '', message: '' })
  }

  return (
    <main className="w-full">
      {/* Page Header */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-muted via-background to-background">
        <div className="container mx-auto px-4 text-center">
          <h1
            className="text-5xl md:text-6xl font-bold text-secondary mb-6"
            style={{ fontFamily: 'var(--font-jost)' }}
          >
            Get in Touch
          </h1>
          <p
            className="text-lg text-foreground max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            Have a question? Want to book a coaching session? We&apos;d love to hear from you. Reach out today.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Email */}
            <div className="bg-muted/20 rounded-2xl p-8 border border-border text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Mail size={32} className="text-primary" />
              </div>
              <h3
                className="text-xl font-semibold text-secondary mb-2"
                style={{ fontFamily: 'var(--font-jost)' }}
              >
                Email
              </h3>
              <a
                href="mailto:hello@flourishia.com"
                className="text-primary hover:text-accent transition-colors"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                hello@flourishia.com
              </a>
            </div>

            {/* Phone */}
            <div className="bg-muted/20 rounded-2xl p-8 border border-border text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Phone size={32} className="text-primary" />
              </div>
              <h3
                className="text-xl font-semibold text-secondary mb-2"
                style={{ fontFamily: 'var(--font-jost)' }}
              >
                Phone
              </h3>
              <a
                href="tel:+15551234567"
                className="text-primary hover:text-accent transition-colors"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                +1 (555) 123-4567
              </a>
            </div>

            {/* Location */}
            <div className="bg-muted/20 rounded-2xl p-8 border border-border text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin size={32} className="text-primary" />
              </div>
              <h3
                className="text-xl font-semibold text-secondary mb-2"
                style={{ fontFamily: 'var(--font-jost)' }}
              >
                Office
              </h3>
              <p className="text-foreground" style={{ fontFamily: 'var(--font-inter)' }}>
                New York, NY 10001
              </p>
            </div>
          </div>

          {/* Tabs */}
          <div className="max-w-2xl mx-auto">
            <div className="flex gap-4 mb-8 border-b border-border">
              <button
                onClick={() => setActiveTab('contact')}
                className={`px-6 py-3 font-semibold border-b-2 transition-colors ${
                  activeTab === 'contact'
                    ? 'text-primary border-primary'
                    : 'text-foreground border-transparent hover:text-primary'
                }`}
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                Send Message
              </button>
              <button
                onClick={() => setActiveTab('booking')}
                className={`px-6 py-3 font-semibold border-b-2 transition-colors ${
                  activeTab === 'booking'
                    ? 'text-primary border-primary'
                    : 'text-foreground border-transparent hover:text-primary'
                }`}
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                Book a Session
              </button>
            </div>

            {/* Contact Form */}
            {activeTab === 'contact' && (
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-sm font-semibold text-secondary mb-2"
                      style={{ fontFamily: 'var(--font-inter)' }}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleContactChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your name"
                      style={{ fontFamily: 'var(--font-inter)' }}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-semibold text-secondary mb-2"
                      style={{ fontFamily: 'var(--font-inter)' }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleContactChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="your@email.com"
                      style={{ fontFamily: 'var(--font-inter)' }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-sm font-semibold text-secondary mb-2"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleContactChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+1 (555) 123-4567"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-semibold text-secondary mb-2"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleContactChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="How can we help?"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-semibold text-secondary mb-2"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleContactChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Your message..."
                    style={{ fontFamily: 'var(--font-inter)' }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-accent transition-colors font-semibold flex items-center justify-center gap-2"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  Send Message <Send size={20} />
                </button>

                {submitted && (
                  <div className="p-4 bg-green-100 border border-green-300 rounded-lg text-green-700 text-center">
                    Thank you for your message! We&apos;ll be in touch shortly.
                  </div>
                )}
              </form>
            )}

            {/* Booking Form */}
            {activeTab === 'booking' && (
              <form onSubmit={handleBookingSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-sm font-semibold text-secondary mb-2"
                      style={{ fontFamily: 'var(--font-inter)' }}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={bookingData.name}
                      onChange={handleBookingChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your name"
                      style={{ fontFamily: 'var(--font-inter)' }}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-semibold text-secondary mb-2"
                      style={{ fontFamily: 'var(--font-inter)' }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={bookingData.email}
                      onChange={handleBookingChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="your@email.com"
                      style={{ fontFamily: 'var(--font-inter)' }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-sm font-semibold text-secondary mb-2"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={bookingData.phone}
                    onChange={handleBookingChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+1 (555) 123-4567"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-sm font-semibold text-secondary mb-2"
                      style={{ fontFamily: 'var(--font-inter)' }}
                    >
                      Service Type
                    </label>
                    <select
                      name="service"
                      value={bookingData.service}
                      onChange={handleBookingChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      style={{ fontFamily: 'var(--font-inter)' }}
                    >
                      <option value="">Select a service</option>
                      <option value="life">Life Coaching</option>
                      <option value="career">Career Coaching</option>
                      <option value="wellness">Wellness Coaching</option>
                      <option value="consultation">Free Consultation</option>
                    </select>
                  </div>
                  <div>
                    <label
                      className="block text-sm font-semibold text-secondary mb-2"
                      style={{ fontFamily: 'var(--font-inter)' }}
                    >
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={bookingData.date}
                      onChange={handleBookingChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      style={{ fontFamily: 'var(--font-inter)' }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-sm font-semibold text-secondary mb-2"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    Preferred Time
                  </label>
                  <input
                    type="time"
                    name="time"
                    value={bookingData.time}
                    onChange={handleBookingChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-semibold text-secondary mb-2"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={bookingData.message}
                    onChange={handleBookingChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Tell us about your goals..."
                    style={{ fontFamily: 'var(--font-inter)' }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-accent transition-colors font-semibold flex items-center justify-center gap-2"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  Book Session <Send size={20} />
                </button>

                {submitted && (
                  <div className="p-4 bg-green-100 border border-green-300 rounded-lg text-green-700 text-center">
                    Booking request submitted! We&apos;ll confirm your session shortly.
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
