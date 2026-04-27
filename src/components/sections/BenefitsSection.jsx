import { Card } from '../ui/card'
import { metrics } from '../../data/landing-data'
import SectionHeading from './SectionHeading'

function BenefitsSection() {
  return (
    <section id="benefits" className="py-16">
      <SectionHeading
        eyebrow="Results"
        title="Measurable gains in speed, quality, and control"
        description="Trackable impact across productivity, risk management, and legal throughput."
      />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <Card key={metric.value} className="border-white/10 p-6">
            <p className="text-4xl font-bold text-cyan-200">{metric.value}</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">{metric.label}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default BenefitsSection
