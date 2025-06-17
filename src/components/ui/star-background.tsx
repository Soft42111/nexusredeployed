
import React from 'react';
import OptimizedStarField from './optimized-star-field';
import { cn } from '@/lib/utils';

interface StarBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const StarBackground: React.FC<StarBackgroundProps> = ({
  children,
  className
}) => {
  return (
    <div className={cn("relative", className)}>
      {/* Optimized Star Field */}
      <OptimizedStarField
        enabled={true}
        intensity={0.4}
        interactive={true}
        className="absolute inset-0"
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default StarBackground;
