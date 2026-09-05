import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { CreatorStat } from '../types';
import { INITIAL_CREATOR_STATS } from '../data/portfolioData';

const STATS_STORAGE_KEY = 'editguru_creator_stats_v1';

export const CreatorStats: React.FC = () => {
  const [stats] = useState<CreatorStat[]>(() => {
    try {
      const saved = localStorage.getItem(STATS_STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return INITIAL_CREATOR_STATS;
  });

  return (
    <section className="relative py-12 sm:py-16 px-4 sm:px-6 w-full max-w-6xl mx-auto">
      {/* Top Header */}
      <div className="flex items-center justify-between mb-8 px-2">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
          <span className="text-xs font-bold tracking-[0.3em] text-white/50 uppercase">
            CREATOR MILESTONES
          </span>
        </div>
      </div>

      {/* Grid of 4 Minimal Glass Statistic Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative rounded-2xl sm:rounded-3xl p-4 sm:p-7 border bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10 hover:border-white/20 shadow-xl transition-all flex flex-col justify-between group overflow-hidden"
          >
            {/* Subtle glass reflection highlight */}
            <div className="absolute -top-12 -right-12 w-28 h-28 bg-white/5 rounded-full blur-2xl pointer-events-none group-hover:bg-white/10 transition-all" />

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
          </motion.div>
        ))}
      </div>
    </section>
  );
};

