import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutHero() {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 to-secondary/10 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6 text-balance">
            About Josca Farmer's World
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty">
            Leading the way in poultry and livestock solutions across Uganda since 2012
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">Get In Touch</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/products">View Our Products</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
