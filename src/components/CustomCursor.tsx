import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if hovering interactive element
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest('button, a, input, textarea, [role="button"]');
        setIsHovering(!!interactive);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  if (isTouchDevice) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden transition-opacity duration-300"
      aria-hidden="true"
    >
      {/* Outer Ring */}
      <div
        className={`absolute rounded-full border transition-transform duration-100 ease-out -translate-x-1/2 -translate-y-1/2 ${
          isHovering
            ? 'w-10 h-10 border-sky-400 bg-sky-400/10 scale-125'
            : isDark
            ? 'w-6 h-6 border-sky-400/50 scale-100'
            : 'w-6 h-6 border-sky-600/50 scale-100'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />

      {/* Center Precision Dot */}
      <div
        className={`absolute rounded-full -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ${
          isHovering
            ? 'w-1.5 h-1.5 bg-sky-300'
            : 'w-1 h-1 bg-sky-400'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </div>
  );
};
