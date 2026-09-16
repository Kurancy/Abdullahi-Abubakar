import React, { useState } from 'react';
import { AxionFourSquareIcon } from './AxionLogo.tsx';
import { VentureItem } from '../types.ts';
import { ArrowUpRight, CheckCircle2, Terminal } from 'lucide-react';

interface VenturesSectionProps {
  isDark: boolean;
  onSelectVenture: (venture: VentureItem) => void;
}

const VENTURES_LIST: VentureItem[] = [
  {
    id: 'axion-enterprise-orchestrator',
    category: 'Enterprise Systems',
    name: 'Axion Enterprise Orchestrator',
    oneLiner: 'Unified process synchronization and mission-critical ERP workflow automation.',
    architectureHighlight: 'Event-driven message routing connecting legacy databases to modern APIs.',
    specs: ['Distributed Event Bus', 'Zero-Loss Ledger Sync', 'Microservices Mesh'],
    status: 'DEPLOYED & OPERATIONAL',
  },
  {
    id: 'warehouse-telemetry-engine',
    category: 'Warehouse Technology',
    name: 'Autonomous Warehouse Logistics Core',
    oneLiner: 'Real-time telemetry, robotic dispatch coordination, and algorithmic inventory tracking.',
    architectureHighlight: 'Sub-second sensor ingestion with predictive bin optimization heuristics.',
    specs: ['Edge Telemetry', 'Dynamic Route Solver', 'IoT Gateway Protocol'],
    status: 'ACTIVE PIPELINE',
  },
  {
    id: 'cognitive-automation-matrix',
    category: 'AI Automation',
    name: 'Neural Enterprise Automation Fabric',
    oneLiner: 'Domain-specific intelligent agents handling enterprise document cognition and triage.',
    architectureHighlight: 'Constrained semantic extraction pipelines preserving strict data privacy.',
    specs: ['Self-Hosted LLM Enclave', 'Audited Inference Pipeline', 'Context Buffers'],
    status: 'PRODUCTION DEPLOYMENT',
  },
  {
    id: 'digital-transformation-suite',
    category: 'Digital Transformation',
    name: 'Legacy Cloud Modernization Blueprint',
    oneLiner: 'Strangler-fig re-platforming architecture for high-concurrency commercial backbones.',
    architectureHighlight: 'Containerized state transition layers with rolling blue-green parity.',
    specs: ['Stateless API Proxy', 'Database CDC Pipeline', 'Zero-Downtime Migration'],
    status: 'FLAGSHIP ARCHITECTURE',
  },
];

export const VenturesSection: React.FC<VenturesSectionProps> = ({
  isDark,
  onSelectVenture,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Enterprise Systems', 'Warehouse Technology', 'AI Automation', 'Digital Transformation'];

  const filteredVentures =
    selectedCategory === 'All'
      ? VENTURES_LIST
      : VENTURES_LIST.filter((v) => v.category === selectedCategory);

  return (
    <section
      id="ventures"
      aria-label="Ventures and Selected Systems"
      className="py-24 md:py-36 relative border-t border-sky-500/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <AxionFourSquareIcon size={16} />
              <span className="text-xs font-mono tracking-[0.25em] uppercase text-sky-500 dark:text-sky-400 font-semibold">
                05 // Selected Work
              </span>
            </div>
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              Ventures & Systems
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-sky-500 text-white shadow-sm'
                    : isDark
                    ? 'bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                    : 'bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Large Horizontal Project Panels / Asymmetric Editorial Layout */}
        <div className="space-y-6">
          {filteredVentures.map((venture, idx) => {
            return (
              <div
                key={venture.id}
                id={`venture-card-${venture.id}`}
                className={`group relative p-8 sm:p-10 rounded-3xl border transition-all duration-300 ${
                  isDark
                    ? 'bg-slate-900/40 border-slate-800/80 hover:border-sky-500/40 hover:bg-slate-900/70 shadow-[0_10px_30px_rgba(0,0,0,0.2)]'
                    : 'bg-slate-50/70 border-slate-200/90 hover:border-sky-400 hover:bg-white shadow-[0_10px_30px_rgba(0,0,0,0.03)]'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left Column: Category, Name & One-Liner (8 cols) */}
                  <div className="lg:col-span-8">
                    {/* Category Label with Axion geometric dot */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                      <span className="text-xs font-mono uppercase tracking-wider text-sky-500 dark:text-sky-400 font-semibold">
                        {venture.category}
                      </span>
                      <span className="text-xs font-mono text-slate-400 dark:text-slate-600">
                        // 0{idx + 1}
                      </span>
                    </div>

                    {/* Project Name */}
                    <h3
                      className={`text-2xl sm:text-3xl font-bold font-display tracking-tight mb-3 ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {venture.name}
                    </h3>

                    {/* One-Line Description */}
                    <p
                      className={`text-base sm:text-lg leading-relaxed mb-6 max-w-2xl ${
                        isDark ? 'text-slate-300' : 'text-slate-600'
                      }`}
                    >
                      {venture.oneLiner}
                    </p>

                    {/* Architectural Highlight & Technical Tags */}
                    <div className="flex flex-wrap items-center gap-2">
                      {venture.specs.map((spec) => (
                        <span
                          key={spec}
                          className={`text-xs font-mono px-2.5 py-1 rounded-md border ${
                            isDark
                              ? 'bg-slate-800/50 border-slate-700/60 text-slate-300'
                              : 'bg-white border-slate-200 text-slate-600'
                          }`}
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Architectural Status & Interactive View CTA (4 cols) */}
                  <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col justify-between items-start lg:items-end gap-6 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-slate-800/80 lg:pl-8">
                    
                    {/* Telemetry Status */}
                    <div className="text-left lg:text-right">
                      <span className="text-[10px] font-mono text-slate-400 block uppercase mb-1">
                        System Architecture
                      </span>
                      <div className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-500 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{venture.status}</span>
                      </div>
                    </div>

                    {/* View → CTA Button */}
                    <button
                      type="button"
                      onClick={() => onSelectVenture(venture)}
                      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-200 cursor-pointer ${
                        isDark
                          ? 'bg-slate-800 hover:bg-sky-500 text-slate-200 hover:text-white border border-slate-700 hover:border-sky-400'
                          : 'bg-white hover:bg-sky-600 text-slate-800 hover:text-white border border-slate-300 hover:border-sky-600 shadow-sm'
                      }`}
                    >
                      <span>View</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
