import React, { useState, useEffect } from 'react';
import { X, Mail, Check, Copy, ArrowUpRight } from 'lucide-react';
import { AxionLogo } from './AxionLogo.tsx';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  isDark,
}) => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    message: '',
  });

  const ceoEmail = 'abdullahiabubakar9991@gmail.com';

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

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(ceoEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
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

        {/* Brand & Heading */}
        <div className="mb-6">
          <AxionLogo size="sm" theme={isDark ? 'dark' : 'light'} />
          <h2
            id="contact-modal-title"
            className="text-2xl font-bold font-display tracking-tight mt-4"
          >
            Direct Executive Channel
          </h2>
          <p className="text-xs font-mono text-sky-400 mt-1">
            Abdullahi Abubakar · Office of the CEO
          </p>
        </div>

        {/* Email Copy Card */}
        <div
          className={`p-4 rounded-xl border flex items-center justify-between gap-4 mb-6 ${
            isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'
          }`}
        >
          <div className="flex items-center gap-3 overflow-hidden">
            <Mail className="w-4 h-4 text-sky-400 shrink-0" />
            <span className="text-xs sm:text-sm font-mono truncate">
              {ceoEmail}
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={handleCopyEmail}
              className={`p-2 rounded-lg text-xs font-mono border transition-all cursor-pointer flex items-center gap-1.5 ${
                copied
                  ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
                  : 'bg-slate-800/40 hover:bg-slate-800 text-slate-300 border-slate-700'
              }`}
              title="Copy email to clipboard"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy'}</span>
            </button>

            <a
              href={`mailto:${ceoEmail}?subject=Strategic Inquiry - Axion Technologies`}
              className="p-2 rounded-lg text-xs font-mono bg-sky-500 hover:bg-sky-400 text-white transition-all flex items-center gap-1"
            >
              <ArrowUpRight className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Mail</span>
            </a>
          </div>
        </div>

        {formSubmitted ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold">Inquiry Transmitted</h3>
            <p className="text-sm text-slate-400 max-w-sm mx-auto">
              Thank you for reaching out. The executive office of Abdullahi Abubakar will review your communication promptly.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-4 px-6 py-2 rounded-full text-xs font-mono bg-sky-500 text-white"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">
                  NAME
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your Name"
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-1 focus:ring-sky-400 ${
                    isDark
                      ? 'bg-slate-900 border-slate-800 text-white'
                      : 'bg-slate-50 border-slate-200 text-slate-900'
                  }`}
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">
                  ORGANIZATION
                </label>
                <input
                  type="text"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  placeholder="Company / Venture"
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-1 focus:ring-sky-400 ${
                    isDark
                      ? 'bg-slate-900 border-slate-800 text-white'
                      : 'bg-slate-50 border-slate-200 text-slate-900'
                  }`}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1">
                CORPORATE EMAIL
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="name@organization.com"
                className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-1 focus:ring-sky-400 ${
                  isDark
                    ? 'bg-slate-900 border-slate-800 text-white'
                    : 'bg-slate-50 border-slate-200 text-slate-900'
                }`}
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1">
                STRATEGIC INQUIRY / OBJECTIVE
              </label>
              <textarea
                required
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Briefly summarize the technology initiative or collaboration proposal..."
                className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-1 focus:ring-sky-400 resize-none ${
                  isDark
                    ? 'bg-slate-900 border-slate-800 text-white'
                    : 'bg-slate-50 border-slate-200 text-slate-900'
                }`}
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl font-medium text-sm bg-sky-500 hover:bg-sky-400 text-white transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <span>Transmit Executive Message</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
