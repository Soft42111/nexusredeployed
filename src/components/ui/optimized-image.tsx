
import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  onLoad?: () => void;
  onError?: () => void;
}

const OptimizedImage = ({ 
  src, 
  alt, 
  className, 
  width, 
  height, 
  priority = false,
  onLoad,
  onError 
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  return (
    <div className={cn("relative overflow-hidden", className)} ref={imgRef}>
      {/* Skeleton loader */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-muted/50 animate-pulse rounded-lg"></div>
      )}
      
      {/* Actual image */}
      {isInView && !hasError && (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={cn(
            "w-full h-full object-contain transition-all duration-500",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
          onLoad={handleLoad}
          onError={handleError}
          loading={priority ? "eager" : "lazy"}
        />
      )}
      
      {/* Improved error fallback - shows a subtle placeholder instead of error text */}
      {hasError && (
        <div className="absolute inset-0 bg-muted/30 rounded-lg flex items-center justify-center">
          <div className="w-8 h-8 bg-muted-foreground/20 rounded-lg"></div>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
