<?php
/**
 * Template Name: Legal Policy Page
 * EDITGURU.IN
 *
 * @package EditGuru
 */

get_header();
?>

<main id="primary" class="site-main py-16 container mx-auto px-4">

    <?php while (have_posts()) : the_post(); ?>

    <article id="post-<?php the_ID(); ?>" <?php post_class('max-w-4xl mx-auto space-y-8'); ?>>
        <header class="text-center space-y-3">
            <span class="text-xs font-mono-code uppercase tracking-widest text-white/50 block">EDITGURU.IN Legal</span>
            <h1 class="font-display font-extrabold text-3xl sm:text-5xl text-white"><?php the_title(); ?></h1>
        </header>

        <div class="liquid-glass rounded-3xl p-8 md:p-12 border border-white/10 text-white/80 space-y-6 leading-relaxed text-sm">
            <?php the_content(); ?>

            <?php if (!get_the_content()): ?>
            <p>Welcome to EDITGURU.IN. Your privacy and intellectual property are paramount to us. All raw video files, brand assets, and project project media shared with Vivek and EDITGURU Studio are kept strictly confidential under non-disclosure standards.</p>
            <p>For questions regarding site terms or client agreements, please contact <strong>vivek@editguru.in</strong>.</p>
            <?php endif; ?>
        </div>
    </article>

    <?php endwhile; ?>

</main>

<?php
get_footer();
