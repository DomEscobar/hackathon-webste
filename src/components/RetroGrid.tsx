import React, { useEffect, useRef } from 'react';

const RetroGrid: React.FC = () => {
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

    // Grid properties
    const CELL_SIZE = 50;
    const SPEED = 1;
    let offset = 0;

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Set perspective vanishing point
      const vanishingPointY = canvas.height * 0.5;
      const horizonY = canvas.height * 0.5;

      // Draw vertical lines
      for (let x = 0; x <= canvas.width + CELL_SIZE; x += CELL_SIZE) {
        const adjustedX = (x + offset) % (canvas.width + CELL_SIZE) - CELL_SIZE;
        
        ctx.beginPath();
        ctx.moveTo(adjustedX, canvas.height);
        ctx.lineTo(
          adjustedX * 0.5 + canvas.width * 0.25,
          horizonY
        );
        
        const gradient = ctx.createLinearGradient(0, canvas.height, 0, horizonY);
        gradient.addColorStop(0, 'rgba(0, 255, 255, 0.8)');
        gradient.addColorStop(1, 'rgba(0, 255, 255, 0)');
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      // Draw horizontal lines
      for (let y = horizonY; y <= canvas.height; y += CELL_SIZE) {
        const scale = (y - horizonY) / (canvas.height - horizonY);
        
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        gradient.addColorStop(0, `rgba(255, 0, 255, ${scale * 0.8})`);
        gradient.addColorStop(1, `rgba(255, 0, 255, ${scale * 0.8})`);
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      offset = (offset + SPEED) % CELL_SIZE;
      requestAnimationFrame(drawGrid);
    };

    drawGrid();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
};

export default RetroGrid;