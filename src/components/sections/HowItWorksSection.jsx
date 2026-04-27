import { motion } from 'framer-motion'

import { Card } from '../ui/card'
import { steps } from '../../data/landing-data'
import SectionHeading from './SectionHeading'

function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16">
      <SectionHeading
        eyebrow="How it works"
        title="How Lexora AI works"
        description="A simple 3-step workflow designed for speed, clarity, and secure legal execution."
      />
      <div className="relative">
        <div className="pointer-events-none absolute left-0 right-0 top-[4.15rem] hidden h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent lg:block" />
        <div className="grid gap-5 md:grid-cols-1 lg:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <Card className="relative h-full border-white/10 bg-gradient-to-b from-white/10 to-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/45 hover:shadow-[0_22px_50px_-36px_rgba(34,211,238,0.8)]">
                <div className="mb-6 flex items-center justify-between">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-300/40 bg-cyan-400/10 text-cyan-200">
                    {index + 1}
                  </div>
                  <span className="font-display text-6xl font-bold leading-none text-white/10">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{step.text}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection
