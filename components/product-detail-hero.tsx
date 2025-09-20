import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, Wheat, Shield, Wrench, Stethoscope, Phone } from "lucide-react"
import Link from "next/link"

const categoryIcons = {
  "Day-Old Chicks": Heart,
  "Poultry Feeds": Wheat,
  "Vaccines & Medication": Shield,
  "Poultry Equipment": Wrench,
  "Veterinary Supplies": Stethoscope,
}

type Category = {
  name: string
  description: string
  image: string
  products: Array<{
    name: string
    description: string
    price: string
    features: string[]
  }>
  benefits: string[]
}

interface ProductDetailHeroProps {
  category: Category
}

export default function ProductDetailHero({ category }: ProductDetailHeroProps) {
  const IconComponent = categoryIcons[category.name as keyof typeof categoryIcons] || Heart

  return (
    <section className="relative py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <IconComponent className="h-8 w-8 text-primary" />
              <Badge variant="outline" className="text-sm">
                Premium Quality
              </Badge>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-balance">{category.name}</h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty">{category.description}</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Why Choose Our {category.name}?</h3>
              <ul className="space-y-2">
                {category.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">
                  <Phone className="mr-2 h-4 w-4" />
                  Get Quote
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#products">View Products</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{category.products.length}</div>
                <div className="text-sm text-muted-foreground">Products Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
