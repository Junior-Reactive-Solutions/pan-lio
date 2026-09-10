# Pan-Lio Rebuild — Project Log

---

### 2026-09-10 — Phase 0: Course Calendar Transcription + Project Scaffold

**What was done:**
- Transcribed all 5 training-calendar images (58 total course deliveries, Jan–Dec 2026) into structured data by heavily zooming into each image in-browser at full/near-full resolution.
- Logged full transcription with source-image cross-references in `/docs/COURSE_DATA.md`.
- Started scaffolding the Next.js 15 (App Router, TypeScript, Tailwind, ESLint, `src/` dir) project into `/site`.

**How it was done:**
- Navigated directly to each Squarespace CDN image URL in the Browser pane.
- The site's own image-viewer JS kept re-fitting the `<img>` to the viewport on every style/resize change, which initially caused blank/stale screenshots when trying to force a taller-than-viewport render and scroll it. Worked around this by instead **enlarging the browser viewport itself** (`resize_window` to e.g. 1300×1800) so the *entire* image rendered legibly in a single un-scrolled screenshot — this became the reliable method for images 3, 4 and 5.
- Cross-checked the transcription against text already extracted from the live homepage during the original audit (courses #24–27) — exact match, confirming transcription accuracy.
- `create-next-app` invoked with `--typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --no-turbopack`; running in background due to install time.

**Where (files/components):**
- `/docs/COURSE_DATA.md` — full transcription log, 58 rows across 5 source images
- `/site` — Next.js project root (in progress)

**Why this approach:**
- The audit's highest-leverage SEO fix (§8.3) depends entirely on having accurate, real course text — guessing or approximating course names/dates would ship a wrong product catalogue, which is worse than the current image-only state. Full manual verification at native resolution was mandatory per the brief's "do not invent course data" constraint.
- Next.js was the user's explicit stack choice (see `/docs/MASTER_PROMPT.md` §3).

**Challenges faced:**
- Squarespace's built-in image-viewer script fought every attempt to force custom width/height/scroll on the `<img>` element, causing blank or stale-composited screenshots on several attempts (images 2 and 3, first pass).

**Solutions tried:**
1. Forcing inline `width`/`height` with `!important` + manual `scrollTo` — worked once, then got overridden by the page's own resize-observer on subsequent interactions.
2. `document.write()` to strip the page down to a bare `<img>` — broke `document.body` reference in the eval context, abandoned.
3. **Enlarging the actual browser viewport via `resize_window`** so the full image fits in one frame at legible size, no scrolling needed — reliable, used for the remaining images.

**Solution chosen:** Option 3 (viewport resize) — simplest, most reliable, fully repeatable.

**Next steps:**
- Confirm `create-next-app` scaffold completed successfully.
- Encode verified design tokens (§3.1 of master prompt) into `globals.css` / `tailwind.config`.
- Wire `next/font/google` for Young Serif + Bitter.
- Convert `/docs/COURSE_DATA.md` into typed `src/content/courses.ts` (grouped by `courseSlug` per the dedup note in COURSE_DATA.md, to avoid recreating the audit's duplicate-page problem across 58 rows / ~52 unique titles).
- Build the three homepage concepts (Phase 1 of the master prompt).

---

### 2026-09-10 (cont.) — Scaffold Complete, Tokens & Data Wired In

**What was done:**
- Fixed a failed `create-next-app` (network `ECONNRESET` mid-install, not a config problem — registry fetch was measured at ~275KB/s and repeatedly stalling). Raised npm's fetch retry/timeout config and reinstalled successfully (364 packages, ~6 min).
- Installed `animejs` (confirmed **v4.5.0** — matches the brief's v4-only requirement), `lucide-react`, and `simple-icons`.
- Converted the full `/docs/COURSE_DATA.md` transcription into `src/content/courses.ts` — 58 typed `CourseDelivery` records, each with `id`, `sourceRow` (traceable back to the original calendar image + row), `courseSlug`, a hand-assigned `category` (9-category taxonomy), ISO dates, and normalized `city`/`country`.
- Added `getCourseGroups()` — consolidates repeated course titles (e.g. "Board Governance in a Digital World" runs 4 times) onto one canonical group per `courseSlug`, so `/courses/[slug]` will render one strong page per course with every upcoming cohort listed, rather than 4 near-duplicate pages. Directly prevents recreating audit §8.5's thin-content problem at 58-row scale.
- Wrote verified design tokens into `src/app/globals.css`: `--sand-50/100/200/300`, `--espresso-700/900`, `--ink-950`, `--sage-100/600/700`, `--clay-100/500/600` (Tailwind v4 CSS-first `@theme inline`, no `tailwind.config.ts` needed). Verified values are commented inline as `/* verified */` vs `/* extension */` per §3.1.
- Wired `next/font/google` for **Young Serif** (400, display only) and **Bitter** (400/500/600/700, body) in `layout.tsx` — both confirmed as the live site's actual fonts.
- Added root `Metadata` in `layout.tsx`: templated titles, real description, full Open Graph + Twitter card block pointing at `/og-image.png` (1200×630 — image itself not yet created, placeholder path wired). Fixes audit §8.1/§8.2/§8.6 at the layout level so every page inherits a non-empty description unless overridden.
- Added `:focus-visible` outline (WCAG 2.4.7) and a CSS-level `prefers-reduced-motion` backstop in `globals.css`.
- Created `src/lib/motion.ts` — shared anime.js v4 helpers: `prefersReducedMotion()` guard and shared `motion.ease`/`motion.duration` tokens, so every future animated component follows one consistent pattern instead of each reinventing timing values.
- Created `.claude/launch.json` pointing at `npm run dev --prefix site` for the `run` skill / Browser pane.
- Verified: clean `next build` (TypeScript + Turbopack, 0 errors) after each change; dev server boots and serves the new metadata title correctly (confirmed via live screenshot).

**Where (files/components):**
- `/site/src/content/courses.ts` — 58-course typed dataset + grouping helper
- `/site/src/app/globals.css` — token system
- `/site/src/app/layout.tsx` — fonts + metadata
- `/site/src/lib/motion.ts` — anime.js v4 shared helpers
- `/.claude/launch.json` — dev server config for the Browser pane

**Why this approach:** Getting tokens, fonts, data, and the animation contract locked in *before* any homepage concept is built means all three Phase 1 concepts share one correct foundation — no risk of concept A using slightly different color values than concept C.

**Challenges faced:** npm install failing with `ECONNRESET` — root caused as a slow/unstable network path to the npm registry (measured directly with `curl`), not a proxy or config issue.

**Solutions tried:** Plain retry (failed identically) → raised `fetch-retries`/`fetch-retry-mintimeout`/`fetch-retry-maxtimeout`/`fetch-timeout` via `npm config set` → succeeded.

**Solution chosen:** Raised npm network timeouts/retries — durable fix, will hold for future `npm install` calls in this project since it's a persistent npm config, not a one-off flag.

**Next steps (Phase 1):**
- Build the three homepage concepts (`/concepts/a`, `/concepts/b`, `/concepts/c`) per master prompt §5 Phase 1.
- Each needs: hero, its distinct IA, one accent color applied per the 60:30:10 rule, at least one anime.js `createScope` scroll-reveal, and real Lucide + Simple Icons icons (no mismatched icon-to-content pairings).
- Get the client's pick before Phase 2 full build.

---

### 2026-09-10 (cont.) — Port Changed to 4517 + Phase 1: Three Homepage Concepts Built

**What was done (port change):**
- User asked for a dev port in the 4500 series (not the 3000 default). Set `4517` in both `.claude/launch.json` and `package.json`'s `dev`/`start` scripts (`next dev -p 4517`).
- Caught two real issues while verifying: (1) a stale `next dev` process from earlier testing was still holding port 3000, which — because Next.js detects an existing dev server via a lockfile independent of port — caused the new server on 4517 to detect it and refuse to start; killed the stale PID. (2) `launch.json` was *also* passing `-p 4517` on top of the script's own `-p 4517`, producing `next dev -p 4517 -p 4517` (harmless but redundant); removed the duplicate so `launch.json` just calls `npm run dev`. Verified clean single-flag start afterward.

**What was done (Phase 1 — homepage concepts):**
- Built the full shared component foundation all three concepts sit on:
  - `lib/icons.ts` — one Lucide icon per course category and per business line, chosen for literal semantic match (e.g. `Landmark` for Governance & Leadership, `ShieldAlert` for Security & Risk, `Handshake` for Trade).
  - `components/icons/BrandIcon.tsx` — Instagram/TikTok from `simple-icons` (official path + brand hex). **LinkedIn is not in Simple Icons** — confirmed by direct package inspection; it was withdrawn from the library after a legal request from LinkedIn, and Lucide ships no brand icons at all — so LinkedIn uses the industry-standard hand-coded "in" glyph on brand blue (#0A66C2), the same mark most icon packs still ship for this exact reason.
  - `components/ui/Reveal.tsx` — the anime.js v4 scroll-reveal pattern from the master prompt, with one correction to that spec found in practice: elements are hidden via `useLayoutEffect` (pre-paint, imperative style) rather than static CSS, so a reduced-motion visitor or anyone before hydration never has content withheld from them.
  - `components/ui/{Container,Button,SectionHeading,StatTile}.tsx`, `components/layout/{SiteHeader,SiteFooter}.tsx`, `components/course/{CourseGroupCard,CoachingCard,CalendarExplorer}.tsx`.
  - `lib/stats.ts` — every headline number (course count, city count, country count) is computed live from `courses.ts`, never hardcoded, so it can't drift from the transcribed source data.
  - `content/coaching.ts` — ZuluOne/ZuluTwo packages harvested verbatim from the original `/coachdk-services` page (price, duration, modules, outcomes) into typed data, reused across concepts B and C.
- Built all three concepts at `/concepts/a`, `/concepts/b`, `/concepts/c`, plus a `/concepts` index page comparing them, and pointed the root `/` at a temporary redirect to `/concepts` for reviewer convenience during this pitch phase (documented as temporary in-code).
  - **Concept A — "The Calendar Is the Product":** sage accent. Hero + live-filterable `CalendarExplorer` (search, category chips, city dropdown) embedded directly in the page, operating on all 58 real course deliveries. Dark "Why Pan-Lio" band, cities band, five business-line cards, real founder quote, contact CTA.
  - **Concept B — "Two Doors":** dual accent (sage/clay). Two large door CTAs split organisations vs. individuals, a unifying brand-statement band addressing the audit's brand-ambiguity finding (§7.4), an organisations track (calendar preview), an individuals track (ZuluOne/ZuluTwo cards), a "beyond training" business-line strip.
  - **Concept C — "Founder-Led Authority":** clay accent. Founder-forward hero (see note below on the portrait), a real proof-stat band, a "Meet Deo Kateizi" bio band using only verifiable harvested copy, services, coaching spotlight, upcoming-courses preview, contact.
- All copy in all three concepts is either (a) harvested verbatim/paraphrased-but-traceable from the real site content already gathered in earlier sessions, or (b) computed live from the real course data — nothing was invented. Deliberately did **not** add fabricated testimonials or client quotes, since the audit found zero real ones on the live site and inventing some would be dishonest marketing content.
- **Founder photo:** used a "DK" monogram badge (gradient ring, no photograph) instead of the live site's actual founder photo — this demo build doesn't carry rights to re-host pan-lio.com's proprietary CDN imagery under a new deployment. Flagged in-code and here for the user to swap in a real portrait before this goes anywhere near production.
- Verified all three pages, the concepts index, and the root redirect with a clean `next build` (0 TypeScript errors) and a clean `eslint` pass (fixed one trivial unused-directive warning). Content-verified end-to-end via `document.body.innerText` and `elementFromPoint` DOM inspection rather than screenshots.

**Where (files/components):** `/site/src/lib/{icons,stats}.ts`, `/site/src/components/icons/BrandIcon.tsx`, `/site/src/components/ui/*`, `/site/src/components/layout/*`, `/site/src/components/course/*`, `/site/src/components/concepts/{a,b,c}/*`, `/site/src/content/coaching.ts`, `/site/src/app/concepts/**`, `/site/src/app/page.tsx`.

**Why this approach:** Building the shared foundation once (icons, tokens already in place from the prior session, Reveal pattern, course/coaching card components) before any concept-specific code means the three concepts are genuinely comparable — same system, different structure — rather than three unrelated one-off builds.

**Challenges faced:**
1. The Browser pane's `computer` screenshot action repeatedly returned stale, blended, or blank frames while verifying Concept A (same issue hit earlier transcribing the calendar images) — several screenshots showed a totally blank sand-colored viewport where real, correctly-rendered content demonstrably existed (confirmed via `elementFromPoint` and `getComputedStyle` returning `opacity: 1` and the exact expected text at that screen position).
2. anime.js v4's `onScroll` `enter` threshold string order was initially a guess (`"bottom-=80 top"`); confirmed correct via the anime.js docs (format is `"container-edge target-edge"`, so this string was actually already right) rather than assuming it was the bug.
3. TypeScript flagged `HTMLDivElement | null` not assignable where `onScroll({ target })` expected a non-null element, inside a closure that TS couldn't narrow across.
4. `onScroll`'s `ScrollObserverParams` type has no `once` field — the equivalent is `repeat: false` (the default), so browsing for a same-named option before checking the real type was a dead end.

**Solutions tried / chosen:**
1. Stopped trusting `computer` screenshots as primary evidence for this session; switched to `javascript_exec` reading `document.body.innerText` and `elementFromPoint` as the reliable verification method, using screenshots only as a secondary spot-check.
2. Verified against the actual anime.js documentation via WebFetch rather than guessing twice.
3. Captured `root.current` into a local `const rootEl` before the closure, satisfying TS's narrowing rules.
4. Removed `once: true`, used `repeat: false` (already the type default, so this could even be omitted — kept explicit for clarity).

**Next steps:** Get the user's pick of concept A, B, or C (or a hybrid direction). Once chosen, Phase 2 builds out the full site around it: `/about`, `/services`, `/coaching`, `/courses` + `/courses/[slug]`, `/contact`, `/privacy`, `/terms`, plus the real `og-image.png` (currently a wired-but-missing path in `layout.tsx` metadata), replacing the founder monogram with real photography if the client supplies one, and wiring the booking form's email delivery (master prompt §3.4).

---

### 2026-09-10 (cont.) — Shareable Concepts Artifact + Direction Picked (A + B Hybrid)

**What was done (shareable comparison link):** Built a standalone, self-contained HTML artifact recreating all three concepts as a single interactive page with a tab switcher, so the user could share one link with a third party for review without needing the dev server running. Real content throughout (all 58 courses, real coaching data, real icons extracted from the same `lucide-react`/`simple-icons` packages the Next.js build uses — not redrawn). Published privately at `https://claude.ai/code/artifact/fa8e6c50-573b-4278-8795-6f1579d364d0`.
- Caught a real bug before publishing: a double-escaped regex (`/^ICON:([\\w-]+)$/` and `/\\s+/g` instead of single-backslash `\w`/`\s`) that would have silently broken all icon rendering and the footer's phone links. Found it by parsing the extracted `<script>` block with Node's `Function()` constructor and diff-testing the regex behavior, not by eyeballing — the Browser pane can't authenticate to claude.ai to view a live artifact, so verification here was file-based (tag-balance counts, `getElementById` cross-reference, JSON-parsing the embedded course data) rather than a rendered screenshot.

**What was done (direction decision):** User reviewed all three and asked for a hybrid of Concept A and Concept B specifically ("a concept between A and B"). Built and shipped that hybrid as the actual homepage:
- Kept Concept B's two-door hero split (Organisations vs. Individuals) — this is what resolves the audit's brand-ambiguity finding (§7.4) by giving each audience an immediate, obvious path instead of making them parse "Pan-Lio Services" vs. "CoachDK Services" in a nav bar.
- Rejected the option of keeping B's 3-card calendar teaser under the Organisations door — that would have quietly reintroduced the audit's #1 finding (the calendar being hard to discover), just one click further in instead of solved. The Organisations door now leads straight into Concept A's full live, filterable `CalendarExplorer` component, unmodified and reused as-is.
- Individuals door keeps the ZuluOne/ZuluTwo coaching cards from B.
- Kept the "Why Pan-Lio" dark band, five-business-line strip, and founder quote from A as shared, audience-neutral trust content beneath both doors.
- New file: `src/components/home/Home.tsx`. Every subcomponent it uses (`SiteHeader`, `SiteFooter`, `CalendarExplorer`, `CoachingCard`, `Reveal`, `Button`, `SectionHeading`) is reused verbatim from the concept-building session — no new components were needed, which is exactly the payoff of building the three concepts on one shared foundation in the first place.
- Replaced the temporary `/concepts` redirect at `src/app/page.tsx` with this real homepage. Root metadata (title/description/OG/Twitter) was already correctly set on `layout.tsx` from a prior session and needed no changes.
- `/concepts`, `/concepts/a`, `/concepts/b`, `/concepts/c` are left in place (still `noindex`) as a live record of the options considered — not linked from the real site anymore now that root `/` no longer redirects there.

**Verification:** `eslint` and `next build` run after the change (see next log entry for result once the backgrounded build completes).

**Next steps:** Build out the remaining real routes the new homepage links to — `/courses` (full calendar + individual `/courses/[slug]` pages, since course cards elsewhere link there), `/about`, `/privacy`, `/terms`, wire the booking form, produce the real `og-image.png`.

---

### 2026-09-10 (cont.) — /courses Built Out; Homepage Calendar Separated Into Its Own Page

**What was done:**
- Built `/courses` — the full live `CalendarExplorer` (search, 9 category filters, 7 city filters, all 58 deliveries), moved off the homepage onto its own indexable page with real per-page metadata.
- Built `/courses/[slug]` — one statically-generated page per **unique course** (47 pages via `generateStaticParams`, not 58 — repeated cohorts of the same course share one page, per the dedup plan in `COURSE_DATA.md`). Each page has: breadcrumb (Home / Courses / Title), category badge, a table of every 2026 cohort (date range + city/country) for that course, a WhatsApp CTA pre-filled with the course name, a link back to `/courses`, and a "More in [category]" related-courses section (also derived from real data). Added real `Course` + `CourseInstance` JSON-LD per page — the exact structured-data gap the original SEO audit flagged (§8.4) — built only from verified fields; deliberately left out `Offer`/pricing since no real course prices exist in the source data, rather than inventing one.
- **Separated the pages, per your ask:** the homepage's "For Organisations" section no longer embeds the full 58-course explorer inline — it now shows the 3 soonest cohorts (reusing `CourseGroupCard`) with a "View full calendar" button to `/courses`. This is the same lightweight-preview-plus-link pattern Concept B used, now backed by a real destination page instead of an anchor.
- Made `CourseGroupCard` a real link to `/courses/[slug]` (was a static, non-interactive card) — this is what makes the 47 course pages actually reachable from the homepage preview, `/courses`, and every course's own "related courses" section.
- Fixed two real bugs in `SiteHeader` surfaced by having more than one real route now: the "Pan-Lio" logo linked to `#top`, which only worked on the homepage — now links to `/`. And every nav link rendered as a plain `<a>`, meaning a link to a real route like `/courses` did a full page reload instead of client-side navigation — now anchors (`#section`) stay as `<a>`, and real routes use `next/link`.
- Added `src/lib/nav.ts` as the one shared nav-link list, so `/courses` and `/courses/[slug]` don't each hand-roll their own header links.

**Where:** `src/app/courses/page.tsx`, `src/app/courses/[slug]/page.tsx`, `src/content/courses.ts` (added `getCourseGroupBySlug`, `getRelatedCourseGroups`), `src/components/course/CourseGroupCard.tsx`, `src/components/layout/SiteHeader.tsx`, `src/components/home/Home.tsx`, `src/lib/nav.ts`.

**Verification:** Clean `eslint` (0 issues after removing one now-unused disable comment) and clean `next build` — 56 total static routes (`/`, `/courses`, 47 `/courses/[slug]` pages, the 4 `/concepts/*` pages, `/_not-found`). Confirmed live via DOM inspection rather than screenshots (this session's Browser pane continues to render screenshots unreliably): `/courses` shows all 47 courses with working search; a multi-cohort course (`board-governance-in-a-digital-world`) correctly lists all 4 of its 2026 cohorts and 3 related Governance & Leadership courses; the WhatsApp CTA link is correctly URL-encoded with the real course title; JSON-LD parses and matches the page; an invalid slug correctly renders Next's `404` boundary rather than silently falling through.

**Next steps:** `/about`, `/coaching`, `/contact`, `/privacy`, `/terms` are still homepage anchors or unbuilt — same "separate where possible" treatment applies to them next. `og-image.png` is still a referenced-but-missing asset.

---

### 2026-09-10 (cont.) — /about, /coaching, /contact Built; Nav and Footer Fixed Site-Wide

**What was done:**
- Built `/about`: founder monogram hero, real "Our Purpose" copy (harvested verbatim from the original `/pan-lio-services` page — "Pan-Lio exists to build wealth, empower people..."), a "Meet Deo Kateizi" bio section (same real bio used in the earlier Concept C, now shared rather than duplicated), a real proof-stat band, and the five business lines.
- Built `/coaching`: full ZuluOne/ZuluTwo detail page (reusing `CoachingCard` as-is), the real founder quote, a short founder bio with a link to `/about#founder` for the full story, and a cross-sell line pointing corporate visitors to `/courses`.
- Built `/contact`: a real, functional contact form (`ContactForm.tsx`) plus a contact-details card. No booking backend exists yet, so rather than ship a form that silently does nothing, submitting builds a pre-filled `mailto:` link from the real field values and routes it to the correct inbox — `coachdk@pan-lio.com` for training/coaching enquiries, `pkateizi@pan-lio.com` for business/investment — based on the enquiry-type dropdown, and is upfront in the UI that this is what it does ("Sending opens your email app..."). Also shows the real service-area cities (computed from the course data, not a fabricated office address the source never provided) and separately labels the two known real inboxes by purpose.
- **Centralised duplicated content** that would otherwise have drifted across pages: `businessLines` (was hand-duplicated in `Home.tsx` and `ConceptC.tsx`) moved to `src/content/business.ts`; the founder monogram (was only in `ConceptC.tsx`) moved to `src/components/ui/FounderMonogram.tsx`, used by both `/about` and Concept C.
- **Fixed the footer's four "Explore" links site-wide** — they were `href="#courses"` / `"#coaching"` / `"#services"` / `"#contact"` stub anchors on every page (the exact bug class flagged in the original SEO audit for the live site's own footer `/about` 404). They now point at the real `/courses`, `/coaching`, `/about`, `/contact` routes and render as `next/link`.
- Updated `src/lib/nav.ts` to the real routes now that all four exist.
- Updated `Home.tsx`: swapped its bespoke `navLinks` array for the shared `siteNav`; added a "View full coaching details" link from the homepage's Individuals section to `/coaching` and an "About Pan-Lio & Deo Kateizi" link from the business-lines section to `/about`, matching the preview-plus-link-out pattern already used for `/courses`; the homepage's own contact CTA now leads with a `/contact` button rather than only a bare WhatsApp link.

**Where:** `src/app/about/page.tsx`, `src/app/coaching/page.tsx`, `src/app/contact/page.tsx`, `src/components/contact/ContactForm.tsx`, `src/components/ui/FounderMonogram.tsx`, `src/content/business.ts`, plus edits to `src/lib/nav.ts`, `src/components/layout/SiteFooter.tsx`, `src/components/home/Home.tsx`, `src/components/concepts/c/ConceptC.tsx`.

**Challenges faced:** The original site's contact info gives three phone numbers and two emails with no stated mapping between them. Pairing a specific phone to a specific purpose would have been inventing a relationship the source never stated — avoided that. The two emails' purposes *are* reasonably inferable from their own names (`coachdk@` / `pkateizi@`) against the already-established two-brand split used throughout the site, so those are labelled; the phone numbers are presented together rather than force-mapped to inboxes they were never actually paired with.

**Verification:** Clean `eslint`, clean `next build` (59 static routes, 0 TypeScript errors). Confirmed live via DOM inspection: `/about` renders the purpose and founder sections with working nav to all 4 real routes; `/coaching` shows both real prices and a correctly pre-filled, URL-encoded WhatsApp link; `/contact` renders all 7 real service cities and both labelled emails, and the `mailto:` construction logic was independently verified in isolation (Node) to route a "Business & investment" enquiry to `pkateizi@pan-lio.com` with a correctly encoded subject/body; the footer's four "Explore" links now resolve to real routes on every page checked; the homepage's new CTAs to `/coaching` and `/about` are present and correctly targeted.

**Next steps:** `/services` still only exists as a homepage anchor (`#services`) — same treatment could apply if wanted. `/privacy` and `/terms` are still unbuilt (audit §9.5 — no privacy policy currently exists anywhere on the site, which matters given the booking/contact forms now collect personal data). `og-image.png` is still a referenced-but-missing asset. The booking flow on `/courses/[slug]` and the new contact form both currently resolve to WhatsApp/mailto rather than a real backend — fine for now, flagged if a real submission pipeline is ever wanted.

---

### 2026-09-10 (cont.) — /services, /privacy, /terms Built; Real OG Image Replaces the Missing Static One

**What was done:**
- Built `/services`: the five business lines (reusing the centralised `content/business.ts`), plus a cross-link block pointing at `/courses` and `/coaching` since those two lines have their own dedicated pages.
- Replaced the dangling `/og-image.png` reference — that path was in `layout.tsx` metadata but the file never existed, so every social share rendered blank (this was audit finding §7.7). Built `src/app/opengraph-image.tsx` using `next/og`'s `ImageResponse` instead of a static asset: a real, on-brand 1200×630 card with live-computed stats (58 courses / 7 cities / 6 countries, pulled from `getSiteStats()` — not hardcoded, so it can't drift from the real data). Removed the now-redundant static `images` arrays from `layout.tsx`'s `openGraph`/`twitter` metadata, since the file-convention route auto-injects the tag. Verified this root-level image is correctly inherited by nested routes (`/courses`, etc.) that don't define their own — confirmed by reading the actual `<meta property="og:image">` tag Next.js renders on `/courses`.
  - First attempt set `export const runtime = "edge"`, which built with a "deprecated" warning and also disabled static generation for the image (it would have re-rendered on every request instead of being generated once at build time). Removed it — Next's default `nodejs` runtime is what the current docs recommend, and it lets the image be statically optimized like everything else.
- Built `/privacy` and `/terms` — written to describe this site's *actual* current behaviour rather than a generic boilerplate that overclaims:
  - **Privacy:** states plainly that the contact form and course-booking links build a `mailto:`/WhatsApp link and send nothing anywhere until the visitor presses send themselves — true, because that's genuinely how `ContactForm.tsx` and the course CTAs work, and there's no backend to store anything even if it wanted to. Discloses the one real third-party data flow that does exist (Google Fonts receiving the visitor's IP on page load) rather than omitting it. Explicitly does not claim cookie/analytics protections for tracking that was never implemented in the first place.
  - **Terms:** covers standard site-usage terms (content ownership, no warranty, external links, governing law — Uganda, a defensible inference from the business's real Kampala presence and `+256` numbers already used throughout the site). Deliberately does **not** invent specific cancellation/refund/payment terms, since none exist in the source material and fabricating binding commercial terms could cause real harm to an actual future customer — instead states plainly that those terms are confirmed directly and aren't yet published, and warns against paying anyone claiming to collect payment through the site (since the site has no payment processing at all).
  - Both pages end with a short, honest note that they're not a substitute for legal review — consistent with not overclaiming compliance the way the rest of this project has avoided overclaiming content.
- Added a footer "legal" row (Privacy Policy / Terms of Use links) and a "Pan-Lio Services" entry in the footer's Explore list, and added `/services` to `siteNav` (now 5 real routes). Updated the homepage's business-lines section CTA to link to `/services` instead of `/about`, since that page is now the more directly relevant destination for "these five business lines."

**Where:** `src/app/opengraph-image.tsx`, `src/app/services/page.tsx`, `src/app/privacy/page.tsx`, `src/app/terms/page.tsx`, plus edits to `src/app/layout.tsx`, `src/lib/nav.ts`, `src/components/layout/SiteFooter.tsx`, `src/components/home/Home.tsx`.

**Verification:** Clean `eslint`, clean `next build` (63 static routes, 0 TypeScript errors, no warnings after removing the edge runtime). Confirmed live: the OG image renders correctly as an actual 1200×630 PNG with real stats (screenshotted and visually checked — this was worth the one direct look since it's an image, per the artifact/design verification principle of always eyeballing a chart or visual rather than trusting it blindly); `/services` lists all five business lines with working cross-links; `/privacy` and `/terms` render their key honesty-critical sentences (confirmed the exact "opens your own email app" and "not yet published" phrasing is present, not paraphrased away); footer Privacy/Terms links resolve on every page checked; and the root `opengraph-image` was confirmed (by fetching `/courses`'s raw HTML and reading its actual `<meta property="og:image">` tag) to correctly inherit to nested routes without needing a per-page copy.

**Next steps:** No further pages are currently missing from the nav/footer. Remaining open items from earlier logs: replacing the `/about` and Concept C founder monogram with a real photo if the client supplies one; wiring a real backend if the client ever wants form submissions to land somewhere other than mailto/WhatsApp; and, if the client wants stronger SEO snippets, giving `/services`, `/privacy`, and `/terms` their own `opengraph-image.tsx` variants instead of inheriting the site default.
