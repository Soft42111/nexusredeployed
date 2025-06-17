
import React from 'react';
import OptimizedImage from '@/components/ui/optimized-image';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const ClientLogos = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLDivElement>();

  const clientProjects = [
    { name: 'IO.NET', twitter: 'https://x.com/ionet', logo: '/lovable-uploads/6c7d0111-1e0d-4d95-b3bf-58b198d953d3.png' },
    { name: 'Magic Eden', twitter: 'https://x.com/magiceden', logo: '/lovable-uploads/38e36899-b532-4aeb-b6b4-0aca6e0277d8.png' },
    { name: 'Humanity Protocol', twitter: 'https://x.com/humanityprot', logo: '/lovable-uploads/7ebd416a-5ce4-4d93-ab9b-7c0097c80de6.png' },
    { name: '0G Labs', twitter: 'https://x.com/0g_labs', logo: '/lovable-uploads/ff6e3e7b-ff0f-4e0b-9d34-f34f28b94d4c.png' },
    { name: 'Boinkers', twitter: 'https://x.com/boinkersio', logo: '/lovable-uploads/1206fdc2-1e81-4d6a-9c29-98a4ff7b70fd.png' },
    { name: 'Aethir', twitter: 'https://x.com/aethircloud', logo: '/lovable-uploads/c6af1549-7f0f-4823-8ac2-15ee799830d9.png' },
  ];

  return (
    <div 
      ref={elementRef}
      className={`text-center transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <h3 className="text-xl sm:text-2xl md:text-3xl font-space font-bold mb-8 sm:mb-12">
        Trusted by Leading <span className="bg-gradient-to-r from-primary to-nexus-cyan bg-clip-text text-transparent">Web3 Projects</span>
      </h3>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 items-center justify-items-center max-w-6xl mx-auto">
        {clientProjects.map((project, index) => (
          <a
            key={index}
            href={project.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full max-w-[120px]"
          >
            <div className="aspect-square bg-card border border-border rounded-3xl p-4 hover:shadow-lg transition-all duration-300 hover:scale-105 group-hover:border-primary/50">
              <OptimizedImage 
                src={project.logo}
                alt={project.name}
                className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 rounded-2xl"
              />
            </div>
            <span className="text-xs mt-3 block text-muted-foreground group-hover:text-primary transition-colors duration-300 font-medium">{project.name}</span>
          </a>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <div className="bg-card border border-border rounded-3xl p-6 hover:shadow-lg transition-all duration-300 group max-w-[120px] w-full">
          <div className="text-center">
            <div className="text-2xl mb-2">✨</div>
            <span className="text-sm font-bold text-muted-foreground group-hover:text-primary transition-colors duration-300">Many<br />More</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientLogos;
