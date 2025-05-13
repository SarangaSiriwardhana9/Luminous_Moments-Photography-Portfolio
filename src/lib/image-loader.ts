export default function customImageLoader({ 
  src, 
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  width: _width, 
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  quality: _quality 
}: { 
  src: string; 
  width: number; 
  quality?: number 
}) {
  // For local images (starting with /)
  if (src.startsWith('/')) {
    // Remove the leading slash for local images
    return src;
  }
  
  // For external images
  return src;
} 