import React, { useEffect, useRef } from 'react';

const Moon: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Animation variables
    let time = 0;
    const speed = 0.0007;

    // Moon properties
    const moonX = canvas.width * 0.5; // Center horizontally
    const moonY = canvas.height * 0.35; // Position in upper part of screen
    const moonRadius = Math.min(canvas.width, canvas.height) * 0.15; // Larger moon
    
    // Moon animation loop
    const drawMoon = () => {
      // Clear only the moon area to avoid flickering
      ctx.clearRect(
        moonX - moonRadius - 100, 
        moonY - moonRadius - 100, 
        moonRadius * 2 + 200, 
        moonRadius * 2 + 200
      );
      
      time += speed;
      
      // Draw outer glow rings
      for (let i = 4; i >= 0; i--) {
        const ringSize = 1 + i * 0.08;
        const opacity = 0.15 - i * 0.03;
        const ringPulse = Math.sin(time * 3000 + i) * 0.05;
        
        ctx.beginPath();
        ctx.arc(moonX, moonY, moonRadius * (ringSize + ringPulse), 0, Math.PI * 2);
        
        // Gradient for outer rings
        const ringGradient = ctx.createRadialGradient(
          moonX, moonY, moonRadius * ringSize * 0.8,
          moonX, moonY, moonRadius * ringSize
        );
        
        // Cycle colors based on time
        const hue1 = (time * 1000) % 360;
        const hue2 = (hue1 + 180) % 360;
        
        ringGradient.addColorStop(0, `hsla(${hue1}, 100%, 70%, 0)`);
        ringGradient.addColorStop(0.5, `hsla(${hue1}, 100%, 70%, ${opacity})`);
        ringGradient.addColorStop(1, `hsla(${hue2}, 100%, 70%, 0)`);
        
        ctx.fillStyle = ringGradient;
        ctx.fill();
      }
      
      // Main moon body
      ctx.beginPath();
      ctx.arc(moonX, moonY, moonRadius, 0, Math.PI * 2);
      
      // Create shimmering effect
      const shimmerOffset = Math.sin(time * 5000) * 0.05;
      
      // Main moon gradient
      const moonGradient = ctx.createRadialGradient(
        moonX - moonRadius * 0.3, moonY - moonRadius * 0.3, moonRadius * 0.1,
        moonX, moonY, moonRadius * (1 + shimmerOffset)
      );
      
      // Synthwave colors
      moonGradient.addColorStop(0, "rgba(255, 210, 255, 1.0)");
      moonGradient.addColorStop(0.4, "rgba(220, 140, 255, 0.9)");
      moonGradient.addColorStop(0.7, "rgba(130, 80, 255, 0.8)");
      moonGradient.addColorStop(1, "rgba(80, 30, 155, 0.7)");
      
      ctx.fillStyle = moonGradient;
      ctx.fill();
      
      // Add scanlines effect
      ctx.save();
      ctx.beginPath();
      ctx.arc(moonX, moonY, moonRadius, 0, Math.PI * 2);
      ctx.clip();
      
      // Draw horizontal scanlines
      const scanlineSpacing = 4;
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      
      for (let y = moonY - moonRadius; y < moonY + moonRadius; y += scanlineSpacing) {
        ctx.fillRect(moonX - moonRadius, y, moonRadius * 2, 1);
      }
      
      // Draw grid pattern
      const gridSize = moonRadius / 8;
      ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
      ctx.lineWidth = 0.5;
      
      // Horizontal grid lines
      for (let y = moonY - moonRadius; y <= moonY + moonRadius; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(moonX - moonRadius, y);
        ctx.lineTo(moonX + moonRadius, y);
        ctx.stroke();
      }
      
      // Vertical grid lines
      for (let x = moonX - moonRadius; x <= moonX + moonRadius; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, moonY - moonRadius);
        ctx.lineTo(x, moonY + moonRadius);
        ctx.stroke();
      }
      
      // Add some random glitch effects
      if (Math.random() > 0.97) {
        const glitchX = moonX - moonRadius + Math.random() * moonRadius * 2;
        const glitchY = moonY - moonRadius + Math.random() * moonRadius * 2;
        const glitchW = Math.random() * moonRadius * 0.5;
        const glitchH = Math.random() * 5 + 2;
        
        // Random colors for glitch
        const glitchColor = Math.random() > 0.5 
          ? "rgba(0, 255, 255, 0.8)" 
          : "rgba(255, 0, 255, 0.8)";
          
        ctx.fillStyle = glitchColor;
        ctx.fillRect(glitchX, glitchY, glitchW, glitchH);
      }
      
      // Draw circular highlight
      ctx.beginPath();
      ctx.arc(
        moonX - moonRadius * 0.2, 
        moonY - moonRadius * 0.2, 
        moonRadius * 0.2, 
        0, Math.PI * 2
      );
      
      const highlightGradient = ctx.createRadialGradient(
        moonX - moonRadius * 0.2, moonY - moonRadius * 0.2, 0,
        moonX - moonRadius * 0.2, moonY - moonRadius * 0.2, moonRadius * 0.2
      );
      
      highlightGradient.addColorStop(0, "rgba(255, 255, 255, 0.4)");
      highlightGradient.addColorStop(1, "rgba(255, 255, 255, 0)");
      
      ctx.fillStyle = highlightGradient;
      ctx.fill();
      
      ctx.restore();
      
      // Continue animation
      requestAnimationFrame(drawMoon);
    };

    drawMoon();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-15"
    />
  );
};

export default Moon; 