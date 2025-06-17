
import React from 'react';
import AnimatedCounter from '@/components/ui/animated-counter';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const MetricsSection = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLDivElement>();

  const metrics = [
    { value: 500000, label: "Community Members Managed", suffix: "+" },
    { value: 150, label: "Projects Completed", suffix: "+" },
    { value: 99, label: "Client Satisfaction Rate", suffix: "%" },
    { value: 24, label: "Hours Support Coverage", suffix: "/7" }
  ];

  return (
    <div 
      ref={elementRef}
      className={`grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {metrics.map((metric, index) => (
        <div key={index} className="bg-card border border-border rounded-2xl p-4 sm:p-6 text-center hover:shadow-lg transition-shadow duration-300 group">
          <div className="text-2xl sm:text-3xl md:text-4xl font-space font-bold text-primary mb-2">
            <AnimatedCounter 
              end={metric.value} 
              suffix={metric.suffix}
              duration={2000}
              className="tabular-nums"
            />
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground">{metric.label}</p>
        </div>
      ))}
    </div>
  );
};

export default MetricsSection;
