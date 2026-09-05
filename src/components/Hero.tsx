import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Sparkles, FolderGit2, Send } from 'lucide-react';
import { HeroVisual } from './HeroVisual';

interface HeroProps {
  onExploreWork: () => void;
  onStartProject: () => void;
  onOpenProject: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreWork,
  onStartProject,
  onOpenProject,
}) => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 sm:pt-36 pb-16 sm:pb-20 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Cinematic Ambient Background Lighting */}
      <div className="absolute inset-0 pointer-events-none -z-20 overflow-hidden">
        {/* Soft Radial Ambient Spotlight */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[500px] sm:h-[600px] bg-radial from-white/[0.07] via-white/[0.015] to-transparent rounded-full blur-3xl opacity-80" />
        
        {/* Cinematic Film Grid Lines & Subtle Grain */}
        <div className="absolute inset-0 film-grain opacity-40" />

        {/* Ambient Film Letterbox Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
        {/* Small Label with Artistic Flair Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4 sm:mb-6"
        >
          <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] sm:tracking-[0.4em] text-white/50 uppercase">
            Video Editor • Creator • Storyteller
          </span>
        </motion.div>

        {/* Main Headline with Artistic Flair Editorial Serif Accent */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[1.02] sm:leading-[0.95] tracking-tight text-white max-w-5xl"
        >
          TURNING <span className="font-serif italic font-normal text-white">MOMENTS</span> INTO VISUAL <span className="block">STORIES.</span>
        </motion.h1>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 sm:mt-6 text-white/50 text-sm sm:text-lg md:text-xl leading-relaxed max-w-xl font-normal"
        >
          I’m <strong className="text-white font-medium">Vivek</strong>, a visual storyteller who transforms raw footage into cinematic experiences and powerful digital narratives.
        </motion.p>

        {/* CTA Buttons - Artistic Flair Styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto"
        >
          {/* Primary CTA */}
          <button
            id="hero-btn-explore-work"
            onClick={onExploreWork}
            className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/20 px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl hover:bg-white/20 font-bold tracking-tight text-white text-xs sm:text-sm uppercase transition-all shadow-xl flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>EXPLORE MY WORK</span>
            <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
          </button>

          {/* Secondary CTA */}
          <button
            id="hero-btn-start-project"
            onClick={onStartProject}
            className="w-full sm:w-auto border border-white/10 px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl hover:bg-white/5 text-white/70 hover:text-white font-normal text-xs sm:text-sm uppercase transition-all flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>START A PROJECT</span>
            <Send className="w-3.5 h-3.5 text-white/50 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </motion.div>

        {/* Hero Visual Area (Editing Monitor + 4 Floating Cards) */}
        <HeroVisual
          onExploreWork={onExploreWork}
          onOpenProject={onOpenProject}
        />
      </div>
    </section>
  );
};
