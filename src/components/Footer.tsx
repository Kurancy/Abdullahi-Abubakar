import React from 'react';
import { AxionLogo } from './AxionLogo.tsx';

interface FooterProps {
  isDark: boolean;
  onNavigate: (id: string) => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  isDark,
  onNavigate,
  onOpenContact,
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="main-executive-footer"
      className="border-t border-sky-500/10 py-16 relative z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-slate-200 dark:border-slate-800/80">
          
          {/* Brand & Executive Identity */}
          <div className="flex flex-col gap-4">
            <AxionLogo
              size="md"
              theme={isDark ? 'dark' : 'light'}
            />
            <div>
              <p className={`text-base font-bold font-display ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Abdullahi Abubakar
              </p>
              <p className="text-xs font-mono text-sky-500 dark:text-sky-400">
                CEO · Axion Technologies
              </p>
            </div>
          </div>

          {/* Minimal Navigation */}
          <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <button
              type="button"
              onClick={() => onNavigate('about')}
              className={`hover:text-sky-400 transition-colors cursor-pointer ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              About
            </button>
            <button
              type="button"
              onClick={() => onNavigate('leadership')}
              className={`hover:text-sky-400 transition-colors cursor-pointer ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              Leadership
            </button>
            <button
              type="button"
              onClick={() => onNavigate('expertise')}
              className={`hover:text-sky-400 transition-colors cursor-pointer ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              Expertise
            </button>
            <button
              type="button"
              onClick={() => onNavigate('ventures')}
              className={`hover:text-sky-400 transition-colors cursor-pointer ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              Ventures
            </button>
            <button
              type="button"
              onClick={onOpenContact}
              className={`hover:text-sky-400 transition-colors cursor-pointer ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              Contact
            </button>
          </nav>

        </div>

        {/* Bottom Line: Copyright & System Architecture Specs */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>
            © {currentYear} Abdullahi Abubakar. All rights reserved. Axion Technologies.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            <span>EXECUTIVE DIGITAL IDENTITY // AX-ID: 9991</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
