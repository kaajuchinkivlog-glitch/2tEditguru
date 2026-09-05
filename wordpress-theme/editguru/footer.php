<?php
/**
 * The Footer for EditGuru Theme
 * EDITGURU.IN
 *
 * @package EditGuru
 */
?>

    <!-- Footer Section -->
    <footer class="mt-28 border-t border-white/10 bg-black/60 backdrop-blur-xl relative overflow-hidden">
        <div class="container mx-auto px-4 py-16">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
                <!-- Col 1: Brand Info -->
                <div class="md:col-span-2">
                    <div class="flex items-center gap-3 mb-4">
                        <div class="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center font-display font-extrabold text-white text-lg">
                            E
                        </div>
                        <span class="font-display font-extrabold text-2xl text-white tracking-tight">
                            <?php echo esc_html(get_theme_mod('editguru_logo_text', 'EDITGURU.IN')); ?>
                        </span>
                    </div>
                    <p class="text-white/60 text-sm max-w-md mb-6 leading-relaxed">
                        <?php echo esc_html(get_theme_mod('editguru_creator_title', 'Creator • Vlogger • Video Editor')); ?>. High-converting video editing, motion graphics, and cinematic visual storytelling by Vivek.
                    </p>
                    <div class="flex items-center gap-4">
                        <a href="<?php echo esc_url(get_theme_mod('editguru_instagram_url', 'https://instagram.com/editguru.in')); ?>" target="_blank" class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all">
                            <i data-lucide="instagram" class="w-4 h-4"></i>
                        </a>
                        <a href="<?php echo esc_url(get_theme_mod('editguru_youtube_url', 'https://youtube.com/@editguru')); ?>" target="_blank" class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all">
                            <i data-lucide="youtube" class="w-4 h-4"></i>
                        </a>
                        <a href="<?php echo esc_url(get_theme_mod('editguru_twitter_url', 'https://x.com/editguru_in')); ?>" target="_blank" class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all">
                            <i data-lucide="twitter" class="w-4 h-4"></i>
                        </a>
                        <a href="mailto:<?php echo esc_attr(get_theme_mod('editguru_contact_email', 'vivek@editguru.in')); ?>" class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all">
                            <i data-lucide="mail" class="w-4 h-4"></i>
                        </a>
                    </div>
                </div>

                <!-- Col 2: Navigation Links -->
                <div>
                    <h4 class="text-xs uppercase tracking-widest text-white/40 font-mono-code mb-4">Quick Links</h4>
                    <ul class="space-y-2 text-sm">
                        <li><a href="<?php echo esc_url(home_url('/')); ?>" class="text-white/60 hover:text-white transition-colors">Home</a></li>
                        <li><a href="<?php echo esc_url(home_url('/#portfolio')); ?>" class="text-white/60 hover:text-white transition-colors">Portfolio</a></li>
                        <li><a href="<?php echo esc_url(home_url('/#services')); ?>" class="text-white/60 hover:text-white transition-colors">Services & Rates</a></li>
                        <li><a href="<?php echo esc_url(home_url('/#journey')); ?>" class="text-white/60 hover:text-white transition-colors">About Vivek</a></li>
                        <li><a href="<?php echo esc_url(home_url('/#testimonials')); ?>" class="text-white/60 hover:text-white transition-colors">Testimonials</a></li>
                    </ul>
                </div>

                <!-- Col 3: Legal & Studio -->
                <div>
                    <h4 class="text-xs uppercase tracking-widest text-white/40 font-mono-code mb-4">Legal & Policy</h4>
                    <ul class="space-y-2 text-sm">
                        <li><a href="<?php echo esc_url(home_url('/privacy-policy')); ?>" class="text-white/60 hover:text-white transition-colors">Privacy Policy</a></li>
                        <li><a href="<?php echo esc_url(home_url('/terms-and-conditions')); ?>" class="text-white/60 hover:text-white transition-colors">Terms & Conditions</a></li>
                        <li><a href="<?php echo esc_url(home_url('/cookie-policy')); ?>" class="text-white/60 hover:text-white transition-colors">Cookie Policy</a></li>
                        <li><a href="mailto:<?php echo esc_attr(get_theme_mod('editguru_contact_email', 'vivek@editguru.in')); ?>" class="text-white/60 hover:text-white transition-colors">Support Email</a></li>
                    </ul>
                </div>
            </div>

            <!-- Bottom Copyright Bar -->
            <div class="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-white/40 gap-4">
                <p>&copy; <?php echo date('Y'); ?> <?php echo esc_html(get_theme_mod('editguru_logo_text', 'EDITGURU.IN')); ?>. All rights reserved. Crafted for Vivek.</p>
                <div class="flex items-center gap-6">
                    <span class="inline-flex items-center gap-2">
                        <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span class="text-white/60 font-mono-code">Accepting Q3/Q4 Video Clients</span>
                    </span>
                </div>
            </div>
        </div>
    </footer>
</div><!-- #page -->

<!-- Video Preview Modal -->
<div id="video-modal" class="hidden fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl">
    <div class="relative w-full max-w-5xl liquid-glass-heavy rounded-2xl p-4 overflow-hidden border border-white/20">
        <button onclick="closeVideoModal()" class="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
            <i data-lucide="x" class="w-5 h-5"></i>
        </button>
        <div id="video-modal-content" class="aspect-video w-full rounded-xl overflow-hidden bg-black flex items-center justify-center">
            <!-- Video Player loaded dynamically -->
        </div>
        <div class="p-4 flex items-center justify-between border-t border-white/10 mt-4">
            <div>
                <h3 id="modal-video-title" class="text-lg font-bold text-white">Project Preview</h3>
                <p id="modal-video-client" class="text-xs text-white/50 font-mono-code">Client / Brand</p>
            </div>
            <button onclick="closeVideoModal()" class="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold">Close Preview</button>
        </div>
    </div>
</div>

<!-- Project Contact Modal -->
<div id="contact-modal" class="hidden fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl">
    <div class="relative w-full max-w-xl liquid-glass-heavy rounded-3xl p-8 border border-white/20 shadow-2xl">
        <button onclick="closeContactModal()" class="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
            <i data-lucide="x" class="w-5 h-5"></i>
        </button>

        <h3 class="text-2xl font-bold text-white mb-1">Start Your Project</h3>
        <p class="text-sm text-white/60 mb-6">Let's build a viral video experience with Vivek at EDITGURU.IN.</p>

        <form id="modal-contact-form" class="space-y-4">
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
                <label class="block text-xs font-mono-code text-white/60 mb-1">PROJECT DETAILS / GOALS *</label>
                <textarea name="message" rows="3" required placeholder="Tell Vivek about your raw footage, timeline, and goals..." class="liquid-glass-input text-sm"></textarea>
            </div>

            <div id="modal-form-status" class="hidden text-sm p-3 rounded-xl"></div>

            <button type="submit" class="w-full py-4 rounded-full bg-white text-black font-bold text-sm uppercase tracking-wider hover:bg-white/90 transition-all shadow-[0_0_25px_rgba(255,255,255,0.4)]">
                Submit Project Inquiry
            </button>
        </form>
    </div>
</div>

<?php wp_footer(); ?>
</body>
</html>
