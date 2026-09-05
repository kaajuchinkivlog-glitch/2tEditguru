<?php
/**
 * Single Project Template for EditGuru Theme
 *
 * @package EditGuru
 */

get_header();

while (have_posts()) : the_post();
    $terms = get_the_terms(get_the_ID(), 'project_category');
    $cat_name = (!empty($terms) && !is_wp_error($terms)) ? $terms[0]->name : 'Cinematic';
    $client = get_post_meta(get_the_ID(), '_editguru_client', true);
    $video = get_post_meta(get_the_ID(), '_editguru_video_url', true);
    $views = get_post_meta(get_the_ID(), '_editguru_views', true);
    $duration = get_post_meta(get_the_ID(), '_editguru_duration', true);
    $res = get_post_meta(get_the_ID(), '_editguru_resolution', true);
    $software_str = get_post_meta(get_the_ID(), '_editguru_software', true);
    $thumb_url = get_the_post_thumbnail_url(get_the_ID(), 'full');
?>

<main class="pt-28 sm:pt-36 pb-20 px-4 sm:px-6 w-full max-w-5xl mx-auto">
    <!-- Back Link -->
    <a href="<?php echo esc_url(home_url('/#work')); ?>" class="inline-flex items-center gap-2 text-xs font-mono uppercase text-white/50 hover:text-white transition-colors mb-6">
        <i data-lucide="arrow-left" class="w-4 h-4"></i>
        <span>Back to All Projects</span>
    </a>

    <!-- Title & Metadata -->
    <div class="mb-6 sm:mb-8">
        <div class="flex items-center gap-3 mb-3">
            <span class="px-3 py-1 rounded-full text-[10px] font-mono uppercase bg-white/10 text-white border border-white/15">
                <?php echo esc_html($cat_name); ?>
            </span>
            <?php if ($client) : ?>
                <span class="text-xs text-white/50">Client: <strong class="text-white font-medium"><?php echo esc_html($client); ?></strong></span>
            <?php endif; ?>
        </div>

        <h1 class="text-3xl sm:text-5xl font-light uppercase tracking-tight text-white">
            <?php the_title(); ?>
        </h1>
    </div>

    <!-- Video Showcase Player -->
    <div class="relative aspect-video w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-black border border-white/15 shadow-2xl mb-8">
        <?php if ($video) : ?>
            <video
                src="<?php echo esc_url($video); ?>"
                controls
                playsinline
                class="w-full h-full object-cover"
                poster="<?php echo esc_url($thumb_url ? $thumb_url : ''); ?>"
            ></video>
        <?php elseif ($thumb_url) : ?>
            <img src="<?php echo esc_url($thumb_url); ?>" alt="<?php the_title_attribute(); ?>" class="w-full h-full object-cover">
        <?php endif; ?>
    </div>

    <!-- Specifications Box -->
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 mb-8 text-left">
        <div>
            <span class="text-[10px] font-mono uppercase text-white/40 block">Resolution</span>
            <span class="text-xs sm:text-sm font-semibold text-white"><?php echo esc_html($res ? $res : '4K UHD'); ?></span>
        </div>
        <div>
            <span class="text-[10px] font-mono uppercase text-white/40 block">Duration</span>
            <span class="text-xs sm:text-sm font-semibold text-white"><?php echo esc_html($duration ? $duration : '02:00'); ?></span>
        </div>
        <div>
            <span class="text-[10px] font-mono uppercase text-white/40 block">Reach / Views</span>
            <span class="text-xs sm:text-sm font-semibold text-white"><?php echo esc_html($views ? $views : 'Featured'); ?></span>
        </div>
        <div>
            <span class="text-[10px] font-mono uppercase text-white/40 block">Pipeline</span>
            <span class="text-xs sm:text-sm font-semibold text-white"><?php echo esc_html($software_str ? $software_str : 'DaVinci Resolve'); ?></span>
        </div>
    </div>

    <!-- Post Body Narrative -->
    <div class="prose prose-invert max-w-none text-white/70 leading-relaxed space-y-4 mb-10">
        <?php the_content(); ?>
    </div>

    <!-- CTA -->
    <div class="p-8 rounded-3xl bg-white/5 border border-white/10 text-center flex flex-col items-center">
        <h3 class="text-xl sm:text-2xl font-light uppercase text-white mb-2">Want a similar edit for your project?</h3>
        <p class="text-xs sm:text-sm text-white/50 max-w-md mb-6">Let's discuss footage requirements, turnarounds, and creative direction.</p>
        <button
            type="button"
            class="open-contact-modal-trigger px-8 py-3.5 rounded-full bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-white/90 transition-all shadow-xl"
        >
            Inquire About Similar Edit
        </button>
    </div>
</main>

<?php
endwhile;

get_footer();
