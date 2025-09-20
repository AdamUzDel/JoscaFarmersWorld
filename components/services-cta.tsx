import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, ArrowRight, Clock } from "lucide-react"
import Link from "next/link"

export function ServicesCTA() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <Card className="border-0 shadow-xl bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <CardContent className="p-12">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">Ready to Get Expert Support?</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                  Our agricultural experts are standing by to help you optimize your farm operations and achieve better
                  results. Contact us today for personalized service.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8" asChild>
                  <Link href="/contact">
                    Schedule Consultation <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent" asChild>
                  <Link href="tel:0392002054">
                    <Phone className="mr-2 h-5 w-5" />
                    Call: 0392002054
                  </Link>
                </Button>
              </div>

              <div className="grid md:grid-cols-3 gap-6 pt-8 border-t">
                <div className="flex items-center justify-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div className="text-left">
                    <p className="font-medium">24/7 Support</p>
                    <p className="text-sm text-muted-foreground">Always available</p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div className="text-left">
                    <p className="font-medium">Quick Response</p>
                    <p className="text-sm text-muted-foreground">Within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div className="text-left">
                    <p className="font-medium">Expert Advice</p>
                    <p className="text-sm text-muted-foreground">Qualified professionals</p>
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
