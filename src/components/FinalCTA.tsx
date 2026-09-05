import React from 'react';
import { motion } from 'motion/react';
import { Send, Sparkles, MessageSquare, ArrowUpRight } from 'lucide-react';

interface FinalCTAProps {
  onContactClick: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onContactClick }) => {
  return (
    <section id="contact-cta" className="relative py-16 sm:py-28 px-4 sm:px-6 w-full max-w-6xl mx-auto">
      {/* Full-width liquid glass card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative rounded-3xl sm:rounded-[40px] bg-white/5 backdrop-blur-xl p-6 sm:p-14 md:p-20 border border-white/10 shadow-2xl overflow-hidden text-center flex flex-col items-center justify-center group"
      >
        {/* Soft moving light & specular highlight reflections */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none group-hover:bg-white/10 transition-all duration-700" />
        <div className="glass-reflection" />

        {/* Small badge */}
        <div className="mb-4 sm:mb-6">
          <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] sm:tracking-[0.3em] text-white/50 uppercase">
            NOW ACCEPTING NEW COMMISSIONS
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white uppercase max-w-3xl leading-[1.08] sm:leading-[1.05]">
          LET'S CREATE <span className="font-serif italic font-normal text-white">SOMETHING GREAT</span>
        </h2>

        {/* Text */}
        <p className="mt-3 sm:mt-5 text-sm sm:text-lg md:text-xl text-white/50 font-normal max-w-2xl leading-relaxed">
          Have an idea or project? Let's turn it into a powerful visual story.
        </p>

        {/* Contact Me Button */}
        <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            id="cta-contact-me-btn"
            onClick={onContactClick}
            className="w-full sm:w-auto min-h-[44px] px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-white text-black font-bold text-xs sm:text-sm tracking-widest uppercase hover:bg-white/90 active:scale-95 transition-all shadow-xl flex items-center justify-center gap-2.5 group cursor-pointer"
          >
            <span>CONTACT ME</span>
            <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </div>

        {/* Subtle quick contact badges */}
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/10 w-full max-w-md flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-2 text-[10px] sm:text-xs text-white/40 font-mono-code">
          <span>AVERAGE RESPONSE: &lt; 12 HRS</span>
          <span className="text-white/20 hidden sm:inline">•</span>
          <span>DIRECT EDITORIAL ACCESS</span>
        </div>
      </motion.div>
    </section>
  );
};
