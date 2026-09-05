import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CreatorStats } from './components/CreatorStats';
import { FeaturedWork } from './components/FeaturedWork';
import { AboutPreview } from './components/AboutPreview';
import { ServicesPreview } from './components/ServicesPreview';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ContactModal } from './components/ContactModal';
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
      {/* Background Soft Moving Light & Ambient Liquid Noise */}
      <div className="fixed inset-0 pointer-events-none -z-30 overflow-hidden">
        {/* Subtle Ambient Film Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[600px] bg-gradient-to-b from-white/5 via-transparent to-transparent blur-3xl" />
        <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-3xl" />
        <div className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-3xl" />
        
        {/* Film grain subtle overlay */}
        <div className="absolute inset-0 film-grain opacity-20" />
      </div>

      {/* Floating Transparent Glass Navbar */}
      <Navbar
        onOpenContact={() => handleOpenContact()}
        audioActive={audioActive}
        toggleAudio={toggleAudio}
      />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col items-center w-full">
        {/* 1. Cinematic Hero Section with Hero Visual */}
        <Hero
          onExploreWork={handleExploreWork}
          onStartProject={() => handleOpenContact()}
          onOpenProject={handleOpenProjectById}
        />

        {/* 2. Creator Stats (Minimal Glass Statistic Cards, Editable Numbers) */}
        <CreatorStats />

        {/* 3. Featured Work Preview (SELECTED WORK) */}
        <FeaturedWork
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* 4. About Preview (BEHIND THE EDIT) */}
        <AboutPreview
          onStartProject={() => handleOpenContact('Cinematic Projects')}
        />

        {/* 5. Services Preview (WHAT I CREATE) */}
        <ServicesPreview
          onSelectService={(serviceTitle) => handleOpenContact(serviceTitle)}
        />

        {/* 6. Final Call to Action (LET'S CREATE SOMETHING GREAT) */}
        <FinalCTA
          onContactClick={() => handleOpenContact()}
        />
      </main>

      {/* 7. Minimal Dark Glass Footer */}
      <Footer
        onOpenContact={() => handleOpenContact()}
      />

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
