import type { Metadata } from "next"
import {Navigation} from "@/components/navigation"
import Footer from "@/components/footer"
import {ProductsHero} from "@/components/products-hero"
import {ProductCategories} from "@/components/product-categories"
import {ProductGrid} from "@/components/product-grid"
import {ProductCTA} from "@/components/product-cta"
import StructuredData from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Premium Poultry & Livestock Products | Josca Farmer's World Uganda",
  description:
    "Explore our comprehensive range of day-old chicks, poultry feeds, vaccines, equipment and veterinary supplies. Quality products for successful farming in Uganda.",
  keywords:
    "day-old chicks, poultry feeds, vaccines, poultry equipment, veterinary supplies, Uganda farming products, Lohmann Brown, Lohmann Sandy",
  openGraph: {
    title: "Premium Poultry & Livestock Products | Josca Farmer's World",
    description:
      "Comprehensive range of day-old chicks, poultry feeds, vaccines, equipment and veterinary supplies for successful farming in Uganda.",
    url: "https://joscafarmersworld.com/products",
    images: [
      {
        url: "/cute-day-old-baby-chicks-in-farming-environment.jpg",
        width: 1200,
        height: 630,
        alt: "Day-old chicks from Josca Farmer's World",
      },
    ],
  },
}

const productCatalogData = {
  "@type": "ItemList",
  name: "Josca Farmer's World Product Catalog",
  description: "Comprehensive range of poultry and livestock products",
  numberOfItems: 5,
  itemListElement: [
    {
      "@type": "Product",
      position: 1,
      name: "Day-Old Chicks",
      description: "Healthy, high-quality chicks for broiler, dual purpose and layer production",
      category: "Poultry",
      brand: "Josca Farmer's World",
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        priceCurrency: "UGX",
      },
    },
    {
      "@type": "Product",
      position: 2,
      name: "Poultry Feeds",
      description: "Nutritious feeds including starter, grower, finisher, layers and concentrates",
      category: "Animal Feed",
      brand: "Josca Farmer's World",
    },
    {
      "@type": "Product",
      position: 3,
      name: "Vaccines and Medication",
      description: "Wide range of effective vaccines for disease prevention",
      category: "Veterinary Supplies",
      brand: "Josca Farmer's World",
    },
    {
      "@type": "Product",
      position: 4,
      name: "Veterinary Supplies",
      description: "Antibiotics, vitamins and dewormers for livestock health",
      category: "Veterinary Supplies",
      brand: "Josca Farmer's World",
    },
    {
      "@type": "Product",
      position: 5,
      name: "Poultry Equipment",
      description: "Feeders, drinkers, incubators and other essential equipment",
      category: "Farm Equipment",
      brand: "Josca Farmer's World",
    },
  ],
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <StructuredData type="Product" data={productCatalogData} />
      <Navigation />
      <main>
        <ProductsHero />
        <ProductCategories />
        <ProductGrid />
        <ProductCTA />
      </main>
      <Footer />
    </div>
  )
}
