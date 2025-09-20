import Link from "next/link"
import Image from "next/image"
import { MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/josca-logo.png"
                alt="Josca Farmer's World Logo"
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <div>
                <h3 className="font-serif font-bold text-primary">JOSCA FARMER'S WORLD</h3>
                <p className="text-xs text-muted-foreground italic">Nutrition, health & Performance</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Leading bulk importers & distributors of day-old chicks, poultry equipment, livestock feed supplements and
              additives in Uganda since 2012.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-muted-foreground hover:text-primary">
                  Our Products
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/branches" className="text-muted-foreground hover:text-primary">
                  Branch Locations
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="font-serif font-semibold">Our Products</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products/day-old-chicks" className="text-muted-foreground hover:text-primary">
                  Day-Old Chicks
                </Link>
              </li>
              <li>
                <Link href="/products/poultry-feeds" className="text-muted-foreground hover:text-primary">
                  Poultry Feeds
                </Link>
              </li>
              <li>
                <Link href="/products/vaccines" className="text-muted-foreground hover:text-primary">
                  Vaccines & Medication
                </Link>
              </li>
              <li>
                <Link href="/products/equipment" className="text-muted-foreground hover:text-primary">
                  Poultry Equipment
                </Link>
              </li>
              <li>
                <Link href="/products/veterinary" className="text-muted-foreground hover:text-primary">
                  Veterinary Supplies
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-serif font-semibold">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Kampala Office</p>
                  <p className="text-muted-foreground">Tel: 0392002054/0784106123</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Bweyogerere Branch</p>
                  <p className="text-muted-foreground">Next to Watoto Church</p>
                  <p className="text-muted-foreground">Tel: 0392001234/0757220722</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">Mon - Sat: 8:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© 2024 Josca Farmer's World Ltd. All rights reserved.</p>
          <p className="text-sm text-muted-foreground mt-2 sm:mt-0">
            Designed by{" "}
            <Link
              href="https://bytebasetech.com"
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              BytebaseTech
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
