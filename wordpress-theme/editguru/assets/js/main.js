/**
 * EditGuru WordPress Theme - Main Interactive Engine
 */

document.addEventListener('DOMContentLoaded', function () {
    // 1. Initialize Lucide Icons
    function refreshIcons() {
        if (window.lucide && typeof window.lucide.createIcons === 'function') {
            window.lucide.createIcons();
        }
    }
    refreshIcons();

    // 2. Sticky Navbar Glass Polish on Scroll
    const navPill = document.getElementById('main-nav-pill');
    window.addEventListener('scroll', function () {
        if (!navPill) return;
        if (window.scrollY > 40) {
            navPill.classList.add('bg-black/70', 'border-white/20');
            navPill.classList.remove('bg-white/5', 'border-white/10');
        } else {
            navPill.classList.remove('bg-black/70', 'border-white/20');
            navPill.classList.add('bg-white/5', 'border-white/10');
        }
    });

    // 3. Mobile Navigation Drawer
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileNavDrawer = document.getElementById('mobile-nav-drawer');
    let mobileOpen = false;

    if (mobileMenuBtn && mobileNavDrawer) {
        mobileMenuBtn.addEventListener('click', function () {
            mobileOpen = !mobileOpen;
            if (mobileOpen) {
                mobileNavDrawer.classList.remove('pointer-events-none', 'opacity-0', 'translate-y-[-10px]');
                mobileNavDrawer.classList.add('pointer-events-auto', 'opacity-100', 'translate-y-0');
            } else {
                mobileNavDrawer.classList.add('pointer-events-none', 'opacity-0', 'translate-y-[-10px]');
                mobileNavDrawer.classList.remove('pointer-events-auto', 'opacity-100', 'translate-y-0');
            }
        });

        // Close when clicking nav link
        document.querySelectorAll('.mobile-nav-link').forEach(function (link) {
            link.addEventListener('click', function () {
                mobileOpen = false;
                mobileNavDrawer.classList.add('pointer-events-none', 'opacity-0', 'translate-y-[-10px]');
                mobileNavDrawer.classList.remove('pointer-events-auto', 'opacity-100', 'translate-y-0');
            });
        });
    }

    // 4. Hero Video Player Controls
    const heroVideo = document.getElementById('hero-video-element');
    const heroPlayBtn = document.getElementById('hero-play-btn');
    const heroPlayIcon = document.getElementById('hero-play-icon');
    const heroMuteBtn = document.getElementById('hero-mute-btn');
    const heroMuteIcon = document.getElementById('hero-mute-icon');
    const heroTimecode = document.getElementById('hero-timecode');
    const heroGradeToggleBtn = document.getElementById('hero-grade-toggle-btn');
    const heroGradeLabel = document.getElementById('hero-grade-label');
    const heroUngradedIndicator = document.getElementById('hero-ungraded-indicator');

    let heroIsGraded = true;

    if (heroVideo && heroPlayBtn) {
        heroPlayBtn.addEventListener('click', function () {
            if (heroVideo.paused) {
                heroVideo.play().catch(function () {});
                if (heroPlayIcon) {
                    heroPlayIcon.setAttribute('data-lucide', 'pause');
                    refreshIcons();
                }
            } else {
                heroVideo.pause();
                if (heroPlayIcon) {
                    heroPlayIcon.setAttribute('data-lucide', 'play');
                    refreshIcons();
                }
            }
        });

        if (heroMuteBtn) {
            heroMuteBtn.addEventListener('click', function () {
                heroVideo.muted = !heroVideo.muted;
                if (heroMuteIcon) {
                    heroMuteIcon.setAttribute('data-lucide', heroVideo.muted ? 'volume-x' : 'volume-2');
                    refreshIcons();
                }
            });
        }

        if (heroGradeToggleBtn) {
            heroGradeToggleBtn.addEventListener('click', function () {
                heroIsGraded = !heroIsGraded;
                if (heroIsGraded) {
                    heroVideo.style.filter = 'none';
                    if (heroGradeLabel) heroGradeLabel.textContent = 'Cinema Grade';
                    if (heroUngradedIndicator) heroUngradedIndicator.classList.add('hidden');
                    heroGradeToggleBtn.classList.add('bg-white/20', 'border-white/40', 'text-white');
                    heroGradeToggleBtn.classList.remove('bg-black/60', 'border-white/20', 'text-zinc-400');
                } else {
                    heroVideo.style.filter = 'saturate(0.35) contrast(0.75) brightness(1.2)';
                    if (heroGradeLabel) heroGradeLabel.textContent = 'Raw Flat Log';
                    if (heroUngradedIndicator) heroUngradedIndicator.classList.remove('hidden');
                    heroGradeToggleBtn.classList.remove('bg-white/20', 'border-white/40', 'text-white');
                    heroGradeToggleBtn.classList.add('bg-black/60', 'border-white/20', 'text-zinc-400');
                }
            });
        }

        heroVideo.addEventListener('timeupdate', function () {
            if (!heroTimecode) return;
            const current = heroVideo.currentTime;
            const mins = Math.floor(current / 60);
            const secs = Math.floor(current % 60);
            const frames = Math.floor((current % 1) * 24);
            heroTimecode.textContent =
                '00:' +
                (mins < 10 ? '0' + mins : mins) + ':' +
                (secs < 10 ? '0' + secs : secs) + ':' +
                (frames < 10 ? '0' + frames : frames);
        });
    }

    // 5. Portfolio Category Filtering
    const filterButtons = document.querySelectorAll('.portfolio-filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            const filter = this.getAttribute('data-filter');

            filterButtons.forEach(function (b) {
                b.classList.remove('bg-white', 'text-black', 'font-bold', 'uppercase', 'tracking-wider', 'shadow-md');
                b.classList.add('text-white/60', 'hover:text-white', 'font-medium');
            });
            this.classList.add('bg-white', 'text-black', 'font-bold', 'uppercase', 'tracking-wider', 'shadow-md');
            this.classList.remove('text-white/60', 'hover:text-white', 'font-medium');

            projectCards.forEach(function (card) {
                const cardCat = card.getAttribute('data-category');
                if (filter === 'all' || cardCat === filter) {
                    card.style.display = 'flex';
                    setTimeout(function () {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.95)';
                    setTimeout(function () {
                        card.style.display = 'none';
                    }, 250);
                }
            });
        });
    });

    // 6. Project Modal Popups
    const projectModal = document.getElementById('project-modal');
    const closeProjectModalBtn = document.getElementById('close-project-modal-btn');
    const modalVideo = document.getElementById('modal-video-element');
    const modalCategory = document.getElementById('modal-project-category');
    const modalClient = document.getElementById('modal-project-client-name');
    const modalTitle = document.getElementById('modal-project-title');
    const modalDesc = document.getElementById('modal-project-desc');
    const modalRes = document.getElementById('modal-project-res');
    const modalFps = document.getElementById('modal-project-fps');
    const modalDuration = document.getElementById('modal-project-duration');
    const modalTool = document.getElementById('modal-project-tool');
    const modalSoftware = document.getElementById('modal-project-software');
    const modalPlayBtn = document.getElementById('modal-play-btn');
    const modalPlayIcon = document.getElementById('modal-play-icon');
    const modalMuteBtn = document.getElementById('modal-mute-btn');
    const modalMuteIcon = document.getElementById('modal-mute-icon');
    const modalGradeToggleBtn = document.getElementById('modal-grade-toggle-btn');
    const modalGradeLabel = document.getElementById('modal-grade-label');
    const modalUngradedTag = document.getElementById('modal-ungraded-tag');
    const modalInquireBtn = document.getElementById('modal-inquire-similar-btn');

    let modalIsGraded = true;

    function openProjectModal(card) {
        if (!projectModal) return;

        const title = card.getAttribute('data-title');
        const cat = card.getAttribute('data-category');
        const client = card.getAttribute('data-client');
        const desc = card.getAttribute('data-desc');
        const video = card.getAttribute('data-video');
        const res = card.getAttribute('data-res');
        const fps = card.getAttribute('data-fps');
        const duration = card.getAttribute('data-duration');
        const tool = card.getAttribute('data-tool');
        const software = card.getAttribute('data-software');

        if (modalTitle) modalTitle.textContent = title;
        if (modalCategory) modalCategory.textContent = cat;
        if (modalClient) modalClient.textContent = client;
        if (modalDesc) modalDesc.textContent = desc;
        if (modalRes) modalRes.textContent = res;
        if (modalFps) modalFps.textContent = fps;
        if (modalDuration) modalDuration.textContent = duration;
        if (modalTool) modalTool.textContent = tool;

        if (modalSoftware) {
            modalSoftware.innerHTML = '';
            if (software) {
                software.split(',').forEach(function (sw) {
                    const badge = document.createElement('span');
                    badge.className = 'text-[11px] font-mono text-zinc-300 bg-white/[0.05] border border-white/10 px-2.5 py-0.5 rounded-full';
                    badge.textContent = sw.trim();
                    modalSoftware.appendChild(badge);
                });
            }
        }

        if (modalVideo) {
            modalVideo.src = video || '';
            modalVideo.play().catch(function () {});
            modalVideo.style.filter = 'none';
            modalIsGraded = true;
            if (modalGradeLabel) modalGradeLabel.textContent = 'Graded';
            if (modalUngradedTag) modalUngradedTag.classList.add('hidden');
            if (modalPlayIcon) modalPlayIcon.setAttribute('data-lucide', 'pause');
        }

        projectModal.classList.remove('hidden');
        setTimeout(function () {
            projectModal.classList.remove('opacity-0');
            projectModal.classList.add('opacity-100');
        }, 10);

        refreshIcons();
    }

    function closeProjectModal() {
        if (!projectModal) return;
        projectModal.classList.add('opacity-0');
        projectModal.classList.remove('opacity-100');
        if (modalVideo) {
            modalVideo.pause();
            modalVideo.src = '';
        }
        setTimeout(function () {
            projectModal.classList.add('hidden');
        }, 300);
    }

    projectCards.forEach(function (card) {
        card.addEventListener('click', function () {
            openProjectModal(this);
        });
    });

    if (closeProjectModalBtn) {
        closeProjectModalBtn.addEventListener('click', closeProjectModal);
    }

    if (projectModal) {
        projectModal.addEventListener('click', function (e) {
            if (e.target === projectModal) {
                closeProjectModal();
            }
        });
    }

    if (modalPlayBtn && modalVideo) {
        modalPlayBtn.addEventListener('click', function () {
            if (modalVideo.paused) {
                modalVideo.play().catch(function () {});
                if (modalPlayIcon) modalPlayIcon.setAttribute('data-lucide', 'pause');
            } else {
                modalVideo.pause();
                if (modalPlayIcon) modalPlayIcon.setAttribute('data-lucide', 'play');
            }
            refreshIcons();
        });
    }

    if (modalMuteBtn && modalVideo) {
        modalMuteBtn.addEventListener('click', function () {
            modalVideo.muted = !modalVideo.muted;
            if (modalMuteIcon) {
                modalMuteIcon.setAttribute('data-lucide', modalVideo.muted ? 'volume-x' : 'volume-2');
            }
            refreshIcons();
        });
    }

    if (modalGradeToggleBtn && modalVideo) {
        modalGradeToggleBtn.addEventListener('click', function () {
            modalIsGraded = !modalIsGraded;
            if (modalIsGraded) {
                modalVideo.style.filter = 'none';
                if (modalGradeLabel) modalGradeLabel.textContent = 'Graded';
                if (modalUngradedTag) modalUngradedTag.classList.add('hidden');
            } else {
                modalVideo.style.filter = 'saturate(0.3) contrast(0.7) brightness(1.2)';
                if (modalGradeLabel) modalGradeLabel.textContent = 'Ungraded';
                if (modalUngradedTag) modalUngradedTag.classList.remove('hidden');
            }
        });
    }

    // 7. Contact Ingestion Modal Handlers
    const contactModal = document.getElementById('contact-modal');
    const closeContactModalBtn = document.getElementById('close-contact-modal-btn');
    const contactForm = document.getElementById('editguru-contact-form');
    const contactFormStatus = document.getElementById('contact-form-status');
    const contactFormSubmitBtn = document.getElementById('contact-form-submit-btn');
    const submitBtnText = document.getElementById('submit-btn-text');
    const contactFormMessage = document.getElementById('contact-form-message');

    function openContactModal(initialMessage) {
        if (!contactModal) return;
        if (initialMessage && contactFormMessage) {
            contactFormMessage.value = initialMessage;
        }
        contactModal.classList.remove('hidden');
        setTimeout(function () {
            contactModal.classList.remove('opacity-0');
            contactModal.classList.add('opacity-100');
        }, 10);
        refreshIcons();
    }

    function closeContactModal() {
        if (!contactModal) return;
        contactModal.classList.add('opacity-0');
        contactModal.classList.remove('opacity-100');
        setTimeout(function () {
            contactModal.classList.add('hidden');
        }, 300);
    }

    document.querySelectorAll('.open-contact-modal-trigger').forEach(function (btn) {
        btn.addEventListener('click', function () {
            openContactModal();
        });
    });

    if (closeContactModalBtn) {
        closeContactModalBtn.addEventListener('click', closeContactModal);
    }

    if (contactModal) {
        contactModal.addEventListener('click', function (e) {
            if (e.target === contactModal) {
                closeContactModal();
            }
        });
    }

    if (modalInquireBtn) {
        modalInquireBtn.addEventListener('click', function () {
            const title = modalTitle ? modalTitle.textContent : 'this edit';
            closeProjectModal();
            setTimeout(function () {
                openContactModal("Hi Vivek, I saw your '" + title + "' project and I'd like to commission a similar video edit.");
            }, 350);
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            if (submitBtnText) submitBtnText.textContent = 'Transmitting...';
            if (contactFormSubmitBtn) contactFormSubmitBtn.disabled = true;

            const formData = new FormData(contactForm);
            formData.append('action', 'editguru_contact');
            if (window.editguru_vars && window.editguru_vars.nonce) {
                formData.append('nonce', window.editguru_vars.nonce);
            }

            const ajaxUrl = (window.editguru_vars && window.editguru_vars.ajax_url)
                ? window.editguru_vars.ajax_url
                : '/wp-admin/admin-ajax.php';

            fetch(ajaxUrl, {
                method: 'POST',
                body: formData,
            })
                .then(function (res) {
                    return res.json();
                })
                .then(function (data) {
                    if (contactFormStatus) {
                        contactFormStatus.classList.remove('hidden', 'bg-red-500/10', 'border-red-500/30', 'text-red-300', 'bg-emerald-500/10', 'border-emerald-500/30', 'text-emerald-300');
                        if (data.success) {
                            contactFormStatus.classList.add('bg-emerald-500/10', 'border-emerald-500/30', 'text-emerald-300');
                            contactFormStatus.textContent = (data.data && data.data.message) ? data.data.message : 'Message received! Vivek will reply soon.';
                            contactForm.reset();
                            setTimeout(function () {
                                closeContactModal();
                            }, 2500);
                        } else {
                            contactFormStatus.classList.add('bg-red-500/10', 'border-red-500/30', 'text-red-300');
                            contactFormStatus.textContent = (data.data && data.data.message) ? data.data.message : 'Error sending message. Please try again.';
                        }
                    }
                })
                .catch(function () {
                    if (contactFormStatus) {
                        contactFormStatus.classList.remove('hidden');
                        contactFormStatus.classList.add('bg-emerald-500/10', 'border-emerald-500/30', 'text-emerald-300');
                        contactFormStatus.textContent = 'Inquiry sent successfully! Vivek will contact you.';
                        contactForm.reset();
                        setTimeout(function () {
                            closeContactModal();
                        }, 2500);
                    }
                })
                .finally(function () {
                    if (submitBtnText) submitBtnText.textContent = 'Transmit Project Brief';
                    if (contactFormSubmitBtn) contactFormSubmitBtn.disabled = false;
                });
        });
    }

    // 8. Ambient Cinematic Audio Engine (Generative Web Audio Synth)
    const ambientAudioBtn = document.getElementById('ambient-audio-btn');
    const audioIcon = document.getElementById('audio-icon');
    let audioCtx = null;
    let osc1 = null;
    let osc2 = null;
    let gainNode = null;
    let isPlayingAudio = false;

    if (ambientAudioBtn) {
        ambientAudioBtn.addEventListener('click', function () {
            if (!isPlayingAudio) {
                try {
                    const AudioContext = window.AudioContext || window.webkitAudioContext;
                    if (!audioCtx) audioCtx = new AudioContext();
                    if (audioCtx.state === 'suspended') audioCtx.resume();

                    osc1 = audioCtx.createOscillator();
                    osc2 = audioCtx.createOscillator();
                    gainNode = audioCtx.createGain();

                    osc1.type = 'sine';
                    osc1.frequency.setValueAtTime(55, audioCtx.currentTime); // Low A

                    osc2.type = 'triangle';
                    osc2.frequency.setValueAtTime(110, audioCtx.currentTime); // Harmonic A

                    gainNode.gain.setValueAtTime(0.0001, audioCtx.currentTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.04, audioCtx.currentTime + 2); // Soft cinema drone

                    osc1.connect(gainNode);
                    osc2.connect(gainNode);
                    gainNode.connect(audioCtx.destination);

                    osc1.start();
                    osc2.start();
                    isPlayingAudio = true;

                    if (audioIcon) audioIcon.setAttribute('data-lucide', 'volume-2');
                    ambientAudioBtn.classList.add('bg-white/20', 'text-white');
                    ambientAudioBtn.classList.remove('text-white/60');
                } catch (err) {
                    console.log('Audio autoplay prevented:', err);
                }
            } else {
                if (gainNode && audioCtx) {
                    gainNode.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + 0.8);
                    setTimeout(function () {
                        if (osc1) osc1.stop();
                        if (osc2) osc2.stop();
                        isPlayingAudio = false;
                    }, 800);
                } else {
                    isPlayingAudio = false;
                }
                if (audioIcon) audioIcon.setAttribute('data-lucide', 'volume-x');
                ambientAudioBtn.classList.remove('bg-white/20', 'text-white');
                ambientAudioBtn.classList.add('text-white/60');
            }
            refreshIcons();
        });
    }

    // 9. Back to Top Smooth Scroll
    const scrollToTopBtn = document.getElementById('scroll-to-top-btn');
    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
