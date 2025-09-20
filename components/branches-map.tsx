import { MapPin, Phone } from "lucide-react"

const branches = [
  {
    name: "Bweyogerere Branch",
    address: "Next to Watoto Church, Bweyogerere",
    phone: "0392 001234",
  },
  {
    name: "Container Village",
    address: "Container Village Farmer's Market",
    phone: "0392002054",
  },
  {
    name: "Kasangati Branch",
    address: "Gayaza Road, Kasangati",
    phone: "0200 902229",
  },
  {
    name: "Masaka Branch",
    address: "Masaka Town",
    phone: "0757220722",
  },
  {
    name: "Mpondwe Branch",
    address: "Mpondwe Border",
    phone: "+256 775820359",
  },
  {
    name: "Jinja Branch",
    address: "Jinja Town",
    phone: "0784 106 123",
  },
]

export default function BranchesMap() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Our Branches</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Visit any of our strategically located branches across Uganda for personalized service
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {branches.map((branch, index) => (
            <div
              key={index}
              className="bg-secondary/5 p-6 rounded-lg border border-border hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="bg-primary/10 p-2 rounded-lg flex-shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">{branch.name}</h3>
                  <p className="text-sm text-muted-foreground">{branch.address}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm font-medium text-primary">{branch.phone}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Can't find a branch near you? We also offer delivery services across Uganda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0392002054"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Phone className="h-4 w-4 mr-2" />
              Call Main Office
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
