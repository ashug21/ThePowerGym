# IRONFORGE — Premium Gym Website

A luxury fitness brand website built with Next.js (App Router), JavaScript, and CSS.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: JavaScript
- **Styling**: CSS Modules / Global CSS
- **Animations**: CSS animations + Canvas API
- **Images**: Unsplash CDN

## Pages
- **Home** — Hero, Features, Trainers, Membership, Testimonials
- **Gallery** — Filterable masonry grid with lightbox
- **Enquiry** — Split-layout contact form
- **Contact** — Full contact info, map, hours, social, form

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
ironforge-gym/
├── app/
│   ├── layout.js          # Root layout
│   ├── page.js            # Home page
│   ├── gallery/
│   │   └── page.js
│   ├── enquiry/
│   │   └── page.js
│   └── contact/
│       └── page.js
├── components/
│   ├── Navbar.js
│   ├── Footer.js
│   ├── HeroSection.js
│   ├── HeroCanvas.js      # Canvas particle animation
│   ├── FeaturesSection.js
│   ├── TrainersSection.js
│   ├── MembershipSection.js
│   ├── TestimonialsSection.js
│   ├── CtaStrip.js
│   ├── GalleryClient.js
│   ├── EnquiryClient.js
│   └── ContactClient.js
├── styles/
│   ├── globals.css
│   ├── navbar.css
│   ├── footer.css
│   ├── home.css
│   ├── gallery.css
│   └── forms.css
└── next.config.js
```

## Design System

### Colors
- Background: `#050505`
- Gold Accent: `#c9a84c`
- Text: `#f5f5f0`

### Typography
- Display: Bebas Neue
- Heading: Syncopate
- Body: DM Sans
