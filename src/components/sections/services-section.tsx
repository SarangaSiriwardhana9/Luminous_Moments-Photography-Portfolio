import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { ServiceCardHover } from "@/components/service-card"
import { ROUTES, SERVICES } from "@/constants"

export function ServicesSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block bg-primary/10 text-primary font-medium rounded-full px-4 py-1 text-sm mb-4">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Comprehensive Photography Services</h2>
          <p className="text-muted-foreground text-lg">
            From weddings and graduations to birthdays and corporate events, we offer a range of photography services
            to capture every important moment of your life journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCardHover
              key={index}
              index={index}
              title={service.title}
              description={service.description}
              imageSrc={service.imageSrc}
              href={service.href}
              price={service.price}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg" className="gap-2 group">
            <Link href={ROUTES.SERVICES}>
              View All Services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
} 