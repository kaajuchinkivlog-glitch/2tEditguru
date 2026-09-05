import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import {
  Play,
  Pause,
  Sliders,
  Scissors,
  Clapperboard,
  Smartphone,
  Sparkles,
  Maximize2,
  Volume2,
  VolumeX,
} from 'lucide-react';

interface HeroVisualProps {
  onExploreWork: () => void;
  onOpenProject: (projectId: string) => void;
}

export const HeroVisual: React.FC<HeroVisualProps> = ({
  onOpenProject,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isGraded, setIsGraded] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(38);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().catch(() => {});
        setIsPlaying(true);
      }
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100);
    }
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto mt-8 sm:mt-12 px-2 sm:px-4">
      {/* Background Soft Moving Light & Atmosphere */}
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[90%] sm:w-[680px] h-[340px] bg-gradient-to-b from-white/[0.08] via-white/[0.02] to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 -left-12 w-64 h-64 bg-zinc-400/[0.04] rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-12 w-64 h-64 bg-white/[0.04] rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Main Cinematic Visual Area / Editing Workspace Monitor */}
      <div className="relative rounded-3xl sm:rounded-[40px] border border-white/5 bg-gradient-to-tr from-white/5 via-transparent to-white/5 p-1.5 sm:p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-2xl sm:rounded-[30px] bg-neutral-950/90 p-2 sm:p-4 border border-white/10 shadow-2xl overflow-hidden group"
        >
          {/* Top Control Bar (Studio monitor header) */}
          <div className="flex items-center justify-between px-2 sm:px-3 py-1.5 sm:py-2 border-b border-white/10 mb-2 sm:mb-3 text-[11px] text-white/50">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-white/20" />
                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-white/10" />
                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-white/10" />
              </div>
              <span className="hidden md:inline-block font-mono-code text-[11px] text-white/40 ml-2">
                DAVINCI_RESOLVE_TIMELINE_V9.edl
              </span>
            </div>

            {/* Center Info Badge (Hidden on small mobile to prevent wrapping) */}
            <div className="hidden sm:flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span className="text-[10px] font-mono-code tracking-widest text-white/70">
                4K PRORES RAW • 23.976 FPS
              </span>
            </div>

            {/* Color Grading Toggle */}
            <div className="flex items-center gap-2">
              <button
                id="hero-toggle-grading"
                onClick={() => setIsGraded(!isGraded)}
                className={`flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-[11px] transition-all border ${
                  isGraded
                    ? 'bg-white/15 border-white/30 text-white font-medium shadow-sm'
                    : 'bg-transparent border-white/10 text-white/50 hover:text-white'
                }`}
                title="Toggle Log / Graded footage preview"
              >
                <Sliders className="w-3 h-3 text-white/70" />
                <span>{isGraded ? 'Graded' : 'Flat Log'}</span>
              </button>
            </div>
          </div>

          {/* Video Canvas Container */}
          <div className="relative aspect-[16/9] w-full rounded-xl sm:rounded-2xl overflow-hidden bg-black border border-white/10 group/player">
            {/* Real Video / Animated Showcase Preview */}
            <video
              ref={videoRef}
              src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-sky-in-a-sunset-26070-large.mp4"
              poster="https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80"
              loop
              muted={isMuted}
              playsInline
              onTimeUpdate={handleTimeUpdate}
              className={`w-full h-full object-cover transition-all duration-700 ${
                isGraded
                  ? 'contrast-115 brightness-95 saturate-125'
                  : 'contrast-80 brightness-110 saturate-50 sepia-0'
              }`}
            />

            {/* Flat Log Simulation Overlay if Un-graded */}
            {!isGraded && (
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20 px-2.5 sm:px-3 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs font-mono-code text-white/80">
                LOG: S-Log3 (UNGRADED)
              </div>
            )}

            {/* Vignette & Anamorphic Bars */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent pointer-events-none" />

            {/* Liquid Glass Overlay Play/Pause Action */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.button
                id="hero-play-pause-btn"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={togglePlay}
                className="w-13 h-13 sm:w-20 sm:h-20 rounded-full bg-white/10 border border-white/30 text-white flex items-center justify-center shadow-2xl hover:bg-white/20 hover:border-white/50 transition-all backdrop-blur-xl cursor-pointer"
                aria-label={isPlaying ? 'Pause video' : 'Play video'}
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5 sm:w-8 sm:h-8 fill-white" />
                ) : (
                  <Play className="w-5 h-5 sm:w-8 sm:h-8 fill-white translate-x-0.5" />
                )}
              </motion.button>
            </div>

            {/* Quick Overlay Badges in Video */}
            <div className="absolute top-2 sm:top-4 right-2 sm:right-4 flex items-center gap-1.5 sm:gap-2">
              <button
                onClick={() => {
                  if (videoRef.current) {
                    videoRef.current.muted = !isMuted;
                    setIsMuted(!isMuted);
                  }
                }}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/70 backdrop-blur-md border border-white/15 flex items-center justify-center text-white/70 hover:text-white transition-colors cursor-pointer"
                aria-label="Toggle mute"
              >
                {isMuted ? <VolumeX className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> : <Volume2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />}
              </button>
              <button
                onClick={() => onOpenProject('neon-cyber-reel')}
                className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[10px] sm:text-[11px] font-medium text-white hover:bg-white/10 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <span>Specs</span>
                <Maximize2 className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
              </button>
            </div>

            {/* Bottom Timeline Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4 bg-gradient-to-t from-black/95 to-transparent">
              <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-mono-code text-white/70 mb-1 sm:mb-1.5">
                <div className="flex items-center gap-1.5 sm:gap-3">
                  <span className="text-white font-semibold">00:01:24</span>
                  <span className="text-white/30">/</span>
                  <span className="text-white/50">00:03:45</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="hidden sm:inline text-[10px] text-white/40 uppercase tracking-widest">AUDIO VU:</span>
                  <div className="flex items-end gap-0.5 h-2.5 sm:h-3">
                    <span className="w-1 bg-white/70 h-1.5 sm:h-2 animate-pulse" />
                    <span className="w-1 bg-white/90 h-2.5 sm:h-3 animate-pulse" />
                    <span className="w-1 bg-white/80 h-2 animate-pulse" />
                    <span className="w-1 bg-white/50 h-1 animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Scrubber Bar */}
              <div
                className="w-full h-1.5 bg-white/15 rounded-full overflow-hidden cursor-pointer relative"
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const clickX = e.clientX - rect.left;
                  const newPct = Math.max(0, Math.min(100, (clickX / rect.width) * 100));
                  setProgress(newPct);
                  if (videoRef.current && videoRef.current.duration) {
                    videoRef.current.currentTime = (newPct / 100) * videoRef.current.duration;
                  }
                }}
              >
                <div
                  className="h-full bg-white rounded-full transition-all relative"
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,1)]" />
                </div>
              </div>
            </div>
          </div>

          {/* Lower Editing Strip / Cut markers */}
          <div className="mt-2 sm:mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] sm:text-[11px] text-white/50 px-1">
            <div className="flex items-center gap-2 sm:gap-3 truncate">
              <span className="text-white font-medium truncate">Vivek's Showreel</span>
              <span className="hidden sm:inline-block text-white/30">•</span>
              <span className="hidden sm:inline-block text-white/40">120BPM Sync</span>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-white/40">Stereo Master</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 4 FLOATING ARTISTIC FLAIR GLASS BADGES WITH TILTS */}
      
      {/* Badge 1: Service - Video Editing (Top Right, rotate-[-2deg]) */}
      <motion.div
        animate={{
          y: [-4, 5, -4],
        }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="hidden md:flex absolute top-10 -right-6 lg:-right-10 z-20 bg-white/10 backdrop-blur-2xl border border-white/20 p-4 sm:p-5 rounded-3xl shadow-2xl rotate-[-2deg] flex-col text-left hover:rotate-0 transition-transform duration-300 cursor-default"
      >
        <div className="text-xs uppercase tracking-widest text-white/40 mb-1">Service</div>
        <div className="text-base sm:text-lg font-medium text-white">Video Editing</div>
      </motion.div>

      {/* Badge 2: Specialty - Cinematic Stories (Top Left, rotate-[-6deg]) */}
      <motion.div
        animate={{
          y: [5, -4, 5],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.3,
        }}
        className="hidden md:flex absolute top-16 -left-6 lg:-left-10 z-20 bg-white/10 backdrop-blur-2xl border border-white/20 p-4 sm:p-5 rounded-3xl shadow-2xl rotate-[-6deg] flex-col text-left hover:rotate-0 transition-transform duration-300 cursor-default"
      >
        <div className="text-xs uppercase tracking-widest text-white/40 mb-1">Specialty</div>
        <div className="text-base sm:text-lg font-medium text-white">Cinematic Stories</div>
      </motion.div>

      {/* Badge 3: Expertise - Reels & Shorts (Bottom Right, rotate-[4deg]) */}
      <motion.div
        animate={{
          y: [-5, 4, -5],
        }}
        transition={{
          duration: 5.8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.7,
        }}
        className="hidden md:flex absolute -bottom-6 -right-4 lg:-right-8 z-20 bg-white/10 backdrop-blur-2xl border border-white/20 p-4 sm:p-5 rounded-3xl shadow-2xl rotate-[4deg] flex-col text-left hover:rotate-0 transition-transform duration-300 cursor-default"
      >
        <div className="text-xs uppercase tracking-widest text-white/40 mb-1">Expertise</div>
        <div className="text-base sm:text-lg font-medium text-white">Reels & Shorts</div>
      </motion.div>

      {/* Badge 4: Vision - Content Creation (Bottom Left, rotate-[3deg]) */}
      <motion.div
        animate={{
          y: [4, -5, 4],
        }}
        transition={{
          duration: 6.2,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1.1,
        }}
        className="hidden md:flex absolute -bottom-6 -left-4 lg:-left-8 z-20 bg-white/10 backdrop-blur-2xl border border-white/20 p-4 sm:p-5 rounded-3xl shadow-2xl rotate-[3deg] flex-col text-left hover:rotate-0 transition-transform duration-300 cursor-default"
      >
        <div className="text-xs uppercase tracking-widest text-white/40 mb-1">Vision</div>
        <div className="text-base sm:text-lg font-medium text-white">Content Creation</div>
      </motion.div>

      {/* Mobile Grid for Badges (Clean responsive presentation) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mt-4 md:hidden">
        <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-left">
          <div className="text-[9px] uppercase tracking-widest text-white/40">Specialty</div>
          <div className="text-xs sm:text-sm font-medium text-white mt-0.5">Cinematic Stories</div>
        </div>
        <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-left">
          <div className="text-[9px] uppercase tracking-widest text-white/40">Expertise</div>
          <div className="text-xs sm:text-sm font-medium text-white mt-0.5">Reels & Shorts</div>
        </div>
        <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-left">
          <div className="text-[9px] uppercase tracking-widest text-white/40">Service</div>
          <div className="text-xs sm:text-sm font-medium text-white mt-0.5">Video Editing</div>
        </div>
        <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-left">
          <div className="text-[9px] uppercase tracking-widest text-white/40">Vision</div>
          <div className="text-xs sm:text-sm font-medium text-white mt-0.5">Content Creation</div>
        </div>
      </div>
    </div>
  );
};
