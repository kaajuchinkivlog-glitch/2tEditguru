<?php
/**
 * The Front Page Template for EditGuru Theme
 * EDITGURU.IN - Vivek Portfolio
 *
 * @package EditGuru
 */

get_header();

$hero_headline  = get_theme_mod('editguru_hero_headline', 'Creating Stories Through Visuals');
$hero_subtitle  = get_theme_mod('editguru_hero_subtitle', 'Professional video editing and cinematic storytelling by Vivek. Crafting high-converting Reels, YouTube docs, commercials, and viral visual experiences.');
$showreel_url   = get_theme_mod('editguru_hero_showreel_url', 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4');
$creator_name   = get_theme_mod('editguru_creator_name', 'Vivek');
$creator_title  = get_theme_mod('editguru_creator_title', 'Creator • Vlogger • Video Editor');
?>

<main id="primary" class="site-main overflow-hidden">

    <!-- 1. Full-Screen Cinematic Hero -->
    <section class="relative min-h-[90vh] flex items-center justify-center pt-8 pb-16 overflow-hidden">
        <!-- Background Ambient Video / Backdrop -->
        <div class="absolute inset-0 z-0 opacity-30 mix-blend-screen pointer-events-none overflow-hidden">
            <video autoplay loop muted playsinline class="w-full h-full object-cover filter blur-sm scale-105">
                <source src="<?php echo esc_url($showreel_url); ?>" type="video/mp4">
            </video>
            <div class="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-[#050505]"></div>
        </div>

        <div class="container mx-auto px-4 relative z-10">
            <div class="max-w-4xl mx-auto text-center space-y-8">
                <!-- Floating Glass Pill -->
                <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full liquid-glass border border-white/20 text-xs font-mono-code text-white/80 backdrop-blur-xl">
                    <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>EDITGURU.IN • <?php echo esc_html($creator_title); ?></span>
                </div>

                <!-- Main Hero Headline -->
                <h1 class="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl text-white tracking-tight leading-[1.08] text-balance">
                    <?php echo esc_html($hero_headline); ?>
                </h1>

                <!-- Subtitle -->
                <p class="text-lg md:text-xl text-white/70 max-w-2xl mx-auto font-normal leading-relaxed text-balance">
                    <?php echo esc_html($hero_subtitle); ?>
                </p>

                <!-- Hero CTA Action Buttons -->
                <div class="flex flex-wrap items-center justify-center gap-4 pt-4">
                    <a href="#portfolio" class="px-8 py-4 rounded-full bg-white text-black font-bold text-sm uppercase tracking-wider hover:bg-white/90 transition-all shadow-[0_0_30px_rgba(255,255,255,0.35)] hover:scale-105 active:scale-95 flex items-center gap-2">
                        <span><?php echo esc_html(get_theme_mod('editguru_hero_btn1_text', 'View My Work')); ?></span>
                        <i data-lucide="play" class="w-4 h-4 fill-current"></i>
                    </a>
                    <button onclick="openContactModal()" class="px-8 py-4 rounded-full liquid-glass border border-white/20 text-white font-semibold text-sm uppercase tracking-wider hover:border-white/50 hover:bg-white/10 transition-all flex items-center gap-2">
                        <span><?php echo esc_html(get_theme_mod('editguru_hero_btn2_text', 'Start a Project')); ?></span>
                        <i data-lucide="sparkles" class="w-4 h-4"></i>
                    </button>
                </div>

                <!-- Floating Glass Stat Cards -->
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 max-w-3xl mx-auto">
                    <div class="liquid-glass rounded-2xl p-5 text-center border border-white/10">
                        <span class="block text-3xl font-display font-extrabold text-white">100M+</span>
                        <span class="text-xs text-white/50 uppercase tracking-widest font-mono-code">Combined Views</span>
                    </div>
                    <div class="liquid-glass rounded-2xl p-5 text-center border border-white/10">
                        <span class="block text-3xl font-display font-extrabold text-white">250+</span>
                        <span class="text-xs text-white/50 uppercase tracking-widest font-mono-code">Projects Edited</span>
                    </div>
                    <div class="liquid-glass rounded-2xl p-5 text-center border border-white/10">
                        <span class="block text-3xl font-display font-extrabold text-white">99.8%</span>
                        <span class="text-xs text-white/50 uppercase tracking-widest font-mono-code">Client Rating</span>
                    </div>
                    <div class="liquid-glass rounded-2xl p-5 text-center border border-white/10">
                        <span class="block text-3xl font-display font-extrabold text-white">8+ Yrs</span>
                        <span class="text-xs text-white/50 uppercase tracking-widest font-mono-code">Experience</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 2. Interactive DaVinci Resolve Timeline Monitor -->
    <section class="py-12 container mx-auto px-4">
        <div class="liquid-glass-heavy rounded-3xl p-6 md:p-8 border border-white/15 relative overflow-hidden shadow-2xl">
            <div class="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div class="flex items-center gap-3">
                    <div class="flex gap-2">
                        <span class="w-3 h-3 rounded-full bg-red-500/80"></span>
                        <span class="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                        <span class="w-3 h-3 rounded-full bg-green-500/80"></span>
                    </div>
                    <span class="text-xs font-mono-code text-white/60">EDITGURU_TIMELINE_RENDER_V2.0</span>
                </div>
                <div class="text-xs font-mono-code text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                    DaVinci Studio 19.1 Engine
                </div>
            </div>

            <!-- Video Player Monitor -->
            <div class="aspect-video w-full rounded-2xl overflow-hidden bg-black relative group border border-white/10">
                <video id="hero-timeline-video" class="w-full h-full object-cover" loop muted playsinline autoplay>
                    <source src="<?php echo esc_url($showreel_url); ?>" type="video/mp4">
                </video>
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                    <div class="flex items-center justify-between w-full">
                        <div>
                            <span class="text-xs font-mono-code text-white/50 uppercase tracking-wider block">Master Timeline</span>
                            <h3 class="text-xl font-bold text-white">EDITGURU Showreel 2026</h3>
                        </div>
                        <button onclick="playMainVideo('<?php echo esc_url($showreel_url); ?>', 'EDITGURU Showreel 2026', 'Vivek Studio')" class="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                            <i data-lucide="play" class="w-5 h-5 fill-current ml-0.5"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 3. Portfolio Showcase Section -->
    <section id="portfolio" class="py-24 container mx-auto px-4">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
                <span class="text-xs font-mono-code uppercase tracking-widest text-white/50 block mb-2">Featured Work</span>
                <h2 class="font-display font-extrabold text-3xl sm:text-5xl text-white">Cinematic Portfolio</h2>
            </div>

            <!-- Category Filter Tabs -->
            <div class="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
                <button class="portfolio-tab-btn active px-4 py-2 rounded-full text-xs font-semibold bg-white text-black cursor-pointer transition-all" data-category="all">All</button>
                <button class="portfolio-tab-btn px-4 py-2 rounded-full text-xs font-semibold bg-white/10 text-white/70 hover:bg-white/20 hover:text-white cursor-pointer transition-all" data-category="reels">Reels</button>
                <button class="portfolio-tab-btn px-4 py-2 rounded-full text-xs font-semibold bg-white/10 text-white/70 hover:bg-white/20 hover:text-white cursor-pointer transition-all" data-category="youtube">YouTube Videos</button>
                <button class="portfolio-tab-btn px-4 py-2 rounded-full text-xs font-semibold bg-white/10 text-white/70 hover:bg-white/20 hover:text-white cursor-pointer transition-all" data-category="commercials">Commercials</button>
                <button class="portfolio-tab-btn px-4 py-2 rounded-full text-xs font-semibold bg-white/10 text-white/70 hover:bg-white/20 hover:text-white cursor-pointer transition-all" data-category="motion-graphics">Motion Graphics</button>
                <button class="portfolio-tab-btn px-4 py-2 rounded-full text-xs font-semibold bg-white/10 text-white/70 hover:bg-white/20 hover:text-white cursor-pointer transition-all" data-category="color-grading">Color Grading</button>
            </div>
        </div>

        <!-- Portfolio Projects Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="portfolio-grid">
            <?php
            $portfolio_query = new WP_Query(array(
                'post_type'      => 'project',
                'posts_per_page' => 9,
            ));

            if ($portfolio_query->have_posts()) :
                while ($portfolio_query->have_posts()) : $portfolio_query->the_post();
                    $client     = get_post_meta(get_the_ID(), '_editguru_client', true);
                    $video_url  = get_post_meta(get_the_ID(), '_editguru_video_url', true);
                    $views      = get_post_meta(get_the_ID(), '_editguru_views', true);
                    $duration   = get_post_meta(get_the_ID(), '_editguru_duration', true);
                    $software   = get_post_meta(get_the_ID(), '_editguru_software', true);
                    $thumb_url  = get_the_post_thumbnail_url(get_the_ID(), 'large');
                    if (!$thumb_url) {
                        $thumb_url = 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80';
                    }
                    ?>
                    <div class="portfolio-item liquid-glass rounded-3xl overflow-hidden border border-white/10 group hover:border-white/30 transition-all">
                        <div class="aspect-video relative overflow-hidden bg-black">
                            <img src="<?php echo esc_url($thumb_url); ?>" alt="<?php the_title_attribute(); ?>" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                            <div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80"></div>
                            
                            <?php if ($views): ?>
                            <div class="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] font-mono-code text-white">
                                🔥 <?php echo esc_html($views); ?>
                            </div>
                            <?php endif; ?>

                            <button onclick="playMainVideo('<?php echo esc_url($video_url ? $video_url : $showreel_url); ?>', '<?php echo esc_js(get_the_title()); ?>', '<?php echo esc_js($client ? $client : 'Vivek Edit'); ?>')" class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-xs">
                                <div class="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
                                    <i data-lucide="play" class="w-6 h-6 fill-current ml-0.5"></i>
                                </div>
                            </button>
                        </div>
                        <div class="p-6 space-y-3">
                            <div class="flex items-center justify-between text-xs font-mono-code text-white/50">
                                <span><?php echo esc_html($client ? $client : 'EDITGURU'); ?></span>
                                <span><?php echo esc_html($duration ? $duration : '02:00'); ?></span>
                            </div>
                            <h3 class="text-xl font-bold text-white group-hover:text-white/90 transition-colors">
                                <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                            </h3>
                            <p class="text-xs text-white/60 line-clamp-2"><?php echo esc_html(get_the_excerpt()); ?></p>
                            <?php if ($software): ?>
                            <div class="pt-2 flex flex-wrap gap-2">
                                <?php foreach (explode(',', $software) as $tool): ?>
                                <span class="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono-code text-white/70">
                                    <?php echo esc_html(trim($tool)); ?>
                                </span>
                                <?php endforeach; ?>
                            </div>
                            <?php endif; ?>
                        </div>
                    </div>
                    <?php
                endwhile;
                wp_reset_postdata();
            else :
            ?>
            <!-- Default Seed Cards if no CPT posts added yet -->
            <div class="portfolio-item liquid-glass rounded-3xl overflow-hidden border border-white/10 group">
                <div class="aspect-video relative overflow-hidden bg-black">
                    <img src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80" alt="Cinematic Commercial" class="w-full h-full object-cover">
                    <button onclick="playMainVideo('<?php echo esc_url($showreel_url); ?>', 'Apex Motorsports Commercial', 'RedBull Racing')" class="absolute inset-0 flex items-center justify-center bg-black/30">
                        <div class="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center">
                            <i data-lucide="play" class="w-6 h-6 fill-current ml-0.5"></i>
                        </div>
                    </button>
                </div>
                <div class="p-6 space-y-2">
                    <span class="text-xs font-mono-code text-white/50 block">RedBull Racing • Commercial</span>
                    <h3 class="text-xl font-bold text-white">Apex Motorsports 4K Commercial</h3>
                    <p class="text-xs text-white/60">Fast-paced whip pans, speed ramps, sound design, and ARRI Log color grading.</p>
                </div>
            </div>
            <?php endif; ?>
        </div>
    </section>

    <!-- 4. Interactive Color Grading Before/After Slider -->
    <section class="py-20 bg-black/40 border-y border-white/10">
        <div class="container mx-auto px-4">
            <div class="max-w-3xl mx-auto text-center mb-12">
                <span class="text-xs font-mono-code uppercase tracking-widest text-white/50 block mb-2">Precision Finishing</span>
                <h2 class="font-display font-extrabold text-3xl sm:text-5xl text-white">Log vs. Rec.709 Color Grading</h2>
                <p class="text-sm text-white/60 mt-3">Drag the interactive slider below to inspect Vivek's DaVinci Resolve color transformation.</p>
            </div>

            <!-- Before/After Slider Container -->
            <div class="max-w-4xl mx-auto rounded-3xl overflow-hidden border border-white/20 relative aspect-video select-none shadow-2xl" id="grading-slider-container">
                <!-- After Image (Graded Rec709) -->
                <img src="https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1200&q=80" alt="Rec709 Graded" class="absolute inset-0 w-full h-full object-cover">
                
                <!-- Before Image (Flat RAW Log) clipped -->
                <div id="before-image-wrap" class="absolute inset-0 w-1/2 overflow-hidden border-r-2 border-white shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1200&q=80" alt="Flat Log RAW" class="absolute inset-0 w-full h-full object-cover filter contrast-50 brightness-110 saturate-30">
                </div>

                <!-- Labels -->
                <span class="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-mono-code text-white/70 border border-white/20">FLAT LOG RAW</span>
                <span class="absolute top-4 right-4 px-3 py-1 rounded-full bg-white text-black text-[10px] font-mono-code font-bold">DAVINCI REC.709 GRADED</span>
            </div>
        </div>
    </section>

    <!-- 5. Services & Pricing Section -->
    <section id="services" class="py-24 container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center mb-16">
            <span class="text-xs font-mono-code uppercase tracking-widest text-white/50 block mb-2">Production Offerings</span>
            <h2 class="font-display font-extrabold text-3xl sm:text-5xl text-white">Services & Editing Packages</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Service 1 -->
            <div class="liquid-glass rounded-3xl p-8 border border-white/10 flex flex-col justify-between space-y-6 hover:border-white/30 transition-all">
                <div class="space-y-4">
                    <div class="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
                        <i data-lucide="smartphone" class="w-6 h-6"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-white">Shorts & Reels Editing</h3>
                    <p class="text-sm text-white/60">High-retention vertical editing with custom dynamic captions, sound design, sound effects, and fast-paced hook engineering.</p>
                    <ul class="space-y-2 text-xs text-white/70 font-mono-code pt-4 border-t border-white/10">
                        <li>✓ 9:16 Vertical Video Optimization</li>
                        <li>✓ Animated Custom Typography</li>
                        <li>✓ Sound FX & B-Roll Sourcing</li>
                    </ul>
                </div>
                <button onclick="openContactModal()" class="w-full py-3 rounded-full bg-white/10 hover:bg-white text-white hover:text-black font-semibold text-xs uppercase tracking-wider transition-all">Book Reels Service</button>
            </div>

            <!-- Service 2 -->
            <div class="liquid-glass-heavy rounded-3xl p-8 border border-white/30 flex flex-col justify-between space-y-6 relative shadow-2xl">
                <span class="absolute -top-3 right-8 px-3 py-1 rounded-full bg-white text-black text-[10px] font-mono-code font-bold uppercase tracking-wider">Most Popular</span>
                <div class="space-y-4">
                    <div class="w-12 h-12 rounded-2xl bg-white text-black flex items-center justify-center">
                        <i data-lucide="youtube" class="w-6 h-6"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-white">YouTube Long-Form Docs</h3>
                    <p class="text-sm text-white/70">Storytelling editing for YouTube creators, vloggers, and essayists. Pacing, story structure, visual hooks, and graphic overlays.</p>
                    <ul class="space-y-2 text-xs text-white/80 font-mono-code pt-4 border-t border-white/10">
                        <li>✓ Full Story Arc & Pacing</li>
                        <li>✓ Motion Graphics & Map Animations</li>
                        <li>✓ Custom Sound Mix & Audio Polish</li>
                    </ul>
                </div>
                <button onclick="openContactModal()" class="w-full py-3.5 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-white/90 transition-all shadow-lg">Book YouTube Editing</button>
            </div>

            <!-- Service 3 -->
            <div class="liquid-glass rounded-3xl p-8 border border-white/10 flex flex-col justify-between space-y-6 hover:border-white/30 transition-all">
                <div class="space-y-4">
                    <div class="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
                        <i data-lucide="sliders" class="w-6 h-6"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-white">Color Grading & Motion C4D</h3>
                    <p class="text-sm text-white/60">DaVinci Resolve studio color finishing, shot matching, film grain emulation, 3D element integration, and commercial visual effects.</p>
                    <ul class="space-y-2 text-xs text-white/70 font-mono-code pt-4 border-t border-white/10">
                        <li>✓ ACES / DaVinci Color Management</li>
                        <li>✓ Cinema 4D & After Effects VFX</li>
                        <li>✓ Master Delivery in 4K ProRes</li>
                    </ul>
                </div>
                <button onclick="openContactModal()" class="w-full py-3 rounded-full bg-white/10 hover:bg-white text-white hover:text-black font-semibold text-xs uppercase tracking-wider transition-all">Book Color & VFX</button>
            </div>
        </div>
    </section>

    <!-- 6. Software & Gear Marquee -->
    <section class="py-12 border-y border-white/10 overflow-hidden bg-black/60">
        <div class="animate-marquee flex items-center gap-12 whitespace-nowrap opacity-60">
            <span class="text-sm font-mono-code uppercase tracking-widest text-white">ADOBE PREMIERE PRO CC</span>
            <span class="text-white/30">•</span>
            <span class="text-sm font-mono-code uppercase tracking-widest text-white">DAVINCI RESOLVE STUDIO 19</span>
            <span class="text-white/30">•</span>
            <span class="text-sm font-mono-code uppercase tracking-widest text-white">AFTER EFFECTS CC</span>
            <span class="text-white/30">•</span>
            <span class="text-sm font-mono-code uppercase tracking-widest text-white">CINEMA 4D & REDSHIFT</span>
            <span class="text-white/30">•</span>
            <span class="text-sm font-mono-code uppercase tracking-widest text-white">SONY FX3 / FX6 CINEMA LINE</span>
            <span class="text-white/30">•</span>
            <span class="text-sm font-mono-code uppercase tracking-widest text-white">RED DIGITAL CINEMA</span>
            <span class="text-white/30">•</span>
        </div>
    </section>

    <!-- 7. Creator Journey & About Vivek -->
    <section id="journey" class="py-24 container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div class="relative">
                <div class="aspect-square rounded-3xl overflow-hidden border border-white/20 liquid-glass-heavy shadow-2xl relative">
                    <img src="<?php echo esc_url(get_theme_mod('editguru_profile_photo', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')); ?>" alt="Vivek EDITGURU" class="w-full h-full object-cover">
                    <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                    <div class="absolute bottom-6 left-6 right-6 p-4 rounded-2xl liquid-glass border border-white/20">
                        <span class="text-xs font-mono-code text-white/60 block">CREATOR & EDITOR</span>
                        <h4 class="text-lg font-bold text-white">Vivek • EDITGURU.IN</h4>
                    </div>
                </div>
            </div>

            <div class="space-y-6">
                <span class="text-xs font-mono-code uppercase tracking-widest text-white/50 block">About Vivek</span>
                <h2 class="font-display font-extrabold text-3xl sm:text-5xl text-white">Crafting Visual Masterpieces</h2>
                <p class="text-base text-white/70 leading-relaxed">
                    Hello! I'm Vivek, the lead creative behind EDITGURU.IN. With over 8 years of dedicated experience editing for top YouTube creators, vloggers, and global brands, I transform raw footage into compelling visual stories that captivate audiences and drive millions of organic views.
                </p>
                <p class="text-sm text-white/60 leading-relaxed">
                    My edit workflow combines precise rhythm pacing, custom motion graphics in After Effects, and Hollywood-grade color grading in DaVinci Resolve. Whether it's a high-retention 60-second Reel or a 30-minute documentary essay, every frame is crafted with obsession.
                </p>

                <div class="pt-4 flex items-center gap-6">
                    <div>
                        <span class="block text-2xl font-bold text-white">8+ Years</span>
                        <span class="text-xs text-white/50 font-mono-code">Professional Editing</span>
                    </div>
                    <div class="w-px h-10 bg-white/10"></div>
                    <div>
                        <span class="block text-2xl font-bold text-white">100M+</span>
                        <span class="text-xs text-white/50 font-mono-code">Organic Views</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 8. Testimonials Section -->
    <section id="testimonials" class="py-24 bg-black/40 border-t border-white/10">
        <div class="container mx-auto px-4">
            <div class="max-w-3xl mx-auto text-center mb-16">
                <span class="text-xs font-mono-code uppercase tracking-widest text-white/50 block mb-2">Client Feedback</span>
                <h2 class="font-display font-extrabold text-3xl sm:text-5xl text-white">What Creators Say</h2>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="liquid-glass rounded-3xl p-6 border border-white/10 space-y-4">
                    <div class="flex text-amber-400 gap-1">★★★★★</div>
                    <p class="text-sm text-white/80 italic">"Vivek transformed our YouTube channel pacing completely. Our average view duration went up by 42% after hiring EDITGURU."</p>
                    <div class="pt-4 border-t border-white/10 flex items-center gap-3">
                        <div class="w-8 h-8 rounded-full bg-white/20"></div>
                        <div>
                            <span class="block text-xs font-bold text-white">Alex Rivera</span>
                            <span class="text-[10px] text-white/50 font-mono-code">Tech Creator (1.2M Subs)</span>
                        </div>
                    </div>
                </div>

                <div class="liquid-glass rounded-3xl p-6 border border-white/10 space-y-4">
                    <div class="flex text-amber-400 gap-1">★★★★★</div>
                    <p class="text-sm text-white/80 italic">"The color grading Vivek delivered on our commercial shoot looked like an ARRI theatrical release. Unbelievable turnarounds!"</p>
                    <div class="pt-4 border-t border-white/10 flex items-center gap-3">
                        <div class="w-8 h-8 rounded-full bg-white/20"></div>
                        <div>
                            <span class="block text-xs font-bold text-white">Sarah Chen</span>
                            <span class="text-[10px] text-white/50 font-mono-code">Creative Producer</span>
                        </div>
                    </div>
                </div>

                <div class="liquid-glass rounded-3xl p-6 border border-white/10 space-y-4">
                    <div class="flex text-amber-400 gap-1">★★★★★</div>
                    <p class="text-sm text-white/80 italic">"Our Instagram Reels gained over 12 Million views in one month thanks to Vivek's hook editing and custom sound design."</p>
                    <div class="pt-4 border-t border-white/10 flex items-center gap-3">
                        <div class="w-8 h-8 rounded-full bg-white/20"></div>
                        <div>
                            <span class="block text-xs font-bold text-white">Karan Sharma</span>
                            <span class="text-[10px] text-white/50 font-mono-code">Lifestyle Vlogger</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 9. Contact Section -->
    <section id="contact" class="py-24 container mx-auto px-4">
        <div class="liquid-glass-heavy rounded-3xl p-8 md:p-16 border border-white/20 relative overflow-hidden shadow-2xl">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div class="space-y-6">
                    <span class="text-xs font-mono-code uppercase tracking-widest text-white/50 block">Start A Project</span>
                    <h2 class="font-display font-extrabold text-3xl sm:text-5xl text-white">Let's Edit Your Next Viral Video</h2>
                    <p class="text-sm text-white/70 leading-relaxed">
                        Ready to elevate your raw footage into cinematic gold? Fill out the project inquiry form, and Vivek will get back to you within 12-24 hours.
                    </p>
                    <div class="space-y-3 text-sm font-mono-code text-white/80 pt-4">
                        <div class="flex items-center gap-3">
                            <i data-lucide="mail" class="w-4 h-4 text-white/50"></i>
                            <span><?php echo esc_html(get_theme_mod('editguru_contact_email', 'vivek@editguru.in')); ?></span>
                        </div>
                        <div class="flex items-center gap-3">
                            <i data-lucide="globe" class="w-4 h-4 text-white/50"></i>
                            <span>EDITGURU.IN Studio</span>
                        </div>
                    </div>
                </div>

                <div>
                    <form id="main-contact-form" class="space-y-4">
                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <label class="block text-xs font-mono-code text-white/60 mb-1">YOUR NAME *</label>
                                <input type="text" name="name" required placeholder="John Doe" class="liquid-glass-input text-sm">
                            </div>
                            <div>
                                <label class="block text-xs font-mono-code text-white/60 mb-1">EMAIL ADDRESS *</label>
                                <input type="email" name="email" required placeholder="john@brand.com" class="liquid-glass-input text-sm">
                            </div>
                        </div>

                        <div>
                            <label class="block text-xs font-mono-code text-white/60 mb-1">PROJECT TYPE</label>
                            <select name="projectType" class="liquid-glass-input text-sm bg-black text-white">
                                <option value="Reels / Shorts Editing">Reels & Shorts Editing</option>
                                <option value="YouTube Long-Form Documentaries">YouTube Long-Form / Docs</option>
                                <option value="Commercial & Brand Ad">Commercial & Brand Ad</option>
                                <option value="Color Grading & Finishing">Color Grading & Finishing</option>
                                <option value="Motion Graphics & 3D">Motion Graphics & 3D VFX</option>
                            </select>
                        </div>

                        <div>
                            <label class="block text-xs font-mono-code text-white/60 mb-1">MESSAGE / GOALS *</label>
                            <textarea name="message" rows="4" required placeholder="Tell Vivek about your project..." class="liquid-glass-input text-sm"></textarea>
                        </div>

                        <div id="main-form-status" class="hidden text-sm p-3 rounded-xl"></div>

                        <button type="submit" class="w-full py-4 rounded-full bg-white text-black font-bold text-sm uppercase tracking-wider hover:bg-white/90 transition-all shadow-[0_0_25px_rgba(255,255,255,0.4)]">
                            Send Project Inquiry
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>

</main>

<?php
get_footer();
