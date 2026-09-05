import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CreatorStats } from './components/CreatorStats';
import { FeaturedWork } from './components/FeaturedWork';
import { AboutPreview } from './components/AboutPreview';
import { ServicesPreview } from './components/ServicesPreview';
import { YouTubeShowcase } from './components/YouTubeShowcase';
import { InstagramCreations } from './components/InstagramCreations';
import { BlogSection } from './components/BlogSection';
import { FacebookCommunity } from './components/FacebookCommunity';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ContactModal } from './components/ContactModal';
import { CinematicSection } from './components/CinematicSection';
import { ProjectItem } from './types';
import { PORTFOLIO_PROJECTS } from './data/portfolioData';
import { cinemaAudio } from './utils/audio';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [prefilledService, setPrefilledService] = useState<string>('Reels & Shorts');
  const [audioActive, setAudioActive] = useState(false);

  const toggleAudio = () => {
    const status = cinemaAudio.toggle();
    setAudioActive(status);
  };

  const handleOpenContact = (service?: string) => {
    if (service) {
      setPrefilledService(service);
    }
    setIsContactOpen(true);
  };

  const handleOpenProjectById = (projectId: string) => {
    const found = PORTFOLIO_PROJECTS.find((p) => p.id === projectId);
    if (found) {
      setSelectedProject(found);
    }
  };

  const handleExploreWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-white selection:text-black relative overflow-x-hidden font-sans">
      {/* Animated Scroll Progress Bar at the very top */}
      <ScrollProgressBar />

      {/* Background Soft Moving Light & Ambient Liquid Noise with smooth initial fade-in */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="fixed inset-0 pointer-events-none -z-30 overflow-hidden"
      >
        {/* Subtle Ambient Film Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[600px] bg-gradient-to-b from-white/5 via-transparent to-transparent blur-3xl" />
        <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-3xl" />
        <div className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-3xl" />
        
        {/* Film grain subtle overlay */}
        <div className="absolute inset-0 film-grain opacity-20" />
      </motion.div>

      {/* Floating Transparent Glass Navbar */}
      <Navbar
        onOpenContact={() => handleOpenContact()}
        audioActive={audioActive}
        toggleAudio={toggleAudio}
      />

      {/* Main Content Sections with Cinematic Staggered Fade-in */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex flex-col items-center w-full"
      >
        {/* 1. Cinematic Hero Section with Hero Visual */}
        <CinematicSection isHero delay={0.06} duration={0.9} yOffset={20}>
          <Hero
            onExploreWork={handleExploreWork}
            onStartProject={() => handleOpenContact()}
            onOpenProject={handleOpenProjectById}
          />
        </CinematicSection>

        {/* 2. Creator Stats (Minimal Glass Statistic Cards) */}
        <CinematicSection delay={0.1} duration={0.85} yOffset={22}>
          <CreatorStats />
        </CinematicSection>

        {/* 3. YouTube Showcase Hub (@nomadvivek) */}
        <CinematicSection delay={0.08} duration={0.85} yOffset={24}>
          <YouTubeShowcase />
        </CinematicSection>

        {/* 4. Featured Work Preview (SELECTED WORK) */}
        <CinematicSection delay={0.08} duration={0.85} yOffset={24}>
          <FeaturedWork
            onSelectProject={(project) => setSelectedProject(project)}
          />
        </CinematicSection>

        {/* 5. Instagram Creations (@realnomadvivek) */}
        <CinematicSection delay={0.08} duration={0.85} yOffset={24}>
          <InstagramCreations />
        </CinematicSection>

        {/* 6. Services Preview (WHAT I CREATE - 8 Services) */}
        <CinematicSection delay={0.08} duration={0.85} yOffset={24}>
          <ServicesPreview
            onSelectService={(serviceTitle) => handleOpenContact(serviceTitle)}
          />
        </CinematicSection>

        {/* 7. About Preview (VIVEK PANDEY - DIRECTOR'S SUITE) */}
        <CinematicSection delay={0.08} duration={0.85} yOffset={24}>
          <AboutPreview
            onStartProject={() => handleOpenContact('Cinematic Projects')}
          />
        </CinematicSection>

        {/* 8. The Editing Journal (BLOG SECTION) */}
        <CinematicSection delay={0.08} duration={0.85} yOffset={24}>
          <BlogSection />
        </CinematicSection>

        {/* 9. Facebook Community & Share */}
        <CinematicSection delay={0.08} duration={0.85} yOffset={24}>
          <FacebookCommunity />
        </CinematicSection>

        {/* 10. FAQ Section (FREQUENTLY ASKED QUESTIONS) */}
        <CinematicSection delay={0.08} duration={0.85} yOffset={24}>
          <FAQSection
            onOpenContact={(service) => handleOpenContact(service || 'General FAQ Inquiry')}
          />
        </CinematicSection>

        {/* 11. Final Call to Action (LET'S CREATE SOMETHING GREAT) */}
        <CinematicSection delay={0.08} duration={0.85} yOffset={24}>
          <FinalCTA
            onContactClick={() => handleOpenContact()}
          />
        </CinematicSection>
      </motion.main>

      {/* 7. Minimal Dark Glass Footer */}
      <CinematicSection delay={0.05} duration={0.8} yOffset={18}>
        <Footer
          onOpenContact={() => handleOpenContact()}
        />
      </CinematicSection>

      {/* Interactive Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquireSimilar={(projectName) => {
          setSelectedProject(null);
          handleOpenContact(`Similar to ${projectName}`);
        }}
      />

      {/* Interactive Contact & Ingestion Drawer/Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        prefilledService={prefilledService}
      />
    </div>
  );
}
