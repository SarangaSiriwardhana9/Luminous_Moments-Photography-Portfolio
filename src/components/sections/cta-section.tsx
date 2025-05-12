import { Button } from "@/components/ui/button"
import { ArrowRight, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { IMAGES, ROUTES } from "@/constants"

export function CTASection() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Book Your Photography Session?</h2>
            <p className="text-primary-foreground/90 text-lg">
              Let's create beautiful memories together. Contact us to check availability for your special day
              and learn more about our customized photography packages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" variant="secondary" className="gap-2 group">
                <Link href={ROUTES.CONTACT}>
                  Book a Consultation
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/20 hover:text-white gap-2 group">
                <Link href={ROUTES.PORTFOLIO}>
                  View Portfolio
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <Image 
              src={IMAGES.CTA_IMAGE} 
              alt="Photography session in Sri Lanka" 
              width={600}
              height={400}
              className="rounded-lg object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-background text-foreground p-6 rounded-lg shadow-lg">
              <div className="flex items-center gap-4">
                <div className="bg-primary p-4 rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Limited Availability</div>
                  <div className="font-bold">Book Now for {new Date().getFullYear()}-{new Date().getFullYear() + 1}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 