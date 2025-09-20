import Head from "next/head"

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string
  canonical?: string
  ogImage?: string
  noindex?: boolean
}

export default function SEOHead({
  title = "Josca Farmer's World - Premium Poultry & Livestock Solutions",
  description = "Leading bulk importers & distributors of day-old chicks, poultry equipment, livestock feed supplements and additives in Uganda.",
  keywords = "poultry Uganda, day old chicks, livestock feed, poultry equipment, veterinary supplies",
  canonical,
  ogImage = "/images/josca-logo.png",
  noindex = false,
}: SEOHeadProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {canonical && <link rel="canonical" href={canonical} />}
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_UG" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional SEO */}
      <meta name="author" content="Josca Farmer's World Ltd" />
      <meta name="publisher" content="Josca Farmer's World Ltd" />
      <meta name="copyright" content="© 2024 Josca Farmer's World Ltd" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
    </Head>
  )
}
