import React from 'react';
import { Film, ArrowUp, Youtube, Instagram, Facebook, Mail, MessageCircle } from 'lucide-react';
import { SOCIAL_PROFILES } from '../data/socialAndBlogData';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'YouTube', href: '#youtube' },
    { label: 'Portfolio', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Blog', href: '#blog' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact-cta' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative mt-12 sm:mt-16 pb-10 sm:pb-12 pt-6 sm:pt-8 px-4 sm:px-6 w-full max-w-6xl mx-auto border-t border-white/10">
      {/* Liquid glass container */}
      <div className="rounded-2xl sm:rounded-3xl bg-white/5 backdrop-blur-xl p-6 sm:p-10 border border-white/10 shadow-2xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/10">
          {/* Logo and Tagline */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                <Film className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl sm:text-2xl font-bold tracking-tighter text-white">
                EDITGURU<span className="text-white/40 font-normal">.IN</span>
              </span>
            </div>
            <div className="text-sm sm:text-base text-white font-medium">
              Vivek — Creator • Vlogger • Video Editor
            </div>
            <div className="text-xs sm:text-sm text-white/50 mt-1 max-w-md">
              A luxury cinematic studio crafting high-retention YouTube storytelling, viral reels, and Hollywood-level color grading.
            </div>
            <div className="text-[11px] text-white/40 font-mono mt-2 flex flex-wrap gap-2">
              <span>Premiere Pro</span> • <span>After Effects</span> • <span>DaVinci Resolve</span> • <span>CapCut Pro</span> • <span>VN</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              id="footer-social-youtube"
              href={SOCIAL_PROFILES.youtube.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-white/5 border border-white/10 hover:border-red-500/40 hover:bg-red-600/10 active:scale-95 flex items-center justify-center text-white/70 hover:text-red-400 transition-all shadow-sm group cursor-pointer"
              aria-label="YouTube Channel @nomadvivek"
              title="Nomad Vivek on YouTube"
            >
              <Youtube className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </a>

            <a
              id="footer-social-instagram"
              href={SOCIAL_PROFILES.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-white/5 border border-white/10 hover:border-pink-500/40 hover:bg-pink-600/10 active:scale-95 flex items-center justify-center text-white/70 hover:text-pink-400 transition-all shadow-sm group cursor-pointer"
              aria-label="Instagram @realnomadvivek"
              title="Nomad Vivek on Instagram"
            >
              <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </a>

            <a
              id="footer-social-facebook"
              href={SOCIAL_PROFILES.facebook.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-white/5 border border-white/10 hover:border-blue-500/40 hover:bg-blue-600/10 active:scale-95 flex items-center justify-center text-white/70 hover:text-blue-400 transition-all shadow-sm group cursor-pointer"
              aria-label="Facebook Vivek Pandey"
              title="Vivek Pandey on Facebook"
            >
              <Facebook className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </a>

            <a
              id="footer-whatsapp-btn"
              href={SOCIAL_PROFILES.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-white/5 border border-white/10 hover:border-emerald-500/40 hover:bg-emerald-600/10 active:scale-95 flex items-center justify-center text-white/70 hover:text-emerald-400 transition-all shadow-sm group cursor-pointer"
              aria-label="WhatsApp Vivek"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </a>

            <button
              id="footer-contact-button"
              onClick={onOpenContact}
              className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-white/5 border border-white/10 hover:border-white/30 active:scale-95 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all shadow-sm cursor-pointer group"
              aria-label="Send direct message"
              title="Contact Vivek"
            >
              <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>

        {/* Quick Nav Links */}
        <div className="py-4 border-b border-white/5 flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6 text-xs font-mono text-white/60">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="py-1.5 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Bottom copyright & back to top */}
        <div className="mt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] sm:text-xs text-white/40 font-mono text-center sm:text-left">
          <div>© 2026 EditGuru • Vivek Pandey. All Rights Reserved.</div>
          <button
            id="scroll-to-top-btn"
            onClick={scrollToTop}
            className="min-h-[44px] px-3 py-2 flex items-center gap-1.5 text-white/60 hover:text-white active:scale-95 transition-all cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
