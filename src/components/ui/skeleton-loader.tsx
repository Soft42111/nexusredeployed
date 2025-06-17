
import React from 'react';
import { cn } from '@/lib/utils';

interface SkeletonLoaderProps {
  className?: string;
  lines?: number;
  avatar?: boolean;
  card?: boolean;
}

const SkeletonLoader = ({ className, lines = 3, avatar = false, card = false }: SkeletonLoaderProps) => {
  if (card) {
    return (
      <div className={cn("bg-card border border-border rounded-2xl p-6 animate-pulse", className)}>
        <div className="w-12 h-12 bg-muted rounded-xl mb-4"></div>
        <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
        <div className="h-3 bg-muted rounded w-full mb-1"></div>
        <div className="h-3 bg-muted rounded w-2/3"></div>
      </div>
    );
  }

  return (
    <div className={cn("animate-pulse", className)}>
      {avatar && (
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-10 h-10 bg-muted rounded-full"></div>
          <div className="space-y-2 flex-1">
            <div className="h-4 bg-muted rounded w-1/4"></div>
            <div className="h-3 bg-muted rounded w-1/6"></div>
          </div>
        </div>
      )}
      <div className="space-y-3">
        {Array.from({ length: lines }).map((_, i) => (
          <div 
            key={i} 
            className="h-3 bg-muted rounded" 
            style={{ width: i === lines - 1 ? '60%' : '100%' }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SkeletonLoader;
