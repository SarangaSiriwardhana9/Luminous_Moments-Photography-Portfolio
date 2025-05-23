"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { OptimizedImage } from "@/components/optimized-image"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  title: string
  description: string
  imageSrc: string
  additionalImages?: string[]
  href: string
  price?: string
  className?: string
  index?: number
  id?: string
}

export function ServiceCard({ 
  title, 
  description, 
  imageSrc, 
  href, 
  price, 
  className,
  index = 0 
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={className}
    >
      <Card className="overflow-hidden h-full flex flex-col">
        <div className="relative h-52 md:h-64 w-full">
          <OptimizedImage
            src={imageSrc}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/80 to-transparent"></div>
          {price && (
            <div className="absolute top-4 right-4 bg-primary text-primary-foreground py-1 px-3 rounded-full text-sm font-medium">
              {price}
            </div>
          )}
        </div>
        <CardHeader className="relative">
          <CardTitle className="text-xl">{title}</CardTitle>
          {price && (
            <CardDescription>Starting at {price}</CardDescription>
          )}
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
        <CardFooter>
          <Button asChild className="w-full gap-2 group">
            <Link href={href}>
              Learn More
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

export const ServiceCardHover = React.memo(function ServiceCardHoverComponent({ 
  title, 
  description, 
  imageSrc, 
  additionalImages = [],
  href, 
  price, 
  className,
  index = 0,
}: ServiceCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [isHovering, setIsHovering] = React.useState(false);
  const images = React.useMemo(() => 
    additionalImages && additionalImages.length > 0 ? additionalImages : [imageSrc], 
    [additionalImages, imageSrc]
  );
  
  React.useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (isHovering && images.length > 1) {
      interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 1500);
    } else {
      setCurrentImageIndex(0);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isHovering, images]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={cn("group", className)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="relative h-80 md:h-96 w-full overflow-hidden rounded-lg">
        <OptimizedImage
          src={images[currentImageIndex]}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center transition-all duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/80 to-black/20 opacity-80">
          {price && (
            <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground py-1 px-3 rounded-full text-sm font-medium">
              Starting at {price}
            </div>
          )}
        </div>
        <div className="absolute bottom-0 left-0 p-6 w-full">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-white/90 text-sm mb-4 line-clamp-3">{description}</p>
          <Button asChild size="sm" variant="secondary" className="gap-2 group/btn">
            <Link href={href}>
              Learn More
              <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  )
}) 