
import React from 'react';
import useStarField from '@/hooks/useStarField';
import { cn } from '@/lib/utils';

interface StarFieldProps {
  enabled?: boolean;
  intensity?: number;
  interactive?: boolean;
  shootingStars?: boolean;
  constellation?: boolean;
  className?: string;
}

const StarField: React.FC<StarFieldProps> = ({
  enabled = true,
  intensity = 0.5,
  interactive = true,
  shootingStars = true,
  constellation = false,
  className
}) => {
  const { canvasRef, interactionCount } = useStarField({
    enabled,
    intensity,
    interactive,
    shootingStars,
    constellation
  });

  if (!enabled) return null;

  return (
    <canvas
      ref={canvasRef}
      className={cn(
        "absolute inset-0 w-full h-full pointer-events-auto",
        "transition-opacity duration-1000",
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

export default StarField;
