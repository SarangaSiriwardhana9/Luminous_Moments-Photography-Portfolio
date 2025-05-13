import { Button } from "@/components/ui/button";
import { ROUTES, SERVICES_DATA } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ServiceFeatures } from "@/components/service-features";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  // Return an array of all possible service slugs
  return Object.keys(SERVICES_DATA).map(slug => ({
    slug: slug
  }));
}

export async function generateMetadata({ params: paramsPromise }: ServicePageProps): Promise<Metadata> {
  const params = await paramsPromise;
  const slug = params.slug;
  const service = SERVICES_DATA[slug];
  
  if (!service) {
    return {
      title: "Service Not Found",
      description: "The requested service could not be found.",
    };
  }
  
  return {
    title: `${service.title} | LuminousMoments`,
    description: service.shortDescription,
  };
}

export default async function ServicePage({ params: paramsPromise }: ServicePageProps) {
  const params = await paramsPromise;
  const slug = params.slug;
  const service = SERVICES_DATA[slug];
  
  if (!service) {
    notFound();
  }
  
  // Determine if this is a specific service type
  const isWeddingPhotography = slug === "wedding-photography";
  const isGraduationPhotography = slug === "graduation-photography";
  const orderClass = isGraduationPhotography ? "order-2 lg:order-1" : "";
  const imageOrderClass = isGraduationPhotography ? "order-1 lg:order-2" : "";
  
  return (
    <div className="min-h-screen flex flex-col">
 

      <main>
        {/* Hero Banner */}
        <section className="relative h-[400px] md:h-[500px]">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <Image 
            src={service.heroImage} 
            alt={service.title}
            fill
            className="object-cover"
            priority
          />
          <div className="relative z-20 container h-full flex flex-col justify-center items-center text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
            <p className="text-lg md:text-xl max-w-2xl">
              {service.description}
            </p>
          </div>
        </section>

        {/* Additional Images Showcase */}
        <section className="py-12 bg-muted/20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-lg overflow-hidden">
                <Image 
                  src={service.heroImage} 
                  alt={`${service.title} main image`}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full aspect-[4/3] hover:scale-105 transition-transform duration-300"
                />
              </div>
              {service.additionalImages.map((image, index) => (
                <div key={index} className="rounded-lg overflow-hidden">
                  <Image 
                    src={image} 
                    alt={`${service.title} image ${index + 1}`}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full aspect-[4/3] hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Overview */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={orderClass}>
                <h2 className="text-3xl font-bold mb-6">
                  {isWeddingPhotography 
                    ? "Your Wedding Story, Beautifully Told"
                    : isGraduationPhotography
                    ? "Celebrate Your Academic Achievement"
                    : `Professional ${service.title}`}
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  {isWeddingPhotography 
                    ? "Your wedding day is one of the most important days of your life. Our wedding photography service is designed to capture every meaningful moment, from the nervous anticipation before the ceremony to the joyful celebration afterward."
                    : isGraduationPhotography
                    ? "Graduation is a significant milestone that represents years of dedication and hard work. Our graduation photography services are designed to capture the pride and joy of this special achievement for both graduates and their families."
                    : `Our ${service.title.toLowerCase()} services are tailored to capture the important moments and details that make each occasion special. With professional equipment and experienced photographers, we ensure high-quality images that will preserve your memories for years to come.`}
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  {isWeddingPhotography
                    ? "We blend traditional portraiture with candid documentary-style photography to create a comprehensive visual narrative of your special day, preserving memories that will last a lifetime."
                    : isGraduationPhotography
                    ? "From formal portraits in your cap and gown to candid moments during the ceremony and celebration, we create a comprehensive collection of images that tell the story of your graduation day."
                    : "We combine technical expertise with creative vision to deliver images that exceed expectations, focusing on both the planned moments and the spontaneous interactions that make each event unique and personal."}
                </p>

                <ServiceFeatures features={service.features} />
              </div>
              
              <div className={`relative rounded-lg overflow-hidden h-[500px] ${imageOrderClass}`}>
                <Image 
                  src={service.detailImage} 
                  alt={`${service.title} detail image`} 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-block bg-primary/10 text-primary font-medium rounded-full px-4 py-1 text-sm mb-4">
                Our Packages
              </div>
              <h2 className="text-3xl font-bold mb-4">{service.title} Packages</h2>
              <p className="text-muted-foreground">
                Choose the perfect package for your {service.title.toLowerCase()}, or contact us for a custom quote tailored to your specific needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              {service.packages.map((pkg, index) => (
                <div 
                  key={index} 
                  className={`rounded-lg overflow-hidden border ${pkg.highlighted ? 'border-primary shadow-lg relative' : 'border-border'}`}
                >
                  {pkg.highlighted && (
                    <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold py-1 px-3 rounded-bl-lg">
                      Most Popular
                    </div>
                  )}
                  <div className={`p-6 ${pkg.highlighted ? 'bg-primary/5' : 'bg-background'}`}>
                    <h3 className="text-xl font-bold">{pkg.name}</h3>
                    <div className="text-3xl font-bold mt-2 mb-2">{pkg.price}</div>
                    <p className="text-sm text-muted-foreground">{pkg.description}</p>
                  </div>
                  <div className="p-6 bg-background">
                    <ul className="space-y-3">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <div className="rounded-full bg-primary/10 p-1">
                            <Check className="h-4 w-4 text-primary" />
                          </div>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <Button asChild size="lg" className="w-full" variant={pkg.highlighted ? "default" : "outline"}>
                        <Link href={ROUTES.CONTACT}>Book This Package</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                Need something different? We offer customized packages to suit your specific requirements.
              </p>
              <Button asChild variant="outline" size="lg">
                <Link href={ROUTES.CONTACT}>Contact for Custom Package</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-16">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">{service.title} Gallery</h2>
              <p className="text-muted-foreground">
                Browse through some of our favorite {service.title.toLowerCase()} photographs from across Sri Lanka.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {service.galleryImages.slice(0, 6).map((image, index) => (
                <div key={index} className="aspect-square rounded-lg overflow-hidden">
                  <Image 
                    src={image.src} 
                    alt={image.alt} 
                    width={400} 
                    height={400} 
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button asChild size="lg" className="gap-2 group">
                <Link href={service.portfolioLink}>
                  View Full {service.title} Portfolio
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary/10">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Book Your {service.title}?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Contact us today to check availability and schedule a consultation.
            </p>
            <Button asChild size="lg">
              <Link href={ROUTES.CONTACT}>Contact Us Now</Link>
            </Button>
          </div>
        </section>
      </main>

 
    </div>
  );
} 