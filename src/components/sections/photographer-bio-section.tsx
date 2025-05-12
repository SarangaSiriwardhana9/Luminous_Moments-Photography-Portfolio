import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Users, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { IMAGES, ROUTES } from "@/constants"

export function PhotographerBioSection() {
  return (
    <section className="py-24 bg-muted">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-block bg-primary/10 text-primary font-medium rounded-full px-4 py-1 text-sm mb-4">
            Meet The Photographer
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">Hasaranga Suloksha</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-1">
            <div className="relative h-[500px] w-full rounded-lg overflow-hidden">
              <Image 
                src={IMAGES.PHOTOGRAPHER_PORTRAIT} 
                alt="Hasaranga Suloksha - Professional Photographer" 
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
          
          <div className="lg:col-span-2 space-y-6">
            <p className="text-xl text-muted-foreground italic">"Photography is not just my profession, it's my passion. I believe in capturing authentic moments that tell your unique story."</p>
            
            <p className="text-muted-foreground">
              Born and raised in the cultural heart of Sri Lanka, I developed a deep appreciation for the rich traditions 
              and vibrant celebrations that define our heritage. My journey as a photographer began over a decade ago, 
              and since then, I've had the privilege of documenting thousands of special moments for clients across the island.
            </p>
            
            <p className="text-muted-foreground">
              With a background in fine arts and digital media, I bring a unique artistic perspective to each shoot. 
              My approach combines traditional portraiture with candid storytelling, ensuring that every image not only 
              looks beautiful but also captures the genuine emotions and connections of your special day.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
              <div className="flex flex-col items-center p-4 bg-background rounded-lg shadow-sm">
                <Award className="h-8 w-8 text-primary mb-2" />
                <h4 className="font-bold">Award-Winning</h4>
                <p className="text-sm text-muted-foreground text-center">Multiple awards for excellence in photography</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-background rounded-lg shadow-sm">
                <Users className="h-8 w-8 text-primary mb-2" />
                <h4 className="font-bold">500+ Clients</h4>
                <p className="text-sm text-muted-foreground text-center">Trusted by hundreds of satisfied clients</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-background rounded-lg shadow-sm">
                <Star className="h-8 w-8 text-primary mb-2" />
                <h4 className="font-bold">Certified Pro</h4>
                <p className="text-sm text-muted-foreground text-center">Professional training and certification</p>
              </div>
            </div>
            
            <div className="pt-4">
              <Button asChild size="lg" className="gap-2 group">
                <Link href={ROUTES.ABOUT}>
                  Read Full Bio
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 