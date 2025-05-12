import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { ImageGallery } from "@/components/image-gallery"
import { ROUTES, PORTFOLIO_IMAGES } from "@/constants"

export function PortfolioSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block bg-primary/10 text-primary font-medium rounded-full px-4 py-1 text-sm mb-4">
            Portfolio Highlights
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Photography Collections</h2>
          <p className="text-muted-foreground text-lg">
            Browse through a selection of our most beautiful photography showcasing various events from across Sri Lanka.
          </p>
        </div>
        
        <ImageGallery images={PORTFOLIO_IMAGES} />
        
        <div className="text-center mt-12">
          <Button asChild size="lg" className="gap-2 group">
            <Link href={ROUTES.PORTFOLIO}>
              Explore Full Portfolio
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
} 