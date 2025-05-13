import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { ImageGallery } from "@/components/image-gallery"
import { ROUTES, PORTFOLIO_DATA, IMAGES } from "@/constants"

export function PortfolioSection() {
  // Create an array of featured images using numbered portfolio images
  const featuredImages = [
    { src: "/images/portfolio-1.jpg", alt: "Wedding Photography", width: 800, height: 600 },
    { src: "/images/portfolio-10.jpg", alt: "Graduation Photography", width: 800, height: 600 },
    { src: "/images/portfolio-15.jpg", alt: "Birthday Photography", width: 800, height: 600 },
    { src: "/images/portfolio-19.jpg", alt: "Engagement Photography", width: 800, height: 600 },
    { src: "/images/portfolio-22.jpg", alt: "Corporate Photography", width: 800, height: 600 },
    { src: "/images/portfolio-3.jpg", alt: "Cultural Photography", width: 800, height: 600 },
  ];

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
        
        <ImageGallery images={featuredImages} />
        
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