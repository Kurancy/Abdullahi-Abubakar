import React from 'react';
import { AxionFourSquareIcon } from './AxionLogo.tsx';
import { JourneyStage } from '../types.ts';
import { ArrowRight, ArrowDown } from 'lucide-react';

interface JourneySectionProps {
  isDark: boolean;
}

const JOURNEY_STAGES: JourneyStage[] = [
  {
    step: '01',
    title: 'Technology',
    descriptor: 'Foundational systems engineering & computing architecture',
  },
  {
    step: '02',
    title: 'Automation',
    descriptor: 'Algorithmic workflows & intelligent process streamlining',
  },
  {
    step: '03',
    title: 'Enterprise',
    descriptor: 'Mission-critical business infrastructure & ERP platforms',
  },
  {
    step: '04',
    title: 'Entrepreneurship',
    descriptor: 'Building scalable ventures that solve structural friction',
  },
  {
    step: '05',
    title: 'Axion',
    descriptor: 'Engineering intelligent technology for Africa & the world',
  },
];

export const JourneySection: React.FC<JourneySectionProps> = ({ isDark }) => {
  return (
    <section
      id="journey"
      aria-label="Executive Trajectory"
      className="py-24 md:py-36 relative border-t border-sky-500/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <AxionFourSquareIcon size={16} />
          <span className="text-xs font-mono tracking-[0.25em] uppercase text-sky-500 dark:text-sky-400 font-semibold">
            06 // Trajectory
          </span>
        </div>

        <div className="mb-14">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight mb-4 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Journey
          </h2>
          <p className={`text-base sm:text-lg max-w-xl ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            A focused progression from core technical foundations to executive enterprise leadership.
          </p>
        </div>

        {/* Desktop Horizontal Timeline */}
        <div className="hidden lg:block relative pt-10">
          
          {/* Subtle architectural horizontal connective line */}
          <div
            className="absolute top-16 left-8 right-8 h-[2px] bg-gradient-to-r from-sky-500/30 via-blue-600/50 to-sky-400 rounded-full z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-5 gap-6 relative z-10">
            {JOURNEY_STAGES.map((stage, idx) => {
              const isLast = idx === JOURNEY_STAGES.length - 1;
              return (
                <div key={stage.step} className="flex flex-col">
                  {/* Node Circle */}
                  <div className="mb-6 flex items-center">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center font-mono text-sm font-bold border transition-all duration-300 ${
                        isLast
                          ? 'bg-sky-500 text-white border-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.5)] scale-110'
                          : isDark
                          ? 'bg-slate-900 border-slate-700 text-sky-400'
                          : 'bg-white border-slate-300 text-sky-600 shadow-sm'
                      }`}
                    >
                      {isLast ? <AxionFourSquareIcon size={20} /> : stage.step}
                    </div>
                  </div>

                  {/* Stage Title */}
                  <h3
                    className={`text-lg font-bold font-display tracking-tight mb-2 ${
                      isLast
                        ? 'text-sky-500 dark:text-sky-400'
                        : isDark
                        ? 'text-white'
                        : 'text-slate-900'
                    }`}
                  >
                    {stage.title}
                  </h3>

                  {/* Stage Descriptor */}
                  <p
                    className={`text-xs leading-relaxed ${
                      isDark ? 'text-slate-400' : 'text-slate-500'
                    }`}
                  >
                    {stage.descriptor}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="lg:hidden relative pl-6 border-l-2 border-sky-500/30 space-y-10">
          {JOURNEY_STAGES.map((stage, idx) => {
            const isLast = idx === JOURNEY_STAGES.length - 1;
            return (
              <div key={stage.step} className="relative">
                {/* Node on vertical line */}
                <div
                  className={`absolute -left-[35px] top-0 w-8 h-8 rounded-xl flex items-center justify-center font-mono text-xs font-bold border ${
                    isLast
                      ? 'bg-sky-500 text-white border-sky-400 shadow-md'
                      : isDark
                      ? 'bg-slate-900 border-slate-700 text-sky-400'
                      : 'bg-white border-slate-300 text-sky-600'
                  }`}
                >
                  {isLast ? <AxionFourSquareIcon size={14} /> : stage.step}
                </div>

                <div className="pl-3">
                  <h3
                    className={`text-base font-bold font-display tracking-tight mb-1 ${
                      isLast
                        ? 'text-sky-500 dark:text-sky-400'
                        : isDark
                        ? 'text-white'
                        : 'text-slate-900'
                    }`}
                  >
                    {stage.title}
                  </h3>
                  <p
                    className={`text-xs leading-relaxed ${
                      isDark ? 'text-slate-400' : 'text-slate-500'
                    }`}
                  >
                    {stage.descriptor}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
