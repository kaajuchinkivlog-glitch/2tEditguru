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
  Youtube,
  ExternalLink,
  Film,
} from 'lucide-react';

interface HeroVisualProps {
  onExploreWork: () => void;
  onOpenProject: (projectId: string) => void;
}

const CHANNEL_FEATURED_VIDEOS = [
  {
    id: 'india-to-thailand',
    videoId: 'Qi5dJu9OZJU',
    title: 'India to Thailand Trip',
    tag: 'Travel Film • 4K',
    poster: 'https://img.youtube.com/vi/Qi5dJu9OZJU/hqdefault.jpg',
    url: 'https://youtu.be/Qi5dJu9OZJU?si=yApuJYQKx-TSnpjs',
    duration: '07:18',
  },
  {
    id: 'pattaya-night-walking',
    videoId: 'X2tOsmWcs4A',
    title: 'Pattaya at Night',
    tag: 'Neon Low-Light • 60fps',
    poster: 'https://img.youtube.com/vi/X2tOsmWcs4A/hqdefault.jpg',
    url: 'https://youtu.be/X2tOsmWcs4A',
    duration: '04:32',
  },
  {
    id: 'tungnath-temple-trek',
    videoId: 'il64UocoL_Y',
    title: 'Tungnath Temple Darshan',
    tag: 'Himalayas • 24fps',
    poster: 'https://img.youtube.com/vi/il64UocoL_Y/hqdefault.jpg',
    url: 'https://youtu.be/il64UocoL_Y',
    duration: '05:40',
  },
  {
    id: 'village-train-track',
    videoId: '1YC7WEZBJsc',
    title: 'Village Train Track',
    tag: 'Rural Storytelling',
    poster: 'https://img.youtube.com/vi/1YC7WEZBJsc/hqdefault.jpg',
    url: 'https://youtu.be/1YC7WEZBJsc',
    duration: '06:12',
  },
];

export const HeroVisual: React.FC<HeroVisualProps> = ({
  onOpenProject,
}) => {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isGraded, setIsGraded] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(38);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const activeVideo = CHANNEL_FEATURED_VIDEOS[activeVideoIndex];

  const handleSelectVideo = (index: number) => {
    setActiveVideoIndex(index);
    setIsPlaying(true);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
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

            {/* Center Info Badge */}
            <div className="hidden sm:flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-0.5">
              <Youtube className="w-3 h-3 text-red-400" />
              <span className="text-[10px] font-mono tracking-widest text-white/80">
                {activeVideo.tag.toUpperCase()}
              </span>
            </div>

            {/* Color Grading Toggle */}
            <div className="flex items-center gap-2">
              <a
                href={activeVideo.url}
                target="_blank"
                rel="noreferrer"
                className="hidden lg:flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] text-white/60 hover:text-white bg-white/5 border border-white/10 transition-colors"
                title="Watch on YouTube"
              >
                <span>YouTube</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>

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
            {isPlaying ? (
              /* YouTube Embedded Player */
              <div className="w-full h-full relative">
                <iframe
                  key={activeVideo.videoId}
                  src={`https://www.youtube-nocookie.com/embed/${activeVideo.videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                  title={activeVideo.title}
                  className="w-full h-full border-0 absolute inset-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
                <button
                  onClick={() => setIsPlaying(false)}
                  className="absolute top-3 left-3 z-30 px-2.5 py-1 rounded-full bg-black/85 backdrop-blur-md border border-white/20 text-[10px] font-mono text-white hover:bg-black flex items-center gap-1.5 transition-colors cursor-pointer shadow-lg"
                  title="Close YouTube stream"
                >
                  <Pause className="w-3 h-3" />
                  <span>Pause & Close</span>
                </button>
              </div>
            ) : (
              <>
                {/* Real Video / Animated Showcase Preview */}
                <video
                  ref={videoRef}
                  src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-sky-in-a-sunset-26070-large.mp4"
                  poster={activeVideo.poster}
                  preload="none"
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
                    className="w-13 h-13 sm:w-20 sm:h-20 rounded-full bg-white/10 border border-white/30 text-white flex items-center justify-center shadow-2xl hover:bg-white/20 hover:border-white/50 transition-all backdrop-blur-xl cursor-pointer group/btn"
                    aria-label="Play YouTube showreel"
                  >
                    <Play className="w-5 h-5 sm:w-8 sm:h-8 fill-white translate-x-0.5 group-hover/btn:scale-110 transition-transform" />
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
                    onClick={() => onOpenProject(activeVideo.id)}
                    className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[10px] sm:text-[11px] font-medium text-white hover:bg-white/10 transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>Specs</span>
                    <Maximize2 className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                  </button>
                </div>
              </>
            )}

            {/* Bottom Timeline Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4 bg-gradient-to-t from-black/95 to-transparent">
              <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-mono-code text-white/70 mb-1 sm:mb-1.5">
                <div className="flex items-center gap-1.5 sm:gap-3">
                  <span className="text-white font-semibold">{activeVideo.title}</span>
                  <span className="text-white/30">•</span>
                  <span className="text-white/50">{activeVideo.duration}</span>
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

              {/* Scrubber Bar with touch-friendly hit area */}
              <div
                className="w-full py-2 -my-1 cursor-pointer touch-action-none"
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
                <div className="w-full h-1.5 bg-white/15 rounded-full overflow-hidden relative">
                  <div
                    className="h-full bg-white rounded-full transition-all relative"
                    style={{ width: `${progress}%` }}
                  >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,1)]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lower Editing Strip & Video Switcher */}
          <div className="mt-2.5 sm:mt-3 pt-2.5 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[10px] sm:text-[11px] text-white/50 px-1">
            <div className="flex items-center gap-1 overflow-x-auto no-scrollbar w-full sm:w-auto py-0.5">
              <span className="text-white/40 text-[10px] font-mono mr-1 hidden md:inline">SELECT:</span>
              {CHANNEL_FEATURED_VIDEOS.map((vid, idx) => (
                <button
                  key={vid.id}
                  onClick={() => handleSelectVideo(idx)}
                  className={`px-2.5 py-1 rounded-lg text-[10px] font-mono transition-all whitespace-nowrap flex items-center gap-1 cursor-pointer ${
                    activeVideoIndex === idx
                      ? 'bg-white/20 text-white font-semibold border border-white/30'
                      : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10 border border-white/10'
                  }`}
                >
                  <Film className="w-2.5 h-2.5 opacity-70" />
                  <span>{vid.title}</span>
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 flex-shrink-0 self-end sm:self-auto">
              <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-emerald-400/90 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>@nomadvivek Official Master</span>
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 4 FLOATING LIQUID GLASS CARDS */}
      
      {/* Card 1: Video Editing (Top Right) */}
      <motion.div
        animate={{
          y: [-4, 5, -4],
        }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="hidden lg:flex absolute top-8 -right-4 xl:-right-10 z-20 bg-white/10 backdrop-blur-2xl border border-white/20 p-4 sm:p-5 rounded-3xl shadow-2xl rotate-[-2deg] flex-col text-left hover:rotate-0 transition-transform duration-300 cursor-default"
      >
        <div className="text-[10px] uppercase tracking-widest text-white/40 mb-1 font-mono">Service Suite</div>
        <div className="text-base sm:text-lg font-medium text-white">Video Editing</div>
      </motion.div>

      {/* Card 2: Creative Storytelling (Top Left) */}
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
        className="hidden lg:flex absolute top-12 -left-4 xl:-left-10 z-20 bg-white/10 backdrop-blur-2xl border border-white/20 p-4 sm:p-5 rounded-3xl shadow-2xl rotate-[-5deg] flex-col text-left hover:rotate-0 transition-transform duration-300 cursor-default"
      >
        <div className="text-[10px] uppercase tracking-widest text-white/40 mb-1 font-mono">Cinematic Vision</div>
        <div className="text-base sm:text-lg font-medium text-white">Creative Storytelling</div>
      </motion.div>

      {/* Card 3: Reels & Shorts (Bottom Right) */}
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
        className="hidden lg:flex absolute -bottom-6 -right-3 xl:-right-8 z-20 bg-white/10 backdrop-blur-2xl border border-white/20 p-4 sm:p-5 rounded-3xl shadow-2xl rotate-[3deg] flex-col text-left hover:rotate-0 transition-transform duration-300 cursor-default"
      >
        <div className="text-[10px] uppercase tracking-widest text-white/40 mb-1 font-mono">Viral Velocity</div>
        <div className="text-base sm:text-lg font-medium text-white">Reels & Shorts</div>
      </motion.div>

      {/* Card 4: YouTube Content (Bottom Left) */}
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
        className="hidden lg:flex absolute -bottom-6 -left-3 xl:-left-8 z-20 bg-white/10 backdrop-blur-2xl border border-white/20 p-4 sm:p-5 rounded-3xl shadow-2xl rotate-[-3deg] flex-col text-left hover:rotate-0 transition-transform duration-300 cursor-default"
      >
        <div className="text-[10px] uppercase tracking-widest text-white/40 mb-1 font-mono">Creator Hub</div>
        <div className="text-base sm:text-lg font-medium text-white">YouTube Content</div>
      </motion.div>

      {/* Mobile & Tablet Grid for Cards (Clean responsive presentation without clipping) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mt-4 lg:hidden">
        <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-left">
          <div className="text-[9px] uppercase tracking-widest text-white/40">Service</div>
          <div className="text-xs sm:text-sm font-medium text-white mt-0.5">Video Editing</div>
        </div>
        <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-left">
          <div className="text-[9px] uppercase tracking-widest text-white/40">Viral</div>
          <div className="text-xs sm:text-sm font-medium text-white mt-0.5">Reels & Shorts</div>
        </div>
        <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-left">
          <div className="text-[9px] uppercase tracking-widest text-white/40">Creator Hub</div>
          <div className="text-xs sm:text-sm font-medium text-white mt-0.5">YouTube Content</div>
        </div>
        <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-left">
          <div className="text-[9px] uppercase tracking-widest text-white/40">Vision</div>
          <div className="text-xs sm:text-sm font-medium text-white mt-0.5">Creative Storytelling</div>
        </div>
      </div>
    </div>
  );
};
