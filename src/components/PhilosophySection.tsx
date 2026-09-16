import React from 'react';
import { AxionFourSquareIcon } from './AxionLogo.tsx';

interface PhilosophySectionProps {
  isDark: boolean;
}

export const PhilosophySection: React.FC<PhilosophySectionProps> = ({ isDark }) => {
  return (
    <section
      id="philosophy"
      aria-label="Executive Philosophy"
      className="py-32 md:py-48 relative overflow-hidden flex items-center justify-center text-center"
    >
      {/* Very subtle moving four-square geometry in the background */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-10 select-none scale-150 sm:scale-200"
        aria-hidden="true"
      >
        <AxionFourSquareIcon size={240} />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Subtle section label */}
        <div className="inline-flex items-center gap-2.5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
          <span className="text-xs font-mono tracking-[0.3em] uppercase text-sky-500 dark:text-sky-400 font-medium">
            Core Thesis
          </span>
        </div>

        {/* Large Typography Statement */}
        <p
          className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-display leading-[1.22] tracking-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}
        >
          Technology should make businesses{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-400">
            simpler, smarter,
          </span>{' '}
          and more capable.
        </p>

        {/* Generous Whitespace & Executive Attestation */}
        <div className="mt-12 flex items-center justify-center gap-3">
          <span className="w-8 h-[1px] bg-slate-300 dark:bg-slate-700" />
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-slate-400 dark:text-slate-500">
            Abdullahi Abubakar · Axion
          </span>
          <span className="w-8 h-[1px] bg-slate-300 dark:bg-slate-700" />
        </div>

      </div>
    </section>
  );
};
