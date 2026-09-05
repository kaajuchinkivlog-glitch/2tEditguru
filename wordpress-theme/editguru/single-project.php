<?php
/**
 * The Single Project Template for EditGuru Theme
 * EDITGURU.IN
 *
 * @package EditGuru
 */

get_header();

$client     = get_post_meta(get_the_ID(), '_editguru_client', true);
$video_url  = get_post_meta(get_the_ID(), '_editguru_video_url', true);
$youtube_id = get_post_meta(get_the_ID(), '_editguru_youtube_id', true);
$views      = get_post_meta(get_the_ID(), '_editguru_views', true);
$duration   = get_post_meta(get_the_ID(), '_editguru_duration', true);
$software   = get_post_meta(get_the_ID(), '_editguru_software', true);
$resolution = get_post_meta(get_the_ID(), '_editguru_resolution', true);
$showreel   = get_theme_mod('editguru_hero_showreel_url', 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4');
?>

<main id="primary" class="site-main py-12 container mx-auto px-4">

    <?php while (have_posts()) : the_post(); ?>

    <article id="post-<?php the_ID(); ?>" <?php post_class('space-y-8'); ?>>
        <!-- Top Title & Specs Header -->
        <div class="space-y-4">
            <div class="flex flex-wrap items-center gap-3 text-xs font-mono-code text-white/50">
                <span>CLIENT: <strong class="text-white"><?php echo esc_html($client ? $client : 'EDITGURU Client'); ?></strong></span>
                <span>•</span>
                <span>DURATION: <strong class="text-white"><?php echo esc_html($duration ? $duration : '02:30'); ?></strong></span>
                <span>•</span>
                <span>MASTER: <strong class="text-white"><?php echo esc_html($resolution ? $resolution : '4K 60FPS'); ?></strong></span>
                <?php if ($views): ?>
                <span>•</span>
                <span class="text-amber-400 font-bold">🔥 <?php echo esc_html($views); ?></span>
                <?php endif; ?>
            </div>

            <h1 class="font-display font-extrabold text-3xl sm:text-5xl text-white"><?php the_title(); ?></h1>
        </div>

        <!-- Video Player Display -->
        <div class="liquid-glass-heavy rounded-3xl p-4 border border-white/20 overflow-hidden shadow-2xl">
            <div class="aspect-video w-full rounded-2xl overflow-hidden bg-black relative">
                <?php if ($youtube_id): ?>
                <iframe src="https://www.youtube.com/embed/<?php echo esc_attr($youtube_id); ?>?autoplay=1&mute=0" class="w-full h-full border-0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <?php else: ?>
                <video controls autoplay class="w-full h-full object-cover">
                    <source src="<?php echo esc_url($video_url ? $video_url : $showreel); ?>" type="video/mp4">
                    Your browser does not support HTML5 video.
                </video>
                <?php endif; ?>
            </div>
        </div>

        <!-- Details Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
            <div class="md:col-span-2 space-y-6 liquid-glass rounded-3xl p-8 border border-white/10">
                <h3 class="text-xl font-bold text-white">Project Case Study & Breakdown</h3>
                <div class="prose prose-invert max-w-none text-white/70 text-sm leading-relaxed space-y-4">
                    <?php the_content(); ?>
                </div>
            </div>

            <!-- Sidebar Info -->
            <div class="space-y-6">
                <div class="liquid-glass rounded-3xl p-6 border border-white/10 space-y-4">
                    <h4 class="text-xs font-mono-code uppercase text-white/50 tracking-wider">SOFTWARE PIPELINE</h4>
                    <div class="flex flex-wrap gap-2">
                        <?php
                        $tools = $software ? explode(',', $software) : array('Premiere Pro', 'DaVinci Resolve', 'After Effects');
                        foreach ($tools as $t):
                        ?>
                        <span class="px-3 py-1 rounded-md bg-white/10 text-white text-xs font-mono-code border border-white/10"><?php echo esc_html(trim($t)); ?></span>
                        <?php endforeach; ?>
                    </div>
                </div>

                <div class="liquid-glass rounded-3xl p-6 border border-white/10 space-y-4">
                    <h4 class="text-xs font-mono-code uppercase text-white/50 tracking-wider">HAVE A SIMILAR PROJECT?</h4>
                    <p class="text-xs text-white/60">Get Vivek to edit your next video with cinematic precision.</p>
                    <button onclick="openContactModal()" class="w-full py-3 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-white/90 transition-all">Start Project Inquiry</button>
                </div>
            </div>
        </div>
    </article>

    <?php endwhile; ?>

</main>

<?php
get_footer();
