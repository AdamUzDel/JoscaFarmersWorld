import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Heart, Wheat, Shield, Wrench, Stethoscope } from "lucide-react"
import Link from "next/link"

const categories = [
  {
    id: "day-old-chicks",
    name: "Day-Old Chicks",
    description:
      "Healthy, high-quality chicks for broiler, dual purpose and layer production from reputable suppliers.",
    icon: Heart,
    image: "/cute-day-old-baby-chicks-in-farming-environment.jpg",
    products: ["Broiler Chicks", "Layer Chicks", "Dual Purpose Breeds", "Lohmann Brown Classic", "Lohmann Sandy"],
    popular: true,
  },
  {
    id: "poultry-feeds",
    name: "Poultry Feeds",
    description: "Nutritious feeds including starter, grower, finisher, layers and concentrates for optimal growth.",
    icon: Wheat,
    image: "/premium-poultry-feed-bags-and-pellets.jpg",
    products: ["Starter Feed", "Grower Feed", "Finisher Feed", "Layer Feed", "Concentrates"],
    popular: true,
  },
  {
    id: "vaccines-medication",
    name: "Vaccines & Medication",
    description: "Wide range of effective vaccines and medications for disease prevention and health management.",
    icon: Shield,
    image: "/veterinary-vaccines-and-medical-supplies-for-poult.jpg",
    products: ["Poultry Vaccines", "Antibiotics", "Vitamins", "Dewormers", "Health Supplements"],
    popular: false,
  },
  {
    id: "poultry-equipment",
    name: "Poultry Equipment",
    description: "Essential farming equipment including feeders, drinkers, incubators and housing solutions.",
    icon: Wrench,
    image: "/modern-poultry-farming-equipment-feeders-and-drink.jpg",
    products: ["Feeders", "Drinkers", "Incubators", "Brooders", "Housing Systems"],
    popular: true,
  },
  {
    id: "veterinary-supplies",
    name: "Veterinary Supplies",
    description: "Professional veterinary supplies and diagnostic tools for comprehensive farm health management.",
    icon: Stethoscope,
    image: "/placeholder.svg?height=300&width=400&text=Veterinary+Supplies",
    products: ["Diagnostic Tools", "Surgical Instruments", "Treatment Supplies", "Health Monitoring", "First Aid Kits"],
    popular: false,
  },
]

export function ProductCategories() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold">Product Categories</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Browse our comprehensive product categories to find exactly what your farm needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {categories.map((category) => (
            <Card
              key={category.id}
              className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm overflow-hidden"
            >
              <div className="grid md:grid-cols-2 h-full">
                <div className="relative overflow-hidden">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {category.popular && <Badge className="absolute top-4 left-4 bg-primary">Popular</Badge>}
                </div>
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <CardHeader className="p-0 mb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <category.icon className="h-6 w-6 text-primary" />
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {category.name}
                        </CardTitle>
                      </div>
                      <CardDescription className="text-sm leading-relaxed">{category.description}</CardDescription>
                    </CardHeader>
                    <div className="space-y-2 mb-6">
                      <h4 className="font-medium text-sm">Available Products:</h4>
                      <div className="flex flex-wrap gap-1">
                        {category.products.slice(0, 3).map((product) => (
                          <Badge key={product} variant="outline" className="text-xs">
                            {product}
                          </Badge>
                        ))}
                        {category.products.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{category.products.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    className="justify-start p-0 h-auto font-medium text-primary hover:text-primary/80"
                    asChild
                  >
                    <Link href={`/products/${category.id}`}>
                      View Products <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
