// src/app/page.tsx
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { PhotographerBioSection } from "@/components/sections/photographer-bio-section"
import { ServicesSection } from "@/components/sections/services-section"
import { PortfolioSection } from "@/components/sections/portfolio-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { CTASection } from "@/components/sections/cta-section"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Main Content Sections */}
      <HeroSection />
      <AboutSection />
      <PhotographerBioSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <CTASection />
      
      <Footer />
    </div>
  );
}