# Areeb's Portfolio Website

A production-ready, dynamic portfolio website built with **Next.js 15 (App Router)** and **TypeScript**.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 3 + `@tailwindcss/typography` |
| Forms | React Hook Form + Zod |
| Animations | Framer Motion |
| Icons | Lucide React |

---

## Folder Structure

```
src/
├── app/                        # Next.js App Router
│   ├── layout.tsx              # Root layout (fonts, metadata, Navbar, Footer)
│   ├── page.tsx                # Home page (all sections composed here)
│   ├── loading.tsx             # Global loading UI
│   ├── error.tsx               # Global error boundary
│   ├── not-found.tsx           # 404 page
│   ├── about/
│   │   └── page.tsx
│   ├── projects/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── blog/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── contact/
│   │   └── page.tsx
│   └── api/                    # Backend — Next.js Route Handlers
│       ├── test/route.ts       # GET  /api/test  (health check)
│       ├── projects/
│       │   ├── route.ts        # GET  /api/projects
│       │   └── [slug]/route.ts # GET  /api/projects/:slug
│       ├── blog/
│       │   ├── route.ts        # GET  /api/blog
│       │   └── [slug]/route.ts # GET  /api/blog/:slug
│       ├── experience/
│       │   └── route.ts        # GET  /api/experience
│       ├── skills/
│       │   └── route.ts        # GET  /api/skills
│       └── contact/
│           └── route.ts        # POST /api/contact
│
├── components/                 # Reusable, domain-agnostic UI
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── SectionWrapper.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Badge.tsx
│       ├── Input.tsx
│       ├── Textarea.tsx
│       └── SectionHeading.tsx
│
├── features/                   # Feature-based modules (domain logic + UI)
│   ├── hero/
│   │   └── HeroSection.tsx
│   ├── projects/
│   │   ├── ProjectsSection.tsx
│   │   └── ProjectCard.tsx
│   ├── experience/
│   │   ├── ExperienceSection.tsx
│   │   └── ExperienceCard.tsx
│   ├── skills/
│   │   ├── SkillsSection.tsx
│   │   └── SkillGroup.tsx
│   ├── contact/
│   │   ├── ContactSection.tsx
│   │   ├── ContactForm.tsx
│   │   └── useContactForm.ts
│   └── blog/
│       └── BlogCard.tsx
│
├── hooks/                      # Shared custom React hooks
│   ├── useLocalStorage.ts
│   ├── useTheme.ts
│   ├── useMediaQuery.ts
│   └── useIntersectionObserver.ts
│
├── lib/                        # Framework-agnostic utilities
│   ├── utils.ts                # cn(), formatDate(), slugify(), truncate()
│   └── fetch.ts                # Typed fetch wrapper (apiFetch)
│
├── services/                   # API integration layer (calls /api/* routes)
│   ├── projects.service.ts
│   ├── blog.service.ts
│   ├── experience.service.ts
│   ├── skills.service.ts
│   └── contact.service.ts
│
├── types/                      # TypeScript interfaces & types
│   ├── project.ts
│   ├── blog.ts
│   ├── experience.ts
│   ├── skill.ts
│   └── api.ts
│
├── styles/
│   └── globals.css             # Tailwind base + global CSS
│
└── config/
    ├── site.ts                 # Site metadata (name, description, URL)
    └── navigation.ts           # Nav links + social links

public/                         # Static assets (images, icons, resume)
```

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

```bash
cp .env.example .env.local
# then fill in the values in .env.local
```

### 3. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Other scripts

| Script | Description |
|---|---|
| `npm run build` | Production build |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run type-check` | TypeScript type check |

---

## Architecture Principles

- **Clean Architecture** — each layer has a single responsibility. UI components know nothing about data fetching; services know nothing about rendering.
- **Feature Modules** — domain logic and its UI live together under `/features`, keeping related code co-located.
- **Server Components by Default** — data fetching happens in async Server Components; interactivity is isolated to `"use client"` leaf components.
- **API-First** — all dynamic data flows through typed `/api/*` Route Handlers, making it trivial to swap data sources (DB, CMS, static JSON) without touching UI code.
- **Progressive Enhancement** — forms work with server actions as a fallback; JS enhancements are layered on top.
