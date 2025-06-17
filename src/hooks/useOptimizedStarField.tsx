
import { useEffect, useRef, useCallback } from 'react';

interface StarFieldOptions {
  enabled: boolean;
  intensity: number;
  interactive: boolean;
}

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
}

const useOptimizedStarField = ({ enabled, intensity, interactive }: StarFieldOptions) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const starsRef = useRef<Star[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  const createStars = useCallback((width: number, height: number) => {
    const starCount = Math.floor((width * height) / 10000 * intensity);
    const stars: Star[] = [];
    
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
        speed: Math.random() * 0.5 + 0.1
      });
    }
    
    return stars;
  }, [intensity]);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || !enabled) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    starsRef.current.forEach(star => {
      // Simple twinkling effect
      star.opacity += (Math.random() - 0.5) * 0.02;
      star.opacity = Math.max(0.1, Math.min(1, star.opacity));
      
      ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      ctx.fill();
    });

    animationRef.current = requestAnimationFrame(animate);
  }, [enabled]);

  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    
    starsRef.current = createStars(canvas.width, canvas.height);
  }, [createStars]);

  const handleMouseMove = useCallback((event: MouseEvent) => {
    if (!interactive) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };
  }, [interactive]);

  useEffect(() => {
    if (!enabled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    handleResize();
    animate();

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(canvas);

    if (interactive) {
      canvas.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      resizeObserver.disconnect();
      if (interactive && canvas) {
        canvas.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [enabled, animate, handleResize, handleMouseMove, interactive]);

  return { canvasRef };
};

export default useOptimizedStarField;
