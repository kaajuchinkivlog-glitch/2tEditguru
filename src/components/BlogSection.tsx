import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  Tag,
  User,
  Share2,
  Check,
  ChevronRight,
  Filter,
} from 'lucide-react';
import { BLOG_POSTS } from '../data/socialAndBlogData';
import { BlogPostItem, BlogCategory } from '../types';

export const BlogSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeArticle, setActiveArticle] = useState<BlogPostItem | null>(null);
  const [copied, setCopied] = useState(false);

  // Escape key handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveArticle(null);
      }
    };
    if (activeArticle) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeArticle]);

  const categories: (string)[] = [
    'All',
    'Video Editing Tips',
    'YouTube Growth Tips',
    'Behind The Scenes',
    'Editing Tutorials',
    'Creator Journey',
    'Video Trends',
  ];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    if (selectedCategory === 'All') return true;
    return post.category === selectedCategory;
  });

  const handleShareArticle = (post: BlogPostItem) => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="blog" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Ambient background lighting */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[350px] bg-white/[0.02] blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-mono uppercase tracking-widest mb-3">
              <BookOpen className="w-3.5 h-3.5 text-white/60" />
              <span>CREATOR INSIGHTS & TUTORIALS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white">
              THE EDITING <span className="font-serif italic font-normal text-white">JOURNAL</span>
            </h2>
            <p className="text-white/60 text-sm sm:text-base mt-2 max-w-xl">
              Practical guides on retention editing, YouTube growth algorithms, DaVinci Resolve color grading, and video pacing.
            </p>
          </div>
        </div>

        {/* Categories Bar */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-4 mb-10">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-white text-black font-semibold shadow-lg'
                    : 'bg-white/[0.04] border border-white/10 text-white/60 hover:text-white hover:bg-white/[0.08]'
                }`}
              >
                <span>{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post, idx) => (
            <motion.article
              key={post.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group rounded-3xl bg-white/[0.03] border border-white/10 hover:border-white/25 overflow-hidden transition-all duration-300 flex flex-col justify-between hover:shadow-[0_12px_36px_rgba(0,0,0,0.6)]"
            >
              <div>
                {/* Cover Image */}
                <div
                  className="relative aspect-video w-full overflow-hidden bg-black/60 cursor-pointer"
                  onClick={() => setActiveArticle(post)}
                >
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.src = 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80';
                    }}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-white text-[11px] font-mono border border-white/15">
                      {post.category}
                    </span>
                  </div>

                  {/* Read Time */}
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-white/80 text-[10px] font-mono border border-white/10 flex items-center gap-1">
                    <Clock className="w-2.5 h-2.5 text-white/50" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-2 text-[11px] font-mono text-white/40 mb-2">
                    <Calendar className="w-3 h-3" />
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>By {post.author}</span>
                  </div>

                  <h3
                    onClick={() => setActiveArticle(post)}
                    className="text-lg font-medium text-white group-hover:text-white leading-snug cursor-pointer transition-colors"
                  >
                    {post.title}
                  </h3>

                  <p className="text-white/60 text-xs sm:text-sm mt-3 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-white/5 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.slice(0, 2).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-white/[0.04] text-[10px] font-mono text-white/50 border border-white/5"
                    >
                      #{t}
                    </span>
                  ))}
                </div>

                <button
                  id={`btn-read-article-${post.id}`}
                  onClick={() => setActiveArticle(post)}
                  className="text-xs font-semibold text-white group-hover:text-white flex items-center gap-1 cursor-pointer transition-colors min-h-[36px]"
                >
                  <span>Read More</span>
                  <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Article Reader Modal */}
      <AnimatePresence>
        {activeArticle && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl overflow-y-auto"
            onClick={() => setActiveArticle(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl my-8 bg-zinc-950 border border-white/20 rounded-3xl overflow-hidden shadow-2xl text-left"
            >
              {/* Header Image */}
              <div className="relative aspect-video w-full bg-black">
                <img
                  src={activeArticle.coverImage}
                  alt={activeArticle.title}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.src = 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80';
                  }}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-black/30" />

                <button
                  onClick={() => setActiveArticle(null)}
                  aria-label="Close article"
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white flex items-center justify-center text-sm hover:bg-white/20 active:bg-white/30 transition-all cursor-pointer"
                >
                  ✕
                </button>

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-mono mb-2">
                    {activeArticle.category}
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-light text-white leading-tight">
                    {activeArticle.title}
                  </h1>
                </div>
              </div>

              {/* Author & Meta Row */}
              <div className="px-6 py-4 border-b border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-white/50 bg-white/[0.02]">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5 text-white/80">
                    <User className="w-3.5 h-3.5 text-white/60" />
                    <span>{activeArticle.author}</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{activeArticle.date}</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{activeArticle.readTime}</span>
                  </span>
                </div>

                <button
                  onClick={() => handleShareArticle(activeArticle)}
                  className="flex items-center gap-1.5 text-white/70 hover:text-white transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Link Copied</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-3.5 h-3.5" />
                      <span>Share Article</span>
                    </>
                  )}
                </button>
              </div>

              {/* Article Content Body */}
              <div className="p-6 sm:p-8 space-y-4 text-white/80 text-sm sm:text-base leading-relaxed max-h-[55vh] overflow-y-auto pr-4">
                {activeArticle.content.split('\n\n').map((paragraph, pIdx) => {
                  if (paragraph.startsWith('### ')) {
                    return (
                      <h3 key={pIdx} className="text-lg sm:text-xl font-medium text-white pt-3 pb-1 border-b border-white/10">
                        {paragraph.replace('### ', '')}
                      </h3>
                    );
                  }
                  if (paragraph.startsWith('- ')) {
                    const listItems = paragraph.split('\n- ');
                    return (
                      <ul key={pIdx} className="space-y-1.5 pl-4 list-disc text-white/70">
                        {listItems.map((item, iIdx) => (
                          <li key={iIdx}>{item.replace(/^- /, '')}</li>
                        ))}
                      </ul>
                    );
                  }
                  return <p key={pIdx} className="text-white/75 leading-relaxed">{paragraph}</p>;
                })}

                {/* Tag Badges */}
                <div className="pt-6 border-t border-white/10 flex flex-wrap gap-2">
                  {activeArticle.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/60"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Reader Footer */}
              <div className="p-5 sm:p-6 bg-white/[0.02] border-t border-white/10 flex items-center justify-between">
                <div className="text-xs text-white/50">
                  Enjoyed this breakdown? Inquire for video editing collaborations.
                </div>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="px-5 py-2.5 rounded-xl bg-white text-black font-semibold text-xs tracking-wide uppercase hover:bg-white/90 active:scale-95 transition-all cursor-pointer min-h-[40px]"
                >
                  Close Article
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
