import React from 'react';
import { Activity, Zap, Cpu } from 'lucide-react';

interface DataFlowRibbonProps {
  isDark: boolean;
  variant?: 'compact' | 'expanded';
  activeNode?: string | null;
  label?: string;
}

export const DataFlowRibbon: React.FC<DataFlowRibbonProps> = ({
  isDark,
  variant = 'compact',
  activeNode = null,
  label = 'REAL-TIME DATA STREAM',
}) => {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-xl border backdrop-blur-md transition-all duration-300 ${
        isDark
          ? 'bg-slate-950/70 border-sky-500/25 shadow-[0_4px_24px_rgba(7,16,31,0.6)]'
          : 'bg-white/85 border-slate-200 shadow-[0_4px_16px_rgba(0,0,0,0.04)]'
      } ${variant === 'expanded' ? 'p-4 sm:p-5' : 'py-2.5 px-3 sm:px-4'}`}
    >
      {/* Background Micro Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: isDark
            ? 'radial-gradient(rgba(56, 189, 248, 0.2) 1px, transparent 1px)'
            : 'radial-gradient(rgba(2, 132, 199, 0.18) 1px, transparent 1px)',
          backgroundSize: '16px 16px',
        }}
      />

      {/* Header Info Strip */}
      <div className="relative z-10 flex items-center justify-between text-xs font-mono mb-2">
        <div className="flex items-center gap-2 overflow-hidden">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400" />
          </span>
          <span className="font-semibold tracking-wider text-sky-500 dark:text-sky-400 uppercase text-[10px] sm:text-[11px] truncate">
            {label}
          </span>
          {activeNode && (
            <span className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded bg-sky-500/15 text-sky-300 border border-sky-500/40 font-semibold tracking-wide shrink-0 animate-pulse">
              NODE: {activeNode}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2 sm:gap-3 text-[10px] text-slate-400 shrink-0 font-mono">
          <span className="hidden md:inline-flex items-center gap-1">
            <Activity className="w-3 h-3 text-sky-400" />
            0.68ms BUS
          </span>
          <span className="inline-flex items-center gap-1 font-medium text-emerald-400">
            <Zap className="w-3 h-3" />
            <span>SYNCED</span>
          </span>
        </div>
      </div>

      {/* Optical Circuit Conduit Track (100% GPU CSS Animation - Buttery 60fps on Mobile) */}
      <div className="relative z-10 h-7 w-full flex items-center overflow-hidden">
        {/* Base Static Conduit Rail */}
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r from-sky-500/10 via-sky-400/30 to-sky-500/10" />
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1px] border-b border-dashed border-sky-400/20" />

        {/* Junction Nodes along the bus */}
        {[10, 28, 48, 68, 88].map((pct, idx) => (
          <div
            key={idx}
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-none"
            style={{ left: `${pct}%` }}
          >
            <span className="w-2.5 h-2.5 rounded-full border border-sky-400/60 bg-[#07101F] flex items-center justify-center shadow-[0_0_8px_rgba(56,189,248,0.5)]">
              <span className="w-1 h-1 rounded-full bg-sky-400" />
            </span>
          </div>
        ))}

        {/* Forward Stream: Packet 1 */}
        <div
          className="absolute top-1/2 -translate-y-1/2 left-0 w-36 h-4 pointer-events-none flex items-center animate-data-flow"
          style={{ animationDuration: '3.6s', animationDelay: '0s' }}
        >
          {/* Luminous Tail */}
          <div className="h-[2px] w-28 bg-gradient-to-r from-transparent via-sky-400/40 to-sky-400" />
          {/* Glowing Capsule Head */}
          <div className="w-3.5 h-2 rounded-full bg-sky-300 shadow-[0_0_12px_#38BDF8,0_0_4px_#FFF] border border-white shrink-0" />
        </div>

        {/* Forward Stream: Packet 2 (Staggered) */}
        <div
          className="absolute top-1/2 -translate-y-1/2 left-0 w-36 h-4 pointer-events-none flex items-center animate-data-flow"
          style={{ animationDuration: '3.6s', animationDelay: '1.2s' }}
        >
          <div className="h-[2px] w-28 bg-gradient-to-r from-transparent via-blue-400/40 to-blue-400" />
          <div className="w-3 h-2 rounded-full bg-blue-200 shadow-[0_0_12px_#60A5FA,0_0_4px_#FFF] border border-white shrink-0" />
        </div>

        {/* Forward Stream: Packet 3 (Staggered) */}
        <div
          className="absolute top-1/2 -translate-y-1/2 left-0 w-36 h-4 pointer-events-none flex items-center animate-data-flow"
          style={{ animationDuration: '3.6s', animationDelay: '2.4s' }}
        >
          <div className="h-[2px] w-28 bg-gradient-to-r from-transparent via-sky-400/40 to-sky-400" />
          <div className="w-3.5 h-2 rounded-full bg-sky-300 shadow-[0_0_12px_#38BDF8,0_0_4px_#FFF] border border-white shrink-0" />
        </div>

        {/* Reverse Stream: Verification Micro-Pulse */}
        <div
          className="absolute top-1/2 -translate-y-1/2 left-0 w-28 h-3 pointer-events-none flex items-center animate-data-flow-rev"
          style={{ animationDuration: '4.8s', animationDelay: '0.8s' }}
        >
          <div className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_#3B82F6] shrink-0" />
          <div className="h-[1.5px] w-20 bg-gradient-to-l from-transparent via-blue-500/30 to-blue-400" />
        </div>
      </div>

      {variant === 'expanded' && (
        <div className="relative z-10 mt-2.5 pt-2 border-t border-slate-200/50 dark:border-slate-800/70 flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono text-slate-400">
          <div className="flex items-center gap-4">
            <span>PACKET INGESTION: 184,200 msg/sec</span>
            <span className="hidden sm:inline">BUFFER: 0.02% OCCUPIED</span>
          </div>
          <div className="flex items-center gap-1 text-sky-400">
            <Cpu className="w-3 h-3" />
            <span>AXION RESILIENT FABRIC ACTIVE</span>
          </div>
        </div>
      )}
    </div>
  );
};
