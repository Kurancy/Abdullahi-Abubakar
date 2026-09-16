import React, { useEffect, useRef, useState } from 'react';

interface GeometricBackgroundProps {
  isDark: boolean;
  className?: string;
  density?: 'low' | 'normal' | 'hero';
}

interface FloatingSquare {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  maxOpacity: number;
  type: 'solid' | 'outline' | 'fourSquare' | 'dot';
  pulsePhase: number;
  colorType: 'lightBlue' | 'royalBlue' | 'neutral';
}

export const GeometricBackground: React.FC<GeometricBackgroundProps> = ({
  isDark,
  className = '',
  density = 'normal',
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const isMobile = window.innerWidth < 768;
    const baseCount = density === 'hero' ? 32 : density === 'normal' ? 20 : 12;
    const count = isMobile ? Math.min(baseCount, 12) : baseCount;

    const handleResize = () => {
      if (!canvas) return;
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const particles: FloatingSquare[] = [];

    const colorLightBlue = isDark ? 'rgba(56, 189, 248, ' : 'rgba(14, 165, 233, ';
    const colorRoyalBlue = isDark ? 'rgba(29, 78, 216, ' : 'rgba(37, 99, 235, ';
    const colorNeutral = isDark ? 'rgba(148, 163, 184, ' : 'rgba(100, 116, 139, ';

    for (let i = 0; i < count; i++) {
      const typeChoice = Math.random();
      let type: FloatingSquare['type'] = 'outline';
      if (typeChoice < 0.35) type = 'solid';
      else if (typeChoice < 0.65) type = 'outline';
      else if (typeChoice < 0.8) type = 'fourSquare';
      else type = 'dot';

      const colorChoice = Math.random();
      const colorType: FloatingSquare['colorType'] =
        colorChoice < 0.55 ? 'lightBlue' : colorChoice < 0.85 ? 'royalBlue' : 'neutral';

      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size:
          type === 'dot'
            ? 2 + Math.random() * 2
            : type === 'fourSquare'
            ? 12 + Math.random() * 8
            : 4 + Math.random() * 8,
        speedY: 0.16 + Math.random() * 0.28,
        speedX: (Math.random() - 0.5) * 0.08,
        opacity: Math.random() * 0.3,
        maxOpacity: 0.2 + Math.random() * 0.35,
        type,
        pulsePhase: Math.random() * Math.PI * 2,
        colorType,
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
      const elapsed = time - lastTime;
      lastTime = time;
      const delta = Math.min(elapsed / 16.67, 2.0);

      ctx.clearRect(0, 0, width, height);

      // Render floating upward geometric particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!reducedMotion) {
          p.y -= p.speedY * delta;
          p.x += p.speedX * delta;
          p.pulsePhase += 0.015 * delta;
        }

        // Boundary wrap
        if (p.y < -30) {
          p.y = height + 20;
          p.x = Math.random() * width;
        }
        if (p.x < -20) p.x = width + 10;
        if (p.x > width + 20) p.x = -10;

        // Subtle opacity pulsing
        const currentOpacity =
          p.maxOpacity * (0.6 + 0.4 * Math.sin(p.pulsePhase));

        const baseColor =
          p.colorType === 'lightBlue'
            ? colorLightBlue
            : p.colorType === 'royalBlue'
            ? colorRoyalBlue
            : colorNeutral;

        ctx.save();
        ctx.translate(Math.round(p.x), Math.round(p.y));

        if (p.type === 'solid') {
          ctx.fillStyle = `${baseColor}${currentOpacity})`;
          const r = Math.min(2, p.size * 0.25);
          drawRoundedRect(-p.size / 2, -p.size / 2, p.size, p.size, r);
          ctx.fill();
        } else if (p.type === 'outline') {
          ctx.strokeStyle = `${baseColor}${currentOpacity * 0.9})`;
          ctx.lineWidth = 1;
          const r = Math.min(2, p.size * 0.25);
          drawRoundedRect(-p.size / 2, -p.size / 2, p.size, p.size, r);
          ctx.stroke();
        } else if (p.type === 'dot') {
          ctx.fillStyle = `${baseColor}${currentOpacity * 1.2})`;
          ctx.beginPath();
          ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.type === 'fourSquare') {
          const half = p.size / 2;
          const sub = half * 0.85;
          const gap = half * 0.15;
          const rad = sub * 0.22;

          ctx.fillStyle = `${colorLightBlue}${currentOpacity * 0.75})`;
          drawRoundedRect(-half, -half, sub, sub, rad);
          ctx.fill();

          ctx.fillStyle = `${colorRoyalBlue}${currentOpacity * 0.75})`;
          drawRoundedRect(-half + sub + gap, -half, sub, sub, rad);
          ctx.fill();

          ctx.fillStyle = `${colorRoyalBlue}${currentOpacity * 0.75})`;
          drawRoundedRect(-half, -half + sub + gap, sub, sub, rad);
          ctx.fill();

          ctx.fillStyle = `${colorLightBlue}${currentOpacity * 0.75})`;
          drawRoundedRect(-half + sub + gap, -half + sub + gap, sub, sub, rad);
          ctx.fill();
        }

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [isDark, density, reducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-0 w-full h-full ${className}`}
    />
  );
};
