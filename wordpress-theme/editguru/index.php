<?php
/**
 * Main Index Template for EditGuru Theme
 *
 * @package EditGuru
 */

get_header();
?>

<main class="pt-28 sm:pt-36 pb-20 px-4 sm:px-6 w-full max-w-5xl mx-auto">
    <div class="text-center mb-12">
        <h1 class="text-3xl sm:text-5xl font-light uppercase tracking-tight text-white">
            <?php single_post_title(); ?>
        </h1>
    </div>

    <?php if (have_posts()) : ?>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <?php while (have_posts()) : the_post(); ?>
                <article class="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between">
                    <div>
                        <div class="text-[11px] font-mono text-white/40 mb-2"><?php echo get_the_date(); ?></div>
                        <h2 class="text-xl font-bold text-white mb-2">
                            <a href="<?php the_permalink(); ?>" class="hover:text-white/80 transition-colors">
                                <?php the_title(); ?>
                            </a>
                        </h2>
                        <p class="text-xs sm:text-sm text-white/50 line-clamp-3 leading-relaxed mb-4">
                            <?php echo get_the_excerpt(); ?>
                        </p>
                    </div>
                    <div>
                        <a href="<?php the_permalink(); ?>" class="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white">
                            <span>Read More</span>
                            <i data-lucide="arrow-up-right" class="w-3.5 h-3.5"></i>
                        </a>
                    </div>
                </article>
            <?php endwhile; ?>
        </div>

        <div class="mt-8 flex justify-center">
            <?php the_posts_pagination(array('mid_size' => 2)); ?>
        </div>
    <?php else : ?>
        <div class="text-center py-16 text-white/40">
            <p>No content found. Return to <a href="<?php echo esc_url(home_url('/')); ?>" class="text-white underline">Homepage</a>.</p>
        </div>
    <?php endif; ?>
</main>

<?php
get_footer();
