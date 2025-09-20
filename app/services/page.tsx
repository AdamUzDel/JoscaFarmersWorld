import { Navigation } from "@/components/navigation"
import Footer from "@/components/footer"
import { ServicesHero } from "@/components/services-hero"
import { ServicesGrid } from "@/components/services-grid"
import { ServiceProcess } from "@/components/service-process"
import { ServicesCTA } from "@/components/services-cta"

export const metadata = {
  title: "Professional Agricultural Services | Josca Farmer's World Uganda",
  description:
    "Expert technical support, training, diagnostic services and farmer support. Professional agricultural services to maximize your farm productivity and success.",
  keywords:
    "agricultural services, farm training, technical support, diagnostic services, poultry consultation, Uganda farming services",
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <ServicesHero />
        <ServicesGrid />
        <ServiceProcess />
        <ServicesCTA />
      </main>
      <Footer />
    </div>
  )
}
