export default function customImageLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {
  // For local images (starting with /)
  if (src.startsWith('/')) {
    // Remove the leading slash for local images
    return src;
  }
  
  // For external images
  return src;
} 