"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

type ImageGalleryProps = {
  images: {
    src: string
    alt: string
    width: number
    height: number
  }[]
  className?: string
}

export function ImageGallery({ images, className }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", className)}>
      {images.map((image, index) => (
        <Dialog key={index}>
          <DialogTrigger asChild>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative aspect-[3/4] cursor-pointer group overflow-hidden rounded-lg"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white text-sm">{image.alt}</p>
                </div>
              </div>
            </motion.div>
          </DialogTrigger>
          <DialogContent className="max-w-5xl w-full p-0 bg-transparent border-none">
            <div className="relative w-full aspect-[4/3] sm:aspect-[3/2] md:aspect-[16/9]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  )
}

export function MasonryGallery({ images, className }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  
  // Group images into columns
  const columnCount = { mobile: 1, tablet: 2, desktop: 3 }
  const columns: Array<typeof images> = Array.from({ length: columnCount.desktop }, () => [])
  
  images.forEach((image, i) => {
    const columnIndex = i % columnCount.desktop
    columns[columnIndex].push(image)
  })

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", className)}>
      {columns.map((column, columnIndex) => (
        <div key={columnIndex} className="flex flex-col gap-4">
          {column.map((image, imageIndex) => (
            <Dialog key={imageIndex}>
              <DialogTrigger asChild>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (columnIndex + imageIndex) * 0.1 }}
                  viewport={{ once: true }}
                  className="relative cursor-pointer group overflow-hidden rounded-lg"
                  style={{ 
                    paddingBottom: `${(image.height / image.width) * 100}%`,
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <p className="text-white text-sm">{image.alt}</p>
                    </div>
                  </div>
                </motion.div>
              </DialogTrigger>
              <DialogContent className="max-w-5xl w-full p-0 bg-transparent border-none">
                <div className="relative w-full aspect-[4/3] sm:aspect-[3/2] md:aspect-[16/9]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="100vw"
                    className="object-contain"
                  />
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      ))}
    </div>
  )
} 