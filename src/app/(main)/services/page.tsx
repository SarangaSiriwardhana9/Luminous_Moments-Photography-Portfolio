import { IMAGES, ROUTES, SERVICES } from "@/constants"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Camera, Clock, Heart, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
 
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-muted">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Photography Services</h1>
            <p className="text-lg text-muted-foreground">
              Professional photography services tailored to your unique needs, from weddings and graduations to 
              corporate events and cultural ceremonies across Sri Lanka.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {SERVICES.map((service, index) => (
              <div key={index} className="group">
                <div className="relative h-64 mb-6 overflow-hidden rounded-lg">
                  <Image 
                    src={service.imageSrc} 
                    alt={service.title} 
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-primary/10 text-primary text-xs font-medium rounded-full px-3 py-1 inline-block mb-2">
                      Starting at {service.price}
                    </div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4">{service.description}</p>
                
                <Button asChild variant="outline" className="group">
                  <Link href={service.href} className="flex items-center gap-2">
                    Learn More
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground">
              Our simple process ensures that your photography experience is smooth, enjoyable, and exceeds your expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-6 rounded-lg text-center">
              <div className="bg-primary/10 text-primary font-bold rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Consultation</h3>
              <p className="text-muted-foreground">
                We begin with a detailed consultation to understand your vision, preferences, and specific requirements.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg text-center">
              <div className="bg-primary/10 text-primary font-bold rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Photoshoot</h3>
              <p className="text-muted-foreground">
                Our professional team captures your special moments with creativity, technical expertise, and attention to detail.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg text-center">
              <div className="bg-primary/10 text-primary font-bold rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Delivery</h3>
              <p className="text-muted-foreground">
                You receive professionally edited, high-resolution images in digital format and optional printed albums.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Service - Wedding */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-primary/10 text-primary font-medium rounded-full px-4 py-1 text-sm">
                Featured Service
              </div>
              <h2 className="text-3xl font-bold">Wedding Photography</h2>
              <p className="text-muted-foreground">
                Our comprehensive wedding photography service captures every moment of your special day, from pre-wedding 
                preparations to the last dance. We blend traditional portraiture with candid documentary-style photography 
                to tell the complete story of your celebration.
              </p>
              
              <ul className="space-y-3">
                {[
                  "Pre-wedding consultation and venue visit",
                  "Engagement/pre-wedding photoshoot",
                  "Full-day coverage (up to 12 hours)",
                  "Two professional photographers",
                  "Traditional & candid photography styles",
                  "300+ professionally edited digital images",
                  "Online gallery for sharing with family and friends",
                  "Premium photo album options available",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="rounded-full bg-primary/10 p-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="pt-4">
                <Button asChild size="lg" className="gap-2 group">
                  <Link href={ROUTES.SERVICES_WEDDING}>
                    View Wedding Packages
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image 
                src={IMAGES.SERVICE_WEDDING} 
                alt="Wedding Photography" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Service - Graduation */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-[500px] rounded-lg overflow-hidden">
              <Image 
                src={IMAGES.SERVICE_GRADUATION} 
                alt="Graduation Photography" 
                fill
                className="object-cover"
              />
            </div>
            
            <div className="order-1 lg:order-2 space-y-6">
              <div className="inline-block bg-primary/10 text-primary font-medium rounded-full px-4 py-1 text-sm">
                Popular Package
              </div>
              <h2 className="text-3xl font-bold">Graduation Photography</h2>
              <p className="text-muted-foreground">
                Commemorate your academic achievements with our professional graduation photography services. We capture both 
                formal portraits and candid moments during this significant milestone in your educational journey.
              </p>
              
              <ul className="space-y-3">
                {[
                  "Pre-ceremony portraits with family and friends",
                  "Ceremony coverage (processional, degree conferral, etc.)",
                  "Post-ceremony celebration photos",
                  "Group shots with classmates and faculty",
                  "Traditional cap toss and celebration moments",
                  "100+ professionally edited digital images",
                  "Online gallery for easy sharing",
                  "Print packages available",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="rounded-full bg-primary/10 p-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="pt-4">
                <Button asChild size="lg" className="gap-2 group">
                  <Link href={ROUTES.SERVICES_GRADUATION}>
                    View Graduation Packages
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-muted-foreground">
              Our photography approach combines technical expertise, artistic vision, and personalized service to create stunning images that capture your special moments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-muted/20 rounded-lg">
              <div className="bg-primary/10 p-4 rounded-full inline-flex mb-4">
                <Camera className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Professional Equipment</h3>
              <p className="text-muted-foreground">
                We use only high-end professional cameras, lenses, and lighting equipment to ensure exceptional image quality in any environment.
              </p>
            </div>
            
            <div className="p-6 bg-muted/20 rounded-lg">
              <div className="bg-primary/10 p-4 rounded-full inline-flex mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Personalized Experience</h3>
              <p className="text-muted-foreground">
                From the initial consultation to the final delivery, we tailor our services to your unique preferences, style, and vision.
              </p>
            </div>
            
            <div className="p-6 bg-muted/20 rounded-lg">
              <div className="bg-primary/10 p-4 rounded-full inline-flex mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">10+ Years Experience</h3>
              <p className="text-muted-foreground">
                With over a decade of professional photography experience across Sri Lanka, we bring expertise and creativity to every project.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Ready to Book Your Photography Session?</h2>
              <p className="text-primary-foreground/90">
                Contact us today to discuss your specific needs and check our availability for your event date.
                We&apos;re here to help create beautiful memories that will last a lifetime.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" variant="secondary">
                  <Link href={ROUTES.CONTACT}>Book a Consultation</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/20 hover:text-white">
                  <Link href={ROUTES.PORTFOLIO}>View Our Portfolio</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -top-6 -left-6 bg-background text-foreground p-6 rounded-lg shadow-lg z-10">
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
              <Image 
                src={IMAGES.CTA_IMAGE} 
                alt="Book your photography session" 
                width={600}
                height={400}
                className="rounded-lg object-cover relative z-0"
              />
            </div>
          </div>
        </div>
      </section>
      
 
    </div>
  );
} 