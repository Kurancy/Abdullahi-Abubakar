import React from 'react';

interface AxionLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  iconOnly?: boolean;
  theme?: 'dark' | 'light' | 'auto';
  onClick?: () => void;
}

export const AxionFourSquareIcon: React.FC<{
  size?: number;
  className?: string;
}> = ({ size = 28, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-label="Axion Technologies Icon"
    >
      {/* 2x2 Equal Rounded-Square Tiles */}
      {/* Top-Left: Bright Light Blue */}
      <rect x="6" y="6" width="40" height="40" rx="9" fill="#38BDF8" />
      {/* Top-Right: Deep Royal Blue */}
      <rect x="54" y="6" width="40" height="40" rx="9" fill="#1D4ED8" />
      {/* Bottom-Left: Deep Royal Blue */}
      <rect x="6" y="54" width="40" height="40" rx="9" fill="#1D4ED8" />
      {/* Bottom-Right: Bright Light Blue */}
      <rect x="54" y="54" width="40" height="40" rx="9" fill="#38BDF8" />
    </svg>
  );
};

export const AxionLogo: React.FC<AxionLogoProps> = ({
  className = '',
  size = 'md',
  iconOnly = false,
  theme = 'auto',
  onClick,
}) => {
  const iconSizes = {
    sm: 24,
    md: 32,
    lg: 44,
    hero: 58,
  };

  const dividerHeights = {
    sm: 'h-6',
    md: 'h-8',
    lg: 'h-11',
    hero: 'h-14',
  };

  const axionTextSizes = {
    sm: 'text-base tracking-[0.2em]',
    md: 'text-xl tracking-[0.22em]',
    lg: 'text-2xl md:text-3xl tracking-[0.24em]',
    hero: 'text-3xl md:text-4xl tracking-[0.26em]',
  };

  const techTextSizes = {
    sm: 'text-[7px] tracking-[0.38em]',
    md: 'text-[9px] tracking-[0.42em]',
    lg: 'text-[11px] tracking-[0.45em]',
    hero: 'text-[13px] tracking-[0.48em]',
  };

  const currentIconSize = iconSizes[size];

  return (
    <div
      id="axion-brand-logo"
      onClick={onClick}
      className={`inline-flex items-center gap-3.5 select-none transition-opacity duration-200 ${
        onClick ? 'cursor-pointer hover:opacity-90' : ''
      } ${className}`}
    >
      {/* Official 2x2 Axion Icon */}
      <AxionFourSquareIcon size={currentIconSize} />

      {!iconOnly && (
        <>
          {/* Thin vertical blue divider */}
          <span
            className={`w-[1.5px] ${dividerHeights[size]} bg-gradient-to-b from-sky-400 via-blue-600 to-blue-700 opacity-90 rounded-full shrink-0`}
            aria-hidden="true"
          />

          {/* Wordmark: AXION with TECHNOLOGIES underneath */}
          <div className="flex flex-col justify-center leading-none">
            <span
              className={`font-display font-extrabold uppercase transition-colors ${axionTextSizes[size]} ${
                theme === 'dark'
                  ? 'text-white'
                  : theme === 'light'
                  ? 'text-[#07101F]'
                  : 'text-slate-900 dark:text-white'
              }`}
              style={{ letterSpacing: '0.22em' }}
            >
              AXION
            </span>
            <span
              className={`font-sans font-semibold uppercase mt-0.5 text-sky-500 dark:text-sky-400 ${techTextSizes[size]}`}
              style={{ letterSpacing: '0.42em' }}
            >
              TECHNOLOGIES
            </span>
          </div>
        </>
      )}
    </div>
  );
};
