import React, { useRef, useEffect } from 'react';

const Background: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    // Cap DPR at 1.5 for performance on high-DPI screens
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let width = window.innerWidth;
    let height = window.innerHeight;

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // Fewer particles for less CPU work
    const particleCount = 18;
    const particles: { x: number; y: number; vx: number; vy: number; size: number }[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        size: Math.random() * 1.5 + 0.8,
      });
    }

    // Connection distance squared (avoid Math.sqrt per frame)
    const maxDistSq = 120 * 120;

    let animationFrameId: number;

    const render = (timestamp: number) => {
      animationFrameId = requestAnimationFrame(render);

      ctx.clearRect(0, 0, width, height);

      // Draw particles
      for (let i = 0; i < particleCount; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.fillStyle = 'rgba(79, 70, 229, 0.12)';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby particles — only check forward to halve iterations
        for (let j = i + 1; j < particleCount; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < maxDistSq) {
            const alpha = 0.04 * (1 - distSq / maxDistSq);
            ctx.strokeStyle = `rgba(79, 70, 229, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
    };

    if (!prefersReducedMotion) {
      let isPaused = false;

      const handleVisibilityChange = () => {
        if (document.hidden) {
          isPaused = true;
        } else {
          isPaused = false;
          animationFrameId = requestAnimationFrame(render);
        }
      };

      document.addEventListener('visibilitychange', handleVisibilityChange);

      const renderWithPause = (timestamp: number) => {
        if (!isPaused) {
          animationFrameId = requestAnimationFrame(renderWithPause);
          ctx.clearRect(0, 0, width, height);

          // Draw particles
          for (let i = 0; i < particleCount; i++) {
            const p = particles[i];
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0) p.x = width;
            if (p.x > width) p.x = 0;
            if (p.y < 0) p.y = height;
            if (p.y > height) p.y = 0;

            ctx.fillStyle = 'rgba(79, 70, 229, 0.12)';
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();

            // Connect nearby particles — only check forward to halve iterations
            for (let j = i + 1; j < particleCount; j++) {
              const p2 = particles[j];
              const dx = p.x - p2.x;
              const dy = p.y - p2.y;
              const distSq = dx * dx + dy * dy;
              if (distSq < maxDistSq) {
                const alpha = 0.04 * (1 - distSq / maxDistSq);
                ctx.strokeStyle = `rgba(79, 70, 229, ${alpha})`;
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
              }
            }
          }
        }
      };

      animationFrameId = requestAnimationFrame(renderWithPause);

      return () => {
        window.removeEventListener('resize', handleResize);
        document.removeEventListener('visibilitychange', handleVisibilityChange);
        cancelAnimationFrame(animationFrameId);
      };
    } else {
      // Draw a single static frame for reduced-motion users
      for (let i = 0; i < particleCount; i++) {
        const p = particles[i];
        ctx.fillStyle = 'rgba(79, 70, 229, 0.1)';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10 pointer-events-none"
    />
  );
};

export default Background;