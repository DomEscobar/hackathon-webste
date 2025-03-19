import React from 'react';
import { motion } from 'framer-motion';

interface CyberButtonProps {
  text: string;
  href?: string;
  icon?: React.ReactNode;
  color?: 'cyan' | 'magenta' | 'yellow';
  size?: 'sm' | 'md' | 'lg';
  outline?: boolean;
  className?: string;
  onClick?: () => void;
}

const CyberButton: React.FC<CyberButtonProps> = ({ 
  text, 
  href, 
  icon, 
  color = 'cyan', 
  size = 'md',
  outline = false,
  className = '',
  onClick
}) => {
  // Size classes
  const sizeClasses = {
    sm: 'text-xs px-3 py-1',
    md: 'text-sm px-5 py-2',
    lg: 'text-base px-6 py-3'
  };
  
  // Color styles
  const colorStyles = {
    cyan: {
      solid: 'bg-cyan-900/50 border-cyan-400/50 text-cyan-300 hover:bg-cyan-800/60',
      outline: 'border-cyan-400/50 text-cyan-300 hover:bg-cyan-900/30',
      glow: '0 0 8px rgba(6, 182, 212, 0.5)',
      highlight: 'from-cyan-400 to-cyan-600'
    },
    magenta: {
      solid: 'bg-pink-900/50 border-pink-400/50 text-pink-300 hover:bg-pink-800/60',
      outline: 'border-pink-400/50 text-pink-300 hover:bg-pink-900/30',
      glow: '0 0 8px rgba(236, 72, 153, 0.5)',
      highlight: 'from-pink-400 to-pink-600'
    },
    yellow: {
      solid: 'bg-amber-900/50 border-amber-400/50 text-amber-300 hover:bg-amber-800/60',
      outline: 'border-amber-400/50 text-amber-300 hover:bg-amber-900/30',
      glow: '0 0 8px rgba(245, 158, 11, 0.5)',
      highlight: 'from-amber-400 to-amber-600'
    }
  };
  
  const buttonStyle = outline ? colorStyles[color].outline : colorStyles[color].solid;
  
  const ButtonContent = () => (
    <>
      <span className="relative z-10 flex items-center justify-center gap-2 font-medium tracking-wider uppercase">
        {icon && <span>{icon}</span>}
        {text}
      </span>
      
      {/* Corner accents */}
      <span className="absolute top-0 left-0 w-3 h-3 border-t border-l"></span>
      <span className="absolute top-0 right-0 w-3 h-3 border-t border-r"></span>
      <span className="absolute bottom-0 left-0 w-3 h-3 border-b border-l"></span>
      <span className="absolute bottom-0 right-0 w-3 h-3 border-b border-r"></span>
      
      {/* Hover gradient highlight */}
      <span className={`absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r ${colorStyles[color].highlight} transition-all duration-300`}></span>
      <span className={`absolute top-0 right-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-l ${colorStyles[color].highlight} transition-all duration-300`}></span>
    </>
  );
  
  return href ? (
    <motion.a 
      href={href}
      className={`group relative inline-flex border ${buttonStyle} ${sizeClasses[size]} ${className} transition-colors duration-200`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      target="_blank"
      rel="noopener noreferrer"
      style={{ boxShadow: colorStyles[color].glow }}
    >
      <ButtonContent />
    </motion.a>
  ) : (
    <motion.button
      onClick={onClick}
      className={`group relative inline-flex border ${buttonStyle} ${sizeClasses[size]} ${className} transition-colors duration-200`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      style={{ boxShadow: colorStyles[color].glow }}
    >
      <ButtonContent />
    </motion.button>
  );
};

export default CyberButton; 