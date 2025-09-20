import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, ArrowRight } from "lucide-react"
import Link from "next/link"

export function ProductCTA() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <Card className="border-0 shadow-xl bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <CardContent className="p-12">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">Need Help Choosing Products?</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                  Our agricultural experts are ready to help you select the right products for your specific farming
                  needs and provide competitive pricing.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8" asChild>
                  <Link href="/contact">
                    Get Expert Advice <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent" asChild>
                  <Link href="tel:0392002054">
                    <Phone className="mr-2 h-5 w-5" />
                    Call: 0392002054
                  </Link>
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row gap-8 justify-center items-center pt-8 border-t">
                <div className="text-center">
                  <p className="font-semibold text-2xl text-primary">500+</p>
                  <p className="text-sm text-muted-foreground">Happy Farmers</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-2xl text-secondary">12+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-2xl text-primary">10+</p>
                  <p className="text-sm text-muted-foreground">Branch Locations</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
