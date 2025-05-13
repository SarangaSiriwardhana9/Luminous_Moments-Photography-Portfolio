import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Image as ImageIcon, Camera } from "lucide-react"
import Link from "next/link"
import { OptimizedImage } from "@/components/optimized-image"
import { IMAGES, ROUTES } from "@/constants"

export function AboutSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block bg-primary/10 text-primary font-medium rounded-full px-4 py-1 text-sm">
              About Luminous Moments
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Capturing Life's Special Moments with Artistic Vision</h2>
            <p className="text-muted-foreground text-lg">
              With over 10 years of experience documenting weddings, graduations, birthdays, and special events across Sri Lanka, 
              I specialize in creating timeless imagery that preserves the rich cultural traditions and 
              authentic emotions of your most important life moments.
            </p>
            <ul className="space-y-3">
              {[
                "Authentic cultural documentation",
                "Artistic and candid approach",
                "Attention to detailed storytelling",
                "Professional lighting techniques",
                "High-resolution digital delivery",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="rounded-full bg-primary/10 p-1">
                    <Heart className="h-4 w-4 text-primary" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <Button asChild size="lg" className="gap-2 group">
                <Link href={ROUTES.ABOUT}>
                  Learn More About Me
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative h-[500px] w-full rounded-lg overflow-hidden">
              <OptimizedImage 
                src={IMAGES.ABOUT_PHOTOGRAPHER} 
                alt="Sri Lankan Professional Photographer" 
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-background p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Camera className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Experience</div>
                  <div className="font-bold">10+ Years</div>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-background p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <ImageIcon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Photos Delivered</div>
                  <div className="font-bold">100,000+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 