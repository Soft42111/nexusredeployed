
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Users, TrendingUp, CheckCircle } from 'lucide-react';
import NexusLogo from './NexusLogo';
import MagneticButton from '@/components/ui/magnetic-button';
import MetricsSection from './MetricsSection';
import ClientLogos from './ClientLogos';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const OverviewSection = () => {
  const { elementRef: featuresRef, isVisible: featuresVisible } = useScrollAnimation<HTMLDivElement>();

  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Building",
      description: "Expert teams dedicated to growing authentic Web3 communities"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security & Moderation", 
      description: "24/7 protection against scams and malicious activities"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Growth Strategies",
      description: "Data-driven approaches to sustainable community expansion"
    }
  ];

  const highlights = [
    "Professional community management teams",
    "High-impact airdrop campaigns",
    "Data-driven growth strategies",
    "24/7 dedicated support"
  ];

  return (
    <section id="overview" className="py-12 sm:py-16 lg:py-20 bg-muted/30 relative overflow-hidden">
      {/* Simplified background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-nexus-cyan/5 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center bg-primary/10 border border-primary/20 rounded-full px-3 py-1 mb-4">
              <span className="text-xs sm:text-sm font-semibold text-primary">About NEXUS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-space font-bold mb-4">
              Project <span className="bg-gradient-to-r from-primary to-nexus-cyan bg-clip-text text-transparent">Overview</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Transforming Web3 communities with expert management and strategic growth solutions
            </p>
          </div>

          {/* Metrics */}
          <MetricsSection />

          {/* Main content */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
            {/* Logo */}
            <div className="flex justify-center order-2 lg:order-1">
              <div className="relative group">
                <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-card border border-border rounded-3xl flex items-center justify-center p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <NexusLogo className="w-full h-full" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6 order-1 lg:order-2">
              <div className="space-y-4">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-foreground font-medium">{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                <p className="text-foreground">
                  We provide <span className="text-primary font-semibold">expert community management teams</span> to build, 
                  secure, and grow your Web3 presence across Discord, Telegram, and Twitter.
                </p>

                <p className="text-foreground">
                  Beyond management, we execute <span className="text-primary font-semibold">high impact airdrop 
                  campaigns</span> designed to attract real users and drive sustainable growth.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <MagneticButton 
                  className="h-10 sm:h-12 px-4 sm:px-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Let's Talk Strategy
                  <ArrowRight className="w-4 h-4 ml-2" />
                </MagneticButton>
                <MagneticButton 
                  variant="outline" 
                  className="h-10 sm:h-12 px-4 sm:px-6 border-2 border-primary/30 hover:border-primary hover:bg-primary/10 rounded-lg"
                  onClick={() => document.getElementById('deliverables')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Services
                </MagneticButton>
              </div>
            </div>
          </div>

          {/* Features */}
          <div 
            ref={featuresRef}
            className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16 transition-all duration-1000 ${
              featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-card border border-border rounded-2xl p-4 sm:p-6 text-center hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-xl flex items-center justify-center">
                  <div className="text-primary">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-space font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Client logos */}
          <ClientLogos />
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
