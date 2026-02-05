# CurveClear Migration Summary

## What was done

The former BSquare (Vite + React) site was migrated to **Next.js 15 App Router** and rebranded to **CurveClear** (Curveclear Digital Transformation Firm) with domain **curveclear.ae**, new copy, and full SEO/technical requirements.

---

## Brand & contact (updated everywhere)

- **Brand:** CurveClear / Curveclear Digital Transformation Firm  
- **Domain:** https://curveclear.ae  
- **Email:** info@curveclear.ae  
- **Phones:** +971 54 414 1077, +971 54 317 8016  
- **Location:** Dubai, UAE  
- **Primary CTA:** “Get Started” → `/get-started`

---

## Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS** + **shadcn/ui** (button, input, label, textarea, select, sheet)
- **Framer Motion** (homepage sections; respects reduced motion via CSS)
- **next-mdx-remote** (Work and Insights MDX)
- **Supabase** (optional; leads from `/get-started` → `leads` table)

---

## Routes implemented

| Route | Purpose |
|-------|--------|
| `/` | Homepage (hero, credibility strip, framework, how we work, featured work, industries, testimonials, final CTA) |
| `/services` | Four pillars: Strategy & Consulting, Software Engineering, Automation/AI/Data, Media & Digital Growth |
| `/services/[slug]` | Detail for `strategy-consulting`, `software-engineering`, `automation-ai-data`, `media-digital-growth` |
| `/solutions` | Industry solutions (Real Estate, Healthcare, Retail, Professional Services, Logistics, Startups) with anchors |
| `/work` | Case study list |
| `/work/[slug]` | Case study from MDX (e.g. `real-estate-portfolio`, `healthcare-portal`, `ecommerce-operations`) |
| `/about` | Story, vision/mission, values, location, CTA |
| `/insights` | Insights list |
| `/insights/[slug]` | Insight from MDX (e.g. `automation-governance`, `scalable-software`, `transformation-roadmap`) |
| `/contact` | General contact + form (success: “Thanks — we’ll respond within 24 business hours.”) |
| `/get-started` | Primary CTA form → POST `/api/leads` (Supabase `leads` table if configured) |
| `/privacy` | Privacy policy |
| `/terms` | Terms & conditions |
| 404 | `app/not-found.tsx` |

---

## File locations (main)

- **App & pages:** `app/` (layout, page.tsx, route segments, not-found, opengraph-image, sitemap, robots)
- **Layout:** `components/layout/Navigation.tsx`, `Footer.tsx` (exact footer copy as specified)
- **UI:** `components/ui/` (button, input, label, textarea, select, sheet)
- **Data / config:** `lib/` (utils, supabase, services-data, solutions-data, work-data, insights-data, mdx)
- **MDX content:** `content/work/*.mdx`, `content/insights/*.mdx`
- **API:** `app/api/leads/route.ts` (POST → Supabase `leads` or mock)
- **Styles:** `app/globals.css` (Tailwind + CSS variables; `prefers-reduced-motion` respected)
- **SEO:** Metadata on all pages, `app/sitemap.ts`, `app/robots.ts`, JSON-LD (Organization + LocalBusiness, BreadcrumbList on detail pages), `app/opengraph-image.tsx`

---

## Legacy Vite app

- **`src/`** is no longer used by Next.js. **`src/pages`** was renamed to **`src/_legacy_pages`** so Next does not treat it as the Pages Router. The rest of `src/` (components, hooks, etc.) remains for reference or removal.

---

## SEO & technical

- **Canonical base:** `https://curveclear.ae` in `metadataBase` and sitemap/robots.
- **One H1 per page** (or equivalent for layout).
- **Metadata:** title/description (and Open Graph where relevant) on every route.
- **Sitemap:** `app/sitemap.ts` → `/sitemap.xml`.
- **Robots:** `app/robots.ts` → `/robots.txt` (allow `/`, disallow `/api/`).
- **JSON-LD:** Organization + LocalBusiness in root layout; BreadcrumbList on `/services/[slug]`, `/work/[slug]`, `/insights/[slug]`.
- **OG image:** Dynamic `app/opengraph-image.tsx` (1200×630).
- **Font:** Inter via `next/font` (variable `--font-sans`), minimal layout shift.

---

## Performance & accessibility

- **next/image** ready for images (remote pattern for images.unsplash.com in `next.config.mjs`).
- **Large tap targets** (e.g. min 44px) and mobile sheet menu.
- **Reduced motion:** `@media (prefers-reduced-motion: reduce)` in `globals.css`; Framer Motion used for opacity/transform only.

---

## Supabase leads

- **Table:** `leads` (see `SUPABASE_LEADS.md` for SQL and env vars).
- **Env:** `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
- If unset, `/api/leads` still returns 200 and logs a mock payload (no persistence).

---

## Commands

- **Dev:** `npm run dev`
- **Build:** `npm run build`
- **Start (prod):** `npm start`

---

## Optional next steps

1. Create Supabase `leads` table and set env vars (see `SUPABASE_LEADS.md`).
2. Fix ESLint “globals” by ensuring `globals` is installed and `eslint.config.js` is valid (build already passes).
3. Upgrade Next.js to a patched 15.x if needed (see security advisory).
4. Add more Work/Insights MDX under `content/work/` and `content/insights/` and extend `work-data.ts` / `insights-data.ts` if needed.
