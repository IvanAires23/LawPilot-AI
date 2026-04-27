import { Button } from '../ui/button'
import { Card } from '../ui/card'

function FinalCtaSection() {
  return (
    <section id="cta-final" className="py-16">
      <Card className="glow-ring border-cyan-300/30 bg-gradient-to-r from-cyan-400/20 via-blue-500/15 to-violet-500/15 p-8 md:p-12">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100">Ready to scale</p>
            <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
              Transform your legal team into an intelligence-driven operation.
            </h2>
            <p className="mt-4 text-slate-200">
              See how Lexora AI can increase throughput and control in just a few weeks.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button size="lg" className="sm:min-w-48">
              Book a demo
            </Button>
            <Button size="lg" variant="outline" className="sm:min-w-48">
              Talk to a specialist
            </Button>
          </div>
        </div>
      </Card>
    </section>
  )
}

export default FinalCtaSection
