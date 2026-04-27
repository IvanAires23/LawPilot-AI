import { ArrowUpRight, Check } from 'lucide-react'

import { Button } from '../ui/button'
import { Card } from '../ui/card'
import { useCases } from '../../data/landing-data'
import SectionHeading from './SectionHeading'

function UseCasesSection() {
  return (
    <section id="use-cases" className="py-16">
      <SectionHeading
        eyebrow="Use cases"
        title="Built for professionals who value speed and precision"
        description="Purpose-built workflows for different legal realities, with the same performance standard."
      />
      <div className="grid gap-5 lg:grid-cols-3">
        {useCases.map((item) => {
          const Icon = item.icon
          return (
            <Card
              key={item.title}
              className="h-full border-white/10 bg-gradient-to-br from-white/10 to-transparent p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-[0_24px_50px_-36px_rgba(34,211,238,0.75)]"
            >
              <div className="flex h-full flex-col">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-cyan-200">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="text-2xl font-semibold text-white">{item.title}</h3>

                <ul className="mt-5 space-y-3">
                  {item.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2 text-sm text-slate-200">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7">
                  <Button size="sm" variant="secondary" className="h-9 px-3">
                    Explore use case
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          )
        })}
      </div>
    </section>
  )
}

export default UseCasesSection
