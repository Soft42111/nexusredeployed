
import { useEffect, useRef, useState, useCallback } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = <T extends HTMLElement = HTMLElement>({
  threshold = 0.1,
  rootMargin = '50px',
  triggerOnce = true
}: UseScrollAnimationOptions = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<T>(null);
  const observerRef = useRef<IntersectionObserver>();

  const handleIntersect = useCallback((entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setIsVisible(true);
      if (triggerOnce && observerRef.current) {
        observerRef.current.disconnect();
      }
    } else if (!triggerOnce) {
      setIsVisible(false);
    }
  }, [triggerOnce]);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    observerRef.current = new IntersectionObserver(handleIntersect, {
      threshold,
      rootMargin
    });

    observerRef.current.observe(element);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [threshold, rootMargin, handleIntersect]);

  return { elementRef, isVisible };
};

export default useScrollAnimation;
