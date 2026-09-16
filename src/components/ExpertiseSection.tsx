import React, { useState } from 'react';
import { AxionFourSquareIcon } from './AxionLogo.tsx';
import { ExpertiseItem } from '../types.ts';
import { InteractiveExpertiseGrid } from './InteractiveExpertiseGrid.tsx';
import { DataFlowRibbon } from './DataFlowRibbon.tsx';

interface ExpertiseSectionProps {
  isDark: boolean;
}

const EXPERTISE_LIST: ExpertiseItem[] = [
  {
    id: 'exp-01',
    number: '01',
    title: 'AI & Automation',
    description: 'Cognitive agentic workflows and intelligent decision frameworks.',
    metric: '< 12ms Inference',
  },
  {
    id: 'exp-02',
    number: '02',
    title: 'ERP & SAP Solutions',
    description: 'Enterprise resource orchestration and mission-critical ledger sync.',
    metric: '99.999% Reliability',
  },
  {
    id: 'exp-03',
    number: '03',
    title: 'Software Engineering',
    description: 'High-throughput distributed systems engineered for extreme scale.',
    metric: 'Distributed Fabric',
  },
  {
    id: 'exp-04',
    number: '04',
    title: 'Digital Transformation',
    description: 'Modernizing legacy operational infrastructure with zero downtime.',
    metric: 'Zero Operational Friction',
  },
  {
    id: 'exp-05',
    number: '05',
    title: 'Warehouse Technology',
    description: 'Automated telemetry, inventory robotics, and intelligent sorting.',
    metric: 'Real-time Telemetry',
  },
  {
    id: 'exp-06',
    number: '06',
    title: 'Enterprise Integration',
    description: 'Resilient multi-cloud API meshes and secure event streaming pipelines.',
    metric: 'Event-driven Mesh',
  },
];

export const ExpertiseSection: React.FC<ExpertiseSectionProps> = ({ isDark }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const activeItem = hoveredId ? EXPERTISE_LIST.find((i) => i.id === hoveredId) : null;

  return (
    <section
      id="expertise"
      aria-label="Core Technical Expertise"
      className="py-24 md:py-32 relative border-t border-sky-500/10 overflow-hidden"
    >
      {/* Background Geometric Grid Dots with Interactive Ping / Pulse on Hover */}
      <InteractiveExpertiseGrid
        isDark={isDark}
        hoveredIndex={hoveredIndex}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <AxionFourSquareIcon size={16} />
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-sky-500 dark:text-sky-400 font-semibold">
              03 // Capabilities
            </span>
          </div>

          <span className="text-xs font-mono text-slate-400 hidden sm:inline-block">
            ARCHITECTURAL DISCIPLINES [6/6]
          </span>
        </div>

        <div className="mb-10">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight mb-4 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Expertise
          </h2>
          <p className={`text-base sm:text-lg max-w-xl ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            Focused technical domains powering resilient enterprise solutions.
          </p>
        </div>

        {/* Elegant Data-Flow Animation Ribbon (High-Performance Connectivity & Real-Time Enterprise Processing) */}
        <div className="mb-12">
          <DataFlowRibbon
            isDark={isDark}
            variant="compact"
            label="ENTERPRISE DATA FABRIC // ARCHITECTURAL BUS"
            activeNode={activeItem ? activeItem.title.toUpperCase() : null}
            speed={3.5}
          />
        </div>

        {/* 6-Item Clean Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXPERTISE_LIST.map((item, idx) => {
            const isHovered = hoveredId === item.id;
            return (
              <div
                key={item.id}
                id={`expertise-card-${item.number}`}
                onMouseEnter={() => {
                  setHoveredId(item.id);
                  setHoveredIndex(idx);
                }}
                onMouseLeave={() => {
                  setHoveredId(null);
                  setHoveredIndex(null);
                }}
                className={`group relative p-7 rounded-2xl border transition-all duration-300 transform ${
                  isHovered ? '-translate-y-1.5' : 'translate-y-0'
                } ${
                  isDark
                    ? isHovered
                      ? 'bg-slate-900/90 border-sky-500/60 shadow-[0_12px_30px_rgba(56,189,248,0.18)]'
                      : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700'
                    : isHovered
                    ? 'bg-white border-sky-400 shadow-[0_12px_30px_rgba(14,165,233,0.16)]'
                    : 'bg-slate-50/70 border-slate-200/90 hover:border-slate-300'
                }`}
              >
                {/* Top row: Number and Animated Axion Square Motif */}
                <div className="flex items-center justify-between mb-5">
                  <span
                    className={`font-mono text-sm font-semibold tracking-wider transition-colors ${
                      isHovered
                        ? 'text-sky-500 dark:text-sky-400'
                        : isDark
                        ? 'text-slate-500'
                        : 'text-slate-400'
                    }`}
                  >
                    {item.number}
                  </span>

                  {/* Micro Axion Four-Square Motif that animates on hover */}
                  <div
                    className={`transition-all duration-300 ${
                      isHovered ? 'rotate-90 scale-110' : 'opacity-40'
                    }`}
                  >
                    <AxionFourSquareIcon size={16} />
                  </div>
                </div>

                {/* Title */}
                <h3
                  className={`text-xl font-bold font-display tracking-tight mb-2 transition-colors ${
                    isHovered
                      ? isDark
                        ? 'text-white'
                        : 'text-sky-600'
                      : isDark
                      ? 'text-slate-100'
                      : 'text-slate-900'
                  }`}
                >
                  {item.title}
                </h3>

                {/* One short supporting line */}
                <p
                  className={`text-sm leading-relaxed transition-opacity duration-300 ${
                    isHovered
                      ? isDark
                        ? 'text-slate-200'
                        : 'text-slate-700'
                      : isDark
                      ? 'text-slate-400'
                      : 'text-slate-500'
                  }`}
                >
                  {item.description}
                </p>

                {/* Micro Telemetry / Spec Badge on bottom right with pulse on hover */}
                <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500">
                    {item.metric}
                  </span>
                  <span
                    className={`text-[11px] font-mono transition-all flex items-center gap-1.5 ${
                      isHovered
                        ? 'text-sky-400 opacity-100'
                        : 'text-slate-500 opacity-0'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping" />
                    <span>NODE ACTIVE</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
