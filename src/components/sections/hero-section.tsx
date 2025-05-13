"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { OptimizedImage } from "@/components/optimized-image"
import { IMAGES, ROUTES } from "@/constants"

export function HeroSection() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <OptimizedImage
          src={IMAGES.HERO_BG}
          alt="Professional photography by Hasaranga Suloksha"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container h-full flex flex-col justify-center items-center text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-3xl space-y-6"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold"
          >
            Capturing Life&apos;s <span className="text-primary">Special</span> Moments
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto"
          >
            Professional photography services for weddings, graduations, birthdays, and special events across Sri Lanka by Hasaranga Suloksha.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href={ROUTES.PORTFOLIO}>View Portfolio</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-8 text-white border-white hover:text-white hover:bg-white/20">
              <Link href={ROUTES.CONTACT}>Book a Session</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
        >
          <Button variant="ghost" size="icon" className="text-white rounded-full border border-white/30 h-12 w-12">
            <motion.svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
            </motion.svg>
          </Button>
        </motion.div>
      </div>
    </div>
  )
} 