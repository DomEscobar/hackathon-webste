import React, { useEffect, useRef } from 'react';

const MatrixBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);
    
    // Enhanced character set - more diverse matrix characters
    const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const charArray = characters.split('');
    
    // Font size and columns calculation - increased spacing for less density
    const fontSize = 14;
    const columnSpacing = fontSize * 4; // Increased spacing between columns for fewer elements
    const columns = Math.ceil(canvas.width / columnSpacing);
    
    // Arrays to track properties for each column
    const drops: number[] = [];
    const speeds: number[] = [];
    const colors: string[] = [];
    const opacityBase: number[] = [];
    const isActive: boolean[] = []; // Which columns are active
    
    // Initialize drops with various properties
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -canvas.height; // Start above the canvas at random positions
      speeds[i] = Math.random() * 0.4 + 0.2; // Slower speeds between 0.2 and 0.6
      
      // Only activate ~60% of columns for less density
      isActive[i] = Math.random() > 0.4;
      
      // Color variations - mostly green but with some blue and pink highlights
      const colorType = Math.random();
      if (colorType > 0.96) {
        colors[i] = 'rgba(255, 0, 170, '; // Occasional pink
      } else if (colorType > 0.9) {
        colors[i] = 'rgba(0, 170, 255, '; // Some blue
      } else {
        colors[i] = 'rgba(0, 255, 170, '; // Mostly green
      }
      
      // Base opacity varies (first character is brighter)
      opacityBase[i] = Math.random() * 0.3 + 0.4;
    }
    
    // Drawing the enhanced matrix
    const draw = () => {
      // Semi-transparent black for the trail effect - slightly more fade for slower effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.07)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Set the character style
      ctx.font = `${fontSize}px 'Courier New', monospace`;
      
      // Draw each column
      for (let i = 0; i < drops.length; i++) {
        // Skip inactive columns
        if (!isActive[i]) continue;
        
        // Get y position in pixels
        const y = Math.floor(drops[i]) * fontSize;
        
        // Only process columns that are within or above the viewport
        if (y < canvas.height + fontSize) {
          // Head character (brightest)
          const headChar = charArray[Math.floor(Math.random() * charArray.length)];
          ctx.fillStyle = colors[i] + '1)'; // Full opacity for head
          ctx.fillText(headChar, i * columnSpacing, y);
          
          // Draw trailing characters with diminishing opacity - shorter trails
          const trailLength = Math.floor(Math.random() * 5) + 3; // Random trail length between 3-7
          for (let j = 1; j < trailLength; j++) {
            if (y - j * fontSize > 0) {
              const trailChar = charArray[Math.floor(Math.random() * charArray.length)];
              const opacity = Math.max(0, opacityBase[i] - (j * 0.05));
              ctx.fillStyle = colors[i] + opacity + ')';
              ctx.fillText(trailChar, i * columnSpacing, y - j * fontSize);
            }
          }
        }
        
        // Move drops down by their specific speed
        drops[i] += speeds[i];
        
        // Reset when drops go off screen, with random delay
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.98) {
          drops[i] = 0;
          // Occasionally change speed and color for variety
          if (Math.random() > 0.8) {
            speeds[i] = Math.random() * 0.4 + 0.2; // Keep speeds slow
            
            const colorType = Math.random();
            if (colorType > 0.96) {
              colors[i] = 'rgba(255, 0, 170, ';
            } else if (colorType > 0.9) {
              colors[i] = 'rgba(0, 170, 255, ';
            } else {
              colors[i] = 'rgba(0, 255, 170, ';
            }
          }
        }
      }
      
      // Call animation frame - with slower framerate for performance and speed reduction
      setTimeout(() => {
        requestAnimationFrame(draw);
      }, 35); // Adding a slight delay between frames
    };
    
    draw();
    
    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full -z-30 opacity-25" // Slightly reduced opacity
    />
  );
};

export default MatrixBackground; 