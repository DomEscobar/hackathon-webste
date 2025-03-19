import React from 'react';

const CityBackground: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-15 overflow-hidden">
      {/* City silhouette */}
      <div className="absolute bottom-0 left-0 w-full h-60 sm:h-80">
        {/* Distant buildings (back layer) */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg 
            viewBox="0 0 1200 300" 
            preserveAspectRatio="none" 
            className="w-full h-full"
            fill="#090024"
          >
            <path d="M0,300 L0,180 L40,190 L80,170 L120,190 L160,180 L200,200 L240,170 L280,160 L320,190 L360,170 L400,180 L440,160 L480,190 L520,180 L560,160 L600,190 L640,180 L680,200 L720,160 L760,180 L800,170 L840,190 L880,170 L920,180 L960,160 L1000,180 L1040,190 L1080,170 L1120,190 L1160,180 L1200,170 L1200,300 Z" />
          </svg>
        </div>
        
        {/* Mid-distance buildings (middle layer) */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg 
            viewBox="0 0 1200 300" 
            preserveAspectRatio="none" 
            className="w-full h-full"
            fill="#0F0A3C"
          >
            <path d="M0,300 L0,150 L20,150 L20,120 L40,120 L40,140 L60,140 L60,110 L80,110 L80,150 L100,150 L100,100 L120,100 L120,130 L140,130 L140,90 L160,90 L160,120 L180,120 L180,80 L200,80 L200,130 L220,130 L220,110 L240,110 L240,140 L260,140 L260,120 L280,120 L280,90 L300,90 L300,140 L320,140 L320,100 L340,100 L340,120 L360,120 L360,80 L380,80 L380,110 L400,110 L400,90 L420,90 L420,120 L440,120 L440,100 L460,100 L460,140 L480,140 L480,120 L500,120 L500,150 L520,150 L520,110 L540,110 L540,130 L560,130 L560,100 L580,100 L580,140 L600,140 L600,90 L620,90 L620,120 L640,120 L640,80 L660,80 L660,100 L680,100 L680,130 L700,130 L700,100 L720,100 L720,140 L740,140 L740,90 L760,90 L760,130 L780,130 L780,110 L800,110 L800,150 L820,150 L820,100 L840,100 L840,120 L860,120 L860,90 L880,90 L880,140 L900,140 L900,100 L920,100 L920,120 L940,120 L940,90 L960,90 L960,110 L980,110 L980,130 L1000,130 L1000,100 L1020,100 L1020,140 L1040,140 L1040,120 L1060,120 L1060,150 L1080,150 L1080,110 L1100,110 L1100,140 L1120,140 L1120,100 L1140,100 L1140,130 L1160,130 L1160,120 L1180,120 L1180,150 L1200,150 L1200,300 Z" />
          </svg>
        </div>

        {/* Close-up buildings (front layer) */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg 
            viewBox="0 0 1200 300" 
            preserveAspectRatio="none" 
            className="w-full h-full"
            fill="#1a1147"
          >
            <path d="M0,300 L0,100 L30,100 L30,80 L60,80 L60,100 L90,100 L90,50 L120,50 L120,90 L150,90 L150,70 L180,70 L180,100 L210,100 L210,40 L240,40 L240,90 L270,90 L270,60 L300,60 L300,80 L330,80 L330,30 L360,30 L360,90 L390,90 L390,50 L420,50 L420,80 L450,80 L450,40 L480,40 L480,70 L510,70 L510,30 L540,30 L540,80 L570,80 L570,60 L600,60 L600,90 L630,90 L630,50 L660,50 L660,80 L690,80 L690,60 L720,60 L720,100 L750,100 L750,40 L780,40 L780,90 L810,90 L810,60 L840,60 L840,80 L870,80 L870,30 L900,30 L900,90 L930,90 L930,70 L960,70 L960,100 L990,100 L990,50 L1020,50 L1020,80 L1050,80 L1050,60 L1080,60 L1080,90 L1110,90 L1110,40 L1140,40 L1140,70 L1170,70 L1170,100 L1200,100 L1200,300 Z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CityBackground; 