import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Sparkles, Download } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
  audioActive?: boolean;
  toggleAudio?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenContact,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['home', 'youtube', 'work', 'instagram', 'services', 'about', 'blog', 'faq', 'contact-cta'];
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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

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
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="fixed top-2.5 sm:top-5 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`pointer-events-auto w-full max-w-6xl transition-all duration-300 rounded-full px-4 sm:px-8 py-2 sm:py-2.5 flex items-center justify-between shadow-2xl ${
          scrolled
            ? 'bg-black/80 border border-white/20 backdrop-blur-2xl shadow-[0_25px_50px_rgba(0,0,0,0.85)]'
            : 'bg-black/50 border border-white/10 backdrop-blur-xl'
        }`}
      >
        {/* Left Brand */}
        <a
          href="#home"
          id="nav-brand-logo"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center group cursor-pointer min-h-[44px]"
        >
          <div className="flex items-center text-base sm:text-xl font-bold tracking-tighter text-white">
            EDITGURU<span className="text-white/40 font-normal">.IN</span>
          </div>
        </a>

        {/* Center Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-5 lg:gap-7 text-xs xl:text-sm font-medium text-white/70">
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
                  isCurrent ? 'text-white font-semibold' : 'text-white/70'
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
          {/* WordPress Theme Download (.zip) */}
          <a
            id="nav-wp-theme-download"
            href="/editguru-theme.zip"
            download="editguru-theme.zip"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-mono-code transition-all"
            title="Download complete custom WordPress theme (.zip)"
          >
            <Download className="w-3.5 h-3.5 text-emerald-400" />
            <span>WP Theme .ZIP</span>
          </a>

          {/* Let's Work Together CTA */}
          <button
            id="nav-cta-work-together"
            onClick={onOpenContact}
            className="hidden sm:flex relative group overflow-hidden px-4 sm:px-5 py-2.5 rounded-full bg-white text-black text-xs font-bold hover:bg-white/90 uppercase tracking-widest transition-all shadow-lg hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] items-center gap-1.5 cursor-pointer min-h-[40px]"
          >
            <span>Start Project</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-11 h-11 rounded-full bg-white/5 hover:bg-white/10 active:bg-white/15 border border-white/10 flex items-center justify-center text-white cursor-pointer touch-target transition-all"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Glass Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop for click dismiss */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden pointer-events-auto"
            />

            <motion.div
              initial={{ opacity: 0, y: -15, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.97 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="pointer-events-auto fixed top-20 left-4 right-4 z-50 liquid-glass bg-neutral-950/95 backdrop-blur-2xl border border-white/20 rounded-3xl p-5 lg:hidden shadow-2xl flex flex-col gap-3 max-h-[82vh] overflow-y-auto"
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    id={`mobile-nav-${link.label.toLowerCase()}`}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="px-4 py-3 rounded-2xl text-base font-medium text-white/80 hover:text-white hover:bg-white/10 active:bg-white/20 transition-all flex items-center justify-between touch-target"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-4 h-4 text-white/40" />
                  </a>
                ))}
              </div>

              <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
                <a
                  href="/editguru-theme.zip"
                  download="editguru-theme.zip"
                  className="w-full py-3 rounded-2xl bg-white/10 border border-white/20 text-white font-mono-code text-xs flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4 text-emerald-400" />
                  <span>Download WP Theme (.zip)</span>
                </a>

                <button
                  id="mobile-nav-cta-work"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenContact();
                  }}
                  className="w-full min-h-[48px] py-3.5 rounded-2xl bg-white text-black font-bold text-xs uppercase tracking-wider text-center hover:bg-zinc-200 transition-colors shadow-lg cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Start Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
