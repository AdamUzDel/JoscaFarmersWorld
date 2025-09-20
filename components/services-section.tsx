import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, Stethoscope, Users, CreditCard, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: GraduationCap,
    title: "Technical Support & Training",
    description:
      "Farm visits and consultation by qualified professionals, plus comprehensive training programs on poultry management and disease prevention.",
    features: ["Expert farm consultations", "Training programs", "Best practices guidance"],
  },
  {
    icon: Stethoscope,
    title: "Diagnostic Services",
    description:
      "Professional postmortem examination and feed testing services to ensure optimal farm health and productivity.",
    features: ["Postmortem examinations", "Feed quality testing", "Health assessments"],
  },
  {
    icon: Users,
    title: "Farmer Support",
    description:
      "Comprehensive support for farmers in accessing finance and other essential resources for farm development.",
    features: ["Financial guidance", "Resource access", "Development support"],
  },
  {
    icon: CreditCard,
    title: "Flexible Payment Options",
    description:
      "Multiple payment solutions and financing options to make our products and services accessible to all farmers.",
    features: ["Flexible payment terms", "Bulk discounts", "Credit facilities"],
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold">Our Professional Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Beyond products, we provide comprehensive support services to ensure your farming success and maximize
            productivity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm h-full"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-sm leading-relaxed mb-4">{service.description}</CardDescription>
                <ul className="space-y-1 text-sm">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 bg-primary rounded-full flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link href="/services">
              Explore All Services <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
