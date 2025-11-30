import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import OriginStorySection from '@/components/sections/OriginStorySection'
import WhoCanJoinSection from '@/components/sections/WhoCanJoinSection'
import LearningJourneySection from '@/components/sections/LearningJourneySection'
import ImpactShowcaseSection from '@/components/sections/ImpactShowcaseSection'
import HowItWorksSection from '@/components/sections/HowItWorksSection'
import CTASection from '@/components/sections/CTASection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <OriginStorySection />
      <WhoCanJoinSection />
      <LearningJourneySection />
      <ImpactShowcaseSection />
      <HowItWorksSection />
      <CTASection />
      <Footer />
    </main>
  )
}
