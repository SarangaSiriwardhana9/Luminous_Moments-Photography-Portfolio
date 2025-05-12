import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { TESTIMONIALS } from "@/constants"

export function TestimonialsSection() {
  return (
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
        
        <TestimonialCarousel testimonials={TESTIMONIALS} />
      </div>
    </section>
  )
} 