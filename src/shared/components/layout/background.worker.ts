interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

let canvas: OffscreenCanvas | null = null;
let ctx: OffscreenCanvasRenderingContext2D | null = null;
let width = 0;
let height = 0;
let dpr = 1;
let prefersReducedMotion = false;
let isPaused = false;
let particles: Particle[] = [];
const particleCount = 18;
const maxDistSq = 120 * 120;
let animationFrameId: number;

function initParticles() {
  particles = [];
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      size: Math.random() * 1.5 + 0.8,
    });
  }
}

function drawStaticFrame() {
  if (!ctx) return;
  ctx.clearRect(0, 0, width, height);
  for (let i = 0; i < particleCount; i++) {
    const p = particles[i];
    ctx.fillStyle = 'rgba(79, 70, 229, 0.1)';
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function render() {
  if (isPaused || prefersReducedMotion || !ctx) return;

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

    // Connect nearby particles - check forward to halve iterations
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

self.onmessage = (event) => {
  const { type, data } = event.data;

  if (type === 'INIT') {
    canvas = data.canvas;
    ctx = canvas.getContext('2d') as any;
    width = data.width;
    height = data.height;
    dpr = data.dpr;
    prefersReducedMotion = data.prefersReducedMotion;

    if (canvas && ctx) {
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    }

    initParticles();

    if (prefersReducedMotion) {
      drawStaticFrame();
    } else {
      isPaused = false;
      render();
    }
  } else if (type === 'RESIZE') {
    width = data.width;
    height = data.height;
    dpr = data.dpr;
    if (canvas && ctx) {
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    }
    if (prefersReducedMotion) {
      drawStaticFrame();
    }
  } else if (type === 'PAUSE') {
    isPaused = true;
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }
  } else if (type === 'RESUME') {
    if (isPaused && !prefersReducedMotion) {
      isPaused = false;
      render();
    }
  }
};
