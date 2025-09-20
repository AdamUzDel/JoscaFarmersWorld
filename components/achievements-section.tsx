import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Award, MapPin, Calendar } from "lucide-react"

const achievements = [
  {
    icon: Trophy,
    title: "Harvest Money Expo Sponsor",
    period: "2017 - 2025",
    description: "Proud sponsor of Uganda's premier agricultural exhibition",
    highlight: "Major Sponsor",
  },
  {
    icon: Award,
    title: "Best Day-Old Chicks Distributor",
    period: "2020 - 2025",
    description: "Recognized as Uganda's leading day-old chicks distributor",
    highlight: "Industry Leader",
  },
  {
    icon: MapPin,
    title: "Largest Equipment Distributor",
    period: "2023 - 2025",
    description: "East Africa's largest poultry equipment distributor",
    highlight: "Regional Leader",
  },
  {
    icon: Calendar,
    title: "Rapid Expansion",
    period: "2024 - 2025",
    description: "Successfully expanded to 10 new districts across Uganda",
    highlight: "Growth Achievement",
  },
]

export function AchievementsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="text-sm">
            Our Achievements
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-serif font-bold">Recognized Excellence in Agriculture</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Our commitment to quality and service has earned us recognition as a leader in Uganda's agricultural sector.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement) => (
            <Card
              key={achievement.title}
              className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm text-center"
            >
              <CardContent className="p-6">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                  <achievement.icon className="h-8 w-8 text-primary" />
                </div>
                <Badge variant="outline" className="mb-3 text-xs">
                  {achievement.highlight}
                </Badge>
                <h3 className="font-serif font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-sm font-medium text-secondary mb-2">{achievement.period}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
