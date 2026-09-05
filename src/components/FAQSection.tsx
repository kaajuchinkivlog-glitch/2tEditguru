import React, { useState, useId } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronDown,
  HelpCircle,
  Clock,
  Calendar,
  Film,
  CreditCard,
  Zap,
  MessageSquare,
  HardDrive,
  Sliders,
  Search,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { FAQItem, FAQCategory } from '../types';
import { FAQ_ITEMS } from '../data/portfolioData';

interface FAQSectionProps {
  onOpenContact: (service?: string) => void;
}

const CATEGORIES: FAQCategory[] = [
  'All',
  'Booking & Rates',
  'Turnaround Times',
  'Editing & Revisions',
];

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenContact }) => {
  const [selectedCategory, setSelectedCategory] = useState<FAQCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIds, setOpenIds] = useState<string[]>(['how-to-book', 'turnaround-time']);

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const getIcon = (iconName?: string) => {
    const iconClass = "w-4 h-4 text-white/80";
    switch (iconName) {
      case 'Calendar':
        return <Calendar className={iconClass} />;
      case 'Clock':
        return <Clock className={iconClass} />;
      case 'Film':
        return <Film className={iconClass} />;
      case 'CreditCard':
        return <CreditCard className={iconClass} />;
      case 'Zap':
        return <Zap className={iconClass} />;
      case 'MessageSquare':
        return <MessageSquare className={iconClass} />;
      case 'HardDrive':
        return <HardDrive className={iconClass} />;
      case 'Sliders':
        return <Sliders className={iconClass} />;
      default:
        return <HelpCircle className={iconClass} />;
    }
  };

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    const matchesCategory =
      selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faq" className="relative py-16 sm:py-28 px-4 sm:px-6 w-full max-w-5xl mx-auto">
      {/* Soft Ambient Glow in Background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs font-mono tracking-widest uppercase mb-4"
        >
          <HelpCircle className="w-3.5 h-3.5 text-white/80" />
          <span>FREQUENTLY ASKED QUESTIONS</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-white uppercase leading-[1.1]"
        >
          CLEAR ANSWERS TO{' '}
          <span className="font-serif italic font-normal text-white">COMMON QUESTIONS</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-sm sm:text-base text-white/50 max-w-2xl mx-auto font-normal leading-relaxed"
        >
          Everything you need to know about booking, turnaround times, file delivery, revisions, and the cinematic post-production process.
        </motion.p>

        {/* Filter Controls: Category Pills & Search Input */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 max-w-3xl mx-auto"
        >
          {/* Category Tabs */}
          <div className="flex items-center overflow-x-auto no-scrollbar gap-1.5 p-1 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 max-w-full">
            {CATEGORIES.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  id={`faq-tab-${category.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all whitespace-nowrap cursor-pointer min-h-[36px] ${
                    active
                      ? 'bg-white text-black shadow-md font-semibold'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Quick Search Field */}
          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" />
            <input
              id="faq-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions..."
              className="w-full pl-9 pr-8 py-2.5 rounded-2xl bg-white/5 border border-white/10 text-base sm:text-xs text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-all font-sans min-h-[40px]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white text-xs font-mono p-1"
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
        </motion.div>
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-12 rounded-3xl bg-white/[0.02] border border-white/5 p-6">
            <p className="text-white/50 text-sm">No questions found matching "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-3 text-xs text-white underline hover:text-white/80 cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        ) : (
          filteredFaqs.map((faq, index) => {
            const isOpen = openIds.includes(faq.id);

            return (
              <motion.div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className={`group rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? 'bg-white/[0.06] border-white/20 shadow-xl'
                    : 'bg-white/[0.02] hover:bg-white/[0.04] border-white/10'
                } backdrop-blur-md overflow-hidden`}
              >
                {/* Accordion Trigger Header */}
                <button
                  id={`faq-toggle-${faq.id}`}
                  onClick={() => toggleItem(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-3 sm:gap-4 flex-1">
                    <div
                      className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center transition-colors flex-shrink-0 ${
                        isOpen
                          ? 'bg-white/20 text-white'
                          : 'bg-white/5 text-white/60 group-hover:bg-white/10 group-hover:text-white'
                      }`}
                    >
                      {getIcon(faq.iconName)}
                    </div>

                    <div className="flex-1 text-left">
                      <span className="text-sm sm:text-base font-medium text-white group-hover:text-white/90 transition-colors block">
                        {faq.question}
                      </span>
                      <span className="inline-block sm:hidden text-[10px] font-mono text-white/40 uppercase mt-0.5">
                        {faq.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 flex-shrink-0">
                    <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-white/50 uppercase">
                      {faq.category}
                    </span>

                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
                        isOpen
                          ? 'bg-white/20 text-white'
                          : 'bg-white/5 text-white/50 group-hover:bg-white/10 group-hover:text-white'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </div>
                </button>

                {/* Animated Accordion Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${faq.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-5 pb-5 pt-1 border-t border-white/5">
                        <div className="text-xs sm:text-sm text-white/70 leading-relaxed whitespace-pre-line pl-11 sm:pl-13">
                          {faq.answer}
                        </div>

                        {/* Highlight Pills */}
                        {faq.highlights && faq.highlights.length > 0 && (
                          <div className="mt-3.5 pl-11 sm:pl-13 flex flex-wrap gap-2">
                            {faq.highlights.map((highlight, hIndex) => (
                              <span
                                key={hIndex}
                                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-white/60 font-mono"
                              >
                                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                                <span>{highlight}</span>
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })
        )}
      </div>

      {/* Bottom Still Have Questions Mini-Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-10 sm:mt-14 p-5 sm:p-7 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl"
      >
        <div className="flex items-center gap-4 text-center sm:text-left">
          <div className="w-11 h-11 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center flex-shrink-0 text-white shadow-inner">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <h4 className="text-sm sm:text-base font-medium text-white">
              Have a specific project or custom timeline in mind?
            </h4>
            <p className="text-xs sm:text-sm text-white/50 mt-0.5">
              Direct consultation is available for urgent deadlines, monthly creator retainers, or raw footage audits.
            </p>
          </div>
        </div>

        <button
          id="faq-btn-ask-question"
          onClick={() => onOpenContact('General FAQ Inquiry')}
          className="w-full sm:w-auto min-h-[44px] px-5 py-3 rounded-full bg-white text-black font-medium text-xs hover:bg-white/90 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md whitespace-nowrap flex-shrink-0 group"
        >
          <span>Ask Vivek Directly</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </motion.div>
    </section>
  );
};
