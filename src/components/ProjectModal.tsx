import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Play,
  Pause,
  Sliders,
  Volume2,
  VolumeX,
  Clock,
  Tv,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onInquireSimilar: (projectName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onInquireSimilar,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [showGraded, setShowGraded] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  if (!project) return null;

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().catch(() => {});
        setIsPlaying(true);
      }
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 bg-black/85 backdrop-blur-2xl overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[94vh] overflow-y-auto bg-neutral-950/95 backdrop-blur-2xl border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-2xl"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-white/10 mb-4 sm:mb-5">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="px-2.5 sm:px-3 py-1 rounded-full text-[9px] sm:text-[10px] font-mono-code uppercase bg-white/10 text-white border border-white/15">
                {project.category}
              </span>
              {project.client && (
                <span className="text-[11px] sm:text-xs text-white/50 hidden sm:inline">
                  Client: <strong className="text-white font-medium">{project.client}</strong>
                </span>
              )}
            </div>

            <button
              id="close-project-modal-btn"
              onClick={onClose}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/5 border border-white/10 hover:border-white/30 flex items-center justify-center text-white/50 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Main Video Presentation */}
          <div className="relative aspect-video w-full rounded-xl sm:rounded-2xl overflow-hidden bg-black border border-white/15 shadow-2xl group">
            {project.videoUrl ? (
              <video
                ref={videoRef}
                src={project.videoUrl}
                poster={project.thumbnailUrl}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className={`w-full h-full object-cover transition-all duration-700 ${
                  showGraded
                    ? 'contrast-115 brightness-95 saturate-125'
                    : 'contrast-85 brightness-110 saturate-50'
                }`}
              />
            ) : (
              <img
                src={project.thumbnailUrl}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            )}

            {/* Video Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

            {/* Ungraded Tag if active */}
            {!showGraded && (
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-20 px-2.5 py-0.5 sm:py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs font-mono-code text-zinc-300">
                RAW UNGRADED LOG
              </div>
            )}

            {/* Control Bar Overlay */}
            <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between z-20">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <button
                  onClick={togglePlay}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full liquid-glass border border-white/30 text-white flex items-center justify-center hover:scale-105 transition-all shadow-md"
                >
                  {isPlaying ? (
                    <Pause className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white" />
                  ) : (
                    <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white translate-x-0.5" />
                  )}
                </button>

                <button
                  onClick={() => {
                    if (videoRef.current) {
                      videoRef.current.muted = !isMuted;
                      setIsMuted(!isMuted);
                    }
                  }}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full liquid-glass border border-white/30 text-white flex items-center justify-center hover:scale-105 transition-all shadow-md"
                >
                  {isMuted ? (
                    <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  ) : (
                    <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  )}
                </button>
              </div>

              {/* Color Grade Toggle */}
              <button
                onClick={() => setShowGraded(!showGraded)}
                className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-mono-code transition-all border ${
                  showGraded
                    ? 'bg-white/20 border-white/40 text-white font-medium shadow-md'
                    : 'bg-black/60 border-white/20 text-zinc-400 hover:text-white'
                }`}
              >
                <Sliders className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span>{showGraded ? 'Graded' : 'Ungraded'}</span>
              </button>
            </div>
          </div>

          {/* Project Details */}
          <div className="mt-4 sm:mt-6">
            <h2 className="font-display font-extrabold text-xl sm:text-3xl text-white">
              {project.title}
            </h2>

            <p className="mt-2 sm:mt-3 text-xs sm:text-base text-zinc-300 font-light leading-relaxed">
              {project.fullDescription}
            </p>

            {/* Technical Specifications Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mt-4 sm:mt-6 p-3 sm:p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
              <div>
                <span className="text-[9px] sm:text-[10px] font-mono-code uppercase text-zinc-500 block">
                  Resolution
                </span>
                <span className="text-xs sm:text-sm font-semibold text-white">
                  {project.resolution || '4K UHD (3840x2160)'}
                </span>
              </div>
              <div>
                <span className="text-[9px] sm:text-[10px] font-mono-code uppercase text-zinc-500 block">
                  Frame Rate
                </span>
                <span className="text-xs sm:text-sm font-semibold text-white">
                  {project.fps || '23.976 FPS'}
                </span>
              </div>
              <div>
                <span className="text-[9px] sm:text-[10px] font-mono-code uppercase text-zinc-500 block">
                  Duration
                </span>
                <span className="text-xs sm:text-sm font-semibold text-white">
                  {project.duration || '01:45'}
                </span>
              </div>
              <div>
                <span className="text-[9px] sm:text-[10px] font-mono-code uppercase text-zinc-500 block">
                  Primary Tool
                </span>
                <span className="text-xs sm:text-sm font-semibold text-white">
                  {project.software[0] || 'DaVinci Resolve'}
                </span>
              </div>
            </div>

            {/* Metrics & Software tags */}
            <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-white/[0.08]">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                <span className="text-[11px] sm:text-xs text-zinc-400 font-mono-code">Pipeline:</span>
                {project.software.map((sw) => (
                  <span
                    key={sw}
                    className="text-[11px] sm:text-xs font-mono-code text-zinc-300 bg-white/[0.05] border border-white/10 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full"
                  >
                    {sw}
                  </span>
                ))}
              </div>

              <button
                id="modal-inquire-similar-btn"
                onClick={() => {
                  onClose();
                  onInquireSimilar(project.title);
                }}
                className="w-full sm:w-auto px-5 sm:px-6 py-3 rounded-full bg-white text-black font-bold text-xs sm:text-sm tracking-widest uppercase hover:bg-white/90 transition-all flex items-center justify-center gap-2 shadow-xl cursor-pointer"
              >
                <span>Inquire About Similar Edit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
