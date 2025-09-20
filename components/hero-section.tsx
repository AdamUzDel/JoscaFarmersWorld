import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-serif font-bold text-balance leading-tight">
                Premium <span className="text-primary">Poultry</span> &
                <span className="text-secondary"> Livestock</span> Solutions
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Leading bulk importers & distributors of day-old chicks, poultry equipment, livestock feed supplements
                and additives in Uganda since 2012.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8" asChild>
                <Link href="/products">
                  Shop Products <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent" asChild>
                <Link href="/contact">Get Quote</Link>
              </Button>
            </div>

            {/* Quick Contact */}
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Call Us Now</p>
                  <p className="text-sm text-muted-foreground">0392002054</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Visit Our Store</p>
                  <p className="text-sm text-muted-foreground">Bweyogerere, Kampala</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
              <img
                src="/modern-poultry-farm-with-healthy-chickens-and-farm.jpg"
                alt="Modern poultry farming with healthy chickens and equipment"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-card border rounded-xl p-4 shadow-lg">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">12+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-card border rounded-xl p-4 shadow-lg">
              <div className="text-center">
                <p className="text-2xl font-bold text-secondary">10+</p>
                <p className="text-sm text-muted-foreground">Branch Locations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
