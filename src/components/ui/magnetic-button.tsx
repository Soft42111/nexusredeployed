
import React, { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface MagneticButtonProps extends React.ComponentProps<typeof Button> {
  magneticStrength?: number;
  children: React.ReactNode;
}

const MagneticButton = ({ 
  magneticStrength = 0.3, 
  children, 
  className,
  onMouseEnter,
  onMouseLeave,
  ...props 
}: MagneticButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (e.clientX - centerX) * magneticStrength;
    const deltaY = (e.clientY - centerY) * magneticStrength;

    buttonRef.current.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(1.05)`;
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsHovered(true);
    onMouseEnter?.(e);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsHovered(false);
    if (buttonRef.current) {
      buttonRef.current.style.transform = 'translate(0px, 0px) scale(1)';
    }
    onMouseLeave?.(e);
  };

  return (
    <Button
      ref={buttonRef}
      className={cn(
        "relative overflow-hidden transition-all duration-300 ease-out",
        "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent",
        "before:translate-x-[-100%] before:transition-transform before:duration-500",
        "hover:before:translate-x-[100%] hover:shadow-xl",
        isHovered && "shadow-2xl",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </Button>
  );
};

export default MagneticButton;
