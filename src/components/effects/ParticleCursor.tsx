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
  originAngle: number;
}

// Get color based on angle (0 = bottom, PI = top) - creates rainbow radial gradient
const getColorFromAngle = (angle: number): string => {
  // Normalize angle to 0-360 degrees, with 0 at the bottom
  // angle is from atan2, so -PI to PI, we offset to make bottom = blue
  const normalizedAngle = ((angle + Math.PI) / (2 * Math.PI)) * 360;
  
  // Map angle to rainbow: bottom (180°) = blue, right (270°) = purple, top (0°/360°) = red/orange, left (90°) = yellow
  const hue = (normalizedAngle + 240) % 360; // Shift so blue is at bottom
  
  return `hsl(${hue}, 80%, 55%)`;
};

export const ParticleCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000, prevX: -1000, prevY: -1000, active: false });
  const animationRef = useRef<number>();
  const lastSpawnRef = useRef(0);

  const createParticle = useCallback((mouseX: number, mouseY: number, velocityX: number, velocityY: number) => {
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 30 + 10;
    const speed = Math.random() * 3 + 1.5;
    
    // Position particle slightly offset from cursor
    const x = mouseX + Math.cos(angle) * distance;
    const y = mouseY + Math.sin(angle) * distance;
    
    // Velocity radiates outward from cursor
    const vx = Math.cos(angle) * speed + velocityX * 0.05;
    const vy = Math.sin(angle) * speed + velocityY * 0.05;

    // Color based on angle from cursor
    const color = getColorFromAngle(angle);

    return {
      x,
      y,
      vx,
      vy,
      life: 1,
      maxLife: Math.random() * 80 + 60,
      color,
      size: Math.random() * 2.5 + 1.5,
      angle: angle + Math.PI / 2, // Rotate dash perpendicular to movement
      originAngle: angle,
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
      mouseRef.current.active = true;

      const now = Date.now();
      if (now - lastSpawnRef.current < 16) return; // Throttle to ~60fps
      lastSpawnRef.current = now;

      // Calculate velocity
      const velocityX = mouseRef.current.x - mouseRef.current.prevX;
      const velocityY = mouseRef.current.y - mouseRef.current.prevY;
      const speed = Math.sqrt(velocityX * velocityX + velocityY * velocityY);

      // Create particles in a burst pattern
      const particleCount = Math.min(Math.floor(speed / 2) + 4, 12);
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push(
          createParticle(e.clientX, e.clientY, velocityX, velocityY)
        );
      }

      // Limit particles
      if (particlesRef.current.length > 500) {
        particlesRef.current = particlesRef.current.slice(-500);
      }
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current = particlesRef.current.filter((particle) => {
        particle.life -= 1 / particle.maxLife;
        
        if (particle.life <= 0) return false;

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Gradually slow down
        particle.vx *= 0.985;
        particle.vy *= 0.985;

        // Draw particle as a small dash/line
        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.angle);
        
        // Fade based on life
        const opacity = Math.min(particle.life * 1.2, 0.9);
        ctx.globalAlpha = opacity;
        ctx.fillStyle = particle.color;
        
        // Draw as small rounded rectangle (dash-like)
        const width = particle.size * 3;
        const height = particle.size * 0.7;
        ctx.beginPath();
        ctx.roundRect(-width / 2, -height / 2, width, height, height / 2);
        ctx.fill();
        
        ctx.restore();

        return true;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
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
