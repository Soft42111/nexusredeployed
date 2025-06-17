
import React from 'react';
import { CommunityManager } from '@/data/communityManagers';

interface CommunityManagerCardProps {
  member: CommunityManager;
}

const CommunityManagerCard = ({ member }: CommunityManagerCardProps) => {
  return (
    <div className="bg-card rounded-2xl p-8 glow-border hover-glow transition-all duration-300">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Image with instant transition */}
        <div className="flex-shrink-0">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary/30">
            <img 
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover filter-none transition-all duration-75 hover:scale-110"
            />
          </div>
        </div>

        {/* Content with instant transition */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-3xl font-space font-bold mb-2 text-gradient transition-all duration-75">
            {member.name}
          </h3>
          <p className="text-xl text-primary mb-4 transition-all duration-75">
            {member.role}
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed transition-all duration-75">
            {member.bio}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommunityManagerCard;
