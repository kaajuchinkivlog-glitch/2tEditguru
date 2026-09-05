import { YouTubeVideoItem, InstagramPostItem, FacebookPostItem, BlogPostItem } from '../types';

export const SOCIAL_PROFILES = {
  creator: 'Vivek',
  brand: 'EditGuru',
  title: 'Creator • Vlogger • Video Editor',
  youtube: {
    name: 'Nomad Vivek',
    handle: '@nomadvivek',
    url: 'https://youtube.com/@nomadvivek?si=lit1luSDOYuDRjHa',
    subscribers: '100K+ Community',
  },
  instagram: {
    handle: '@realnomadvivek',
    url: 'https://www.instagram.com/realnomadvivek?igsi=MWViMjVuMm5wN3Z5Nw==',
    bio: 'Visual Storyteller • Travel Filmmaker • Video Editor',
  },
  facebook: {
    name: 'Vivek Pandey',
    url: 'https://www.facebook.com/share/1J6KHmXNxE/',
    label: 'Facebook Community Page',
  },
  email: 'movieandso34@gmail.com',
  whatsapp: 'https://wa.me/?text=Hi%20Vivek,%20I%20would%20like%20to%20inquire%20about%20video%20editing%20services%20via%20EditGuru',
};

export const YOUTUBE_VIDEOS: YouTubeVideoItem[] = [
  {
    id: 'india-to-thailand',
    videoId: 'Qi5dJu9OZJU',
    title: 'India to Thailand Trip | Nomad Vivek Vlog',
    description: 'Cinematic travel journey from India into Bangkok and Pattaya with dynamic transit cuts, airport vibes, and warm golden hour grading.',
    thumbnailUrl: 'https://img.youtube.com/vi/Qi5dJu9OZJU/hqdefault.jpg',
    videoUrl: 'https://youtu.be/Qi5dJu9OZJU?si=lit1luSDOYuDRjHa',
    date: 'Recent Upload',
    duration: '07:18',
    views: '150K+',
    category: 'Travel Vlog & Cinema',
    isLatest: true,
    isPopular: true,
    tags: ['Travel Film', 'Thailand', 'Color Grading', '4K 60FPS'],
  },
  {
    id: 'pattaya-night-walking',
    videoId: 'X2tOsmWcs4A',
    title: 'Pattaya at Night Walking Street | 4K 60FPS Low-Light',
    description: 'Immersive low-light walking tour of Pattaya night markets and walking street with neon contrast, spatial audio, and cinematic motion.',
    thumbnailUrl: 'https://img.youtube.com/vi/X2tOsmWcs4A/hqdefault.jpg',
    videoUrl: 'https://youtu.be/X2tOsmWcs4A',
    date: 'Featured Film',
    duration: '04:32',
    views: '220K+',
    category: 'Cinematic Night Life',
    isLatest: true,
    isPopular: true,
    tags: ['Night Life', 'Low Light', 'Pattaya', 'Smooth Gimbal'],
  },
  {
    id: 'tungnath-temple-darshan',
    videoId: 'il64UocoL_Y',
    title: 'Tungnath Temple Highest Shiva Temple | Himalayan Darshan',
    description: 'A spiritual pilgrimage and cinematic mountain trek to the world’s highest Shiva temple, featuring mist rolling through valleys and acoustic sound design.',
    thumbnailUrl: 'https://img.youtube.com/vi/il64UocoL_Y/hqdefault.jpg',
    videoUrl: 'https://youtu.be/il64UocoL_Y',
    date: 'Himalayan Trek',
    duration: '05:40',
    views: '185K+',
    category: 'Documentary & Pilgrimage',
    isPopular: true,
    tags: ['Himalayas', 'Tungnath', 'Spiritual', 'Nature Cinema'],
  },
  {
    id: 'village-train-track',
    videoId: '1YC7WEZBJsc',
    title: 'Village Train Track | Rural India Storytelling',
    description: 'Poetic, observational rural documentary following the rhythm of village rail crossings, natural ambient soundscapes, and morning fog.',
    thumbnailUrl: 'https://img.youtube.com/vi/1YC7WEZBJsc/hqdefault.jpg',
    videoUrl: 'https://youtu.be/1YC7WEZBJsc',
    date: 'Rural Visual Story',
    duration: '06:12',
    views: '130K+',
    category: 'Rural Visual Storytelling',
    isLatest: false,
    tags: ['Documentary', 'Rural India', 'Slow Cinema', 'Atmosphere'],
  },
  {
    id: 'bangkok-metro-transit',
    videoId: 'Qi5dJu9OZJU',
    title: 'Bangkok Transit Rhythm & Street Pulse | Urban Cinema',
    description: 'Fast-paced urban transit montage capturing the speed of sky trains, neon signs, street crossings, and rhythm-matched sound design.',
    thumbnailUrl: 'https://img.youtube.com/vi/Qi5dJu9OZJU/hqdefault.jpg',
    videoUrl: 'https://youtu.be/Qi5dJu9OZJU?si=lit1luSDOYuDRjHa',
    date: 'Recent Release',
    duration: '03:45',
    views: '98K+',
    category: 'Urban Storytelling',
    isLatest: true,
    tags: ['Urban', 'Beat Sync', 'Bangkok', 'Speed Ramps'],
  },
  // SHORTS
  {
    id: 'pattaya-neon-walk-short',
    videoId: '0gd260zfErE',
    title: 'Pattaya Neon Walk | 60FPS Mobile Reel',
    description: 'High-energy vertical reel with neon glow color balance, bass impact drops, and seamless loop transitions.',
    thumbnailUrl: 'https://img.youtube.com/vi/0gd260zfErE/hqdefault.jpg',
    videoUrl: 'https://youtu.be/0gd260zfErE',
    date: 'Shorts Feed',
    duration: '00:25',
    views: '380K+',
    category: 'Reels & Shorts',
    isShort: true,
    tags: ['Shorts', 'Viral', 'Neon', 'Speed Ramp'],
  },
  {
    id: 'emergency-call-short',
    videoId: '7XnHRR9H4uU',
    title: 'Emergency Call 🤙 | Sound Design & Beat Sync',
    description: 'Punchy comedic timing cut with frame-accurate foley and kinetic subtitle typography.',
    thumbnailUrl: 'https://img.youtube.com/vi/7XnHRR9H4uU/hqdefault.jpg',
    videoUrl: 'https://youtu.be/7XnHRR9H4uU',
    date: 'Shorts Feed',
    duration: '00:28',
    views: '210K+',
    category: 'Reels & Shorts',
    isShort: true,
    tags: ['Comedy', 'Sound Design', 'Kinetic Text'],
  },
  {
    id: 'mountain-clouds-short',
    videoId: 'il64UocoL_Y',
    title: 'Mountain Clouds Speed Ramp | Himalayas 4K',
    description: 'Hypnotic vertical timelapse of cloud rivers over the Himalayas with speed ramping and binaural ambient wind.',
    thumbnailUrl: 'https://img.youtube.com/vi/il64UocoL_Y/hqdefault.jpg',
    videoUrl: 'https://youtu.be/il64UocoL_Y',
    date: 'Shorts Feed',
    duration: '00:20',
    views: '295K+',
    category: 'Reels & Shorts',
    isShort: true,
    tags: ['Himalayas', 'Timelapse', '4K Short'],
  },
  {
    id: 'lifestyle-story-short',
    videoId: '8i4oY3iK7go',
    title: 'Everyday Storytelling | Reel Cut',
    description: 'Snappy lifestyle story edit with clean visual pacing, typography hits, and warm analog film tones.',
    thumbnailUrl: 'https://img.youtube.com/vi/8i4oY3iK7go/hqdefault.jpg',
    videoUrl: 'https://youtu.be/8i4oY3iK7go',
    date: 'Shorts Feed',
    duration: '00:30',
    views: '190K+',
    category: 'Reels & Shorts',
    isShort: true,
    tags: ['Lifestyle', 'Aesthetic', 'CapCut Pro'],
  },
];

export const INSTAGRAM_CREATIONS: InstagramPostItem[] = [
  {
    id: 'insta-pattaya-night',
    postUrl: 'https://www.instagram.com/realnomadvivek?igsi=MWViMjVuMm5wN3Z5Nw==',
    caption: 'Neon lights & midnight alleyways in Pattaya 🇹🇭. Graded with custom Fuji 3513 film emulation.',
    thumbnailUrl: 'https://img.youtube.com/vi/X2tOsmWcs4A/hqdefault.jpg',
    type: 'reel',
    likes: '14.2K',
    comments: '428',
    views: '185K',
    date: '3 days ago',
  },
  {
    id: 'insta-himalayan-mist',
    postUrl: 'https://www.instagram.com/realnomadvivek?igsi=MWViMjVuMm5wN3Z5Nw==',
    caption: 'Standing above the clouds at 12,000 feet. Tungnath trail cinematic reel 🏔️✨',
    thumbnailUrl: 'https://img.youtube.com/vi/il64UocoL_Y/hqdefault.jpg',
    type: 'reel',
    likes: '22.8K',
    comments: '680',
    views: '310K',
    date: '1 week ago',
  },
  {
    id: 'insta-edit-bay-bts',
    postUrl: 'https://www.instagram.com/realnomadvivek?igsi=MWViMjVuMm5wN3Z5Nw==',
    caption: '14 hours on Premiere Pro timeline. 8 audio layers, custom speed curves, and 0 dropped frames 🎬.',
    thumbnailUrl: 'https://img.youtube.com/vi/Qi5dJu9OZJU/hqdefault.jpg',
    type: 'post',
    likes: '9.4K',
    comments: '312',
    views: '95K',
    date: '2 weeks ago',
  },
  {
    id: 'insta-color-grade-breakdown',
    postUrl: 'https://www.instagram.com/realnomadvivek?igsi=MWViMjVuMm5wN3Z5Nw==',
    caption: 'Sony S-Log3 to Cinematic Golden Hour. Swipe to see the raw flat uncorrected clip 🎨🎥.',
    thumbnailUrl: 'https://img.youtube.com/vi/1YC7WEZBJsc/hqdefault.jpg',
    type: 'reel',
    likes: '18.9K',
    comments: '512',
    views: '240K',
    date: '3 weeks ago',
  },
];

export const FACEBOOK_UPDATES: FacebookPostItem[] = [
  {
    id: 'fb-thailand-premiere',
    postUrl: 'https://www.facebook.com/share/1J6KHmXNxE/',
    content: 'Full Thailand Travel Odyssey is officially live on YouTube! From bustling Bangkok street markets to Pattaya beach nights, watch the full 4K master now. Thank you for the incredible love!',
    date: 'September 2026',
    likes: '1.8K',
    shares: '340',
    comments: '185',
    mediaUrl: 'https://img.youtube.com/vi/Qi5dJu9OZJU/hqdefault.jpg',
  },
  {
    id: 'fb-milestone-reach',
    postUrl: 'https://www.facebook.com/share/1J6KHmXNxE/',
    content: 'Over 2 Million combined views across our video editing and travel storytelling projects this season! Big things in the edit suite coming up. Looking to take your YouTube or Brand videos to the next level? DM or reach out via EditGuru!',
    date: 'August 2026',
    likes: '3.4K',
    shares: '520',
    comments: '290',
  },
];

export const BLOG_POSTS: BlogPostItem[] = [
  {
    id: 'retention-hook-secrets',
    slug: 'retention-hook-secrets',
    title: 'The 3-Second Retention Hook: How to Edit Videos That Stop the Scroll',
    category: 'Video Editing Tips',
    excerpt: 'Analyze why 70% of viewers drop off before second 0:05, and how to combine visual motion, sonic impact, and curiosity loops to keep audiences glued.',
    author: 'Vivek Pandey',
    date: 'Sep 2, 2026',
    readTime: '5 min read',
    coverImage: 'https://img.youtube.com/vi/Qi5dJu9OZJU/hqdefault.jpg',
    keywords: ['video editing hooks', 'youtube retention', 'viral reels', 'premiere pro pacing'],
    tags: ['Retention', 'Editing Tips', 'Premiere Pro', 'Viral Velocity'],
    content: `
In modern short-form and YouTube filmmaking, the battle for audience attention is won or lost in the first three seconds.

### 1. The Death of the Slow Intro
Traditional video editing taught creators to start with a wide establishing shot, roll a 5-second logo animation, and introduce themselves. In 2026, that guarantees an immediate 65% audience drop-off.
Instead, your first frame must feature:
- A high-contrast visual anomaly (something unusual, moving fast, or emotionally charged)
- A micro-sound impact (riser hit or textured vinyl drop)
- A question or statement that opens an immediate cognitive loop in the viewer's mind

### 2. Audio-First Cutting
Most rookie editors cut the visuals first and drag music under it. Elite editors cut to the rhythmic accents of the dialogue and sound design. Every punch, transition, or graphic callout should arrive 2 frames before the beat, anticipating human sensory processing.

### 3. Visual Velocity and Cut Timing
Varying your cut rhythm creates dynamic tension. Alternate between rapid 0.8-second kinetic bursts and 3-second breathing spaces. If every shot is the same length, the viewer's brain recognizes the pattern and stops paying attention.
    `,
  },
  {
    id: 'youtube-growth-retention-graph',
    slug: 'youtube-growth-retention-graph',
    title: 'Decoding YouTube Retention Graphs: How Pacing Multiplies Views in 2026',
    category: 'YouTube Growth Tips',
    excerpt: 'How to interpret retention dips, eliminate boring dead space, and structure YouTube long-form videos to trigger the recommendation algorithm.',
    author: 'Vivek Pandey',
    date: 'Aug 28, 2026',
    readTime: '6 min read',
    coverImage: 'https://img.youtube.com/vi/X2tOsmWcs4A/hqdefault.jpg',
    keywords: ['youtube growth', 'retention curve', 'youtube algorithm', 'video pacing'],
    tags: ['YouTube Strategy', 'Analytics', 'Growth', 'Content Creation'],
    content: `
The YouTube algorithm doesn't care about how hard you worked—it cares about how long people stayed.

### The Anatomy of an 80%+ Retention Curve
When analyzing high-performing channels, retention graphs exhibit three distinct characteristics:
1. **The Gentle Slope**: Instead of a steep cliff drop at 0:15, the retention curve glides gently above 75%.
2. **Re-watch Spikes**: High-detail b-roll or clever visual easter eggs that prompt users to hit the 10-second rewind button.
3. **End-Screen Stability**: The final 30 seconds should not sound like a goodbye; they must funnel viewers directly into the next video before they can exit.

### Eliminating Dead Air
In Premiere Pro, use ripple delete aggressively. Cut out every breath, pause, and hesitant syllable. If a sentence takes 4 seconds to say, compress the pauses until it delivers in 2.8 seconds.
    `,
  },
  {
    id: 'bts-thailand-travel-film',
    slug: 'bts-thailand-travel-film',
    title: 'Inside the Edit Bay: Building the India to Thailand Cinematic Travel Film',
    category: 'Behind The Scenes',
    excerpt: 'A deep dive into footage culling, multi-track atmospheric foley, and how 14 hours in Bangkok and Pattaya turned into a 7-minute 4K master.',
    author: 'Vivek Pandey',
    date: 'Aug 20, 2026',
    readTime: '7 min read',
    coverImage: 'https://img.youtube.com/vi/Qi5dJu9OZJU/hqdefault.jpg',
    keywords: ['behind the scenes', 'travel filmmaking', 'color grade', 'nomad vivek'],
    tags: ['Behind the Scenes', 'Travel Film', 'Thailand', 'Workflow'],
    content: `
Creating a travel film is more than stringing vacation clips together—it is about translating the visceral sensory rush of traveling into light and sound.

### 1. Ingesting and Culling 280GB of Rushes
The trip produced over 6 hours of raw 4K 60FPS clips. Before touching the timeline, I organized files into mood categories:
- **Transit Velocity**: Planes taking off, luggage belts, BTS sky trains.
- **Atmospheric Texture**: Street food sizzling, rain on neon awnings, tuk-tuk motors.
- **Golden Hour Light**: Beach reflections and sunset silhouettes in Pattaya.

### 2. Crafting the Audio Landscape
80% of what feels 'cinematic' is in the audio. In Bangkok, the sound of sizzling oil and street chatter was recorded on a binaural mic. In post-production, we layered sub-bass sweeps under every transit cut to give physical weight to the journey.
    `,
  },
  {
    id: 'davinci-resolve-color-grading-blueprint',
    slug: 'davinci-resolve-color-grading-blueprint',
    title: 'DaVinci Resolve Color Grading Blueprint: Transforming Flat Log into Film Emulation',
    category: 'Editing Tutorials',
    excerpt: 'Step-by-step node tree hierarchy for Sony S-Log3 and mobile footage to achieve organic skin tones, film grain, and rich shadows without crushing detail.',
    author: 'Vivek Pandey',
    date: 'Aug 14, 2026',
    readTime: '8 min read',
    coverImage: 'https://img.youtube.com/vi/il64UocoL_Y/hqdefault.jpg',
    keywords: ['davinci resolve', 'color grading tutorial', 'film emulation', 's-log3'],
    tags: ['Color Grading', 'DaVinci Resolve', 'LUTs', 'Tutorials'],
    content: `
Color grading is where digital footage gains cinematic soul. Here is the exact 6-node tree I use on commercial and travel projects.

### Node 1: Exposure & Offset
Balance overall luminance using the offset wheel before touching wheels or curves. Keep skin tones in the 45-65 IRE range.

### Node 2: White Balance & Temperature
Ensure neutral gray surfaces are dead center in the vector scope. Clean color science begins with accurate primaries.

### Node 3: CST (Color Space Transform)
Transform your camera native gamut (e.g., Sony S-Gamut3.Cine / S-Log3) into DaVinci Wide Gamut / Intermediate. Working in DWG protects dynamic range and prevents color clipping in extreme highlights.

### Node 4: Creative Look & Split Toning
Introduce subtle cool cyan into deep shadows while protecting warm golden skin highlights. Keep saturation gentle and organic.

### Node 5: Film Grain & Halation
Add 35mm optical grain (fine setting) and subtle red halation around high-contrast edges to simulate analog photographic emulsion.
    `,
  },
  {
    id: 'creator-journey-story',
    slug: 'creator-journey-story',
    title: 'From Mobile Cuts to Cinema Rigs: My 5-Year Creator & Filmmaker Journey',
    category: 'Creator Journey',
    excerpt: 'How Vivek evolved from editing smartphone clips on VN & CapCut to directing commercial narratives, scaling YouTube channels, and building EditGuru.',
    author: 'Vivek Pandey',
    date: 'Aug 04, 2026',
    readTime: '6 min read',
    coverImage: 'https://img.youtube.com/vi/1YC7WEZBJsc/hqdefault.jpg',
    keywords: ['creator journey', 'video editor story', 'nomad vivek', 'editguru'],
    tags: ['Creator Journey', 'Inspiration', 'Storytelling', 'EditGuru'],
    content: `
Five years ago, I didn't have a high-end editing workstation or cinema camera. I had a phone, free editing apps, and an obsession with visual pacing.

### The Early Days: Learning the Language of Timing
Before mastering Adobe Premiere Pro or DaVinci Resolve, I learned video editing on VN Editor and CapCut. This proved to be an unexpected superpower: mobile editing forces you to prioritize story, comedic timing, and emotional hooks over expensive plugins.

### Transitioning to Professional NLEs
When I transitioned to desktop workstations, the transition was seamless because the fundamentals never change. A cut either carries emotional momentum or it doesn't. Today, with over 120+ finished projects and 2M+ organic views, the mission remains identical: creating stories through visuals that resonate.
    `,
  },
  {
    id: 'vertical-video-trends-2026',
    slug: 'vertical-video-trends-2026',
    title: 'Vertical Video Trends in 2026: Fast Cuts, AI Sound Design, and Film Grain Emulation',
    category: 'Video Trends',
    excerpt: 'What is dominating Instagram Reels, TikTok, and YouTube Shorts this year—and how creators can adapt before algorithms shift again.',
    author: 'Vivek Pandey',
    date: 'Jul 26, 2026',
    readTime: '5 min read',
    coverImage: 'https://img.youtube.com/vi/0gd260zfErE/hqdefault.jpg',
    keywords: ['video trends 2026', 'reels trends', 'tiktok edits', 'ai sound design'],
    tags: ['Trends', 'Short Form', 'Reels', 'Social Media'],
    content: `
Short-form content in 2026 has evolved from cheap gimmicks into high-production micro-cinema.

### 1. The Death of Generic AI Voiceovers
Viewers develop immediate fatigue when hearing robotic narrator voices. Successful creators are moving back to raw, authentic human voiceovers with crisp dynamic range and room texture.

### 2. Organic Film Grain on Mobile OLED
Smartphones now feature ultra-vibrant OLED displays. Creators are applying subtle 16mm/35mm film grain, analog chromatic aberration, and soft halation to combat the sterile digital look of smartphone sensors.

### 3. Kinetic 3D Subtitles
Flat yellow subtitles are out. Integrated 3D tracking where captions sit behind foreground subjects and bounce with dialogue cadence is setting the standard for viral retention.
    `,
  },
];
