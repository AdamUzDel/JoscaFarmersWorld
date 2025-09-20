interface StructuredDataProps {
  type: "Product" | "Service" | "LocalBusiness" | "Article"
  data: any
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const generateSchema = () => {
    const baseSchema = {
      "@context": "https://schema.org",
      "@type": type,
      ...data,
    }

    return JSON.stringify(baseSchema)
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: generateSchema() }} />
}
