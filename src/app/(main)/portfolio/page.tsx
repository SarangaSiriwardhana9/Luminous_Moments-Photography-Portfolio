import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { IMAGES, ROUTES, PORTFOLIO_DATA } from "@/constants";
import { GalleryImage } from "@/constants/types";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Portfolio | LuminousMoments",
  description: "Browse our portfolio of photography work from across Sri Lanka including weddings, graduations, birthdays, and more.",
};

export default function PortfolioPage() {
 
  const categories = [
    { name: "All", href: ROUTES.PORTFOLIO },
    { name: "Weddings", href: ROUTES.PORTFOLIO_WEDDINGS },
    { name: "Graduations", href: ROUTES.PORTFOLIO_GRADUATIONS },
    { name: "Birthdays", href: ROUTES.PORTFOLIO_BIRTHDAYS },
    { name: "Engagements", href: ROUTES.PORTFOLIO_ENGAGEMENTS },
    { name: "Cultural", href: ROUTES.PORTFOLIO_CULTURAL },
    { name: "Corporate", href: ROUTES.PORTFOLIO_CORPORATE },
  ];

 
  const allPortfolioImages = Object.values(PORTFOLIO_DATA).reduce<GalleryImage[]>((acc, category) => {
    return [...acc, ...(category.images || [])];
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
 

      <main>
        {/* Hero Banner */}
        <section className="relative h-[300px] md:h-[400px]">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <Image 
            src={IMAGES.HERO_BG} 
            alt="Portfolio header image"
            fill
            className="object-cover"
            priority
          />
          <div className="relative z-20 container h-full flex flex-col justify-center items-center text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Portfolio</h1>
            <p className="text-lg md:text-xl max-w-2xl">
              Browse through our collection of photographs capturing the beauty and essence of special moments across Sri Lanka.
            </p>
          </div>
        </section>

        {/* Category Navigation */}
        <section className="py-8 bg-muted/30">
          <div className="container">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button 
                  key={category.name}
                  variant={category.name === "All" ? "default" : "outline"}
                  asChild
                  className="rounded-full"
                >
                  <Link href={category.href}>
                    {category.name}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Gallery */}
        <section className="py-12">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {allPortfolioImages.map((image: GalleryImage, index: number) => (
                <div key={index} className="group relative overflow-hidden rounded-lg shadow-md h-[300px] md:h-[350px]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {image.tags?.map((tag: string, tagIndex: number) => (
                        <span key={tagIndex} className="text-white text-xs font-semibold bg-primary/90 px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-white text-lg font-medium">{image.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary/10">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to create your own memories?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Let us help you capture your special moments with our professional photography services.
            </p>
            <Button asChild size="lg" className="gap-2 group">
              <Link href={ROUTES.SERVICES}>
                View Our Services
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

 
    </div>
  );
} 