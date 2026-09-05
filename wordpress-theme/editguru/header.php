<?php
/**
 * The Header for EditGuru Theme
 * EDITGURU.IN
 *
 * @package EditGuru
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<div id="page" class="site">
    <!-- Header Navigation -->
    <header id="masthead" class="site-header fixed top-0 left-0 right-0 z-50 transition-all duration-300" style="padding: 16px 0;">
        <div class="container mx-auto px-4">
            <div class="liquid-glass rounded-full px-6 py-3 flex items-center justify-between border border-white/10 backdrop-blur-xl bg-black/40">
                <!-- Brand Logo -->
                <a href="<?php echo esc_url(home_url('/')); ?>" class="flex items-center gap-3 group">
                    <div class="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center font-display font-extrabold text-white text-lg group-hover:border-white/50 transition-all shadow-inner">
                        E
                    </div>
                    <div>
                        <span class="font-display font-extrabold text-lg text-white tracking-tight group-hover:text-white/90 transition-colors">
                            <?php echo esc_html(get_theme_mod('editguru_logo_text', 'EDITGURU.IN')); ?>
                        </span>
                        <span class="block text-[10px] uppercase tracking-widest text-white/50 font-mono-code -mt-1">
                            <?php echo esc_html(get_theme_mod('editguru_creator_name', 'Vivek')); ?> • Studio
                        </span>
                    </div>
                </a>

                <!-- Desktop Nav Menu -->
                <nav class="hidden md:flex items-center gap-8">
                    <?php
                    if (has_nav_menu('primary')) {
                        wp_nav_menu(array(
                            'theme_location' => 'primary',
                            'container'      => false,
                            'menu_class'     => 'flex items-center gap-6 text-sm font-medium text-white/70 hover:text-white transition-colors',
                            'fallback_cb'    => false,
                        ));
                    } else {
                    ?>
                    <a href="<?php echo esc_url(home_url('/')); ?>" class="text-sm font-medium text-white/80 hover:text-white transition-colors">Home</a>
                    <a href="<?php echo esc_url(home_url('/#portfolio')); ?>" class="text-sm font-medium text-white/70 hover:text-white transition-colors">Portfolio</a>
                    <a href="<?php echo esc_url(home_url('/#services')); ?>" class="text-sm font-medium text-white/70 hover:text-white transition-colors">Services</a>
                    <a href="<?php echo esc_url(home_url('/#journey')); ?>" class="text-sm font-medium text-white/70 hover:text-white transition-colors">About Vivek</a>
                    <a href="<?php echo esc_url(home_url('/#testimonials')); ?>" class="text-sm font-medium text-white/70 hover:text-white transition-colors">Reviews</a>
                    <a href="<?php echo esc_url(home_url('/#contact')); ?>" class="text-sm font-medium text-white/70 hover:text-white transition-colors">Contact</a>
                    <?php } ?>
                </nav>

                <!-- CTA Action Button & Mobile Menu Toggle -->
                <div class="flex items-center gap-3">
                    <button onclick="openContactModal()" class="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-white/90 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95 cursor-pointer">
                        <span>Start a Project</span>
                        <i data-lucide="arrow-up-right" class="w-4 h-4"></i>
                    </button>

                    <!-- Mobile Menu Button -->
                    <button id="mobile-menu-toggle" class="md:hidden p-2 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors" aria-label="Toggle Menu">
                        <i data-lucide="menu" class="w-5 h-5"></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Drawer Navigation -->
        <div id="mobile-drawer" class="hidden md:hidden fixed inset-x-4 top-24 p-6 rounded-2xl liquid-glass-heavy border border-white/20 bg-black/90 backdrop-blur-2xl z-50 flex-col gap-4">
            <a href="<?php echo esc_url(home_url('/')); ?>" class="text-base font-medium text-white hover:text-white/80 py-2 border-b border-white/10">Home</a>
            <a href="<?php echo esc_url(home_url('/#portfolio')); ?>" class="text-base font-medium text-white/80 hover:text-white py-2 border-b border-white/10">Portfolio Work</a>
            <a href="<?php echo esc_url(home_url('/#services')); ?>" class="text-base font-medium text-white/80 hover:text-white py-2 border-b border-white/10">Services & Rates</a>
            <a href="<?php echo esc_url(home_url('/#journey')); ?>" class="text-base font-medium text-white/80 hover:text-white py-2 border-b border-white/10">About Vivek</a>
            <a href="<?php echo esc_url(home_url('/#contact')); ?>" class="text-base font-medium text-white/80 hover:text-white py-2">Contact Studio</a>
            <button onclick="openContactModal()" class="w-full mt-4 py-3 rounded-full bg-white text-black font-bold text-sm uppercase tracking-wider text-center">
                Start a Project
            </button>
        </div>
    </header>
    <div class="pt-24"></div>
