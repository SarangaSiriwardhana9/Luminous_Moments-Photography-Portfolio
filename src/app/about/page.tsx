import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { IMAGES } from "@/constants"
import { Button } from "@/components/ui/button"
import { Award, Users, Star, Camera, ImageIcon, Heart, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-muted">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Hasaranga Suloksha</h1>
              <p className="text-2xl text-muted-foreground mb-6">Professional Photographer</p>
              <p className="text-lg text-muted-foreground">
                Capturing the authentic moments and cultural heritage of Sri Lanka through the lens of artistic vision and technical expertise.
              </p>
            </div>
            <div className="relative h-[500px] w-full rounded-lg overflow-hidden">
              <Image 
                src={IMAGES.PHOTOGRAPHER_PORTRAIT} 
                alt="Hasaranga Suloksha - Professional Photographer" 
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Bio Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-3xl font-bold mb-6">My Journey</h2>
              
              <div className="space-y-6">
                <p className="text-muted-foreground">
                  Born and raised in the cultural heart of Sri Lanka, I developed a deep appreciation for the rich traditions 
                  and vibrant celebrations that define our heritage. My journey as a photographer began over a decade ago 
                  with a simple passion for capturing moments that tell stories.
                </p>
                
                <p className="text-muted-foreground">
                  After studying fine arts and digital media at the University of Colombo, I apprenticed with several 
                  renowned photographers across Asia, honing my craft and developing my unique style. This blend of formal 
                  education and practical experience has shaped my approach to photography.
                </p>
                
                <p className="text-muted-foreground">
                  My philosophy is simple: to document life authentically while bringing an artistic vision that elevates 
                  everyday moments into timeless memories. Whether it's the intricate details of a traditional Sri Lankan 
                  wedding ceremony or the spontaneous joy of a child's birthday celebration, I strive to create images that 
                  not only look beautiful but also capture genuine emotions and connections.
                </p>
                
                <p className="text-muted-foreground">
                  Over the years, I've had the privilege of documenting thousands of special moments for clients across the island. 
                  From elaborate weddings in Colombo's grand hotels to intimate family gatherings in rural villages, 
                  I bring the same level of dedication and attention to detail to every shoot.
                </p>
                
                <blockquote className="border-l-4 border-primary pl-4 py-2 my-6 italic text-xl">
                  "Photography is not just my profession, it's my passion. I believe in capturing authentic moments that tell your unique story."
                </blockquote>
                
                <p className="text-muted-foreground">
                  My approach combines traditional portraiture with candid storytelling, ensuring that every image not only 
                  looks beautiful but also captures the genuine emotions and connections of your special day. I work closely 
                  with clients to understand their vision and preferences, then bring my technical expertise and artistic eye 
                  to create photographs that exceed expectations.
                </p>
              </div>
              
              <div className="pt-6">
                <h3 className="text-2xl font-bold mb-4">Professional Background</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="rounded-full bg-primary/10 p-1 mt-1">
                      <Heart className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <span className="font-medium">Fine Arts & Digital Media degree</span>
                      <p className="text-muted-foreground">University of Colombo, 2012</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="rounded-full bg-primary/10 p-1 mt-1">
                      <Heart className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <span className="font-medium">Professional Certification in Advanced Photography</span>
                      <p className="text-muted-foreground">Royal Photography Society, 2014</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="rounded-full bg-primary/10 p-1 mt-1">
                      <Heart className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <span className="font-medium">Mentor for Young Photographers</span>
                      <p className="text-muted-foreground">Sri Lanka Photography Association, 2018-Present</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="rounded-full bg-primary/10 p-1 mt-1">
                      <Heart className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <span className="font-medium">International Photography Awards</span>
                      <p className="text-muted-foreground">Featured in multiple exhibitions across Asia</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Professional Credentials</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Camera className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Experience</div>
                      <div className="text-muted-foreground">10+ Years Professional</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <ImageIcon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Photos Delivered</div>
                      <div className="text-muted-foreground">100,000+ Images</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Clients Served</div>
                      <div className="text-muted-foreground">500+ Happy Clients</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Awards</div>
                      <div className="text-muted-foreground">Multiple Photography Awards</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Equipment</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Professional Sony & Canon DSLR cameras</li>
                  <li>• Wide range of prime and zoom lenses</li>
                  <li>• Studio lighting equipment</li>
                  <li>• Advanced photo editing software</li>
                  <li>• Drone for aerial photography</li>
                  <li>• High-end backup equipment</li>
                </ul>
              </div>
              
              <div className="bg-primary text-primary-foreground p-6 rounded-lg">
                <div className="flex items-center gap-4 mb-4">
                  <Clock className="h-6 w-6" />
                  <h3 className="text-xl font-bold">Book a Session</h3>
                </div>
                <p className="mb-4">Ready to create beautiful memories together? Contact me to check availability.</p>
                <Button asChild variant="secondary" className="w-full">
                  <Link href="/contact">Contact Me</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Gallery Teaser */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">My Work</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image 
                src={IMAGES.PORTFOLIO_1} 
                alt="Portfolio sample 1" 
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image 
                src={IMAGES.PORTFOLIO_2} 
                alt="Portfolio sample 2" 
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image 
                src={IMAGES.PORTFOLIO_3} 
                alt="Portfolio sample 3" 
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image 
                src={IMAGES.PORTFOLIO_4} 
                alt="Portfolio sample 4" 
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Button asChild>
              <Link href="/portfolio">View Full Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
} 