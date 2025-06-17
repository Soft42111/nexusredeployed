
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { 
  Stars, 
  Sparkles, 
  RotateCcw, 
  Settings,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface StarControlsProps {
  enabled: boolean;
  onEnabledChange: (enabled: boolean) => void;
  intensity: number;
  onIntensityChange: (intensity: number) => void;
  interactive: boolean;
  onInteractiveChange: (interactive: boolean) => void;
  shootingStars: boolean;
  onShootingStarsChange: (shootingStars: boolean) => void;
  onClearStars: () => void;
  className?: string;
}

const StarControls: React.FC<StarControlsProps> = ({
  enabled,
  onEnabledChange,
  intensity,
  onIntensityChange,
  interactive,
  onInteractiveChange,
  shootingStars,
  onShootingStarsChange,
  onClearStars,
  className
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [preset, setPreset] = useState<'minimal' | 'moderate' | 'cosmic'>('moderate');

  const applyPreset = (presetType: 'minimal' | 'moderate' | 'cosmic') => {
    setPreset(presetType);
    switch (presetType) {
      case 'minimal':
        onIntensityChange(0.3);
        onInteractiveChange(false);
        onShootingStarsChange(false);
        break;
      case 'moderate':
        onIntensityChange(0.6);
        onInteractiveChange(true);
        onShootingStarsChange(true);
        break;
      case 'cosmic':
        onIntensityChange(1.0);
        onInteractiveChange(true);
        onShootingStarsChange(true);
        break;
    }
  };

  // Save preferences to localStorage
  useEffect(() => {
    const preferences = {
      enabled,
      intensity,
      interactive,
      shootingStars,
      preset
    };
    localStorage.setItem('starfield-preferences', JSON.stringify(preferences));
  }, [enabled, intensity, interactive, shootingStars, preset]);

  // Load preferences from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('starfield-preferences');
    if (saved) {
      try {
        const preferences = JSON.parse(saved);
        onEnabledChange(preferences.enabled ?? true);
        onIntensityChange(preferences.intensity ?? 0.6);
        onInteractiveChange(preferences.interactive ?? true);
        onShootingStarsChange(preferences.shootingStars ?? true);
        setPreset(preferences.preset ?? 'moderate');
      } catch (error) {
        console.log('Could not load star preferences:', error);
      }
    }
  }, []);

  return (
    <div className={cn(
      "fixed bottom-4 right-4 z-50 bg-card/90 backdrop-blur-sm border border-border rounded-xl shadow-lg",
      "transition-all duration-300 ease-in-out",
      isExpanded ? "p-4 w-72" : "p-3 w-auto",
      className
    )}>
      {/* Main Toggle */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Stars className="w-5 h-5 text-primary" />
          <span className="text-sm font-medium">Stars</span>
        </div>
        
        <div className="flex items-center gap-2">
          <Switch
            checked={enabled}
            onCheckedChange={onEnabledChange}
            className="data-[state=checked]:bg-primary"
          />
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1 h-auto"
          >
            {isExpanded ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronUp className="w-4 h-4" />
            )}
          </Button>
        </div>
      </div>

      {/* Expanded Controls */}
      {isExpanded && enabled && (
        <div className="mt-4 space-y-4 animate-fade-in">
          {/* Preset Buttons */}
          <div className="space-y-2">
            <label className="text-xs font-medium text-muted-foreground">Presets</label>
            <div className="grid grid-cols-3 gap-1">
              {(['minimal', 'moderate', 'cosmic'] as const).map((presetType) => (
                <Button
                  key={presetType}
                  variant={preset === presetType ? "default" : "outline"}
                  size="sm"
                  onClick={() => applyPreset(presetType)}
                  className="text-xs capitalize"
                >
                  {presetType}
                </Button>
              ))}
            </div>
          </div>

          {/* Intensity Slider */}
          <div className="space-y-2">
            <label className="text-xs font-medium text-muted-foreground">
              Intensity: {Math.round(intensity * 100)}%
            </label>
            <Slider
              value={[intensity]}
              onValueChange={(value) => onIntensityChange(value[0])}
              max={1}
              min={0.1}
              step={0.1}
              className="w-full"
            />
          </div>

          {/* Feature Toggles */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-nexus-cyan" />
                <span className="text-xs">Interactive</span>
              </div>
              <Switch
                checked={interactive}
                onCheckedChange={onInteractiveChange}
                className="data-[state=checked]:bg-nexus-cyan"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Settings className="w-4 h-4 text-nexus-accent" />
                <span className="text-xs">Shooting Stars</span>
              </div>
              <Switch
                checked={shootingStars}
                onCheckedChange={onShootingStarsChange}
                className="data-[state=checked]:bg-nexus-accent"
              />
            </div>
          </div>

          {/* Clear Button */}
          <Button
            variant="outline"
            size="sm"
            onClick={onClearStars}
            className="w-full text-xs"
          >
            <RotateCcw className="w-3 h-3 mr-2" />
            Clear Stars
          </Button>

          {/* Instructions */}
          {interactive && (
            <div className="text-xs text-muted-foreground text-center bg-muted/50 rounded-lg p-2">
              Click anywhere to create star bursts! ✨
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default StarControls;
