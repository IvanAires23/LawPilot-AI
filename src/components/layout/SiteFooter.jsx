import { Scale } from 'lucide-react'

function SiteFooter() {
  return (
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
  )
}

export default SiteFooter
