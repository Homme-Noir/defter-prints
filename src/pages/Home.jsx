import { Link } from 'react-router-dom'
import { Button } from '../components/Button'
import {
  hero,
  whyChoose,
  about,
  servicesOverview,
  process,
  industries,
  testimonials,
  testimonialsSectionTitle,
  ctaSection,
} from '../content/copy'

const WhyIconStar = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
)
const WhyIconLayers = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
  </svg>
)
const WhyIconEye = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
)
const WhyIconClock = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
)
const WhyIconHeart = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
)
const WhyIconTag = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
    <line x1="7" y1="7" x2="7.01" y2="7" />
  </svg>
)

const ProcessIconChat = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
)
const ProcessIconPencil = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
)
const ProcessIconGear = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
)
const ProcessIconTruck = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="1" y="3" width="15" height="13" />
    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
)

const processIcons = [ProcessIconChat, ProcessIconPencil, ProcessIconGear, ProcessIconTruck]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient bg-primary text-white py-5">
        <div className="container hero-content py-5">
          <div className="row align-items-stretch g-4">
            <div className="col-lg-8">
              <h1 className="hero-headline mb-3">
                Bring Your Brand <span className="text-accent">to Life</span>
              </h1>
              <p className="lead mb-3" style={{ fontSize: "var(--text-xl)" }}>{hero.subhead}</p>
              <p className="mb-3">{hero.body}</p>
              {hero.ctaLabel && <p className="mb-2 small text-white text-opacity-90">{hero.ctaLabel}</p>}
              <div className="d-flex flex-wrap gap-3">
                <Button to="/contact" variant="light">
                  {hero.ctaQuote}
                </Button>
                <Button to="/services" variant="outlineLight">
                  {hero.ctaServices}
                </Button>
              </div>
            </div>
            <div className="col-lg-4 d-none d-lg-block">
              <div className="hero-sidebar">
                {servicesOverview.slice(0, 4).map((svc, i) => (
                  <Link key={i} to="/services" className={`hero-sidebar-block ${i === 1 ? 'hero-sidebar-block-accent' : ''}`}>
                    <h6 className="mb-1">{svc.name}</h6>
                    <p className="small mb-0 opacity-90">{svc.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Defter Prints */}
      <section className="py-5 bg-subtle">
        <div className="container">
          <div className="section-header mb-5">
            <p className="section-label mb-0">Why us</p>
            <h2>Why Choose Defter Prints</h2>
          </div>
          <p className="text-center text-muted mb-5">
            At Defter Prints, we don&apos;t just print, we help brands communicate with clarity,
            consistency, and impact. Here&apos;s why businesses trust us:
          </p>
          <div className="row g-4 why-choose-row">
            {whyChoose.map((item, i) => (
              <div key={i} className="col-md-6 col-lg-4 why-choose-col">
                <div className="card h-100 card-premium">
                  <div className="card-body">
                    <div className="why-choose-icon mb-2">
                      {i === 0 && <WhyIconStar />}
                      {i === 1 && <WhyIconLayers />}
                      {i === 2 && <WhyIconEye />}
                      {i === 3 && <WhyIconClock />}
                      {i === 4 && <WhyIconHeart />}
                      {i === 5 && <WhyIconTag />}
                    </div>
                    <h5 className="card-title fw-semibold">{item.title}</h5>
                    <p className="card-text text-muted mb-0">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="py-5">
        <div className="container">
          <div className="section-header mb-4">
            <p className="section-label mb-0">Who we are</p>
            <h2>About Us</h2>
          </div>
          <h3 className="h5 text-center mb-3">Who We Are</h3>
          <p className="text-center container-narrow mb-3">{about.whoWeAre}</p>
          <p className="text-center mb-2">
            <strong>Our Mission:</strong> {about.mission}
          </p>
          <p className="text-center mb-4">
            <strong>Our Vision:</strong> {about.vision}
          </p>
          <div className="text-center">
            <Link to="/about" className="btn btn-outline-primary">
              Learn more
            </Link>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="py-5 bg-dark-section">
        <div className="container">
          <div className="section-header section-header-light mb-5">
            <p className="section-label section-label-light mb-0">What we offer</p>
            <h2 className="text-white">Our Services</h2>
          </div>
          <div className="row g-4">
            {servicesOverview.map((svc, i) => (
              <div key={i} className="col-md-6 col-lg-4">
                <Link to="/services" className="card-link card-link-dark">
                  <div className="card h-100 border-0 card-hover card-accent-border card-dark">
                    <div className="card-body">
                      <h5 className="card-title text-white">{svc.name}</h5>
                      <p className="card-text small mb-0 text-white-50">{svc.description}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Button to="/services" variant="outlineLight">View all services</Button>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-5 bg-subtle">
        <div className="container">
          <div className="section-header mb-5">
            <p className="section-label mb-0">How we work</p>
            <h2>Our Process</h2>
          </div>
          <div className="process-steps row g-4 justify-content-center">
            {process.map((item, i) => {
              const IconComponent = processIcons[i]
              return (
                <div key={i} className="col-6 col-md-3 process-step">
                  <div className="process-step-icon mb-1">
                    {IconComponent && <IconComponent />}
                  </div>
                  <div className="process-step-circle mb-2">{i + 1}</div>
                  <h6 className="mb-1 fw-semibold">{item.step}</h6>
                  <p className="small text-muted mb-0">{item.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-5">
        <div className="container">
          <div className="section-header mb-4">
            <p className="section-label mb-0">Our clients</p>
            <h2>Industries We Serve</h2>
          </div>
          <ul className="list-unstyled d-flex flex-wrap justify-content-center gap-3 mb-0">
            {industries.map((ind, i) => (
              <li key={i} className="badge badge-soft py-2 px-3">{ind}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-5 bg-dark-section">
        <div className="container">
          <div className="section-header section-header-light mb-5">
            <p className="section-label section-label-light mb-0">Reviews</p>
            <h2 className="text-white">{testimonialsSectionTitle}</h2>
          </div>
          <div className="row g-4">
            {testimonials.map((t, i) => (
              <div key={i} className="col-md-6">
                <blockquote className="blockquote testimonial-card-dark h-100 mb-0">
                  <div className="d-flex gap-3">
                    <div className="testimonial-avatar flex-shrink-0" aria-hidden>
                      {t.attribution.charAt(0)}
                    </div>
                    <div className="flex-grow-1">
                      <p className="mb-2 text-white">{t.quote}</p>
                      <footer className="blockquote-footer text-white-50">{t.attribution}</footer>
                    </div>
                  </div>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="hero-gradient bg-primary text-white py-5">
        <div className="container text-center">
          <h2 className="mb-3">{ctaSection.headline}</h2>
          <p className="lead mb-4">{ctaSection.body}</p>
          <div className="d-flex flex-wrap justify-content-center gap-2">
            <Button to="/contact" variant="light">
              {ctaSection.ctaQuote}
            </Button>
            <Button to="/contact" variant="outlineLight">
              {ctaSection.ctaContact}
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
