import { Check } from 'lucide-react'

import { Button } from '../ui/button'
import { Card } from '../ui/card'
import { plans } from '../../data/landing-data'
import SectionHeading from './SectionHeading'

function PricingSection() {
  return (
    <section id="pricing" className="py-16">
      <SectionHeading
        eyebrow="Pricing"
        title="Flexible plans for every legal maturity stage"
        description="Start fast and scale into advanced governance as your operation grows."
      />
      <div className="grid gap-5 lg:grid-cols-3">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={`h-full border-white/10 p-6 ${
              plan.highlighted
                ? 'glow-ring border-cyan-300/40 bg-gradient-to-b from-cyan-400/15 to-blue-500/5'
                : ''
            }`}
          >
            {plan.highlighted && (
              <p className="mb-4 inline-flex rounded-full border border-cyan-300/40 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">
                Most popular
              </p>
            )}
            <h3 className="text-2xl font-semibold text-white">{plan.name}</h3>
            <p className="mt-2 text-sm text-slate-300">{plan.description}</p>
            <p className="mt-6 text-4xl font-bold text-white">{plan.price}</p>
            <p className="mt-1 text-sm text-slate-400">/month</p>
            <ul className="mt-6 space-y-3 text-sm text-slate-200">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button className="mt-8 w-full" variant={plan.highlighted ? 'default' : 'secondary'}>
              {plan.cta}
            </Button>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default PricingSection
