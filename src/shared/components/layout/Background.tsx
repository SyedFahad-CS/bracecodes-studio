import React, { useRef, useEffect } from 'react';

const Background: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let width = window.innerWidth;
    let height = window.innerHeight;
    let resizeTimeout: ReturnType<typeof setTimeout> | null = null;

    // Detect browser support for Offscreen Canvas transfer to Worker
    const supportsOffscreen = typeof HTMLCanvasElement.prototype.transferControlToOffscreen === 'function';

    if (supportsOffscreen) {
      // Create Worker
      const worker = new Worker(new URL('./background.worker.ts', import.meta.url), { type: 'module' });

      // Transfer Canvas Control to Web Worker
      const offscreen = canvas.transferControlToOffscreen();
      worker.postMessage(
        {
          type: 'INIT',
          data: {
            canvas: offscreen,
            width,
            height,
            dpr,
            prefersReducedMotion,
          },
        },
        [offscreen]
      );

      const handleResize = () => {
        if (resizeTimeout) {
          clearTimeout(resizeTimeout);
        }
        resizeTimeout = setTimeout(() => {
          width = window.innerWidth;
          height = window.innerHeight;
          worker.postMessage({
            type: 'RESIZE',
            data: { width, height, dpr },
          });
        }, 100);
      };

      const handleVisibilityChange = () => {
        if (document.hidden) {
          worker.postMessage({ type: 'PAUSE' });
        } else {
          worker.postMessage({ type: 'RESUME' });
        }
      };

      window.addEventListener('resize', handleResize);
      document.addEventListener('visibilitychange', handleVisibilityChange);

      return () => {
        window.removeEventListener('resize', handleResize);
        document.removeEventListener('visibilitychange', handleVisibilityChange);
        if (resizeTimeout) clearTimeout(resizeTimeout);
        worker.terminate();
      };
    } else {
      // --- Main Thread Fallback for older browsers ---
      const ctx = canvas.getContext('2d', { alpha: true });
      if (!ctx) return;

      const handleFallbackResize = () => {
        if (resizeTimeout) {
          clearTimeout(resizeTimeout);
        }
        resizeTimeout = setTimeout(() => {
          width = window.innerWidth;
          height = window.innerHeight;
          canvas.width = width * dpr;
          canvas.height = height * dpr;
          canvas.style.width = `${width}px`;
          canvas.style.height = `${height}px`;
          ctx.scale(dpr, dpr);

          if (prefersReducedMotion) {
            drawFallbackStaticFrame();
          }
        }, 100);
      };

      // Initial Sync resize
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);

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

      const maxDistSq = 120 * 120;
      let animationFrameId: number;

      const drawFallbackStaticFrame = () => {
        ctx.clearRect(0, 0, width, height);
        for (let i = 0; i < particleCount; i++) {
          const p = particles[i];
          ctx.fillStyle = 'rgba(79, 70, 229, 0.1)';
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        }
      };

      let isPaused = false;

      const renderFallback = () => {
        if (isPaused) return;

        animationFrameId = requestAnimationFrame(renderFallback);
        ctx.clearRect(0, 0, width, height);

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

      const handleFallbackVisibilityChange = () => {
        if (document.hidden) {
          isPaused = true;
        } else {
          isPaused = false;
          animationFrameId = requestAnimationFrame(renderFallback);
        }
      };

      window.addEventListener('resize', handleFallbackResize);
      document.addEventListener('visibilitychange', handleFallbackVisibilityChange);

      if (prefersReducedMotion) {
        drawFallbackStaticFrame();
      } else {
        animationFrameId = requestAnimationFrame(renderFallback);
      }

      return () => {
        window.removeEventListener('resize', handleFallbackResize);
        document.removeEventListener('visibilitychange', handleFallbackVisibilityChange);
        if (resizeTimeout) clearTimeout(resizeTimeout);
        cancelAnimationFrame(animationFrameId);
      };
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10 pointer-events-none"
    />
  );
};

export default Background;
