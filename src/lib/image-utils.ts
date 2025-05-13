import { AspectRatio } from "@/constants/types";

/**
 * Image utility functions for consistent image handling
 */

interface ImageSize {
  width: number;
  height: number;
}

/**
 * Get standardized image dimensions based on aspect ratio
 */
export function getImageDimensions(aspectRatio: AspectRatio | string, baseWidth: number = 800): ImageSize {
  switch (aspectRatio) {
    case AspectRatio.LANDSCAPE:
      return { width: baseWidth, height: Math.round(baseWidth * 0.75) }; // 4:3
    case AspectRatio.PORTRAIT:
      return { width: baseWidth, height: Math.round(baseWidth * 1.33) }; // 3:4
    case AspectRatio.SQUARE:
    default:
      return { width: baseWidth, height: baseWidth }; // 1:1
  }
}

/**
 * Generate blur placeholder based on image size
 */
export function generatePlaceholder(width: number, height: number): string {
  // Return a data URL for a light gray placeholder with the correct aspect ratio
  return `data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${width} ${height}'%3E%3Crect width='${width}' height='${height}' fill='%23f5f5f5'/%3E%3C/svg%3E`;
}

/**
 * Get image sizes attribute for responsive images
 */
export function getImageSizes(isFull: boolean = false): string {
  return isFull 
    ? "100vw" 
    : "(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw";
}

/**
 * Standardize image props for Next.js Image component
 */
export function getImageProps(src: string, alt: string, aspectRatio: AspectRatio | string = AspectRatio.LANDSCAPE, baseWidth: number = 800) {
  const dimensions = getImageDimensions(aspectRatio, baseWidth);
  
  return {
    src,
    alt,
    width: dimensions.width,
    height: dimensions.height,
    placeholder: "blur" as const,
    blurDataURL: generatePlaceholder(dimensions.width, dimensions.height),
    sizes: getImageSizes(),
  };
} 