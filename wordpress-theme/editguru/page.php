<?php
/**
 * The Default Page Template for EditGuru Theme
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
            <h1 class="font-display font-extrabold text-3xl sm:text-5xl text-white"><?php the_title(); ?></h1>
        </header>

        <div class="liquid-glass rounded-3xl p-8 md:p-12 border border-white/10 text-white/80 space-y-6 leading-relaxed">
            <?php the_content(); ?>
        </div>
    </article>

    <?php endwhile; ?>

</main>

<?php
get_footer();
