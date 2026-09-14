# PRD — VIDEO EDITOR & AI VIDEO GENERATION PORTFOLIO WEBSITE

## 1. PROJECT OVERVIEW

Buat sebuah website portfolio personal satu halaman untuk menampilkan profesional branding sebagai **Video Editor dan AI Video Generation Specialist**.

Website harus berfungsi sebagai portfolio showcase yang mengutamakan visual, terutama hasil video, bukan sebagai website CV tradisional.

Website ditujukan untuk calon client seperti:

* Business owners
* Brands
* Content creators
* Marketing agencies
* Startups
* YouTube creators
* TikTok / Instagram creators
* International freelance clients

Tujuan utama website adalah membuat visitor memahami dalam beberapa detik:

**Who I am → What I do → See my work → Contact me**

Website harus terasa seperti kombinasi antara **creative studio dan modern technology portfolio**.

Positioning utama:

**Video Editing + AI Video Generation**

Value proposition:

> I turn ideas into engaging videos using professional editing and AI-powered video production.

Website harus clean, simple, modern, premium, visual-focused, responsive, cepat, dan mudah dikembangkan.

---

# 2. TECHNOLOGY STACK

Gunakan:

* Nuxt.js
* Nuxt 4
* Vue 3
* TypeScript
* Tailwind CSS
* Lucide Icons

Untuk animation gunakan seminimal mungkin.

Prioritaskan:

* CSS transitions
* Vue transitions
* Intersection Observer

GSAP hanya digunakan apabila benar-benar diperlukan.

Deployment:

* GitHub
* Vercel

Website harus dapat dijalankan dengan:

```bash
npm install
npm run dev
```

dan harus berhasil build menggunakan:

```bash
npm run build
```

---

# 3. DESIGN DIRECTION

Overall style:

* Clean
* Minimal
* Modern
* Premium
* Creative
* Tech-inspired
* Professional
* Visual-focused

Jangan membuat website terlihat seperti template portfolio freelancer generik.

Jangan menggunakan terlalu banyak:

* Gradient
* Glassmorphism
* Neon effects
* Decorative elements
* Floating objects
* Stock photos
* Excessive animations

Fokus pada whitespace, typography, video, layout yang rapi, dan visual hierarchy.

Konsep visual:

**Creative Studio Meets Modern Technology**

Website harus lebih terasa seperti website seorang modern creative professional daripada CV website.

---

# 4. COLOR SYSTEM

Primary background:

```text
#081426
```

Secondary dark navy:

```text
#0F1F38
```

Accent blue:

```text
#3B82F6
```

Secondary blue:

```text
#60A5FA
```

Light background:

```text
#F8FAFC
```

Dark background:

```text
#050B14
```

Primary light text:

```text
#F8FAFC
```

Secondary text:

```text
#94A3B8
```

Border:

```text
rgba(255,255,255,0.08)
```

Gunakan dark navy sebagai warna identitas utama.

Accent blue hanya digunakan untuk:

* CTA
* highlight text
* active navigation
* hover state
* small decorative details

Jangan menjadikan semua elemen berwarna biru.

---

# 5. TYPOGRAPHY

Gunakan font modern seperti:

* Inter
* Manrope
* Plus Jakarta Sans

Preferensi utama:

**Inter**

Heading menggunakan:

* Bold
* Extra Bold

Body menggunakan:

* Regular
* Medium

Gunakan responsive typography menggunakan `clamp()`.

Contoh gaya heading:

```text
I TURN IDEAS INTO
VIDEOS THAT GET ATTENTION.
```

Kata tertentu seperti "VIDEOS" dapat menggunakan accent blue.

---

# 6. PAGE STRUCTURE

Website hanya memiliki satu halaman:

```text
/
```

Urutan section:

```text
Navbar
Hero
Featured Work
Video Editing
Before / After
AI Video Generation
AI Showcase
Services
About
Skills & Tools
Workflow
Final CTA
Contact
Footer
```

---

# 7. NAVBAR

Navbar harus minimal dan sticky.

Desktop layout:

```text
LOGO | WORK | SERVICES | ABOUT | CONTACT | LET'S WORK TOGETHER
```

Logo:

```text
RISMAN
```

atau:

```text
Risman Creative
```

Navigation:

```text
Work
Services
About
Contact
```

CTA:

```text
Let's Work Together
```

Behavior:

* Navbar transparent pada bagian atas halaman.
* Ketika user scrolling, navbar berubah menjadi semi-transparent dark navy.
* Gunakan backdrop blur ringan.
* Navbar tetap sticky di bagian atas.
* Smooth scrolling menuju section.

Mobile:

```text
RISMAN                         MENU
```

Gunakan hamburger menu.

---

# 8. HERO SECTION

Hero merupakan bagian terpenting dari website.

Hero harus langsung menjelaskan positioning.

Headline utama:

> I Turn Ideas Into Videos That Get Attention.

Supporting text:

> I create engaging short-form content, social media videos, and AI-powered visual experiences for brands, businesses, and creators.

CTA utama:

```text
View My Work
```

CTA kedua:

```text
Let's Work Together
```

Hero tidak menggunakan stock photography.

Gunakan video reel atau featured video sebagai visual utama.

Video:

* muted
* autoplay
* loop
* playsinline

Hero video harus terlihat cinematic dan premium.

Desktop dapat menggunakan layout:

```text
LEFT
Headline
Description
CTA

RIGHT
Large Video Preview
```

atau layout centered dengan video di bawah headline.

Mobile harus berubah menjadi satu kolom.

Tambahkan subtle scroll indicator di bagian bawah hero.

---

# 9. FEATURED WORK SECTION

Heading:

> Selected Work

Supporting text:

> A selection of recent video editing and AI-generated projects.

Section ini harus langsung menampilkan hasil kerja setelah Hero.

Portfolio menggunakan card grid.

Desktop:

```text
3 columns
```

Tablet:

```text
2 columns
```

Mobile:

```text
1 column
```

Setiap card memiliki:

* Thumbnail
* Video preview
* Project title
* Category
* Short description

Contoh:

```text
AI Product Commercial
AI Video

Cinematic product advertisement created using
AI-generated visuals and professional post-production.
```

Portfolio harus menjadi elemen visual utama.

---

# 10. PORTFOLIO CARD

Portfolio card memiliki:

```text
Thumbnail / Video
Project Title
Category
Short Description
```

Contoh kategori:

```text
Short Form
YouTube
AI Video
Product Commercial
Social Media
Motion Graphics
```

Hover behavior:

* Thumbnail sedikit zoom.
* Card naik sedikit.
* Border menjadi lebih visible.
* Transition smooth.
* Jangan gunakan animation berlebihan.

---

# 11. VIDEO MODAL

Ketika user mengklik portfolio card, buka modal.

Modal harus menampilkan:

```text
Large Video Player

Project Name
Category

Description

Tools Used
```

Contoh:

```text
AI Fashion Campaign

AI Video Generation

Created a cinematic fashion campaign using
AI-generated visuals combined with professional editing.

Tools:
Seedance
Kling
Premiere Pro
```

Modal memiliki:

* close button
* ESC support
* click outside support
* fullscreen video
* play/pause
* mute/unmute

Gunakan responsive modal.

Pada mobile modal harus menggunakan hampir seluruh layar.

---

# 12. VIDEO EDITING SECTION

Heading:

> Video Editing

Supporting:

> From raw footage to polished, engaging content.

Fokus section ini adalah menunjukkan kemampuan editing tradisional.

Kategori:

```text
Short-Form Content
YouTube
Social Media Ads
Talking Head
Product Videos
```

Tampilkan satu project unggulan dengan ukuran lebih besar.

Kemudian beberapa project pendukung dalam grid.

Visual harus lebih dominan daripada teks.

---

# 13. BEFORE / AFTER SECTION

Buat section:

> From Raw to Refined

Gunakan comparison slider.

Konsep:

```text
BEFORE  ←────────────→  AFTER
```

Before dapat memperlihatkan:

* raw footage
* unedited footage
* basic audio

After dapat memperlihatkan:

* color grading
* subtitles
* transitions
* sound design
* motion graphics

Slider harus interaktif menggunakan mouse dan touch.

Pastikan tetap responsive pada mobile.

---

# 14. AI VIDEO GENERATION SECTION

Ini adalah salah satu differentiator utama website.

Heading:

> AI-Powered Video Creation

Supporting text:

> I combine generative AI with professional post-production to create visuals that are fast, flexible, and impossible to achieve with traditional production alone.

Tekankan bahwa AI merupakan bagian dari workflow profesional, bukan sekadar gimmick.

---

# 15. AI SHOWCASE

Buat visual showcase khusus untuk AI video.

Gunakan layout yang berbeda dari section editing.

Contoh:

```text
AI VIDEO SHOWCASE

Large Featured AI Video

Small Project
Small Project
Small Project
Small Project
```

Kategori AI dapat berupa:

```text
AI Product
AI Character
AI Fashion
AI Cinematic
AI Advertisement
AI Social Content
```

AI section harus terlihat lebih futuristic dibanding section editing tetapi tetap konsisten dengan keseluruhan desain.

---

# 16. AI TOOLS

Tampilkan tools yang digunakan secara clean.

Tools dapat meliputi:

```text
Seedance
Kling
Google Veo
Google Flow
HeyGen
ElevenLabs
Adobe Premiere Pro
After Effects
CapCut
DaVinci Resolve
```

Jangan menggunakan percentage skill seperti:

```text
Premiere Pro 95%
```

Gunakan simple text chips, logos, atau horizontal marquee.

Contoh:

```text
SEEDANCE
KLING
VEO
FLOW
HEYGEN
ELEVENLABS
PREMIERE PRO
AFTER EFFECTS
```

---

# 17. SERVICES SECTION

Heading:

> What I Can Create

Buat 4–6 service cards.

## Service 01

### Short-Form Video Editing

> Engaging Reels, TikTok and YouTube Shorts designed for retention.

## Service 02

### Social Media Video

> Modern video content optimized for today's social platforms.

## Service 03

### AI Video Generation

> AI-generated visuals, scenes, characters, product videos and creative concepts.

## Service 04

### AI + Human Editing

> AI-generated footage refined through professional editing, sound design and storytelling.

## Service 05

### Product Videos

> Engaging visual content designed to showcase products and brands.

## Service 06

### Content Repurposing

> Turn long-form footage into multiple short-form videos for different platforms.

Gunakan card layout minimal.

---

# 18. ABOUT SECTION

Heading:

> Behind The Videos

Copy:

> I'm Risman, a freelance video editor and AI video creator focused on creating modern, engaging content for brands, businesses and creators.
>
> My workflow combines traditional video editing with generative AI to produce content faster while keeping storytelling, pacing and visual quality at the center.

Jangan membuat About terlalu panjang.

Website harus tetap visual-first.

---

# 19. SKILLS

Tampilkan skill menggunakan tag/chips.

Skills:

```text
Video Editing
Short-Form Content
AI Video Generation
Storytelling
Motion Graphics
Sound Design
Color Grading
Content Repurposing
```

Tidak menggunakan progress bars.

---

# 20. WORKFLOW SECTION

Heading:

> How I Work

Tampilkan empat langkah.

## 01 — Brief

Understand the content, audience and objective.

## 02 — Concept

Develop the visual direction and editing approach.

## 03 — Production

Edit footage or generate visuals using AI.

## 04 — Final Polish

Sound design, color, captions, motion and final delivery.

Visual layout:

```text
01 → 02 → 03 → 04
```

Desktop dapat horizontal.

Mobile berubah menjadi vertical.

---

# 21. WHY WORK WITH ME

Optional credibility section.

Heading:

> Why This Workflow Works

Tiga benefit:

### Faster Production

AI-assisted workflows can accelerate visual production.

### Creative Flexibility

Generate scenes and concepts that can be difficult or expensive to create traditionally.

### Human Editing

AI output is refined through professional editing, pacing, sound and storytelling.

Jaga teks tetap singkat.

---

# 22. TESTIMONIAL SECTION

Section testimonial hanya ditampilkan jika testimonial nyata tersedia.

Jangan membuat testimonial palsu.

Format:

```text
"Client testimonial"

Client Name
Role / Company
```

Apabila belum ada testimonial, section ini boleh dihilangkan dari MVP.

---

# 23. FINAL CTA

Buat section CTA yang kuat menjelang akhir website.

Heading:

> Have a Video in Mind? Let's Create It.

Supporting:

> Whether you need short-form editing, social media content, or AI-generated visuals, let's turn your idea into something people want to watch.

Primary CTA:

```text
Start a Project
```

Secondary CTA:

```text
View My Work
```

Gunakan background dark navy yang sedikit berbeda dari section lain.

---

# 24. CONTACT SECTION

Heading:

> Let's Work Together

Tampilkan contact methods:

```text
Email
WhatsApp
LinkedIn
Upwork
```

Untuk MVP tidak perlu backend contact form yang kompleks.

CTA email dapat menggunakan `mailto:`.

WhatsApp menggunakan direct link.

LinkedIn dan Upwork menggunakan external link.

Semua external links menggunakan:

```text
target="_blank"
rel="noopener noreferrer"
```

---

# 25. FOOTER

Footer sederhana.

Format:

```text
RISMAN

Video Editor & AI Video Creator

Work
Services
About
Contact

LinkedIn
Upwork
GitHub
Email

© 2026 Risman. All rights reserved.
```

---

# 26. PORTFOLIO DATA ARCHITECTURE

Portfolio jangan hardcode di template component.

Gunakan file data:

```text
data/portfolio.ts
```

Contoh struktur:

```ts
export const portfolio = [
  {
    id: 1,
    title: "AI Product Commercial",
    category: "AI Video",
    description:
      "Cinematic product advertisement created using AI-generated visuals.",
    thumbnail: "/images/project-01.jpg",
    video: "/videos/project-01.mp4",
    tools: ["Seedance", "Kling", "Premiere Pro"],
    featured: true
  },
  {
    id: 2,
    title: "Short Form Campaign",
    category: "Video Editing",
    description:
      "Short-form social media content optimized for retention.",
    thumbnail: "/images/project-02.jpg",
    video: "/videos/project-02.mp4",
    tools: ["Premiere Pro", "After Effects"],
    featured: false
  }
]
```

Tujuannya agar project baru dapat ditambahkan tanpa mengubah komponen utama.

---

# 27. SERVICES DATA

Gunakan:

```text
data/services.ts
```

Jangan hardcode semua service langsung ke template.

---

# 28. TOOLS DATA

Gunakan:

```text
data/tools.ts
```

sehingga daftar tools dapat diperbarui dengan mudah.

---

# 29. RECOMMENDED PROJECT STRUCTURE

Gunakan struktur:

```text
/
├── assets/
│   └── styles/
│
├── components/
│   ├── Navbar.vue
│   ├── Hero.vue
│   ├── FeaturedWork.vue
│   ├── PortfolioGrid.vue
│   ├── PortfolioCard.vue
│   ├── VideoModal.vue
│   ├── VideoEditing.vue
│   ├── BeforeAfter.vue
│   ├── AIVideo.vue
│   ├── AISHowcase.vue
│   ├── Services.vue
│   ├── About.vue
│   ├── Skills.vue
│   ├── Tools.vue
│   ├── Workflow.vue
│   ├── CTA.vue
│   ├── Contact.vue
│   └── Footer.vue
│
├── data/
│   ├── portfolio.ts
│   ├── services.ts
│   └── tools.ts
│
├── public/
│   ├── images/
│   └── videos/
│
├── pages/
│   └── index.vue
│
├── app.vue
├── nuxt.config.ts
├── tailwind.config.ts
├── package.json
└── README.md
```

Jangan membuat `index.vue` menjadi terlalu besar.

Component harus modular.

---

# 30. VIDEO HANDLING

Portfolio video harus menggunakan:

```text
MP4
WebM
```

Video settings:

```text
muted
autoplay
loop
playsinline
```

Performance requirements:

* gunakan poster image
* lazy load video
* compress video
* gunakan thumbnail berformat WebP/AVIF
* jangan autoplay semua video sekaligus
* featured video dapat autoplay
* portfolio lainnya dapat play ketika hover atau ketika masuk viewport

Pastikan video tidak menyebabkan layout shift.

---

# 31. RESPONSIVE DESIGN

Website wajib responsive.

Breakpoints:

```text
Mobile: < 640px
Tablet: 640px – 1024px
Desktop: > 1024px
```

Mobile requirements:

* navbar berubah menjadi hamburger
* portfolio satu kolom
* CTA menjadi stack atau full width
* typography mengecil secara responsive
* spacing lebih compact
* modal video memenuhi sebagian besar viewport
* before/after slider mendukung touch

Tidak boleh ada horizontal scrolling.

---

# 32. ANIMATION

Gunakan animation yang subtle.

Page load:

* fade
* slide-up ringan

Scroll:

* section reveal

Portfolio:

* image zoom ringan saat hover
* card translateY ringan

Buttons:

* smooth hover transition

Navbar:

* smooth background transition ketika scroll

Gunakan duration sekitar:

```text
200ms – 500ms
```

Jangan menggunakan animation berlebihan.

Website harus tetap terasa profesional dan fast.

---

# 33. PERFORMANCE

Target:

```text
Lighthouse Performance > 90
```

Prioritaskan:

* optimized image
* WebP / AVIF
* lazy loading
* compressed videos
* responsive image sizes
* minimal dependencies
* code splitting
* minimal JavaScript
* avoid unnecessary animations
* avoid unnecessary third-party scripts

Target Core Web Vitals:

```text
LCP < 2.5s
CLS < 0.1
```

---

# 34. SEO

Page title:

```text
Risman — Video Editor & AI Video Creator
```

Meta description:

```text
Freelance video editor and AI video creator specializing in short-form content, social media videos, AI-generated visuals, and modern video production.
```

Potential keywords:

```text
video editor
AI video creator
AI video generation
freelance video editor
short form video editor
AI video editor
social media video editor
```

Open Graph image:

```text
/public/images/og-image.jpg
```

Gunakan semantic HTML.

Heading hierarchy:

```text
H1
H2
H3
```

Jangan menggunakan heading secara random hanya untuk styling.

---

# 35. ACCESSIBILITY

Requirements:

* semantic HTML
* proper heading hierarchy
* image alt text
* keyboard accessible navigation
* keyboard accessible modal
* visible focus state
* sufficient color contrast
* accessible button labels
* video autoplay tanpa audio
* support ESC untuk modal
* buttons tidak hanya menggunakan icon tanpa accessible label

---

# 36. ANALYTICS

Optional untuk MVP.

Recommended:

```text
Vercel Analytics
```

Track:

```text
Page Views
Portfolio Clicks
CTA Clicks
Contact Clicks
```

Jangan menambahkan analytics yang berat.

---

# 37. DEPLOYMENT

Repository:

```text
GitHub
```

Deployment platform:

```text
Vercel
```

Flow:

```text
Local Development
        ↓
GitHub
        ↓
Vercel
        ↓
Production
```

Website harus dapat dideploy tanpa konfigurasi server khusus.

Jangan membutuhkan VPS.

---

# 38. ENVIRONMENT VARIABLES

Untuk MVP website tidak membutuhkan API.

Apabila nantinya membutuhkan API, gunakan environment variable.

Jangan pernah menyimpan secret langsung di source code.

Contoh:

```text
.env
```

Jangan commit `.env` ke GitHub.

---

# 39. CMS / DATABASE

Tidak membutuhkan CMS atau database untuk versi pertama.

Portfolio disimpan sebagai local TypeScript data.

Contoh:

```text
data/portfolio.ts
```

Jangan menambahkan:

* database
* authentication
* admin dashboard
* CMS

hanya untuk portfolio sederhana.

Future upgrade dapat menggunakan:

```text
Sanity
Supabase
Strapi
```

apabila jumlah portfolio sudah banyak.

---

# 40. FUTURE FEATURES

Website dapat dikembangkan nantinya menjadi:

```text
/blog
/case-studies
/services
/about
/contact
```

Future features:

* CMS
* Testimonials
* Client case studies
* Booking system
* Lead capture
* Newsletter
* Analytics dashboard
* Client portal

Fitur tersebut tidak termasuk MVP.

---

# 41. MVP REQUIREMENTS

Versi pertama minimal harus memiliki:

```text
Navbar
Hero
Featured Work
Video Editing Portfolio
Before / After
AI Video Generation
AI Showcase
Services
About
Skills
Tools
Workflow
Final CTA
Contact
Footer
```

MVP tidak membutuhkan:

```text
Blog
CMS
Database
Authentication
Payment
Client Portal
Dashboard
Complex Backend
```

---

# 42. FUNCTIONAL REQUIREMENTS

FR-01:
Navbar melakukan smooth scroll ke setiap section.

FR-02:
Button "View My Work" menuju portfolio.

FR-03:
Button "Let's Work Together" menuju contact.

FR-04:
Portfolio card dapat membuka video modal.

FR-05:
Video modal dapat play, pause, mute, fullscreen.

FR-06:
Modal dapat ditutup menggunakan X, ESC, atau click outside.

FR-07:
Before/After dapat digeser dengan mouse maupun touch.

FR-08:
Portfolio dapat difilter berdasarkan kategori jika jumlah project sudah lebih dari 6.

FR-09:
Semua external links dapat dibuka dengan aman.

FR-10:
Website responsive di mobile, tablet, dan desktop.

FR-11:
Website tidak memiliki horizontal overflow.

FR-12:
Website berhasil build dengan `npm run build`.

FR-13:
Website berhasil dideploy ke Vercel.

---

# 43. DESIGN HIERARCHY

Prioritas visual:

```text
1. Video
2. Hero headline
3. Portfolio
4. CTA
5. Service offering
6. About
7. Supporting information
```

Jangan membuat section dengan teks panjang.

Setiap section harus memiliki tujuan yang jelas.

---

# 44. CONTENT HIERARCHY

Visitor dalam 5–10 detik harus memahami:

```text
WHO
Risman

WHAT
Video Editor + AI Video Creator

VALUE
Creates engaging modern video content

PROOF
Portfolio videos

ACTION
Start a project
```

---

# 45. FINAL VISUAL FLOW

Homepage harus terasa seperti:

```text
NAVBAR
    ↓
HERO
"I TURN IDEAS INTO
VIDEOS THAT GET ATTENTION."
    ↓
FEATURED VIDEO
    ↓
SELECTED WORK
    ↓
VIDEO EDITING
    ↓
BEFORE / AFTER
    ↓
AI VIDEO GENERATION
    ↓
AI SHOWCASE
    ↓
SERVICES
    ↓
ABOUT
    ↓
SKILLS + TOOLS
    ↓
WORKFLOW
    ↓
FINAL CTA
"HAVE A VIDEO IN MIND?
LET'S CREATE IT."
    ↓
CONTACT
    ↓
FOOTER
```

---

# 46. CREATIVE PRINCIPLE

Jangan membuat website seperti:

```text
"Here is my resume."
```

Website harus terasa seperti:

```text
"Here is what I can create for you."
```

Portfolio harus menjadi bukti utama kemampuan.

Teks hanya memperkuat positioning.

Visual/video adalah hero dari website.

---

# 47. BRAND POSITIONING

Gunakan positioning:

> Modern Video Creator combining professional editing with AI-powered video production.

Jangan memposisikan diri hanya sebagai:

> Video Editor

tetapi sebagai:

> Video Editor + AI Video Creator

AI harus menjadi salah satu pillar utama brand.

Brand structure:

```text
VIDEO EDITING
       +
AI VIDEO GENERATION
       =
MODERN VIDEO CREATION
```

---

# 48. DEFINITION OF DONE

Project dinyatakan selesai apabila:

* Nuxt berjalan tanpa error.
* TypeScript tidak memiliki error.
* Semua component berfungsi.
* Navbar bekerja.
* Smooth scrolling bekerja.
* Hero tampil dengan baik.
* Portfolio tampil dengan baik.
* Video dapat dimainkan.
* Video modal bekerja.
* Before/After slider bekerja.
* CTA bekerja.
* Contact links bekerja.
* Responsive di mobile.
* Responsive di tablet.
* Responsive di desktop.
* Tidak ada horizontal overflow.
* Image/video sudah dioptimasi.
* SEO metadata tersedia.
* Accessibility dasar tersedia.
* `npm run build` berhasil.
* GitHub repository siap.
* Website berhasil deploy ke Vercel.
* Production website dapat diakses dengan baik.

---

# 49. DEVELOPER IMPLEMENTATION RULES

Saat membangun website:

1. Jangan membuat semua UI dalam satu file.
2. Gunakan reusable Vue components.
3. Gunakan TypeScript.
4. Gunakan data-driven portfolio.
5. Gunakan Tailwind CSS untuk styling.
6. Jangan menambahkan dependency tanpa alasan.
7. Jangan membuat backend jika tidak diperlukan.
8. Prioritaskan performance.
9. Prioritaskan responsive behavior.
10. Prioritaskan accessibility.
11. Gunakan clean naming convention.
12. Gunakan semantic HTML.
13. Jangan hardcode data portfolio ke layout component.
14. Jangan menggunakan fake testimonials.
15. Jangan menggunakan fake client logos.
16. Jangan menggunakan stock photography sebagai visual utama.
17. Jangan menggunakan excessive animation.
18. Jangan menggunakan skill percentage.
19. Pastikan website terlihat premium tetapi tetap simple.
20. Pastikan video menjadi fokus utama website.

---

# 50. FINAL DESIGN GOAL

Hasil akhir harus terlihat seperti portfolio modern seorang:

**Video Editor + AI Video Creator**

dengan karakter:

```text
Dark Navy
Minimal
Modern
Premium
Creative
Tech
Visual
Professional
```

Website harus membuat calon client berpikir:

> "This person can actually create modern video content."

bukan:

> "This is just another freelancer CV website."

Prioritas akhir:

```text
VISUAL QUALITY
>
PORTFOLIO
>
POSITIONING
>
USER EXPERIENCE
>
PERFORMANCE
>
DECORATION
```
