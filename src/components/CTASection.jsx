import { motion as Motion } from 'framer-motion'
import { ctaSection } from '../content/copy'

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gold to-amber-500 py-20" aria-labelledby="cta-heading">
      <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 translate-x-1/2 -translate-y-1/2 transform rounded-full bg-white opacity-10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 -translate-x-1/2 translate-y-1/2 transform rounded-full bg-navy opacity-10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 id="cta-heading" className="mb-6 font-heading text-4xl text-navy md:text-5xl">
            {ctaSection.headline}
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-xl text-navy/80">{ctaSection.body}</p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="w-full rounded-sm bg-navy px-8 py-4 font-semibold text-white shadow-lg transition-all hover:bg-slate-800 hover:shadow-xl sm:w-auto"
            >
              {ctaSection.ctaQuote}
            </a>
            <a
              href="#contact"
              className="w-full rounded-sm border-2 border-navy bg-transparent px-8 py-4 font-semibold text-navy transition-all hover:bg-navy/5 sm:w-auto"
            >
              {ctaSection.ctaContact}
            </a>
          </div>
        </Motion.div>
      </div>
    </section>
  )
}
