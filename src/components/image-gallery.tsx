"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { generatePlaceholder, getImageSizes } from "@/lib/image-utils"
import { GalleryImage } from "@/constants/types"

interface ImageGalleryProps {
  images: GalleryImage[]
  className?: string
}

export function ImageGallery({ images, className }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  
  const handlePrevImage = () => {
    if (selectedImage === null) return
    setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1)
  }
  
  const handleNextImage = () => {
    if (selectedImage === null) return
    setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1)
  }
  
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", className)}>
      {images.map((image, index) => (
        <Dialog key={index}>
          <DialogTrigger asChild>
            <div 
              className="cursor-pointer overflow-hidden rounded-lg relative group aspect-[4/3]"
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes={getImageSizes()}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                placeholder="blur"
                blurDataURL={generatePlaceholder(image.width, image.height)}
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-sm font-medium">{image.alt}</span>
              </div>
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-screen-lg w-full p-0 bg-transparent border-none">
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 z-50 rounded-full bg-black/50 text-white hover:bg-black/70"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-4 w-4" />
              </Button>
              
              <div className="relative aspect-[4/3] max-h-[80vh] bg-black flex items-center justify-center">
                <Image
                  src={images[selectedImage ?? index].src}
                  alt={images[selectedImage ?? index].alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  placeholder="blur"
                  blurDataURL={generatePlaceholder(
                    images[selectedImage ?? index].width, 
                    images[selectedImage ?? index].height
                  )}
                />
                
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-2 z-50 rounded-full bg-black/50 text-white hover:bg-black/70"
                  onClick={handlePrevImage}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 z-50 rounded-full bg-black/50 text-white hover:bg-black/70"
                  onClick={handleNextImage}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              
              <DialogHeader className="p-4 bg-white">
                <DialogTitle className="text-lg">{images[selectedImage ?? index].alt}</DialogTitle>
                {images[selectedImage ?? index].tags && (
                  <DialogDescription className="flex flex-wrap gap-2 mt-2">
                    {images[selectedImage ?? index].tags?.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-muted text-xs font-medium px-2 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </DialogDescription>
                )}
              </DialogHeader>
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
                <div 
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
                </div>
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