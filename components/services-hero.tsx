import { Badge } from "@/components/ui/badge"

export function ServicesHero() {
  return (
    <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <Badge variant="secondary" className="text-sm">
            Our Services
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-balance">
            Professional <span className="text-primary">Agricultural</span> Services
          </h1>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            Beyond products, we provide comprehensive support services including technical training, diagnostic
            services, and expert consultation to ensure your farming success.
          </p>
        </div>
      </div>
    </section>
  )
}
