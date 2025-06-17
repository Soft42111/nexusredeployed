
import React from 'react';
import { ChevronDown } from 'lucide-react';
import NexusLogo from '@/components/NexusLogo';
import MagneticButton from '@/components/ui/magnetic-button';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Simplified background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-72 md:h-72 bg-primary/10 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 md:w-96 md:h-96 bg-nexus-cyan/5 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 max-w-5xl mt-4">
        {/* Nexus Logo */}
        <div className="flex justify-center mb-6 sm:mb-8 relative">
          <div className="relative">
            <NexusLogo className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[28rem] lg:h-[28rem] xl:w-[32rem] xl:h-[32rem] drop-shadow-2xl" />
            
            {/* Simplified Floating Social Media Icons */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Discord Icons */}
              <div className="absolute -top-8 -left-16 sm:-top-12 sm:-left-20 md:-top-16 md:-left-24 animate-bounce" style={{ animationDuration: '3s' }}>
                <img 
                  src="/lovable-uploads/7ba317a1-6eed-4c5e-adb4-d2f8552569c0.png" 
                  alt="Discord" 
                  className="w-10 h-10 sm:w-14 sm:h-14 md:w-18 md:h-18 lg:w-20 lg:h-20 opacity-80"
                />
              </div>

              <div className="absolute -bottom-8 -right-16 sm:-bottom-12 sm:-right-20 md:-bottom-16 md:-right-24 animate-bounce" style={{ animationDuration: '3s', animationDelay: '1s' }}>
                <img 
                  src="/lovable-uploads/7ba317a1-6eed-4c5e-adb4-d2f8552569c0.png" 
                  alt="Discord" 
                  className="w-10 h-10 sm:w-14 sm:h-14 md:w-18 md:h-18 lg:w-20 lg:h-20 opacity-80"
                />
              </div>

              {/* X (Twitter) Icons */}
              <div className="absolute top-1/2 -left-20 sm:-left-24 md:-left-28 animate-bounce" style={{ animationDuration: '3s', animationDelay: '0.5s' }}>
                <img 
                  src="/lovable-uploads/32684649-7996-4633-9c63-1dfd7d1def53.png" 
                  alt="X (Twitter)" 
                  className="w-10 h-10 sm:w-14 sm:h-14 md:w-18 md:h-18 lg:w-20 lg:h-20 opacity-80 filter invert"
                />
              </div>

              <div className="absolute top-1/2 -right-20 sm:-right-24 md:-right-28 animate-bounce" style={{ animationDuration: '3s', animationDelay: '1.5s' }}>
                <img 
                  src="/lovable-uploads/32684649-7996-4633-9c63-1dfd7d1def53.png" 
                  alt="X (Twitter)" 
                  className="w-10 h-10 sm:w-14 sm:h-14 md:w-18 md:h-18 lg:w-20 lg:h-20 opacity-80 filter invert"
                />
              </div>

              {/* Telegram Icons */}
              <div className="absolute -bottom-8 -left-16 sm:-bottom-12 sm:-left-20 md:-bottom-16 md:-left-24 animate-bounce" style={{ animationDuration: '3s', animationDelay: '2s' }}>
                <img 
                  src="/lovable-uploads/8333340e-d023-4458-bc32-bd7b5357ee94.png" 
                  alt="Telegram" 
                  className="w-10 h-10 sm:w-14 sm:h-14 md:w-18 md:h-18 lg:w-20 lg:h-20 opacity-80"
                />
              </div>

              <div className="absolute -top-8 -right-16 sm:-top-12 sm:-right-20 md:-top-16 md:-right-24 animate-bounce" style={{ animationDuration: '3s', animationDelay: '2.5s' }}>
                <img 
                  src="/lovable-uploads/8333340e-d023-4458-bc32-bd7b5357ee94.png" 
                  alt="Telegram" 
                  className="w-10 h-10 sm:w-14 sm:h-14 md:w-18 md:h-18 lg:w-20 lg:h-20 opacity-80"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Services Text */}
        <div className="mb-6 sm:mb-8">
          <div className="inline-block bg-muted/40 backdrop-blur-sm border border-muted-foreground/20 rounded-full px-6 py-3 shadow-lg">
            <p className="text-white text-base sm:text-lg md:text-xl font-bold font-sans">
              All <span className="text-[#5865F2]">Discord</span>, <span className="text-[#5865F2]">Telegram</span> & <span className="text-[#5865F2]">X</span> services available
            </p>
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-space font-bold mb-4 sm:mb-6 leading-tight">
          Bridging Projects to{' '}
          <span className="bg-gradient-to-r from-primary to-nexus-cyan bg-clip-text text-transparent">
            Communities
          </span>
        </h1>

        {/* Subheading */}
        <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-12">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-foreground font-semibold font-space">
            Tailored Web3 Growth Solutions
          </p>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-inter px-4">
            Expert community management teams to build, secure, and grow your Web3 presence across Discord, Telegram, and X with proven strategies and dedicated support.
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mb-12 sm:mb-16">
          <MagneticButton 
            size="lg"
            className="h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl shadow-lg"
            onClick={() => scrollToSection('contact')}
          >
            Get Started Today
          </MagneticButton>
        </div>

        {/* Scroll indicator */}
        <button 
          onClick={() => scrollToSection('overview')}
          className="group flex flex-col items-center gap-2 mx-auto hover:scale-110 transition-all duration-300 p-2 rounded-lg hover:bg-primary/10"
        >
          <span className="text-xs sm:text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
            Discover More
          </span>
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center group-hover:border-primary transition-colors">
            <ChevronDown className="w-3 h-3 mt-2 animate-bounce text-primary" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
