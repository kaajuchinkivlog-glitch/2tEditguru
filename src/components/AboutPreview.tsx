import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  Film,
  Music,
  Video,
  Layers,
  Award,
  Check,
  Copy,
  ArrowRight,
  Tv,
  X,
  Sliders,
  Play,
  Volume2,
  Clock,
  Zap,
  Globe,
  CheckCircle2,
  Lock,
  Eye,
  SlidersHorizontal,
  FolderSync,
  Youtube,
} from 'lucide-react';
import { WORKFLOW_STEPS, CREATOR_SOFTWARE_SUITE } from '../data/portfolioData';
import { CreatorProfilePhoto } from './CreatorProfilePhoto';

interface AboutPreviewProps {
  onStartProject: () => void;
}

export const AboutPreview: React.FC<AboutPreviewProps> = ({ onStartProject }) => {
  const [showLearnMore, setShowLearnMore] = useState(false);
  const [modalTab, setModalTab] = useState<'philosophy' | 'software' | 'pipeline' | 'specs'>('philosophy');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeSpecialization, setActiveSpecialization] = useState<number>(0);

  // Escape key listener for Blueprint modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowLearnMore(false);
      }
    };
    if (showLearnMore) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showLearnMore]);

  const creatorEmail = 'vivek@editguru.in';

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText(creatorEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const specializations = [
    {
      id: 'music-videos',
      title: 'Music Video Direction & Editing',
      tag: '808 SYNC & BASS DROPS',
      icon: Music,
      desc: 'Frame-accurate beat matching, dynamic speed ramping, analog film burns, lens flares, glitch transitions, and stylized grade textures that match the artist’s sound identity.',
      tools: 'Premiere Pro • After Effects • Filmora',
      deliverables: '4K Master Cut • 9:16 Teaser Cuts • Color Mastered Clean & Graded',
    },
    {
      id: 'youtube-content',
      title: 'YouTube Narrative Pacing & Retention',
      tag: 'RETENTION-ENGINEERED',
      icon: Video,
      desc: 'Engineered specifically to maximize viewer retention graphs. Engaging 10-second hooks, micro-cuts, dynamic motion callouts, kinetic graphics, and layered multi-track sound design.',
      tools: 'Premiere Pro • CapCut • After Effects',
      deliverables: 'Full-Length 4K Master • Chapter Metadata • Custom Thumbnail Graphics',
    },
    {
      id: 'viral-reels',
      title: 'Viral Reels, Shorts & TikToks',
      tag: 'HIGH-VELOCITY 9:16',
      icon: Zap,
      desc: 'Hyper-retention vertical edits designed to stop the scroll. Punch zooms, velocity curves, synced trending audio, kinetic animated captions, and seamless loop design.',
      tools: 'CapCut • VN Video Editor • Premiere Pro',
      deliverables: '9:16 Vertical 4K/1080p • Burned-in Kinetic Captions • Batch Delivery',
    },
  ];

  return (
    <section id="about" className="relative py-20 sm:py-32 px-4 sm:px-6 w-full max-w-7xl mx-auto">
      {/* Background Soft Atmospheric Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-white/[0.02] rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Main Section Header with Film Slate Framing */}
      <div className="mb-10 sm:mb-16 flex flex-col items-center text-center">
        {/* Film metadata badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/15 text-[10px] sm:text-xs font-mono tracking-widest text-white/70 uppercase mb-4 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>AVAILABLE FOR NEW PROJECTS & CHANNELS</span>
        </div>

        <h2 className="text-3xl sm:text-6xl md:text-7xl tracking-tight text-white font-light uppercase">
          VIVEK <span className="font-serif italic font-normal text-white">PANDEY</span>
        </h2>

        <p className="mt-3 sm:mt-4 text-xs sm:text-base text-white/60 max-w-2xl font-mono-code tracking-wide">
          DIRECTOR’S SUITE • LEAD VIDEO EDITOR & CONTENT CREATOR • PACING SPECIALIST
        </p>

        {/* Delicate divider with sequence timecode mark */}
        <div className="mt-6 flex items-center justify-center gap-3 w-full max-w-xs text-[10px] font-mono text-white/30">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <span>TC 01:24:00:15</span>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
      </div>

      {/* Main Editorial Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
        
        {/* LEFT COLUMN (Cols 1-5): The Director's Portrait & Studio Station */}
        <div className="lg:col-span-5 flex flex-col gap-5">
          {/* Portrait Card */}
          <div className="p-4 sm:p-6 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl flex flex-col items-center shadow-2xl relative overflow-hidden">
            {/* Corner optical registration marks */}
            <div className="absolute top-2 left-2 text-[9px] font-mono text-white/20 select-none">┌ ARCHIVE</div>
            <div className="absolute top-2 right-2 text-[9px] font-mono text-white/20 select-none">SEQ_01 ┐</div>

            {/* Profile Photo Component with Camera Viewfinder HUD and Live LUT switcher */}
            <CreatorProfilePhoto />

            {/* Studio Badges & Fast Specs */}
            <div className="mt-5 w-full pt-4 border-t border-white/10 grid grid-cols-2 gap-3 text-left">
              <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-[10px] font-mono text-white/40 uppercase">Delivery Speed</div>
                <div className="text-xs font-semibold text-white mt-0.5 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-white/70" />
                  <span>24-48 Hours</span>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-[10px] font-mono text-white/40 uppercase">Master Standard</div>
                <div className="text-xs font-semibold text-white mt-0.5 flex items-center gap-1">
                  <Film className="w-3 h-3 text-white/70" />
                  <span>4K DCI ProRes</span>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-[10px] font-mono text-white/40 uppercase">Studio Location</div>
                <div className="text-xs font-semibold text-white mt-0.5 flex items-center gap-1">
                  <Globe className="w-3 h-3 text-white/70" />
                  <span>Global Remote</span>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-[10px] font-mono text-white/40 uppercase">Client Trust</div>
                <div className="text-xs font-semibold text-white mt-0.5 flex items-center gap-1">
                  <Award className="w-3 h-3 text-white/70" />
                  <span>99.4% On-Time</span>
                </div>
              </div>
            </div>

            {/* Copy Email Fast Action */}
            <div className="mt-4 w-full flex items-center justify-between p-2.5 rounded-2xl bg-white/[0.02] border border-white/10 text-xs">
              <div className="flex items-center gap-2 overflow-hidden">
                <span className="w-2 h-2 rounded-full bg-white/40 flex-shrink-0" />
                <span className="font-mono text-white/70 truncate text-[11px]">{creatorEmail}</span>
              </div>
              <button
                id="btn-copy-creator-email"
                onClick={handleCopyEmail}
                className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white text-white hover:text-black transition-all text-[10px] font-mono font-medium flex items-center gap-1 cursor-pointer flex-shrink-0"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Software Suite Showcase Card */}
          <div className="p-5 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-xl">
            <div className="flex items-center justify-between mb-3">
              <div className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-2">
                <Layers className="w-4 h-4 text-white/70" />
                <span>NLE Software Arsenal</span>
              </div>
              <span className="text-[10px] font-mono text-white/40">5 SUITES</span>
            </div>

            <div className="space-y-2">
              {CREATOR_SOFTWARE_SUITE.map((tool) => (
                <div
                  key={tool.name}
                  className="p-2.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/20 transition-all flex items-center justify-between"
                >
                  <div className="overflow-hidden">
                    <div className="text-xs font-semibold text-white truncate">{tool.name}</div>
                    <div className="text-[10px] text-white/50 truncate mt-0.5">{tool.description}</div>
                  </div>
                  <span className="text-[9px] font-mono uppercase tracking-wider px-2 py-1 rounded bg-white/5 border border-white/10 text-white/70 flex-shrink-0 ml-2">
                    {tool.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN (Cols 6-12): Manifesto, Timeline Sequencer, & Specializations */}
        <div className="lg:col-span-7 flex flex-col gap-5">
          
          {/* Manifesto & Director's Statement Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl relative">
            <div className="flex items-center gap-2 text-[10px] font-mono text-white/40 uppercase tracking-widest mb-3">
              <Film className="w-3.5 h-3.5 text-white/60" />
              <span>THE EDITING PHILOSOPHY</span>
            </div>

            <blockquote className="text-lg sm:text-2xl md:text-3xl text-white font-serif italic leading-snug border-l-2 border-white/40 pl-4 py-1">
              "Every cut carries a pulse. Pacing isn’t merely chopping footage on the beat—it’s commanding the audience’s breath, sustaining tension, and detonating the drop."
            </blockquote>

            <p className="mt-5 text-sm sm:text-base text-white/70 leading-relaxed font-light">
              I’m <strong className="text-white font-medium">Vivek Pandey</strong>, a creative video editor and digital storyteller dedicated to transforming raw footage into high-impact visual experiences. Whether sculpting a fast-paced hip-hop music video, engineering viewer retention for YouTube channels, or directing viral 9:16 vertical reels, my editing marries artistic sensibility with surgical timeline precision.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                id="profile-btn-start-project"
                onClick={onStartProject}
                className="px-6 py-3 rounded-full bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-white/90 transition-all flex items-center gap-2 shadow-xl cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                id="profile-btn-youtube-channel"
                href="https://youtube.com/@nomadvivek?si=Us88ZbP9u74A2jm_"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-full bg-red-600/20 hover:bg-red-600/30 border border-red-500/40 text-xs font-medium text-red-300 hover:text-white transition-all flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <Youtube className="w-3.5 h-3.5 text-red-400" />
                <span>@nomadvivek on YouTube</span>
              </a>

              <button
                id="profile-btn-creative-blueprint"
                onClick={() => setShowLearnMore(true)}
                className="px-5 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-medium text-white/80 hover:text-white transition-all flex items-center gap-2 cursor-pointer"
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>Creative Blueprint</span>
              </button>
            </div>
          </div>

          {/* Interactive NLE Sequencer Preview (Authentic Video Editor Timeline) */}
          <div className="p-5 sm:p-6 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-xl overflow-hidden">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-xs font-mono font-semibold text-white/80 ml-2">
                  SEQUENCE // NOMAD_VIVEK_THAILAND_MASTER.prproj
                </span>
              </div>

              <div className="flex items-center gap-3 text-[10px] font-mono text-white/50">
                <span className="hidden sm:inline">24.000 FPS</span>
                <span className="text-white font-bold bg-white/10 px-2 py-0.5 rounded">00:01:42:18</span>
              </div>
            </div>

            {/* Simulated Multi-track Timeline Channels */}
            <div className="space-y-2 font-mono text-[10px]">
              {/* Track V3: Titles & Kinetic Captions */}
              <div className="flex items-center gap-2">
                <div className="w-10 text-white/40 flex-shrink-0 flex items-center gap-1">
                  <Lock className="w-2.5 h-2.5" />
                  <span>V3</span>
                </div>
                <div className="flex-1 h-7 bg-white/[0.04] rounded-lg border border-white/10 flex items-center px-3 relative overflow-hidden">
                  <div className="absolute left-[15%] w-[45%] h-full bg-white/20 border-r border-l border-white/40 flex items-center px-2 text-[9px] text-white font-sans font-medium truncate">
                    Kinetic Captions & 3D Title Motion
                  </div>
                  <div className="absolute left-[70%] w-[25%] h-full bg-white/15 border-r border-l border-white/40 flex items-center px-2 text-[9px] text-white font-sans font-medium truncate">
                    Glitch Overlay FX
                  </div>
                </div>
              </div>

              {/* Track V2: B-Roll & Speed Ramps */}
              <div className="flex items-center gap-2">
                <div className="w-10 text-white/40 flex-shrink-0 flex items-center gap-1">
                  <Eye className="w-2.5 h-2.5 text-white/60" />
                  <span>V2</span>
                </div>
                <div className="flex-1 h-7 bg-white/[0.04] rounded-lg border border-white/10 flex items-center px-3 relative overflow-hidden">
                  <div className="absolute left-[5%] w-[35%] h-full bg-zinc-300/20 border-r border-l border-white/30 flex items-center px-2 text-[9px] text-white/90 truncate">
                    Speed Ramp 1000% → 40%
                  </div>
                  <div className="absolute left-[45%] w-[30%] h-full bg-zinc-300/25 border-r border-l border-white/30 flex items-center px-2 text-[9px] text-white/90 truncate">
                    Anamorphic Lens Flares
                  </div>
                </div>
              </div>

              {/* Track V1: A-Roll 4K Master */}
              <div className="flex items-center gap-2">
                <div className="w-10 text-white/70 font-bold flex-shrink-0 flex items-center gap-1">
                  <Eye className="w-2.5 h-2.5 text-white" />
                  <span>V1</span>
                </div>
                <div className="flex-1 h-7 bg-white/[0.08] rounded-lg border border-white/20 flex items-center px-3 relative overflow-hidden">
                  <div className="absolute left-0 w-full h-full bg-gradient-to-r from-white/15 via-white/25 to-white/15 flex items-center justify-between px-3 text-[9px] text-white font-medium">
                    <span>A-ROLL_4K_DCI_CAM_A_SLOG3.mov</span>
                    <span className="text-white/60">COLOR GRADED // 35MM NOIR</span>
                  </div>
                </div>
              </div>

              {/* Track A1: Audio Voice & Dialogue */}
              <div className="flex items-center gap-2 pt-1">
                <div className="w-10 text-white/40 flex-shrink-0 flex items-center gap-1">
                  <Volume2 className="w-2.5 h-2.5 text-white/60" />
                  <span>A1</span>
                </div>
                <div className="flex-1 h-6 bg-white/[0.03] rounded-lg border border-white/10 flex items-center px-3 relative overflow-hidden">
                  <div className="absolute left-[10%] w-[80%] h-full bg-white/10 flex items-center justify-between px-2 text-[9px] text-white/80">
                    <span>Master Dialogue (-14 LUFS)</span>
                    {/* Simulated mini audio wave bars */}
                    <div className="flex items-center gap-0.5">
                      <span className="w-0.5 h-3 bg-white/60 rounded animate-pulse" />
                      <span className="w-0.5 h-4 bg-white/80 rounded" />
                      <span className="w-0.5 h-2 bg-white/50 rounded animate-pulse" />
                      <span className="w-0.5 h-4 bg-white rounded" />
                      <span className="w-0.5 h-1.5 bg-white/40 rounded" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Track A2: 808 Bass Drops & Foley */}
              <div className="flex items-center gap-2">
                <div className="w-10 text-white/40 flex-shrink-0 flex items-center gap-1">
                  <Volume2 className="w-2.5 h-2.5 text-white/60" />
                  <span>A2</span>
                </div>
                <div className="flex-1 h-6 bg-white/[0.03] rounded-lg border border-white/10 flex items-center px-3 relative overflow-hidden">
                  <div className="absolute left-[20%] w-[30%] h-full bg-white/15 border-r border-l border-white/20 flex items-center px-2 text-[9px] text-white/80">
                    808 Sub-Bass Impact Detonation
                  </div>
                  <div className="absolute left-[55%] w-[40%] h-full bg-white/15 border-r border-l border-white/20 flex items-center px-2 text-[9px] text-white/80">
                    Riser Whoosh + Sub Hit
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline Controls Footer */}
            <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between text-[10px] font-mono text-white/50">
              <div className="flex items-center gap-3">
                <span className="text-white font-medium flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>Frame-Accurate Beat Snapping</span>
                </span>
                <span className="hidden sm:inline">•</span>
                <span className="hidden sm:inline">10-Bit Color Depth Pipeline</span>
              </div>
              <div className="flex items-center gap-1 text-white/70">
                <span>PEAK:</span>
                <span className="text-emerald-400 font-bold">-0.8 dB</span>
              </div>
            </div>
          </div>

          {/* Interactive 3 Specializations Matrix */}
          <div className="p-5 sm:p-6 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <div className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-white/70" />
                <span>Creative Specializations</span>
              </div>
              <span className="text-[10px] font-mono text-white/40">SELECT TO EXPLORE</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-4">
              {specializations.map((spec, index) => {
                const Icon = spec.icon;
                const isSelected = activeSpecialization === index;
                return (
                  <button
                    key={spec.id}
                    onClick={() => setActiveSpecialization(index)}
                    className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-white text-black border-white shadow-lg'
                        : 'bg-white/[0.02] border-white/[0.08] text-white hover:border-white/20 hover:bg-white/[0.05]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <Icon className={`w-4 h-4 ${isSelected ? 'text-black' : 'text-white/80'}`} />
                      <span className={`text-[8px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded ${
                        isSelected ? 'bg-black/10 text-black font-semibold' : 'bg-white/10 text-white/60'
                      }`}>
                        {spec.tag}
                      </span>
                    </div>
                    <div className={`text-xs font-bold leading-tight ${isSelected ? 'text-black' : 'text-white'}`}>
                      {spec.title.split(' ')[0]} {spec.title.split(' ')[1]}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Specialization Details Panel */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-left">
              <div className="text-sm font-bold text-white mb-1">
                {specializations[activeSpecialization].title}
              </div>
              <p className="text-xs text-white/70 leading-relaxed">
                {specializations[activeSpecialization].desc}
              </p>
              
              <div className="mt-3 pt-3 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono">
                <div className="text-white/50">
                  <span className="text-white/30 uppercase mr-1.5">Tools:</span>
                  <span className="text-white/80">{specializations[activeSpecialization].tools}</span>
                </div>
                <div className="text-white/50">
                  <span className="text-white/30 uppercase mr-1.5">Deliverables:</span>
                  <span className="text-white/80">{specializations[activeSpecialization].deliverables}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Deep-Dive Creative Blueprint & FAQ Modal */}
      <AnimatePresence>
        {showLearnMore && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-xl"
            onClick={() => setShowLearnMore(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto bg-[#0d0d10] border border-white/20 rounded-3xl p-5 sm:p-8 shadow-2xl text-left"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-5 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center">
                    <Film className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                      Vivek Pandey's Creative Blueprint
                    </h3>
                    <p className="text-xs text-white/50 font-mono">
                      EDITORIAL METHODOLOGY • TECHNICAL STANDARDS • PIPELINE
                    </p>
                  </div>
                </div>
                <button
                  id="close-learn-more-modal"
                  onClick={() => setShowLearnMore(false)}
                  aria-label="Close Blueprint Modal"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 active:bg-white/25 border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Navigation Tabs */}
              <div className="flex items-center gap-1.5 p-1 bg-white/5 rounded-2xl border border-white/10 my-5 overflow-x-auto">
                <button
                  onClick={() => setModalTab('philosophy')}
                  className={`flex-1 min-h-[40px] py-2 px-3 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    modalTab === 'philosophy' ? 'bg-white text-black shadow' : 'text-white/60 hover:text-white'
                  }`}
                >
                  Philosophy & Bio
                </button>
                <button
                  onClick={() => setModalTab('software')}
                  className={`flex-1 min-h-[40px] py-2 px-3 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    modalTab === 'software' ? 'bg-white text-black shadow' : 'text-white/60 hover:text-white'
                  }`}
                >
                  Software Arsenal
                </button>
                <button
                  onClick={() => setModalTab('pipeline')}
                  className={`flex-1 min-h-[40px] py-2 px-3 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    modalTab === 'pipeline' ? 'bg-white text-black shadow' : 'text-white/60 hover:text-white'
                  }`}
                >
                  4-Step Pipeline
                </button>
                <button
                  onClick={() => setModalTab('specs')}
                  className={`flex-1 min-h-[40px] py-2 px-3 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    modalTab === 'specs' ? 'bg-white text-black shadow' : 'text-white/60 hover:text-white'
                  }`}
                >
                  Delivery Specs & FAQ
                </button>
              </div>

              {/* Tab Contents */}
              <div className="space-y-6 text-sm text-white/80 font-light">
                {modalTab === 'philosophy' && (
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-white font-semibold text-base mb-1.5 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-white" />
                        The Story Behind EditGuru
                      </h4>
                      <p className="leading-relaxed text-white/60">
                        EditGuru was founded by Vivek Pandey with a singular vision: to treat video editing not as mechanical assembly, but as rhythmic architecture. Every story demands its own unique pulse, cadence, and visual atmosphere.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
                      <h5 className="text-white font-medium text-xs uppercase tracking-wider mb-2">
                        Pillars of Editorial Excellence
                      </h5>
                      <ul className="space-y-2 text-xs text-white/70">
                        <li className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                          <span><strong>Sub-frame Audio Sync:</strong> Aligning cuts with musical transients and sub-bass impacts rather than relying on automated markers.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                          <span><strong>Retention Micro-Pacing:</strong> Eliminating visual stagnation via intentional zoom punches, whip transitions, and graphic callouts.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                          <span><strong>Sound Design Immersion:</strong> Layering ambient risers, swooshes, bass drops, and foley effects for multi-sensory impact.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}

                {modalTab === 'software' && (
                  <div className="space-y-3">
                    <h4 className="text-white font-semibold text-base mb-2 flex items-center gap-2">
                      <Tv className="w-4 h-4 text-white" />
                      5-Suite Production Environment
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {CREATOR_SOFTWARE_SUITE.map((item) => (
                        <div
                          key={item.name}
                          className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.08] flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-semibold text-white text-xs">{item.name}</span>
                              <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-white/60">
                                {item.badge}
                              </span>
                            </div>
                            <p className="text-[11px] text-white/60 leading-relaxed">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {modalTab === 'pipeline' && (
                  <div className="space-y-3">
                    <h4 className="text-white font-semibold text-base mb-2 flex items-center gap-2">
                      <FolderSync className="w-4 h-4 text-white" />
                      4-Step Production Pipeline
                    </h4>
                    <div className="space-y-2.5">
                      {WORKFLOW_STEPS.map((s) => (
                        <div
                          key={s.step}
                          className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.08] flex items-start gap-3"
                        >
                          <span className="text-xs font-mono font-bold text-white/50 pt-0.5">
                            {s.step}
                          </span>
                          <div>
                            <div className="text-sm font-semibold text-white">{s.title}</div>
                            <div className="text-xs text-white/60 mt-0.5">{s.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {modalTab === 'specs' && (
                  <div className="space-y-4">
                    <h4 className="text-white font-semibold text-base mb-2 flex items-center gap-2">
                      <SlidersHorizontal className="w-4 h-4 text-white" />
                      Master Delivery Specifications & FAQs
                    </h4>
                    
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
                        <div className="text-white/40 font-mono text-[10px] uppercase">Master Codecs</div>
                        <div className="text-white font-medium mt-1">Apple ProRes 422HQ, H.265 / HEVC, MP4 H.264 High Profile</div>
                      </div>
                      <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
                        <div className="text-white/40 font-mono text-[10px] uppercase">Audio Mastering</div>
                        <div className="text-white font-medium mt-1">24-bit 48kHz WAV, -14 LUFS (YouTube) & -16 LUFS (Music)</div>
                      </div>
                      <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
                        <div className="text-white/40 font-mono text-[10px] uppercase">Aspect Ratios</div>
                        <div className="text-white font-medium mt-1">16:9 Cinema / YouTube, 9:16 Reels & Shorts, 1:1 Socials</div>
                      </div>
                      <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
                        <div className="text-white/40 font-mono text-[10px] uppercase">Revisions Included</div>
                        <div className="text-white font-medium mt-1">2 Complete Revision Rounds included with every milestone</div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
                      <div className="text-xs font-semibold text-white">How do we send raw footage?</div>
                      <p className="text-[11px] text-white/60 mt-1">
                        Footage is exchanged via Google Drive, Dropbox, Frame.io, or WeTransfer Pro. Frame-by-frame review links are shared for client feedback.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="mt-8 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => setShowLearnMore(false)}
                  className="min-h-[44px] px-4 py-2 rounded-full text-xs text-white/50 hover:text-white active:scale-95 transition-all cursor-pointer flex items-center"
                >
                  Close Blueprint
                </button>
                <button
                  onClick={() => {
                    setShowLearnMore(false);
                    onStartProject();
                  }}
                  className="min-h-[44px] px-6 py-2.5 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-white/90 active:scale-95 transition-all cursor-pointer shadow-lg flex items-center justify-center"
                >
                  Work with Vivek Pandey
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
