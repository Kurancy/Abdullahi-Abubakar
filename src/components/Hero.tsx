import React, { useState, useEffect } from 'react';
import { AxionFourSquareIcon } from './AxionLogo.tsx';
import { ArrowDown, ArrowUpRight, Cpu, ShieldCheck, Activity } from 'lucide-react';
import { HeroBackgroundAnimation } from './HeroBackgroundAnimation.tsx';
import abdullahiPortrait from '../assets/images/abdullahi_portrait_1789594099774.jpg';

interface HeroProps {
  isDark: boolean;
  onExploreClick: () => void;
  onConnectClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  isDark,
  onExploreClick,
  onConnectClick,
}) => {
  const [animStage, setAnimStage] = useState(0);

  // Fast 1–2 second intro sequence as requested:
  // 1. Logo subtly activates -> 2. Geometry activates -> 3. Portrait reveals -> 4. Text line-by-line
  useEffect(() => {
    const t1 = setTimeout(() => setAnimStage(1), 100);
    const t2 = setTimeout(() => setAnimStage(2), 350);
    const t3 = setTimeout(() => setAnimStage(3), 600);
    const t4 = setTimeout(() => setAnimStage(4), 850);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  return (
    <section
      id="hero"
      aria-label="Executive Introduction"
      className="relative min-h-[85vh] lg:min-h-[88vh] flex items-center justify-center pt-16 sm:pt-20 lg:pt-20 pb-10 sm:pb-12 lg:pb-14 overflow-hidden"
    >
      {/* Dedicated Executive Hero Geometric & Ambient Background */}
      <HeroBackgroundAnimation isDark={isDark} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Content Column (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">
            
            {/* Top Micro Telemetry & CEO Label */}
            <div
              className={`transition-all duration-700 transform ${
                animStage >= 2
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-wider mb-3.5 sm:mb-4 border backdrop-blur-md transition-colors bg-sky-500/10 border-sky-500/20 text-sky-400 dark:text-sky-300">
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                <span className="font-semibold uppercase tracking-[0.18em]">
                  CEO · AXION TECHNOLOGIES
                </span>
                <span className="opacity-40">|</span>
                <span className="text-[10px] opacity-80 flex items-center gap-1">
                  <Activity className="w-3 h-3 text-sky-400" />
                  HIGH-PERFORMANCE ARCHITECTURE
                </span>
              </div>
            </div>

            {/* Name Header - Abdullahi Abubakar */}
            <div
              className={`transition-all duration-700 delay-100 transform ${
                animStage >= 2
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display mb-2 sm:mb-2.5">
                <span className={isDark ? 'text-white' : 'text-slate-900'}>
                  Abdullahi Abubakar
                </span>
              </h1>
            </div>

            {/* Main Statement Headline */}
            <div
              className={`transition-all duration-700 delay-200 transform ${
                animStage >= 3
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
            >
              <p
                className={`text-2xl sm:text-3xl lg:text-4xl xl:text-[2.65rem] font-bold leading-[1.18] tracking-tight mb-4 ${
                  isDark ? 'text-slate-100' : 'text-slate-800'
                }`}
              >
                Building technology that moves{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500">
                  businesses forward.
                </span>
              </p>
            </div>

            {/* Short Supporting Statement */}
            <div
              className={`transition-all duration-700 delay-300 transform ${
                animStage >= 3
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
            >
              <p
                className={`text-base sm:text-lg font-medium tracking-wide mb-6 sm:mb-7 max-w-xl ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                AI. Automation. Enterprise Technology.
              </p>
            </div>

            {/* Action Buttons: Explore & Connect */}
            <div
              className={`flex flex-wrap items-center gap-4 transition-all duration-700 delay-400 transform ${
                animStage >= 4
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
            >
              <button
                id="hero-explore-btn"
                type="button"
                onClick={onExploreClick}
                className="group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-medium text-sm transition-all duration-300 shadow-md cursor-pointer bg-sky-500 hover:bg-sky-400 text-white dark:bg-sky-500 dark:hover:bg-sky-400 hover:shadow-[0_0_24px_rgba(56,189,248,0.4)]"
              >
                <span>Explore</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </button>

              <button
                id="hero-connect-btn"
                type="button"
                onClick={onConnectClick}
                className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-medium text-sm border transition-all duration-300 cursor-pointer ${
                  isDark
                    ? 'border-slate-700 bg-slate-900/60 hover:bg-slate-800 text-slate-200 hover:border-sky-500/50 hover:text-white'
                    : 'border-slate-300 bg-white hover:bg-slate-50 text-slate-800 hover:border-slate-400'
                }`}
              >
                <span>Connect</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Subtle Data Architecture Micro-Telemetry Ribbon */}
            <div
              className={`mt-6 sm:mt-7 pt-4 sm:pt-5 border-t flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-mono transition-opacity duration-1000 ${
                animStage >= 4 ? 'opacity-70' : 'opacity-0'
              } ${isDark ? 'border-slate-800/80 text-slate-400' : 'border-slate-200 text-slate-500'}`}
            >
              <div className="flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-sky-400" />
                <span>CORE: PARALLEL COMPUTATION</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
                <span>ENTERPRISE GRADE DATA INTEGRITY</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>AX-OS 2.6 // ACTIVE</span>
              </div>
            </div>

          </div>

          {/* Portrait Column (5 cols on lg) */}
          <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2">
            <div
              className={`relative w-full max-w-[300px] sm:max-w-[330px] lg:max-w-[360px] xl:max-w-[390px] transition-all duration-1000 transform ${
                animStage >= 2
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-95'
              }`}
            >
              {/* Subtle Blue Atmospheric Glow behind Portrait */}
              <div
                className="absolute -inset-2 sm:-inset-4 rounded-3xl opacity-40 blur-2xl pointer-events-none transition-opacity duration-700 bg-gradient-to-tr from-blue-600/30 via-sky-400/25 to-transparent"
                aria-hidden="true"
              />

              {/* Architectural Technical Framing Container */}
              <div
                className={`relative rounded-2xl p-1.5 sm:p-2 border backdrop-blur-md transition-all duration-300 shadow-2xl ${
                  isDark
                    ? 'bg-slate-900/70 border-sky-500/20 shadow-[0_20px_50px_rgba(7,16,31,0.8)]'
                    : 'bg-white/80 border-slate-200/80 shadow-[0_20px_40px_rgba(0,0,0,0.08)]'
                }`}
              >
                {/* Thin Corner Technical Marks (+) */}
                <span className="absolute -top-1.5 -left-1.5 text-sky-400 font-mono text-xs select-none">
                  +
                </span>
                <span className="absolute -top-1.5 -right-1.5 text-sky-400 font-mono text-xs select-none">
                  +
                </span>
                <span className="absolute -bottom-1.5 -left-1.5 text-sky-400 font-mono text-xs select-none">
                  +
                </span>
                <span className="absolute -bottom-1.5 -right-1.5 text-sky-400 font-mono text-xs select-none">
                  +
                </span>

                {/* Axion Four-Square Motif Badge (Subtle top right) */}
                <div
                  className="absolute top-4 right-4 z-20 p-1.5 rounded-lg backdrop-blur-md bg-slate-950/60 border border-sky-500/30 shadow-lg"
                  title="Axion Geometric Signature"
                >
                  <AxionFourSquareIcon size={18} />
                </div>

                {/* Main Executive Portrait Image */}
                <div className="relative rounded-xl overflow-hidden aspect-[3/4] bg-slate-950">
                  <img
                    id="executive-portrait-img"
                    src={abdullahiPortrait}
                    alt="Abdullahi Abubakar, CEO of Axion Technologies"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-[1.02]"
                    loading="eager"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      if (!target.dataset.fallback) {
                        target.dataset.fallback = '1';
                        target.src = '/pic.jpg';
                      } else if (target.dataset.fallback === '1') {
                        target.dataset.fallback = '2';
                        target.src = '/ceo-portrait.jpg';
                      }
                    }}
                  />

                  {/* Subtle technical gradient overlay at bottom of portrait */}
                  <div
                    className="absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60"
                    aria-hidden="true"
                  />

                  {/* Portrait Caption Overlay at bottom */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3 py-2 rounded-lg backdrop-blur-md bg-slate-950/70 border border-slate-800/80 text-white text-xs">
                    <div>
                      <p className="font-semibold font-display tracking-wide">
                        Abdullahi Abubakar
                      </p>
                      <p className="text-[10px] text-sky-400 font-mono">
                        CEO · Axion Technologies
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-slate-400 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                      <span>ONLINE</span>
                    </div>
                  </div>
                </div>

                {/* Technical coordinate micro-indicators */}
                <div className="flex items-center justify-between px-2 pt-2 text-[10px] font-mono text-slate-400 dark:text-slate-500">
                  <span>SEC. 01 // EXEC-IDENTITY</span>
                  <span>SYS.LATENCY: 0.8ms</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
