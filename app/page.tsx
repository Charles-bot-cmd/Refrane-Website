import { Navigation } from '@/components/layout/Navigation'
import { HeroSection } from '@/components/sections/HeroSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { StatsSection } from '@/components/sections/StatsSection'
import { CTASection } from '@/components/sections/CTASection'
import { Footer } from '@/components/layout/Footer'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <StatsSection />
      <CTASection />
      <Footer />
    </main>
  )
}