import { motion } from 'framer-motion'

import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { painPoints } from '../../data/landing-data'
import { fadeInUp } from '../../lib/animations'
import SectionHeading from './SectionHeading'

function ChallengesSection() {
  return (
    <section id="challenges" className="py-16">
      <SectionHeading
        eyebrow="Real challenges"
        title="Modern legal work demands speed, consistency, and predictability"
        description="Legal teams handle growing volume while being accountable for business impact and risk reduction."
      />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {painPoints.map((item, index) => {
          const Icon = item.icon
          return (
            <motion.div
              key={item.title}
              custom={index * 0.08}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <Card className="h-full border-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40">
                <CardHeader>
                  <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-300/25 to-violet-400/25 text-cyan-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-xl text-white">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-slate-300">{item.text}</p>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default ChallengesSection
