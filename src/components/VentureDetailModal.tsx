import React, { useEffect } from 'react';
import { X, CheckCircle2, Terminal, Layers, Cpu, ArrowUpRight } from 'lucide-react';
import { VentureItem } from '../types.ts';
import { AxionFourSquareIcon } from './AxionLogo.tsx';

interface VentureDetailModalProps {
  venture: VentureItem | null;
  onClose: () => void;
  isDark: boolean;
  onOpenContact: () => void;
}

export const VentureDetailModal: React.FC<VentureDetailModalProps> = ({
  venture,
  onClose,
  isDark,
  onOpenContact,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (venture) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [venture, onClose]);

  if (!venture) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="venture-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity animate-in fade-in"
      />

      {/* Modal Card */}
      <div
        className={`relative w-full max-w-xl rounded-3xl border p-6 sm:p-8 z-10 shadow-2xl transition-all animate-in zoom-in-95 duration-200 ${
          isDark
            ? 'bg-[#07101F] border-slate-800 text-white shadow-[0_20px_60px_rgba(0,0,0,0.8)]'
            : 'bg-white border-slate-200 text-slate-900 shadow-[0_20px_60px_rgba(0,0,0,0.15)]'
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

        {/* Category & Status */}
        <div className="flex items-center gap-3 mb-4">
          <AxionFourSquareIcon size={16} />
          <span className="text-xs font-mono tracking-wider uppercase text-sky-400 font-semibold">
            {venture.category}
          </span>
          <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" />
            {venture.status}
          </span>
        </div>

        {/* Title */}
        <h2
          id="venture-modal-title"
          className="text-2xl sm:text-3xl font-bold font-display tracking-tight mb-3"
        >
          {venture.name}
        </h2>

        {/* One Liner */}
        <p
          className={`text-base leading-relaxed mb-6 ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {venture.oneLiner}
        </p>

        {/* Architectural Highlight */}
        <div
          className={`p-4 rounded-xl border mb-6 ${
            isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'
          }`}
        >
          <div className="flex items-center gap-2 text-xs font-mono text-sky-400 mb-1.5 font-semibold">
            <Cpu className="w-3.5 h-3.5" />
            <span>ARCHITECTURAL FOUNDATION</span>
          </div>
          <p className="text-sm font-mono text-slate-300 dark:text-slate-300 leading-relaxed">
            {venture.architectureHighlight}
          </p>
        </div>

        {/* Specifications */}
        <div className="mb-8">
          <span className="text-xs font-mono uppercase text-slate-400 block mb-2">
            TECHNICAL SPECIFICATIONS
          </span>
          <div className="flex flex-wrap gap-2">
            {venture.specs.map((spec) => (
              <span
                key={spec}
                className={`text-xs font-mono px-3 py-1.5 rounded-lg border ${
                  isDark
                    ? 'bg-slate-800/60 border-slate-700 text-sky-300'
                    : 'bg-white border-slate-200 text-sky-700 shadow-xs'
                }`}
              >
                {spec}
              </span>
            ))}
          </div>
        </div>

        {/* Action Row */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800">
          <span className="text-xs font-mono text-slate-400">
            SYSTEM // AX-VNT
          </span>
          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenContact();
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-medium bg-sky-500 hover:bg-sky-400 text-white transition-colors cursor-pointer"
          >
            <span>Inquire About System Deployment</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
