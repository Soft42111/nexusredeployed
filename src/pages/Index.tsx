
import React, { Suspense } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import OverviewSection from '@/components/OverviewSection';
import DeliverablesSection from '@/components/DeliverablesSection';
import CommunityManagersSection from '@/components/CommunityManagersSection';
import TeamSection from '@/components/TeamSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import StarBackground from '@/components/ui/star-background';

// Loading component for better UX
const LoadingFallback = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="animate-pulse text-muted-foreground">Loading...</div>
  </div>
);

const Index = () => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <StarBackground className="min-h-screen bg-background text-foreground gpu-accelerated">
        <Navigation />
        <HeroSection />
        <OverviewSection />
        <DeliverablesSection />
        <CommunityManagersSection />
        <TeamSection />
        <ContactSection />
        <Footer />
      </StarBackground>
    </Suspense>
  );
};

export default Index;
