import Link from "next/link"
import { Button } from "@/components/ui/button"
import {Navigation} from "@/components/navigation"
import Footer from "@/components/footer"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-md mx-auto">
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-foreground mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8">
            Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </p>
          <div className="space-y-4">
            <Button asChild className="w-full">
              <Link href="/">Return Home</Link>
            </Button>
            <Button asChild variant="outline" className="w-full bg-transparent">
              <Link href="/products">View Products</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
