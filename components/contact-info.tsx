import { Phone, Mail, MapPin, Clock } from "lucide-react"

const contactMethods = [
  {
    icon: Phone,
    title: "Phone Numbers",
    details: ["Kampala: 0392002054 / 0784106123", "Bweyogerere: 0392001234 / 0757220722"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@joscafarmersworld.com"],
  },
  {
    icon: MapPin,
    title: "Head Office",
    details: ["Bweyogerere, Next to Watoto Church", "Kampala, Uganda"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 8:00 AM - 4:00 PM"],
  },
]

export default function ContactInfo() {
  return (
    <section className="py-16 lg:py-24 bg-primary/5">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-lg mx-auto lg:mx-0">
          <h2 className="text-3xl font-serif font-bold text-primary mb-6">Contact Information</h2>
          <p className="text-muted-foreground mb-8">
            Reach out to us through any of these channels. We're here to help with all your farming needs.
          </p>

          <div className="space-y-6">
            {contactMethods.map((method, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                  <method.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">{method.title}</h3>
                  {method.details.map((detail, idx) => (
                    <p key={idx} className="text-muted-foreground text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-background rounded-lg border border-border">
            <h3 className="font-semibold text-primary mb-3">Why Choose Us?</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Expert consultation and technical support</li>
              <li>• Quality products from reputable suppliers</li>
              <li>• Competitive pricing and bulk discounts</li>
              <li>• Timely delivery across Uganda</li>
              <li>• After-sales support and training</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
