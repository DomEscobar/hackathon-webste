import React from 'react';
import { motion } from 'framer-motion';

interface CyberIconProps {
  icon: React.ReactNode;
  color?: 'cyan' | 'magenta' | 'yellow';
  size?: 'sm' | 'md' | 'lg';
  pulse?: boolean;
}

const CyberIcon: React.FC<CyberIconProps> = ({ 
  icon, 
  color = 'cyan',
  size = 'md',
  pulse = true
}) => {
  // Size classes
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };
  
  // Color classes
  const colorClasses = {
    cyan: {
      border: 'border-cyan-500',
      glow: '0 0 5px #0ff, 0 0 10px #0ff',
      fill: 'text-cyan-400',
      accent: 'from-cyan-400 to-blue-600'
    },
    magenta: {
      border: 'border-pink-500',
      glow: '0 0 5px #f0f, 0 0 10px #f0f',
      fill: 'text-pink-400',
      accent: 'from-pink-400 to-purple-600'
    },
    yellow: {
      border: 'border-yellow-400',
      glow: '0 0 5px #ff0, 0 0 10px #ff0',
      fill: 'text-yellow-300',
      accent: 'from-yellow-300 to-amber-500'
    }
  };
  
  return (
    <motion.div
      className={`relative flex items-center justify-center ${sizeClasses[size]} ${pulse ? 'animate-neon-pulse' : ''}`}
      whileHover={{ scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    >
      {/* Hexagon container */}
      <div className="absolute w-full h-full">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon 
            points="50,0 95,25 95,75 50,100 5,75 5,25" 
            fill="rgba(0,0,0,0.7)"
            stroke={color === 'cyan' ? '#0ff' : color === 'magenta' ? '#f0f' : '#ff0'}
            strokeWidth="2"
            style={{ 
              filter: `drop-shadow(${colorClasses[color].glow})` 
            }}
          />
          <polygon 
            points="50,10 85,30 85,70 50,90 15,70 15,30" 
            fill="transparent" 
            stroke="rgba(255,255,255,0.1)" 
            strokeWidth="1" 
            strokeDasharray="5,5"
          />
        </svg>
      </div>
      
      {/* Icon */}
      <div className={`relative z-10 ${colorClasses[color].fill}`}>
        {icon}
      </div>
      
      {/* Dynamic gradient background */}
      <div className="absolute inset-0 -z-10">
        <div 
          className={`absolute inset-[20%] rounded-full blur-md bg-gradient-to-br ${colorClasses[color].accent} opacity-20`}
          style={{ 
            filter: `blur(8px) drop-shadow(${colorClasses[color].glow})` 
          }}
        />
      </div>
    </motion.div>
  );
};

export default CyberIcon; 