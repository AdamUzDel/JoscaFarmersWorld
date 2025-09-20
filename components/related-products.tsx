import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Heart, Wheat, Shield, Wrench, Stethoscope } from "lucide-react"
import Link from "next/link"

const allCategories = [
  {
    id: "day-old-chicks",
    name: "Day-Old Chicks",
    description: "Healthy, high-quality chicks for broiler, dual purpose and layer production.",
    icon: Heart,
    image: "/cute-day-old-baby-chicks-in-farming-environment.jpg",
    popular: true,
  },
  {
    id: "poultry-feeds",
    name: "Poultry Feeds",
    description: "Nutritious feeds including starter, grower, finisher, layers and concentrates.",
    icon: Wheat,
    image: "/premium-poultry-feed-bags-and-pellets.jpg",
    popular: true,
  },
  {
    id: "vaccines-medication",
    name: "Vaccines & Medication",
    description: "Wide range of effective vaccines and medications for disease prevention.",
    icon: Shield,
    image: "/veterinary-vaccines-and-medical-supplies-for-poult.jpg",
    popular: false,
  },
  {
    id: "poultry-equipment",
    name: "Poultry Equipment",
    description: "Essential farming equipment including feeders, drinkers, incubators and housing.",
    icon: Wrench,
    image: "/modern-poultry-farming-equipment-feeders-and-drink.jpg",
    popular: true,
  },
  {
    id: "veterinary-supplies",
    name: "Veterinary Supplies",
    description: "Professional veterinary supplies and diagnostic tools for farm health management.",
    icon: Stethoscope,
    image: "/placeholder.svg?height=300&width=400&text=Veterinary+Supplies",
    popular: false,
  },
]

interface RelatedProductsProps {
  currentCategory: string
}

export default function RelatedProducts({ currentCategory }: RelatedProductsProps) {
  const relatedCategories = allCategories.filter((category) => category.id !== currentCategory).slice(0, 3)

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold">Related Products</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Complete your farming setup with our other high-quality product categories.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {relatedCategories.map((category) => (
            <Card
              key={category.id}
              className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {category.popular && <Badge className="absolute top-4 left-4 bg-primary">Popular</Badge>}
              </div>
              <CardHeader className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <category.icon className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">{category.name}</CardTitle>
                </div>
                <CardDescription className="text-sm leading-relaxed mb-4">{category.description}</CardDescription>
                <Button
                  variant="ghost"
                  className="justify-start p-0 h-auto font-medium text-primary hover:text-primary/80"
                  asChild
                >
                  <Link href={`/products/${category.id}`}>
                    View Products <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link href="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
