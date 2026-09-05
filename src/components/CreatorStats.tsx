import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Edit3, Check, RotateCcw, Sparkles } from 'lucide-react';
import { CreatorStat } from '../types';
import { INITIAL_CREATOR_STATS } from '../data/portfolioData';

const STATS_STORAGE_KEY = 'editguru_creator_stats_v1';

export const CreatorStats: React.FC = () => {
  const [stats, setStats] = useState<CreatorStat[]>(() => {
    try {
      const saved = localStorage.getItem(STATS_STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return INITIAL_CREATOR_STATS;
  });

  const [isEditing, setIsEditing] = useState(false);
  const [draftStats, setDraftStats] = useState<CreatorStat[]>(stats);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    setDraftStats(stats);
  }, [stats]);

  const handleSave = () => {
    setStats(draftStats);
    try {
      localStorage.setItem(STATS_STORAGE_KEY, JSON.stringify(draftStats));
    } catch {
      // ignore
    }
    setIsEditing(false);
    setToastMessage('Stats updated successfully!');
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleReset = () => {
    setStats(INITIAL_CREATOR_STATS);
    setDraftStats(INITIAL_CREATOR_STATS);
    try {
      localStorage.removeItem(STATS_STORAGE_KEY);
    } catch {
      // ignore
    }
    setIsEditing(false);
    setToastMessage('Reset to initial stats');
    setTimeout(() => setToastMessage(null), 3000);
  };

  const updateDraftValue = (id: string, field: 'value' | 'label', val: string) => {
    setDraftStats((prev) =>
      prev.map((s) => (s.id === id ? { ...s, [field]: val } : s))
    );
  };

  return (
    <section className="relative py-12 sm:py-16 px-4 sm:px-6 w-full max-w-6xl mx-auto">
      {/* Top Header with Edit Mode Action */}
      <div className="flex items-center justify-between mb-8 px-2">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
          <span className="text-xs font-bold tracking-[0.3em] text-white/50 uppercase">
            CREATOR MILESTONES
          </span>
        </div>

        {/* Edit toggle button */}
        <div className="flex items-center gap-2">
          <AnimatePresence>
            {toastMessage && (
              <motion.span
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                className="text-xs text-white/80 font-mono-code mr-2 hidden sm:inline"
              >
                {toastMessage}
              </motion.span>
            )}
          </AnimatePresence>

          {isEditing ? (
            <div className="flex items-center gap-2">
              <button
                id="reset-stats-btn"
                onClick={handleReset}
                className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/15 text-xs text-white/70 hover:text-white flex items-center gap-1.5 transition-colors"
                title="Reset to default stats"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
              <button
                id="save-stats-btn"
                onClick={handleSave}
                className="px-4 py-1.5 rounded-full bg-white text-black font-bold text-xs flex items-center gap-1.5 hover:bg-white/90 transition-colors shadow-md uppercase tracking-wider"
              >
                <Check className="w-3.5 h-3.5" />
                <span>Save Stats</span>
              </button>
            </div>
          ) : (
            <button
              id="edit-stats-toggle-btn"
              onClick={() => setIsEditing(true)}
              className="px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25 text-xs text-white/60 hover:text-white flex items-center gap-1.5 transition-all cursor-pointer"
              title="Click to edit numbers and labels"
            >
              <Edit3 className="w-3 h-3 text-white/50" />
              <span>Edit Numbers</span>
            </button>
          )}
        </div>
      </div>

      {/* Grid of 4 Minimal Glass Statistic Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
        {stats.map((stat, idx) => {
          const draft = draftStats.find((d) => d.id === stat.id) || stat;

          return (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative rounded-2xl sm:rounded-3xl p-4 sm:p-7 border transition-all ${
                isEditing
                  ? 'bg-white/10 border-white/30 shadow-2xl'
                  : 'bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10 hover:border-white/20 shadow-xl'
              } flex flex-col justify-between group overflow-hidden`}
            >
              {/* Subtle glass reflection highlight */}
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-white/5 rounded-full blur-2xl pointer-events-none group-hover:bg-white/10 transition-all" />

              {/* Editable or Display View */}
              {isEditing ? (
                <div className="flex flex-col gap-2 z-10">
                  <label className="text-[10px] font-mono-code text-white/50 uppercase">
                    Value / Number:
                  </label>
                  <input
                    type="text"
                    value={draft.value}
                    onChange={(e) => updateDraftValue(stat.id, 'value', e.target.value)}
                    className="w-full bg-black/60 border border-white/20 rounded-xl px-2.5 py-1.5 text-lg sm:text-xl font-bold text-white focus:outline-none focus:border-white"
                  />
                  <label className="text-[10px] font-mono-code text-white/50 uppercase mt-1">
                    Label:
                  </label>
                  <input
                    type="text"
                    value={draft.label}
                    onChange={(e) => updateDraftValue(stat.id, 'label', e.target.value)}
                    className="w-full bg-black/60 border border-white/20 rounded-xl px-2.5 py-1 text-xs text-white/80 focus:outline-none focus:border-white"
                  />
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between mb-2 sm:mb-4">
                    <span className="text-[10px] sm:text-[11px] font-mono-code text-white/40 uppercase tracking-widest">
                      0{idx + 1} // STAT
                    </span>
                    <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white/30 group-hover:text-white/70 transition-colors" />
                  </div>

                  {/* Main Metric Value with Artistic Flair font-light */}
                  <div className="my-1 sm:my-2">
                    <span className="text-2xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white group-hover:opacity-90 transition-all">
                      {stat.value}
                    </span>
                  </div>

                  {/* Stat Label */}
                  <div className="mt-2 pt-2.5 sm:pt-3 border-t border-white/10 flex flex-col">
                    <span className="font-medium text-xs sm:text-base text-white/90 truncate">
                      {stat.label}
                    </span>
                    {stat.sublabel && (
                      <span className="text-[10px] sm:text-xs text-white/50 font-normal mt-0.5 truncate">
                        {stat.sublabel}
                      </span>
                    )}
                  </div>
                </>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
