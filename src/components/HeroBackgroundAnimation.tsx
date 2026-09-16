import React, { useEffect, useRef } from 'react';

interface HeroBackgroundAnimationProps {
  isDark: boolean;
}

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  maxOpacity: number;
  pulseSpeed: number;
  pulsePhase: number;
  type: 'square' | 'fourSquare' | 'dot' | 'outlineSquare';
  color: 'lightBlue' | 'royalBlue' | 'softWhite';
}

export const HeroBackgroundAnimation: React.FC<HeroBackgroundAnimationProps> = ({ isDark }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const isMobile = window.innerWidth < 768;
    // Balanced count for extreme smoothness on smartphone simulators
    const particleCount = isMobile ? 18 : 34;
    const particles: Particle[] = [];

    const resize = () => {
      if (!canvas || !canvas.parentElement) return;
      const rect = canvas.parentElement.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    // Color palettes
    const lightBlue = isDark ? 'rgba(56, 189, 248, ' : 'rgba(14, 165, 233, ';
    const royalBlue = isDark ? 'rgba(29, 78, 216, ' : 'rgba(37, 99, 235, ';
    const softWhite = isDark ? 'rgba(224, 242, 254, ' : 'rgba(186, 230, 253, ';

    // Seed particles
    for (let i = 0; i < particleCount; i++) {
      const typeRoll = Math.random();
      let type: Particle['type'] = 'square';
      if (typeRoll < 0.35) type = 'square';
      else if (typeRoll < 0.6) type = 'outlineSquare';
      else if (typeRoll < 0.8) type = 'fourSquare';
      else type = 'dot';

      const colorRoll = Math.random();
      const color: Particle['color'] =
        colorRoll < 0.55 ? 'lightBlue' : colorRoll < 0.85 ? 'royalBlue' : 'softWhite';

      const size =
        type === 'fourSquare'
          ? isMobile ? 14 : 20 + Math.random() * 8
          : type === 'dot'
          ? 2 + Math.random() * 2
          : isMobile ? 5 + Math.random() * 8 : 7 + Math.random() * 12;

      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size,
        speedY: 0.22 + Math.random() * 0.38,
        speedX: (Math.random() - 0.5) * 0.1,
        opacity: Math.random() * 0.5,
        maxOpacity: 0.25 + Math.random() * 0.45,
        pulseSpeed: 0.015 + Math.random() * 0.02,
        pulsePhase: Math.random() * Math.PI * 2,
        type,
        color,
      });
    }

    let lastTime = performance.now();

    const drawRoundedRect = (
      x: number,
      y: number,
      w: number,
      h: number,
      r: number
    ) => {
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.arcTo(x + w, y, x + w, y + h, r);
      ctx.arcTo(x + w, y + h, x, y + h, r);
      ctx.arcTo(x, y + h, x, y, r);
      ctx.arcTo(x, y, x + w, y, r);
      ctx.closePath();
    };

    const render = (time: number) => {
      // Delta time normalization to prevent frame skipping or speed bursts
      const elapsed = time - lastTime;
      lastTime = time;
      const delta = Math.min(elapsed / 16.67, 2.0);

      ctx.clearRect(0, 0, width, height);

      // 1. Draw subtle architectural coordinate ticks and hairline lines
      ctx.lineWidth = 1;
      ctx.strokeStyle = isDark ? 'rgba(56, 189, 248, 0.035)' : 'rgba(2, 132, 199, 0.04)';

      const stepY = isMobile ? 120 : 160;
      ctx.beginPath();
      for (let y = stepY; y < height; y += stepY) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // 2. Render & update floating geometric shapes with silky smooth upward drift
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.y -= p.speedY * delta;
        p.x += p.speedX * delta;
        p.pulsePhase += p.pulseSpeed * delta;

        // Boundary wrap with seamless respawn
        if (p.y < -40) {
          p.y = height + 30;
          p.x = Math.random() * width;
        }
        if (p.x < -30) p.x = width + 20;
        if (p.x > width + 30) p.x = -20;

        // Opacity breathing
        const currentOpacity = p.maxOpacity * (0.55 + 0.45 * Math.sin(p.pulsePhase));
        const colorPrefix =
          p.color === 'lightBlue'
            ? lightBlue
            : p.color === 'royalBlue'
            ? royalBlue
            : softWhite;

        ctx.save();
        ctx.translate(Math.round(p.x), Math.round(p.y));

        if (p.type === 'square') {
          // Soft solid rounded square
          ctx.fillStyle = `${colorPrefix}${currentOpacity})`;
          const r = Math.min(3, p.size * 0.25);
          drawRoundedRect(-p.size / 2, -p.size / 2, p.size, p.size, r);
          ctx.fill();
        } else if (p.type === 'outlineSquare') {
          // Precise hairline outline square
          ctx.strokeStyle = `${colorPrefix}${currentOpacity * 0.9})`;
          ctx.lineWidth = 1;
          const r = Math.min(3, p.size * 0.25);
          drawRoundedRect(-p.size / 2, -p.size / 2, p.size, p.size, r);
          ctx.stroke();
        } else if (p.type === 'dot') {
          // Luminous micro-light dot
          ctx.fillStyle = `${colorPrefix}${currentOpacity * 1.2})`;
          ctx.beginPath();
          ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.type === 'fourSquare') {
          // Refined Axion 4-square motif
          const half = p.size / 2;
          const sub = half * 0.85;
          const gap = half * 0.15;
          const rad = sub * 0.22;

          // Top-Left: Light Blue
          ctx.fillStyle = `${lightBlue}${currentOpacity * 0.8})`;
          drawRoundedRect(-half, -half, sub, sub, rad);
          ctx.fill();

          // Top-Right: Royal Blue
          ctx.fillStyle = `${royalBlue}${currentOpacity * 0.8})`;
          drawRoundedRect(-half + sub + gap, -half, sub, sub, rad);
          ctx.fill();

          // Bottom-Left: Royal Blue
          ctx.fillStyle = `${royalBlue}${currentOpacity * 0.8})`;
          drawRoundedRect(-half, -half + sub + gap, sub, sub, rad);
          ctx.fill();

          // Bottom-Right: Light Blue
          ctx.fillStyle = `${lightBlue}${currentOpacity * 0.8})`;
          drawRoundedRect(-half + sub + gap, -half + sub + gap, sub, sub, rad);
          ctx.fill();
        }

        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, [isDark]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0" aria-hidden="true">
      {/* 1. Deep Atmospheric Radial Ambient Glows */}
      <div
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[580px] h-[340px] sm:h-[580px] rounded-full blur-3xl pointer-events-none opacity-25 animate-ambient-breathe"
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(56, 189, 248, 0.25) 0%, rgba(29, 78, 216, 0.12) 50%, transparent 70%)'
            : 'radial-gradient(circle, rgba(2, 132, 199, 0.15) 0%, rgba(37, 99, 235, 0.08) 50%, transparent 70%)',
        }}
      />

      <div
        className="absolute bottom-10 right-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full blur-3xl pointer-events-none opacity-20 animate-ambient-breathe"
        style={{
          animationDelay: '4.5s',
          background: isDark
            ? 'radial-gradient(circle, rgba(29, 78, 216, 0.3) 0%, rgba(56, 189, 248, 0.1) 50%, transparent 70%)'
            : 'radial-gradient(circle, rgba(37, 99, 235, 0.14) 0%, rgba(14, 165, 233, 0.06) 50%, transparent 70%)',
        }}
      />

      {/* 2. High-Performance Hardware-Accelerated Canvas for Floating Axion Geometry */}
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
      />
    </div>
  );
};
