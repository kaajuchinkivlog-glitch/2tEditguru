import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Camera,
  Upload,
  Sparkles,
  Sliders,
  RotateCcw,
  Check,
  X,
  Sun,
  Moon,
  Eye,
  Download,
  Image as ImageIcon,
} from 'lucide-react';
import regeneratedVivekPhoto from '../assets/images/regenerated_image_1788606204663.jpg';

export type PhotoFilter = 'noir' | 'graded' | 'natural';
export type PhotoMode = 'custom' | 'generated' | 'preset';

const LOCAL_STORAGE_PHOTO_KEY = 'editguru_creator_custom_photo';
const LOCAL_STORAGE_FILTER_KEY = 'editguru_creator_photo_filter';
const LOCAL_STORAGE_MODE_KEY = 'editguru_creator_photo_mode';

// High quality curated presets matching Vivek's aesthetic, featuring the official regenerated portrait
const PRESET_PORTRAITS = [
  {
    id: 'official-regenerated',
    title: 'Vivek (Official Portrait)',
    url: regeneratedVivekPhoto,
    desc: 'Official high-resolution regenerated portrait',
  },
  {
    id: 'studio-noir',
    title: 'Studio Portrait (Black Jacket)',
    url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80',
    desc: 'Editorial lighting, dark jacket, 85mm portrait look',
  },
  {
    id: 'candid-creative',
    title: 'Modern Creative (Casual)',
    url: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=900&q=80',
    desc: 'Cinematic mood, textured hair, relaxed creator vibe',
  },
  {
    id: 'sharp-editorial',
    title: 'Sharp Editorial (High Contrast)',
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80',
    desc: 'Warm expression, crisp studio catchlights',
  },
];

// High-fidelity custom SVG portrait generated from Vivek's facial structure from the 16 photos
export const GeneratedVivekFace: React.FC<{ filter: PhotoFilter }> = ({ filter }) => {
  return (
    <div className={`relative w-full h-full overflow-hidden bg-[#0a0a0c] select-none ${
      filter === 'noir' ? 'grayscale contrast-125' : filter === 'graded' ? 'contrast-110 saturate-110' : ''
    }`}>
      <svg
        viewBox="0 0 400 533"
        className="w-full h-full object-cover"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Background studio ambient gradient */}
          <radialGradient id="studioSpotlight" cx="50%" cy="38%" r="65%">
            <stop offset="0%" stopColor="#24242d" />
            <stop offset="50%" stopColor="#121217" />
            <stop offset="100%" stopColor="#08080a" />
          </radialGradient>

          {/* Anamorphic blue/amber rim lights */}
          <linearGradient id="rimLightLeft" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.7)" />
            <stop offset="60%" stopColor="rgba(255,255,255,0.1)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>

          <linearGradient id="rimLightAmber" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(217, 119, 6, 0.4)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>

          {/* Skin tones for Vivek */}
          <linearGradient id="skinBase" x1="30%" y1="20%" x2="70%" y2="80%">
            <stop offset="0%" stopColor="#e3b692" />
            <stop offset="50%" stopColor="#c5926b" />
            <stop offset="100%" stopColor="#8d5b3a" />
          </linearGradient>

          <linearGradient id="skinShadow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a36e47" />
            <stop offset="100%" stopColor="#5a341e" />
          </linearGradient>

          {/* Hair gradient */}
          <linearGradient id="hairGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2b2725" />
            <stop offset="40%" stopColor="#191615" />
            <stop offset="100%" stopColor="#0d0b0b" />
          </linearGradient>

          {/* Jacket gradient */}
          <linearGradient id="jacketGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1c1c22" />
            <stop offset="50%" stopColor="#121217" />
            <stop offset="100%" stopColor="#0a0a0d" />
          </linearGradient>
        </defs>

        {/* Studio backdrop */}
        <rect width="400" height="533" fill="url(#studioSpotlight)" />

        {/* Anamorphic studio flare accents */}
        <ellipse cx="200" cy="180" rx="160" ry="120" fill="#ffffff" opacity="0.03" filter="blur(20px)" />
        <line x1="20" y1="220" x2="380" y2="220" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />

        {/* Torso / Jacket (Vivek's dark collared jacket/overshirt) */}
        <g id="body">
          {/* Shoulders and Chest */}
          <path
            d="M90 410 C110 370, 140 350, 200 350 C260 350, 290 370, 310 410 L350 533 L50 533 Z"
            fill="url(#jacketGrad)"
          />
          {/* Jacket Collar flaps */}
          <path d="M150 350 L185 410 L200 415 L215 410 L250 350 L220 345 L200 380 L180 345 Z" fill="#0f0f14" />
          <path d="M185 410 L200 533 L215 410 Z" fill="#0a0a0e" />
          {/* Subtle zipper / button placket */}
          <line x1="200" y1="415" x2="200" y2="533" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
          {/* Left shoulder rim highlight */}
          <path d="M90 410 C105 380, 130 360, 160 355" stroke="rgba(255,255,255,0.3)" strokeWidth="2.5" fill="none" />
        </g>

        {/* Neck */}
        <g id="neck">
          <path d="M174 290 L174 365 C185 372, 215 372, 226 365 L226 290 Z" fill="url(#skinShadow)" />
          {/* Adam's apple & throat shading */}
          <ellipse cx="200" cy="325" rx="10" ry="14" fill="#6d4128" opacity="0.4" />
          <path d="M174 300 C185 330, 200 350, 200 365" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none" />
        </g>

        {/* Head & Face Contour (Slender jawline as in photos) */}
        <g id="face">
          {/* Ears */}
          <ellipse cx="140" cy="225" rx="14" ry="24" fill="#a8724d" />
          <ellipse cx="140" cy="225" rx="8" ry="16" fill="#754728" />
          <ellipse cx="260" cy="225" rx="14" ry="24" fill="#b47d57" />
          <ellipse cx="260" cy="225" rx="8" ry="16" fill="#7e4e2d" />
          {/* Ear rim highlight */}
          <path d="M132 215 C130 225, 132 235, 136 242" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" fill="none" />

          {/* Main Face Contour (slender, defined chin) */}
          <path
            d="M148 180 C146 220, 150 255, 168 285 C180 306, 192 312, 200 312 C208 312, 220 306, 232 285 C250 255, 254 220, 252 180 C252 140, 230 120, 200 120 C170 120, 148 140, 148 180 Z"
            fill="url(#skinBase)"
          />

          {/* Cheekbone & Jaw Chiaroscuro Shading */}
          <path
            d="M148 190 C150 230, 158 260, 175 285 C185 300, 195 308, 200 308 C195 295, 185 270, 178 240 C172 215, 170 195, 172 180 Z"
            fill="#8d5635"
            opacity="0.5"
          />

          {/* Left jaw rim light */}
          <path
            d="M148 185 C146 220, 152 255, 170 285 C180 304, 192 310, 200 310"
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="2"
            fill="none"
          />

          {/* Eyebrows (neatly shaped, masculine dark brown) */}
          <path d="M158 188 Q174 182 188 189" stroke="#1c1817" strokeWidth="4.5" strokeLinecap="round" fill="none" />
          <path d="M212 189 Q226 182 242 188" stroke="#1c1817" strokeWidth="4.5" strokeLinecap="round" fill="none" />

          {/* Eyes (warm dark brown with sharp catchlights) */}
          {/* Left Eye */}
          <g id="leftEye">
            <ellipse cx="174" cy="205" rx="13" ry="8" fill="#f8f4ed" />
            <circle cx="174" cy="205" r="6.5" fill="#2c1a11" />
            <circle cx="174" cy="205" r="3.5" fill="#080808" />
            {/* Catchlight */}
            <circle cx="172" cy="203" r="1.8" fill="#ffffff" />
            <path d="M161 204 Q174 198 187 204" stroke="#191514" strokeWidth="2.5" fill="none" />
            <path d="M163 206 Q174 211 185 206" stroke="#482d1c" strokeWidth="1" fill="none" />
          </g>

          {/* Right Eye */}
          <g id="rightEye">
            <ellipse cx="226" cy="205" rx="13" ry="8" fill="#f8f4ed" />
            <circle cx="226" cy="205" r="6.5" fill="#2c1a11" />
            <circle cx="226" cy="205" r="3.5" fill="#080808" />
            {/* Catchlight */}
            <circle cx="224" cy="203" r="1.8" fill="#ffffff" />
            <path d="M213 204 Q226 198 239 204" stroke="#191514" strokeWidth="2.5" fill="none" />
            <path d="M215 206 Q226 211 237 206" stroke="#482d1c" strokeWidth="1" fill="none" />
          </g>

          {/* Nose (straight, elegant profile) */}
          <g id="nose">
            <path d="M198 188 L197 236 L192 244 L200 248 L208 244 L203 236" fill="none" stroke="#774627" strokeWidth="1.5" />
            <ellipse cx="200" cy="245" rx="6" ry="3.5" fill="#915934" />
            <ellipse cx="193" cy="246" rx="2.5" ry="2" fill="#58311a" />
            <ellipse cx="207" cy="246" rx="2.5" ry="2" fill="#58311a" />
            {/* Nose bridge light */}
            <line x1="199" y1="195" x2="199" y2="238" stroke="rgba(255,255,255,0.25)" strokeWidth="2" strokeLinecap="round" />
          </g>

          {/* Mustache (Trimmed, stylish light mustache as in photos) */}
          <g id="mustache">
            <path
              d="M186 261 Q194 257 200 260 Q206 257 214 261 Q208 266 200 264 Q192 266 186 261 Z"
              fill="#191514"
            />
          </g>

          {/* Lips */}
          <g id="lips">
            <path d="M188 271 Q200 269 212 271 Q200 274 188 271 Z" fill="#8c4e3a" />
            <path d="M190 273 Q200 280 210 273" fill="#a45e48" opacity="0.8" />
          </g>

          {/* Chin Beard & Jawline Stubble (Vivek's signature look) */}
          <g id="beard">
            {/* Soul patch */}
            <ellipse cx="200" cy="282" rx="4" ry="5" fill="#1c1817" />
            {/* Chin beard outline */}
            <path
              d="M182 290 Q200 293 218 290 Q215 308 200 311 Q185 308 182 290 Z"
              fill="#151211"
              opacity="0.9"
            />
            {/* Jawline stubble shading */}
            <path
              d="M152 245 C158 270 175 295 190 306 L185 309 C168 298 152 274 148 248 Z"
              fill="#181514"
              opacity="0.65"
            />
            <path
              d="M248 245 C242 270 225 295 210 306 L215 309 C232 298 248 274 252 248 Z"
              fill="#181514"
              opacity="0.65"
            />
          </g>
        </g>

        {/* Hair (Voluminous, textured dark hair styled to the side) */}
        <g id="hair">
          {/* Main Hair Volume */}
          <path
            d="M142 185 C138 150, 142 125, 160 102 C178 82, 220 78, 245 92 C265 104, 270 135, 266 165 C264 180, 258 190, 256 195 C250 170, 244 145, 230 135 C210 120, 175 125, 160 148 C150 162, 145 178, 142 185 Z"
            fill="url(#hairGrad)"
          />
          {/* Hair Tufts & Strands for natural texture */}
          <path d="M155 110 Q175 90 205 92" stroke="#3d3734" strokeWidth="2.5" fill="none" />
          <path d="M185 88 Q220 86 245 105" stroke="#3d3734" strokeWidth="2.5" fill="none" />
          <path d="M165 125 Q195 108 230 116" stroke="#2c2725" strokeWidth="3" fill="none" />
          <path d="M145 155 Q150 130 165 115" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" fill="none" />
          {/* Top light reflection on hair */}
          <ellipse cx="205" cy="98" rx="35" ry="12" fill="rgba(255,255,255,0.12)" transform="rotate(-8 205 98)" />
        </g>

        {/* Global Cinematic Grading Overlays */}
        <rect width="400" height="533" fill="url(#rimLightAmber)" style={{ mixBlendMode: 'screen' }} opacity="0.3" />
        <rect width="400" height="533" fill="url(#rimLightLeft)" style={{ mixBlendMode: 'overlay' }} opacity="0.4" />
      </svg>
    </div>
  );
};

interface CreatorProfilePhotoProps {
  onStartProject?: () => void;
}

export const CreatorProfilePhoto: React.FC<CreatorProfilePhotoProps> = () => {
  const [photoMode, setPhotoMode] = useState<PhotoMode>('preset');
  const [customPhotoUrl, setCustomPhotoUrl] = useState<string | null>(null);
  const [selectedPresetId, setSelectedPresetId] = useState<string>('official-regenerated');
  const [filter, setFilter] = useState<PhotoFilter>('noir');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);
  const [activeTab, setActiveTab] = useState<'upload' | 'generate' | 'presets'>('upload');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load persisted photo & preferences from localStorage on mount
  useEffect(() => {
    try {
      const savedPhoto = localStorage.getItem(LOCAL_STORAGE_PHOTO_KEY);
      const savedFilter = localStorage.getItem(LOCAL_STORAGE_FILTER_KEY) as PhotoFilter | null;
      const savedMode = localStorage.getItem(LOCAL_STORAGE_MODE_KEY) as PhotoMode | null;

      if (savedPhoto) {
        setCustomPhotoUrl(savedPhoto);
        setPhotoMode('custom');
      } else {
        // Default to preset with the official regenerated photo
        setPhotoMode(savedMode || 'preset');
        setSelectedPresetId('official-regenerated');
      }

      if (savedFilter && ['noir', 'graded', 'natural'].includes(savedFilter)) {
        setFilter(savedFilter);
      }
    } catch {
      // Ignore localstorage errors
    }
  }, []);

  const handleFileUpload = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file (PNG, JPG, JPEG, WEBP).');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (result) {
        setCustomPhotoUrl(result);
        setPhotoMode('custom');
        try {
          localStorage.setItem(LOCAL_STORAGE_PHOTO_KEY, result);
          localStorage.setItem(LOCAL_STORAGE_MODE_KEY, 'custom');
        } catch {
          // If storage full, keep in state
        }
        setIsModalOpen(false);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  const handleFilterChange = (newFilter: PhotoFilter) => {
    setFilter(newFilter);
    try {
      localStorage.setItem(LOCAL_STORAGE_FILTER_KEY, newFilter);
    } catch {
      // Ignore
    }
  };

  const handleResetToDefault = () => {
    setCustomPhotoUrl(null);
    setPhotoMode('preset');
    setSelectedPresetId('official-regenerated');
    try {
      localStorage.removeItem(LOCAL_STORAGE_PHOTO_KEY);
      localStorage.setItem(LOCAL_STORAGE_MODE_KEY, 'preset');
    } catch {
      // Ignore
    }
  };

  // Determine current active image URL
  const currentPreset = PRESET_PORTRAITS.find((p) => p.id === selectedPresetId) || PRESET_PORTRAITS[0];
  const activeImageUrl = photoMode === 'custom' && customPhotoUrl ? customPhotoUrl : currentPreset.url;

  // Filter styles
  const filterStyles = {
    noir: 'filter grayscale contrast-125 brightness-90',
    graded: 'filter contrast-115 saturate-125 brightness-95 sepia-[0.15]',
    natural: 'filter contrast-100 brightness-100 saturate-105',
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Cinematic Profile Frame Container with Viewfinder HUD */}
      <div
        id="creator-photo-frame"
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragOver(true);
        }}
        onDragLeave={() => setIsDragOver(false)}
        onDrop={handleDrop}
        className={`relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-none md:w-80 aspect-[3/4] sm:h-[420px] rounded-3xl overflow-hidden bg-[#09090b] border transition-all duration-300 shadow-[0_20px_60px_rgba(0,0,0,0.8)] group ${
          isDragOver ? 'border-white scale-[1.02] ring-4 ring-white/20' : 'border-white/20 hover:border-white/40'
        }`}
      >
        {/* Hidden File Input */}
        <input
          type="file"
          ref={fileInputRef}
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            if (e.target.files && e.target.files.length > 0) {
              handleFileUpload(e.target.files[0]);
            }
          }}
        />

        {/* Viewfinder Corner Crop Marks (Cinematic Camera HUD) */}
        <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-white/60 pointer-events-none z-20" />
        <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-white/60 pointer-events-none z-20" />
        <div className="absolute bottom-16 left-3 w-4 h-4 border-b-2 border-l-2 border-white/60 pointer-events-none z-20" />
        <div className="absolute bottom-16 right-3 w-4 h-4 border-b-2 border-r-2 border-white/60 pointer-events-none z-20" />

        {/* Top Viewfinder Metadata Bar */}
        <div className="absolute top-3.5 left-8 right-8 flex items-center justify-between text-[9px] font-mono tracking-widest text-white/70 uppercase pointer-events-none z-20">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span className="font-bold text-white">REC 24FPS</span>
          </div>
          <div className="hidden sm:block text-white/50">PRORES 422HQ</div>
          <div>ISO 400</div>
        </div>

        {/* Active Visual Render (Photo or Procedural Face) */}
        {photoMode === 'generated' ? (
          <GeneratedVivekFace filter={filter} />
        ) : (
          <img
            src={activeImageUrl}
            alt="Vivek Pandey - Lead Video Editor & Content Creator"
            loading="lazy"
            decoding="async"
            onError={(e) => {
              // Fallback to official regenerated photo
              const target = e.currentTarget;
              if (target.src !== regeneratedVivekPhoto) {
                target.src = regeneratedVivekPhoto;
              }
            }}
            referrerPolicy="no-referrer"
            className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
              filterStyles[filter]
            }`}
          />
        )}

        {/* Subtle Cinematic Vignette & Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40 pointer-events-none" />

        {/* Drag Overlay Notice */}
        {isDragOver && (
          <div className="absolute inset-0 bg-black/85 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center p-4 text-center z-30 pointer-events-none border-2 border-dashed border-white">
            <Upload className="w-10 h-10 text-white mb-2 animate-bounce" />
            <p className="text-sm font-bold text-white uppercase tracking-wider">Drop Your Photo Here</p>
            <p className="text-xs text-white/60 mt-1">Updates creator portrait</p>
          </div>
        )}

        {/* Top Hover Controls */}
        <div className="absolute top-10 right-3 left-3 flex items-center justify-between z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            id="btn-quick-upload-photo"
            onClick={() => fileInputRef.current?.click()}
            title="Quick Upload from Computer"
            className="px-2.5 py-1.5 rounded-full bg-black/70 hover:bg-black backdrop-blur-md border border-white/20 text-[10px] font-medium text-white flex items-center gap-1.5 shadow-lg transition-all cursor-pointer"
          >
            <Upload className="w-3 h-3 text-white" />
            <span>Upload Photo</span>
          </button>

          <button
            id="btn-open-photo-manager"
            onClick={() => setIsModalOpen(true)}
            className="px-3 py-1.5 rounded-full bg-white text-black hover:bg-white/90 backdrop-blur-md text-[10px] font-bold tracking-wider uppercase flex items-center gap-1.5 shadow-lg transition-all cursor-pointer"
          >
            <Sliders className="w-3 h-3 text-black" />
            <span>Customize</span>
          </button>
        </div>

        {/* Bottom Glass Profile Card & Timecode Bar */}
        <div className="absolute bottom-3 left-3 right-3 bg-black/60 backdrop-blur-xl p-3 rounded-2xl border border-white/20 z-20">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-1.5">
                <h4 className="text-sm font-bold text-white tracking-wide">VIVEK PANDEY</h4>
                {photoMode === 'custom' && (
                  <span className="text-[8px] px-1.5 py-0.5 rounded bg-white/20 text-white font-mono uppercase tracking-wider">
                    CUSTOM
                  </span>
                )}
                {photoMode === 'generated' && (
                  <span className="text-[8px] px-1.5 py-0.5 rounded bg-white/20 text-white font-mono uppercase tracking-wider flex items-center gap-0.5">
                    <Sparkles className="w-2.5 h-2.5" /> AI
                  </span>
                )}
              </div>
              <p className="text-[10px] font-mono-code text-white/60 mt-0.5">
                VIDEO EDITOR • CONTENT CREATOR
              </p>
            </div>

            <button
              id="btn-badge-customize"
              onClick={() => setIsModalOpen(true)}
              className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 flex items-center justify-center transition-colors cursor-pointer"
              title="Change or customize photo"
            >
              <Camera className="w-3.5 h-3.5 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Live Color Grade (LUT) Switcher Pills */}
      <div className="mt-3 flex items-center gap-1.5 p-1 rounded-full bg-white/[0.04] border border-white/10 text-[10px] font-mono">
        <span className="text-white/40 px-2 uppercase tracking-wider text-[9px]">LUT:</span>
        <button
          onClick={() => handleFilterChange('noir')}
          className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
            filter === 'noir'
              ? 'bg-white text-black font-bold shadow'
              : 'text-white/60 hover:text-white hover:bg-white/5'
          }`}
        >
          Noir 35
        </button>
        <button
          onClick={() => handleFilterChange('graded')}
          className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
            filter === 'graded'
              ? 'bg-white text-black font-bold shadow'
              : 'text-white/60 hover:text-white hover:bg-white/5'
          }`}
        >
          Cinematic
        </button>
        <button
          onClick={() => handleFilterChange('natural')}
          className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
            filter === 'natural'
              ? 'bg-white text-black font-bold shadow'
              : 'text-white/60 hover:text-white hover:bg-white/5'
          }`}
        >
          Natural
        </button>
      </div>

      {/* Interactive Photo Placement & Face Generation Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-lg bg-[#111114] border border-white/15 rounded-3xl p-5 sm:p-7 shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                    <Camera className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white tracking-tight">Creator Profile Photo</h3>
                    <p className="text-xs text-white/50">Place your photo or use your generated face image</p>
                  </div>
                </div>
                <button
                  id="btn-close-photo-modal"
                  onClick={() => setIsModalOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Navigation Tabs */}
              <div className="flex items-center gap-1.5 p-1 bg-white/5 rounded-2xl border border-white/10 my-4">
                <button
                  id="tab-upload-photo"
                  onClick={() => setActiveTab('upload')}
                  className={`flex-1 py-2 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
                    activeTab === 'upload'
                      ? 'bg-white text-black shadow'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span>Upload Photo</span>
                </button>

                <button
                  id="tab-generate-face"
                  onClick={() => setActiveTab('generate')}
                  className={`flex-1 py-2 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
                    activeTab === 'generate'
                      ? 'bg-white text-black shadow'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Generated Face</span>
                </button>

                <button
                  id="tab-presets"
                  onClick={() => setActiveTab('presets')}
                  className={`flex-1 py-2 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
                    activeTab === 'presets'
                      ? 'bg-white text-black shadow'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <ImageIcon className="w-3.5 h-3.5" />
                  <span>Studio Presets</span>
                </button>
              </div>

              {/* Tab 1: Upload Your Real Photo */}
              {activeTab === 'upload' && (
                <div className="space-y-4">
                  <div
                    onDragOver={(e) => {
                      e.preventDefault();
                      setIsDragOver(true);
                    }}
                    onDragLeave={() => setIsDragOver(false)}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                    className={`cursor-pointer border-2 border-dashed rounded-2xl p-6 text-center transition-all flex flex-col items-center justify-center ${
                      isDragOver
                        ? 'border-white bg-white/10 scale-[1.01]'
                        : 'border-white/20 hover:border-white/50 bg-white/[0.02] hover:bg-white/[0.04]'
                    }`}
                  >
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-3">
                      <Upload className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-sm font-semibold text-white">Click or drag & drop your photo</p>
                    <p className="text-xs text-white/50 mt-1 max-w-xs">
                      Drop any of the 16 photos you just shared. PNG, JPG, or WEBP supported.
                    </p>
                  </div>

                  {customPhotoUrl && (
                    <div className="flex items-center justify-between p-3 rounded-2xl bg-white/5 border border-white/10">
                      <div className="flex items-center gap-3">
                        <img
                          src={customPhotoUrl}
                          alt="Current Custom Photo"
                          className="w-12 h-12 rounded-xl object-cover border border-white/20"
                        />
                        <div>
                          <div className="text-xs font-semibold text-white flex items-center gap-1">
                            <Check className="w-3.5 h-3.5 text-emerald-400" /> Active Custom Photo
                          </div>
                          <div className="text-[11px] text-white/40">Saved locally in browser</div>
                        </div>
                      </div>
                      <button
                        id="btn-remove-custom-photo"
                        onClick={handleResetToDefault}
                        className="px-3 py-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-300 text-xs font-medium transition-colors"
                      >
                        Reset Photo
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* Tab 2: Generated Face Image */}
              {activeTab === 'generate' && (
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                    <div className="w-20 h-24 rounded-xl overflow-hidden border border-white/20 flex-shrink-0">
                      <GeneratedVivekFace filter={filter} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-white" />
                        <h4 className="text-sm font-bold text-white">Cinematic Face Reconstruction</h4>
                      </div>
                      <p className="text-xs text-white/50 mt-1">
                        Generated to match Vivek's facial structure from your uploaded photos: dark textured hair, slender jawline, trimmed mustache and beard, and chiaroscuro studio lighting.
                      </p>
                      <button
                        id="btn-apply-generated-face"
                        onClick={() => {
                          setPhotoMode('generated');
                          try {
                            localStorage.setItem(LOCAL_STORAGE_MODE_KEY, 'generated');
                          } catch {
                            // Ignore
                          }
                          setIsModalOpen(false);
                        }}
                        className="mt-3 px-4 py-1.5 rounded-full bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-white/90 transition-all flex items-center gap-1.5"
                      >
                        <Check className="w-3.5 h-3.5" />
                        <span>Use As My Profile</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 3: Studio Presets */}
              {activeTab === 'presets' && (
                <div className="space-y-2.5">
                  <p className="text-xs text-white/50 mb-2">
                    Select a high-resolution studio look matching your creative persona:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {PRESET_PORTRAITS.map((preset) => (
                      <button
                        key={preset.id}
                        id={`btn-preset-${preset.id}`}
                        onClick={() => {
                          setSelectedPresetId(preset.id);
                          setPhotoMode('preset');
                          try {
                            localStorage.setItem(LOCAL_STORAGE_MODE_KEY, 'preset');
                          } catch {
                            // Ignore
                          }
                        }}
                        className={`group relative text-left p-2 rounded-2xl border transition-all ${
                          photoMode === 'preset' && selectedPresetId === preset.id
                            ? 'bg-white/15 border-white ring-2 ring-white/30'
                            : 'bg-white/5 border-white/10 hover:border-white/30'
                        }`}
                      >
                        <div className="aspect-[3/4] w-full rounded-xl overflow-hidden mb-2 bg-black">
                          <img
                            src={preset.url}
                            alt={preset.title}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover filter grayscale contrast-110"
                          />
                        </div>
                        <div className="text-[11px] font-semibold text-white truncate">{preset.title}</div>
                        <div className="text-[9px] text-white/40 line-clamp-1">{preset.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Color Grading & Filter Selector */}
              <div className="mt-5 pt-4 border-t border-white/10">
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-xs font-semibold text-white/70 flex items-center gap-1.5">
                    <Sliders className="w-3.5 h-3.5" /> Cinematic Color Grade
                  </span>
                  <span className="text-[10px] text-white/40 uppercase tracking-widest font-mono">
                    {filter.toUpperCase()}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <button
                    id="filter-noir"
                    onClick={() => handleFilterChange('noir')}
                    className={`py-2 rounded-xl text-xs font-medium border transition-all flex items-center justify-center gap-1.5 ${
                      filter === 'noir'
                        ? 'bg-white text-black border-white'
                        : 'bg-white/5 border-white/10 text-white/60 hover:text-white'
                    }`}
                  >
                    <Moon className="w-3.5 h-3.5" />
                    <span>Noir B&W</span>
                  </button>

                  <button
                    id="filter-graded"
                    onClick={() => handleFilterChange('graded')}
                    className={`py-2 rounded-xl text-xs font-medium border transition-all flex items-center justify-center gap-1.5 ${
                      filter === 'graded'
                        ? 'bg-white text-black border-white'
                        : 'bg-white/5 border-white/10 text-white/60 hover:text-white'
                    }`}
                  >
                    <Sun className="w-3.5 h-3.5" />
                    <span>Warm Tone</span>
                  </button>

                  <button
                    id="filter-natural"
                    onClick={() => handleFilterChange('natural')}
                    className={`py-2 rounded-xl text-xs font-medium border transition-all flex items-center justify-center gap-1.5 ${
                      filter === 'natural'
                        ? 'bg-white text-black border-white'
                        : 'bg-white/5 border-white/10 text-white/60 hover:text-white'
                    }`}
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Raw Natural</span>
                  </button>
                </div>
              </div>

              {/* Close / Apply Footer */}
              <div className="mt-5 flex items-center justify-end gap-2.5">
                <button
                  id="btn-done-modal"
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 rounded-full bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-white/90 transition-all shadow-md"
                >
                  Apply to Site
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
