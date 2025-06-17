
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import NexusLogo from './NexusLogo';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'Overview', id: 'overview' },
    { label: 'Services', id: 'deliverables' },
    { label: 'Team', id: 'team' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <div className="flex items-center">
            <NexusLogo className="h-6 w-auto sm:h-8 cursor-pointer hover:scale-105 transition-transform" 
              onClick={() => scrollToSection('hero')} />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <Button 
              size="sm"
              className="h-9 px-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg"
              onClick={() => scrollToSection('contact')}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground hover:text-primary transition-colors p-2 rounded-lg"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border rounded-b-xl mt-2 shadow-xl">
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-lg transition-all duration-300"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-3 border-t border-border">
                <Button 
                  className="w-full h-10 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg"
                  onClick={() => scrollToSection('contact')}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
