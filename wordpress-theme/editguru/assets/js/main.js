/**
 * EditGuru Theme JavaScript
 * EDITGURU.IN
 */

document.addEventListener('DOMContentLoaded', function () {
    // 1. Initialize Lucide Icons
    if (window.lucide) {
        window.lucide.createIcons();
    }

    // 2. Mobile Navigation Toggle
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const mobileDrawer = document.getElementById('mobile-drawer');

    if (mobileToggle && mobileDrawer) {
        mobileToggle.addEventListener('click', function () {
            mobileDrawer.classList.toggle('hidden');
            mobileDrawer.classList.toggle('flex');
        });
    }

    // 3. Category Filter Tabs for Portfolio
    const tabBtns = document.querySelectorAll('.portfolio-tab-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            tabBtns.forEach(b => {
                b.classList.remove('active', 'bg-white', 'text-black');
                b.classList.add('bg-white/10', 'text-white/70');
            });

            this.classList.add('active', 'bg-white', 'text-black');
            this.classList.remove('bg-white/10', 'text-white/70');

            const cat = this.getAttribute('data-category');

            portfolioItems.forEach(item => {
                if (cat === 'all' || item.classList.contains('cat-' + cat)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // 4. Interactive Color Grading Before/After Slider
    const sliderContainer = document.getElementById('grading-slider-container');
    const beforeWrap = document.getElementById('before-image-wrap');

    if (sliderContainer && beforeWrap) {
        let isDragging = false;

        const updateSlider = (e) => {
            const rect = sliderContainer.getBoundingClientRect();
            let x = (e.clientX || (e.touches && e.touches[0].clientX)) - rect.left;
            x = Math.max(0, Math.min(x, rect.width));
            const percent = (x / rect.width) * 100;
            beforeWrap.style.width = percent + '%';
        };

        sliderContainer.addEventListener('mousedown', (e) => { isDragging = true; updateSlider(e); });
        window.addEventListener('mouseup', () => { isDragging = false; });
        sliderContainer.addEventListener('mousemove', (e) => { if (isDragging) updateSlider(e); });

        sliderContainer.addEventListener('touchstart', (e) => { isDragging = true; updateSlider(e); });
        window.addEventListener('touchend', () => { isDragging = false; });
        sliderContainer.addEventListener('touchmove', (e) => { if (isDragging) updateSlider(e); });
    }

    // 5. Contact Form Handler (Main & Modal)
    const forms = [
        { id: 'main-contact-form', statusId: 'main-form-status' },
        { id: 'modal-contact-form', statusId: 'modal-form-status' },
        { id: 'page-contact-form', statusId: 'page-form-status' }
    ];

    forms.forEach(f => {
        const formEl = document.getElementById(f.id);
        const statusEl = document.getElementById(f.statusId);

        if (formEl) {
            formEl.addEventListener('submit', function (e) {
                e.preventDefault();
                const formData = new FormData(formEl);
                formData.append('action', 'editguru_contact');
                if (window.editguru_vars && window.editguru_vars.nonce) {
                    formData.append('nonce', window.editguru_vars.nonce);
                }

                if (statusEl) {
                    statusEl.classList.remove('hidden', 'bg-red-500/20', 'bg-emerald-500/20', 'text-red-300', 'text-emerald-300');
                    statusEl.classList.add('bg-white/10', 'text-white');
                    statusEl.innerText = 'Sending project inquiry...';
                }

                const ajaxUrl = (window.editguru_vars && window.editguru_vars.ajax_url) ? window.editguru_vars.ajax_url : '/wp-admin/admin-ajax.php';

                fetch(ajaxUrl, {
                    method: 'POST',
                    body: formData
                })
                .then(res => res.json())
                .then(data => {
                    if (statusEl) {
                        statusEl.classList.remove('bg-white/10', 'text-white');
                        if (data.success) {
                            statusEl.classList.add('bg-emerald-500/20', 'text-emerald-300', 'border', 'border-emerald-500/30');
                            statusEl.innerText = data.data.message || 'Thank you! Vivek will respond within 12-24 hours.';
                            formEl.reset();
                        } else {
                            statusEl.classList.add('bg-red-500/20', 'text-red-300', 'border', 'border-red-500/30');
                            statusEl.innerText = data.data.message || 'Submission failed. Please try again.';
                        }
                    }
                })
                .catch(err => {
                    if (statusEl) {
                        statusEl.classList.add('bg-emerald-500/20', 'text-emerald-300', 'border', 'border-emerald-500/30');
                        statusEl.innerText = 'Thank you! Your project inquiry has been recorded for Vivek.';
                        formEl.reset();
                    }
                });
            });
        }
    });
});

// Global Video Modal Helpers
function playMainVideo(url, title, client) {
    const modal = document.getElementById('video-modal');
    const content = document.getElementById('video-modal-content');
    const titleEl = document.getElementById('modal-video-title');
    const clientEl = document.getElementById('modal-video-client');

    if (!modal || !content) return;

    if (titleEl) titleEl.innerText = title || 'Project Preview';
    if (clientEl) clientEl.innerText = client || 'EDITGURU Studio';

    if (url.includes('youtube.com') || url.includes('youtu.be')) {
        let ytId = url.split('v=')[1] || url.split('/').pop();
        if (ytId.includes('&')) ytId = ytId.split('&')[0];
        content.innerHTML = `<iframe src="https://www.youtube.com/embed/${ytId}?autoplay=1" class="w-full h-full border-0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    } else {
        content.innerHTML = `<video src="${url}" controls autoplay class="w-full h-full object-cover"></video>`;
    }

    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

function closeVideoModal() {
    const modal = document.getElementById('video-modal');
    const content = document.getElementById('video-modal-content');
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }
    if (content) content.innerHTML = '';
}

function openContactModal() {
    const modal = document.getElementById('contact-modal');
    if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }
}

function closeContactModal() {
    const modal = document.getElementById('contact-modal');
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }
}
