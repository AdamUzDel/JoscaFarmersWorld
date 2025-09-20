import type { Metadata } from "next"
import { notFound } from "next/navigation"
import {Navigation} from "@/components/navigation"
import Footer from "@/components/footer"
import ProductDetailHero from "@/components/product-detail-hero"
import ProductDetailContent from "@/components/product-detail-content"
import RelatedProducts from "@/components/related-products"
import Breadcrumbs from "@/components/breadcrumbs"
import StructuredData from "@/components/structured-data"

const productCategories = {
  "day-old-chicks": {
    name: "Day-Old Chicks",
    description:
      "Healthy, high-quality chicks for broiler, dual purpose and layer production from reputable suppliers.",
    image: "/cute-day-old-baby-chicks-in-farming-environment.jpg",
    products: [
      {
        name: "Broiler Chicks",
        description: "Fast-growing broiler chicks for meat production with excellent feed conversion rates.",
        price: "From UGX 2,500 per chick",
        features: ["High growth rate", "Disease resistant", "Excellent meat quality", "Ready in 6-8 weeks"],
      },
      {
        name: "Layer Chicks",
        description: "High-producing layer chicks for commercial egg production.",
        price: "From UGX 3,000 per chick",
        features: ["High egg production", "Long laying period", "Strong shell quality", "Disease resistant"],
      },
      {
        name: "Lohmann Brown Classic",
        description: "Premium layer breed known for excellent egg production and feed efficiency.",
        price: "From UGX 3,500 per chick",
        features: ["300+ eggs per year", "Excellent feed conversion", "Hardy breed", "Brown eggs"],
      },
      {
        name: "Lohmann Sandy",
        description: "Dual-purpose breed suitable for both egg and meat production.",
        price: "From UGX 3,200 per chick",
        features: ["Dual purpose", "Good egg production", "Quality meat", "Adaptable to climate"],
      },
    ],
    benefits: [
      "Sourced from reputable hatcheries",
      "Vaccinated and health-certified",
      "Expert guidance on rearing",
      "Bulk order discounts available",
    ],
  },
  "poultry-feeds": {
    name: "Poultry Feeds",
    description: "Nutritious feeds including starter, grower, finisher, layers and concentrates for optimal growth.",
    image: "/premium-poultry-feed-bags-and-pellets.jpg",
    products: [
      {
        name: "Starter Feed",
        description: "High-protein feed for chicks 0-8 weeks with essential nutrients for rapid growth.",
        price: "From UGX 85,000 per 50kg bag",
        features: ["22-24% protein", "Essential vitamins", "Easy digestion", "Growth promotion"],
      },
      {
        name: "Grower Feed",
        description: "Balanced nutrition for growing birds 8-18 weeks to support healthy development.",
        price: "From UGX 80,000 per 50kg bag",
        features: ["18-20% protein", "Balanced minerals", "Bone development", "Immune support"],
      },
      {
        name: "Finisher Feed",
        description: "Optimized feed for broilers in final growth phase for maximum weight gain.",
        price: "From UGX 75,000 per 50kg bag",
        features: ["16-18% protein", "Energy dense", "Meat quality", "Feed efficiency"],
      },
      {
        name: "Layer Feed",
        description: "Specially formulated for laying hens to maximize egg production and shell quality.",
        price: "From UGX 78,000 per 50kg bag",
        features: ["16-18% protein", "Calcium enriched", "Egg production", "Shell strength"],
      },
    ],
    benefits: [
      "Scientifically formulated nutrition",
      "Quality ingredients sourced locally",
      "Consistent feed conversion rates",
      "Technical support included",
    ],
  },
  "vaccines-medication": {
    name: "Vaccines & Medication",
    description: "Wide range of effective vaccines and medications for disease prevention and health management.",
    image: "/veterinary-vaccines-and-medical-supplies-for-poult.jpg",
    products: [
      {
        name: "Newcastle Disease Vaccine",
        description: "Essential vaccine for protection against Newcastle disease in poultry.",
        price: "From UGX 15,000 per vial",
        features: ["Live vaccine", "Easy administration", "Long immunity", "Cost effective"],
      },
      {
        name: "Gumboro Vaccine",
        description: "Protects against infectious bursal disease in young chickens.",
        price: "From UGX 18,000 per vial",
        features: ["High efficacy", "Safe for chicks", "Maternal antibody", "Disease prevention"],
      },
      {
        name: "Antibiotics",
        description: "Range of antibiotics for treating bacterial infections in poultry.",
        price: "From UGX 25,000 per bottle",
        features: ["Broad spectrum", "Fast acting", "Veterinary grade", "Multiple formulations"],
      },
      {
        name: "Vitamins & Supplements",
        description: "Essential vitamins and minerals for optimal poultry health and performance.",
        price: "From UGX 12,000 per bottle",
        features: ["Complete nutrition", "Stress relief", "Immunity boost", "Growth support"],
      },
    ],
    benefits: [
      "Veterinary-approved products",
      "Cold chain storage maintained",
      "Expert administration guidance",
      "Comprehensive health programs",
    ],
  },
  "poultry-equipment": {
    name: "Poultry Equipment",
    description: "Essential farming equipment including feeders, drinkers, incubators and housing solutions.",
    image: "/modern-poultry-farming-equipment-feeders-and-drink.jpg",
    products: [
      {
        name: "Automatic Feeders",
        description: "Efficient feeding systems that reduce waste and ensure consistent feed supply.",
        price: "From UGX 150,000 per unit",
        features: ["Waste reduction", "Easy cleaning", "Durable materials", "Various sizes"],
      },
      {
        name: "Nipple Drinkers",
        description: "Hygienic water supply systems that prevent contamination and spillage.",
        price: "From UGX 5,000 per nipple",
        features: ["Clean water", "No spillage", "Easy installation", "Long lasting"],
      },
      {
        name: "Incubators",
        description: "Professional incubation equipment for hatching eggs with high success rates.",
        price: "From UGX 800,000 per unit",
        features: ["Temperature control", "Humidity regulation", "Automatic turning", "High hatch rate"],
      },
      {
        name: "Brooders",
        description: "Heating systems to provide optimal temperature for young chicks.",
        price: "From UGX 200,000 per unit",
        features: ["Even heat distribution", "Energy efficient", "Safety features", "Easy maintenance"],
      },
    ],
    benefits: [
      "Durable construction materials",
      "Installation support provided",
      "Maintenance training included",
      "Warranty coverage available",
    ],
  },
  "veterinary-supplies": {
    name: "Veterinary Supplies",
    description: "Professional veterinary supplies and diagnostic tools for comprehensive farm health management.",
    image: "/placeholder.svg?height=400&width=600&text=Veterinary+Supplies",
    products: [
      {
        name: "Diagnostic Kits",
        description: "Rapid diagnostic tests for common poultry diseases and health monitoring.",
        price: "From UGX 35,000 per kit",
        features: ["Quick results", "Easy to use", "Accurate testing", "Multiple diseases"],
      },
      {
        name: "Surgical Instruments",
        description: "Professional-grade surgical tools for veterinary procedures and treatments.",
        price: "From UGX 50,000 per set",
        features: ["Stainless steel", "Precision tools", "Sterilizable", "Professional grade"],
      },
      {
        name: "Treatment Supplies",
        description: "Complete range of treatment supplies for wound care and medical procedures.",
        price: "From UGX 20,000 per kit",
        features: ["Sterile supplies", "Complete kits", "Easy application", "Professional quality"],
      },
      {
        name: "Health Monitoring Tools",
        description: "Equipment for monitoring vital signs and health parameters in livestock.",
        price: "From UGX 75,000 per unit",
        features: ["Digital displays", "Accurate readings", "Portable design", "Battery operated"],
      },
    ],
    benefits: [
      "Professional veterinary grade",
      "Training on proper usage",
      "Technical support available",
      "Bulk purchase discounts",
    ],
  },
}

type Props = {
  params: { category: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = productCategories[params.category as keyof typeof productCategories]

  if (!category) {
    return {
      title: "Product Not Found | Josca Farmer's World",
    }
  }

  return {
    title: `${category.name} | Josca Farmer's World Uganda`,
    description: category.description,
    keywords: `${category.name.toLowerCase()}, poultry farming, Uganda, livestock supplies, farming equipment`,
    openGraph: {
      title: `${category.name} | Josca Farmer's World`,
      description: category.description,
      url: `https://joscafarmersworld.com/products/${params.category}`,
      images: [
        {
          url: category.image,
          width: 1200,
          height: 630,
          alt: category.name,
        },
      ],
    },
  }
}

export async function generateStaticParams() {
  return Object.keys(productCategories).map((category) => ({
    category,
  }))
}

export default function ProductDetailPage({ params }: Props) {
  const category = productCategories[params.category as keyof typeof productCategories]

  if (!category) {
    notFound()
  }

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: category.name, href: `/products/${params.category}` },
  ]

  const structuredData = {
    "@type": "Product",
    name: category.name,
    description: category.description,
    image: category.image,
    brand: {
      "@type": "Brand",
      name: "Josca Farmer's World",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "UGX",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Josca Farmer's World",
      },
    },
  }

  return (
    <div className="min-h-screen">
      <StructuredData type="Product" data={structuredData} />
      <Navigation />
      <main>
        <Breadcrumbs items={breadcrumbItems} />
        <ProductDetailHero category={category} />
        <ProductDetailContent category={category} />
        <RelatedProducts currentCategory={params.category} />
      </main>
      <Footer />
    </div>
  )
}
