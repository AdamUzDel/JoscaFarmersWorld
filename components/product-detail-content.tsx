import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check, Phone, ShoppingCart } from "lucide-react"
import Link from "next/link"

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

interface ProductDetailContentProps {
  category: Category
}

export default function ProductDetailContent({ category }: ProductDetailContentProps) {
  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold">Available {category.name}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Choose from our carefully selected range of high-quality products designed for your farming success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {category.products.map((product, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">{product.name}</CardTitle>
                    <Badge variant="secondary" className="text-sm font-medium">
                      {product.price}
                    </Badge>
                  </div>
                  <ShoppingCart className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <CardDescription className="text-sm leading-relaxed">{product.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <h4 className="font-medium text-sm">Key Features:</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="flex-1" asChild>
                    <Link href="/contact">
                      <Phone className="mr-2 h-4 w-4" />
                      Request Quote
                    </Link>
                  </Button>
                  <Button variant="outline" className="flex-1 bg-transparent" asChild>
                    <Link href="tel:+256701234567">Call Now</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-muted/50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-serif font-bold mb-4">Need Custom Solutions?</h3>
            <p className="text-muted-foreground mb-6 text-pretty">
              We offer customized packages and bulk pricing for large-scale operations. Contact our experts for
              personalized recommendations.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                <Phone className="mr-2 h-4 w-4" />
                Speak with Expert
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
