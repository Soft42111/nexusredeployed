
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 sm:py-12 bg-muted border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-8">
            {/* Company info */}
            <div className="text-center sm:text-left">
              <h3 className="text-lg sm:text-xl font-space font-bold text-primary mb-1">NEXUS</h3>
              <p className="text-xs sm:text-sm text-muted-foreground font-inter">
                © 2025 NEXUS. All rights reserved.
              </p>
            </div>

            {/* Legal links */}
            <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors font-inter"
              >
              
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors font-inter"
              >
              
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
