<?php
/**
 * Front Page Template for EditGuru Theme
 *
 * @package EditGuru
 */

get_header();

// Default fallback projects array if no CPT posts have been published yet
$default_projects = array(
    array(
        'id' => 1,
        'title' => 'Midnight Tokyo - Cinematic Drift Film',
        'category' => 'Cinematic',
        'client' => 'Overdrive Media',
        'views' => '2.4M',
        'duration' => '02:40',
        'fps' => '60 FPS',
        'res' => '4K ProRes RAW',
        'tool' => 'DaVinci Resolve Studio',
        'desc' => 'High-octane night automotive film captured across Tokyo expressways. Engineered dynamic speed ramps locked to custom synthesizer sound design and a cinematic cyan-orange contrast grade.',
        'software' => array('DaVinci Resolve', 'Soundly', 'Dehancer Pro'),
        'video' => 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        'thumb' => 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    ),
    array(
        'id' => 2,
        'title' => 'Viral Reels Batch - 15M Retention System',
        'category' => 'Reels & Shorts',
        'client' => 'Creator Accelerator',
        'views' => '15.2M',
        'duration' => '00:54',
        'fps' => '60 FPS',
        'res' => '9:16 Vertical UHD',
        'tool' => 'Premiere Pro & After Effects',
        'desc' => 'Short-form algorithmic retention engineering with fast sound-punched B-roll cuts, custom motion kinetic typography, and seamless loop design for high replay value.',
        'software' => array('Premiere Pro', 'After Effects', 'Photoshop'),
        'video' => 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        'thumb' => 'https://images.unsplash.com/photo-1616469829941-c7200edec809?auto=format&fit=crop&w=1200&q=80',
    ),
    array(
        'id' => 3,
        'title' => 'Nordic Horizon - Cinematic Travelogue',
        'category' => 'Travel & Vlog',
        'client' => 'Wanderlust Expeditions',
        'views' => '840K',
        'duration' => '04:15',
        'fps' => '24 FPS',
        'res' => '4K DCI Cinema',
        'tool' => 'DaVinci Resolve',
        'desc' => 'Poetic documentary journey across Icelandic black sand beaches and fjords. Organic 35mm film grain emulation, ambient spatial soundscapes, and match-cut transitions.',
        'software' => array('DaVinci Resolve', 'FilmConvert', 'iZotope RX'),
        'video' => 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4',
        'thumb' => 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80',
    ),
    array(
        'id' => 4,
        'title' => 'Cybernetic Audio Gear - Commercial Launch',
        'category' => 'Commercial',
        'client' => 'Aether Acoustics',
        'views' => '1.1M',
        'duration' => '01:10',
        'fps' => '60 FPS',
        'res' => '4K ProRes 422 HQ',
        'tool' => 'Premiere Pro & Cinema 4D',
        'desc' => 'Minimalist dark-mode commercial combining high-speed studio macro camera movements with 3D product CAD exploded views and deep bass sound design.',
        'software' => array('Premiere Pro', 'After Effects', 'Cinema 4D'),
        'video' => 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
        'thumb' => 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80',
    ),
    array(
        'id' => 5,
        'title' => 'Apex Esports Championship - Hype Trailer',
        'category' => 'Motion FX',
        'client' => 'Rivalry Arena',
        'views' => '3.8M',
        'duration' => '01:30',
        'fps' => '60 FPS',
        'res' => '4K UHD',
        'tool' => 'After Effects & DaVinci',
        'desc' => 'High-velocity tournament promo utilizing custom glitch overlays, dynamic HUD motion tracking, 3D typography, and custom rhythmic sub-drop sound design.',
        'software' => array('After Effects', 'DaVinci Resolve', 'Blender'),
        'video' => 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
        'thumb' => 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
    ),
    array(
        'id' => 6,
        'title' => 'Urban Solitude - Independent Documentary',
        'category' => 'Documentaries',
        'client' => 'Indie Cinema Collective',
        'views' => '520K',
        'duration' => '08:40',
        'fps' => '24 FPS',
        'res' => '4K DCI Film Look',
        'tool' => 'DaVinci Resolve Studio',
        'desc' => 'Character-driven human story exploring metropolitan quietude at dawn. Emotive pacing, multi-track audio foley layering, and high dynamic range color grading.',
        'software' => array('DaVinci Resolve', 'Audition', 'Dehancer Pro'),
        'video' => 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
        'thumb' => 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1200&q=80',
    ),
);
?>

<main class="w-full overflow-hidden">
    <!-- HERO SECTION -->
    <section class="relative min-h-[90vh] flex flex-col items-center justify-center pt-28 sm:pt-36 pb-16 px-4 sm:px-6 w-full max-w-7xl mx-auto text-center">
        <!-- Ambient Background Glows -->
        <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[650px] h-[350px] sm:h-[650px] bg-white/[0.03] rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div class="absolute top-1/2 left-1/4 w-72 h-72 bg-white/[0.02] rounded-full blur-3xl pointer-events-none -z-10"></div>

        <!-- Eyebrow Pill -->
        <div class="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs font-mono tracking-widest text-white/60 uppercase mb-6 shadow-sm">
            <span class="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
            <span>VIDEO EDITOR • CREATOR • STORYTELLER</span>
        </div>

        <!-- Main Display Headline -->
        <h1 class="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-tighter uppercase max-w-6xl leading-[0.95] text-white">
            TURNING <span class="font-serif italic font-normal text-white">MOMENTS</span> INTO VISUAL STORIES.
        </h1>

        <!-- Subtitle -->
        <p class="mt-6 sm:mt-8 text-sm sm:text-lg md:text-xl text-white/50 max-w-2xl font-normal leading-relaxed">
            Precision cuts, cinematic rhythm, and immersive sound design. Crafting scroll-stopping reels, long-form YouTube stories, and brand films that captivate.
        </p>

        <!-- CTA Action Buttons -->
        <div class="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
            <a
                href="#work"
                class="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white text-black font-bold text-xs sm:text-sm tracking-widest uppercase hover:bg-white/90 transition-all flex items-center justify-center gap-2 shadow-xl cursor-pointer"
            >
                <span>EXPLORE MY WORK</span>
                <i data-lucide="arrow-down" class="w-4 h-4"></i>
            </a>

            <button
                type="button"
                class="open-contact-modal-trigger w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white/5 hover:bg-white/10 text-white font-medium text-xs sm:text-sm tracking-widest uppercase border border-white/15 transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
            >
                <span>START A PROJECT</span>
                <i data-lucide="sparkles" class="w-4 h-4 text-white/70"></i>
            </button>
        </div>

        <!-- STUDIO EDITING WORKSPACE MONITOR -->
        <div class="mt-12 sm:mt-16 w-full max-w-5xl mx-auto relative group">
            <div class="relative rounded-2xl sm:rounded-3xl p-2 sm:p-4 bg-white/5 border border-white/15 backdrop-blur-xl shadow-2xl overflow-hidden">
                <!-- Monitor Top Bar (EDL Header) -->
                <div class="flex items-center justify-between px-3 py-2 border-b border-white/10 mb-2 sm:mb-3 text-[10px] sm:text-xs font-mono text-white/40">
                    <div class="flex items-center gap-2">
                        <span class="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block"></span>
                        <span class="text-white/80 font-medium">EDITGURU_SEQUENCE_MASTER_01.prproj</span>
                    </div>
                    <div class="hidden sm:flex items-center gap-4">
                        <span>4K UHD 60FPS</span>
                        <span>•</span>
                        <span>COLOR: REC.709 DCI-P3</span>
                    </div>
                </div>

                <!-- Video Canvas -->
                <div class="relative aspect-video w-full rounded-xl sm:rounded-2xl overflow-hidden bg-black border border-white/10 shadow-inner">
                    <video
                        id="hero-video-element"
                        src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
                        poster="https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1600&q=80"
                        playsinline
                        muted
                        loop
                        class="w-full h-full object-cover transition-all duration-500"
                    ></video>

                    <!-- Ungraded Indicator Tag -->
                    <div id="hero-ungraded-indicator" class="hidden absolute top-3 sm:top-4 left-3 sm:left-4 z-20 px-2.5 py-0.5 sm:py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs font-mono text-zinc-300">
                        RAW LOG FLAT PROFILE
                    </div>

                    <!-- Video Controls Bar -->
                    <div class="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between z-20">
                        <div class="flex items-center gap-1.5 sm:gap-2">
                            <button
                                id="hero-play-btn"
                                type="button"
                                class="w-8 h-8 sm:w-10 sm:h-10 rounded-full liquid-glass border border-white/30 text-white flex items-center justify-center hover:scale-105 transition-all shadow-md cursor-pointer"
                            >
                                <i data-lucide="play" class="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white translate-x-0.5" id="hero-play-icon"></i>
                            </button>
                            <button
                                id="hero-mute-btn"
                                type="button"
                                class="w-8 h-8 sm:w-10 sm:h-10 rounded-full liquid-glass border border-white/30 text-white flex items-center justify-center hover:scale-105 transition-all shadow-md cursor-pointer"
                            >
                                <i data-lucide="volume-x" class="w-3.5 h-3.5 sm:w-4 sm:h-4" id="hero-mute-icon"></i>
                            </button>
                            <span class="text-[11px] font-mono text-white/70 hidden sm:inline ml-1" id="hero-timecode">
                                00:01:24:18
                            </span>
                        </div>

                        <!-- Color Grade Toggle -->
                        <button
                            id="hero-grade-toggle-btn"
                            type="button"
                            class="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-mono transition-all border bg-white/20 border-white/40 text-white font-medium shadow-md cursor-pointer"
                        >
                            <i data-lucide="sliders" class="w-3 h-3 sm:w-3.5 sm:h-3.5"></i>
                            <span id="hero-grade-label">Cinema Grade</span>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Mobile Badges Grid -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mt-4 md:hidden">
                <div class="p-3 rounded-2xl bg-white/5 border border-white/10 text-left">
                    <div class="text-[9px] uppercase tracking-widest text-white/40">Specialty</div>
                    <div class="text-xs sm:text-sm font-medium text-white mt-0.5">Cinematic Stories</div>
                </div>
                <div class="p-3 rounded-2xl bg-white/5 border border-white/10 text-left">
                    <div class="text-[9px] uppercase tracking-widest text-white/40">Expertise</div>
                    <div class="text-xs sm:text-sm font-medium text-white mt-0.5">Reels & Shorts</div>
                </div>
                <div class="p-3 rounded-2xl bg-white/5 border border-white/10 text-left">
                    <div class="text-[9px] uppercase tracking-widest text-white/40">Service</div>
                    <div class="text-xs sm:text-sm font-medium text-white mt-0.5">Video Editing</div>
                </div>
                <div class="p-3 rounded-2xl bg-white/5 border border-white/10 text-left">
                    <div class="text-[9px] uppercase tracking-widest text-white/40">Vision</div>
                    <div class="text-xs sm:text-sm font-medium text-white mt-0.5">Content Creation</div>
                </div>
            </div>
        </div>
    </section>

    <!-- CREATOR STATS SECTION -->
    <section id="stats" class="relative py-12 sm:py-20 px-4 sm:px-6 w-full max-w-7xl mx-auto">
        <div class="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <span class="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-white/50 uppercase block mb-2">
                VERIFIED PERFORMANCE
            </span>
            <h2 class="text-2xl sm:text-4xl md:text-5xl font-light tracking-tight text-white uppercase">
                THE TIMELINE <span class="font-serif italic font-normal text-white">IN NUMBERS</span>
            </h2>
        </div>

        <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            <div class="relative rounded-2xl sm:rounded-3xl p-4 sm:p-7 border bg-white/5 backdrop-blur-xl border-white/10 shadow-xl text-left">
                <div class="flex items-center justify-between mb-2 sm:mb-4">
                    <span class="text-[10px] sm:text-[11px] font-mono text-white/40 uppercase tracking-widest">01 // STAT</span>
                    <i data-lucide="sparkles" class="w-3.5 h-3.5 text-white/30"></i>
                </div>
                <div class="my-1 sm:my-2">
                    <span class="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white">200+</span>
                </div>
                <div class="mt-2 pt-2.5 sm:pt-3 border-t border-white/10 flex flex-col">
                    <span class="font-medium text-xs sm:text-base text-white/90 truncate">Videos Edited</span>
                    <span class="text-[10px] sm:text-xs text-white/50 font-normal mt-0.5 truncate">Across YouTube & Reels</span>
                </div>
            </div>

            <div class="relative rounded-2xl sm:rounded-3xl p-4 sm:p-7 border bg-white/5 backdrop-blur-xl border-white/10 shadow-xl text-left">
                <div class="flex items-center justify-between mb-2 sm:mb-4">
                    <span class="text-[10px] sm:text-[11px] font-mono text-white/40 uppercase tracking-widest">02 // STAT</span>
                    <i data-lucide="sparkles" class="w-3.5 h-3.5 text-white/30"></i>
                </div>
                <div class="my-1 sm:my-2">
                    <span class="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white">15M+</span>
                </div>
                <div class="mt-2 pt-2.5 sm:pt-3 border-t border-white/10 flex flex-col">
                    <span class="font-medium text-xs sm:text-base text-white/90 truncate">Organic Views</span>
                    <span class="text-[10px] sm:text-xs text-white/50 font-normal mt-0.5 truncate">Audience Reach</span>
                </div>
            </div>

            <div class="relative rounded-2xl sm:rounded-3xl p-4 sm:p-7 border bg-white/5 backdrop-blur-xl border-white/10 shadow-xl text-left">
                <div class="flex items-center justify-between mb-2 sm:mb-4">
                    <span class="text-[10px] sm:text-[11px] font-mono text-white/40 uppercase tracking-widest">03 // STAT</span>
                    <i data-lucide="sparkles" class="w-3.5 h-3.5 text-white/30"></i>
                </div>
                <div class="my-1 sm:my-2">
                    <span class="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white">99.4%</span>
                </div>
                <div class="mt-2 pt-2.5 sm:pt-3 border-t border-white/10 flex flex-col">
                    <span class="font-medium text-xs sm:text-base text-white/90 truncate">Client Retention</span>
                    <span class="text-[10px] sm:text-xs text-white/50 font-normal mt-0.5 truncate">Repeat Collaborations</span>
                </div>
            </div>

            <div class="relative rounded-2xl sm:rounded-3xl p-4 sm:p-7 border bg-white/5 backdrop-blur-xl border-white/10 shadow-xl text-left">
                <div class="flex items-center justify-between mb-2 sm:mb-4">
                    <span class="text-[10px] sm:text-[11px] font-mono text-white/40 uppercase tracking-widest">04 // STAT</span>
                    <i data-lucide="sparkles" class="w-3.5 h-3.5 text-white/30"></i>
                </div>
                <div class="my-1 sm:my-2">
                    <span class="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white">48h</span>
                </div>
                <div class="mt-2 pt-2.5 sm:pt-3 border-t border-white/10 flex flex-col">
                    <span class="font-medium text-xs sm:text-base text-white/90 truncate">Average Turnaround</span>
                    <span class="text-[10px] sm:text-xs text-white/50 font-normal mt-0.5 truncate">First Draft Velocity</span>
                </div>
            </div>
        </div>
    </section>

    <!-- SELECTED WORK / PORTFOLIO SECTION -->
    <section id="work" class="relative py-16 sm:py-24 px-4 sm:px-6 w-full max-w-7xl mx-auto">
        <div class="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
            <span class="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-white/50 uppercase block mb-2">
                PORTFOLIO CATALOG
            </span>
            <h2 class="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-white uppercase">
                SELECTED <span class="font-serif italic font-normal text-white">WORK</span>
            </h2>
            <p class="mt-3 sm:mt-4 text-sm sm:text-lg text-white/50 font-normal leading-relaxed">
                A curated showcase of commercial edits, YouTube retention masterclasses, and cinematic reels.
            </p>

            <!-- Category Filter Tabs -->
            <div class="mt-6 sm:mt-10 flex overflow-x-auto no-scrollbar sm:flex-wrap items-center justify-start sm:justify-center gap-1.5 p-1.5 rounded-2xl sm:rounded-full bg-white/5 backdrop-blur-xl border border-white/10 max-w-full sm:max-w-fit mx-auto shadow-lg" id="portfolio-filter-tabs">
                <button type="button" data-filter="all" class="portfolio-filter-btn px-3.5 sm:px-4 py-2 rounded-full text-xs whitespace-nowrap transition-all cursor-pointer bg-white text-black font-bold uppercase tracking-wider shadow-md">
                    All Projects
                </button>
                <button type="button" data-filter="Cinematic" class="portfolio-filter-btn px-3.5 sm:px-4 py-2 rounded-full text-xs whitespace-nowrap transition-all cursor-pointer text-white/60 hover:text-white font-medium">
                    Cinematic
                </button>
                <button type="button" data-filter="Reels & Shorts" class="portfolio-filter-btn px-3.5 sm:px-4 py-2 rounded-full text-xs whitespace-nowrap transition-all cursor-pointer text-white/60 hover:text-white font-medium">
                    Reels & Shorts
                </button>
                <button type="button" data-filter="Travel & Vlog" class="portfolio-filter-btn px-3.5 sm:px-4 py-2 rounded-full text-xs whitespace-nowrap transition-all cursor-pointer text-white/60 hover:text-white font-medium">
                    Travel & Vlog
                </button>
                <button type="button" data-filter="Commercial" class="portfolio-filter-btn px-3.5 sm:px-4 py-2 rounded-full text-xs whitespace-nowrap transition-all cursor-pointer text-white/60 hover:text-white font-medium">
                    Commercial
                </button>
                <button type="button" data-filter="Motion FX" class="portfolio-filter-btn px-3.5 sm:px-4 py-2 rounded-full text-xs whitespace-nowrap transition-all cursor-pointer text-white/60 hover:text-white font-medium">
                    Motion FX
                </button>
                <button type="button" data-filter="Documentaries" class="portfolio-filter-btn px-3.5 sm:px-4 py-2 rounded-full text-xs whitespace-nowrap transition-all cursor-pointer text-white/60 hover:text-white font-medium">
                    Documentaries
                </button>
            </div>
        </div>

        <!-- Portfolio Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8" id="portfolio-projects-grid">
            <?php
            // Check if WordPress has published projects
            $project_query = new WP_Query(array(
                'post_type'      => 'project',
                'posts_per_page' => 12,
                'post_status'    => 'publish',
            ));

            if ($project_query->have_posts()) :
                while ($project_query->have_posts()) : $project_query->the_post();
                    $terms = get_the_terms(get_the_ID(), 'project_category');
                    $cat_name = (!empty($terms) && !is_wp_error($terms)) ? $terms[0]->name : 'Cinematic';
                    $client = get_post_meta(get_the_ID(), '_editguru_client', true);
                    $video = get_post_meta(get_the_ID(), '_editguru_video_url', true);
                    $views = get_post_meta(get_the_ID(), '_editguru_views', true);
                    $duration = get_post_meta(get_the_ID(), '_editguru_duration', true);
                    $res = get_post_meta(get_the_ID(), '_editguru_resolution', true);
                    $software_str = get_post_meta(get_the_ID(), '_editguru_software', true);
                    $thumb_url = get_the_post_thumbnail_url(get_the_ID(), 'large');
                    if (!$thumb_url) {
                        $thumb_url = 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80';
                    }
                    ?>
                    <div
                        class="project-card group relative rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden shadow-2xl flex flex-col justify-between cursor-pointer"
                        data-category="<?php echo esc_attr($cat_name); ?>"
                        data-title="<?php echo esc_attr(get_the_title()); ?>"
                        data-client="<?php echo esc_attr($client ? $client : 'Independent Project'); ?>"
                        data-desc="<?php echo esc_attr(get_the_excerpt()); ?>"
                        data-video="<?php echo esc_url($video); ?>"
                        data-views="<?php echo esc_attr($views ? $views : 'Featured Edit'); ?>"
                        data-duration="<?php echo esc_attr($duration ? $duration : '02:00'); ?>"
                        data-fps="60 FPS"
                        data-res="<?php echo esc_attr($res ? $res : '4K UHD'); ?>"
                        data-tool="DaVinci Resolve Studio"
                        data-software="<?php echo esc_attr($software_str ? $software_str : 'DaVinci Resolve, Premiere Pro'); ?>"
                    >
                        <!-- Card Thumbnail Presentation -->
                        <div class="relative aspect-video w-full overflow-hidden bg-black/60">
                            <img
                                src="<?php echo esc_url($thumb_url); ?>"
                                alt="<?php echo esc_attr(get_the_title()); ?>"
                                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-90 group-hover:brightness-100"
                            >
                            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>

                            <!-- Category Badge -->
                            <div class="absolute top-3 sm:top-4 left-3 sm:left-4 z-10 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] font-mono uppercase text-white/90">
                                <?php echo esc_html($cat_name); ?>
                            </div>

                            <!-- Play Icon Hover Reveal -->
                            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div class="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-2xl transform scale-90 group-hover:scale-100 transition-transform">
                                    <i data-lucide="play" class="w-5 h-5 fill-black translate-x-0.5"></i>
                                </div>
                            </div>
                        </div>

                        <!-- Card Content Information -->
                        <div class="p-5 sm:p-6 flex flex-col justify-between flex-grow">
                            <div>
                                <div class="flex items-center justify-between text-[11px] font-mono text-white/40 mb-1.5">
                                    <span><?php echo esc_html($client ? $client : 'DIRECTOR’S CUT'); ?></span>
                                    <span><?php echo esc_html($views ? $views : '4K MASTER'); ?></span>
                                </div>
                                <h3 class="text-lg sm:text-xl font-bold text-white group-hover:text-white/90 transition-colors line-clamp-1">
                                    <?php the_title(); ?>
                                </h3>
                                <p class="mt-2 text-xs sm:text-sm text-white/50 line-clamp-2 leading-relaxed font-normal">
                                    <?php echo esc_html(get_the_excerpt()); ?>
                                </p>
                            </div>

                            <div class="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                                <span class="text-xs text-white/40 font-mono">Specs: <?php echo esc_html($res ? $res : '4K UHD'); ?></span>
                                <span class="text-xs font-bold text-white flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                    View Edit <i data-lucide="arrow-up-right" class="w-3.5 h-3.5"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <?php
                endwhile;
                wp_reset_postdata();
            else :
                // Render fallback projects array so the portfolio shines out of the box!
                foreach ($default_projects as $proj) :
                    ?>
                    <div
                        class="project-card group relative rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden shadow-2xl flex flex-col justify-between cursor-pointer"
                        data-category="<?php echo esc_attr($proj['category']); ?>"
                        data-title="<?php echo esc_attr($proj['title']); ?>"
                        data-client="<?php echo esc_attr($proj['client']); ?>"
                        data-desc="<?php echo esc_attr($proj['desc']); ?>"
                        data-video="<?php echo esc_url($proj['video']); ?>"
                        data-views="<?php echo esc_attr($proj['views']); ?>"
                        data-duration="<?php echo esc_attr($proj['duration']); ?>"
                        data-fps="<?php echo esc_attr($proj['fps']); ?>"
                        data-res="<?php echo esc_attr($proj['res']); ?>"
                        data-tool="<?php echo esc_attr($proj['tool']); ?>"
                        data-software="<?php echo esc_attr(implode(', ', $proj['software'])); ?>"
                    >
                        <div class="relative aspect-video w-full overflow-hidden bg-black/60">
                            <img
                                src="<?php echo esc_url($proj['thumb']); ?>"
                                alt="<?php echo esc_attr($proj['title']); ?>"
                                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-90 group-hover:brightness-100"
                            >
                            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>

                            <div class="absolute top-3 sm:top-4 left-3 sm:left-4 z-10 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] font-mono uppercase text-white/90">
                                <?php echo esc_html($proj['category']); ?>
                            </div>

                            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div class="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-2xl transform scale-90 group-hover:scale-100 transition-transform">
                                    <i data-lucide="play" class="w-5 h-5 fill-black translate-x-0.5"></i>
                                </div>
                            </div>
                        </div>

                        <div class="p-5 sm:p-6 flex flex-col justify-between flex-grow">
                            <div>
                                <div class="flex items-center justify-between text-[11px] font-mono text-white/40 mb-1.5">
                                    <span><?php echo esc_html($proj['client']); ?></span>
                                    <span><?php echo esc_html($proj['views']); ?></span>
                                </div>
                                <h3 class="text-lg sm:text-xl font-bold text-white group-hover:text-white/90 transition-colors line-clamp-1">
                                    <?php echo esc_html($proj['title']); ?>
                                </h3>
                                <p class="mt-2 text-xs sm:text-sm text-white/50 line-clamp-2 leading-relaxed font-normal">
                                    <?php echo esc_html($proj['desc']); ?>
                                </p>
                            </div>

                            <div class="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                                <span class="text-xs text-white/40 font-mono">Specs: <?php echo esc_html($proj['res']); ?></span>
                                <span class="text-xs font-bold text-white flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                    View Edit <i data-lucide="arrow-up-right" class="w-3.5 h-3.5"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <?php
                endforeach;
            endif;
            ?>
        </div>
    </section>

    <!-- BEHIND THE EDIT / ABOUT SECTION -->
    <section id="about" class="relative py-16 sm:py-28 px-4 sm:px-6 w-full max-w-6xl mx-auto">
        <div class="relative rounded-3xl bg-white/5 backdrop-blur-xl p-5 sm:p-10 md:p-14 border border-white/10 shadow-2xl overflow-hidden">
            <!-- Header Tag -->
            <div class="flex items-center gap-2 mb-4 sm:mb-6">
                <div class="w-2 h-2 rounded-full bg-white/40"></div>
                <span class="text-[10px] sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase text-white/50">
                    THE ARCHITECT OF THE TIMELINE
                </span>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-12 items-center">
                <!-- Profile Visual -->
                <div class="lg:col-span-5 relative flex flex-col items-center">
                    <div class="relative w-full max-w-[260px] sm:max-w-none sm:w-72 aspect-[3/4] sm:h-96 rounded-3xl overflow-hidden bg-white/5 border border-white/15 p-2 shadow-2xl group">
                        <img
                            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80"
                            alt="Vivek - Video Editor & Creator"
                            class="w-full h-full object-cover rounded-2xl grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
                        >
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-2xl pointer-events-none"></div>

                        <div class="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 bg-white/10 backdrop-blur-xl p-2.5 sm:p-3 rounded-2xl border border-white/20">
                            <div class="flex items-center justify-between">
                                <div>
                                    <h4 class="text-sm font-bold text-white tracking-wide">VIVEK</h4>
                                    <p class="text-[10px] sm:text-[11px] font-mono text-white/50">FOUNDER • EDITGURU.IN</p>
                                </div>
                                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                            </div>
                        </div>
                    </div>

                    <div class="mt-3 sm:mt-4 flex items-center justify-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs text-white/60 text-center max-w-full">
                        <i data-lucide="award" class="w-3.5 h-3.5 text-white/70 flex-shrink-0"></i>
                        <span>Colorist • Sound Designer • Storyteller</span>
                    </div>
                </div>

                <!-- Narrative Content -->
                <div class="lg:col-span-7 flex flex-col items-start text-left">
                    <h2 class="text-2xl sm:text-5xl tracking-tight text-white uppercase font-light leading-tight">
                        BEHIND <span class="font-serif italic font-normal text-white">THE EDIT</span>
                    </h2>

                    <blockquote class="mt-4 sm:mt-5 text-base sm:text-xl md:text-2xl text-white/90 font-serif italic leading-relaxed border-l-2 border-white/30 pl-3 sm:pl-4 py-1">
                        "Every video has a story. My goal is to transform ideas into visuals that connect, inspire and leave an impact."
                    </blockquote>

                    <p class="mt-4 sm:mt-6 text-xs sm:text-base text-white/50 font-normal leading-relaxed">
                        I am Vivek, a passionate filmmaker, digital creator, and video editor specializing in rhythm-driven storytelling. Over the past three years, I’ve collaborated with YouTube channels, tech brands, esports athletes, and indie creators to turn scattered rushes into compelling, high-retention visual pieces.
                    </p>

                    <p class="mt-2.5 sm:mt-3 text-xs sm:text-base text-white/50 font-normal leading-relaxed">
                        Video editing isn’t just cutting clips—it’s micro-tuning the emotional heartbeat of every transition, foley layer, and color grade until the audience is completely immersed.
                    </p>

                    <!-- Feature Tags -->
                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 my-5 sm:my-6 w-full">
                        <div class="p-3 sm:p-3.5 rounded-2xl bg-white/5 border border-white/10">
                            <i data-lucide="film" class="w-4 h-4 text-white/80 mb-1.5"></i>
                            <div class="text-xs font-semibold text-white">Rhythmic Pacing</div>
                            <div class="text-[10px] sm:text-[11px] text-white/40">Locked to audio beats</div>
                        </div>
                        <div class="p-3 sm:p-3.5 rounded-2xl bg-white/5 border border-white/10">
                            <i data-lucide="audio-waveform" class="w-4 h-4 text-white/80 mb-1.5"></i>
                            <div class="text-xs font-semibold text-white">Spatial Sound</div>
                            <div class="text-[10px] sm:text-[11px] text-white/40">Multi-layer foley & risers</div>
                        </div>
                        <div class="p-3 sm:p-3.5 rounded-2xl bg-white/5 border border-white/10 col-span-2 sm:col-span-1">
                            <i data-lucide="palette" class="w-4 h-4 text-white/80 mb-1.5"></i>
                            <div class="text-xs font-semibold text-white">Color Emotive</div>
                            <div class="text-[10px] sm:text-[11px] text-white/40">Custom film print looks</div>
                        </div>
                    </div>

                    <button
                        type="button"
                        class="open-contact-modal-trigger px-6 py-3 rounded-full bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-white/90 transition-all flex items-center gap-2 shadow-xl cursor-pointer"
                    >
                        <span>Collaborate with Vivek</span>
                        <i data-lucide="arrow-right" class="w-4 h-4"></i>
                    </button>
                </div>
            </div>
        </div>
    </section>

    <!-- CREATIVE CAPABILITIES / SERVICES SECTION -->
    <section id="services" class="relative py-16 sm:py-28 px-4 sm:px-6 w-full max-w-7xl mx-auto">
        <div class="text-center max-w-3xl mx-auto mb-10 sm:mb-18">
            <span class="text-[10px] sm:text-xs font-bold tracking-[0.25em] sm:tracking-[0.3em] text-white/50 uppercase block mb-2">
                CREATIVE CAPABILITIES
            </span>
            <h2 class="text-2xl sm:text-5xl md:text-6xl font-light tracking-tight text-white uppercase">
                WHAT <span class="font-serif italic font-normal text-white">I CREATE</span>
            </h2>
            <p class="mt-3 sm:mt-4 text-sm sm:text-lg text-white/50 font-normal leading-relaxed">
                Tailored post-production solutions crafted for engagement, cinematic immersion, and brand growth.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            <!-- 1. Cinematic Video Editing -->
            <div class="group relative rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 p-5 sm:p-8 flex flex-col justify-between shadow-2xl overflow-hidden">
                <div>
                    <div class="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                        <i data-lucide="film" class="w-5 h-5"></i>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-3 tracking-tight">Cinematic Video Editing</h3>
                    <p class="text-sm text-white/50 leading-relaxed font-normal mb-6">
                        Full-narrative cutting with micro-tuned timing, scene pacing, seamless match-cuts, and emotional storytelling designed for maximum audience immersion.
                    </p>
                    <ul class="space-y-2 mb-8">
                        <li class="flex items-center gap-2 text-xs text-white/70">
                            <i data-lucide="check" class="w-3.5 h-3.5 text-white/80"></i> Multi-cam syncing & assembly
                        </li>
                        <li class="flex items-center gap-2 text-xs text-white/70">
                            <i data-lucide="check" class="w-3.5 h-3.5 text-white/80"></i> Pacing optimization & retention curves
                        </li>
                        <li class="flex items-center gap-2 text-xs text-white/70">
                            <i data-lucide="check" class="w-3.5 h-3.5 text-white/80"></i> 4K ProRes DCI Master outputs
                        </li>
                    </ul>
                </div>
                <button type="button" class="open-contact-modal-trigger w-full py-2.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-xs font-mono uppercase tracking-widest text-white/80 hover:text-white transition-all text-center">
                    Inquire Service
                </button>
            </div>

            <!-- 2. Reels & Viral Shorts -->
            <div class="group relative rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 p-5 sm:p-8 flex flex-col justify-between shadow-2xl overflow-hidden">
                <div>
                    <div class="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                        <i data-lucide="smartphone" class="w-5 h-5"></i>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-3 tracking-tight">Reels & Viral Shorts</h3>
                    <p class="text-sm text-white/50 leading-relaxed font-normal mb-6">
                        Engineered for social algorithms. Hook-first pacing, dynamic subtitle styling, sound drops, and visual pop designed to stop the infinite scroll.
                    </p>
                    <ul class="space-y-2 mb-8">
                        <li class="flex items-center gap-2 text-xs text-white/70">
                            <i data-lucide="check" class="w-3.5 h-3.5 text-white/80"></i> 3-second hook optimization
                        </li>
                        <li class="flex items-center gap-2 text-xs text-white/70">
                            <i data-lucide="check" class="w-3.5 h-3.5 text-white/80"></i> Kinetic captions & emojis
                        </li>
                        <li class="flex items-center gap-2 text-xs text-white/70">
                            <i data-lucide="check" class="w-3.5 h-3.5 text-white/80"></i> 9:16 vertical high-framerate exports
                        </li>
                    </ul>
                </div>
                <button type="button" class="open-contact-modal-trigger w-full py-2.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-xs font-mono uppercase tracking-widest text-white/80 hover:text-white transition-all text-center">
                    Inquire Service
                </button>
            </div>

            <!-- 3. Advanced Color Grading -->
            <div class="group relative rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 p-5 sm:p-8 flex flex-col justify-between shadow-2xl overflow-hidden">
                <div>
                    <div class="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                        <i data-lucide="sliders" class="w-5 h-5"></i>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-3 tracking-tight">Color Grading & Finishing</h3>
                    <p class="text-sm text-white/50 leading-relaxed font-normal mb-6">
                        Transforming flat camera log into rich, filmic palettes. Skin tone recovery, film emulation (Kodak/Fuji grain), and calibrated Rec.709 conversions.
                    </p>
                    <ul class="space-y-2 mb-8">
                        <li class="flex items-center gap-2 text-xs text-white/70">
                            <i data-lucide="check" class="w-3.5 h-3.5 text-white/80"></i> DaVinci Resolve 10-bit pipeline
                        </li>
                        <li class="flex items-center gap-2 text-xs text-white/70">
                            <i data-lucide="check" class="w-3.5 h-3.5 text-white/80"></i> Shot-to-shot color balance matching
                        </li>
                        <li class="flex items-center gap-2 text-xs text-white/70">
                            <i data-lucide="check" class="w-3.5 h-3.5 text-white/80"></i> Halation, bloom & 35mm grain passes
                        </li>
                    </ul>
                </div>
                <button type="button" class="open-contact-modal-trigger w-full py-2.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-xs font-mono uppercase tracking-widest text-white/80 hover:text-white transition-all text-center">
                    Inquire Service
                </button>
            </div>

            <!-- 4. Dynamic Motion Graphics -->
            <div class="group relative rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 p-5 sm:p-8 flex flex-col justify-between shadow-2xl overflow-hidden">
                <div>
                    <div class="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                        <i data-lucide="sparkles" class="w-5 h-5"></i>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-3 tracking-tight">Dynamic Motion Graphics</h3>
                    <p class="text-sm text-white/50 leading-relaxed font-normal mb-6">
                        Custom typography animations, HUD elements, lower thirds, seamless title sequences, and graphic callouts that clarify complex ideas.
                    </p>
                    <ul class="space-y-2 mb-8">
                        <li class="flex items-center gap-2 text-xs text-white/70">
                            <i data-lucide="check" class="w-3.5 h-3.5 text-white/80"></i> After Effects 2D/3D compositing
                        </li>
                        <li class="flex items-center gap-2 text-xs text-white/70">
                            <i data-lucide="check" class="w-3.5 h-3.5 text-white/80"></i> Custom brand intros & stings
                        </li>
                        <li class="flex items-center gap-2 text-xs text-white/70">
                            <i data-lucide="check" class="w-3.5 h-3.5 text-white/80"></i> Animated data visualizations
                        </li>
                    </ul>
                </div>
                <button type="button" class="open-contact-modal-trigger w-full py-2.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-xs font-mono uppercase tracking-widest text-white/80 hover:text-white transition-all text-center">
                    Inquire Service
                </button>
            </div>

            <!-- 5. Sound Design & Foley -->
            <div class="group relative rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 p-5 sm:p-8 flex flex-col justify-between shadow-2xl overflow-hidden">
                <div>
                    <div class="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                        <i data-lucide="audio-waveform" class="w-5 h-5"></i>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-3 tracking-tight">Sound Design & Spatial Mix</h3>
                    <p class="text-sm text-white/50 leading-relaxed font-normal mb-6">
                        Audio is 50% of the visual experience. Multi-layer foley, whooshes, risers, dialogue denoising, and audio ducking for crisp intelligibility.
                    </p>
                    <ul class="space-y-2 mb-8">
                        <li class="flex items-center gap-2 text-xs text-white/70">
                            <i data-lucide="check" class="w-3.5 h-3.5 text-white/80"></i> Dialogue clean-up & de-noise (iZotope)
                        </li>
                        <li class="flex items-center gap-2 text-xs text-white/70">
                            <i data-lucide="check" class="w-3.5 h-3.5 text-white/80"></i> Deep cinematic bass hits & risers
                        </li>
                        <li class="flex items-center gap-2 text-xs text-white/70">
                            <i data-lucide="check" class="w-3.5 h-3.5 text-white/80"></i> Balanced LUFS mastering for web
                        </li>
                    </ul>
                </div>
                <button type="button" class="open-contact-modal-trigger w-full py-2.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-xs font-mono uppercase tracking-widest text-white/80 hover:text-white transition-all text-center">
                    Inquire Service
                </button>
            </div>

            <!-- 6. Commercial & Brand Films -->
            <div class="group relative rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 p-5 sm:p-8 flex flex-col justify-between shadow-2xl overflow-hidden">
                <div>
                    <div class="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                        <i data-lucide="video" class="w-5 h-5"></i>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-3 tracking-tight">Commercial & Brand Films</h3>
                    <p class="text-sm text-white/50 leading-relaxed font-normal mb-6">
                        Premium brand commercials, investor pitch videos, product launch reels, and high-production case studies that drive sales and prestige.
                    </p>
                    <ul class="space-y-2 mb-8">
                        <li class="flex items-center gap-2 text-xs text-white/70">
                            <i data-lucide="check" class="w-3.5 h-3.5 text-white/80"></i> Brand guidelines synchronization
                        </li>
                        <li class="flex items-center gap-2 text-xs text-white/70">
                            <i data-lucide="check" class="w-3.5 h-3.5 text-white/80"></i> Multi-aspect delivery (16:9, 1:1, 9:16)
                        </li>
                        <li class="flex items-center gap-2 text-xs text-white/70">
                            <i data-lucide="check" class="w-3.5 h-3.5 text-white/80"></i> High-speed review iterations
                        </li>
                    </ul>
                </div>
                <button type="button" class="open-contact-modal-trigger w-full py-2.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-xs font-mono uppercase tracking-widest text-white/80 hover:text-white transition-all text-center">
                    Inquire Service
                </button>
            </div>
        </div>
    </section>

    <!-- FINAL CALL TO ACTION SECTION -->
    <section id="contact-cta" class="relative py-16 sm:py-28 px-4 sm:px-6 w-full max-w-6xl mx-auto">
        <div class="relative rounded-3xl sm:rounded-[40px] bg-white/5 backdrop-blur-xl p-6 sm:p-14 md:p-20 border border-white/10 shadow-2xl overflow-hidden text-center flex flex-col items-center justify-center group">
            <div class="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none group-hover:bg-white/10 transition-all duration-700"></div>

            <div class="mb-4 sm:mb-6">
                <span class="text-[10px] sm:text-xs font-bold tracking-[0.25em] sm:tracking-[0.3em] text-white/50 uppercase">
                    NOW ACCEPTING NEW COMMISSIONS
                </span>
            </div>

            <h2 class="text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white uppercase max-w-3xl leading-[1.08] sm:leading-[1.05]">
                LET'S CREATE <span class="font-serif italic font-normal text-white">SOMETHING GREAT</span>
            </h2>

            <p class="mt-3 sm:mt-5 text-sm sm:text-lg md:text-xl text-white/50 font-normal max-w-2xl leading-relaxed">
                Have an idea or project? Let's turn it into a powerful visual story.
            </p>

            <div class="mt-6 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <button
                    type="button"
                    class="open-contact-modal-trigger w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-white text-black font-bold text-xs sm:text-sm tracking-widest uppercase hover:bg-white/90 transition-all shadow-xl flex items-center justify-center gap-2.5 group cursor-pointer"
                >
                    <span>CONTACT ME</span>
                    <i data-lucide="send" class="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"></i>
                </button>
            </div>

            <div class="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/10 w-full max-w-md flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-2 text-[10px] sm:text-xs text-white/40 font-mono">
                <span>AVERAGE RESPONSE: &lt; 12 HRS</span>
                <span class="text-white/20 hidden sm:inline">•</span>
                <span>DIRECT EDITORIAL ACCESS</span>
            </div>
        </div>
    </section>
</main>

<?php
get_footer();
