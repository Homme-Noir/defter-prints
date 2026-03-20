import { motion as Motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { testimonials, testimonialsSectionTitle } from '../content/copy'

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-navy py-24"
      aria-labelledby="testimonials-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-print-dots opacity-10" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 id="testimonials-heading" className="mb-4 text-4xl text-white">
            {testimonialsSectionTitle}
          </h2>
          <div className="mx-auto h-1 w-24 bg-gold" />
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
          {testimonials.map((t, index) => (
            <Motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative rounded-sm border border-slate-700 bg-slate-800/50 p-10"
            >
              <Quote className="absolute right-6 top-6 h-12 w-12 text-slate-700 opacity-50" aria-hidden />
              <p className="relative z-10 mb-8 text-xl italic leading-relaxed text-slate-300">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="font-heading text-xl text-gold">{t.author}</p>
                <p className="text-sm text-slate-400">{t.role}</p>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
