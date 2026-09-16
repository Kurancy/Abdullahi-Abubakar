import React, { useEffect } from 'react';
import { X, ArrowRight, ShieldCheck, Cpu, Database, Network } from 'lucide-react';
import { AxionLogo, AxionFourSquareIcon } from './AxionLogo.tsx';

interface AxionModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
  onOpenContact: () => void;
}

export const AxionModal: React.FC<AxionModalProps> = ({
  isOpen,
  onClose,
  isDark,
  onOpenContact,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="axion-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity animate-in fade-in"
      />

      {/* Modal Content */}
      <div
        className={`relative w-full max-w-2xl rounded-3xl border p-6 sm:p-10 z-10 shadow-2xl transition-all animate-in zoom-in-95 duration-200 ${
          isDark
            ? 'bg-[#07101F] border-sky-500/20 text-white shadow-[0_25px_70px_rgba(0,0,0,0.85)]'
            : 'bg-white border-slate-200 text-slate-900 shadow-[0_25px_70px_rgba(0,0,0,0.15)]'
        }`}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Brand Display */}
        <div className="mb-6">
          <AxionLogo size="lg" theme={isDark ? 'dark' : 'light'} />
        </div>

        <div className="space-y-6">
          <div>
            <h2
              id="axion-modal-title"
              className="text-2xl sm:text-3xl font-bold font-display tracking-tight mb-2"
            >
              The Axion Architectural Vision
            </h2>
            <p className="text-sm font-mono text-sky-400">
              Enterprise Technology · Automation · African Economic Infrastructure
            </p>
          </div>

          <p
            className={`text-base leading-relaxed ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            Axion Technologies is founded on a singular mandate: architecting resilient, latency-free software foundations for enterprises operating in Africa's rapidly scaling digital landscape. We bridge the gap between high-overhead manual workflows and intelligent algorithmic orchestration.
          </p>

          {/* Architectural Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div
              className={`p-4 rounded-xl border ${
                isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}
            >
              <div className="flex items-center gap-2.5 text-sky-400 mb-2 font-mono text-xs font-semibold">
                <Cpu className="w-4 h-4" />
                <span>INTELLIGENT AUTOMATION</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Autonomous workflow engines eliminating transactional bottlenecks across supply chains and ERP platforms.
              </p>
            </div>

            <div
              className={`p-4 rounded-xl border ${
                isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}
            >
              <div className="flex items-center gap-2.5 text-blue-400 mb-2 font-mono text-xs font-semibold">
                <Database className="w-4 h-4" />
                <span>MISSION-CRITICAL RESILIENCE</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                High-availability fault-tolerant data pipelines with strict data sovereignty and cryptographic auditability.
              </p>
            </div>

            <div
              className={`p-4 rounded-xl border ${
                isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}
            >
              <div className="flex items-center gap-2.5 text-indigo-400 mb-2 font-mono text-xs font-semibold">
                <Network className="w-4 h-4" />
                <span>HIGH-SPEED INTEGRATION</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Unified API meshes enabling heterogeneous legacy systems to interface seamlessly with modern cloud clusters.
              </p>
            </div>

            <div
              className={`p-4 rounded-xl border ${
                isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}
            >
              <div className="flex items-center gap-2.5 text-emerald-400 mb-2 font-mono text-xs font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>LONG-TERM VALUE</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Engineered with architectural purity, avoiding fragile tech debt and delivering multi-decade operational stamina.
              </p>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <AxionFourSquareIcon size={14} />
              <span>AXION TECHNOLOGIES // EXECUTIVE SUITE</span>
            </div>

            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium text-xs font-mono bg-sky-500 hover:bg-sky-400 text-white cursor-pointer shadow-md"
            >
              <span>Engage Axion Leadership</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
