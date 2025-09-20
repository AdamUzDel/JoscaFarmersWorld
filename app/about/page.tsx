import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import Footer from "@/components/footer"
import AboutHero from "@/components/about-hero"
import CompanyHistory from "@/components/company-history"
import ValuesSection from "@/components/values-section"
import TeamSection from "@/components/team-section"
import AchievementsTimeline from "@/components/achievements-timeline"

export const metadata: Metadata = {
  title: "About Us - Josca Farmer's World | Leading Poultry & Livestock Supplier in Uganda",
  description:
    "Learn about Josca Farmer's World - Uganda's premier poultry and livestock supplier since 2012. Discover our mission, values, and commitment to sustainable farming.",
  keywords: "about josca farmers world, poultry supplier uganda, livestock company history, farming solutions uganda",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <AboutHero />
        <CompanyHistory />
        <ValuesSection />
        <TeamSection />
        <AchievementsTimeline />
      </main>
      <Footer />
    </div>
  )
}
