import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ArrowRight } from "lucide-react"

const featuredProducts = [
  {
    id: 1,
    name: "Lohmann Brown Classic Layer Chicks",
    category: "Day-Old Chicks",
    description: "Premium layer breed known for excellent egg production and feed conversion efficiency.",
    image: "/cute-day-old-baby-chicks-in-farming-environment.jpg",
    features: ["High egg production", "Excellent feed conversion", "Disease resistant", "Long laying period"],
    popular: true,
    rating: 4.9,
  },
  {
    id: 2,
    name: "Premium Starter Feed",
    category: "Poultry Feeds",
    description: "High-protein starter feed formulated for optimal growth in the first weeks of life.",
    image: "/premium-poultry-feed-bags-and-pellets.jpg",
    features: ["22% protein content", "Essential vitamins", "Digestible nutrients", "Growth optimization"],
    popular: true,
    rating: 4.8,
  },
  {
    id: 3,
    name: "Newcastle Disease Vaccine",
    category: "Vaccines",
    description: "Effective protection against Newcastle disease for all poultry types.",
    image: "/veterinary-vaccines-and-medical-supplies-for-poult.jpg",
    features: ["Long-lasting immunity", "Easy administration", "Proven effectiveness", "Safe for all ages"],
    popular: false,
    rating: 4.7,
  },
  {
    id: 4,
    name: "Automatic Feeder System",
    category: "Equipment",
    description: "Modern automatic feeding system for efficient and hygienic feed distribution.",
    image: "/modern-poultry-farming-equipment-feeders-and-drink.jpg",
    features: ["Automatic operation", "Reduces waste", "Easy maintenance", "Durable construction"],
    popular: true,
    rating: 4.6,
  },
]

export function ProductGrid() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold">Featured Products</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Our most popular and trusted products chosen by farmers across Uganda.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm h-full"
            >
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
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed mb-4 line-clamp-3">
                    {product.description}
                  </CardDescription>
                  <div className="space-y-2 mb-4">
                    <h4 className="font-medium text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      {product.features.slice(0, 2).map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                          <div className="h-1.5 w-1.5 bg-primary rounded-full flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="justify-start p-0 h-auto font-medium text-primary hover:text-primary/80 mt-auto"
                >
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
