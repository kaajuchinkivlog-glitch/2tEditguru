<?php
/**
 * Header Template for EditGuru Theme
 *
 * @package EditGuru
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?> class="scroll-smooth bg-[#050505]">
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    
    <!-- Tailwind CSS CDN for instant styling -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Plus Jakarta Sans', 'sans-serif'],
                        serif: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
                        display: ['Syne', 'sans-serif'],
                        mono: ['JetBrains Mono', 'monospace'],
                    },
                    colors: {
                        canvas: '#050505',
                    }
                }
            }
        }
    </script>

    <?php wp_head(); ?>
</head>
<body <?php body_class('bg-[#050505] text-white selection:bg-white selection:text-black min-h-screen'); ?>>
<?php wp_body_open(); ?>

<!-- Sticky Liquid Glass Navigation -->
<header id="site-navigation-header" class="fixed top-3 sm:top-6 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none">
    <nav class="pointer-events-auto w-full max-w-5xl transition-all duration-300 rounded-full px-4 sm:px-8 py-2.5 sm:py-3 flex items-center justify-between shadow-2xl bg-white/5 border border-white/10 backdrop-blur-xl" id="main-nav-pill">
        <!-- Logo -->
        <a href="<?php echo esc_url(home_url('/')); ?>" class="flex items-center gap-2 group cursor-pointer">
            <div class="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center transition-transform group-hover:scale-105 shadow-inner">
                <i data-lucide="film" class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white"></i>
            </div>
            <div class="flex items-center text-base sm:text-xl font-bold tracking-tighter text-white">
                EDITGURU<span class="text-white/40 font-normal">.IN</span>
            </div>
        </a>

        <!-- Desktop Navigation Items -->
        <div class="hidden md:flex items-center gap-7 text-xs uppercase tracking-widest text-white/70">
            <a href="#work" class="hover:text-white transition-colors">Selected Work</a>
            <a href="#stats" class="hover:text-white transition-colors">Stats</a>
            <a href="#about" class="hover:text-white transition-colors">About</a>
            <a href="#services" class="hover:text-white transition-colors">Services</a>
        </div>

        <!-- Right Action Controls -->
        <div class="flex items-center gap-2 sm:gap-3">
            <!-- Audio Toggle Button -->
            <button
                id="ambient-audio-btn"
                type="button"
                title="Toggle ambient cinema audio"
                class="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all shadow-sm cursor-pointer"
            >
                <i data-lucide="volume-x" class="w-3.5 h-3.5 sm:w-4 sm:h-4" id="audio-icon"></i>
            </button>

            <!-- Let's Work Together CTA (Desktop) -->
            <button
                type="button"
                class="open-contact-modal-trigger hidden sm:flex relative group overflow-hidden px-4 sm:px-5 py-2 rounded-full bg-white text-black text-xs font-bold hover:bg-white/90 uppercase tracking-widest transition-all shadow-lg items-center gap-1.5 cursor-pointer"
            >
                <span>Let's Work Together</span>
                <i data-lucide="arrow-up-right" class="w-3.5 h-3.5"></i>
            </button>

            <!-- Mobile Hamburger Button -->
            <button
                id="mobile-menu-btn"
                type="button"
                aria-label="Toggle navigation menu"
                class="md:hidden w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white cursor-pointer"
            >
                <i data-lucide="menu" class="w-4 h-4" id="mobile-menu-icon"></i>
            </button>
        </div>
    </nav>
</header>

<!-- Mobile Navigation Drawer -->
<div id="mobile-nav-drawer" class="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl px-6 pt-24 pb-12 flex flex-col justify-between transition-all duration-300 pointer-events-none opacity-0 translate-y-[-10px]">
    <div class="flex flex-col gap-6 text-xl tracking-tight uppercase font-light text-center mt-6">
        <a href="#work" class="mobile-nav-link text-white/70 hover:text-white py-2">Selected Work</a>
        <a href="#stats" class="mobile-nav-link text-white/70 hover:text-white py-2">Stats & Metrics</a>
        <a href="#about" class="mobile-nav-link text-white/70 hover:text-white py-2">About Vivek</a>
        <a href="#services" class="mobile-nav-link text-white/70 hover:text-white py-2">Services</a>
    </div>

    <div class="flex flex-col gap-4">
        <button
            type="button"
            class="open-contact-modal-trigger w-full py-3.5 rounded-full bg-white text-black font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2 shadow-xl"
        >
            <span>Let's Work Together</span>
            <i data-lucide="arrow-up-right" class="w-4 h-4"></i>
        </button>

        <div class="text-center text-[10px] text-white/40 font-mono tracking-widest uppercase">
            EditGuru.in • Vivek Portfolio
        </div>
    </div>
</div>
