
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare, Shield, TrendingUp, BarChart3, Users, Bot, Globe, Zap } from 'lucide-react';

const DeliverablesSection = () => {
  const deliverables = [
    {
      icon: <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Custom Infrastructure",
      description: "Fully configured Discord, Telegram & Twitter setup with professional branding.",
      details: [
        "Role structures & automated moderation",
        "Essential bots for engagement & security",
        "Custom design & channel organization"
      ]
    },
    {
      icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Community Management",
      description: "24/7 active moderation and real-time support from expert teams.",
      details: [
        "Anti-bot & scam detection measures",
        "Multilingual support for global audience",
        "Professional crisis management"
      ]
    },
    {
      icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Growth Strategies",
      description: "Data-driven community onboarding and retention frameworks.",
      details: [
        "Content & event planning for engagement",
        "Custom strategies for your goals",
        "Gamification & reward systems"
      ]
    },
    {
      icon: <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Analytics & Reporting",
      description: "Comprehensive tracking with weekly insights and optimization.",
      details: [
        "Key performance & user behavior analysis",
        "Strategic roadmap for scaling impact",
        "ROI tracking & growth metrics"
      ]
    }
  ];

  const additionalFeatures = [
    { icon: <Users className="w-4 h-4" />, text: "Team Training" },
    { icon: <Bot className="w-4 h-4" />, text: "AI Integration" },
    { icon: <Globe className="w-4 h-4" />, text: "Global Reach" },
    { icon: <Zap className="w-4 h-4" />, text: "Rapid Deploy" }
  ];

  return (
    <section id="deliverables" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center bg-primary/10 border border-primary/20 rounded-full px-3 py-1 mb-4">
              <span className="text-xs sm:text-sm font-semibold text-primary">What You Get</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-space font-bold mb-4">
              Our <span className="bg-gradient-to-r from-primary to-nexus-cyan bg-clip-text text-transparent">Deliverables</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive solutions designed to transform your Web3 community
            </p>
          </div>

          {/* Deliverables Grid - mobile-first */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-12">
            {deliverables.map((item, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-2xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <div className="text-primary">
                        {item.icon}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-space font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-3 leading-relaxed">
                      {item.description}
                    </p>
                    <ul className="space-y-1.5">
                      {item.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="text-xs sm:text-sm text-foreground flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                          <span className="leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional features */}
          <div className="bg-muted/50 rounded-2xl p-4 sm:p-6 mb-12">
            <h3 className="text-lg sm:text-xl font-space font-semibold text-center mb-4 sm:mb-6">
              Plus Additional <span className="bg-gradient-to-r from-primary to-nexus-cyan bg-clip-text text-transparent">Premium Features</span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {additionalFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-2 bg-primary/10 rounded-lg flex items-center justify-center">
                    <div className="text-primary">{feature.icon}</div>
                  </div>
                  <p className="text-xs sm:text-sm font-medium">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="bg-muted/50 rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
              <h3 className="text-lg sm:text-xl md:text-2xl font-space font-semibold mb-3">
                Ready to Transform Your Community?
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-6">
                Get a custom package tailored specifically to your project's needs and goals.
              </p>
              <Button 
                size="lg"
                className="h-12 px-6 sm:px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl w-full sm:w-auto"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Request Custom Package
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliverablesSection;
