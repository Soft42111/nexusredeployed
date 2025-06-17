
import React, { useEffect, useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface AnimatedCounterProps {
  end: number;
  start?: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

const AnimatedCounter = ({ 
  end, 
  start = 0, 
  duration = 2000, 
  suffix = '', 
  prefix = '',
  className 
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(start);
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.3 });

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const startValue = start;
    const endValue = end;
    const totalChange = endValue - startValue;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Smooth easing function
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(startValue + totalChange * easeOutCubic);
      
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, start, end, duration]);

  return (
    <span ref={elementRef} className={className}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

export default AnimatedCounter;
