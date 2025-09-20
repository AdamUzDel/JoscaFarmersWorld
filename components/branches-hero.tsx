import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock } from "lucide-react"
import Link from "next/link"

export default function BranchesHero() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <MapPin className="h-8 w-8 text-primary" />
            <Badge variant="outline" className="text-sm">
              6 Locations Nationwide
            </Badge>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-balance">Our Branch Locations</h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty max-w-2xl mx-auto">
              Visit any of our six strategically located branches across Uganda for quality poultry and livestock
              supplies, expert consultation, and exceptional service.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center gap-3 text-sm">
              <div className="bg-primary/10 p-2 rounded-lg">
                <MapPin className="h-4 w-4 text-primary" />
              </div>
              <div className="text-left">
                <div className="font-medium">6 Branches</div>
                <div className="text-muted-foreground">Nationwide Coverage</div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Phone className="h-4 w-4 text-primary" />
              </div>
              <div className="text-left">
                <div className="font-medium">Expert Support</div>
                <div className="text-muted-foreground">Local Consultation</div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Clock className="h-4 w-4 text-primary" />
              </div>
              <div className="text-left">
                <div className="font-medium">Mon - Sat</div>
                <div className="text-muted-foreground">8:00 AM - 6:00 PM</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                <Phone className="mr-2 h-4 w-4" />
                Contact Us
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#branches">Find Nearest Branch</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
