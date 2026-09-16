import React, { useState, useEffect } from 'react';
import { AxionLogo } from './AxionLogo.tsx';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
import { NavItem } from '../types.ts';

interface HeaderProps {
  isDark: boolean;
  onToggleTheme: () => void;
  onOpenContact: () => void;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Ventures', href: '#ventures' },
  { label: 'Contact', href: '#contact' },
];

export const Header: React.FC<HeaderProps> = ({
  isDark,
  onToggleTheme,
  onOpenContact,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);

      // Simple active section detection
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-executive-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isDark
            ? 'bg-[#07101F]/85 backdrop-blur-md border-b border-sky-500/10 shadow-[0_4px_30px_rgba(0,0,0,0.3)] py-3.5'
            : 'bg-white/85 backdrop-blur-md border-b border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.05)] py-3.5'
          : 'bg-transparent py-4 md:py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo on Left: Official Axion Technologies Logo */}
          <a
            href="#"
            className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-md"
            aria-label="Axion Technologies Home"
          >
            <AxionLogo
              size={isScrolled ? 'sm' : 'md'}
              theme={isDark ? 'dark' : 'light'}
            />
          </a>

          {/* Desktop Navigation */}
          <nav
            id="desktop-navigation"
            aria-label="Primary"
            className="hidden md:flex items-center space-x-1 lg:space-x-2"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3.5 py-1.5 text-sm font-medium tracking-wide transition-all duration-200 rounded-full relative ${
                    isActive
                      ? isDark
                        ? 'text-sky-400 font-semibold'
                        : 'text-sky-600 font-semibold'
                      : isDark
                      ? 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-sky-400"
                      aria-hidden="true"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Group: Theme toggle & Contact Button */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Theme Toggle */}
            <button
              id="theme-toggle-btn"
              type="button"
              onClick={onToggleTheme}
              className={`p-2 rounded-full border transition-all duration-200 cursor-pointer ${
                isDark
                  ? 'border-slate-800 bg-slate-900/80 text-slate-300 hover:text-sky-400 hover:border-sky-500/40'
                  : 'border-slate-200 bg-slate-100/80 text-slate-600 hover:text-sky-600 hover:border-sky-300'
              }`}
              aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Direct Executive Contact Button */}
            <button
              id="header-contact-btn"
              type="button"
              onClick={onOpenContact}
              className={`inline-flex items-center gap-1.5 px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 cursor-pointer ${
                isDark
                  ? 'bg-sky-500/10 hover:bg-sky-500/20 text-sky-300 border border-sky-500/30 hover:border-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.1)]'
                  : 'bg-sky-600 hover:bg-sky-700 text-white shadow-sm'
              }`}
            >
              <span>Contact</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Right Controls: Theme Toggle & Hamburger */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              type="button"
              onClick={onToggleTheme}
              className={`p-2 rounded-full border transition-all ${
                isDark
                  ? 'border-slate-800 bg-slate-900 text-slate-300'
                  : 'border-slate-200 bg-slate-100 text-slate-700'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              id="mobile-menu-toggle-btn"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-full border transition-all ${
                isDark
                  ? 'border-slate-800 bg-slate-900 text-white'
                  : 'border-slate-200 bg-slate-100 text-slate-900'
              }`}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown Panel */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-panel"
          className={`md:hidden border-b px-6 py-6 transition-all animate-in fade-in slide-in-from-top-2 duration-200 ${
            isDark
              ? 'bg-[#07101F]/98 border-slate-800/80 backdrop-blur-xl'
              : 'bg-white/98 border-slate-200 backdrop-blur-xl'
          }`}
        >
          <div className="flex flex-col space-y-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-lg font-medium py-1 transition-colors ${
                  activeSection === item.href.substring(1)
                    ? isDark
                      ? 'text-sky-400 font-semibold'
                      : 'text-sky-600 font-semibold'
                    : isDark
                    ? 'text-slate-300 hover:text-white'
                    : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                {item.label}
              </a>
            ))}

            <div className="pt-4 mt-2 border-t border-slate-200 dark:border-slate-800/60">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3 px-4 rounded-xl text-center font-medium bg-sky-500 text-white hover:bg-sky-600 transition-colors flex items-center justify-center gap-2"
              >
                <span>Initiate Contact</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
