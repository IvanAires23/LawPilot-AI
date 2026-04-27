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
  Sparkles,
  Users,
  X,
} from 'lucide-react'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './components/ui/accordion'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'

const navItems = [
  { label: 'Problemas', href: '#problemas' },
  { label: 'Recursos', href: '#solucao' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Casos de uso', href: '#casos' },
  { label: 'Precos', href: '#precos' },
  { label: 'FAQ', href: '#faq' },
]

const painPoints = [
  {
    icon: Clock3,
    title: 'Prazos sob pressao',
    text: 'Processos, audiencias e peticoes competem por tempo, aumentando risco operacional.',
  },
  {
    icon: FileSearch,
    title: 'Pesquisa juridica lenta',
    text: 'Horas gastas para encontrar jurisprudencia relevante e montar argumentos solidos.',
  },
  {
    icon: MessagesSquare,
    title: 'Comunicacao fragmentada',
    text: 'Informacoes espalhadas entre emails, planilhas e sistemas desconectados.',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance sensivel',
    text: 'Departamentos juridicos precisam equilibrar agilidade e rastreabilidade.',
  },
]

const features = [
  {
    icon: Sparkles,
    title: 'Pesquisa orientada por IA',
    text: 'Respostas contextualizadas com base em leis, precedentes e estrategia processual.',
  },
  {
    icon: Bot,
    title: 'Copiloto para pecas',
    text: 'Rascunhos de pecas, contratos e pareceres com linguagem juridica consistente.',
  },
  {
    icon: ChartNoAxesCombined,
    title: 'Priorizacao inteligente',
    text: 'Painel com risco, urgencia e impacto financeiro para orientar decisoes rapidas.',
  },
  {
    icon: Users,
    title: 'Fluxo colaborativo',
    text: 'Times internos e externos trabalham no mesmo contexto, com historico completo.',
  },
  {
    icon: ShieldCheck,
    title: 'Governanca de dados',
    text: 'Controles de permissao, trilhas de auditoria e padroes para ambientes juridicos.',
  },
  {
    icon: Gavel,
    title: 'Motor de padronizacao',
    text: 'Biblioteca de argumentos e templates para elevar consistencia entre casos.',
  },
]

const steps = [
  {
    title: 'Conecte sua operacao',
    text: 'Importe processos, contratos e bases internas em poucos minutos.',
  },
  {
    title: 'Defina politicas e metas',
    text: 'Configure regras por area, nivel de risco e padroes de revisao.',
  },
  {
    title: 'Escalone com seguranca',
    text: 'Receba insights acionaveis e execute mais com a equipe atual.',
  },
]

const useCases = [
  {
    icon: Briefcase,
    title: 'Escritorios full-service',
    text: 'Organize grandes carteiras e acelere entregas sem perder qualidade tecnica.',
  },
  {
    icon: Building2,
    title: 'Departamentos juridicos',
    text: 'Reduza tempo de resposta para areas de negocio e fortaleça compliance interno.',
  },
  {
    icon: Landmark,
    title: 'Contencioso de massa',
    text: 'Automatize triagem, padronize teses e monitore produtividade em escala.',
  },
  {
    icon: Scale,
    title: 'Boutiques especializadas',
    text: 'Aumente profundidade analitica para casos estrategicos de alto valor.',
  },
]

const metrics = [
  { value: '65%', label: 'menos tempo em pesquisa e preparacao de pecas' },
  { value: '42%', label: 'ganho medio de produtividade por advogado' },
  { value: '3,1x', label: 'mais casos tratados por equipe no trimestre' },
  { value: '99,9%', label: 'historico rastreavel para auditoria e governanca' },
]

const testimonials = [
  {
    name: 'Marina Araujo',
    role: 'Socia, Araujo & Costa Advogados',
    quote:
      'A LawPilot AI reduziu o tempo de elaboracao de pecas sem comprometer profundidade juridica.',
  },
  {
    name: 'Ricardo Mello',
    role: 'Head Juridico, Vectra Energia',
    quote:
      'Hoje o juridico entrega analise estrategica para o negocio com muito mais velocidade.',
  },
  {
    name: 'Camila Rocha',
    role: 'Coordenadora de Contencioso, Nexo Legal',
    quote: 'Conseguimos padronizar teses e priorizar riscos com um painel claro para toda a equipe.',
  },
]

const plans = [
  {
    name: 'Starter',
    price: 'R$ 399',
    description: 'Para equipes pequenas iniciando automacao juridica.',
    features: ['3 usuarios', 'Assistente de pesquisa', 'Templates basicos', 'Suporte por email'],
    cta: 'Comecar agora',
  },
  {
    name: 'Professional',
    price: 'R$ 1.290',
    description: 'Plano ideal para escritorios e departamentos em crescimento.',
    features: ['15 usuarios', 'Copiloto para pecas', 'Painel de risco', 'Integracoes avancadas'],
    cta: 'Solicitar demo',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Sob consulta',
    description: 'Operacoes juridicas complexas com requisitos corporativos.',
    features: ['Usuarios ilimitados', 'SSO e trilha de auditoria', 'IA customizada', 'Gerente dedicado'],
    cta: 'Falar com vendas',
  },
]

const faqs = [
  {
    question: 'A LawPilot AI substitui o advogado?',
    answer:
      'Nao. A plataforma funciona como copiloto para acelerar analise e redacao, mantendo validacao humana em todas as etapas criticas.',
  },
  {
    question: 'Como ficam seguranca e confidencialidade?',
    answer:
      'A arquitetura inclui controle de acesso por perfil, trilha de auditoria e isolamento de dados por cliente ou unidade de negocio.',
  },
  {
    question: 'Quanto tempo leva para implementar?',
    answer:
      'Times pequenos entram em operacao em poucos dias. Projetos enterprise seguem cronograma de integracao e governanca dedicado.',
  },
  {
    question: 'Posso integrar com meu sistema juridico atual?',
    answer:
      'Sim. A LawPilot AI oferece conectores e API para sincronizar documentos, fluxos e metadados essenciais.',
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
              <p className="font-display text-lg font-bold text-white">LawPilot AI</p>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Legal Intelligence</p>
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
            <Button variant="secondary">Entrar</Button>
            <Button>
              Agendar demo
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-slate-100 lg:hidden"
            aria-label="Abrir menu"
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
              <Button variant="secondary">Entrar</Button>
              <Button>Agendar demo</Button>
            </div>
          </div>
        )}
      </header>

      <main className="mx-auto max-w-7xl px-4 pb-24 pt-28 md:px-6">
        <section id="hero" className="py-14 md:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <motion.div
              className="lg:col-span-7"
              initial="hidden"
              animate="show"
              variants={fadeInUp}
              custom={0.1}
            >
              <p className="mb-4 inline-flex rounded-full border border-violet-300/30 bg-violet-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-violet-200">
                IA juridica para alta performance
              </p>
              <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
                O copiloto juridico que transforma pesquisa em estrategia.
              </h1>
              <p className="mt-6 max-w-2xl text-base text-slate-300 md:text-lg">
                LawPilot AI acelera analise, redacao e governanca para advogados, escritorios e
                departamentos juridicos que precisam entregar mais com confianca.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button size="lg">
                  Testar gratuitamente
                  <ChevronRight className="h-5 w-5" />
                </Button>
                <Button size="lg" variant="secondary">
                  Ver produto
                </Button>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {['+1.200 profissionais', '98% de satisfacao', 'Suporte especializado'].map((item) => (
                  <div key={item} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-5"
              initial="hidden"
              animate="show"
              variants={fadeInUp}
              custom={0.25}
            >
              <Card className="glow-ring overflow-hidden border-white/15">
                <CardHeader className="border-b border-white/10 pb-4">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-sm text-slate-300">Painel LawPilot AI</p>
                    <span className="rounded-full border border-emerald-300/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">
                      Operacional
                    </span>
                  </div>
                  <CardTitle className="text-2xl text-white">Visao executiva do juridico</CardTitle>
                  <CardDescription>
                    Processos prioritarios, previsao de risco e recomendacoes de proxima acao.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-5 pt-6">
                  <div className="rounded-xl border border-white/10 bg-slate-900/70 p-4">
                    <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Risco agregado</p>
                    <div className="mt-2 flex items-end justify-between">
                      <p className="text-3xl font-bold text-white">28%</p>
                      <p className="text-xs text-cyan-300">-14% em 30 dias</p>
                    </div>
                    <div className="mt-4 h-2 rounded-full bg-white/10">
                      <div className="h-2 w-[72%] rounded-full bg-gradient-to-r from-cyan-300 to-blue-500" />
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                      <p className="text-xs text-slate-400">Pecas sugeridas hoje</p>
                      <p className="mt-2 text-2xl font-semibold text-white">37</p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                      <p className="text-xs text-slate-400">Prazos criticos</p>
                      <p className="mt-2 text-2xl font-semibold text-white">5</p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-cyan-300/20 bg-cyan-400/5 p-4 text-sm text-slate-200">
                    "Priorize o caso 09412-33. O modelo detectou alta chance de acordo favoravel nas
                    proximas 72h."
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        <section id="problemas" className="py-16">
          <SectionHeading
            eyebrow="Desafios reais"
            title="A rotina juridica moderna exige mais velocidade e previsibilidade"
            description="Equipes juridicas lidam com volume crescente, pressao por eficiencia e necessidade de mitigar riscos continuamente."
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

        <section id="solucao" className="py-16">
          <SectionHeading
            eyebrow="Plataforma"
            title="Uma camada de inteligencia juridica para toda a operacao"
            description="Recursos desenhados para apoiar decisao, acelerar execucao e elevar padrao tecnico do seu time."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
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
                  <Card className="h-full border-white/10 bg-gradient-to-b from-white/10 to-white/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-violet-300/40">
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

        <section id="como-funciona" className="py-16">
          <SectionHeading
            eyebrow="Implementacao"
            title="Como funciona em 3 passos"
            description="Entrada simples, configuracao guiada e escala progressiva para gerar valor rapido."
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

        <section id="casos" className="py-16">
          <SectionHeading
            eyebrow="Aplicacoes"
            title="Casos de uso que refletem o dia a dia da advocacia"
            description="Do contencioso ao consultivo, a LawPilot AI se adapta a diferentes modelos de atuacao juridica."
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

        <section id="beneficios" className="py-16">
          <SectionHeading
            eyebrow="Resultados"
            title="Beneficios mensuraveis para eficiencia e controle"
            description="Indicadores que mostram o impacto da IA juridica na produtividade e na previsibilidade da operacao."
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
            eyebrow="Produto"
            title="Dashboard projetado para lideranca juridica"
            description="Visual claro de risco, produtividade e desempenho por area, cliente e tipo de processo."
          />
          <Card className="overflow-hidden border-white/15">
            <div className="grid gap-0 lg:grid-cols-12">
              <div className="border-b border-white/10 p-6 lg:col-span-4 lg:border-b-0 lg:border-r">
                <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Resumo semanal</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">Performance por frente</h3>
                <div className="mt-6 space-y-4">
                  {[
                    ['Consultivo', '91%'],
                    ['Contencioso estrategico', '84%'],
                    ['Operacoes reguladas', '89%'],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <div className="mb-1 flex justify-between text-sm text-slate-300">
                        <span>{label}</span>
                        <span>{value}</span>
                      </div>
                      <div className="h-2 rounded-full bg-white/10">
                        <div
                          className="h-2 rounded-full bg-gradient-to-r from-cyan-300 to-blue-500"
                          style={{ width: value }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 lg:col-span-8">
                <div className="mb-6 grid gap-4 sm:grid-cols-3">
                  {[
                    ['Pecas concluidas', '412'],
                    ['Acordos fechados', '38'],
                    ['Alertas criticos', '6'],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                      <p className="text-xs text-slate-400">{label}</p>
                      <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-xl border border-white/10 bg-slate-950/40 p-4">
                  <p className="mb-4 text-sm text-slate-300">Evolucao de produtividade (ultimos 6 meses)</p>
                  <div className="grid h-52 grid-cols-6 items-end gap-3">
                    {[28, 36, 41, 53, 62, 74].map((height, index) => (
                      <motion.div
                        key={height}
                        initial={{ height: 0, opacity: 0.6 }}
                        whileInView={{ height: `${height}%`, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.06 }}
                        className="rounded-t-md bg-gradient-to-t from-blue-500 to-cyan-300"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        <section id="depoimentos" className="py-16">
          <SectionHeading
            eyebrow="Depoimentos"
            title="Profissionais que ja escalam suas operacoes com LawPilot AI"
            description="Relatos ficticios para representar o perfil de uso esperado da plataforma em diferentes contextos juridicos."
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

        <section id="precos" className="py-16">
          <SectionHeading
            eyebrow="Planos"
            title="Precificacao flexivel para cada maturidade juridica"
            description="Comece rapido e evolua para governanca avancada conforme sua operacao cresce."
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
                    Mais escolhido
                  </p>
                )}
                <h3 className="text-2xl font-semibold text-white">{plan.name}</h3>
                <p className="mt-2 text-sm text-slate-300">{plan.description}</p>
                <p className="mt-6 text-4xl font-bold text-white">{plan.price}</p>
                <p className="mt-1 text-sm text-slate-400">/mes</p>
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
            title="Perguntas frequentes"
            description="Respostas objetivas para os pontos mais comuns antes da contratacao."
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
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100">Pronto para escalar</p>
                <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
                  Transforme seu juridico em uma operacao orientada por inteligencia.
                </h2>
                <p className="mt-4 text-slate-200">
                  Veja como a LawPilot AI pode acelerar entregas e aumentar controle em poucas semanas.
                </p>
              </div>
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <Button size="lg" className="sm:min-w-48">
                  Agendar demonstracao
                </Button>
                <Button size="lg" variant="outline" className="sm:min-w-48">
                  Falar com especialista
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
                <p className="font-display text-lg font-bold text-white">LawPilot AI</p>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Legal Intelligence</p>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              Plataforma ficticia para portfolio profissional. Criada para demonstrar design premium de
              landing SaaS para o mercado juridico.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Produto</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>
                <a href="#solucao" className="hover:text-cyan-300">
                  Recursos
                </a>
              </li>
              <li>
                <a href="#dashboard" className="hover:text-cyan-300">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#precos" className="hover:text-cyan-300">
                  Planos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Empresa</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>
                <a href="#" className="hover:text-cyan-300">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-300">
                  Carreiras
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-300">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Legal</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>
                <a href="#" className="hover:text-cyan-300">
                  Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-300">
                  Termos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-300">
                  Seguranca
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 py-6 text-center text-xs uppercase tracking-[0.14em] text-slate-500">
          2026 LawPilot AI. Portfolio demo para Upwork.
        </div>
      </footer>
    </div>
  )
}

export default App
