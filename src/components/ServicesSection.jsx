import { motion as Motion } from 'framer-motion'
import { Building2, Gift, PenTool, Printer, Shirt, Signpost, Trophy } from 'lucide-react'
import { servicesDetail, servicesSectionIntro } from '../content/copy'

const icons = [Building2, Printer, PenTool, Shirt, Gift, Signpost, Trophy]

function flattenServiceItems(detail) {
  const out = []
  if (detail.items?.length) out.push(...detail.items)
  if (detail.idealFor?.length) out.push(...detail.idealFor)
  if (detail.wePrintOn?.length) out.push(...detail.wePrintOn)
  if (detail.methods?.length) out.push(...detail.methods)
  return out
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function ServicesSection() {
  return (
    <section id="services" className="bg-cream py-24" aria-labelledby="services-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 id="services-heading" className="mb-6 text-4xl text-navy">
            Our Services
          </h2>
          <p className="text-lg text-slate-600">{servicesSectionIntro}</p>
        </div>

        <Motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {servicesDetail.map((service, index) => {
            const Icon = icons[index] || Building2
            const bullets = flattenServiceItems(service)
            return (
              <Motion.div
                key={service.title}
                variants={itemVariants}
                className="flex h-full transform flex-col rounded-sm border-t-4 border-transparent bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-xl"
              >
                <div className="mb-6">
                  <Icon className="mb-4 h-10 w-10 text-navy" strokeWidth={1.5} aria-hidden />
                  <h3 className="mb-3 font-heading text-2xl text-navy">{service.title}</h3>
                  <p className="mb-6 text-sm leading-relaxed text-slate-600">{service.intro}</p>
                </div>
                <div className="mt-auto">
                  <ul className="space-y-2">
                    {bullets.map((item) => (
                      <li key={item} className="flex items-start text-sm text-slate-700">
                        <span className="mr-2 mt-0.5 text-gold" aria-hidden>
                          •
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Motion.div>
            )
          })}
        </Motion.div>
      </div>
    </section>
  )
}
