import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  User,
  Sparkles,
  Film,
  Sliders,
  AudioWaveform,
  Palette,
  CheckCircle2,
  X,
  ArrowRight,
  Tv,
  Award,
} from 'lucide-react';
import { WORKFLOW_STEPS } from '../data/portfolioData';

interface AboutPreviewProps {
  onStartProject: () => void;
}

export const AboutPreview: React.FC<AboutPreviewProps> = ({ onStartProject }) => {
  const [showLearnMore, setShowLearnMore] = useState(false);

  return (
    <section id="about" className="relative py-16 sm:py-28 px-4 sm:px-6 w-full max-w-6xl mx-auto">
      {/* Background soft ambient flare */}
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-white/[0.03] rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Main Glass Section Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative rounded-3xl bg-white/5 backdrop-blur-xl p-5 sm:p-10 md:p-14 border border-white/10 shadow-2xl overflow-hidden"
      >
        {/* Top Header Tag */}
        <div className="flex items-center gap-2 mb-4 sm:mb-6">
          <div className="w-2 h-2 rounded-full bg-white/40" />
          <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase text-white/50">
            THE ARCHITECT OF THE TIMELINE
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-12 items-center">
          {/* Left Column: Profile Visual + Glass Framing */}
          <div className="lg:col-span-5 relative flex flex-col items-center">
            {/* Cinematic Profile Frame */}
            <div className="relative w-full max-w-[260px] sm:max-w-none sm:w-72 aspect-[3/4] sm:h-96 rounded-3xl overflow-hidden bg-white/5 border border-white/15 p-2 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80"
                alt="Vivek - Video Editor & Creator"
                className="w-full h-full object-cover rounded-2xl filter grayscale contrast-110 brightness-95 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-2xl pointer-events-none" />

              {/* Glass Tag Overlay on Profile */}
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 bg-white/10 backdrop-blur-xl p-2.5 sm:p-3 rounded-2xl border border-white/20">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white tracking-wide">
                      VIVEK
                    </h4>
                    <p className="text-[10px] sm:text-[11px] font-mono-code text-white/50">
                      FOUNDER • EDITGURU.IN
                    </p>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                </div>
              </div>
            </div>

            {/* Floating Mini Credential Badge */}
            <div className="mt-3 sm:mt-4 flex items-center justify-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs text-white/60 text-center max-w-full">
              <Award className="w-3.5 h-3.5 text-white/70 flex-shrink-0" />
              <span>Colorist • Sound Designer • Storyteller</span>
            </div>
          </div>

          {/* Right Column: Narrative Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <h2 className="text-2xl sm:text-5xl tracking-tight text-white uppercase font-light leading-tight">
              BEHIND <span className="font-serif italic font-normal text-white">THE EDIT</span>
            </h2>

            {/* Core Quote Statement */}
            <blockquote className="mt-4 sm:mt-5 text-base sm:text-xl md:text-2xl text-white/90 font-serif italic leading-relaxed border-l-2 border-white/30 pl-3 sm:pl-4 py-1">
              "Every video has a story. My goal is to transform ideas into visuals that connect, inspire and leave an impact."
            </blockquote>

            {/* Short Biography */}
            <p className="mt-4 sm:mt-6 text-xs sm:text-base text-white/50 font-normal leading-relaxed">
              I am Vivek, a passionate filmmaker, digital creator, and video editor specializing in rhythm-driven storytelling. Over the past three years, I’ve collaborated with YouTube channels, tech brands, esports athletes, and indie creators to turn scattered rushes into compelling, high-retention visual pieces.
            </p>

            <p className="mt-2.5 sm:mt-3 text-xs sm:text-base text-white/50 font-normal leading-relaxed">
              Video editing isn’t just cutting clips—it’s micro-tuning the emotional heartbeat of every transition, foley layer, and color grade until the audience is completely immersed.
            </p>

            {/* Core Craft Pillars */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 my-5 sm:my-6 w-full">
              <div className="p-3 sm:p-3.5 rounded-2xl bg-white/5 border border-white/10">
                <Film className="w-4 h-4 text-white/80 mb-1.5" />
                <div className="text-xs font-semibold text-white">Rhythmic Pacing</div>
                <div className="text-[10px] sm:text-[11px] text-white/40">Locked to audio beats</div>
              </div>
              <div className="p-3 sm:p-3.5 rounded-2xl bg-white/5 border border-white/10">
                <AudioWaveform className="w-4 h-4 text-white/80 mb-1.5" />
                <div className="text-xs font-semibold text-white">Spatial Sound</div>
                <div className="text-[10px] sm:text-[11px] text-white/40">Multi-layer foley & risers</div>
              </div>
              <div className="p-3 sm:p-3.5 rounded-2xl bg-white/5 border border-white/10 col-span-2 sm:col-span-1">
                <Palette className="w-4 h-4 text-white/80 mb-1.5" />
                <div className="text-xs font-semibold text-white">Color Emotive</div>
                <div className="text-[10px] sm:text-[11px] text-white/40">Custom film print looks</div>
              </div>
            </div>

            {/* Learn More Button */}
            <div className="flex flex-wrap items-center gap-4 mt-2">
              <button
                id="btn-learn-more-vivek"
                onClick={() => setShowLearnMore(true)}
                className="px-6 py-3 rounded-full bg-white text-black text-xs sm:text-sm font-bold tracking-widest uppercase hover:bg-white/90 transition-all flex items-center gap-2 shadow-lg"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onStartProject}
                className="px-5 py-3 rounded-full border border-white/10 hover:bg-white/5 text-xs sm:text-sm text-white/70 hover:text-white transition-colors"
              >
                Book a Consultation
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Learn More Detailed Modal */}
      <AnimatePresence>
        {showLearnMore && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto liquid-glass border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl bg-black/90"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Film className="w-5 h-5 text-white" />
                  <h3 className="font-display font-bold text-xl text-white">
                    Vivek's Creative Blueprint
                  </h3>
                </div>
                <button
                  id="close-learn-more-modal"
                  onClick={() => setShowLearnMore(false)}
                  className="w-8 h-8 rounded-full liquid-glass flex items-center justify-center text-zinc-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="mt-6 space-y-6 text-sm text-zinc-300 font-light">
                <div>
                  <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-zinc-300" />
                    Creative Philosophy
                  </h4>
                  <p className="leading-relaxed text-zinc-400">
                    A great edit is invisible yet deeply felt. Whether editing a 30-second vertical reel or a 20-minute video essay, every frame must earn the viewer’s attention. My philosophy centers on emotional cadence—knowing when to accelerate, when to breathe, and when to let sound design carry the scene.
                  </p>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <Tv className="w-4 h-4 text-zinc-300" />
                    Editing & Color Suite
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[
                      'DaVinci Resolve Studio 19',
                      'Adobe Premiere Pro 2025',
                      'After Effects (3D Tracking)',
                      'Fairlight & Audition Audio',
                      'Dehancer Film Emulation',
                      'Sony S-Log3 / ProRes RAW',
                    ].map((item) => (
                      <div
                        key={item}
                        className="p-2.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs text-zinc-300 flex items-center gap-2"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-white flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-3">4-Step Production Pipeline</h4>
                  <div className="space-y-3">
                    {WORKFLOW_STEPS.map((s) => (
                      <div
                        key={s.step}
                        className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-3"
                      >
                        <span className="text-xs font-mono-code text-zinc-400 pt-0.5">
                          {s.step}
                        </span>
                        <div>
                          <div className="text-sm font-medium text-white">{s.title}</div>
                          <div className="text-xs text-zinc-400 mt-1">{s.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-end gap-3">
                <button
                  onClick={() => setShowLearnMore(false)}
                  className="px-4 py-2 rounded-full text-xs text-zinc-400 hover:text-white"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setShowLearnMore(false);
                    onStartProject();
                  }}
                  className="px-5 py-2.5 rounded-full bg-white text-black font-semibold text-xs hover:bg-zinc-200"
                >
                  Start Project with Vivek
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
