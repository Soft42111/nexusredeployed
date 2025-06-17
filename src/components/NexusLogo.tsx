
import React from 'react';

const NexusLogo = ({
  className = "",
  onClick
}: {
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <div className={`relative ${className}`} onClick={onClick}>
      <img 
        src="/lovable-uploads/a6d711a1-82c5-434f-87bf-2efcfcc0bb32.png"
        alt="Nexus Logo"
        className="w-full h-full object-contain rounded-3xl"
      />
    </div>
  );
};

export default NexusLogo;
