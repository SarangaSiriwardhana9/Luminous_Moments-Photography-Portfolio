"use client"

import * as React from "react"
import { OptimizedImage } from "@/components/optimized-image"
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

export const ImageGallery = React.memo(function ImageGalleryComponent({ images, className }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = React.useState<number | null>(null)
  
  const handlePrevImage = React.useCallback(() => {
    if (selectedImage === null) return
    setSelectedImage(prev => prev === 0 ? images.length - 1 : (prev ?? 0) - 1)
  }, [selectedImage, images.length])
  
  const handleNextImage = React.useCallback(() => {
    if (selectedImage === null) return
    setSelectedImage(prev => prev === images.length - 1 ? 0 : (prev ?? 0) + 1)
  }, [selectedImage, images.length])

  const openImage = React.useCallback((index: number) => {
    setSelectedImage(index)
  }, [])

  const closeImage = React.useCallback(() => {
    setSelectedImage(null)
  }, [])
  
  if (!images || images.length === 0) {
    return null // Or some placeholder for no images
  }

  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4", className)}>
      {images.map((image, index) => (
        <Dialog key={image.src || index}>
          <DialogTrigger asChild>
            <div 
              className="cursor-pointer overflow-hidden rounded-lg relative group aspect-[4/3]"
              onClick={() => openImage(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && openImage(index)}
            >
              <OptimizedImage
                src={image.src}
                alt={image.alt}
                fill
                sizes={getImageSizes()}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                placeholder="blur"
                blurDataURL={generatePlaceholder(image.width, image.height)}
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-2">
                <span className="text-white text-sm font-medium text-center">{image.alt}</span>
              </div>
            </div>
          </DialogTrigger>
          {selectedImage === index && (
            <DialogContent className="max-w-screen-xl w-full p-0 bg-transparent border-none">
              <div className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 z-50 rounded-full bg-black/50 text-white hover:bg-black/70 hover:text-white focus-visible:ring-0 focus-visible:ring-offset-0"
                  onClick={closeImage}
                  aria-label="Close image viewer"
                >
                  <X className="h-5 w-5" />
                </Button>
                
                {images.length > 1 && (
                  <>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute left-2 top-1/2 -translate-y-1/2 z-50 rounded-full bg-black/50 text-white hover:bg-black/70 hover:text-white focus-visible:ring-0 focus-visible:ring-offset-0"
                      onClick={handlePrevImage}
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-1/2 -translate-y-1/2 z-50 rounded-full bg-black/50 text-white hover:bg-black/70 hover:text-white focus-visible:ring-0 focus-visible:ring-offset-0"
                      onClick={handleNextImage}
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </Button>
                  </>
                )}
                
                <div className="relative aspect-[16/9] md:aspect-[4/3] max-h-[90vh] bg-black flex items-center justify-center">
                  <OptimizedImage
                    src={images[selectedImage].src}
                    alt={images[selectedImage].alt}
                    fill
                    sizes="100vw"
                    className="object-contain"
                    placeholder="blur"
                    blurDataURL={generatePlaceholder(
                      images[selectedImage].width, 
                      images[selectedImage].height
                    )}
                    priority
                  />
                </div>
                
                <DialogHeader className="p-4 bg-background/80 backdrop-blur-sm absolute bottom-0 left-0 right-0">
                  <DialogTitle className="text-base md:text-lg text-white truncate">{images[selectedImage].alt}</DialogTitle>
                  {images[selectedImage].tags && images[selectedImage].tags!.length > 0 && (
                    <DialogDescription className="flex flex-wrap gap-1 mt-1">
                      {images[selectedImage].tags?.map((tag, tagIndex) => (
                        <span key={tagIndex} className="bg-black/30 text-white/80 text-xs font-medium px-2 py-0.5 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </DialogDescription>
                  )}
                </DialogHeader>
              </div>
            </DialogContent>
          )}
        </Dialog>
      ))}
    </div>
  )
})

export function MasonryGallery({ images, className }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = React.useState<number | null>(null)
  
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
            <Dialog key={image.src || imageIndex}>
              <DialogTrigger asChild>
                <div 
                  className="relative cursor-pointer group overflow-hidden rounded-lg"
                  style={{ 
                    paddingBottom: `${(image.height / image.width) * 100}%`,
                  }}
                  onClick={() => setSelectedImage(imageIndex)}
                >
                  <OptimizedImage
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    placeholder="blur"
                    blurDataURL={generatePlaceholder(image.width, image.height)}
                  />
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <p className="text-white text-sm">{image.alt}</p>
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              {selectedImage === imageIndex && (
                <DialogContent className="max-w-5xl w-full p-0 bg-transparent border-none">
                  <div className="relative w-full aspect-[4/3] sm:aspect-[3/2] md:aspect-[16/9]">
                    <OptimizedImage
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="100vw"
                      className="object-contain"
                      priority
                    />
                  </div>
                </DialogContent>
              )}
            </Dialog>
          ))}
        </div>
      ))}
    </div>
  )
} 