
import { useState, useEffect, useRef } from 'react';

interface UseCommunityCarouselProps {
  itemCount: number;
  autoPlayInterval?: number;
  userInteractionTimeout?: number;
}

export const useCommunityCarousel = ({ 
  itemCount, 
  autoPlayInterval = 20000,
  userInteractionTimeout = 15000 
}: UseCommunityCarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isUserInteracting = useRef(false);

  // Ensure currentSlide is always within bounds
  useEffect(() => {
    if (currentSlide >= itemCount) {
      setCurrentSlide(0);
    }
  }, [currentSlide, itemCount]);

  // Auto-loop carousel with proper cleanup
  useEffect(() => {
    const startCarousel = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      
      intervalRef.current = setInterval(() => {
        if (!isUserInteracting.current) {
          setCurrentSlide((prev) => (prev + 1) % itemCount);
        }
      }, autoPlayInterval);
    };

    // Start after a 2 second delay to ensure no sync with TeamSection
    const delayTimeout = setTimeout(startCarousel, 2000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      clearTimeout(delayTimeout);
    };
  }, [itemCount, autoPlayInterval]);

  const handleDotClick = (index: number) => {
    isUserInteracting.current = true;
    setCurrentSlide(index);
    
    // Clear current interval and restart after user interaction
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    // Resume auto-play after user interaction timeout
    setTimeout(() => {
      isUserInteracting.current = false;
      intervalRef.current = setInterval(() => {
        if (!isUserInteracting.current) {
          setCurrentSlide((prev) => (prev + 1) % itemCount);
        }
      }, autoPlayInterval);
    }, userInteractionTimeout);
  };

  const nextSlide = () => {
    isUserInteracting.current = true;
    setCurrentSlide((prev) => (prev + 1) % itemCount);
    
    // Clear current interval and restart after user interaction
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    // Resume auto-play after user interaction timeout
    setTimeout(() => {
      isUserInteracting.current = false;
      intervalRef.current = setInterval(() => {
        if (!isUserInteracting.current) {
          setCurrentSlide((prev) => (prev + 1) % itemCount);
        }
      }, autoPlayInterval);
    }, userInteractionTimeout);
  };

  const prevSlide = () => {
    isUserInteracting.current = true;
    setCurrentSlide((prev) => (prev - 1 + itemCount) % itemCount);
    
    // Clear current interval and restart after user interaction
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    // Resume auto-play after user interaction timeout
    setTimeout(() => {
      isUserInteracting.current = false;
      intervalRef.current = setInterval(() => {
        if (!isUserInteracting.current) {
          setCurrentSlide((prev) => (prev + 1) % itemCount);
        }
      }, autoPlayInterval);
    }, userInteractionTimeout);
  };

  return {
    currentSlide,
    handleDotClick,
    nextSlide,
    prevSlide
  };
};
