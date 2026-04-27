import { Card } from '../ui/card'
import { useCases } from '../../data/landing-data'
import SectionHeading from './SectionHeading'

function UseCasesSection() {
  return (
    <section id="use-cases" className="py-16">
      <SectionHeading
        eyebrow="Use cases"
        title="Built for how legal teams actually operate"
        description="From litigation to advisory work, Lexora AI adapts to your legal model."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {useCases.map((item) => {
          const Icon = item.icon
          return (
            <Card
              key={item.title}
              className="border-white/10 bg-gradient-to-br from-white/10 to-transparent p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-cyan-200">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.text}</p>
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
