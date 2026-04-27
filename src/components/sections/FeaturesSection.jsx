import { motion } from 'framer-motion'

import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { features } from '../../data/landing-data'
import { fadeInUp } from '../../lib/animations'
import SectionHeading from './SectionHeading'

function FeaturesSection() {
  return (
    <section id="solution" className="py-16">
      <SectionHeading
        eyebrow="Features"
        title="Everything your legal workflow needs"
        description="Six core capabilities designed to make legal operations faster, cleaner, and more reliable."
      />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <motion.div
              key={feature.title}
              custom={index * 0.06}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
            >
              <Card className="h-full border-white/10 bg-gradient-to-b from-white/10 to-white/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-violet-300/40 hover:shadow-[0_20px_50px_-35px_rgba(34,211,238,0.7)]">
                <CardHeader>
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-violet-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-slate-300">{feature.text}</p>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default FeaturesSection
