import React from 'react';
import { motion } from 'framer-motion';

interface GlitchTextProps {
  text: string;
  className?: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, className = '' }) => {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative inline-block">
        <span className="relative z-10 text-white">{text}</span>
        <span className="absolute top-0 left-0.5 text-cyan-400 opacity-70 animate-glitch1">{text}</span>
        <span className="absolute -top-0.5 -left-0.5 text-pink-500 opacity-70 animate-glitch2">{text}</span>
      </div>
    </motion.div>
  );
};

export default GlitchText;