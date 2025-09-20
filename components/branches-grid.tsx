import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Phone, Navigation, Users, Truck } from "lucide-react"
import Link from "next/link"

const branches = [
  {
    id: "kampala",
    name: "Kampala Head Office",
    address: "Industrial Area, Kampala",
    region: "Central Region",
    phone: "0392002054 / 0784106123",
    email: "kampala@joscafarmersworld.com",
    manager: "Sarah Nakato",
    established: "2012",
    specialties: ["Day-Old Chicks", "Bulk Orders", "Technical Support"],
    services: ["Consultation", "Training", "Delivery", "After-sales Support"],
    isHeadquarters: true,
    image: "/placeholder.svg?height=300&width=400&text=Kampala+Branch",
  },
  {
    id: "bweyogerere",
    name: "Bweyogerere Branch",
    address: "Next to Watoto Church, Bweyogerere",
    region: "Central Region",
    phone: "0392001234 / 0757220722",
    email: "bweyogerere@joscafarmersworld.com",
    manager: "John Mukasa",
    established: "2014",
    specialties: ["Poultry Feeds", "Vaccines", "Equipment"],
    services: ["Walk-in Sales", "Local Delivery", "Product Demos"],
    isHeadquarters: false,
    image: "/placeholder.svg?height=300&width=400&text=Bweyogerere+Branch",
  },
  {
    id: "mbale",
    name: "Mbale Branch",
    address: "Republic Street, Mbale Town",
    region: "Eastern Region",
    phone: "0392003456 / 0701234567",
    email: "mbale@joscafarmersworld.com",
    manager: "Grace Namukose",
    established: "2016",
    specialties: ["Layer Chicks", "Veterinary Supplies", "Feeds"],
    services: ["Regional Distribution", "Farmer Training", "Technical Support"],
    isHeadquarters: false,
    image: "/placeholder.svg?height=300&width=400&text=Mbale+Branch",
  },
  {
    id: "gulu",
    name: "Gulu Branch",
    address: "Layibi Road, Gulu Town",
    region: "Northern Region",
    phone: "0392004567 / 0712345678",
    email: "gulu@joscafarmersworld.com",
    manager: "David Okello",
    established: "2018",
    specialties: ["Broiler Chicks", "Equipment", "Training"],
    services: ["Northern Distribution", "Farmer Groups", "Bulk Sales"],
    isHeadquarters: false,
    image: "/placeholder.svg?height=300&width=400&text=Gulu+Branch",
  },
  {
    id: "mbarara",
    name: "Mbarara Branch",
    address: "High Street, Mbarara Town",
    region: "Western Region",
    phone: "0392005678 / 0723456789",
    email: "mbarara@joscafarmersworld.com",
    manager: "Mary Tumusiime",
    established: "2019",
    specialties: ["Dual Purpose Chicks", "Concentrates", "Health Products"],
    services: ["Western Coverage", "Livestock Support", "Consultation"],
    isHeadquarters: false,
    image: "/placeholder.svg?height=300&width=400&text=Mbarara+Branch",
  },
  {
    id: "arua",
    name: "Arua Branch",
    address: "Okokoro Road, Arua Town",
    region: "West Nile Region",
    phone: "0392006789 / 0734567890",
    email: "arua@joscafarmersworld.com",
    manager: "Peter Drani",
    established: "2020",
    specialties: ["All Products", "Cross-border Trade", "Farmer Support"],
    services: ["West Nile Coverage", "Export Support", "Training Programs"],
    isHeadquarters: false,
    image: "/placeholder.svg?height=300&width=400&text=Arua+Branch",
  },
]

export default function BranchesGrid() {
  return (
    <section id="branches" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold">All Branch Locations</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Each branch is staffed with experienced professionals ready to serve your farming needs with quality
            products and expert advice.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {branches.map((branch) => (
            <Card
              key={branch.id}
              className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm overflow-hidden"
            >
              <div className="grid md:grid-cols-2 h-full">
                <div className="relative overflow-hidden">
                  <img
                    src={branch.image || "/placeholder.svg"}
                    alt={branch.name}
                    className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {branch.isHeadquarters && <Badge className="absolute top-4 left-4 bg-primary">Head Office</Badge>}
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-medium text-primary">Est. {branch.established}</span>
                  </div>
                </div>

                <CardContent className="p-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <CardHeader className="p-0">
                      <div className="flex items-start justify-between mb-2">
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {branch.name}
                        </CardTitle>
                        <Badge variant="outline" className="text-xs">
                          {branch.region}
                        </Badge>
                      </div>
                      <CardDescription className="text-sm">{branch.address}</CardDescription>
                    </CardHeader>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{branch.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>Manager: {branch.manager}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">Specialties:</h4>
                      <div className="flex flex-wrap gap-1">
                        {branch.specialties.map((specialty) => (
                          <Badge key={specialty} variant="secondary" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">Services:</h4>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {branch.services.map((service) => (
                          <li key={service} className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0" />
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 mt-6">
                    <Button size="sm" asChild>
                      <Link href={`tel:${branch.phone.split(" / ")[0]}`}>
                        <Phone className="mr-2 h-3 w-3" />
                        Call Branch
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/contact">
                        <Navigation className="mr-2 h-3 w-3" />
                        Get Directions
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-muted/50 rounded-2xl p-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Truck className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-serif font-bold">Delivery Services Available</h3>
            </div>
            <p className="text-muted-foreground mb-6 text-pretty">
              Can't visit our branches? We offer reliable delivery services across Uganda. Contact any branch to arrange
              delivery of your orders directly to your farm.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  <Phone className="mr-2 h-4 w-4" />
                  Request Delivery
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/products">View Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
