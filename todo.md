# Green Milele Website - Implementation Roadmap

## Phase 1: Project Setup & Architecture
- [x] Initialize Next.js project (`npx create-next-app@latest`).
- [x] Choose App Router, TypeScript (recommended for maintainability), and Tailwind CSS.
- [x] Clean up boilerplate code in `app/page.tsx` and `app/globals.css`.
- [x] Set up the folder structure (e.g., `/components`, `/lib`, `/assets`, `/sanity`).

## Phase 2: Design System & Theming (iOS Glassmorphism - Tailwind v4)
- [x] Define custom environmental colors using the `@theme` directive in `globals.css`:
  - `--color-primary: #1A3626;` (Deep Forest Green)
  - `--color-secondary: #A7C4AA;` (Soft Sage/Mint)
  - `--color-background: #F7F5F0;` (Sand/Off-white)
- [x] Create a custom `@utility glass-panel` in `globals.css` to act as the base for the iOS frosted glass effect.
- [x] Import and configure the **Plus Jakarta Sans** font in `app/layout.tsx` using `next/font/google`.
- [x] Apply the font variable to the `<body>` in `app/layout.tsx`.
- [x] Add a subtle radial-gradient background texture to `app/layout.tsx` to enhance the depth of the glassmorphism blur effect.

## Phase 3: Global Components
- [x] Build `<Navbar />`:
  - Include Logo, Navigation Links, and Glassmorphism styling.
  - Make it sticky and responsive (hamburger menu for mobile).
- [x] Build `<Footer />`:
  - Quick links, Socials, and Contact info.
- [x] Build `<DonateButton />`:
  - Keep it modular. Currently redirects to M-Changa/M-Pesa STK, but easily editable later for Bank Details.
- [x] Build `<Button />`:
  - Reusable component for CTAs (Join Us, Submit, RSVP) with consistent hover states.

## Phase 4: Core Static Pages Layout
- [x] **Home Page (`/`)**:
  - Hero Section (Background image, Glassy overlay text box, CTAs).
  - Mission Snapshot (Short grid or text block).
  - Featured Event teaser.
- [x] **About Us Page (`/about`)**:
  - Our Story section.
  - Team Grid: Director cards with photos and titles (Glassy cards).
- [x] **Get Involved / Contact (`/join`)**:
  - Web3Forms integration for the Contact Form.
  - "Become a Member" card with a link to the external membership form.
  - "Join our Community" card with the WhatsApp link.

## Phase 5: Dynamic Content Integration (Sanity CMS)
- [x] Initialize Sanity within the project (`npm create sanity@latest -- --template clean --create-project`).
- [x] Define Sanity Schemas:
  - `event`: Title, Date, Location, Description, RSVP Link, Cover Image.
  - `galleryImage`: Image file, Alt text, optional Event reference.
- [x] Build the Sanity fetching utility in Next.js (`lib/sanity.client.ts`).
- [x] Build **Events Section/Page**: Map through Sanity event data. Include the dynamic external RSVP button.
- [x] Build **Gallery Section/Page**: Map through Sanity image data using a Masonry grid layout. 
- [x] Test the `/studio` route so directors can log in and upload content.

## Phase 6: Refinement & Launch
- [ ] Cross-browser and mobile responsiveness testing.
- [ ] SEO optimization (Meta tags, title, description in Next.js `layout.tsx`).
- [ ] Push to GitHub.
- [ ] Import repository into Vercel and deploy.
- [ ] Add the custom `greenmilele` domain in Vercel settings.