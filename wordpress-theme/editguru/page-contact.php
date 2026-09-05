<?php
/**
 * Template Name: Contact Page
 * EDITGURU.IN
 *
 * @package EditGuru
 */

get_header();
?>

<main id="primary" class="site-main py-16 container mx-auto px-4">

    <div class="max-w-3xl mx-auto space-y-8">
        <div class="text-center space-y-3">
            <span class="text-xs font-mono-code uppercase tracking-widest text-white/50 block">Inquiries</span>
            <h1 class="font-display font-extrabold text-4xl sm:text-5xl text-white">Contact EDITGURU Studio</h1>
            <p class="text-sm text-white/60">Have a project in mind? Fill out the form below or email Vivek directly.</p>
        </div>

        <div class="liquid-glass-heavy rounded-3xl p-8 border border-white/20 shadow-2xl">
            <form id="page-contact-form" class="space-y-4">
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-xs font-mono-code text-white/60 mb-1">YOUR NAME *</label>
                        <input type="text" name="name" required placeholder="John Doe" class="liquid-glass-input text-sm">
                    </div>
                    <div>
                        <label class="block text-xs font-mono-code text-white/60 mb-1">EMAIL ADDRESS *</label>
                        <input type="email" name="email" required placeholder="john@brand.com" class="liquid-glass-input text-sm">
                    </div>
                </div>

                <div>
                    <label class="block text-xs font-mono-code text-white/60 mb-1">PROJECT TYPE</label>
                    <select name="projectType" class="liquid-glass-input text-sm bg-black text-white">
                        <option value="Reels / Shorts Editing">Reels & Shorts Editing</option>
                        <option value="YouTube Long-Form Documentaries">YouTube Long-Form / Docs</option>
                        <option value="Commercial & Brand Ad">Commercial & Brand Ad</option>
                        <option value="Color Grading & Finishing">Color Grading & Finishing</option>
                        <option value="Motion Graphics & 3D">Motion Graphics & 3D VFX</option>
                    </select>
                </div>

                <div>
                    <label class="block text-xs font-mono-code text-white/60 mb-1">MESSAGE / GOALS *</label>
                    <textarea name="message" rows="4" required placeholder="Tell Vivek about your project..." class="liquid-glass-input text-sm"></textarea>
                </div>

                <div id="page-form-status" class="hidden text-sm p-3 rounded-xl"></div>

                <button type="submit" class="w-full py-4 rounded-full bg-white text-black font-bold text-sm uppercase tracking-wider hover:bg-white/90 transition-all shadow-[0_0_25px_rgba(255,255,255,0.4)]">
                    Send Project Inquiry
                </button>
            </form>
        </div>
    </div>

</main>

<?php
get_footer();
