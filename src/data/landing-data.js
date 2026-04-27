import {
  Bot,
  Briefcase,
  Building2,
  ChartNoAxesCombined,
  Clock3,
  FileSearch,
  Landmark,
  MessagesSquare,
  Scale,
  ShieldCheck,
} from 'lucide-react'

export const navItems = [
  { label: 'Challenges', href: '#challenges' },
  { label: 'Features', href: '#solution' },
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'Use Cases', href: '#use-cases' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export const painPoints = [
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

export const features = [
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

export const steps = [
  {
    title: 'Upload or connect your data',
    text: 'Import documents, client records, case notes, or connect your existing workflow tools.',
  },
  {
    title: 'Let AI structure the information',
    text: 'Lexora AI analyzes content, extracts key details, identifies risks, and organizes everything automatically.',
  },
  {
    title: 'Take action faster',
    text: 'Generate summaries, reports, client responses, and case insights from one intelligent workspace.',
  },
]

export const useCases = [
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

export const metrics = [
  { value: '65%', label: 'less time spent on research and first drafts' },
  { value: '42%', label: 'average productivity gain per attorney' },
  { value: '3.1x', label: 'more matters handled per team each quarter' },
  { value: '99.9%', label: 'traceable history for governance and audit' },
]

export const testimonials = [
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

export const plans = [
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

export const faqs = [
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
