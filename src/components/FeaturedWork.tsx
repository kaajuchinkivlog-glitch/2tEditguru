import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, ArrowUpRight, Filter, Layers, Clock, Eye } from 'lucide-react';
import { ProjectCategory, ProjectItem } from '../types';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData';

interface FeaturedWorkProps {
  onSelectProject: (project: ProjectItem) => void;
}

const CATEGORIES: ProjectCategory[] = [
  'All',
  'Reels & Shorts',
  'YouTube Videos',
  'Gaming Edits',
  'Cinematic Videos',
  'Vlogs',
];

export const FeaturedWork: React.FC<FeaturedWorkProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);

  const filteredProjects =
    selectedCategory === 'All'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="work" className="relative py-20 sm:py-28 px-4 sm:px-6 w-full max-w-7xl mx-auto">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <span className="text-xs font-bold tracking-[0.3em] text-white/50 uppercase">
            PORTFOLIO SHOWCASE
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-white uppercase"
        >
          SELECTED <span className="font-serif italic font-normal text-white">WORK</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-base sm:text-lg text-white/50 font-serif italic"
        >
          "A curated collection of cinematic edits, viral reels, and visual storytelling."
        </motion.p>

        {/* Categories Navigation Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-6 sm:mt-10 flex overflow-x-auto no-scrollbar sm:flex-wrap items-center justify-start sm:justify-center gap-1.5 p-1.5 rounded-2xl sm:rounded-full bg-white/5 backdrop-blur-xl border border-white/10 max-w-full sm:max-w-fit mx-auto shadow-lg"
        >
          {CATEGORIES.map((cat) => {
            const active = selectedCategory === cat;
            return (
              <button
                key={cat}
                id={`cat-filter-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-3.5 sm:px-4 py-2 rounded-full text-xs whitespace-nowrap transition-all cursor-pointer ${
                  active
                    ? 'text-black font-bold uppercase tracking-wider'
                    : 'text-white/60 hover:text-white font-medium'
                }`}
              >
                {active && (
                  <motion.div
                    layoutId="activeCategoryPill"
                    className="absolute inset-0 bg-white rounded-full -z-10 shadow-md"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span>{cat}</span>
              </button>
            );
          })}
        </motion.div>
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onMouseEnter={() => setHoveredProjectId(project.id)}
              onMouseLeave={() => setHoveredProjectId(null)}
              className="group relative rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 overflow-hidden flex flex-col justify-between shadow-2xl cursor-pointer"
              onClick={() => onSelectProject(project)}
            >
              {/* Glass sheen effect */}
              <div className="glass-reflection" />

              {/* Large Thumbnail Area with Hover Zoom */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black m-2.5 rounded-2xl border border-white/10">
                <img
                  src={project.thumbnailUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:brightness-95 filter contrast-105"
                  loading="lazy"
                />

                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Top badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                  <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-widest bg-black/70 backdrop-blur-md border border-white/15 text-white/80 font-medium">
                    {project.category}
                  </span>

                  {project.duration && (
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono-code bg-black/70 backdrop-blur-md border border-white/15 text-white/80 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {project.duration}
                    </span>
                  )}
                </div>

                {/* Floating Play Button on Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 rounded-full bg-white/20 border border-white/40 text-white flex items-center justify-center shadow-2xl backdrop-blur-xl transform transition-transform group-hover:scale-110">
                    <Play className="w-6 h-6 fill-white translate-x-0.5" />
                  </div>
                </div>

                {/* Quick stats badge if available */}
                {project.metrics?.views && (
                  <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1.5 text-[11px] font-mono-code text-white/90 bg-black/70 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/10">
                    <Eye className="w-3 h-3 text-white/60" />
                    <span>{project.metrics.views} views</span>
                  </div>
                )}
              </div>

              {/* Card Content */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-medium text-lg sm:text-xl text-white group-hover:text-white transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-white/50 font-normal leading-relaxed line-clamp-2">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Bottom Row with Software tags and View Project button */}
                <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.software.slice(0, 2).map((sw) => (
                      <span
                        key={sw}
                        className="text-[10px] font-mono-code text-white/50 bg-white/5 border border-white/10 px-2 py-0.5 rounded"
                      >
                        {sw}
                      </span>
                    ))}
                  </div>

                  <button
                    id={`view-project-btn-${project.id}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProject(project);
                    }}
                    className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-black bg-white hover:bg-white/90 transition-colors px-3.5 py-1.5 rounded-full shadow-md"
                  >
                    <span>View</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};
