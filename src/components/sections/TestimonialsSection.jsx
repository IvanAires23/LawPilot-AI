import { Card } from '../ui/card'
import { testimonials } from '../../data/landing-data'
import SectionHeading from './SectionHeading'

function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16">
      <SectionHeading
        eyebrow="Testimonials"
        title="Legal professionals scaling with Lexora AI"
        description="Fictional testimonials crafted to represent realistic SaaS outcomes for legal teams."
      />
      <div className="grid gap-5 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.name} className="h-full border-white/10 p-6">
            <p className="text-sm leading-relaxed text-slate-200">"{testimonial.quote}"</p>
            <div className="mt-6 border-t border-white/10 pt-4">
              <p className="font-semibold text-white">{testimonial.name}</p>
              <p className="text-sm text-slate-400">{testimonial.role}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default TestimonialsSection
