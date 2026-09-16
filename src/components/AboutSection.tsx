import React from 'react';
import { AxionFourSquareIcon } from './AxionLogo.tsx';

interface AboutSectionProps {
  isDark: boolean;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ isDark }) => {
  return (
    <section
      id="about"
      aria-label="About Abdullahi Abubakar"
      className="py-20 md:py-28 relative border-t border-b border-sky-500/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <AxionFourSquareIcon size={16} />
          <span className="text-xs font-mono tracking-[0.25em] uppercase text-sky-500 dark:text-sky-400 font-semibold">
            01 // Profile
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Heading Column */}
          <div className="lg:col-span-4">
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              About
            </h2>
          </div>

          {/* Main Statement & Information Grid */}
          <div className="lg:col-span-8">
            <p
              className={`text-2xl sm:text-3xl lg:text-[2rem] font-semibold leading-relaxed tracking-tight mb-14 ${
                isDark ? 'text-slate-100' : 'text-slate-800'
              }`}
            >
              I build technology systems that connect people, processes, and intelligent automation.
            </p>

            {/* Compact Information Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-slate-200 dark:border-slate-800/80">
              
              {/* Role */}
              <div
                className={`p-5 rounded-xl border transition-all duration-300 ${
                  isDark
                    ? 'bg-slate-900/40 border-slate-800/80 hover:border-sky-500/30'
                    : 'bg-slate-50/80 border-slate-200/80 hover:border-sky-300'
                }`}
              >
                <span className="text-xs font-mono uppercase tracking-wider text-sky-500 dark:text-sky-400 block mb-2 font-medium">
                  Role
                </span>
                <p className={`text-base font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  CEO · Axion Technologies
                </p>
              </div>

              {/* Focus */}
              <div
                className={`p-5 rounded-xl border transition-all duration-300 ${
                  isDark
                    ? 'bg-slate-900/40 border-slate-800/80 hover:border-sky-500/30'
                    : 'bg-slate-50/80 border-slate-200/80 hover:border-sky-300'
                }`}
              >
                <span className="text-xs font-mono uppercase tracking-wider text-sky-500 dark:text-sky-400 block mb-2 font-medium">
                  Focus
                </span>
                <p className={`text-base font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  AI · Automation · Enterprise Technology
                </p>
              </div>

              {/* Approach */}
              <div
                className={`p-5 rounded-xl border transition-all duration-300 ${
                  isDark
                    ? 'bg-slate-900/40 border-slate-800/80 hover:border-sky-500/30'
                    : 'bg-slate-50/80 border-slate-200/80 hover:border-sky-300'
                }`}
              >
                <span className="text-xs font-mono uppercase tracking-wider text-sky-500 dark:text-sky-400 block mb-2 font-medium">
                  Approach
                </span>
                <p className={`text-base font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Build · Automate · Transform
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
