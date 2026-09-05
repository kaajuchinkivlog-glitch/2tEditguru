import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Play,
  Pause,
  Sliders,
  Volume2,
  VolumeX,
  ExternalLink,
  Link2,
  Check,
  Edit3,
  ArrowRight,
  Youtube,
  Tv,
} from 'lucide-react';
import { ProjectItem } from '../types';
import { extractYouTubeId } from '../utils/youtube';

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
  const [customVideoUrl, setCustomVideoUrl] = useState<string>('');
  const [isEditingUrl, setIsEditingUrl] = useState(false);
  const [urlInput, setUrlInput] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Escape key handler & reset custom URL whenever project changes
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    if (project) {
      setCustomVideoUrl('');
      setIsEditingUrl(false);
      setUrlInput(project.videoUrl || project.youtubeUrl || '');
    }
  }, [project]);

  if (!project) return null;

  const activeVideoUrl = customVideoUrl || project.videoUrl || project.youtubeUrl || 'https://youtu.be/Qi5dJu9OZJU?si=yApuJYQKx-TSnpjs';
  const youtubeId = extractYouTubeId(activeVideoUrl);

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

  const handleApplyUrl = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (urlInput.trim()) {
      setCustomVideoUrl(urlInput.trim());
      setIsEditingUrl(false);
    }
  };

  const handleCopyLink = () => {
    const link = youtubeId ? `https://youtu.be/${youtubeId}` : activeVideoUrl;
    navigator.clipboard?.writeText(link);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-black/85 backdrop-blur-2xl overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl max-h-[94vh] overflow-y-auto bg-[#0a0a0c] border border-white/15 rounded-2xl sm:rounded-3xl p-3.5 sm:p-7 shadow-2xl"
        >
          {/* Header Bar with Category, Client, & YouTube Live Badge */}
          <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-white/10 mb-3 sm:mb-5">
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
              <span className="px-2.5 sm:px-3 py-1 rounded-full text-[9px] sm:text-[10px] font-mono uppercase bg-white/10 text-white border border-white/15">
                {project.category}
              </span>
              
              {youtubeId && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] sm:text-[10px] font-mono uppercase bg-red-600/20 text-red-300 border border-red-500/30">
                  <Youtube className="w-3 h-3 text-red-400" />
                  <span>YouTube 4K</span>
                </span>
              )}

              {project.client && (
                <span className="text-[11px] sm:text-xs text-white/50 hidden sm:inline font-mono">
                  Client: <strong className="text-white font-medium">{project.client}</strong>
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              {youtubeId && (
                <a
                  href={`https://youtu.be/${youtubeId}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white/80 hover:text-white text-[10px] sm:text-xs font-mono flex items-center gap-1 transition-all min-h-[36px]"
                  title="Watch directly on YouTube"
                >
                  <ExternalLink className="w-3 h-3" />
                  <span className="hidden sm:inline">Open on YouTube</span>
                </a>
              )}

              <button
                id="btn-edit-video-url"
                onClick={() => setIsEditingUrl(!isEditingUrl)}
                className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white/70 hover:text-white text-[10px] sm:text-xs font-mono flex items-center gap-1 transition-all cursor-pointer min-h-[36px]"
                title="Update video or paste new YouTube link"
              >
                <Edit3 className="w-3 h-3" />
                <span className="hidden sm:inline">Change Link</span>
              </button>

              <button
                id="close-project-modal-btn"
                onClick={onClose}
                aria-label="Close project preview"
                className="w-9 h-9 rounded-full bg-white/10 border border-white/10 hover:border-white/30 active:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-colors cursor-pointer"
                title="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Optional Inline URL Editor Bar */}
          <AnimatePresence>
            {isEditingUrl && (
              <motion.form
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                onSubmit={handleApplyUrl}
                className="mb-4 p-3 rounded-2xl bg-white/[0.04] border border-white/15 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 overflow-hidden"
              >
                <div className="flex-1 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/60 border border-white/10">
                  <Link2 className="w-3.5 h-3.5 text-white/40 flex-shrink-0" />
                  <input
                    id="input-custom-youtube-url"
                    type="text"
                    value={urlInput}
                    onChange={(e) => setUrlInput(e.target.value)}
                    placeholder="Paste YouTube link (e.g. https://youtu.be/Qi5dJu9OZJU)"
                    className="w-full bg-transparent text-xs text-white placeholder-white/40 focus:outline-none font-mono"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-white/90 transition-all cursor-pointer"
                  >
                    Apply Video
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setUrlInput('https://youtu.be/Qi5dJu9OZJU?si=yApuJYQKx-TSnpjs');
                      setCustomVideoUrl('https://youtu.be/Qi5dJu9OZJU?si=yApuJYQKx-TSnpjs');
                      setIsEditingUrl(false);
                    }}
                    className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-mono transition-all cursor-pointer"
                    title="Reset to Vivek's YouTube video"
                  >
                    Default Video
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>

          {/* Main Video Presentation Screen */}
          <div className="relative aspect-video w-full rounded-xl sm:rounded-2xl overflow-hidden bg-black border border-white/15 shadow-2xl group">
            {youtubeId ? (
              /* YouTube Responsive Iframe Player */
              <div className="w-full h-full relative">
                <iframe
                  id="project-youtube-player"
                  src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                  title={project.title}
                  className="w-full h-full border-0 absolute inset-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            ) : activeVideoUrl ? (
              /* Native HTML5 Video Element fallback for direct media files */
              <div className="w-full h-full relative">
                <video
                  ref={videoRef}
                  src={activeVideoUrl}
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

                {/* Video Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

                {/* Ungraded Tag if active */}
                {!showGraded && (
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-20 px-2.5 py-0.5 sm:py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs font-mono text-zinc-300">
                    RAW UNGRADED LOG
                  </div>
                )}

                {/* Native Control Bar Overlay */}
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between z-20">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <button
                      onClick={togglePlay}
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center hover:scale-105 transition-all shadow-md cursor-pointer"
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
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center hover:scale-105 transition-all shadow-md cursor-pointer"
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
                    className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-mono transition-all border cursor-pointer ${
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
            ) : (
              <img
                src={project.thumbnailUrl}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            )}
          </div>

          {/* Quick Player Bar */}
          <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-white/50 px-1">
            <div className="flex items-center gap-2">
              <span className="text-white font-medium">Link:</span>
              <span className="text-white/70 truncate max-w-[200px] sm:max-w-md">
                {activeVideoUrl}
              </span>
            </div>

            <button
              onClick={handleCopyLink}
              className="flex items-center gap-1 text-white/60 hover:text-white transition-colors cursor-pointer"
              title="Copy video link"
            >
              {copiedLink ? (
                <>
                  <Check className="w-3 h-3 text-emerald-400" />
                  <span className="text-emerald-400 text-[10px]">Copied</span>
                </>
              ) : (
                <>
                  <Link2 className="w-3 h-3" />
                  <span className="text-[10px]">Copy URL</span>
                </>
              )}
            </button>
          </div>

          {/* Project Details */}
          <div className="mt-5 sm:mt-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h2 className="font-display font-bold text-xl sm:text-3xl text-white tracking-tight">
                {project.title}
              </h2>
              {project.duration && (
                <span className="text-xs font-mono text-white/50">
                  DURATION: {project.duration}
                </span>
              )}
            </div>

            <p className="mt-2.5 sm:mt-3 text-xs sm:text-base text-white/70 font-light leading-relaxed">
              {project.fullDescription}
            </p>

            {/* Technical Specifications Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mt-4 sm:mt-6 p-3.5 sm:p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
              <div>
                <span className="text-[9px] sm:text-[10px] font-mono uppercase text-white/40 block">
                  Resolution
                </span>
                <span className="text-xs sm:text-sm font-semibold text-white">
                  {project.resolution || '4K UHD (3840x2160)'}
                </span>
              </div>
              <div>
                <span className="text-[9px] sm:text-[10px] font-mono uppercase text-white/40 block">
                  Frame Rate
                </span>
                <span className="text-xs sm:text-sm font-semibold text-white">
                  {project.fps || '23.976 FPS'}
                </span>
              </div>
              <div>
                <span className="text-[9px] sm:text-[10px] font-mono uppercase text-white/40 block">
                  Stream Source
                </span>
                <span className="text-xs sm:text-sm font-semibold text-white">
                  {youtubeId ? 'YouTube 4K' : 'ProRes Master'}
                </span>
              </div>
              <div>
                <span className="text-[9px] sm:text-[10px] font-mono uppercase text-white/40 block">
                  Primary Tool
                </span>
                <span className="text-xs sm:text-sm font-semibold text-white">
                  {project.software[0] || 'Premiere Pro'}
                </span>
              </div>
            </div>

            {/* Metrics & Software tags */}
            <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-white/[0.08]">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                <span className="text-[11px] sm:text-xs text-white/40 font-mono">Software:</span>
                {project.software.map((sw) => (
                  <span
                    key={sw}
                    className="text-[11px] sm:text-xs font-mono text-white/80 bg-white/[0.05] border border-white/10 px-2.5 py-0.5 rounded-full"
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
                className="w-full sm:w-auto min-h-[44px] px-6 py-3 rounded-full bg-white text-black font-bold text-xs sm:text-sm tracking-widest uppercase hover:bg-white/90 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-xl cursor-pointer"
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
