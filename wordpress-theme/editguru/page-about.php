<?php
/**
 * Template Name: About Page
 * EDITGURU.IN
 *
 * @package EditGuru
 */

get_header();
?>

<main id="primary" class="site-main py-16 container mx-auto px-4">

    <div class="max-w-4xl mx-auto space-y-12">
        <div class="text-center space-y-4">
            <span class="text-xs font-mono-code uppercase tracking-widest text-white/50 block">Meet The Lead Creator</span>
            <h1 class="font-display font-extrabold text-4xl sm:text-6xl text-white">About Vivek & EDITGURU</h1>
            <p class="text-lg text-white/70 max-w-2xl mx-auto">Transforming raw footage into viral, high-converting visual stories.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div class="rounded-3xl overflow-hidden border border-white/20 aspect-square shadow-2xl">
                <img src="<?php echo esc_url(get_theme_mod('editguru_profile_photo', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')); ?>" alt="Vivek" class="w-full h-full object-cover">
            </div>

            <div class="liquid-glass rounded-3xl p-8 border border-white/10 space-y-4 text-white/80 text-sm leading-relaxed">
                <h3 class="text-2xl font-bold text-white">Behind EDITGURU.IN</h3>
                <p>Since 2018, Vivek has worked behind the camera and inside the timeline for leading digital creators, YouTube storytellers, and brands across the globe.</p>
                <p>EDITGURU.IN was established with a singular mission: to eliminate lazy video editing and bring cinema-grade precision, dynamic motion graphics, and Hollywood color grading to creator content.</p>
                <div class="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono-code text-white/50">
                    <span>LOCATION: Studio / Global</span>
                    <span>EXPERIENCE: 8+ Years</span>
                </div>
            </div>
        </div>
    </div>

</main>

<?php
get_footer();
