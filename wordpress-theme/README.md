# EditGuru.in — WordPress Theme Package

This directory contains the **EditGuru - Cinematic Portfolio** custom WordPress theme. It brings the entire **Artistic Flair** dark liquid-glass aesthetic, interactive video player, Davinci timeline monitor, client metrics, and direct client project ingestion modal directly into WordPress.

---

## 📁 Theme Directory Structure

```
wordpress-theme/
└── editguru/
    ├── style.css           # Theme header declaration & custom styling
    ├── functions.php       # Theme setup, CPT 'project', metaboxes, AJAX contact handler
    ├── header.php          # Sticky liquid-glass navigation bar & mobile drawer
    ├── footer.php          # Liquid-glass footer, video modal & contact modal
    ├── front-page.php      # Full homepage template (Hero, Monitor, Stats, Portfolio, About, Services, CTA)
    ├── single-project.php  # Single project case-study view
    ├── index.php           # Fallback blog archive template
    ├── page.php            # Standard WordPress page template
    └── assets/
        └── js/
            └── main.js     # Video controls, color grading toggle, modals & ambient sound
```

---

## 🚀 How to Install into WordPress

### Method 1: Upload via WordPress Admin Dashboard (Recommended)

1. **Export/Download this project**:
   - In Google AI Studio, click the top-right **Settings / Export** menu and select **"Export to ZIP"**.
   - Extract the downloaded ZIP file onto your computer.
2. **Zip the `editguru` folder**:
   - Go to `wordpress-theme/` and compress the `editguru` folder into `editguru.zip`.
3. **Upload to WordPress**:
   - In your WordPress Admin Dashboard, navigate to **Appearance > Themes**.
   - Click **Add New Theme** at the top, then click **Upload Theme**.
   - Choose `editguru.zip` and click **Install Now**.
4. **Activate**:
   - Click **Activate**.

---

### Method 2: Manual Upload via FTP or cPanel File Manager

1. Connect to your web hosting server via FTP (FileZilla) or cPanel File Manager.
2. Navigate to your WordPress root directory:
   `/wp-content/themes/`
3. Upload the `editguru` folder directly into `/wp-content/themes/`.
4. Go to **WordPress Admin > Appearance > Themes** and click **Activate** under **EditGuru**.

---

## 🎬 How to Add & Manage Video Projects

Once the theme is active, a new menu item called **"Portfolio Projects"** will automatically appear in your WordPress Admin sidebar:

1. Click **Portfolio Projects > Add New Project**.
2. **Title**: Enter the project name (e.g. `Midnight Tokyo - Cinematic Drift Film`).
3. **Description**: Write the story, pacing concept, or client brief in the main editor.
4. **Featured Image**: Set a high-resolution 16:9 thumbnail (recommended 1920x1080).
5. **Video Project Specifications** (Custom Meta Box):
   - **Client / Brand Name**: (e.g. *RedBull*, *Overdrive Media*)
   - **Video MP4 / Stream URL**: Direct URL to your MP4 or video asset.
   - **Views / Reach Metric**: (e.g. *2.4M Views*)
   - **Duration**: (e.g. *02:40*)
   - **Master Resolution**: (e.g. *4K ProRes RAW*)
   - **Software / Pipeline Used**: (e.g. *DaVinci Resolve, Soundly, Dehancer Pro*)
6. **Project Category**: Assign or create categories like *Cinematic*, *Reels & Shorts*, *Travel & Vlog*, *Commercial*, *Motion FX*, or *Documentaries*.
7. Click **Publish**. The new project will appear instantly on the front-page grid with instant category filtering and full video modal playback!

---

## 📬 Contact Form Inquiries

The "Start a Project" and "Let's Work Together" buttons trigger the direct project brief ingestion modal.
- Submissions are processed securely via WordPress AJAX.
- Emails are delivered straight to your WordPress admin email address (`Settings > General > Administration Email Address`).
- You can also view or forward submissions by installing any SMTP plugin (such as *WP Mail SMTP*) to ensure 100% email deliverability from your server.

---

## 🎨 Theme Features & Customization

- **Zero Heavy Build Tool Requirements on Server**: The theme uses client-side Tailwind CSS and vanilla modern JavaScript. It runs smoothly on any PHP/WordPress host without requiring Node.js or terminal build commands.
- **Davinci Resolve Timeline Monitor**: An interactive hero player with active EDL sequence header and interactive **Raw Log vs Cinema Graded** color toggle.
- **Ambient Cinema Sound Engine**: Generative Web Audio API synthesizer for instant zero-bandwidth cinema audio atmosphere.
- **100% Responsive**: Tailored for ultra-wide desktop displays, tablets, and smartphones.
