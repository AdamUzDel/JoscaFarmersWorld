import type { Metadata } from "next"
import {Navigation} from "@/components/navigation"
import Footer from "@/components/footer"
import ContactHero from "@/components/contact-hero"
import ContactForm from "@/components/contact-form"
import ContactInfo from "@/components/contact-info"
import BranchesMap from "@/components/branches-map"

export const metadata: Metadata = {
  title: "Contact Us - Josca Farmer's World | Get In Touch Today",
  description:
    "Contact Josca Farmer's World for all your poultry and livestock needs. Multiple locations across Uganda. Call us or visit our branches in Kampala, Bweyogerere, and more.",
  keywords:
    "contact josca farmers world, poultry supplier contact uganda, livestock company contact, farming solutions contact",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <ContactHero />
        <div className="grid lg:grid-cols-2 gap-0">
          <ContactForm />
          <ContactInfo />
        </div>
        <BranchesMap />
      </main>
      <Footer />
    </div>
  )
}
