import React from 'react';
import { AxionFourSquareIcon } from './AxionLogo.tsx';
import { Mail, ArrowUpRight } from 'lucide-react';

interface ContactSectionProps {
  isDark: boolean;
  onGetInTouch: () => void;
  onConnect: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  isDark,
  onGetInTouch,
  onConnect,
}) => {
  return (
    <section
      id="contact"
      aria-label="Executive Contact and Collaboration"
      className="py-28 md:py-40 relative border-t border-sky-500/10 overflow-hidden"
    >
      {/* Subtle Axion Geometric Motif in background */}
      <div
        className="absolute top-1/2 right-10 -translate-y-1/2 opacity-10 pointer-events-none hidden md:block"
        aria-hidden="true"
      >
        <AxionFourSquareIcon size={180} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Identifier */}
        <div className="flex items-center gap-3 mb-10">
          <AxionFourSquareIcon size={16} />
          <span className="text-xs font-mono tracking-[0.25em] uppercase text-sky-500 dark:text-sky-400 font-semibold">
            07 // Inquiry & Collaboration
          </span>
        </div>

        <div className="max-w-3xl">
          
          {/* Large Heading */}
          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight leading-[1.12] mb-6 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Let's build what{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-400">
              comes next.
            </span>
          </h2>

          {/* Short Supporting Text */}
          <p
            className={`text-xl sm:text-2xl font-normal mb-10 ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            Technology, business, and collaboration.
          </p>

          {/* Action Buttons: Get in Touch & Connect */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              id="contact-get-in-touch-btn"
              type="button"
              onClick={onGetInTouch}
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-medium text-sm transition-all duration-300 shadow-md cursor-pointer bg-sky-500 hover:bg-sky-400 text-white hover:shadow-[0_0_30px_rgba(56,189,248,0.4)]"
            >
              <Mail className="w-4 h-4" />
              <span>Get in Touch</span>
            </button>

            <button
              id="contact-connect-btn"
              type="button"
              onClick={onConnect}
              className={`inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium text-sm border transition-all duration-300 cursor-pointer ${
                isDark
                  ? 'border-slate-700 bg-slate-900/60 hover:bg-slate-800 text-slate-200 hover:border-sky-500/50 hover:text-white'
                  : 'border-slate-300 bg-white hover:bg-slate-50 text-slate-800 hover:border-slate-400'
              }`}
            >
              <span>Connect</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Executive Direct Channel Note */}
          <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800/80 flex items-center gap-3 text-xs font-mono text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>CONFIDENTIAL EXECUTIVE COMMUNICATIONS CHANNEL ACTIVE</span>
          </div>

        </div>

      </div>
    </section>
  );
};
