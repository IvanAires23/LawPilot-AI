import SiteFooter from './components/layout/SiteFooter'
import SiteHeader from './components/layout/SiteHeader'
import BenefitsSection from './components/sections/BenefitsSection'
import ChallengesSection from './components/sections/ChallengesSection'
import DashboardSection from './components/sections/DashboardSection'
import FaqSection from './components/sections/FaqSection'
import FeaturesSection from './components/sections/FeaturesSection'
import FinalCtaSection from './components/sections/FinalCtaSection'
import HeroSection from './components/sections/HeroSection'
import HowItWorksSection from './components/sections/HowItWorksSection'
import PricingSection from './components/sections/PricingSection'
import TestimonialsSection from './components/sections/TestimonialsSection'
import UseCasesSection from './components/sections/UseCasesSection'
import { navItems } from './data/landing-data'

function App() {
  return (
    <div className="relative overflow-x-clip">
      <div className="pointer-events-none absolute inset-0 -z-10 grid-overlay opacity-30" />
      <div className="pointer-events-none absolute -left-40 top-28 -z-10 h-80 w-80 rounded-full bg-cyan-500/30 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 top-56 -z-10 h-[24rem] w-[24rem] rounded-full bg-violet-500/30 blur-[130px]" />

      <SiteHeader navItems={navItems} />

      <main className="mx-auto max-w-7xl px-4 pb-24 pt-28 md:px-6">
        <HeroSection />
        <ChallengesSection />
        <FeaturesSection />
        <HowItWorksSection />
        <UseCasesSection />
        <BenefitsSection />
        <DashboardSection />
        <TestimonialsSection />
        <PricingSection />
        <FaqSection />
        <FinalCtaSection />
      </main>

      <SiteFooter />
    </div>
  )
}

export default App
