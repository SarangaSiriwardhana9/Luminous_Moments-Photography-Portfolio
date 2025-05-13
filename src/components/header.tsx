"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Menu, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const mainNavItems = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { 
    href: "/services", 
    label: "Services",
    children: [
      {
        title: "Wedding Photography",
        href: "/services/wedding-photography",
        description: "Full coverage of your special day"
      },
      {
        title: "Graduation Photography",
        href: "/services/graduation-photography",
        description: "Commemorate your academic achievements"
      },
      {
        title: "Birthday Photography",
        href: "/services/birthday-photography",
        description: "Capture the joy of birthday celebrations"
      },
      {
        title: "Engagement Sessions",
        href: "/services/engagement-photography",
        description: "Pre-wedding shoots to announce your commitment"
      },
      {
        title: "Corporate Events",
        href: "/services/corporate-photography",
        description: "Professional coverage for business functions"
      },
      {
        title: "Cultural Events",
        href: "/services/cultural-photography",
        description: "Capturing traditional Sri Lankan ceremonies"
      }
    ]
  },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

const NavigationMenuTriggerStyle = cn(
  "group inline-flex h-auto w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:text-primary focus:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:text-primary data-[state=open]:text-primary"
);

export function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = React.useState(false)
  const { theme, setTheme } = useTheme()

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    
 
    handleScroll()
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled || pathname !== "/"
          ? "bg-background/80 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container">
        <div className="flex h-16 md:h-20 items-center justify-between max-w-8xl mx-auto">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl md:text-3xl font-bold   bg-primary bg-clip-text text-transparent">
                Luminous Moments 
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
            <NavigationMenu>
              <NavigationMenuList className="space-x-2 lg:space-x-4">
                {mainNavItems.map((item, index) => (
                  <NavigationMenuItem key={item.href}>
                    {item.children ? (
                      <>
                        <NavigationMenuTrigger
                          className={cn(
                            NavigationMenuTriggerStyle,
                            "text-base lg:text-lg",
                            pathname.startsWith(item.href) ? "text-primary" : (!isScrolled && pathname === "/" ? "text-white" : "text-muted-foreground")
                          )}
                        >
                          {item.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {item.children.map((child) => (
                              <li key={child.href}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={child.href}
                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                  >
                                    <div className="text-sm lg:text-base font-medium leading-none">{child.title}</div>
                                    <p className="line-clamp-2 text-sm lg:text-base leading-snug text-muted-foreground">
                                      {child.description}
                                    </p>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className={cn(
                          "text-base lg:text-lg font-medium transition-colors hover:text-primary relative py-2 px-4",
                          pathname === item.href
                            ? "text-primary"
                            : (!isScrolled && pathname === "/" ? "text-white hover:text-white/90" : "text-muted-foreground")
                        )}
                      >
                        {item.label}
                        {pathname === item.href && (
                          <motion.div
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                            layoutId="underline"
                          />
                        )}
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "mr-2",
                !isScrolled && pathname === "/" && "text-white hover:text-white/90"
              )}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-5 w-5 lg:h-6 lg:w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 lg:h-6 lg:w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button 
                asChild
                size="lg"
                variant={!isScrolled && pathname === "/" ? "outline" : "default"}
                className={cn(
                  "text-base lg:text-lg px-6 lg:px-8",
                  !isScrolled && pathname === "/" ? "border-white text-white hover:bg-white hover:text-black" : ""
                )}
              >
                <Link href="/contact">Book Now</Link>
              </Button>
            </motion.div>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-2">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent className="w-[300px] px-6">
                <SheetTitle className="text-xl font-bold mb-6">Menu</SheetTitle>
                <nav className="flex flex-col space-y-6">
                  {mainNavItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "text-lg font-medium transition-colors hover:text-primary",
                          pathname === item.href
                            ? "text-primary"
                            : "text-muted-foreground"
                        )}
                      >
                        {item.label}
                      </Link>
                      {item.children && (
                        <motion.div 
                          className="pl-6 space-y-4 border-l border-border"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                        >
                          {item.children.map((child, childIndex) => (
                            <motion.div
                              key={child.href}
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: (index * 0.1 + childIndex * 0.05 + 0.3) }}
                            >
                              <Link
                                href={child.href}
                                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                              >
                                {child.title}
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: mainNavItems.length * 0.1 + 0.3 }}
                  >
                    <Button asChild className="mt-6 w-full">
                      <Link href="/contact">Book Now</Link>
                    </Button>
                  </motion.div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
} 