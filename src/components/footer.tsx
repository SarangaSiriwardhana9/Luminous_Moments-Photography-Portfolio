import Link from "next/link"
import { InstagramIcon, FacebookIcon, TwitterIcon, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ROUTES, CONTACT } from "@/constants"

export function Footer() {
  return (
    <footer className="bg-muted py-16">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="space-y-4">
          <h3 className="font-bold text-2xl tracking-tight">
            Luminous <span className="text-primary">Moments</span>
          </h3>
          <p className="text-muted-foreground max-w-xs">
            Capturing life's beautiful moments through the lens of Hasaranga Suloksha, professional photographer based in Sri Lanka.
          </p>
          <div className="flex gap-4">
            <Button size="icon" variant="ghost" asChild>
              <Link href={CONTACT.SOCIAL.INSTAGRAM} target="_blank" aria-label="Instagram">
                <InstagramIcon className="h-5 w-5" />
              </Link>
            </Button>
            <Button size="icon" variant="ghost" asChild>
              <Link href={CONTACT.SOCIAL.FACEBOOK} target="_blank" aria-label="Facebook">
                <FacebookIcon className="h-5 w-5" />
              </Link>
            </Button>
            <Button size="icon" variant="ghost" asChild>
              <Link href={CONTACT.SOCIAL.TWITTER} target="_blank" aria-label="Twitter">
                <TwitterIcon className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="font-medium text-lg">Quick Links</h3>
          <nav className="flex flex-col gap-2">
            <Link href={ROUTES.HOME} className="text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <Link href={ROUTES.PORTFOLIO} className="text-muted-foreground hover:text-foreground transition-colors">
              Portfolio
            </Link>
            <Link href={ROUTES.SERVICES} className="text-muted-foreground hover:text-foreground transition-colors">
              Services & Packages
            </Link>
            <Link href={ROUTES.ABOUT} className="text-muted-foreground hover:text-foreground transition-colors">
              About Hasaranga
            </Link>
            <Link href={ROUTES.TESTIMONIALS} className="text-muted-foreground hover:text-foreground transition-colors">
              Client Testimonials
            </Link>
            <Link href={ROUTES.CONTACT} className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>
        </div>
        
        <div className="space-y-4">
          <h3 className="font-medium text-lg">Services</h3>
          <nav className="flex flex-col gap-2">
            <Link href={ROUTES.SERVICES_WEDDING} className="text-muted-foreground hover:text-foreground transition-colors">
              Wedding Photography
            </Link>
            <Link href={ROUTES.SERVICES_GRADUATION} className="text-muted-foreground hover:text-foreground transition-colors">
              Graduation Photography
            </Link>
            <Link href={ROUTES.SERVICES_BIRTHDAY} className="text-muted-foreground hover:text-foreground transition-colors">
              Birthday Photography
            </Link>
            <Link href={ROUTES.SERVICES_ENGAGEMENT} className="text-muted-foreground hover:text-foreground transition-colors">
              Engagement Sessions
            </Link>
            <Link href={ROUTES.SERVICES_CORPORATE} className="text-muted-foreground hover:text-foreground transition-colors">
              Corporate Events
            </Link>
            <Link href={ROUTES.SERVICES_CULTURAL} className="text-muted-foreground hover:text-foreground transition-colors">
              Cultural Ceremonies
            </Link>
          </nav>
        </div>
        
        <div className="space-y-4">
          <h3 className="font-medium text-lg">Contact Information</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-muted-foreground">
              <Mail className="h-4 w-4" />
              <span>{CONTACT.EMAIL}</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>{CONTACT.PHONE}</span>
            </div>
            <div className="flex items-start gap-3 text-muted-foreground">
              <MapPin className="h-4 w-4 mt-1" />
              <span>{CONTACT.ADDRESS}</span>
            </div>
          </div>
        </div>
      </div>
      
      <Separator className="my-8" />
      
      <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Hasaranga Suloksha Photography. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link href={ROUTES.PRIVACY} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Privacy Policy
          </Link>
          <Link href={ROUTES.TERMS} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  )
} 