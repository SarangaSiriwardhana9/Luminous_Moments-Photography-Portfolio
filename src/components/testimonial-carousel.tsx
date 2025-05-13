"use client"

import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

type Testimonial = {
  id: string
  quote: string
  author: string
  role?: string
  avatar?: string
}

type TestimonialCarouselProps = {
  testimonials: Testimonial[]
  className?: string
}

export const TestimonialCarousel = React.memo(function TestimonialCarouselComponent({ testimonials, className }: TestimonialCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [prevBtnEnabled, setPrevBtnEnabled] = React.useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = React.useState(false)
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([])

  const scrollPrev = React.useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = React.useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])
  const scrollTo = React.useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi])

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
  }, [emblaApi])

  React.useEffect(() => {
    if (!emblaApi) return
    
    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
    
    return () => {
      if (emblaApi) {
        emblaApi.off("select", onSelect)
        emblaApi.off("reInit", onSelect)
      }
    }
  }, [emblaApi, onSelect])

  if (!testimonials || testimonials.length === 0) {
    return null
  }

  return (
    <div className={cn("space-y-8", className)}>
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((testimonial) => (
              <div className="flex-[0_0_100%] min-w-0 pl-4 relative" key={testimonial.id}>
                <Card className="border-none shadow-none bg-muted/50">
                  <CardContent className="pt-6 pb-8 px-8">
                    <Quote className="h-10 w-10 text-primary/20 mb-4" />
                    <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-6">
                      {testimonial.quote}
                    </blockquote>
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                        <AvatarFallback>{testimonial.author.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold">{testimonial.author}</div>
                        {testimonial.role && (
                          <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
        
        {testimonials.length > 1 && (
          <>
            <div className="flex justify-center mt-8 gap-2">
              <Button
                size="icon"
                variant="outline"
                className="rounded-full"
                onClick={scrollPrev}
                disabled={!prevBtnEnabled}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="rounded-full"
                onClick={scrollNext}
                disabled={!nextBtnEnabled}
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
      
            <div className="flex justify-center gap-2 mt-4">
              {scrollSnaps.map((_, index) => (
                <Button
                  key={index}
                  size="sm"
                  variant="ghost"
                  className={cn(
                    "w-2 h-2 p-0 rounded-full transition-colors",
                    index === selectedIndex ? "bg-primary hover:bg-primary/90" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  )}
                  onClick={() => scrollTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}) 