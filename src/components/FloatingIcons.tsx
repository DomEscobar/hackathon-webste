import React from 'react';
import { motion } from 'framer-motion';

interface FloatingIcon {
  id: number;
  icon: string;
  size: number;
  position: {
    x: number;
    y: number;
  };
  animation: {
    duration: number;
    delay: number;
    y: number;
  };
}

// Simplified set of programming icons - fewer and less visually complex
const programmingIcons = [
  '{ }', '<>', '/>', '01', '()', '[]'
];

const FloatingIcons: React.FC = () => {
  // Generate random icons with positions and animations - reduced to just 8 icons
  const icons: FloatingIcon[] = [];
  
  for (let i = 0; i < 8; i++) {
    icons.push({
      id: i,
      icon: programmingIcons[Math.floor(Math.random() * programmingIcons.length)],
      size: Math.floor(Math.random() * 6) + 8, // Smaller size between 8px and 14px
      position: {
        x: Math.random() * 80 + 10, // Keep icons more in the background (10-90% width)
        y: Math.random() * 80 + 10, // Keep icons more in the background (10-90% height)
      },
      animation: {
        duration: Math.random() * 15 + 25, // Slower animation duration between 25-40s
        delay: Math.random() * 5, // Random delay up to 5s
        y: (Math.random() * 10) - 5, // Reduced vertical movement, only 5px up or down
      }
    });
  }
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {icons.map(icon => (
        <motion.div
          key={icon.id}
          className="absolute text-cyan-400/20 font-mono font-bold" // Reduced opacity to 20%
          initial={{
            x: `${icon.position.x}%`,
            y: `${icon.position.y}%`,
            opacity: 0,
          }}
          animate={{
            y: [`${icon.position.y}%`, `${icon.position.y + icon.animation.y}%`, `${icon.position.y}%`],
            opacity: [0, 0.4, 0], // Reduced maximum opacity to 40%
            rotate: [0, Math.random() > 0.5 ? 5 : -5, 0], // Reduced rotation amount
          }}
          transition={{
            duration: icon.animation.duration,
            delay: icon.animation.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            fontSize: `${icon.size}px`,
          }}
        >
          {icon.icon}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingIcons; 