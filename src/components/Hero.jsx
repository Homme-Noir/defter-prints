import { motion as Motion } from 'framer-motion'
import { hero } from '../content/copy'

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-navy pt-20"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-print-dots opacity-20" />
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-blue-900/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <Motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-4xl"
        >
          <Motion.p
            variants={itemVariants}
            className="mb-6 text-sm font-medium uppercase tracking-widest text-gold"
          >
            {hero.subhead}
          </Motion.p>

          <Motion.h1
            id="hero-heading"
            variants={itemVariants}
            className="mb-8 text-5xl leading-tight text-white md:text-7xl"
          >
            Bring Your Brand <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-gold to-amber-200 bg-clip-text pr-2 italic text-transparent">
              to Life
            </span>
          </Motion.h1>

          <Motion.p
            variants={itemVariants}
            className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl"
          >
            {hero.body}
          </Motion.p>

          <Motion.div
            variants={itemVariants}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href="#contact"
              className="w-full transform rounded-sm bg-gold px-8 py-4 font-semibold text-navy shadow-lg transition-all hover:-translate-y-1 hover:bg-amber-500 hover:shadow-gold/20 sm:w-auto"
            >
              {hero.ctaQuote}
            </a>
            <a
              href="#services"
              className="w-full transform rounded-sm border border-white/30 bg-transparent px-8 py-4 font-semibold text-white transition-all hover:-translate-y-1 hover:border-white sm:w-auto"
            >
              {hero.ctaServices}
            </a>
          </Motion.div>
        </Motion.div>
      </div>
    </section>
  )
}
