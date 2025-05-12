// src/app/page.tsx
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { ServiceCardHover } from "@/components/service-card"
import { ImageGallery } from "@/components/image-gallery"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Image as ImageIcon, Camera, Clock, Award, Users, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* About Section */}
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
                  <Link href="/about">
                    Learn More About Me
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[500px] w-full rounded-lg overflow-hidden">
                <Image 
                  src="/images/about-photographer.jpg" 
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
      
      {/* Photographer Bio Section */}
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
                  src="/images/photographer-portrait.jpg" 
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
                  <Link href="/about">
                    Read Full Bio
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
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
            {services.map((service, index) => (
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
              <Link href="/services">
                View All Services
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Portfolio Preview Section */}
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
          
          <ImageGallery images={portfolioImages} />
          
          <div className="text-center mt-12">
            <Button asChild size="lg" className="gap-2 group">
              <Link href="/portfolio">
                Explore Full Portfolio
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-block bg-primary/10 text-primary font-medium rounded-full px-4 py-1 text-sm mb-4">
              Client Testimonials
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Clients Say</h2>
            <p className="text-muted-foreground text-lg">
              Hear directly from people who trusted us to capture their special moments.
            </p>
          </div>
          
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>
      
      {/* CTA Section */}
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
                  <Link href="/contact">
                    Book a Consultation
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/20 hover:text-white gap-2 group">
                  <Link href="/portfolio">
                    View Portfolio
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image 
                src="/images/cta-image.jpg" 
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
                    <div className="font-bold">Book Now for 2023-2024</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

// Sample data
const services = [
  {
    title: "Wedding Photography",
    description: "Comprehensive coverage of your wedding day, from preparation to reception, capturing all the important moments and details.",
    imageSrc: "/images/service-wedding.jpg",
    href: "/services/wedding-photography",
    price: "LKR 150,000"
  },
  {
    title: "Graduation Photography",
    description: "Professional graduation photos to commemorate your academic achievements, including individual portraits and group shots.",
    imageSrc: "/images/service-graduation.jpg",
    href: "/services/graduation-photography",
    price: "LKR 45,000"
  },
  {
    title: "Birthday Celebrations",
    description: "Capture the joy and excitement of birthday celebrations, from kids' parties to milestone birthdays with friends and family.",
    imageSrc: "/images/service-birthday.jpg",
    href: "/services/birthday-photography",
    price: "LKR 35,000"
  },
  {
    title: "Engagement Sessions",
    description: "Beautiful pre-wedding photoshoots to celebrate your engagement and create stunning images for your invitations.",
    imageSrc: "/images/service-engagement.jpg",
    href: "/services/engagement-shoots",
    price: "LKR 35,000"
  },
  {
    title: "Corporate Events",
    description: "Professional photography for corporate events, conferences, product launches, and team gatherings.",
    imageSrc: "/images/service-corporate.jpg",
    href: "/services/corporate-photography",
    price: "LKR 50,000"
  },
  {
    title: "Cultural Ceremonies",
    description: "Specialized photography for traditional Sri Lankan ceremonies, including Poruwa, Homecoming, and religious rituals.",
    imageSrc: "/images/service-cultural.jpg",
    href: "/services/cultural-ceremonies",
    price: "LKR 45,000"
  },
];

const portfolioImages = [
  {
    src: "/images/portfolio-1.jpg",
    alt: "Traditional Sri Lankan wedding ceremony",
    width: 800,
    height: 1200
  },
  {
    src: "/images/portfolio-2.jpg",
    alt: "University graduation ceremony",
    width: 800,
    height: 1000
  },
  {
    src: "/images/portfolio-3.jpg",
    alt: "Couple portrait in traditional attire",
    width: 800,
    height: 1100
  },
  {
    src: "/images/portfolio-4.jpg",
    alt: "Child's birthday celebration",
    width: 800,
    height: 900
  },
  {
    src: "/images/portfolio-5.jpg",
    alt: "Corporate event photography",
    width: 800,
    height: 1200
  },
  {
    src: "/images/portfolio-6.jpg",
    alt: "Cultural celebration with traditional dancers",
    width: 800,
    height: 1000
  },
];

const testimonials = [
  {
    id: "1",
    quote: "Our wedding photos are absolutely stunning. Hasaranga captured all the important moments and traditions of our Sri Lankan wedding perfectly. We couldn't be happier with the results!",
    author: "Kavindi & Rajeev",
    role: "Wedding Clients",
    avatar: "/images/testimonial-1.jpg"
  },
  {
    id: "2",
    quote: "Hasaranga did an amazing job with my graduation photos. His attention to detail and creativity made these photos something I'll cherish forever. Highly recommend!",
    author: "Dinesh Perera",
    role: "Graduation Client",
    avatar: "/images/testimonial-2.jpg"
  },
  {
    id: "3",
    quote: "Not only is the photography exceptional, but Hasaranga's service was outstanding. Always professional, on time, and made everyone feel comfortable during our corporate event.",
    author: "Malini Fernando",
    role: "Corporate Event Manager",
    avatar: "/images/testimonial-3.jpg"
  },
  {
    id: "4",
    quote: "My daughter's 1st birthday photos came out beautifully! Hasaranga has a special talent for capturing those spontaneous, joyful moments that make childhood so special.",
    author: "Priyanka & Suresh",
    role: "Birthday Party Clients",
    avatar: "/images/testimonial-4.jpg"
  },
];