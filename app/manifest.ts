import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Josca Farmer's World - Premium Poultry & Livestock Solutions",
    short_name: "Josca Farmers",
    description:
      "Leading bulk importers & distributors of day-old chicks, poultry equipment, livestock feed supplements and additives in Uganda",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#22c55e",
    "icons": [
      {
        "src": "/web-app-manifest-192x192.png",
        "sizes": "192x192",
        "type": "image/png",
        "purpose": "maskable"
      },
      {
        "src": "/web-app-manifest-512x512.png",
        "sizes": "512x512",
        "type": "image/png",
        "purpose": "maskable"
      }
    ],
  }
}
