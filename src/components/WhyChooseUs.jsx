import { motion as Motion } from 'framer-motion'
import { BadgeDollarSign, Clock, Eye, Heart, Layers, Sparkles } from 'lucide-react'
import { whyChoose, whyChooseIntro } from '../content/copy'

const icons = [Sparkles, Layers, Eye, Clock, Heart, BadgeDollarSign]

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function WhyChooseUs() {
  return (
    <section className="bg-cream py-24" aria-labelledby="why-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 id="why-heading" className="mb-6 text-4xl text-navy">
            Why Choose Defter Prints
          </h2>
          <p className="text-lg text-slate-600">{whyChooseIntro}</p>
        </div>

        <Motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {whyChoose.map((reason, index) => {
            const Icon = icons[index] || Sparkles
            return (
              <Motion.div
                key={reason.title}
                variants={itemVariants}
                className="group rounded-sm border border-slate-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-cream transition-colors group-hover:bg-gold/20">
                  <Icon className="h-6 w-6 text-gold" aria-hidden />
                </div>
                <h3 className="mb-3 font-heading text-xl text-navy">{reason.title}</h3>
                <p className="leading-relaxed text-slate-600">{reason.text}</p>
              </Motion.div>
            )
          })}
        </Motion.div>
      </div>
    </section>
  )
}
