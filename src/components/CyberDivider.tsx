import React from 'react';

interface CyberDividerProps {
  className?: string;
  flip?: boolean;
}

const CyberDivider: React.FC<CyberDividerProps> = ({ 
  className = '', 
  flip = false 
}) => {
  return (
    <div className={`relative w-full h-24 ${className}`}>
      <div 
        className={`absolute w-full h-full ${flip ? 'transform rotate-180' : ''}`}
        style={{
          background: 'linear-gradient(to right bottom, transparent 49.5%, #0ff 49.9%, #0ff 50.1%, transparent 50.5%)',
          backgroundSize: '100% 100%',
          opacity: 0.2
        }}
      />
      <div 
        className={`absolute w-full h-full ${flip ? 'transform rotate-180' : ''}`}
        style={{
          background: 'linear-gradient(to right bottom, transparent 49%, #f0f 49.4%, #f0f 49.6%, transparent 50%)',
          backgroundSize: '100% 100%',
          opacity: 0.1
        }}
      />
      <div 
        className={`absolute w-full h-full ${flip ? 'transform rotate-180' : ''}`}
        style={{
          background: 'linear-gradient(to right bottom, transparent 49.8%, rgba(255,255,255,0.3) 49.9%, rgba(255,255,255,0.3) 50.1%, transparent 50.2%)',
          backgroundSize: '100% 100%'
        }}
      />
      
      {/* Scanlines */}
      <div className="absolute inset-0 cyber-scanline animate-scanline opacity-10"></div>
      
      {/* Glitch dots */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => {
          const size = Math.random() * 3 + 1;
          const left = Math.random() * 100;
          const top = Math.random() * 100;
          const color = Math.random() > 0.5 ? '#0ff' : '#f0f';
          
          return (
            <div 
              key={i}
              className="absolute animate-neon-pulse"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${left}%`,
                top: `${top}%`,
                backgroundColor: color,
                boxShadow: `0 0 5px ${color}, 0 0 10px ${color}`
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CyberDivider; 