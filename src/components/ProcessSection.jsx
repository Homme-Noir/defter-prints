import { motion as Motion } from 'framer-motion'
import { MessageSquare, Palette, Settings, Truck } from 'lucide-react'
import { process, processSectionIntro } from '../content/copy'

const icons = [MessageSquare, Palette, Settings, Truck]

const numbers = ['01', '02', '03', '04']

export default function ProcessSection() {
  return (
    <section id="process" className="overflow-hidden bg-white py-24" aria-labelledby="process-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 id="process-heading" className="mb-6 text-4xl text-navy">
            Our Process
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">{processSectionIntro}</p>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-1/2 z-0 hidden h-0.5 w-full -translate-y-1/2 bg-slate-100 lg:block" />

          <div className="relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8">
            {process.map((step, index) => {
              const Icon = icons[index] || MessageSquare
              return (
                <Motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className="absolute -right-2 -top-4 z-0 select-none font-heading text-5xl font-bold text-slate-100 lg:left-1/2 lg:right-auto lg:-translate-x-1/2">
                    {numbers[index]}
                  </div>
                  <div className="relative z-10 mb-6 flex h-20 w-20 items-center justify-center rounded-full border-4 border-cream bg-white shadow-md">
                    <Icon className="h-8 w-8 text-navy" aria-hidden />
                  </div>
                  <div className="relative z-10">
                    <h3 className="mb-3 font-heading text-xl text-navy">{step.step}</h3>
                    <p className="px-4 text-sm text-slate-600">{step.text}</p>
                  </div>
                </Motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
