
import React, { useEffect, useState } from 'react';

interface LightweightCounterProps {
  end: number;
  start?: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  trigger?: boolean;
}

const LightweightCounter = ({ 
  end, 
  start = 0, 
  duration = 1500, 
  suffix = '', 
  prefix = '',
  className,
  trigger = true
}: LightweightCounterProps) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!trigger) return;

    const startTime = Date.now();
    const totalChange = end - start;

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const currentValue = Math.floor(start + totalChange * progress);
      setCount(currentValue);

      if (progress >= 1) {
        clearInterval(timer);
        setCount(end);
      }
    }, 32); // 30fps instead of 60fps

    return () => clearInterval(timer);
  }, [trigger, start, end, duration]);

  return (
    <span className={className}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

export default LightweightCounter;
