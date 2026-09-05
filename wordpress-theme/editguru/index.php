<?php
/**
 * The Main Index / Blog Listing Template for EditGuru Theme
 * EDITGURU.IN
 *
 * @package EditGuru
 */

get_header();
?>

<main id="primary" class="site-main py-16 container mx-auto px-4">

    <!-- Header Section -->
    <div class="max-w-3xl mb-12">
        <span class="text-xs font-mono-code uppercase tracking-widest text-white/50 block mb-2">EDITGURU Journal</span>
        <h1 class="font-display font-extrabold text-3xl sm:text-5xl text-white">Editing Tips, Tutorials & Insights</h1>
        <p class="text-sm text-white/60 mt-3">Behind the scenes workflows, DaVinci color grading secrets, and video trend analysis by Vivek.</p>
    </div>

    <!-- Blog Categories Nav -->
    <div class="flex items-center gap-3 overflow-x-auto no-scrollbar pb-6 mb-8 border-b border-white/10">
        <span class="text-xs font-mono-code text-white/40 uppercase">Categories:</span>
        <a href="<?php echo esc_url(get_permalink(get_option('page_for_posts'))); ?>" class="px-4 py-1.5 rounded-full text-xs font-semibold bg-white text-black">All Posts</a>
        <?php
        $categories = get_categories(array('taxonomy' => 'category', 'hide_empty' => false));
        foreach ($categories as $cat) {
            echo '<a href="' . esc_url(get_category_link($cat->term_id)) . '" class="px-4 py-1.5 rounded-full text-xs font-semibold bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-all">' . esc_html($cat->name) . '</a>';
        }
        ?>
    </div>

    <!-- Blog Feed Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <?php if (have_posts()) : ?>
            <?php while (have_posts()) : the_post();
                $thumb = get_the_post_thumbnail_url(get_the_ID(), 'medium_large');
                if (!$thumb) {
                    $thumb = 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80';
                }
            ?>
                <article id="post-<?php the_ID(); ?>" <?php post_class('liquid-glass rounded-3xl overflow-hidden border border-white/10 hover:border-white/30 transition-all group flex flex-col justify-between'); ?>>
                    <div>
                        <div class="aspect-video relative overflow-hidden bg-black">
                            <img src="<?php echo esc_url($thumb); ?>" alt="<?php the_title_attribute(); ?>" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                        </div>
                        <div class="p-6 space-y-3">
                            <span class="text-[10px] font-mono-code text-white/50 uppercase tracking-widest block"><?php echo get_the_date(); ?></span>
                            <h2 class="text-xl font-bold text-white group-hover:text-white/90 transition-colors">
                                <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                            </h2>
                            <p class="text-xs text-white/60 line-clamp-3"><?php echo get_the_excerpt(); ?></p>
                        </div>
                    </div>
                    <div class="px-6 pb-6 pt-2 border-t border-white/10 flex items-center justify-between text-xs font-mono-code text-white/50">
                        <span>By Vivek</span>
                        <a href="<?php the_permalink(); ?>" class="text-white hover:underline flex items-center gap-1">Read Article →</a>
                    </div>
                </article>
            <?php endwhile; ?>
        <?php else : ?>
            <div class="col-span-full text-center py-16 liquid-glass rounded-3xl p-8 border border-white/10">
                <p class="text-white/60">No blog articles found. Add posts in WP Admin > Posts.</p>
            </div>
        <?php endif; ?>
    </div>

</main>

<?php
get_footer();
