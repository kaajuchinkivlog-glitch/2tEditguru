import React from 'react';
import { Film, ArrowUp, Youtube, Instagram, Linkedin, Twitter, Mail } from 'lucide-react';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative mt-8 sm:mt-12 pb-10 sm:pb-12 pt-6 sm:pt-8 px-4 sm:px-6 w-full max-w-6xl mx-auto border-t border-white/10">
      {/* Liquid glass container */}
      <div className="rounded-2xl sm:rounded-3xl bg-white/5 backdrop-blur-xl p-5 sm:p-10 border border-white/10 shadow-2xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 sm:gap-6 pb-6 sm:pb-8 border-b border-white/10">
          {/* Logo and Tagline */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2.5 mb-1.5 sm:mb-2">
              <div className="w-7 h-7 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                <Film className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-lg sm:text-xl font-bold tracking-tighter text-white">
                EDITGURU<span className="text-white/40 font-normal">.IN</span>
              </span>
            </div>
            <div className="text-sm text-white/80 font-medium">Vivek</div>
            <div className="text-[11px] sm:text-xs text-white/50 font-normal mt-0.5">
              Creator • Vlogger • Video Editor • Visual Storyteller
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2.5 sm:gap-3 self-start sm:self-auto">
            <a
              id="footer-social-youtube"
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 border border-white/10 hover:border-white/30 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all shadow-sm"
              aria-label="YouTube"
            >
              <Youtube className="w-4 h-4" />
            </a>

            <a
              id="footer-social-instagram"
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 border border-white/10 hover:border-white/30 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all shadow-sm"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <a
              id="footer-social-linkedin"
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 border border-white/10 hover:border-white/30 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all shadow-sm"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <button
              id="footer-contact-button"
              onClick={onOpenContact}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 border border-white/10 hover:border-white/30 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all shadow-sm cursor-pointer"
              aria-label="Send direct message"
              title="Email Vivek"
            >
              <Mail className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright & back to top */}
        <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-[11px] sm:text-xs text-white/40 font-mono-code text-center sm:text-left">
          <div>© 2026 EditGuru.in • All Rights Reserved.</div>
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="text-white/40">Artistic Flair Theme</span>
            <button
              id="scroll-to-top-btn"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-white/60 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
