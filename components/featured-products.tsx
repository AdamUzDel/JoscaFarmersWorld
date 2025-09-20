import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const featuredProducts = [
  {
    id: 1,
    name: "Day-Old Chicks",
    description: "Healthy, high-quality chicks for broiler, dual purpose and layer production",
    image: "/cute-day-old-baby-chicks-in-farming-environment.jpg",
    category: "Livestock",
    popular: true,
  },
  {
    id: 2,
    name: "Poultry Feeds",
    description: "Nutritious feeds including starter, grower, finisher, layers and concentrates",
    image: "/premium-poultry-feed-bags-and-pellets.jpg",
    category: "Feed",
    popular: true,
  },
  {
    id: 3,
    name: "Vaccines & Medication",
    description: "Wide range of effective vaccines for disease prevention and health management",
    image: "/veterinary-vaccines-and-medical-supplies-for-poult.jpg",
    category: "Healthcare",
    popular: false,
  },
  {
    id: 4,
    name: "Poultry Equipment",
    description: "Feeders, drinkers, incubators and other essential farming equipment",
    image: "/modern-poultry-farming-equipment-feeders-and-drink.jpg",
    category: "Equipment",
    popular: true,
  },
]

export function FeaturedProducts() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold">Our Featured Products</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Discover our comprehensive range of premium poultry and livestock solutions designed to enhance farm
            productivity and profitability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.popular && <Badge className="absolute top-3 left-3 bg-primary">Popular</Badge>}
                  <Badge variant="secondary" className="absolute top-3 right-3">
                    {product.category}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed mb-4">{product.description}</CardDescription>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-0 h-auto font-medium text-primary hover:text-primary/80"
                  asChild
                >
                  <Link href={`/products/${product.name.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")}`}>
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link href="/products">
              View All Products <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
