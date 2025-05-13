import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
// import { ImageGallery } from "@/components/image-gallery"
import { OptimizedImage } from "@/components/optimized-image"
import { ROUTES } from "@/constants"

const featuredImages = [
  { src: "/images/portfolio-1.jpg", alt: "Wedding Photography", width: 800, height: 600, categoryLink: ROUTES.PORTFOLIO_WEDDINGS },
  { src: "/images/portfolio-10.jpg", alt: "Graduation Photography", width: 800, height: 600, categoryLink: ROUTES.PORTFOLIO_GRADUATIONS },
  { src: "/images/portfolio-15.jpg", alt: "Birthday Photography", width: 800, height: 600, categoryLink: ROUTES.PORTFOLIO_BIRTHDAYS },
  { src: "/images/portfolio-19.jpg", alt: "Engagement Photography", width: 800, height: 600, categoryLink: ROUTES.PORTFOLIO_ENGAGEMENTS },
  { src: "/images/portfolio-22.jpg", alt: "Corporate Photography", width: 800, height: 600, categoryLink: ROUTES.PORTFOLIO_CORPORATE },
  { src: "/images/portfolio-3.jpg", alt: "Cultural Photography", width: 800, height: 600, categoryLink: ROUTES.PORTFOLIO_CULTURAL },
];

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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {featuredImages.map((image) => (
            <Link key={image.src} href={image.categoryLink || ROUTES.PORTFOLIO} className="block group relative aspect-[4/3] overflow-hidden rounded-lg">
              <OptimizedImage
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                placeholder="empty"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white font-semibold text-lg drop-shadow-md">{image.alt}</h3>
              </div>
            </Link>
          ))}
        </div>
        
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