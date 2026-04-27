import { motion } from 'framer-motion'
import {
  Activity,
  Bot,
  Briefcase,
  ChartNoAxesCombined,
  FileSearch,
  Gavel,
  Scale,
  ShieldCheck,
  Users,
} from 'lucide-react'

import SectionHeading from './SectionHeading'

const sidebarItems = [
  ['Overview', ChartNoAxesCombined, true],
  ['Cases', Briefcase, false],
  ['Documents', FileSearch, false],
  ['AI Assistant', Bot, false],
  ['Clients', Users, false],
  ['Reports', Gavel, false],
  ['Settings', ShieldCheck, false],
]

const statCards = [
  ['Active Cases', '128', '+12 this week'],
  ['Documents Reviewed', '4,892', '+9.4%'],
  ['AI Summaries Generated', '1,236', '+18.1%'],
  ['Time Saved', '320h', '+42h this month'],
]

const recentDocuments = [
  ['M&A_Contract_Review.pdf', '2 min ago'],
  ['ClassAction_ReplyDraft.docx', '18 min ago'],
  ['EmploymentPolicy_Update.pdf', '44 min ago'],
  ['RegulatoryMemo_Q2.docx', '1h ago'],
]

const recentCases = [
  ['Case C-2041', 'In Review', 'text-amber-200 bg-amber-400/10 border-amber-300/25'],
  ['Case L-1882', 'Ready to File', 'text-cyan-100 bg-cyan-400/10 border-cyan-300/25'],
  ['Case T-9017', 'Completed', 'text-emerald-200 bg-emerald-400/10 border-emerald-300/25'],
]

function DashboardSection() {
  return (
    <section id="dashboard" className="py-16">
      <SectionHeading
        eyebrow="Product"
        title="A real-world dashboard mockup for Lexora AI"
        description="A stable, polished dashboard layout designed to look like a live SaaS product."
      />

      <div className="mx-auto max-w-[1120px]">
        <div className="overflow-hidden rounded-[28px] border border-white/15 bg-gradient-to-b from-slate-900/95 to-[#070d1c] shadow-[0_30px_90px_-45px_rgba(34,211,238,0.35)]">
          <div className="flex h-11 items-center justify-between border-b border-white/10 bg-slate-950/65 px-4">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/80" />
            </div>
            <p className="text-xs text-slate-400">lexora.ai/dashboard</p>
            <p className="text-xs text-slate-500">Synced 2m ago</p>
          </div>

          <div className="grid lg:grid-cols-[228px_minmax(0,1fr)]">
            <aside className="border-b border-white/10 bg-slate-950/60 p-4 lg:border-b-0 lg:border-r">
              <div className="mb-5 flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-300 to-blue-500 text-slate-950">
                  <Scale className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">Lexora AI</p>
                  <p className="text-xs text-slate-400">Workspace v2.4</p>
                </div>
              </div>

              <nav className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-1">
                {sidebarItems.map(([label, Icon, active]) => (
                  <button
                    key={label}
                    type="button"
                    className={`flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-left text-sm transition-all duration-200 ${
                      active
                        ? 'bg-cyan-400/15 text-cyan-100 ring-1 ring-cyan-300/35'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    <span className="truncate">{label}</span>
                  </button>
                ))}
              </nav>
            </aside>

            <div className="min-w-0 p-4 sm:p-5 lg:p-6">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="text-2xl font-semibold text-white sm:text-3xl">Case Intelligence Dashboard</h3>
                  <p className="mt-1 text-sm text-slate-400">Team workspace with real-time legal activity</p>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200">
                  <Activity className="h-3.5 w-3.5" />
                  Live sync enabled
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {statCards.map(([label, value, meta]) => (
                  <div
                    key={label}
                    className="rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/35 hover:bg-white/[0.05]"
                  >
                    <p className="text-xs text-slate-400">{label}</p>
                    <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
                    <p className="mt-2 text-xs text-cyan-200/90">{meta}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 grid gap-4 lg:grid-cols-5">
                <div className="rounded-xl border border-white/10 bg-slate-950/50 p-4 lg:col-span-3">
                  <p className="mb-4 text-sm font-medium text-slate-200">Productivity Trend</p>
                  <div className="relative h-48 rounded-lg border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent p-3">
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

                <div className="rounded-xl border border-white/10 bg-slate-950/50 p-4 lg:col-span-2">
                  <p className="mb-4 text-sm font-medium text-slate-200">Recent Documents</p>
                  <div className="space-y-2">
                    {recentDocuments.map(([name, time]) => (
                      <div
                        key={name}
                        className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2.5 transition-colors hover:bg-white/[0.05]"
                      >
                        <span className="min-w-0 flex-1 truncate text-sm text-slate-200">{name}</span>
                        <span className="shrink-0 text-xs text-slate-400">{time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-cyan-300/25 bg-cyan-400/5 p-4 lg:col-span-3">
                  <p className="mb-2 text-sm font-medium text-cyan-100">AI Assistant</p>
                  <p className="rounded-lg border border-cyan-300/20 bg-slate-950/55 p-3 text-sm leading-relaxed text-slate-200">
                    "Based on the latest filings, Case C-2041 has a high chance of favorable settlement.
                    Recommended next step: submit targeted evidence summary and propose mediation window
                    within 5 business days."
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-slate-950/50 p-4 lg:col-span-2">
                  <p className="mb-3 text-sm font-medium text-slate-200">Recent Case Status</p>
                  <div className="space-y-2">
                    {recentCases.map(([name, status, classes]) => (
                      <div
                        key={name}
                        className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2.5 transition-colors hover:bg-white/[0.05]"
                      >
                        <span className="min-w-0 flex-1 truncate text-sm text-slate-200">{name}</span>
                        <span className={`shrink-0 rounded-full border px-2.5 py-1 text-xs ${classes}`}>{status}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DashboardSection
