<?php
/**
 * Footer Template for EditGuru Theme
 *
 * @package EditGuru
 */
?>

<!-- Footer -->
<footer class="relative mt-8 sm:mt-12 pb-10 sm:pb-12 pt-6 sm:pt-8 px-4 sm:px-6 w-full max-w-6xl mx-auto border-t border-white/10">
    <div class="rounded-2xl sm:rounded-3xl bg-white/5 backdrop-blur-xl p-5 sm:p-10 border border-white/10 shadow-2xl">
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 sm:gap-6 pb-6 sm:pb-8 border-b border-white/10">
            <!-- Brand & Tagline -->
            <div class="flex flex-col">
                <div class="flex items-center gap-2.5 mb-1.5 sm:mb-2">
                    <div class="w-7 h-7 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                        <i data-lucide="film" class="w-3.5 h-3.5 text-white"></i>
                    </div>
                    <span class="text-lg font-bold tracking-tight text-white">
                        EDITGURU<span class="text-white/40 font-normal">.IN</span>
                    </span>
                </div>
                <div class="text-sm text-white/80 font-medium">Vivek</div>
                <div class="text-[11px] sm:text-xs text-white/50 font-normal mt-0.5">
                    Creator • Vlogger • Video Editor • Visual Storyteller
                </div>
            </div>

            <!-- Social Links -->
            <div class="flex items-center gap-2.5 sm:gap-3 self-start sm:self-auto">
                <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 border border-white/10 hover:border-white/30 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all shadow-sm"
                    aria-label="YouTube"
                >
                    <i data-lucide="youtube" class="w-4 h-4"></i>
                </a>
                <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 border border-white/10 hover:border-white/30 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all shadow-sm"
                    aria-label="Instagram"
                >
                    <i data-lucide="instagram" class="w-4 h-4"></i>
                </a>
                <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 border border-white/10 hover:border-white/30 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all shadow-sm"
                    aria-label="LinkedIn"
                >
                    <i data-lucide="linkedin" class="w-4 h-4"></i>
                </a>
                <button
                    type="button"
                    class="open-contact-modal-trigger w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 border border-white/10 hover:border-white/30 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all shadow-sm cursor-pointer"
                    aria-label="Send direct message"
                    title="Inquire With Vivek"
                >
                    <i data-lucide="mail" class="w-4 h-4"></i>
                </button>
            </div>
        </div>

        <!-- Bottom Copyright & Back to Top -->
        <div class="mt-5 sm:mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-[11px] sm:text-xs text-white/40 font-mono text-center sm:text-left">
            <div>© <?php echo date('Y'); ?> EditGuru.in • All Rights Reserved.</div>
            <div class="flex items-center gap-4 sm:gap-6">
                <span class="text-white/40">Artistic Flair Theme</span>
                <button
                    id="scroll-to-top-btn"
                    type="button"
                    class="hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                    <span>Back to top</span>
                    <i data-lucide="arrow-up" class="w-3.5 h-3.5"></i>
                </button>
            </div>
        </div>
    </div>
</footer>

<!-- Project Video Showcase Modal -->
<div id="project-modal" class="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 bg-black/85 backdrop-blur-2xl overflow-y-auto hidden opacity-0 transition-opacity duration-300">
    <div class="relative w-full max-w-4xl max-h-[94vh] overflow-y-auto bg-neutral-950/95 backdrop-blur-2xl border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-2xl">
        <!-- Header Bar -->
        <div class="flex items-center justify-between pb-3 sm:pb-4 border-b border-white/10 mb-4 sm:mb-5">
            <div class="flex items-center gap-2 sm:gap-3">
                <span id="modal-project-category" class="px-2.5 sm:px-3 py-1 rounded-full text-[9px] sm:text-[10px] font-mono uppercase bg-white/10 text-white border border-white/15">
                    Cinematic
                </span>
                <span id="modal-project-client" class="text-[11px] sm:text-xs text-white/50 hidden sm:inline">
                    Client: <strong class="text-white font-medium" id="modal-project-client-name">RedBull</strong>
                </span>
            </div>
            <button
                id="close-project-modal-btn"
                type="button"
                class="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/5 border border-white/10 hover:border-white/30 flex items-center justify-center text-white/50 hover:text-white transition-colors cursor-pointer"
            >
                <i data-lucide="x" class="w-4 h-4"></i>
            </button>
        </div>

        <!-- Main Video Presentation -->
        <div class="relative aspect-video w-full rounded-xl sm:rounded-2xl overflow-hidden bg-black border border-white/15 shadow-2xl group">
            <video
                id="modal-video-element"
                src=""
                class="w-full h-full object-cover transition-all duration-500"
                playsinline
                loop
            ></video>

            <!-- Raw Ungraded Tag indicator -->
            <div id="modal-ungraded-tag" class="hidden absolute top-3 sm:top-4 left-3 sm:left-4 z-20 px-2.5 py-0.5 sm:py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs font-mono text-zinc-300">
                RAW UNGRADED LOG
            </div>

            <!-- Video Controls Overlay -->
            <div class="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between z-20">
                <div class="flex items-center gap-1.5 sm:gap-2">
                    <button
                        id="modal-play-btn"
                        type="button"
                        class="w-8 h-8 sm:w-10 sm:h-10 rounded-full liquid-glass border border-white/30 text-white flex items-center justify-center hover:scale-105 transition-all shadow-md cursor-pointer"
                    >
                        <i data-lucide="play" class="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white translate-x-0.5" id="modal-play-icon"></i>
                    </button>
                    <button
                        id="modal-mute-btn"
                        type="button"
                        class="w-8 h-8 sm:w-10 sm:h-10 rounded-full liquid-glass border border-white/30 text-white flex items-center justify-center hover:scale-105 transition-all shadow-md cursor-pointer"
                    >
                        <i data-lucide="volume-2" class="w-3.5 h-3.5 sm:w-4 sm:h-4" id="modal-mute-icon"></i>
                    </button>
                </div>

                <button
                    id="modal-grade-toggle-btn"
                    type="button"
                    class="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-mono transition-all border bg-white/20 border-white/40 text-white font-medium shadow-md cursor-pointer"
                >
                    <i data-lucide="sliders" class="w-3 h-3 sm:w-3.5 sm:h-3.5"></i>
                    <span id="modal-grade-label">Graded</span>
                </button>
            </div>
        </div>

        <!-- Project Details -->
        <div class="mt-4 sm:mt-6">
            <h2 id="modal-project-title" class="font-bold text-xl sm:text-3xl text-white">
                Project Title
            </h2>
            <p id="modal-project-desc" class="mt-2 sm:mt-3 text-xs sm:text-base text-zinc-300 font-light leading-relaxed">
                Project description goes here...
            </p>

            <!-- Specifications Grid -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mt-4 sm:mt-6 p-3 sm:p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
                <div>
                    <span class="text-[9px] sm:text-[10px] font-mono uppercase text-zinc-500 block">Resolution</span>
                    <span id="modal-project-res" class="text-xs sm:text-sm font-semibold text-white">4K UHD</span>
                </div>
                <div>
                    <span class="text-[9px] sm:text-[10px] font-mono uppercase text-zinc-500 block">Frame Rate</span>
                    <span id="modal-project-fps" class="text-xs sm:text-sm font-semibold text-white">60 FPS</span>
                </div>
                <div>
                    <span class="text-[9px] sm:text-[10px] font-mono uppercase text-zinc-500 block">Duration</span>
                    <span id="modal-project-duration" class="text-xs sm:text-sm font-semibold text-white">01:45</span>
                </div>
                <div>
                    <span class="text-[9px] sm:text-[10px] font-mono uppercase text-zinc-500 block">Primary Tool</span>
                    <span id="modal-project-tool" class="text-xs sm:text-sm font-semibold text-white">DaVinci Resolve</span>
                </div>
            </div>

            <!-- Pipeline & Action CTA -->
            <div class="mt-5 sm:mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-white/[0.08]">
                <div class="flex flex-wrap items-center gap-1.5 sm:gap-2">
                    <span class="text-[11px] sm:text-xs text-zinc-400 font-mono">Pipeline:</span>
                    <div id="modal-project-software" class="flex flex-wrap gap-1.5">
                        <!-- badges injected via js -->
                    </div>
                </div>

                <button
                    id="modal-inquire-similar-btn"
                    type="button"
                    class="w-full sm:w-auto px-5 sm:px-6 py-3 rounded-full bg-white text-black font-bold text-xs sm:text-sm tracking-widest uppercase hover:bg-white/90 transition-all flex items-center justify-center gap-2 shadow-xl cursor-pointer"
                >
                    <span>Inquire About Similar Edit</span>
                    <i data-lucide="arrow-right" class="w-4 h-4"></i>
                </button>
            </div>
        </div>
    </div>
</div>

<!-- Contact Ingestion Modal -->
<div id="contact-modal" class="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 bg-black/85 backdrop-blur-2xl overflow-y-auto hidden opacity-0 transition-opacity duration-300">
    <div class="relative w-full max-w-xl max-h-[94vh] overflow-y-auto bg-neutral-950/95 backdrop-blur-2xl border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-2xl">
        <!-- Header -->
        <div class="flex items-center justify-between pb-3 sm:pb-4 border-b border-white/10 mb-4 sm:mb-6">
            <div class="flex items-center gap-2.5">
                <div class="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                    <i data-lucide="film" class="w-4 h-4 text-white"></i>
                </div>
                <div>
                    <h3 class="font-medium text-base sm:text-lg text-white">Start a Project with Vivek</h3>
                    <p class="text-[11px] sm:text-xs text-white/50 font-normal">EditGuru.in • Direct Ingestion</p>
                </div>
            </div>
            <button
                id="close-contact-modal-btn"
                type="button"
                class="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/5 border border-white/10 hover:border-white/30 flex items-center justify-center text-white/50 hover:text-white transition-colors cursor-pointer"
            >
                <i data-lucide="x" class="w-4 h-4"></i>
            </button>
        </div>

        <!-- Contact Form -->
        <form id="editguru-contact-form" class="space-y-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                    <label class="block text-[11px] font-mono text-white/60 uppercase mb-1.5">Your Name *</label>
                    <input
                        type="text"
                        name="name"
                        required
                        placeholder="Alex Parker"
                        class="w-full bg-white/5 border border-white/15 focus:border-white/40 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-white/20 focus:outline-none transition-all"
                    >
                </div>
                <div>
                    <label class="block text-[11px] font-mono text-white/60 uppercase mb-1.5">Your Email *</label>
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="alex@brand.com"
                        class="w-full bg-white/5 border border-white/15 focus:border-white/40 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-white/20 focus:outline-none transition-all"
                    >
                </div>
            </div>

            <div>
                <label class="block text-[11px] font-mono text-white/60 uppercase mb-1.5">Project Type</label>
                <select
                    name="projectType"
                    class="w-full bg-neutral-900 border border-white/15 focus:border-white/40 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none transition-all cursor-pointer"
                >
                    <option value="Cinematic Commercial">Cinematic Commercial</option>
                    <option value="Reels & TikToks (Batch)">Reels & TikToks (Batch Package)</option>
                    <option value="YouTube Long-Form / Vlog">YouTube Long-Form / Vlog Story</option>
                    <option value="Color Grading & Master">Color Grading & Finishing</option>
                    <option value="Motion Graphics & Sound FX">Motion Graphics & Sound FX</option>
                    <option value="Full Retainer / Channel Partnership">Full Retainer / Channel Partnership</option>
                </select>
            </div>

            <div>
                <label class="block text-[11px] font-mono text-white/60 uppercase mb-1.5">Estimated Budget (USD)</label>
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-2" id="budget-options">
                    <label class="cursor-pointer border border-white/15 hover:border-white/30 rounded-xl p-2 text-center text-xs text-white/80 block select-none has-[:checked]:bg-white has-[:checked]:text-black has-[:checked]:font-bold transition-all">
                        <input type="radio" name="budget" value="< $500" class="sr-only">
                        &lt; $500
                    </label>
                    <label class="cursor-pointer border border-white/15 hover:border-white/30 rounded-xl p-2 text-center text-xs text-white/80 block select-none has-[:checked]:bg-white has-[:checked]:text-black has-[:checked]:font-bold transition-all">
                        <input type="radio" name="budget" value="$500 - $1,500" checked class="sr-only">
                        $500 - $1.5K
                    </label>
                    <label class="cursor-pointer border border-white/15 hover:border-white/30 rounded-xl p-2 text-center text-xs text-white/80 block select-none has-[:checked]:bg-white has-[:checked]:text-black has-[:checked]:font-bold transition-all">
                        <input type="radio" name="budget" value="$1,500 - $3,500" class="sr-only">
                        $1.5K - $3.5K
                    </label>
                    <label class="cursor-pointer border border-white/15 hover:border-white/30 rounded-xl p-2 text-center text-xs text-white/80 block select-none has-[:checked]:bg-white has-[:checked]:text-black has-[:checked]:font-bold transition-all">
                        <input type="radio" name="budget" value="$3,500+" class="sr-only">
                        $3.5K+
                    </label>
                </div>
            </div>

            <div>
                <label class="block text-[11px] font-mono text-white/60 uppercase mb-1.5">Project Brief & Details *</label>
                <textarea
                    id="contact-form-message"
                    name="message"
                    required
                    rows="3"
                    placeholder="Tell me about your footage, deadlines, references, or links to rushes..."
                    class="w-full bg-white/5 border border-white/15 focus:border-white/40 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-white/20 focus:outline-none transition-all resize-none"
                ></textarea>
            </div>

            <!-- Status message container -->
            <div id="contact-form-status" class="hidden text-xs py-2 px-3 rounded-lg border"></div>

            <button
                type="submit"
                id="contact-form-submit-btn"
                class="w-full py-3.5 rounded-full bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-white/90 transition-all flex items-center justify-center gap-2 shadow-xl cursor-pointer"
            >
                <span id="submit-btn-text">Transmit Project Brief</span>
                <i data-lucide="send" class="w-3.5 h-3.5"></i>
            </button>
        </form>
    </div>
</div>

<?php wp_footer(); ?>
</body>
</html>
