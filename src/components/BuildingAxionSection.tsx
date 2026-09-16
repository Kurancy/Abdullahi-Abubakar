import React from 'react';
import { AxionLogo, AxionFourSquareIcon } from './AxionLogo.tsx';
import { ArrowRight, Globe, Server, Cpu, Activity, Network, ShieldCheck } from 'lucide-react';

interface BuildingAxionSectionProps {
  isDark: boolean;
  onExploreAxion: () => void;
}

export const BuildingAxionSection: React.FC<BuildingAxionSectionProps> = ({
  isDark,
  onExploreAxion,
}) => {
  return (
    <section
      id="building-axion"
      aria-label="Building Axion"
      className="py-24 md:py-36 relative overflow-hidden"
    >
      {/* Soft Ambient Radial Backlight */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] sm:w-[680px] h-[320px] rounded-full blur-3xl pointer-events-none opacity-20 bg-gradient-to-r from-blue-700 via-sky-500 to-indigo-600 animate-ambient-breathe"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Tag */}
        <div className="flex items-center gap-3 mb-10">
          <AxionFourSquareIcon size={16} />
          <span className="text-xs font-mono tracking-[0.25em] uppercase text-sky-500 dark:text-sky-400 font-semibold">
            04 // Enterprise Venture
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Main Visual Axion Brand Showcase (6 cols) */}
          <div className="lg:col-span-6 flex flex-col items-start justify-center">
            
            {/* Prominently displayed official Axion Technologies Logo */}
            <div
              className={`p-8 sm:p-10 rounded-3xl border backdrop-blur-xl transition-all duration-300 w-full mb-8 shadow-xl relative overflow-hidden ${
                isDark
                  ? 'bg-slate-900/60 border-sky-500/20 shadow-[0_20px_50px_rgba(7,16,31,0.9)]'
                  : 'bg-white/90 border-slate-200/90 shadow-[0_20px_40px_rgba(0,0,0,0.06)]'
              }`}
            >
              {/* Subtle architectural circuit lines running across the card background */}
              <div className="absolute inset-0 pointer-events-none opacity-10">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M 0 40 Q 150 40 200 80 T 400 80"
                    fill="none"
                    stroke="#38BDF8"
                    strokeWidth="1"
                  />
                  <path
                    d="M 0 120 Q 100 120 180 180 T 350 180"
                    fill="none"
                    stroke="#1D4ED8"
                    strokeWidth="1"
                  />
                </svg>
              </div>

              <div className="relative z-10 flex flex-col items-start gap-8">
                <AxionLogo
                  size="hero"
                  theme={isDark ? 'dark' : 'light'}
                />

                {/* Data architecture specs & verification */}
                <div className="w-full pt-6 border-t border-slate-200 dark:border-slate-800/80 grid grid-cols-3 gap-4 text-left">
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">
                      Architecture
                    </span>
                    <span className={`text-xs font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      Modular Cloud
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">
                      Core Throughput
                    </span>
                    <span className={`text-xs font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      100k+ ops/sec
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">
                      Deployment
                    </span>
                    <span className="text-xs font-semibold text-sky-400">
                      Multi-Region
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle Pill: Africa's Digital Frontier */}
            <div className="inline-flex items-center gap-2 text-xs font-mono text-sky-500 dark:text-sky-400 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20">
              <Globe className="w-3.5 h-3.5" />
              <span>AFRICAN ENTERPRISE HORIZON // 2026+</span>
            </div>

          </div>

          {/* Heading, Statement & CTA (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            <h2
              className={`text-4xl sm:text-5xl font-extrabold font-display tracking-tight mb-6 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              Building Axion
            </h2>

            <p
              className={`text-xl sm:text-2xl font-medium leading-relaxed mb-8 ${
                isDark ? 'text-slate-200' : 'text-slate-700'
              }`}
            >
              Technology, automation, and intelligent systems for businesses shaping Africa's future.
            </p>

            <p
              className={`text-base leading-relaxed mb-8 ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              At Axion Technologies, we architect enterprise-grade software engines that eliminate workflow inertia and bring hyper-performant digital infrastructure to evolving economic ecosystems.
            </p>

            {/* CTA Button */}
            <div className="mb-10">
              <button
                id="explore-axion-cta"
                type="button"
                onClick={onExploreAxion}
                className="group inline-flex items-center gap-3 px-7 py-4 rounded-full font-medium text-sm transition-all duration-300 shadow-md cursor-pointer bg-sky-500 hover:bg-sky-400 text-white hover:shadow-[0_0_30px_rgba(56,189,248,0.45)]"
              >
                <span>Explore Axion</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Micro Pillars */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2.5 text-xs text-slate-400 font-mono">
                <Server className="w-4 h-4 text-sky-400 shrink-0" />
                <span>FAULT-TOLERANT LEDGERS</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-400 font-mono">
                <Cpu className="w-4 h-4 text-blue-400 shrink-0" />
                <span>INTELLIGENT BOTTLENECK REMOVAL</span>
              </div>
            </div>

          </div>

        </div>

        {/* Real-Time Enterprise Data-Flow Highway (100% GPU-Accelerated CSS Stream - Smooth on All Smartphones) */}
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800/80">
          <div className="mb-3.5 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <Network className="w-3.5 h-3.5 text-sky-400" />
              <span className="text-[11px] sm:text-xs">
                TRANSACTION PROCESSING HIGHWAY // ZERO-LATENCY MESH
              </span>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>FEED SYNCHRONIZED</span>
            </div>
          </div>

          {/* Interactive Data-Flow Stream Strip */}
          <div
            className={`relative rounded-2xl border p-4 sm:p-5 overflow-hidden backdrop-blur-md ${
              isDark
                ? 'bg-slate-950/70 border-sky-500/20 shadow-[0_10px_30px_rgba(0,0,0,0.4)]'
                : 'bg-slate-50/90 border-slate-200 shadow-sm'
            }`}
          >
            {/* Multi-Lane Optical Bus */}
            <div className="h-16 w-full relative flex flex-col justify-center overflow-hidden">
              
              {/* Lane 1: Top Micro-Rail */}
              <div className="relative h-4 w-full flex items-center">
                <div className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-sky-500/25 to-transparent" />
                
                {/* Traveling Packet 1A */}
                <div
                  className="absolute left-0 w-32 h-3 flex items-center animate-data-flow"
                  style={{ animationDuration: '4.2s', animationDelay: '0s' }}
                >
                  <div className="h-[1.5px] w-24 bg-gradient-to-r from-transparent to-sky-400" />
                  <div className="w-2.5 h-1.5 rounded-full bg-sky-300 shadow-[0_0_10px_#38BDF8]" />
                </div>

                {/* Traveling Packet 1B */}
                <div
                  className="absolute left-0 w-32 h-3 flex items-center animate-data-flow"
                  style={{ animationDuration: '4.2s', animationDelay: '2.1s' }}
                >
                  <div className="h-[1.5px] w-24 bg-gradient-to-r from-transparent to-blue-400" />
                  <div className="w-2.5 h-1.5 rounded-full bg-blue-300 shadow-[0_0_10px_#60A5FA]" />
                </div>
              </div>

              {/* Lane 2: Main Heavy Highway Conduit (Center) */}
              <div className="relative h-6 w-full flex items-center">
                <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-sky-500/10 via-sky-400/35 to-sky-500/10" />
                <div className="absolute left-0 right-0 h-[1px] border-b border-dashed border-sky-400/30" />

                {/* Fixed Architectural Transceiver Nodes */}
                {[12, 32, 52, 72, 90].map((pct, i) => (
                  <div
                    key={i}
                    className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-none"
                    style={{ left: `${pct}%` }}
                  >
                    <span className="w-3 h-3 rounded-full border border-sky-400 bg-[#07101F] flex items-center justify-center shadow-[0_0_10px_rgba(56,189,248,0.6)]">
                      <span className="w-1 h-1 rounded-full bg-sky-300" />
                    </span>
                  </div>
                ))}

                {/* Primary High-Throughput Packet A */}
                <div
                  className="absolute left-0 w-44 h-5 flex items-center animate-data-flow-fast"
                  style={{ animationDelay: '0.4s' }}
                >
                  <div className="h-[2px] w-36 bg-gradient-to-r from-transparent via-sky-400/40 to-sky-400" />
                  <div className="w-4 h-2.5 rounded-full bg-sky-200 border border-white shadow-[0_0_14px_#38BDF8,0_0_6px_#FFF]" />
                </div>

                {/* Primary High-Throughput Packet B */}
                <div
                  className="absolute left-0 w-44 h-5 flex items-center animate-data-flow-fast"
                  style={{ animationDelay: '1.8s' }}
                >
                  <div className="h-[2px] w-36 bg-gradient-to-r from-transparent via-blue-400/40 to-blue-400" />
                  <div className="w-4 h-2.5 rounded-full bg-blue-200 border border-white shadow-[0_0_14px_#60A5FA,0_0_6px_#FFF]" />
                </div>
              </div>

              {/* Lane 3: Bottom Reverse Verification Rail */}
              <div className="relative h-4 w-full flex items-center">
                <div className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-600/30 to-transparent" />
                
                {/* Reverse Ingestion Stream */}
                <div
                  className="absolute left-0 w-36 h-3 flex items-center animate-data-flow-rev"
                  style={{ animationDelay: '0.2s' }}
                >
                  <div className="w-2.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_#2563EB]" />
                  <div className="h-[1.5px] w-28 bg-gradient-to-l from-transparent to-blue-500/50" />
                </div>
              </div>

            </div>

            {/* Bottom Stream Telemetry Strip */}
            <div className="mt-3 pt-3 border-t border-slate-200/50 dark:border-slate-800/60 flex flex-wrap items-center justify-between gap-3 text-[10px] sm:text-[11px] font-mono text-slate-400">
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="text-sky-400 flex items-center gap-1">
                  <Activity className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  REAL-TIME PROCESSING: 184,200 msg/sec
                </span>
                <span className="hidden sm:inline">END-TO-END LATENCY: 0.62ms</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>CRYPTOGRAPHIC ENCLAVE: ACTIVE</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
