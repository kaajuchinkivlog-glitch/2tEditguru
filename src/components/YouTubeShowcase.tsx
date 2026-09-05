import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Youtube,
  Play,
  Flame,
  Clock,
  Eye,
  ExternalLink,
  Sparkles,
  Smartphone,
  CheckCircle2,
  Tv,
  Share2,
} from 'lucide-react';
import { YOUTUBE_VIDEOS, SOCIAL_PROFILES } from '../data/socialAndBlogData';
import { YouTubeVideoItem } from '../types';

interface YouTubeShowcaseProps {
  onVideoSelect?: (video: YouTubeVideoItem) => void;
}

type TabType = 'all' | 'latest' | 'shorts' | 'popular';

export const YouTubeShowcase: React.FC<YouTubeShowcaseProps> = ({ onVideoSelect }) => {
  const [activeTab, setActiveTab] = useState<TabType>('all');
  const [activeVideoModal, setActiveVideoModal] = useState<YouTubeVideoItem | null>(null);

  const filteredVideos = YOUTUBE_VIDEOS.filter((video) => {
    if (activeTab === 'latest') return video.isLatest;
    if (activeTab === 'shorts') return video.isShort;
    if (activeTab === 'popular') return video.isPopular;
    return true;
  });

  const handlePlayVideo = (video: YouTubeVideoItem) => {
    setActiveVideoModal(video);
    if (onVideoSelect) {
      onVideoSelect(video);
    }
  };

  return (
    <section id="youtube" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-red-600/[0.03] blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-500/20 text-red-400 text-xs font-mono uppercase tracking-widest mb-3">
              <Youtube className="w-3.5 h-3.5" />
              <span>OFFICIAL YOUTUBE HUB</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white">
              FROM MY <span className="font-serif italic font-normal text-white">YOUTUBE CHANNEL</span>
            </h2>
            <p className="text-white/60 text-sm sm:text-base mt-2 max-w-xl">
              Cinematic travel journeys, low-light night walks, and high-retention vertical shorts filmed and edited by Vivek.
            </p>
          </div>

          {/* Channel Subscribe / Profile Badge */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl">
              <div className="w-10 h-10 rounded-full bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-400">
                <Youtube className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-xs font-semibold text-white flex items-center gap-1">
                  <span>Nomad Vivek</span>
                  <CheckCircle2 className="w-3 h-3 text-red-400 fill-red-400/20" />
                </div>
                <div className="text-[11px] text-white/40 font-mono">
                  {SOCIAL_PROFILES.youtube.subscribers}
                </div>
              </div>
            </div>

            <a
              id="btn-subscribe-youtube"
              href={SOCIAL_PROFILES.youtube.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-red-600 hover:bg-red-500 text-white font-medium text-xs sm:text-sm tracking-wide transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_28px_rgba(220,38,38,0.5)] group cursor-pointer"
            >
              <Youtube className="w-4 h-4 transition-transform group-hover:scale-110" />
              <span>SUBSCRIBE CHANNEL</span>
              <ExternalLink className="w-3 h-3 opacity-70 group-hover:opacity-100" />
            </a>
          </div>
        </div>

        {/* Tab Filters */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-4 mb-8">
          {[
            { id: 'all', label: 'All Content', icon: Tv },
            { id: 'latest', label: 'Latest Videos', icon: Sparkles },
            { id: 'shorts', label: 'Featured Shorts', icon: Smartphone },
            { id: 'popular', label: 'Popular Videos', icon: Flame },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabType)}
                className={`px-4 sm:px-5 py-2.5 sm:py-2.5 rounded-full text-xs font-medium transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer min-h-[40px] ${
                  isActive
                    ? 'bg-white text-black font-semibold shadow-lg'
                    : 'bg-white/[0.05] border border-white/10 text-white/70 hover:text-white hover:bg-white/[0.08]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-black' : 'text-white/60'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredVideos.map((video, idx) => {
            const isShort = video.isShort;
            return (
              <motion.div
                key={video.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`group relative rounded-3xl bg-white/[0.03] border border-white/10 hover:border-white/25 overflow-hidden transition-all duration-300 flex flex-col justify-between hover:shadow-[0_8px_32px_rgba(0,0,0,0.6)] active:scale-[0.99] ${
                  isShort ? 'sm:row-span-1 border-white/15' : ''
                }`}
              >
                {/* Video Preview / Poster */}
                <div
                  className={`relative w-full overflow-hidden bg-black/60 cursor-pointer ${
                    isShort ? 'aspect-[9/14]' : 'aspect-video'
                  }`}
                  onClick={() => handlePlayVideo(video)}
                >
                  <img
                    src={video.thumbnailUrl}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80';
                    }}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Badge: Shorts or Duration */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    {isShort ? (
                      <span className="px-2.5 py-1 rounded-full bg-red-600/90 backdrop-blur-md text-white text-[10px] font-bold tracking-wider uppercase flex items-center gap-1 shadow-md">
                        <Smartphone className="w-3 h-3" />
                        <span>SHORT</span>
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-md text-white/90 text-[10px] font-mono border border-white/10 flex items-center gap-1">
                        <Clock className="w-2.5 h-2.5 text-white/50" />
                        <span>{video.duration}</span>
                      </span>
                    )}

                    {video.isPopular && (
                      <span className="px-2 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-[10px] font-medium flex items-center gap-1 backdrop-blur-md">
                        <Flame className="w-2.5 h-2.5 fill-amber-400/40" />
                        <span>POPULAR</span>
                      </span>
                    )}
                  </div>

                  {/* Views count */}
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-white/80 text-[10px] font-mono border border-white/10 flex items-center gap-1">
                    <Eye className="w-2.5 h-2.5 text-white/50" />
                    <span>{video.views}</span>
                  </div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-red-600/90 text-white flex items-center justify-center backdrop-blur-sm transition-all duration-300 group-hover:scale-110 shadow-[0_0_24px_rgba(220,38,38,0.6)] group-hover:bg-red-500">
                      <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-white translate-x-0.5" />
                    </div>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[10px] uppercase font-mono tracking-wider text-white/40 mb-1">
                      {video.category}
                    </div>
                    <h3 className="text-base sm:text-lg font-medium text-white leading-snug group-hover:text-white transition-colors line-clamp-2">
                      {video.title}
                    </h3>
                    <p className="text-white/60 text-xs sm:text-sm mt-2 leading-relaxed line-clamp-2">
                      {video.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {video.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded bg-white/[0.04] text-[10px] font-mono text-white/60 border border-white/5"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handlePlayVideo(video)}
                        className="text-xs font-semibold text-white hover:text-white/80 flex items-center gap-1 cursor-pointer"
                      >
                        <span>Play</span>
                        <Play className="w-3 h-3 fill-white" />
                      </button>
                      <a
                        href={video.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-colors cursor-pointer"
                        title="Open on YouTube"
                      >
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Channel Promotion Banner */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-red-950/30 via-white/[0.03] to-white/[0.01] border border-red-500/20 backdrop-blur-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-14 h-14 rounded-2xl bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-400 flex-shrink-0">
              <Youtube className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-medium text-white">
                Looking for Custom Video Editing or Retention Consultation?
              </h4>
              <p className="text-xs sm:text-sm text-white/60 mt-1 max-w-xl">
                Get high-retention pacing, kinetic typography, and Hollywood-level color grading tailored for your YouTube channel.
              </p>
            </div>
          </div>

          <a
            href={SOCIAL_PROFILES.youtube.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto px-6 py-3.5 rounded-2xl bg-white text-black font-semibold text-xs sm:text-sm uppercase tracking-wide hover:bg-white/90 transition-all flex items-center justify-center gap-2 group cursor-pointer whitespace-nowrap shadow-xl"
          >
            <span>VISIT @NOMADVIVEK ON YOUTUBE</span>
            <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>

      {/* Video Modal Lightbox */}
      <AnimatePresence>
        {activeVideoModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl"
            onClick={() => setActiveVideoModal(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-zinc-950 border border-white/20 rounded-3xl overflow-hidden shadow-2xl"
            >
              {/* Modal Top Bar */}
              <div className="px-4 sm:px-5 py-3 sm:py-3.5 bg-white/[0.03] border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2 truncate pr-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500 flex-shrink-0" />
                  <span className="text-xs font-mono text-white/70 truncate">
                    NOW PLAYING • {activeVideoModal.title}
                  </span>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <a
                    href={activeVideoModal.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors text-xs flex items-center gap-1 min-h-[36px]"
                  >
                    <span>YouTube</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <button
                    onClick={() => setActiveVideoModal(null)}
                    aria-label="Close video player"
                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 text-white flex items-center justify-center text-sm cursor-pointer transition-colors"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Video Embed Player */}
              <div className="relative aspect-video w-full bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideoModal.videoId}?autoplay=1&rel=0&modestbranding=1`}
                  title={activeVideoModal.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Video Info Footer */}
              <div className="p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-mono text-white/40 mb-1">
                    {activeVideoModal.category} • {activeVideoModal.views} Views
                  </div>
                  <h4 className="text-base sm:text-lg font-medium text-white">
                    {activeVideoModal.title}
                  </h4>
                </div>

                <a
                  href={SOCIAL_PROFILES.youtube.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-medium text-xs flex items-center gap-2 cursor-pointer whitespace-nowrap"
                >
                  <Youtube className="w-3.5 h-3.5" />
                  <span>Subscribe Channel</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
