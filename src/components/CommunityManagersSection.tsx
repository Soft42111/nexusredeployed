
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { communityManagers } from '@/data/communityManagers';
import { useCommunityCarousel } from '@/hooks/useCommunityCarousel';
import CommunityManagerCard from './CommunityManagerCard';

const CommunityManagersSection = () => {
  // Add Sundoodles to the community managers data
  const allTeamMembers = [
    ...communityManagers,
    {
      name: "Sundoodles",
      role: "Social Media Specialist",
      bio: "Creative social media expert specializing in engaging content creation and brand storytelling across all platforms.",
      image: "/lovable-uploads/3a6188be-a0ec-4df7-a2fc-cd1a727186cd.png"
    }
  ];

  const { currentSlide, handleDotClick, nextSlide, prevSlide } = useCommunityCarousel({
    itemCount: allTeamMembers.length
  });

  // Safety check - don't render if no data or currentSlide is out of bounds
  if (!allTeamMembers.length || !allTeamMembers[currentSlide]) {
    return null;
  }

  const currentMember = allTeamMembers[currentSlide];

  return (
    <section id="community-managers" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-space font-bold mb-6">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground">
              Our dedicated team of community management professionals
            </p>
          </div>

          {/* Community Managers Carousel */}
          <div className="relative">
            <CommunityManagerCard member={currentMember} />
            
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
                {allTeamMembers.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
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

            {/* Team Preview Notice */}
            <div className="flex justify-center mt-8">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/20 rounded-lg text-primary font-medium text-center">
                This is just a preview - we have many more talented team members!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityManagersSection;
