import dynamic from 'next/dynamic';
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/hero-section"

 
const AboutSection = dynamic(() => import('@/components/sections/about-section').then(mod => mod.AboutSection));
const PhotographerBioSection = dynamic(() => import('@/components/sections/photographer-bio-section').then(mod => mod.PhotographerBioSection));
const ServicesSection = dynamic(() => import('@/components/sections/services-section').then(mod => mod.ServicesSection));
const PortfolioSection = dynamic(() => import('@/components/sections/portfolio-section').then(mod => mod.PortfolioSection));
const TestimonialsSection = dynamic(() => import('@/components/sections/testimonials-section').then(mod => mod.TestimonialsSection));
const CTASection = dynamic(() => import('@/components/sections/cta-section').then(mod => mod.CTASection));

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main>
        <HeroSection />
        <AboutSection />
        <PhotographerBioSection />
        <ServicesSection />
        <PortfolioSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
}