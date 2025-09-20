import { Users, Award, Shield, Lightbulb, CheckCircle, Handshake } from "lucide-react"

const values = [
  {
    icon: Users,
    title: "Community Development",
    description: "Supporting local farming communities and contributing to agricultural growth across Uganda.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Maintaining the highest standards in all our products and services.",
  },
  {
    icon: Shield,
    title: "Accountability",
    description: "Taking responsibility for our actions and delivering on our promises.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Continuously introducing new products and technologies to improve farming outcomes.",
  },
  {
    icon: CheckCircle,
    title: "Integrity",
    description: "Operating with honesty, transparency, and ethical business practices.",
  },
  {
    icon: Handshake,
    title: "Team Work",
    description: "Collaborating effectively to achieve common goals and serve our customers better.",
  },
]

export default function ValuesSection() {
  return (
    <section className="py-16 lg:py-24 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Our Values</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The principles that guide everything we do at Josca Farmer's World
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-background p-6 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary">{value.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
