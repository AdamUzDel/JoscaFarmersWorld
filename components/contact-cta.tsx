import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react"
import Link from "next/link"

export function ContactCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4">
        <Card className="border-0 shadow-xl bg-card/80 backdrop-blur">
          <CardContent className="p-12">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">
                  Ready to Transform Your Farm?
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                  Get in touch with our experts today for personalized solutions and competitive pricing on all our
                  products and services.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8" asChild>
                  <Link href="/contact">
                    Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent" asChild>
                  <Link href="tel:0392002054">Call Now: 0392002054</Link>
                </Button>
              </div>

              <div className="grid md:grid-cols-3 gap-6 pt-8 border-t">
                <div className="flex items-center justify-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div className="text-left">
                    <p className="font-medium">Call Us</p>
                    <p className="text-sm text-muted-foreground">0392002054</p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div className="text-left">
                    <p className="font-medium">Email Us</p>
                    <p className="text-sm text-muted-foreground">info@joscafarmersworld.com</p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div className="text-left">
                    <p className="font-medium">Visit Us</p>
                    <p className="text-sm text-muted-foreground">Bweyogerere, Kampala</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
