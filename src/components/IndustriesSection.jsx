import { motion as Motion } from 'framer-motion'
import { Briefcase, GraduationCap, HeartHandshake, PartyPopper, Rocket } from 'lucide-react'
import { industries, industriesSectionIntro } from '../content/copy'

const icons = [Briefcase, Rocket, GraduationCap, HeartHandshake, PartyPopper]

export default function IndustriesSection() {
  return (
    <section className="border-t border-slate-200 bg-cream py-20" aria-labelledby="industries-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 id="industries-heading" className="mb-4 text-3xl text-navy">
            Industries We Serve
          </h2>
          <p className="text-slate-600">{industriesSectionIntro}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {industries.map((name, index) => {
            const Icon = icons[index] || Briefcase
            return (
              <Motion.div
                key={name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex cursor-default items-center rounded-full border border-slate-100 bg-white px-6 py-4 shadow-sm transition-all hover:border-gold hover:shadow-md"
              >
                <Icon className="mr-3 h-5 w-5 text-gold" aria-hidden />
                <span className="text-sm font-medium text-navy md:text-base">{name}</span>
              </Motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
