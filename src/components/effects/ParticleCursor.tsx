import { useRef, useEffect, useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  color: string;
  size: number;
  angle: number;
}

const COLORS = [
  '#4285F4', // Blue
  '#5E35B1', // Purple
  '#7B1FA2', // Deep Purple
  '#C2185B', // Pink
  '#D32F2F', // Red
  '#F57C00', // Orange
  '#FBC02D', // Yellow
  '#388E3C', // Green
  '#00ACC1', // Cyan
];

export const ParticleCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, prevX: 0, prevY: 0 });
  const animationRef = useRef<number>();

  const createParticle = useCallback((x: number, y: number, velocityX: number, velocityY: number) => {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 2 + 1;
    const colorIndex = Math.floor(Math.random() * COLORS.length);
    
    // Add velocity from mouse movement
    const vx = Math.cos(angle) * speed + velocityX * 0.1;
    const vy = Math.sin(angle) * speed + velocityY * 0.1;

    return {
      x,
      y,
      vx,
      vy,
      life: 1,
      maxLife: Math.random() * 60 + 40,
      color: COLORS[colorIndex],
      size: Math.random() * 3 + 2,
      angle: Math.random() * Math.PI * 2,
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.prevX = mouseRef.current.x;
      mouseRef.current.prevY = mouseRef.current.y;
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;

      // Calculate velocity
      const velocityX = mouseRef.current.x - mouseRef.current.prevX;
      const velocityY = mouseRef.current.y - mouseRef.current.prevY;
      const speed = Math.sqrt(velocityX * velocityX + velocityY * velocityY);

      // Create particles based on movement speed
      const particleCount = Math.min(Math.floor(speed / 3) + 2, 8);
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push(
          createParticle(
            e.clientX + (Math.random() - 0.5) * 10,
            e.clientY + (Math.random() - 0.5) * 10,
            velocityX,
            velocityY
          )
        );
      }

      // Limit particles
      if (particlesRef.current.length > 300) {
        particlesRef.current = particlesRef.current.slice(-300);
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current = particlesRef.current.filter((particle) => {
        particle.life -= 1 / particle.maxLife;
        
        if (particle.life <= 0) return false;

        // Update position with slight drift
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Slow down over time
        particle.vx *= 0.98;
        particle.vy *= 0.98;

        // Draw particle as a small dash/line
        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.angle);
        
        ctx.globalAlpha = particle.life * 0.8;
        ctx.fillStyle = particle.color;
        
        // Draw as small rounded rectangle (dash-like)
        const width = particle.size * 2.5;
        const height = particle.size * 0.8;
        ctx.beginPath();
        ctx.roundRect(-width / 2, -height / 2, width, height, height / 2);
        ctx.fill();
        
        ctx.restore();

        return true;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [createParticle]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-20"
      style={{ mixBlendMode: 'normal' }}
    />
  );
};
