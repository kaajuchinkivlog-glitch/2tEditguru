<?php
/**
 * Template Name: Services Page
 * EDITGURU.IN
 *
 * @package EditGuru
 */

get_header();
?>

<main id="primary" class="site-main py-16 container mx-auto px-4">

    <div class="max-w-4xl mx-auto text-center space-y-4 mb-16">
        <span class="text-xs font-mono-code uppercase tracking-widest text-white/50 block">EDITGURU Solutions</span>
        <h1 class="font-display font-extrabold text-4xl sm:text-6xl text-white">Services & Production Offerings</h1>
        <p class="text-lg text-white/70 max-w-2xl mx-auto">Tailored video editing packages engineered for retention and virality.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto">
        <div class="liquid-glass rounded-3xl p-8 border border-white/10 space-y-6">
            <h3 class="text-2xl font-bold text-white">Reels & Shorts</h3>
            <p class="text-xs text-white/60">60-second vertical videos engineered for high retention, custom motion text, and sound FX.</p>
            <button onclick="openContactModal()" class="w-full py-3 rounded-full bg-white text-black font-bold text-xs uppercase">Get Quote</button>
        </div>

        <div class="liquid-glass-heavy rounded-3xl p-8 border border-white/30 space-y-6 shadow-2xl">
            <h3 class="text-2xl font-bold text-white">YouTube Documentaries</h3>
            <p class="text-xs text-white/70">Long-form storytelling, map animation, sound mixing, and narrative pacing.</p>
            <button onclick="openContactModal()" class="w-full py-3 rounded-full bg-white text-black font-bold text-xs uppercase">Get Quote</button>
        </div>

        <div class="liquid-glass rounded-3xl p-8 border border-white/10 space-y-6">
            <h3 class="text-2xl font-bold text-white">DaVinci Color Grading</h3>
            <p class="text-xs text-white/60">Studio color management, ACES pipeline, shot matching, and cinema film emulation.</p>
            <button onclick="openContactModal()" class="w-full py-3 rounded-full bg-white text-black font-bold text-xs uppercase">Get Quote</button>
        </div>
    </div>

</main>

<?php
get_footer();
