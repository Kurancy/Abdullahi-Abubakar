import React, { useState } from 'react';
import { AxionFourSquareIcon } from './AxionLogo.tsx';
import { Layers, Shield, Sparkles, Compass, CheckCircle2, Quote, ArrowRight } from 'lucide-react';

interface LeadershipSectionProps {
  isDark: boolean;
}

interface StrategicPillar {
  id: string;
  label: string;
  short: string;
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
  title: string;
  description: string;
  outcomes: string[];
  metricLabel: string;
  metricValue: string;
}

const STRATEGIC_PILLARS: StrategicPillar[] = [
  {
    id: 'foresight',
    label: 'Strategic Foresight',
    short: 'Vision',
    icon: Compass,
    tag: 'PILLAR 01 // HORIZON',
    title: 'Future-Proof System Architecture',
    description:
      'Anticipating technological convergence to engineer foundational digital infrastructure that adapts gracefully across decades.',
    outcomes: [
      'Decoupled system topologies that eliminate legacy platform vendor lock-in',
      'Enterprise AI workflows grounded in deterministic data integrity',
      'Architectural runway engineered for seamless multi-regional expansion',
    ],
    metricLabel: 'TARGET SYSTEM LIFECYCLE',
    metricValue: '10+ YEARS',
  },
  {
    id: 'rigor',
    label: 'Architectural Rigor',
    short: 'Rigor',
    icon: Shield,
    tag: 'PILLAR 02 // STABILITY',
    title: 'Zero-Compromise Engineering',
    description:
      'Enforcing rigorous development discipline, hardened cryptographic boundaries, and ultra-high availability across distributed networks.',
    outcomes: [
      'Fault-tolerant failover protocols delivering 99.99% operational continuity',
      'Sub-millisecond data pipelines handling high-concurrency workloads',
      'Zero-trust security perimeters guarding mission-critical enterprise state',
    ],
    metricLabel: 'UPTIME BENCHMARK',
    metricValue: '99.99%',
  },
  {
    id: 'velocity',
    label: 'Autonomous Velocity',
    short: 'Execution',
    icon: Layers,
    tag: 'PILLAR 03 // IMPACT',
    title: 'High-Leverage Enterprise Automation',
    description:
      'Transforming fragmented operational friction into self-healing, automated execution pipelines that liberate human ingenuity.',
    outcomes: [
      '4x compression in operational cycle times across client systems',
      'Intelligent autonomous agent workflows executing routine logic',
      'Streamlined decision latency through real-time operational telemetry',
    ],
    metricLabel: 'THROUGHPUT GAIN',
    metricValue: '4X FASTER',
  },
];

export const LeadershipSection: React.FC<LeadershipSectionProps> = ({ isDark }) => {
  const [activePillarIndex, setActivePillarIndex] = useState(0);
  const currentPillar = STRATEGIC_PILLARS[activePillarIndex];
  const CurrentIcon = currentPillar.icon;

  return (
    <section
      id="leadership"
      aria-label="Executive Leadership"
      className="py-24 md:py-32 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Identifier */}
        <div className="flex items-center gap-3 mb-10">
          <AxionFourSquareIcon size={16} />
          <span className="text-xs font-mono tracking-[0.25em] uppercase text-sky-500 dark:text-sky-400 font-semibold">
            02 // Executive Direction
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Typography Content (7 cols) */}
          <div className="lg:col-span-7">
            <h2
              className={`text-sm font-mono uppercase tracking-[0.2em] mb-4 ${
                isDark ? 'text-slate-400' : 'text-slate-500'
              }`}
            >
              Leadership
            </h2>

            <p
              className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-[1.18] tracking-tight mb-8 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              Building technology with a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-400">
                long-term view.
              </span>
            </p>

            <p
              className={`text-lg sm:text-xl font-normal leading-relaxed mb-8 max-w-2xl ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              Leading Axion Technologies to engineer resilient digital infrastructure and high-throughput automation solutions designed for sustainable enterprise transformation.
            </p>

            {/* Core Leadership Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-200 dark:border-slate-800/80">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 shrink-0">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h3 className={`text-sm font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                    Architectural Rigor
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Zero compromise on durability
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 shrink-0">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <h3 className={`text-sm font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                    Systemic Velocity
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Streamlining complex operations
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className={`text-sm font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                    Autonomous Impact
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Automation that empowers teams
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Meaningful Executive Leadership Charter Card (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div
              id="executive-leadership-card"
              className={`relative w-full max-w-lg rounded-2xl border transition-all duration-300 backdrop-blur-xl p-6 sm:p-7 shadow-2xl ${
                isDark
                  ? 'bg-slate-900/85 border-sky-500/25 shadow-[0_20px_50px_rgba(7,16,31,0.85)]'
                  : 'bg-white/95 border-slate-200 shadow-[0_20px_40px_rgba(0,0,0,0.08)]'
              }`}
            >
              {/* Corner Technical Marks (+) */}
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

              {/* Card Header: Axion Executive Governance */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-200 dark:border-slate-800/90">
                <div className="flex items-center gap-2.5">
                  <AxionFourSquareIcon size={18} />
                  <div>
                    <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
                      Executive Governance
                    </h3>
                    <p className="text-[10px] font-mono text-slate-400">
                      STRATEGIC DIRECTIVES // AX-OS
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>ACTIVE</span>
                </div>
              </div>

              {/* Interactive Pillar Selector Tabs */}
              <div className="grid grid-cols-3 gap-1.5 p-1 rounded-xl mb-5 bg-slate-100 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800/80">
                {STRATEGIC_PILLARS.map((pillar, idx) => {
                  const isSelected = idx === activePillarIndex;
                  return (
                    <button
                      key={pillar.id}
                      type="button"
                      onClick={() => setActivePillarIndex(idx)}
                      className={`px-3 py-2 rounded-lg text-xs font-mono font-medium transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer ${
                        isSelected
                          ? 'bg-sky-500 text-white shadow-md font-semibold'
                          : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      <span>{pillar.short}</span>
                    </button>
                  );
                })}
              </div>

              {/* Active Pillar Details */}
              <div className="space-y-4 min-h-[220px]">
                {/* Pillar Tag & Title */}
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[10px] font-mono tracking-widest text-sky-500 dark:text-sky-400 font-semibold">
                      {currentPillar.tag}
                    </span>
                    <span className="text-slate-300 dark:text-slate-700">·</span>
                    <span className="text-[10px] font-mono text-slate-400">
                      {currentPillar.metricLabel}: <strong className="text-sky-400 font-bold">{currentPillar.metricValue}</strong>
                    </span>
                  </div>
                  
                  <h4 className="text-base sm:text-lg font-bold font-display text-slate-900 dark:text-white flex items-center gap-2">
                    <CurrentIcon className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>{currentPillar.title}</span>
                  </h4>
                </div>

                {/* Pillar Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {currentPillar.description}
                </p>

                {/* Deliverables / Concrete Outcomes */}
                <div className="space-y-2 pt-1">
                  {currentPillar.outcomes.map((outcome, oIdx) => (
                    <div key={oIdx} className="flex items-start gap-2 text-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                      <span className="text-slate-600 dark:text-slate-300 leading-normal">
                        {outcome}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Executive Founder Quote Footnote */}
              <div className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-800/90 relative">
                <Quote className="w-4 h-4 text-sky-500/40 absolute top-4 left-0 -translate-y-1" />
                <div className="pl-6">
                  <p className="text-xs italic text-slate-600 dark:text-slate-300 leading-relaxed mb-1">
                    "True technological leadership is measured by the resilience and dependability of the systems left running in your wake."
                  </p>
                  <p className="text-[10px] font-mono text-sky-500 dark:text-sky-400 font-semibold">
                    — Abdullahi Abubakar, Founder & CEO
                  </p>
                </div>
              </div>

              {/* Micro Telemetry Footer */}
              <div className="flex items-center justify-between pt-3 mt-3 border-t border-slate-100 dark:border-slate-800/50 text-[9px] font-mono text-slate-400">
                <span>SYS.GOVERNANCE // VERIFIED</span>
                <span className="flex items-center gap-1 text-sky-400">
                  <span>EXPLORE VENTURES</span>
                  <ArrowRight className="w-2.5 h-2.5" />
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
