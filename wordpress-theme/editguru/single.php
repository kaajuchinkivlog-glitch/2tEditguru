<?php
/**
 * The Single Post Template for EditGuru Theme
 * EDITGURU.IN
 *
 * @package EditGuru
 */

get_header();
?>

<main id="primary" class="site-main py-12 container mx-auto px-4">

    <?php while (have_posts()) : the_post();
        $thumb = get_the_post_thumbnail_url(get_the_ID(), 'full');
    ?>

    <article id="post-<?php the_ID(); ?>" <?php post_class('max-w-4xl mx-auto space-y-8'); ?>>
        <div class="space-y-4 text-center">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[10px] font-mono-code text-white/80">
                <span><?php echo get_the_date(); ?></span>
                <span>•</span>
                <span>BY VIVEK</span>
            </div>
            <h1 class="font-display font-extrabold text-3xl sm:text-5xl text-white"><?php the_title(); ?></h1>
        </div>

        <?php if ($thumb): ?>
        <div class="rounded-3xl overflow-hidden border border-white/20 aspect-video shadow-2xl">
            <img src="<?php echo esc_url($thumb); ?>" alt="<?php the_title_attribute(); ?>" class="w-full h-full object-cover">
        </div>
        <?php endif; ?>

        <div class="liquid-glass rounded-3xl p-8 md:p-12 border border-white/10 prose prose-invert max-w-none text-white/80 space-y-6 leading-relaxed">
            <?php the_content(); ?>
        </div>

        <!-- Author Footer Box -->
        <div class="liquid-glass-heavy rounded-3xl p-6 border border-white/20 flex items-center gap-4">
            <div class="w-14 h-14 rounded-full overflow-hidden border border-white/20 flex-shrink-0">
                <img src="<?php echo esc_url(get_theme_mod('editguru_profile_photo', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')); ?>" alt="Vivek" class="w-full h-full object-cover">
            </div>
            <div>
                <h4 class="font-bold text-white text-base">Vivek</h4>
                <p class="text-xs text-white/60">Lead Creator & Editor at EDITGURU.IN. Specialist in high-retention video editing and DaVinci color grading.</p>
            </div>
        </div>
    </article>

    <?php endwhile; ?>

</main>

<?php
get_footer();
