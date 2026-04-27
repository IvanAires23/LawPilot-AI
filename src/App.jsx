import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Bot,
  Briefcase,
  Building2,
  ChartNoAxesCombined,
  Check,
  ChevronRight,
  Clock3,
  FileSearch,
  Gavel,
  Landmark,
  Menu,
  MessagesSquare,
  Scale,
  ShieldCheck,
  Users,
  X,
} from 'lucide-react'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './components/ui/accordion'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'

const navItems = [
  { label: 'Challenges', href: '#challenges' },
  { label: 'Features', href: '#solution' },
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'Use Cases', href: '#use-cases' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

const painPoints = [
  {
    icon: Clock3,
    title: 'Deadline pressure',
    text: 'Cases, hearings, and filings compete for time, increasing operational risk.',
  },
  {
    icon: FileSearch,
    title: 'Slow legal research',
    text: 'Teams lose hours finding relevant precedents and building strong arguments.',
  },
  {
    icon: MessagesSquare,
    title: 'Fragmented communication',
    text: 'Critical information is scattered across email, spreadsheets, and disconnected tools.',
  },
  {
    icon: ShieldCheck,
    title: 'Sensitive compliance',
    text: 'Legal departments must balance speed, confidentiality, and traceability.',
  },
]

const features = [
  {
    icon: FileSearch,
    title: 'AI Document Review',
    text: 'Upload contracts, case files, and legal documents to receive summaries, risks, and key insights in seconds.',
  },
  {
    icon: MessagesSquare,
    title: 'Smart Client Intake',
    text: 'Collect client information through automated forms and AI-guided conversations.',
  },
  {
    icon: Briefcase,
    title: 'Case Organization',
    text: 'Keep cases, deadlines, documents, and client history organized in one secure workspace.',
  },
  {
    icon: Bot,
    title: 'Legal AI Assistant',
    text: 'Ask questions, draft responses, and generate structured legal notes with contextual AI support.',
  },
  {
    icon: ChartNoAxesCombined,
    title: 'Automated Reports',
    text: 'Create polished reports, summaries, and internal updates without repetitive manual work.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Workspace',
    text: 'Built with privacy-first workflows for sensitive documents and professional teams.',
  },
]

const steps = [
  {
    title: 'Connect your legal operations',
    text: 'Import cases, contracts, and internal knowledge sources in minutes.',
  },
  {
    title: 'Set policies and goals',
    text: 'Configure workflows by team, risk level, and review standards.',
  },
  {
    title: 'Scale with confidence',
    text: 'Turn insights into execution and deliver more with your existing team.',
  },
]

const useCases = [
  {
    icon: Briefcase,
    title: 'Full-service law firms',
    text: 'Manage large matter portfolios while increasing delivery speed and quality.',
  },
  {
    icon: Building2,
    title: 'In-house legal teams',
    text: 'Respond faster to business demands while strengthening compliance controls.',
  },
  {
    icon: Landmark,
    title: 'High-volume litigation',
    text: 'Automate triage, standardize arguments, and track productivity at scale.',
  },
  {
    icon: Scale,
    title: 'Specialized boutiques',
    text: 'Increase analytical depth for strategic, high-value legal matters.',
  },
]

const metrics = [
  { value: '65%', label: 'less time spent on research and first drafts' },
  { value: '42%', label: 'average productivity gain per attorney' },
  { value: '3.1x', label: 'more matters handled per team each quarter' },
  { value: '99.9%', label: 'traceable history for governance and audit' },
]

const testimonials = [
  {
    name: 'Marina Araujo',
    role: 'Partner, Araujo & Costa Law',
    quote:
      'Lexora AI cut drafting time significantly without compromising legal depth or quality.',
  },
  {
    name: 'Ricardo Mello',
    role: 'Head of Legal, Vectra Energy',
    quote:
      'Our legal team now delivers strategic guidance to the business with much greater speed.',
  },
  {
    name: 'Camila Rocha',
    role: 'Litigation Coordinator, Nexo Legal',
    quote:
      'We standardized legal arguments and improved risk prioritization with a single clear dashboard.',
  },
]

const plans = [
  {
    name: 'Starter',
    price: '$399',
    description: 'For small teams starting legal automation.',
    features: ['3 users', 'Research assistant', 'Core templates', 'Email support'],
    cta: 'Start now',
  },
  {
    name: 'Professional',
    price: '$1,290',
    description: 'Ideal for growing law firms and legal departments.',
    features: ['15 users', 'Drafting copilot', 'Risk dashboard', 'Advanced integrations'],
    cta: 'Request demo',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For complex legal operations with enterprise requirements.',
    features: ['Unlimited users', 'SSO and audit trails', 'Custom AI models', 'Dedicated success manager'],
    cta: 'Talk to sales',
  },
]

const faqs = [
  {
    question: 'Does Lexora AI replace attorneys?',
    answer:
      'No. The platform acts as a copilot to accelerate analysis and drafting while keeping human legal review in critical decisions.',
  },
  {
    question: 'How do security and confidentiality work?',
    answer:
      'The platform includes role-based access control, complete audit trails, and data isolation by client or business unit.',
  },
  {
    question: 'How long does implementation take?',
    answer:
      'Small teams can go live in days. Enterprise deployments follow a structured integration and governance plan.',
  },
  {
    question: 'Can I integrate it with my current legal systems?',
    answer:
      'Yes. Lexora AI provides connectors and API support to sync documents, workflows, and critical metadata.',
  },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay,
      ease: [0.2, 0.8, 0.2, 1],
    },
  }),
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-4 inline-flex rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">{title}</h2>
      <p className="mt-4 text-base text-slate-300 md:text-lg">{description}</p>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="relative overflow-x-clip">
      <div className="pointer-events-none absolute inset-0 -z-10 grid-overlay opacity-30" />
      <div className="pointer-events-none absolute -left-40 top-28 -z-10 h-80 w-80 rounded-full bg-cyan-500/30 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 top-56 -z-10 h-[24rem] w-[24rem] rounded-full bg-violet-500/30 blur-[130px]" />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/65 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-6">
          <a href="#hero" className="flex items-center gap-3">
            <span className="glow-ring flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-300 to-blue-500 text-slate-950">
              <Scale className="h-5 w-5" />
            </span>
            <div>
              <p className="font-display text-lg font-bold text-white">Lexora AI</p>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Legal Workspace</p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm text-slate-300 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition-colors hover:text-cyan-300">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button variant="secondary">Sign in</Button>
            <Button>
              Book demo
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-slate-100 lg:hidden"
            aria-label="Open menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-slate-950/95 px-4 py-4 lg:hidden">
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm text-slate-200 transition-colors hover:bg-white/5 hover:text-cyan-300"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <Button variant="secondary">Sign in</Button>
              <Button>Book demo</Button>
            </div>
          </div>
        )}
      </header>

      <main className="mx-auto max-w-7xl px-4 pb-24 pt-28 md:px-6">
        <section id="hero" className="relative flex min-h-[78vh] items-center py-16 md:min-h-[84vh] md:py-24">
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900/90 via-[#0c1531] to-[#0a1125]" />
          <div className="pointer-events-none absolute -left-20 top-20 -z-10 h-56 w-56 rounded-full bg-cyan-500/30 blur-[95px]" />
          <div className="pointer-events-none absolute right-0 top-16 -z-10 h-56 w-56 rounded-full bg-violet-500/25 blur-[110px]" />

          <motion.div
            className="pointer-events-none absolute left-[9%] top-[15%] hidden h-10 w-10 rounded-lg border border-cyan-300/35 bg-cyan-400/10 md:block"
            animate={{ y: [0, -8, 0], rotate: [0, 8, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="pointer-events-none absolute right-[13%] top-[22%] hidden h-4 w-16 rounded-full bg-gradient-to-r from-cyan-300/20 to-transparent md:block"
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          />

          <div className="grid items-center gap-14 lg:grid-cols-12">
            <motion.div
              className="px-2 lg:col-span-7 lg:px-8"
              initial="hidden"
              animate="show"
              variants={fadeInUp}
              custom={0.1}
            >
              <p className="mb-5 inline-flex rounded-full border border-cyan-300/35 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100">
                Lexora AI Platform
              </p>
              <h1 className="max-w-3xl text-4xl font-bold leading-[1.06] text-white sm:text-5xl md:text-6xl xl:text-7xl">
                AI-powered legal workflows for modern teams
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
                Automate client intake, analyze documents, organize cases, and generate legal insights
                faster with a secure AI workspace built for legal professionals.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <Button size="lg">
                  Start Free Trial
                  <ChevronRight className="h-5 w-5" />
                </Button>
                <Button size="lg" variant="secondary">
                  View Demo
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="relative px-2 lg:col-span-5 lg:px-0"
              initial="hidden"
              animate="show"
              variants={fadeInUp}
              custom={0.25}
            >
              <Card className="glow-ring overflow-hidden border-white/15 bg-gradient-to-b from-slate-900/85 to-[#0b1227]/95">
                <CardHeader className="border-b border-white/10 pb-4">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-sm text-slate-300">Lexora AI Dashboard</p>
                    <span className="rounded-full border border-emerald-300/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">
                      Secure
                    </span>
                  </div>
                  <CardTitle className="text-2xl text-white">Workspace overview</CardTitle>
                  <CardDescription>
                    Intake queue, document intelligence, and case workflow status in one place.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-5 pt-6">
                  <div className="rounded-xl border border-white/10 bg-slate-900/70 p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Current processing</p>
                      <p className="text-xs text-cyan-300">Live</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 rounded-full bg-white/10">
                        <div className="h-2 w-[82%] rounded-full bg-gradient-to-r from-cyan-300 to-blue-500" />
                      </div>
                      <div className="h-2 rounded-full bg-white/10">
                        <div className="h-2 w-[61%] rounded-full bg-gradient-to-r from-violet-300 to-blue-500" />
                      </div>
                      <div className="h-2 rounded-full bg-white/10">
                        <div className="h-2 w-[74%] rounded-full bg-gradient-to-r from-cyan-300 to-emerald-300" />
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                      <p className="text-xs text-slate-400">Open matters</p>
                      <p className="mt-2 text-2xl font-semibold text-white">124</p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                      <p className="text-xs text-slate-400">AI insights generated</p>
                      <p className="mt-2 text-2xl font-semibold text-white">2,451</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <motion.div
                className="absolute -left-4 top-10 rounded-xl border border-cyan-300/35 bg-slate-950/80 px-4 py-3 text-sm text-cyan-100 shadow-[0_18px_40px_-24px_rgba(34,211,238,0.85)] backdrop-blur md:-left-12"
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="flex items-center gap-2">
                  <FileSearch className="h-4 w-4" />
                  <span>Document analyzed in 12 seconds</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 right-2 rounded-xl border border-violet-300/35 bg-slate-950/80 px-4 py-3 text-sm text-violet-100 shadow-[0_18px_40px_-24px_rgba(139,92,246,0.85)] backdrop-blur md:-right-9"
                animate={{ y: [0, 7, 0] }}
                transition={{ duration: 6.2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="flex items-center gap-2">
                  <ChartNoAxesCombined className="h-4 w-4" />
                  <span>87% faster case organization</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

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

        <section id="how-it-works" className="py-16">
          <SectionHeading
            eyebrow="Implementation"
            title="How it works in 3 steps"
            description="Simple onboarding, guided setup, and scalable execution from day one."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {steps.map((step, index) => (
              <Card key={step.title} className="relative border-white/10 p-6">
                <div className="absolute right-6 top-6 text-5xl font-bold text-white/10">0{index + 1}</div>
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-300/40 bg-cyan-400/10 text-cyan-200">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{step.text}</p>
              </Card>
            ))}
          </div>
        </section>

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

        <section id="dashboard" className="py-16">
          <SectionHeading
            eyebrow="Product"
            title="A real-world dashboard mockup for Lexora AI"
            description="Designed as a premium SaaS product view with legal workflows, AI insights, and operational visibility."
          />
          <Card className="overflow-hidden border-white/15 bg-gradient-to-b from-slate-900/90 to-[#070d1c] shadow-[0_25px_80px_-45px_rgba(34,211,238,0.45)]">
            <div className="grid gap-0 lg:grid-cols-12">
              <aside className="border-b border-white/10 bg-slate-950/55 p-5 lg:col-span-3 lg:border-b-0 lg:border-r">
                <div className="mb-7 flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-300 to-blue-500 text-slate-950">
                    <Scale className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">Lexora AI</p>
                    <p className="text-xs text-slate-400">Workspace v2.4</p>
                  </div>
                </div>

                <nav className="space-y-2">
                  {[
                    ['Overview', ChartNoAxesCombined, true],
                    ['Cases', Briefcase, false],
                    ['Documents', FileSearch, false],
                    ['AI Assistant', Bot, false],
                    ['Clients', Users, false],
                    ['Reports', Gavel, false],
                    ['Settings', ShieldCheck, false],
                  ].map(([label, Icon, active]) => (
                    <button
                      key={label}
                      type="button"
                      className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-all duration-200 ${
                        active
                          ? 'bg-cyan-400/15 text-cyan-100 ring-1 ring-cyan-300/35'
                          : 'text-slate-300 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{label}</span>
                    </button>
                  ))}
                </nav>
              </aside>

              <div className="p-5 sm:p-6 lg:col-span-9">
                <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-2xl font-semibold text-white sm:text-3xl">Case Intelligence Dashboard</h3>
                  <span className="rounded-full border border-emerald-300/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200">
                    Live sync enabled
                  </span>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                  {[
                    ['Active Cases', '128'],
                    ['Documents Reviewed', '4,892'],
                    ['AI Summaries Generated', '1,236'],
                    ['Time Saved', '320h'],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-xl border border-white/10 bg-white/[0.03] p-4 shadow-[0_12px_35px_-25px_rgba(15,23,42,0.95)] transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/35 hover:bg-white/[0.05]"
                    >
                      <p className="text-xs text-slate-400">{label}</p>
                      <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 grid gap-4 xl:grid-cols-12">
                  <div className="rounded-xl border border-white/10 bg-slate-950/45 p-4 xl:col-span-7">
                    <p className="mb-4 text-sm font-medium text-slate-200">Productivity Trend</p>
                    <div className="relative h-44 rounded-lg border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent p-3">
                      <div className="pointer-events-none absolute inset-x-0 top-1/4 border-t border-white/10" />
                      <div className="pointer-events-none absolute inset-x-0 top-2/4 border-t border-white/10" />
                      <div className="pointer-events-none absolute inset-x-0 top-3/4 border-t border-white/10" />
                      <div className="grid h-full grid-cols-8 items-end gap-2">
                        {[26, 33, 41, 48, 57, 62, 71, 79].map((height, index) => (
                          <motion.div
                            key={height}
                            initial={{ height: 0, opacity: 0.5 }}
                            whileInView={{ height: `${height}%`, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.55, delay: index * 0.05 }}
                            className="rounded-t-md bg-gradient-to-t from-blue-500 via-cyan-400 to-cyan-200"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-slate-950/45 p-4 xl:col-span-5">
                    <p className="mb-4 text-sm font-medium text-slate-200">Recent Documents</p>
                    <div className="space-y-2">
                      {[
                        ['M&A_Contract_Review.pdf', '2 min ago'],
                        ['ClassAction_ReplyDraft.docx', '18 min ago'],
                        ['EmploymentPolicy_Update.pdf', '44 min ago'],
                        ['RegulatoryMemo_Q2.docx', '1h ago'],
                      ].map(([name, time]) => (
                        <div
                          key={name}
                          className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2.5 transition-colors hover:bg-white/[0.05]"
                        >
                          <span className="text-sm text-slate-200">{name}</span>
                          <span className="text-xs text-slate-400">{time}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-xl border border-cyan-300/25 bg-cyan-400/5 p-4 xl:col-span-7">
                    <p className="mb-2 text-sm font-medium text-cyan-100">AI Assistant</p>
                    <p className="rounded-lg border border-cyan-300/20 bg-slate-950/55 p-3 text-sm leading-relaxed text-slate-200">
                      "Based on the latest filings, Case C-2041 has a high chance of favorable settlement.
                      Recommended next step: submit targeted evidence summary and propose mediation window
                      within 5 business days."
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-slate-950/45 p-4 xl:col-span-5">
                    <p className="mb-3 text-sm font-medium text-slate-200">Recent Case Status</p>
                    <div className="space-y-2">
                      {[
                        ['Case C-2041', 'In Review', 'text-amber-200 bg-amber-400/10 border-amber-300/25'],
                        ['Case L-1882', 'Ready to File', 'text-cyan-100 bg-cyan-400/10 border-cyan-300/25'],
                        ['Case T-9017', 'Completed', 'text-emerald-200 bg-emerald-400/10 border-emerald-300/25'],
                      ].map(([name, status, classes]) => (
                        <div
                          key={name}
                          className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2.5 transition-colors hover:bg-white/[0.05]"
                        >
                          <span className="text-sm text-slate-200">{name}</span>
                          <span className={`rounded-full border px-2.5 py-1 text-xs ${classes}`}>{status}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>

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
      </main>

      <footer className="border-t border-white/10 bg-slate-950/70">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 md:px-6 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-300 to-blue-500 text-slate-950">
                <Scale className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-lg font-bold text-white">Lexora AI</p>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Legal Workspace</p>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              Fictional product built for professional portfolio use. Designed to showcase a premium
              SaaS landing page for the legal market.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Product</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>
                <a href="#solution" className="hover:text-cyan-300">
                  Features
                </a>
              </li>
              <li>
                <a href="#dashboard" className="hover:text-cyan-300">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-cyan-300">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Company</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>
                <a href="#" className="hover:text-cyan-300">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-300">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Legal</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>
                <a href="#" className="hover:text-cyan-300">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-300">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-300">
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 py-6 text-center text-xs uppercase tracking-[0.14em] text-slate-500">
          2026 Lexora AI. Portfolio demo for Upwork.
        </div>
      </footer>
    </div>
  )
}

export default App

