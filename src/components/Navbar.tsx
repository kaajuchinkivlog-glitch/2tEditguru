import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Film, Menu, X, ArrowUpRight, Sparkles, Volume2, VolumeX } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
  audioActive: boolean;
  toggleAudio: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenContact,
  audioActive,
  toggleAudio,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['home', 'work', 'about', 'services', 'contact-cta'];
      const scrollPos = window.scrollY + 200;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact-cta' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-3 sm:top-6 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`pointer-events-auto w-full max-w-5xl transition-all duration-300 rounded-full px-4 sm:px-8 py-2.5 sm:py-3 flex items-center justify-between shadow-2xl ${
          scrolled
            ? 'bg-white/10 border border-white/15 backdrop-blur-2xl shadow-[0_25px_50px_rgba(0,0,0,0.8)]'
            : 'bg-white/5 border border-white/10 backdrop-blur-xl'
        }`}
      >
        {/* Left Brand */}
        <a
          href="#home"
          id="nav-brand-logo"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center transition-transform group-hover:scale-105 shadow-inner">
            <Film className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white transition-transform group-hover:rotate-12" />
          </div>
          <div className="flex items-center text-base sm:text-xl font-bold tracking-tighter text-white">
            EDITGURU<span className="text-white/40 font-normal">.IN</span>
          </div>
        </a>

        {/* Center Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-white/70">
          {navLinks.map((link) => {
            const isCurrent =
              activeSection === link.href.replace('#', '') ||
              (link.href === '#home' && activeSection === 'home');
            return (
              <a
                key={link.label}
                id={`nav-link-${link.label.toLowerCase()}`}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative py-1 transition-colors hover:text-white ${
                  isCurrent ? 'text-white' : 'text-white/70'
                }`}
              >
                <span>{link.label}</span>
                {isCurrent && (
                  <motion.span
                    layoutId="activePill"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Right Action buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Subtle Audio Atmosphere Toggle */}
          <button
            id="ambient-audio-toggle"
            onClick={toggleAudio}
            title={audioActive ? 'Mute ambient sound' : 'Unmute cinema atmosphere'}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all shadow-sm cursor-pointer"
          >
            {audioActive ? (
              <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white animate-pulse" />
            ) : (
              <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            )}
          </button>

          {/* Let's Work Together CTA (Desktop/Tablet) */}
          <button
            id="nav-cta-work-together"
            onClick={onOpenContact}
            className="hidden sm:flex relative group overflow-hidden px-4 sm:px-5 py-2 rounded-full bg-white text-black text-xs font-bold hover:bg-white/90 uppercase tracking-widest transition-all shadow-lg hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] items-center gap-1.5 cursor-pointer"
          >
            <span>Let's Work Together</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Glass Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto absolute top-20 left-4 right-4 liquid-glass bg-black/90 backdrop-blur-2xl border-white/15 rounded-3xl p-6 md:hidden shadow-2xl flex flex-col gap-4"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  id={`mobile-nav-${link.label.toLowerCase()}`}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-3 rounded-xl text-base font-medium text-zinc-300 hover:text-white hover:bg-white/5 transition-all flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500" />
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3 rounded-full bg-white text-black font-semibold text-center hover:bg-zinc-200 transition-colors shadow-lg"
              >
                Let's Work Together
              </button>
              <div className="flex items-center justify-center gap-2 text-xs text-zinc-400 py-1">
                <Sparkles className="w-3.5 h-3.5 text-zinc-300" />
                <span>Available for Q2/Q3 Projects & Retainers</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
