import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TeamSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const teamMembers = [
    {
      name: "Winston",
      role: "CEO & Founder",
      bio: "Visionary leader with extensive experience in Web3 ecosystem development and community building strategies.",
      image: "/lovable-uploads/1e1f64a6-b69c-4860-9e3e-0aeb6e9f6833.png",
      contacts: {
        discord: "aluubukhara",
        telegram: "aluubukharaa"
      }
    },
    {
      name: "Ali Awab",
      role: "Co-Founder & CSO",
      bio: "Strategic mastermind specializing in growth frameworks and sustainable community engagement strategies.",
      image: "/lovable-uploads/9f97dc7f-8523-4f1f-83f0-02d03c7a2d76.png",
      contacts: {
        discord: "aliawab",
        telegram: "datsleepyhead"
      }
    }
  ];

  // Auto-loop carousel with 8 second intervals
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % teamMembers.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [teamMembers.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  return (
    <section id="team" className="section-spacing bg-secondary/30">
      <div className="container mx-auto mobile-padding">
        <div className="max-w-5xl mx-auto">
          {/* Enhanced Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-6">
              <span className="text-sm uppercase tracking-wider text-primary font-semibold">Our Team</span>
            </div>
            <h2 className="heading-lg mb-6">
              Meet the <span className="text-gradient">Founders</span>
            </h2>
            <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
              The talented team behind NEXUS who make your Web3 dreams a reality
            </p>
          </div>

          {/* Enhanced Team Carousel */}
          <div className="relative">
            <div className="enhanced-card overflow-hidden">
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 p-2">
                {/* Image */}
                <div className="flex-shrink-0 order-1 lg:order-1">
                  <div className="relative">
                    <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl">
                      <img 
                        src={teamMembers[currentSlide].image}
                        alt={teamMembers[currentSlide].name}
                        className="w-full h-full object-cover transition-all duration-700 hover:scale-110"
                        style={{ filter: 'none' }}
                      />
                    </div>
                    <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-nexus-cyan/20 rounded-2xl blur-xl -z-10"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center lg:text-left order-2 lg:order-2">
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-space font-bold mb-3 text-gradient transition-all duration-700">
                    {teamMembers[currentSlide].name}
                  </h3>
                  <p className="text-xl sm:text-2xl text-primary mb-6 font-semibold transition-all duration-700">
                    {teamMembers[currentSlide].role}
                  </p>
                  <p className="body-md text-muted-foreground leading-relaxed max-w-2xl mb-6 transition-all duration-700">
                    {teamMembers[currentSlide].bio}
                  </p>
                  
                  {/* Contact Information */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <a 
                      href={`https://discord.com/users/${teamMembers[currentSlide].contacts.discord}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg hover:bg-primary/20 transition-all duration-700"
                    >
                      <span className="text-sm font-medium">Discord: {teamMembers[currentSlide].contacts.discord}</span>
                    </a>
                    <a 
                      href={`https://t.me/${teamMembers[currentSlide].contacts.telegram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg hover:bg-primary/20 transition-all duration-700"
                    >
                      <span className="text-sm font-medium">Telegram: {teamMembers[currentSlide].contacts.telegram}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Navigation */}
            <div className="flex justify-center items-center mt-8 gap-6">
              {/* Previous Button */}
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center hover:bg-primary/20 hover:scale-110 transition-all duration-500 focus-ring"
              >
                <ChevronLeft className="w-5 h-5 text-primary" />
              </button>

              {/* Dots */}
              <div className="flex gap-3">
                {teamMembers.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-500 ${
                      index === currentSlide 
                        ? 'bg-primary scale-125 shadow-lg' 
                        : 'bg-primary/30 hover:bg-primary/50'
                    }`}
                  />
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center hover:bg-primary/20 hover:scale-110 transition-all duration-500 focus-ring"
              >
                <ChevronRight className="w-5 h-5 text-primary" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
