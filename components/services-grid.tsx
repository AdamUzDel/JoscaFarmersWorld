import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Stethoscope, Users, CreditCard, Truck, Phone, ArrowRight } from "lucide-react"

const services = [
  {
    id: "technical-support",
    icon: GraduationCap,
    title: "Technical Support & Training",
    description:
      "Comprehensive farm visits, consultation by qualified professionals, and training programs on poultry management and disease prevention.",
    features: [
      "Expert farm consultations",
      "Poultry management training",
      "Disease prevention programs",
      "Best practices guidance",
      "Ongoing technical support",
    ],
    benefits: [
      "Improved farm productivity",
      "Reduced mortality rates",
      "Better feed conversion",
      "Enhanced profitability",
    ],
    popular: true,
  },
  {
    id: "diagnostic-services",
    icon: Stethoscope,
    title: "Diagnostic Services",
    description:
      "Professional postmortem examination and feed testing services to ensure optimal farm health and productivity.",
    features: [
      "Postmortem examinations",
      "Feed quality testing",
      "Health assessments",
      "Laboratory analysis",
      "Detailed reports",
    ],
    benefits: ["Early disease detection", "Quality assurance", "Preventive measures", "Cost savings"],
    popular: false,
  },
  {
    id: "farmer-support",
    icon: Users,
    title: "Farmer Support Programs",
    description:
      "Comprehensive support for farmers in accessing finance, resources, and development opportunities for farm growth.",
    features: [
      "Financial guidance",
      "Resource access support",
      "Development planning",
      "Market linkage assistance",
      "Networking opportunities",
    ],
    benefits: ["Access to funding", "Business growth", "Market expansion", "Sustainable development"],
    popular: true,
  },
  {
    id: "payment-solutions",
    icon: CreditCard,
    title: "Flexible Payment Solutions",
    description:
      "Multiple payment options and financing solutions to make our products and services accessible to all farmers.",
    features: [
      "Flexible payment terms",
      "Bulk purchase discounts",
      "Credit facilities",
      "Installment options",
      "Seasonal payment plans",
    ],
    benefits: ["Improved cash flow", "Affordable access", "Business flexibility", "Growth opportunities"],
    popular: false,
  },
  {
    id: "delivery-logistics",
    icon: Truck,
    title: "Delivery & Logistics",
    description:
      "Efficient delivery services ensuring timely and safe transportation of products to your farm location.",
    features: [
      "Timely delivery",
      "Safe transportation",
      "Multiple delivery options",
      "Tracking services",
      "Quality preservation",
    ],
    benefits: ["Convenience", "Product integrity", "Time savings", "Reliable supply"],
    popular: true,
  },
  {
    id: "customer-support",
    icon: Phone,
    title: "24/7 Customer Support",
    description: "Round-the-clock customer support to address your queries, concerns, and emergency situations.",
    features: [
      "24/7 availability",
      "Emergency support",
      "Expert advice",
      "Quick response",
      "Multiple contact channels",
    ],
    benefits: ["Peace of mind", "Quick problem resolution", "Expert guidance", "Continuous support"],
    popular: false,
  },
]

export function ServicesGrid() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold">Comprehensive Service Offerings</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Our professional services are designed to support every aspect of your farming journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.id}
              className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm h-full"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                {service.popular && <Badge className="w-fit mx-auto mb-2 bg-primary">Popular</Badge>}
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0 flex flex-col h-full">
                <div className="flex-1">
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-medium text-sm mb-2">Service Features:</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm">
                            <div className="h-1.5 w-1.5 bg-primary rounded-full flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm mb-2">Key Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.slice(0, 2).map((benefit, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm">
                            <div className="h-1.5 w-1.5 bg-secondary rounded-full flex-shrink-0" />
                            <span className="text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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
