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

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient bg-primary text-white py-5">
        <div className="container hero-content py-5">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="hero-headline fw-normal mb-3">{hero.headline}</h1>
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
          </div>
        </div>
      </section>

      {/* Why Choose Defter Prints */}
      <section className="py-5 bg-subtle">
        <div className="container">
          <div className="section-header mb-5">
            <h2>Why Choose Defter Prints</h2>
          </div>
          <p className="text-center text-muted mb-5">
            At Defter Prints, we don&apos;t just print, we help brands communicate with clarity,
            consistency, and impact. Here&apos;s why businesses trust us:
          </p>
          <div className="row g-4">
            {whyChoose.map((item, i) => (
              <div key={i} className="col-md-6 col-lg-4">
                <div className="card h-100 card-premium">
                  <div className="card-body">
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
      <section className="py-5 bg-subtle">
        <div className="container">
          <div className="section-header mb-5">
            <h2>Our Services</h2>
          </div>
          <div className="row g-4">
            {servicesOverview.map((svc, i) => (
              <div key={i} className="col-md-6 col-lg-4">
                <Link to="/services" className="card-link">
                  <div className="card h-100 border-0 card-hover card-accent-border">
                    <div className="card-body">
                      <h5 className="card-title">{svc.name}</h5>
                      <p className="card-text text-muted small mb-0">{svc.description}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Button to="/services">View all services</Button>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-5 bg-subtle">
        <div className="container">
          <div className="section-header mb-5">
            <h2>Our Process</h2>
          </div>
          <div className="process-steps row g-4 justify-content-center">
            {process.map((item, i) => (
              <div key={i} className="col-6 col-md-3 process-step">
                <div className="process-step-circle mb-2">
                  {i + 1}
                </div>
                <h6 className="mb-1 fw-semibold">{item.step}</h6>
                <p className="small text-muted mb-0">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-5">
        <div className="container">
          <div className="section-header mb-4">
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
      <section className="py-5 bg-subtle">
        <div className="container">
          <div className="section-header mb-5">
            <h2>{testimonialsSectionTitle}</h2>
          </div>
          <div className="row g-4">
            {testimonials.map((t, i) => (
              <div key={i} className="col-md-6">
                <blockquote className="blockquote testimonial-card h-100 mb-0">
                  <p className="mb-2">{t.quote}</p>
                  <footer className="blockquote-footer mt-2">{t.attribution}</footer>
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
