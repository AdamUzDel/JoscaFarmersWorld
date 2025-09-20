import { Trophy, Calendar, MapPin, Award } from "lucide-react"

const achievements = [
  {
    year: "2017-2025",
    title: "Harvest Money Expo Sponsor",
    description: "Proud sponsors of Uganda's premier agricultural exhibition for 8 consecutive years",
    icon: Calendar,
  },
  {
    year: "2020-2025",
    title: "Best Day Old Chicks Distributor",
    description: "Recognized as Uganda's leading day-old chicks distributor for 5 consecutive years",
    icon: Trophy,
  },
  {
    year: "2023-2025",
    title: "Largest Poultry Equipment Distributor",
    description: "Became East Africa's largest poultry equipment distributor",
    icon: Award,
  },
  {
    year: "2024-2025",
    title: "Major Expansion",
    description: "Successfully expanded operations to 10 new districts across Uganda",
    icon: MapPin,
  },
]

export default function AchievementsTimeline() {
  return (
    <section className="py-16 lg:py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Our Achievements</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Milestones that showcase our commitment to excellence and growth
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start gap-6 bg-background p-6 rounded-lg shadow-sm">
                <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                  <achievement.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {achievement.year}
                    </span>
                    <h3 className="text-xl font-semibold text-primary">{achievement.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
