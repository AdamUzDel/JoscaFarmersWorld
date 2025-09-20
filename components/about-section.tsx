import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, Users, Award, Truck } from "lucide-react"
import Link from "next/link"

const values = [
  {
    icon: CheckCircle,
    name: "Excellence",
    description: "Committed to delivering exceptional quality in all our products and services",
  },
  {
    icon: Users,
    name: "Community Development",
    description: "Supporting local farmers and contributing to agricultural growth in Uganda",
  },
  {
    icon: Award,
    name: "Innovation",
    description: "Introducing new products and technologies to enhance farming practices",
  },
  { icon: Truck, name: "Reliability", description: "Ensuring timely delivery and consistent supply chain management" },
]

export function AboutSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-sm">
                About Josca Farmer's World
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">
                Empowering Farmers Since <span className="text-primary">2012</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                Josca Farmer's World Ltd is a leading bulk importer and distributor of premium poultry and livestock
                solutions in Uganda. Our team of experienced professionals is committed to delivering exceptional
                quality, innovative solutions, and outstanding customer service.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-serif font-semibold">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide high-quality poultry and livestock products and services, promoting sustainable farming
                practices to enhance farm productivity and profitability in Africa.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-serif font-semibold">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading distributors of poultry and agricultural input in Africa.
              </p>
            </div>

            <Button size="lg" asChild>
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>

          {/* Values Grid */}
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold text-center lg:text-left">Our Core Values</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((value) => (
                <Card key={value.name} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6 text-center">
                    <value.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">{value.name}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
