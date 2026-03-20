import { motion as Motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { about } from '../content/copy'

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-navy py-24 text-white"
      aria-labelledby="about-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-print-dots opacity-10" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <Motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 id="about-heading" className="mb-6 text-4xl text-white">
              Who We Are
            </h2>
            <div className="mb-10 space-y-6 text-lg leading-relaxed text-slate-300">
              <p>{about.whoWeAre}</p>
            </div>

            <div className="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="rounded-sm border border-slate-700 bg-slate-800/50 p-6">
                <h3 className="mb-3 font-heading text-xl text-gold">Our Mission</h3>
                <p className="text-sm text-slate-300">{about.mission}</p>
              </div>
              <div className="rounded-sm border border-slate-700 bg-slate-800/50 p-6">
                <h3 className="mb-3 font-heading text-xl text-gold">Our Vision</h3>
                <p className="text-sm text-slate-300">{about.vision}</p>
              </div>
            </div>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-sm bg-white p-10 text-navy shadow-2xl">
              <h3 className="relative mb-8 inline-block font-heading text-3xl">
                Our Core Values
                <span className="absolute -bottom-2 left-0 h-1 w-1/2 bg-gold" />
              </h3>
              <ul className="space-y-5">
                {about.coreValues.map((value, index) => (
                  <Motion.li
                    key={value}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center text-lg font-medium"
                  >
                    <CheckCircle2 className="mr-4 h-6 w-6 flex-shrink-0 text-gold" aria-hidden />
                    {value}
                  </Motion.li>
                ))}
              </ul>
            </div>
            <div className="pointer-events-none absolute -right-6 top-6 hidden h-full w-full rounded-sm border-2 border-gold/30 sm:block" />
          </Motion.div>
        </div>
      </div>
    </section>
  )
}
