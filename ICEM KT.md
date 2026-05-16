# ICEM Next.js Website Developer KT

## Overview

This is a developer-facing knowledge transfer (KT) document for the ICEM Next.js website. It is intended to help the incoming development team understand the repo structure, developer workflow, and important implementation details.

The site is a Next.js application with static assets in `public/`, app routes under `src/app/`, and reusable UI components in `src/components/`.

## Tech Stack

- Framework: `Next.js` ^16.0.7
- React: `19.1.0`
- Styling: `tailwindcss` ^4 and `@tailwindcss/postcss`
- Key libraries: `framer-motion`, `gsap`, `axios`, `firebase`, `react-pdf`, `swiper`, `sharp`
- Deployment target: `Vercel` (suggested by `vercel.json`)

## Developer Workflow

### Install and run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000` to preview the site.

### Build and production

```bash
npm run build
npm start
```

### Key config files

- `package.json` — scripts and package dependencies
- `next.config.mjs` — Next.js configuration
- `jsconfig.json` — path alias and editor settings
- `postcss.config.mjs` — Tailwind/PostCSS setup
- `vercel.json` — deployment settings

## Repository Structure

### Root-level files

- `package.json`
- `package-lock.json`
- `next.config.mjs`
- `postcss.config.mjs`
- `jsconfig.json`
- `vercel.json`
- `README.md`
- `public/` — static assets and media
- `src/` — application source code

### `src/` structure

- `src/app/` — application routes and page entrypoints
- `src/components/` — reusable UI components
- `src/static/` — any static page fragments or helpers (if present)

### Important directories inside `src/app/`

- `src/app/page.jsx` — home page entry (if active)
- `src/app/layout.jsx` — app layout wrapper
- `src/app/about/`, `src/app/placement/`, `src/app/contact/`, etc. — actual route pages
- `src/app/campus-life/` — campus life pages and subroutes

### Important component directories

- `src/components/home/` — home page sections and landing content
- `src/components/` — shared components used across pages

## Route Map

These are the active route entrypoints and their file locations.

- `/` — `src/app/page.jsx`
- `/about/overview` — `src/app/about/overview/page.jsx`
- `/about/accreditation` — `src/app/about/accreditation/page.jsx`
- `/about/igi` — `src/app/about/igi/page.jsx`
- `/about/chanakya-edu` — `src/app/about/chanakya-edu/page.jsx`
- `/about/cfcm` — `src/app/about/cfcm/page.jsx`
- `/about/examination` — `src/app/about/examination/page.jsx`
- `/about/governance` — `src/app/about/governance/page.jsx`
- `/about/facilities` — `src/app/about/facilities/page.jsx`
- `/alumni` — `src/app/alumni/page.jsx`
- `/career` — `src/app/career/page.jsx`
- `/contact` — `src/app/contact/page.jsx`
- `/Feedback` — `src/app/Feedback/page.jsx`
- `/fees` — `src/app/fees/page.jsx`
- `/fees-regulating-authority` — `src/app/fees-regulating-authority/page.jsx`
- `/merit-lists` — `src/app/merit-lists/page.jsx`
- `/placement` — `src/app/placement/page.jsx`
- `/privacy-policy` — `src/app/privacy-policy/page.jsx`
- `/research` — `src/app/research/page.jsx`
- `/thank-you` — `src/app/thank-you/page.jsx`

### Campus life routes

- `/campus-life/academics` — `src/app/campus-life/academics/page.jsx`
- `/campus-life/annual-fest` — `src/app/campus-life/annual-fest/page.jsx`
- `/campus-life/clubs` — `src/app/campus-life/clubs/page.jsx`
- `/campus-life/committees` — `src/app/campus-life/committees/page.jsx`
- `/campus-life/cultural-events` — `src/app/campus-life/cultural-events/page.jsx`
- `/campus-life/icem-awards` — `src/app/campus-life/icem-awards/page.jsx`
- `/campus-life/icem-awards/[id]` — `src/app/campus-life/icem-awards/[id]/page.jsx`
- `/campus-life/induction-programme` — `src/app/campus-life/induction-programme/page.jsx`
- `/campus-life/nss` — `src/app/campus-life/nss/page.jsx`
- `/campus-life/sports` — `src/app/campus-life/sports/page.jsx`
- `/campus-life/student-welfare` — `src/app/campus-life/student-welfare/page.jsx`

### Programs routes

- `/programs/ai-ds` — `src/app/programs/ai-ds/page.jsx`
- `/programs/civil` — `src/app/programs/civil/page.jsx`
- `/programs/computer-engineering` — `src/app/programs/computer-engineering/page.jsx`
- `/programs/entc` — `src/app/programs/entc/page.jsx`
- `/programs/fye` — `src/app/programs/fye/page.jsx`
- `/programs/imba` — `src/app/programs/imba/page.jsx`
- `/programs/imca` — `src/app/programs/imca/page.jsx`
- `/programs/it` — `src/app/programs/it/page.jsx`
- `/programs/mba` — `src/app/programs/mba/page.jsx`
- `/programs/mca` — `src/app/programs/mca/page.jsx`
- `/programs/mechanical-engineering` — `src/app/programs/mechanical-engineering/page.jsx`
- `/programs/mtech-comp` — `src/app/programs/mtech-comp/page.jsx`
- `/programs/mtech-mech` — `src/app/programs/mtech-mech/page.jsx`

### App-level support files

- `src/app/layout.jsx` — global app layout
- `src/app/globals.css` — global styles
- `src/app/error.js` — error boundary handler
- `src/app/not-found.jsx` — 404 not-found page


### Routing and pages

- Most page routes are defined under `src/app/` using Next.js app router conventions.
- Route components typically export React components as default page entries.
- Check for `layout.jsx` and `page.jsx` files in subdirectories to understand nested layout behavior.

### Static assets

- All public images and media are served from `public/`.
- Use the same folder structure inside `public/` when adding new assets.
- Avoid removing any `public/` file unless you confirm it is not referenced anywhere in `src/`.

### Asset conventions

- Image paths in code are usually referenced relative to the `public/` directory.
- New images should be named consistently to avoid broken links.


## Notes for the incoming social media team

- All current site assets and images should remain inside `public/`.
- Before removing any image or file, verify that it is not referenced in `src/app/` or `src/components/`.
- If adding new marketing or social media assets, place them in a logically named folder under `public/` and update the code references.
- The site seems configured for Vercel deployment, so any production changes should be tested locally first.

## Recommended next steps

1. Open the site locally with `npm run dev` and review current pages.
2. Confirm the active routes under `src/app/` and update the team on which pages are currently live.
3. Keep asset naming consistent to avoid broken links in HTML/JS.
4. Use this document as a reference for deleted files and cleanup history.

---

> This handover document was prepared from repository metadata and git deletion history. If you need an additional technical handover, please ask for a deeper site architecture summary.
