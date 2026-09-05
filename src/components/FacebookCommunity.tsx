import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Facebook,
  Share2,
  Users,
  ExternalLink,
  ThumbsUp,
  MessageSquare,
  Sparkles,
  Check,
} from 'lucide-react';
import { FACEBOOK_UPDATES, SOCIAL_PROFILES } from '../data/socialAndBlogData';

export const FacebookCommunity: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleShareOnFacebook = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank', 'width=600,height=400');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="facebook" className="relative py-16 sm:py-20 overflow-hidden">
      {/* Soft blue glow for Facebook section */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[350px] bg-blue-600/[0.03] blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-2xl relative overflow-hidden">
          {/* Subtle top border line */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Profile Info & Value */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-widest mb-3">
                <Facebook className="w-3.5 h-3.5" />
                <span>COMMUNITY & UPDATES</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-white tracking-tight">
                CONNECT ON <span className="font-serif italic font-normal text-white">FACEBOOK</span>
              </h2>

              <p className="text-white/65 text-sm sm:text-base mt-3 leading-relaxed max-w-xl">
                Join Vivek's creative network of filmmakers, video editors, and travel creators. Stay updated with project premieres, editing tutorials, and community discussions.
              </p>

              {/* Action Buttons */}
              <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3">
                <a
                  id="btn-follow-facebook"
                  href={SOCIAL_PROFILES.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto min-h-[44px] px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 active:scale-95 text-white font-medium text-xs sm:text-sm tracking-wide transition-all shadow-[0_0_24px_rgba(37,99,235,0.3)] flex items-center justify-center gap-2 cursor-pointer group"
                >
                  <Facebook className="w-4 h-4 transition-transform group-hover:scale-110" />
                  <span>FOLLOW VIVEK ON FACEBOOK</span>
                  <ExternalLink className="w-3 h-3 opacity-70 group-hover:opacity-100" />
                </a>

                <button
                  id="btn-share-facebook"
                  onClick={handleShareOnFacebook}
                  className="min-h-[44px] px-5 py-3 rounded-2xl bg-white/5 hover:bg-white/10 active:scale-95 border border-white/10 text-white font-medium text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Share2 className="w-4 h-4 text-blue-400" />
                  <span>SHARE ON FACEBOOK</span>
                </button>

                <button
                  onClick={handleCopyLink}
                  className="min-h-[44px] px-4 py-3 rounded-2xl bg-white/[0.03] hover:bg-white/5 active:scale-95 border border-white/5 text-white/70 hover:text-white text-xs font-mono transition-all flex items-center gap-1.5 cursor-pointer"
                  title="Copy link to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-300">Copied!</span>
                    </>
                  ) : (
                    <span>Copy Page Link</span>
                  )}
                </button>
              </div>
            </div>

            {/* Right Column: Recent Community Highlights */}
            <div className="lg:col-span-5 space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-white/40 mb-2 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-blue-400" />
                <span>Recent Community Posts</span>
              </div>

              {FACEBOOK_UPDATES.map((update) => (
                <div
                  key={update.id}
                  className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-blue-500/30 transition-all text-left"
                >
                  <div className="flex items-center justify-between text-[11px] text-white/40 font-mono mb-2">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      <span>{update.date}</span>
                    </span>
                    <a
                      href={update.postUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 flex items-center gap-1"
                    >
                      <span>View</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>

                  <p className="text-white/80 text-xs sm:text-sm leading-relaxed line-clamp-2">
                    {update.content}
                  </p>

                  <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center gap-4 text-[11px] font-mono text-white/50">
                    <span className="flex items-center gap-1">
                      <ThumbsUp className="w-3 h-3 text-blue-400" />
                      <span>{update.likes}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageSquare className="w-3 h-3 text-white/40" />
                      <span>{update.comments}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Share2 className="w-3 h-3 text-white/40" />
                      <span>{update.shares}</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
