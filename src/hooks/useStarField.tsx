
import { useEffect, useRef, useState, useCallback } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  baseOpacity: number;
  speed: number;
  layer: number;
  color: string;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
}

interface ShootingStar {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  length: number;
  opacity: number;
  color: string;
  life: number;
}

interface UseStarFieldOptions {
  enabled?: boolean;
  intensity?: number;
  interactive?: boolean;
  shootingStars?: boolean;
  constellation?: boolean;
}

export const useStarField = ({
  enabled = true,
  intensity = 0.5,
  interactive = true,
  shootingStars = true,
  constellation = false
}: UseStarFieldOptions = {}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const [stars, setStars] = useState<Star[]>([]);
  const [shootingStarsArray, setShootingStarsArray] = useState<ShootingStar[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [interactionCount, setInteractionCount] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  const starIdRef = useRef(0);
  const shootingStarIdRef = useRef(0);
  const lastShootingStarRef = useRef(0);
  
  const colors = [
    'rgba(255, 255, 255, 1)', // White
    'rgba(135, 206, 250, 1)', // Light blue
    'rgba(255, 218, 185, 1)', // Warm white
    'rgba(173, 216, 230, 1)', // Light cyan
    'rgba(240, 248, 255, 1)', // Alice blue
  ];

  const createStar = useCallback((x?: number, y?: number, isInteractive = false): Star => {
    const canvas = canvasRef.current;
    if (!canvas) return {} as Star;

    const baseSize = isInteractive ? 2 + Math.random() * 4 : 1 + Math.random() * 2;
    const intensityMultiplier = 0.5 + (intensity * 0.8);
    
    return {
      id: starIdRef.current++,
      x: x ?? Math.random() * canvas.width,
      y: y ?? Math.random() * canvas.height,
      size: baseSize * intensityMultiplier,
      opacity: 0.3 + Math.random() * 0.7,
      baseOpacity: 0.3 + Math.random() * 0.7,
      speed: 0.1 + Math.random() * 0.5,
      layer: Math.floor(Math.random() * 3),
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: isInteractive ? (Math.random() - 0.5) * 2 : 0,
      vy: isInteractive ? (Math.random() - 0.5) * 2 : 0,
      life: isInteractive ? 0 : 1,
      maxLife: isInteractive ? 60 + Math.random() * 120 : 1
    };
  }, [intensity]);

  const createShootingStar = useCallback((): ShootingStar => {
    const canvas = canvasRef.current;
    if (!canvas) return {} as ShootingStar;

    const startSide = Math.floor(Math.random() * 4);
    let x, y, vx, vy;

    switch (startSide) {
      case 0: // Top
        x = Math.random() * canvas.width;
        y = -50;
        vx = (Math.random() - 0.5) * 4;
        vy = 2 + Math.random() * 4;
        break;
      case 1: // Right
        x = canvas.width + 50;
        y = Math.random() * canvas.height;
        vx = -(2 + Math.random() * 4);
        vy = (Math.random() - 0.5) * 4;
        break;
      case 2: // Bottom
        x = Math.random() * canvas.width;
        y = canvas.height + 50;
        vx = (Math.random() - 0.5) * 4;
        vy = -(2 + Math.random() * 4);
        break;
      default: // Left
        x = -50;
        y = Math.random() * canvas.height;
        vx = 2 + Math.random() * 4;
        vy = (Math.random() - 0.5) * 4;
    }

    return {
      id: shootingStarIdRef.current++,
      x,
      y,
      vx,
      vy,
      length: 20 + Math.random() * 30,
      opacity: 0.8 + Math.random() * 0.2,
      color: colors[Math.floor(Math.random() * colors.length)],
      life: 0
    };
  }, []);

  const initializeStars = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const baseCount = Math.floor((canvas.width * canvas.height) / 8000);
    const starCount = Math.max(20, Math.min(200, baseCount * intensity));
    
    const newStars = Array.from({ length: starCount }, () => createStar());
    setStars(newStars);
  }, [createStar, intensity]);

  const handleCanvasClick = useCallback((event: MouseEvent) => {
    if (!interactive || !enabled) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Create burst of stars at click position
    const burstStars = Array.from({ length: 5 + Math.random() * 10 }, () => 
      createStar(x + (Math.random() - 0.5) * 50, y + (Math.random() - 0.5) * 50, true)
    );

    setStars(prev => [...prev, ...burstStars]);
    setInteractionCount(prev => prev + 1);
  }, [interactive, enabled, createStar]);

  const handleMouseMove = useCallback((event: MouseEvent) => {
    if (!enabled) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    setMousePos({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    });
  }, [enabled]);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx || !enabled) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update and draw stars
    setStars(prevStars => {
      const updatedStars = prevStars.map(star => {
        // Twinkling effect
        const twinkle = Math.sin(Date.now() * 0.001 * star.speed) * 0.3;
        star.opacity = Math.max(0.1, star.baseOpacity + twinkle);

        // Interactive movement towards mouse
        if (interactive && mousePos.x && mousePos.y) {
          const dx = mousePos.x - star.x;
          const dy = mousePos.y - star.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            const force = (150 - distance) / 150 * 0.1;
            star.vx += (dx / distance) * force;
            star.vy += (dy / distance) * force;
          }
        }

        // Apply velocity with damping
        star.x += star.vx;
        star.y += star.vy;
        star.vx *= 0.98;
        star.vy *= 0.98;

        // Lifecycle for interactive stars
        if (star.life < star.maxLife) {
          star.life++;
        }

        // Wrap around screen
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        return star;
      }).filter(star => star.life < star.maxLife);

      // Draw stars
      updatedStars.forEach(star => {
        ctx.save();
        ctx.globalAlpha = star.opacity * (1 - star.layer * 0.3);
        ctx.fillStyle = star.color;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * (1 + star.layer * 0.5), 0, Math.PI * 2);
        ctx.fill();
        
        // Add glow effect for larger stars
        if (star.size > 2) {
          ctx.globalAlpha = star.opacity * 0.3;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      });

      return updatedStars;
    });

    // Handle shooting stars
    if (shootingStars && Date.now() - lastShootingStarRef.current > 3000 + Math.random() * 7000) {
      setShootingStarsArray(prev => [...prev, createShootingStar()]);
      lastShootingStarRef.current = Date.now();
    }

    // Update and draw shooting stars
    setShootingStarsArray(prevShootingStars => {
      const updatedShootingStars = prevShootingStars.map(shootingStar => {
        shootingStar.x += shootingStar.vx;
        shootingStar.y += shootingStar.vy;
        shootingStar.life++;
        shootingStar.opacity *= 0.995;

        return shootingStar;
      }).filter(shootingStar => 
        shootingStar.opacity > 0.01 &&
        shootingStar.x > -100 && shootingStar.x < canvas.width + 100 &&
        shootingStar.y > -100 && shootingStar.y < canvas.height + 100
      );

      // Draw shooting stars
      updatedShootingStars.forEach(shootingStar => {
        ctx.save();
        ctx.globalAlpha = shootingStar.opacity;
        ctx.strokeStyle = shootingStar.color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(shootingStar.x, shootingStar.y);
        ctx.lineTo(
          shootingStar.x - shootingStar.vx * shootingStar.length / 4,
          shootingStar.y - shootingStar.vy * shootingStar.length / 4
        );
        ctx.stroke();
        ctx.restore();
      });

      return updatedShootingStars;
    });

    animationRef.current = requestAnimationFrame(animate);
  }, [enabled, interactive, mousePos, shootingStars, createShootingStar]);

  const updateDimensions = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    const rect = parent.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    
    setDimensions({ width: rect.width, height: rect.height });
  }, []);

  const clearStars = useCallback(() => {
    setStars([]);
    setShootingStarsArray([]);
    setInteractionCount(0);
    setTimeout(initializeStars, 100);
  }, [initializeStars]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !enabled) return;

    updateDimensions();
    initializeStars();

    const handleResize = () => {
      updateDimensions();
      setTimeout(initializeStars, 100);
    };

    if (interactive) {
      canvas.addEventListener('click', handleCanvasClick);
      canvas.addEventListener('mousemove', handleMouseMove);
    }

    window.addEventListener('resize', handleResize);
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      canvas.removeEventListener('click', handleCanvasClick);
      canvas.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [enabled, interactive, animate, handleCanvasClick, handleMouseMove, updateDimensions, initializeStars]);

  return {
    canvasRef,
    interactionCount,
    clearStars,
    dimensions
  };
};

export default useStarField;
