import { Card, CardContent } from "@/components/ui/card"
import { Phone, Calendar, Users, CheckCircle } from "lucide-react"

const processSteps = [
  {
    step: 1,
    icon: Phone,
    title: "Contact Us",
    description: "Reach out via phone, email, or visit our branch to discuss your farming needs and challenges.",
  },
  {
    step: 2,
    icon: Calendar,
    title: "Schedule Consultation",
    description: "We arrange a convenient time for our experts to visit your farm or provide remote consultation.",
  },
  {
    step: 3,
    icon: Users,
    title: "Expert Assessment",
    description: "Our qualified professionals assess your farm and provide tailored recommendations and solutions.",
  },
  {
    step: 4,
    icon: CheckCircle,
    title: "Implementation & Support",
    description: "We help implement solutions and provide ongoing support to ensure your farming success.",
  },
]

export function ServiceProcess() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold">How Our Services Work</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Our streamlined process ensures you get the expert support you need quickly and efficiently.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <div key={step.step} className="relative">
              <Card className="text-center border-0 shadow-sm hover:shadow-md transition-shadow h-full">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="mb-3 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mx-auto">
                    {step.step}
                  </div>
                  <h3 className="font-serif font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/30 transform -translate-y-1/2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
