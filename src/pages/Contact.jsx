import { useState } from 'react'
import { contact, contactForm } from '../content/copy'
import SocialLinks from '../components/SocialLinks'
import PageHeader from '../components/PageHeader'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const to = contact.email && !contact.email.startsWith('[') ? contact.email : ''
    const mailto = `mailto:${to}?subject=${encodeURIComponent(contactForm.mailtoSubject)}&body=${encodeURIComponent(contactForm.mailtoBody(name, email, message))}`
    window.location.href = mailto
  }

  return (
    <>
      <PageHeader title={contact.heading} subtitle="Get in touch for a quote or consultation" />
      <section className="py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5">
              <h2 className="h5 mb-3">{contact.companyName}</h2>
              <p className="mb-2">
                <strong>{contact.phoneLabel}</strong>{' '}
                <a href={contact.phone ? `tel:${contact.phone}` : undefined}>{contact.phone || '—'}</a>
              </p>
              <p className="mb-2">
                <strong>{contact.emailLabel}</strong>{' '}
                <a href={contact.email ? `mailto:${contact.email}` : undefined}>{contact.email || '—'}</a>
              </p>
              <p className="mb-4">
                <strong>{contact.addressLabel}</strong> {contact.address || '—'}
              </p>
              <p className="mb-2">
                <strong>{contact.socialLabel}</strong>
              </p>
              <SocialLinks />
            </div>
            <div className="col-lg-7">
              <h2 className="h5 mb-3">Request a Quote</h2>
              <p className="small text-muted mb-3">We&apos;ll get back to you within 24 hours.</p>
              <form onSubmit={handleSubmit} className="card border-0 shadow-sm p-4">
                <div className="mb-3">
                  <label htmlFor="contact-name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    aria-required="true"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="contact-email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    aria-required="true"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="contact-message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    className="form-control"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    aria-required="true"
                  />
                </div>
                <button type="submit" className="btn btn-primary" aria-describedby="contact-form-hint">
                  {contactForm.submitLabel}
                </button>
                <p id="contact-form-hint" className="small text-muted mt-2 mb-0">
                  {contactForm.hint}
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
