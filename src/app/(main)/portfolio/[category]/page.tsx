import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { PORTFOLIO_DATA, ROUTES } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { GalleryImage } from "@/constants/types";

interface PortfolioPageProps {
  params: {
    category: string;
  };
}

export function generateStaticParams() {
 
  return Object.keys(PORTFOLIO_DATA).map(category => ({
    category: category
  }));
}

export async function generateMetadata({ params }: PortfolioPageProps): Promise<Metadata> {
  const categorySlug = (await params).category;
  const categoryData = PORTFOLIO_DATA[categorySlug];
  
  if (!categoryData) {
    return {
      title: "Portfolio Category Not Found | LuminousMoments",
      description: "The requested portfolio category could not be found.",
    };
  }
  
  return {
    title: `${categoryData.title} Portfolio | LuminousMoments`,
    description: categoryData.description || categoryData.shortDescription,
  };
}

export default async function PortfolioCategoryPage({ params }: PortfolioPageProps) {
  const category = (await params).category;
  const categoryData = PORTFOLIO_DATA[category];
  
  if (!categoryData) {
    notFound();
  }
  
  const { title, description, images, heroImage } = categoryData;
 
  const categories = [
    { id: "all", name: "All Categories", href: ROUTES.PORTFOLIO },
    { id: "weddings", name: "Weddings", href: ROUTES.PORTFOLIO_WEDDINGS },
    { id: "graduations", name: "Graduations", href: ROUTES.PORTFOLIO_GRADUATIONS },
    { id: "birthdays", name: "Birthdays", href: ROUTES.PORTFOLIO_BIRTHDAYS },
    { id: "engagements", name: "Engagements", href: ROUTES.PORTFOLIO_ENGAGEMENTS },
    { id: "cultural", name: "Cultural", href: ROUTES.PORTFOLIO_CULTURAL },
    { id: "corporate", name: "Corporate", href: ROUTES.PORTFOLIO_CORPORATE },
  ];

 
  const isCurrentCategory = (id: string) => id === category || (id === "all" && category === undefined);

  return (
    <div className="min-h-screen flex flex-col">
 

      <main>
        {/* Hero Banner */}
        <section className="relative h-[300px] md:h-[400px]">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <Image 
            src={heroImage} 
            alt={`${title} portfolio`}
            fill
            className="object-cover"
            priority
          />
          <div className="relative z-20 container h-full flex flex-col justify-center items-center text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
            <p className="text-lg md:text-xl max-w-2xl">
              {description}
            </p>
          </div>
        </section>

        {/* Portfolio Navigation */}
        <section className="py-8 bg-muted/30">
          <div className="container">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((cat) => (
                <Button 
                  key={cat.id}
                  variant={isCurrentCategory(cat.id) ? "default" : "outline"}
                  asChild
                  className="rounded-full"
                >
                  <Link href={cat.href}>
                    {cat.name}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Description */}
        <section className="py-12">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">{title} Portfolio</h2>
              <p className="text-lg text-muted-foreground mb-6">
                {category === "weddings" 
                  ? "Our wedding photography portfolio showcases the beautiful diversity of Sri Lankan weddings, from traditional Poruwa ceremonies to modern celebrations. We capture the essence of each couple's unique love story through our artistic and candid photography approach."
                  : category === "graduations"
                  ? "Our graduation photography portfolio showcases the pride and joy of academic achievements across Sri Lanka. From university convocations to school graduations, we capture these milestone moments with professionalism and creativity."
                  : description}
              </p>
              <p className="text-lg text-muted-foreground">
                Browse through our collection of {title.toLowerCase()} photographs to see our work and the quality we deliver to all our clients.
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio Gallery */}
        <section className="py-8">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((image, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg shadow-md">
                  <div className="aspect-[3/4] relative">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <div className="flex flex-wrap gap-2 mb-2">
                        {image.tags?.map((tag, tagIndex) => (
                          <span key={tagIndex} className="text-white text-xs font-semibold bg-primary/90 px-2 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p className="text-white text-lg font-medium">{image.alt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary/10">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to capture your {title.toLowerCase()}?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Let our professional photographers document your special moments with creativity and expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gap-2 group">
                <Link href={categoryData.serviceLink}>
                  View {title} Packages
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={ROUTES.CONTACT}>Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

 
    </div>
  );
} 