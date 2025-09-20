import type { Metadata } from "next"
import {Navigation} from "@/components/navigation"
import Footer from "@/components/footer"
import BranchesHero from "@/components/branches-hero"
import BranchesGrid from "@/components/branches-grid"
import BranchesMap from "@/components/branches-map"
import Breadcrumbs from "@/components/breadcrumbs"
import StructuredData from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Branch Locations | Josca Farmer's World Uganda",
  description:
    "Find Josca Farmer's World branches across Uganda. Visit our locations in Kampala, Bweyogerere, Mbale, Gulu, Mbarara, and Arua for quality poultry and livestock supplies.",
  keywords:
    "Josca branches, Uganda locations, poultry supplies Uganda, livestock feed distributors, farming supplies branches",
  openGraph: {
    title: "Branch Locations | Josca Farmer's World Uganda",
    description:
      "Find Josca Farmer's World branches across Uganda. Six convenient locations serving farmers nationwide.",
    url: "https://joscafarmersworld.com/branches",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200&text=Josca+Branches+Uganda",
        width: 1200,
        height: 630,
        alt: "Josca Farmer's World branch locations across Uganda",
      },
    ],
  },
}

const branchesData = {
  "@type": "Organization",
  name: "Josca Farmer's World",
  description: "Leading poultry and livestock supplies distributor in Uganda",
  url: "https://joscafarmersworld.com",
  logo: "https://joscafarmersworld.com/images/josca-logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+256392002054",
    contactType: "customer service",
    availableLanguage: ["English", "Luganda"],
  },
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "Next to Watoto Church",
      addressLocality: "Bweyogerere",
      addressRegion: "Central Region",
      addressCountry: "Uganda",
      telephone: "+256392001234",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Industrial Area",
      addressLocality: "Kampala",
      addressRegion: "Central Region",
      addressCountry: "Uganda",
      telephone: "+256392002054",
    },
  ],
}

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Branch Locations", href: "/branches" },
]

export default function BranchesPage() {
  return (
    <div className="min-h-screen">
      <StructuredData type="LocalBusiness" data={branchesData} />
      <Navigation />
      <main>
        <Breadcrumbs items={breadcrumbItems} />
        <BranchesHero />
        <BranchesGrid />
        <BranchesMap />
      </main>
      <Footer />
    </div>
  )
}
