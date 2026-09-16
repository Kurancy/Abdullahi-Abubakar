import React from 'react';

interface InteractiveExpertiseGridProps {
  isDark: boolean;
  hoveredIndex: number | null;
}

export const InteractiveExpertiseGrid: React.FC<InteractiveExpertiseGridProps> = ({
  isDark,
  hoveredIndex,
}) => {
  // 6 cards layout coordinates (approximate % center of each card in 3x2 grid on desktop, 1-col on mobile)
  const cardCoordinates = [
    { x: 20, y: 38 }, // 01 AI & Automation
    { x: 50, y: 38 }, // 02 ERP & SAP
    { x: 80, y: 38 }, // 03 Software Eng
    { x: 20, y: 78 }, // 04 Digital Trans
    { x: 50, y: 78 }, // 05 Warehouse Tech
    { x: 80, y: 78 }, // 06 Enterprise Integration
  ];

  const activeCoord =
    hoveredIndex !== null && hoveredIndex >= 0 && hoveredIndex < cardCoordinates.length
      ? cardCoordinates[hoveredIndex]
      : null;

  const dotColor = isDark ? '#38BDF8' : '#0284C7';
  const dotOpacity = isDark ? 0.08 : 0.09;

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0 transition-opacity duration-700"
      aria-hidden="true"
    >
      {/* 1. Fine, architectural micro-dot matrix pattern - perfectly crisp and lightweight */}
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="fine-expertise-dot-grid"
            width="28"
            height="28"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="2"
              cy="2"
              r="1"
              fill={dotColor}
              fillOpacity={dotOpacity}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#fine-expertise-dot-grid)" />
      </svg>

      {/* 2. Interactive Radar Ping & Coordinate Crosshairs (GPU CSS Keyframe Driven) */}
      {activeCoord && (
        <div
          className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
          style={{ opacity: 1 }}
        >
          {/* Subtle Ambient Radial Highlight centered on the active node */}
          <div
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none blur-2xl transition-all duration-500"
            style={{
              left: `${activeCoord.x}%`,
              top: `${activeCoord.y}%`,
              width: '320px',
              height: '320px',
              background: isDark
                ? 'radial-gradient(circle, rgba(56, 189, 248, 0.18) 0%, rgba(29, 78, 216, 0.08) 50%, transparent 70%)'
                : 'radial-gradient(circle, rgba(2, 132, 199, 0.14) 0%, rgba(37, 99, 235, 0.06) 50%, transparent 70%)',
            }}
          />

          {/* Primary Radar Ping Wave Ring 1 */}
          <div
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-400/80 animate-radar-ping pointer-events-none"
            style={{
              left: `${activeCoord.x}%`,
              top: `${activeCoord.y}%`,
              width: '120px',
              height: '120px',
            }}
          />

          {/* Secondary Radar Ping Wave Ring 2 (Staggered) */}
          <div
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-500/70 animate-radar-ping pointer-events-none"
            style={{
              left: `${activeCoord.x}%`,
              top: `${activeCoord.y}%`,
              width: '120px',
              height: '120px',
              animationDelay: '0.6s',
            }}
          />

          {/* Precision Architectural Crosshair Lines */}
          <div
            className="absolute left-0 right-0 h-[1px] pointer-events-none transition-all duration-300"
            style={{
              top: `${activeCoord.y}%`,
              background: isDark
                ? 'linear-gradient(90deg, transparent 0%, rgba(56,189,248,0.2) 30%, rgba(56,189,248,0.45) 50%, rgba(56,189,248,0.2) 70%, transparent 100%)'
                : 'linear-gradient(90deg, transparent 0%, rgba(2,132,199,0.18) 30%, rgba(2,132,199,0.4) 50%, rgba(2,132,199,0.18) 70%, transparent 100%)',
            }}
          />
          <div
            className="absolute top-0 bottom-0 w-[1px] pointer-events-none transition-all duration-300"
            style={{
              left: `${activeCoord.x}%`,
              background: isDark
                ? 'linear-gradient(180deg, transparent 0%, rgba(56,189,248,0.2) 30%, rgba(56,189,248,0.45) 50%, rgba(56,189,248,0.2) 70%, transparent 100%)'
                : 'linear-gradient(180deg, transparent 0%, rgba(2,132,199,0.18) 30%, rgba(2,132,199,0.4) 50%, rgba(2,132,199,0.18) 70%, transparent 100%)',
            }}
          />
        </div>
      )}
    </div>
  );
};
