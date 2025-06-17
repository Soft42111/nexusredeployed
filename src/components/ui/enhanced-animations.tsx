
import React from 'react';

// Enhanced animation component for scroll-triggered animations
export const ScrollReveal: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
}> = ({ children, className = '', delay = 0 }) => {
  return (
    <div 
      className={`opacity-0 translate-y-10 animate-fade-in ${className}`}
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      {children}
    </div>
  );
};

// Floating animation component
export const FloatingElement: React.FC<{
  children: React.ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
}> = ({ children, className = '', duration = 3, delay = 0 }) => {
  return (
    <div 
      className={`animate-bounce ${className}`}
      style={{ 
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
        animationIterationCount: 'infinite'
      }}
    >
      {children}
    </div>
  );
};

// Pulse glow effect
export const PulseGlow: React.FC<{
  children: React.ReactNode;
  className?: string;
  color?: string;
}> = ({ children, className = '', color = 'primary' }) => {
  return (
    <div className={`relative ${className}`}>
      {children}
      <div className={`absolute inset-0 bg-${color}/20 rounded-full animate-ping`}></div>
    </div>
  );
};

export default { ScrollReveal, FloatingElement, PulseGlow };
