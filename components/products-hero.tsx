import { Badge } from "@/components/ui/badge"

export function ProductsHero() {
  return (
    <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <Badge variant="secondary" className="text-sm">
            Our Products
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-balance">
            Premium <span className="text-primary">Poultry</span> &<span className="text-secondary"> Livestock</span>{" "}
            Products
          </h1>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            Discover our comprehensive range of high-quality products designed to enhance farm productivity and
            profitability. From day-old chicks to complete farming solutions.
          </p>
        </div>
      </div>
    </section>
  )
}
