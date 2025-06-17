
import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Twitter, MessageCircle, Send } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-primary/10 border border-primary/20 rounded-full px-3 py-1 mb-4">
              <MessageCircle className="w-3 h-3 text-primary mr-2" />
              <span className="text-xs sm:text-sm font-semibold text-primary">Get In Touch</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-space font-bold mb-4">
              Ready to <span className="bg-gradient-to-r from-primary to-nexus-cyan bg-clip-text text-transparent">Connect?</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Let's discuss how NEXUS can elevate your Web3 project and build thriving communities together
            </p>
          </div>

          {/* Contact cards - mobile-optimized */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-12">
            <div className="bg-card border border-border rounded-2xl p-4 sm:p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-xl flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-base sm:text-lg font-space font-semibold mb-2">
                Email Us
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-4 leading-relaxed">
                Get in touch directly for detailed discussions about your project needs
              </p>
              <Button 
                className="w-full h-10 sm:h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg"
                onClick={() => window.open('mailto:mktnexus@partnershipsnexus.com', '_blank')}
              >
                <Mail className="w-4 h-4 mr-2" />
                Send Email
                <Send className="w-3 h-3 ml-2" />
              </Button>
            </div>

            <div className="bg-card border border-border rounded-2xl p-4 sm:p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-xl flex items-center justify-center">
                <Twitter className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-base sm:text-lg font-space font-semibold mb-2">
                Follow Us
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-4 leading-relaxed">
                Stay updated with our latest projects and Web3 community insights
              </p>
              <Button 
                variant="outline"
                className="w-full h-10 sm:h-12 border-2 border-primary/30 hover:border-primary hover:bg-primary/10 rounded-lg"
                onClick={() => window.open('https://twitter.com/intent/follow?screen_name=Mktnexus', '_blank')}
              >
                <Twitter className="w-4 h-4 mr-2" />
                Follow on Twitter
                <Send className="w-3 h-3 ml-2" />
              </Button>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center bg-card border border-border rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-space font-bold mb-3">
              Ready to Transform Your Community?
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
              Join the growing list of successful Web3 projects that trust NEXUS for their community management and growth strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button 
                className="h-10 sm:h-12 px-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg"
                onClick={() => window.open('mailto:mktnexus@partnershipsnexus.com', '_blank')}
              >
                Start Your Project
                <Send className="w-3 h-3 ml-2" />
              </Button>
              <Button 
                variant="outline"
                className="h-10 sm:h-12 px-6 border-2 border-primary/30 hover:border-primary hover:bg-primary/10 rounded-lg"
                onClick={() => document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
