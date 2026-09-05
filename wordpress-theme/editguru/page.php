<?php
/**
 * Page Template for EditGuru Theme
 *
 * @package EditGuru
 */

get_header();

while (have_posts()) : the_post();
?>

<main class="pt-28 sm:pt-36 pb-20 px-4 sm:px-6 w-full max-w-4xl mx-auto">
    <div class="p-6 sm:p-12 rounded-3xl bg-white/5 border border-white/10 shadow-2xl backdrop-blur-xl">
        <h1 class="text-3xl sm:text-5xl font-light uppercase tracking-tight text-white mb-8 border-b border-white/10 pb-6">
            <?php the_title(); ?>
        </h1>

        <div class="prose prose-invert max-w-none text-white/70 leading-relaxed space-y-4">
            <?php the_content(); ?>
        </div>
    </div>
</main>

<?php
endwhile;

get_footer();
