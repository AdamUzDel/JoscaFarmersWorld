import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Source_Sans_3 as Source_Sans_Pro } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
})

const sourceSansPro = Source_Sans_Pro({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-source-sans-pro",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Josca Farmer's World - Premium Poultry & Livestock Solutions in Uganda",
  description:
    "Leading bulk importers & distributors of day-old chicks, poultry equipment, livestock feed supplements and additives in Uganda. Serving farmers since 2012.",
  keywords:
    "poultry, livestock, day-old chicks, poultry equipment, feeds, veterinary supplies, Uganda, farming, agriculture",
  authors: [{ name: "Josca Farmer's World Ltd" }],
  creator: "BytebaseTech",
  publisher: "Josca Farmer's World Ltd",
  robots: "index, follow",
  openGraph: {
    title: "Josca Farmer's World - Premium Poultry & Livestock Solutions",
    description:
      "Leading bulk importers & distributors of day-old chicks, poultry equipment, livestock feed supplements and additives in Uganda.",
    type: "website",
    locale: "en_UG",
    siteName: "Josca Farmer's World",
    url: "https://joscafarmersworld.com",
    images: [
      {
        url: "/images/josca-logo.png",
        width: 1200,
        height: 630,
        alt: "Josca Farmer's World - Premium Poultry & Livestock Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Josca Farmer's World - Premium Poultry & Livestock Solutions",
    description:
      "Leading bulk importers & distributors of day-old chicks, poultry equipment, livestock feed supplements and additives in Uganda.",
    images: ["/images/josca-logo.png"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://joscafarmersworld.com",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${sourceSansPro.variable} ${GeistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Josca Farmer's World Ltd",
              description:
                "Leading bulk importers & distributors of day-old chicks, poultry equipment, livestock feed supplements and additives in Uganda",
              url: "https://joscafarmersworld.com",
              logo: "https://joscafarmersworld.com/images/josca-logo.png",
              foundingDate: "2012",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Bweyogerere, Next to Watoto Church",
                addressLocality: "Kampala",
                addressCountry: "Uganda",
              },
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+256-392-002054",
                  contactType: "customer service",
                  areaServed: "Uganda",
                },
              ],
              sameAs: ["https://facebook.com/joscafarmersworld", "https://twitter.com/joscafarmers"],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
