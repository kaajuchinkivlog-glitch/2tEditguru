import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Send,
  Sparkles,
  CheckCircle2,
  Film,
  Link2,
  DollarSign,
  Calendar,
  MessageSquare,
  Copy,
  Check,
} from 'lucide-react';
import { InquiryFormData } from '../types';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledService?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  prefilledService,
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    email: '',
    service: prefilledService || 'Reels & Shorts',
    footageLink: '',
    budget: '$300 - $800',
    timeline: 'Standard (48 - 72 Hours)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({ ...prev, service: prefilledService }));
    }
  }, [prefilledService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const copyBrief = () => {
    const text = `EditGuru Inquiry - Vivek\nClient: ${formData.name} (${formData.email})\nService: ${formData.service}\nBudget: ${formData.budget}\nTimeline: ${formData.timeline}\nFootage: ${formData.footageLink || 'Pending'}\nNotes: ${formData.message}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const servicesList = [
    'Reels & Shorts',
    'YouTube Videos',
    'Gaming Edits',
    'Cinematic Projects',
    'Video Editing (General)',
    'Social Media Content',
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 bg-black/85 backdrop-blur-2xl overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-xl max-h-[94vh] overflow-y-auto bg-neutral-950/95 backdrop-blur-2xl border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-2xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-white/10 mb-4 sm:mb-6">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                <Film className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="font-medium text-base sm:text-lg text-white">
                  Start a Project with Vivek
                </h3>
                <p className="text-[11px] sm:text-xs text-white/50 font-normal">
                  EditGuru.in • Direct Client Ingestion
                </p>
              </div>
            </div>

            <button
              id="close-contact-modal-btn"
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:border-white/30 flex items-center justify-center text-white/50 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-8 text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h4 className="font-display font-bold text-2xl text-white">
                Brief Received!
              </h4>
              <p className="mt-2 text-sm text-zinc-300 font-light max-w-md leading-relaxed">
                Thank you <strong className="text-white">{formData.name}</strong>. Vivek will review your footage specs and reply to <strong className="text-white">{formData.email}</strong> within 12 hours with timeline confirmation and rough cut estimation.
              </p>

              {/* Inquiry Summary Box */}
              <div className="mt-6 p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-left w-full text-xs font-mono-code space-y-1.5 text-zinc-300">
                <div>
                  <span className="text-zinc-500">Service:</span> {formData.service}
                </div>
                <div>
                  <span className="text-zinc-500">Budget Range:</span> {formData.budget}
                </div>
                <div>
                  <span className="text-zinc-500">Turnaround:</span> {formData.timeline}
                </div>
                {formData.footageLink && (
                  <div className="truncate">
                    <span className="text-zinc-500">Footage:</span> {formData.footageLink}
                  </div>
                )}
              </div>

              <div className="mt-6 flex items-center gap-3">
                <button
                  onClick={copyBrief}
                  className="px-4 py-2 rounded-full liquid-glass-subtle border border-white/15 text-xs text-zinc-300 hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied Brief' : 'Copy Brief'}</span>
                </button>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-2.5 rounded-full bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors"
                >
                  Done
                </button>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono-code text-zinc-400 uppercase mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Marcus Reid"
                    className="w-full bg-black/60 border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono-code text-zinc-400 uppercase mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="marcus@example.com"
                    className="w-full bg-black/60 border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-xs font-mono-code text-zinc-400 uppercase mb-1">
                  Project Category
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-black/60 border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-white transition-colors"
                >
                  {servicesList.map((s) => (
                    <option key={s} value={s} className="bg-zinc-900 text-white">
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              {/* Footage Link */}
              <div>
                <label className="block text-xs font-mono-code text-zinc-400 uppercase mb-1">
                  Raw Footage Link (Drive / Dropbox / Frame.io)
                </label>
                <div className="relative">
                  <Link2 className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="url"
                    value={formData.footageLink}
                    onChange={(e) => setFormData({ ...formData, footageLink: e.target.value })}
                    placeholder="https://drive.google.com/..."
                    className="w-full bg-black/60 border border-white/15 rounded-xl pl-10 pr-3.5 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
              </div>

              {/* Budget & Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono-code text-zinc-400 uppercase mb-1">
                    Estimated Budget
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-black/60 border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-white transition-colors"
                  >
                    <option value="Under $300" className="bg-zinc-900">Under $300</option>
                    <option value="$300 - $800" className="bg-zinc-900">$300 - $800</option>
                    <option value="$800 - $2,000" className="bg-zinc-900">$800 - $2,000</option>
                    <option value="$2,000+" className="bg-zinc-900">$2,000+ (Brand / Retainer)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono-code text-zinc-400 uppercase mb-1">
                    Timeline Target
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full bg-black/60 border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-white transition-colors"
                  >
                    <option value="Rush (Within 24 Hours)" className="bg-zinc-900">Rush (Within 24 Hours)</option>
                    <option value="Standard (48 - 72 Hours)" className="bg-zinc-900">Standard (48 - 72 Hours)</option>
                    <option value="Weekly Series (3 - 5 Days)" className="bg-zinc-900">Weekly Series (3 - 5 Days)</option>
                    <option value="Flexible Timeline" className="bg-zinc-900">Flexible Timeline</option>
                  </select>
                </div>
              </div>

              {/* Project Brief / Notes */}
              <div>
                <label className="block text-xs font-mono-code text-zinc-400 uppercase mb-1">
                  Creative Vision & Reference Links
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe desired pacing, sound references, music mood, or specific hooks you want emphasized..."
                  className="w-full bg-black/60 border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-white transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  id="submit-project-brief-btn"
                  className="w-full py-3.5 rounded-full bg-white text-black font-bold text-xs sm:text-sm tracking-widest uppercase hover:bg-white/90 transition-all flex items-center justify-center gap-2 shadow-xl cursor-pointer"
                >
                  <span>Submit Project Brief to Vivek</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
