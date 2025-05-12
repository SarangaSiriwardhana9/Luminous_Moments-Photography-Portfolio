"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { Moon, Sun, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const { setTheme, theme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={cn(
      "w-full fixed top-0 z-50 transition-all duration-300",
      scrolled ? "bg-background/80 backdrop-blur-md py-3 shadow-md" : "bg-transparent py-6"
    )}>
      <div className="container flex items-center justify-between">
        <Link href="/" className="font-bold text-2xl tracking-tight">
          Luminous <span className="text-primary">Moments</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/">Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Portfolio</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/portfolio/weddings" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Weddings</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Stunning captures of Sri Lankan wedding ceremonies
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/portfolio/graduations" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Graduations</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Capturing academic milestones and achievements
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/portfolio/birthdays" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Birthdays</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Birthday celebrations from kids to milestone events
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/portfolio/engagements" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Engagements</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Beautiful pre-wedding and engagement photoshoots
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/portfolio/cultural" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Cultural Events</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Capturing the rich heritage of Sri Lankan ceremonies
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/portfolio/corporate" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Corporate</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Professional coverage of corporate events and functions
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/services/wedding-photography" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Wedding Photography</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Full coverage of your special day
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/services/graduation-photography" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Graduation Photography</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Commemorate your academic achievements
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/services/birthday-photography" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Birthday Photography</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Capture the joy of birthday celebrations
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/services/engagement-shoots" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Engagement Sessions</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Pre-wedding shoots to announce your commitment
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/services/corporate-photography" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Corporate Events</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Professional coverage for business functions
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/services/pricing" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Pricing & Packages</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            View our complete pricing and package details
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/about">About</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/contact">Contact</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          
          <Button asChild>
            <Link href="/contact">Book Now</Link>
          </Button>
        </div>
        
        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[385px]">
            <nav className="flex flex-col gap-4 mt-8">
              <Link href="/" className="px-3 py-2 text-lg hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/portfolio/weddings" className="px-3 py-2 text-lg hover:text-primary transition-colors">
                Weddings
              </Link>
              <Link href="/portfolio/graduations" className="px-3 py-2 text-lg hover:text-primary transition-colors">
                Graduations
              </Link>
              <Link href="/portfolio/birthdays" className="px-3 py-2 text-lg hover:text-primary transition-colors">
                Birthdays
              </Link>
              <Link href="/portfolio/engagements" className="px-3 py-2 text-lg hover:text-primary transition-colors">
                Engagements
              </Link>
              <Link href="/portfolio/cultural" className="px-3 py-2 text-lg hover:text-primary transition-colors">
                Cultural Events
              </Link>
              <Link href="/portfolio/corporate" className="px-3 py-2 text-lg hover:text-primary transition-colors">
                Corporate
              </Link>
              <Link href="/about" className="px-3 py-2 text-lg hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/services" className="px-3 py-2 text-lg hover:text-primary transition-colors">
                Services
              </Link>
              <Link href="/contact" className="px-3 py-2 text-lg hover:text-primary transition-colors">
                Contact
              </Link>
              <div className="flex justify-between items-center mt-4 px-3">
                <Button variant="outline" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                  <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
                <Button asChild>
                  <Link href="/contact">Book Now</Link>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
} 