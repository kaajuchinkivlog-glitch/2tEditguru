import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Sparkles, FolderGit2, Send, Youtube, ExternalLink } from 'lucide-react';
import { HeroVisual } from './HeroVisual';

interface HeroProps {
  onExploreWork: () => void;
  onStartProject: () => void;
  onOpenProject: (id: string) => void;
  onWatchYouTube?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreWork,
  onStartProject,
  onOpenProject,
  onWatchYouTube,
}) => {
  const handleWatchYouTube = () => {
    if (onWatchYouTube) {
      onWatchYouTube();
    } else {
      const el = document.getElementById('youtube');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.open('https://youtube.com/@nomadvivek?si=lit1luSDOYuDRjHa', '_blank');
      }
    }
  };

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
        {/* Small Label with Creator Photo & Brand Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4 sm:mb-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
        >
          {/* Creator Mini Avatar */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
              alt="Vivek - Video Editor & Creator"
              width="20"
              height="20"
              loading="eager"
              decoding="async"
              className="w-5 h-5 rounded-full object-cover border border-white/40"
            />
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-white uppercase font-mono">
              EDITGURU • VIVEK
            </span>
          </div>

          <a
            href="https://youtube.com/@nomadvivek?si=lit1luSDOYuDRjHa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-600/20 border border-red-500/40 text-red-300 hover:bg-red-600/30 hover:border-red-400/60 transition-all text-[11px] font-mono shadow-sm group min-h-[36px]"
          >
            <Youtube className="w-3.5 h-3.5 text-red-400 group-hover:scale-110 transition-transform" />
            <span>@nomadvivek on YouTube</span>
            <ExternalLink className="w-2.5 h-2.5 opacity-60 group-hover:opacity-100" />
          </a>
        </motion.div>

        {/* Main Headline: Exactly "Creating Stories Through Visuals" */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[1.02] sm:leading-[0.95] tracking-tight text-white max-w-5xl"
        >
          CREATING STORIES <span className="font-serif italic font-normal text-white">THROUGH VISUALS</span>
        </motion.h1>

        {/* Supporting Description: Exactly "Professional video editing, cinematic storytelling and creative content by Vivek." */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 sm:mt-6 text-white/70 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl font-normal"
        >
          Professional video editing, cinematic storytelling and creative content by <strong className="text-white font-medium">Vivek</strong>. Crafting viral reels, high-retention YouTube films, music video rhythms, and cinema color grading.
        </motion.p>

        {/* The 3 Required Buttons: View Portfolio, Watch YouTube, Contact Me */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto"
        >
          {/* Button 1: View Portfolio */}
          <button
            id="hero-btn-view-portfolio"
            onClick={onExploreWork}
            className="w-full sm:w-auto min-h-[44px] bg-white text-black font-bold tracking-tight px-7 sm:px-8 py-3.5 sm:py-4 rounded-2xl hover:bg-white/90 active:scale-95 text-xs sm:text-sm uppercase transition-all shadow-2xl flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>VIEW PORTFOLIO</span>
            <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
          </button>

          {/* Button 2: Watch YouTube */}
          <button
            id="hero-btn-watch-youtube"
            onClick={handleWatchYouTube}
            className="w-full sm:w-auto min-h-[44px] bg-white/10 backdrop-blur-md border border-white/20 px-6 sm:px-7 py-3.5 sm:py-4 rounded-2xl hover:bg-white/20 active:scale-95 text-white font-semibold text-xs sm:text-sm uppercase transition-all shadow-xl flex items-center justify-center gap-2 group cursor-pointer"
          >
            <Youtube className="w-4 h-4 text-red-400 group-hover:scale-110 transition-transform" />
            <span>WATCH YOUTUBE</span>
          </button>

          {/* Button 3: Contact Me */}
          <button
            id="hero-btn-contact-me"
            onClick={onStartProject}
            className="w-full sm:w-auto min-h-[44px] border border-white/10 bg-white/5 backdrop-blur-md px-6 sm:px-7 py-3.5 sm:py-4 rounded-2xl hover:bg-white/10 active:scale-95 text-white/80 hover:text-white font-medium text-xs sm:text-sm uppercase transition-all flex items-center justify-center gap-2 group cursor-pointer"
          >
            <Send className="w-3.5 h-3.5 text-white/50 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            <span>CONTACT ME</span>
          </button>
        </motion.div>

        {/* Software Suite Badges */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-2 max-w-2xl"
        >
          {['Premiere Pro', 'After Effects', 'CapCut', 'VN Editor', 'Filmora'].map((tool) => (
            <span
              key={tool}
              className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] sm:text-xs text-white/70 font-mono tracking-tight flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
              {tool}
            </span>
          ))}
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
