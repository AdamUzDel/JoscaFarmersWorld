import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import Footer from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { FeaturedProducts } from "@/components/featured-products"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { AchievementsSection } from "@/components/achievements-section"
import { ContactCTA } from "@/components/contact-cta"
import StructuredData from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Josca Farmer's World - Premium Poultry & Livestock Solutions in Uganda",
  description:
    "Leading bulk importers & distributors of day-old chicks, poultry equipment, livestock feed supplements and additives in Uganda. Serving farmers since 2012 with quality products and expert support.",
  keywords:
    "poultry Uganda, day old chicks, livestock feed, poultry equipment, veterinary supplies, farming solutions Uganda, agricultural supplies Kampala",
  openGraph: {
    title: "Josca Farmer's World - Premium Poultry & Livestock Solutions",
    description:
      "Leading bulk importers & distributors of day-old chicks, poultry equipment, livestock feed supplements and additives in Uganda.",
    url: "https://joscafarmersworld.com",
    siteName: "Josca Farmer's World",
    images: [
      {
        url: "/images/josca-logo.png",
        width: 1200,
        height: 630,
        alt: "Josca Farmer's World Logo",
      },
    ],
    locale: "en_UG",
    type: "website",
  },
}

const localBusinessData = {
  name: "Josca Farmer's World Ltd",
  description:
    "Leading bulk importers & distributors of day-old chicks, poultry equipment, livestock feed supplements and additives in Uganda",
  url: "https://joscafarmersworld.com",
  telephone: "+256-392-002054",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bweyogerere, Next to Watoto Church",
    addressLocality: "Kampala",
    addressCountry: "Uganda",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "0.3476",
    longitude: "32.6204",
  },
  openingHours: "Mo-Fr 08:00-18:00, Sa 08:00-16:00",
  priceRange: "$$",
  servesCuisine: "Agricultural Supplies",
  foundingDate: "2012",
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <StructuredData type="LocalBusiness" data={localBusinessData} />
      <Navigation />
      <main>
        <HeroSection />
        <FeaturedProducts />
        <AboutSection />
        <ServicesSection />
        <AchievementsSection />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  )
}
