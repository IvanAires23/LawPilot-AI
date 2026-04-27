import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
import { Card } from '../ui/card'
import { faqs } from '../../data/landing-data'
import SectionHeading from './SectionHeading'

function FaqSection() {
  return (
    <section id="faq" className="py-16">
      <SectionHeading
        eyebrow="FAQ"
        title="Frequently asked questions"
        description="Quick answers to common questions before onboarding."
      />
      <Card className="mx-auto max-w-4xl border-white/10 px-6">
        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Card>
    </section>
  )
}

export default FaqSection
