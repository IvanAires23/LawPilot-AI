import { motion } from 'framer-motion'
import { ChartNoAxesCombined, ChevronRight, FileSearch } from 'lucide-react'

import { Button } from '../ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { fadeInUp } from '../../lib/animations'

function HeroSection() {
  return (
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
  )
}

export default HeroSection
