import { useState, useEffect } from 'react';

/**
 * Custom hook for lazy loading images with progressive enhancement
 * @param src The image source URL
 * @param placeholderSrc Optional placeholder image to show while loading
 * @returns Object with loaded state and current src to display
 */
export function useImageLoader(src: string, placeholderSrc?: string) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(placeholderSrc || '');

  useEffect(() => {
    // Reset state when src changes
    setIsLoaded(false);
    setCurrentSrc(placeholderSrc || '');

    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setIsLoaded(true);
      setCurrentSrc(src);
    };
    
    // Clean up
    return () => {
      img.onload = null;
    };
  }, [src, placeholderSrc]);

  return { isLoaded, currentSrc };
}

/**
 * Custom hook for lazy loading multiple images
 * @param sources Array of image source URLs
 * @returns Object with loaded state for each image
 */
export function useMultipleImageLoader(sources: string[]) {
  const [loadStates, setLoadStates] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const newLoadStates: Record<string, boolean> = {};
    sources.forEach(src => {
      newLoadStates[src] = false;
    });
    setLoadStates(newLoadStates);

    // Load each image
    sources.forEach(src => {
      const img = new Image();
      img.src = src;
      
      img.onload = () => {
        setLoadStates(prev => ({
          ...prev,
          [src]: true
        }));
      };
    });
  }, [sources]);

  const areAllLoaded = Object.values(loadStates).every(state => state);
  
  return { loadStates, areAllLoaded };
} 