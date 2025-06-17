
import React from 'react';
import useOptimizedStarField from '@/hooks/useOptimizedStarField';
import { cn } from '@/lib/utils';

interface OptimizedStarFieldProps {
  enabled?: boolean;
  intensity?: number;
  interactive?: boolean;
  className?: string;
}

const OptimizedStarField: React.FC<OptimizedStarFieldProps> = ({
  enabled = true,
  intensity = 0.3,
  interactive = false,
  className
}) => {
  const { canvasRef } = useOptimizedStarField({
    enabled,
    intensity,
    interactive
  });

  if (!enabled) return null;

  return (
    <canvas
      ref={canvasRef}
      className={cn(
        "absolute inset-0 w-full h-full",
        interactive ? "cursor-pointer" : "pointer-events-none",
        className
      )}
      style={{
        zIndex: 1,
        mixBlendMode: 'screen'
      }}
    />
  );
};

export default OptimizedStarField;
