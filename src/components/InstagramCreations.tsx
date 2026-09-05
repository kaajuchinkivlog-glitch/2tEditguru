import React from 'react';
import { motion } from 'motion/react';
import {
  Instagram,
  Heart,
  MessageCircle,
  Eye,
  ExternalLink,
  Film,
  Sparkles,
  Camera,
  Layers,
} from 'lucide-react';
import { INSTAGRAM_CREATIONS, SOCIAL_PROFILES } from '../data/socialAndBlogData';
import regeneratedVivekPhoto from '../assets/images/regenerated_image_1788606204663.jpg';

export const InstagramCreations: React.FC = () => {
  return (
    <section id="instagram" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-pink-500/[0.03] blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-mono uppercase tracking-widest mb-3">
              <Instagram className="w-3.5 h-3.5" />
              <span>INSTAGRAM FEED</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white">
              INSTAGRAM <span className="font-serif italic font-normal text-white">CREATIONS</span>
            </h2>
            <p className="text-white/60 text-sm sm:text-base mt-2 max-w-xl">
              Cinematic reels, behind-the-scenes editing workflows, and aesthetic travel moments from Vivek’s official Instagram.
            </p>
          </div>

          {/* Follow Button */}
          <div className="flex items-center gap-3">
            <a
              id="btn-follow-instagram"
              href={SOCIAL_PROFILES.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-h-[44px] gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-pink-600 via-rose-600 to-amber-600 text-white font-medium text-xs sm:text-sm tracking-wide hover:opacity-90 active:scale-95 transition-all shadow-[0_0_24px_rgba(236,72,153,0.3)] group cursor-pointer"
            >
              <Instagram className="w-4 h-4 transition-transform group-hover:scale-110" />
              <span>FOLLOW ON INSTAGRAM</span>
              <ExternalLink className="w-3 h-3 opacity-70 group-hover:opacity-100" />
            </a>
          </div>
        </div>

        {/* Instagram Grid (Reels & Posts) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {INSTAGRAM_CREATIONS.map((item, idx) => {
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative rounded-3xl bg-white/[0.03] border border-white/10 hover:border-pink-500/30 overflow-hidden transition-all duration-300 flex flex-col justify-between hover:shadow-[0_12px_36px_rgba(0,0,0,0.7)]"
              >
                {/* Visual Media Poster */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-black/60">
                  <img
                    src={item.thumbnailUrl}
                    alt={item.caption}
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.src = 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=800&q=80';
                    }}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-90 group-hover:brightness-100"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20" />

                  {/* Post Type Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-white text-[10px] font-mono border border-white/15 flex items-center gap-1">
                      {item.type === 'reel' ? (
                        <>
                          <Film className="w-3 h-3 text-pink-400" />
                          <span>REEL</span>
                        </>
                      ) : (
                        <>
                          <Camera className="w-3 h-3 text-amber-400" />
                          <span>POST</span>
                        </>
                      )}
                    </span>
                  </div>

                  {/* Handle & Views Top Right */}
                  <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-black/70 backdrop-blur-md text-white/80 text-[10px] font-mono border border-white/15 flex items-center gap-1">
                    <Eye className="w-3 h-3 text-white/60" />
                    <span>{item.views}</span>
                  </div>

                  {/* Caption Overlay */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-white text-xs sm:text-sm leading-relaxed line-clamp-3 font-normal drop-shadow">
                      {item.caption}
                    </p>
                  </div>
                </div>

                {/* Engagement Stats Bar */}
                <div className="p-4 bg-white/[0.02] border-t border-white/10 flex items-center justify-between text-white/70 text-xs">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1 text-pink-400 font-mono">
                      <Heart className="w-3.5 h-3.5 fill-pink-500/20" />
                      <span>{item.likes}</span>
                    </span>
                    <span className="flex items-center gap-1 text-white/60 font-mono">
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>{item.comments}</span>
                    </span>
                  </div>

                  <a
                    href={item.postUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-pink-500/20 text-white/70 hover:text-pink-400 transition-colors flex items-center gap-1 text-[11px] font-mono"
                  >
                    <span>View</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Creator Profile Badge Bottom */}
        <div className="mt-10 p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-pink-500 to-amber-500 p-0.5 overflow-hidden flex-shrink-0">
              <img
                src={regeneratedVivekPhoto}
                alt="Vivek on Instagram"
                loading="lazy"
                decoding="async"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="text-left">
              <div className="text-sm font-semibold text-white">@realnomadvivek</div>
              <div className="text-xs text-white/50">{SOCIAL_PROFILES.instagram.bio}</div>
            </div>
          </div>

          <a
            href={SOCIAL_PROFILES.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[40px] px-3 py-2 text-xs font-mono text-pink-400 hover:text-pink-300 active:scale-95 flex items-center gap-1.5 cursor-pointer rounded-lg hover:bg-white/5 transition-all"
          >
            <span>Open in Instagram App</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
