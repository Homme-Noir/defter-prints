import { useState } from 'react'
import { motion as Motion } from 'framer-motion'
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react'
import { contact, contactForm, contactIntro, socialLinks } from '../content/copy'

const socialIcons = [Facebook, Twitter, Instagram, Linkedin]

export default function ContactSection() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const to = contact.email && !contact.email.startsWith('[') ? contact.email : ''
    const mailto = `mailto:${to}?subject=${encodeURIComponent(contactForm.mailtoSubject)}&body=${encodeURIComponent(contactForm.mailtoBody(name, email, message))}`
    window.location.href = mailto
  }

  const phoneHref = contact.phone ? `tel:${contact.phone.replace(/\s/g, '')}` : undefined
  const emailHref = contact.email ? `mailto:${contact.email}` : undefined

  return (
    <section id="contact" className="bg-white py-24" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <Motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 id="contact-heading" className="mb-6 text-4xl text-navy">
              {contact.heading}
            </h2>
            <p className="mb-10 text-lg text-slate-600">{contactIntro}</p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="mr-6 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-cream">
                  <Phone className="h-5 w-5 text-gold" aria-hidden />
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold uppercase tracking-wider text-slate-400">
                    {contact.phoneLabel}
                  </h3>
                  <p className="text-lg font-medium text-navy">
                    {contact.phone ? (
                      <a href={phoneHref} className="hover:text-gold">
                        {contact.phone}
                      </a>
                    ) : (
                      '—'
                    )}
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-6 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-cream">
                  <Mail className="h-5 w-5 text-gold" aria-hidden />
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold uppercase tracking-wider text-slate-400">
                    {contact.emailLabel}
                  </h3>
                  <p className="text-lg font-medium text-navy">
                    {contact.email ? (
                      <a href={emailHref} className="hover:text-gold">
                        {contact.email}
                      </a>
                    ) : (
                      '—'
                    )}
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-6 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-cream">
                  <MapPin className="h-5 w-5 text-gold" aria-hidden />
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold uppercase tracking-wider text-slate-400">
                    {contact.addressLabel}
                  </h3>
                  <p className="text-lg font-medium text-navy whitespace-pre-line">
                    {contact.address || '—'}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 border-t border-slate-100 pt-12">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">
                {contact.socialLabel}
              </h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link, i) => {
                  const Icon = socialIcons[i] || Facebook
                  const isExternal = link.href.startsWith('http')
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-white transition-colors hover:bg-gold"
                      aria-label={link.label}
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noopener noreferrer' : undefined}
                    >
                      <Icon className="h-4 w-4" aria-hidden />
                    </a>
                  )
                })}
              </div>
            </div>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-sm border border-slate-100 bg-cream p-8 md:p-10"
          >
            <h3 className="mb-6 font-heading text-2xl text-navy">Send us a message</h3>
            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <div>
                <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-slate-700">
                  Full Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-sm border border-slate-300 px-4 py-3 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-gold"
                  placeholder="John Doe"
                  required
                  aria-required="true"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-slate-700">
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-sm border border-slate-300 px-4 py-3 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-gold"
                  placeholder="john@example.com"
                  required
                  aria-required="true"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-slate-700">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full resize-none rounded-sm border border-slate-300 px-4 py-3 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-gold"
                  placeholder="Tell us about your project..."
                  required
                  aria-required="true"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-sm bg-navy py-4 font-semibold text-white transition-colors hover:bg-slate-800"
                aria-describedby="contact-form-hint"
              >
                {contactForm.submitLabel}
              </button>
              <p id="contact-form-hint" className="text-sm text-slate-500">
                {contactForm.hint}
              </p>
            </form>
          </Motion.div>
        </div>
      </div>
    </section>
  )
}
