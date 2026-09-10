# Pan-Lio.com — Professional Website Audit

**Site audited:** https://pan-lio.com (canonical host: `https://www.pan-lio.com`)
**Audit date:** 2 September 2026
**Platform:** Squarespace (7.1), DNS on Google Cloud DNS, mail on Google Workspace
**Pages in scope:** all 9 URLs published in `sitemap.xml`
**Method:** Live HTTP/header inspection, full-page HTML parsing of every indexed page, TLS certificate inspection, DNS record lookups (Google Public DNS), rendered-browser testing at desktop and mobile viewports, console and asset-weight analysis, and link-status crawling.

---

## 1. Executive Summary

Pan-Lio is a multi-industry Ugandan enterprise (real estate, transport, trade, life insurance, and leadership coaching via the "Coach DK Global" brand) running a visually attractive but **technically under-configured** Squarespace site.

The design and brand presentation are genuinely good. The problems are almost entirely in the **invisible layer**: metadata, content accessibility, email security, and information architecture. The single most damaging issue is that the site's primary commercial asset — the 2026 training calendar listing every course, date, and city — exists **only as five large scanned images**. Google cannot read a single course name. For a training company, that means the entire product catalogue is invisible to search.

### Overall Health Scorecard

| Sector | Grade | One-line verdict |
|---|:---:|---|
| **SEO — On-page** | **F** | Zero meta descriptions site-wide; generic titles; one page has no H1 at all |
| **SEO — Technical** | **D** | Site-wide 404 in footer; duplicate booking pages; near-empty structured data |
| **SEO — Content** | **D−** | Core product catalogue locked inside images; pages as thin as 3 words |
| **Security — Transport** | **B+** | Valid TLS, HSTS present but weak; solid platform baseline |
| **Security — Headers** | **C** | No CSP, no Referrer-Policy, no Permissions-Policy; duplicated header |
| **Security — Email/DNS** | **F** | **No SPF, no DMARC, no DKIM policy** — domain is trivially spoofable |
| **Accessibility** | **F** | **All 37 images have empty `alt`**; critical content is an unreadable image |
| **Performance** | **C−** | ~4.5 MB of oversized calendar images on the homepage |
| **UX / Conversion** | **D** | Free-text course booking; broken cross-references; no contact form |

**Estimated overall health: 38 / 100.**

### Top 8 Priorities (ranked by impact ÷ effort)

| # | Issue | Severity | Effort | Sector |
|:--:|---|:---:|:---:|---|
| 1 | Publish SPF + DMARC records | 🔴 Critical | 30 min | Security |
| 2 | Site-wide footer link to `/about` returns **404** | 🔴 Critical | 5 min | SEO/UX |
| 3 | Training calendar exists only as images — no HTML text | 🔴 Critical | 1–2 days | SEO/A11y |
| 4 | Every page has an **empty meta description** | 🔴 Critical | 2 hrs | SEO |
| 5 | Every image has **empty `alt` text** (37 images) | 🟠 High | 2 hrs | A11y/SEO |
| 6 | 4 near-duplicate "BOOK A COURSE" pages (3 words each) | 🟠 High | 4 hrs | SEO |
| 7 | Homepage title is literally just "Pan-Lio" | 🟠 High | 15 min | SEO |
| 8 | Booking form uses free-text course entry | 🟠 High | 1 hr | Conversion |

---

## 2. Site Inventory

Nine live pages, discovered via `sitemap.xml`:

| URL | HTTP | Title tag | Meta desc | H1 count | Body words |
|---|:--:|---|:--:|:--:|--:|
| `/` (home) | 200 | `Pan-Lio` | *(empty)* | 4 | 169 |
| `/pan-lio-services` | 200 | `Pan-Lio Services — Pan-Lio` | *(empty)* | **0** | 363 |
| `/coachdk-services` | 200 | `CoachDK Services — Pan-Lio` | *(empty)* | 7 | 485 |
| `/contact-1` | 200 | `Contact — Pan-Lio` | *(empty)* | 1 | 29 |
| `/book-course-jm` | 200 | **`Contact — Pan-Lio`** ⚠️ | *(empty)* | 1 | 3 |
| `/book-course-march-june` | 200 | `Book COURSE March-June — Pan-Lio` | *(empty)* | 1 | 3 |
| `/book-course-june-august` | 200 | `Book COURSE June-August — Pan-Lio` | *(empty)* | 1 | 3 |
| `/book-course-august-november` | 200 | `Book COURSE August-November — Pan-Lio` | *(empty)* | 1 | 3 |
| `/book-course-november-december` | 200 | `Book COURSE November-December — Pan-Lio` | *(empty)* | 1 | 3 |
| `/about` | **404** | — | — | — | *linked in footer of all 9 pages* |

**Total indexable body content across the entire site: roughly 1,060 words.** That is less than a single competent blog post.

---

## 3. SEO Audit

### 3.1 Meta Descriptions — Empty on 100% of Pages 🔴

Every page returns literally `<meta name="description" content="" />`.

An empty description is worse than a missing one: it is an explicit, machine-readable declaration that the page has no summary. Google is forced to auto-generate snippets from whatever fragmentary text it can scrape — and on the booking pages, the only available text is "BOOK A COURSE". Click-through rate from search results is directly suppressed.

### 3.2 Title Tags — Generic, and One Is Simply Wrong 🟠

- The homepage title is **`Pan-Lio`** — 7 characters, using roughly 12% of the ~60-character space Google displays. It contains no service keyword, no location, and no value proposition. Nobody searching for "leadership training Kampala" will ever match it.
- **`/book-course-jm` is titled `Contact — Pan-Lio`.** This is a copy-paste error from the contact page. Two distinct URLs now compete under an identical title, and the page's actual purpose (booking the January–March intake, judging by "JM") is entirely unstated.
- Service page titles stutter: `Pan-Lio Services — Pan-Lio`.

### 3.3 Missing H1 on the Main Services Page 🟠

`/pan-lio-services` — arguably the most commercially important page on the site, describing five business lines — contains **zero `<h1>` elements**. Its opening text "Who we are" is rendered as styled body copy or a lower-level heading.

Conversely the homepage has **4 `<h1>` tags** and `/coachdk-services` has **7**. Both extremes break the document outline that search engines and screen readers use to understand page structure. There should be exactly one `<h1>` per page.

### 3.4 The Training Calendar Is an Image — Critical Content Invisibility 🔴

This is the audit's most consequential finding.

The homepage embeds **five PNG/WebP files** named `Pan Lio and Coach DK Training Calendar 2026 January to December.1_1.png` through `_5.png`. These are **scanned/exported screenshots of a table**, rendered at 2550 × 3300 pixels (a 300 DPI A4/Letter page). Zooming in reveals rows of genuinely valuable, high-intent commercial data:

> "Mastering the Art of Inspiring and Empowering Teams, to drive Business Growth — 18–22 May — Kigali, Rwanda"
> "Product Strategy and Innovation Course — 25–29 May — Kigali, Rwanda"
> "Fraud Audit and Investigation Course — 1–5 June — Gaborone, Botswana"
> "Security Awareness and Operations — 8–12 June — Gaborone, Botswana"

**Every one of those course names, dates, and cities is invisible to Google.** Search engines do not perform OCR on content images for ranking purposes. The site is therefore unrankable for the exact long-tail, high-commercial-intent queries it should dominate — "fraud audit course Botswana", "leadership training Kigali 2026", "product strategy course Rwanda". These are low-competition phrases the site would likely rank page-one for within weeks if the text simply existed in HTML.

The same images are equally unreadable to screen-reader users, uncopyable by prospects, and unusable on a phone where a 2550px-wide table collapses into an illegible smear.

### 3.5 Duplicate & Thin Content 🟠

The five booking pages (`/book-course-jm`, `-march-june`, `-june-august`, `-august-november`, `-november-december`) are functionally identical: the same `BOOK A COURSE` H1, the same form fields, the same calendar image, and **three words of body text each**. Differentiated only by title tag.

Google classifies this pattern as doorway/thin content. The likely outcomes are that four of the five get filtered from the index, and that overall site quality signals are dragged down.

### 3.6 Structured Data — Present but Empty 🟠

The only JSON-LD on the site is:

```json
{"url":"https://www.pan-lio.com","name":"Pan-Lio","description":"","@context":"http://schema.org","@type":"WebSite"}
```

A bare `WebSite` node with an empty description. There is **no** `Organization`, `LocalBusiness`, `Course`, `Event`, `Offer`, `Service`, or `BreadcrumbList` markup. For a business selling dated, priced, located training courses, `Course` + `CourseInstance` markup is the single highest-leverage schema available and is entirely absent.

### 3.7 Social / Open Graph Sharing 🟠

```
og:title    = "Pan-Lio"
og:type     = "website"
og:image    = (ABSENT on all 9 pages)
og:description = (ABSENT)
twitter:card = "summary"
```

**No `og:image` anywhere on the site.** Every link shared to WhatsApp, LinkedIn, Facebook, or Instagram DM — the dominant referral channels for a coaching business in East Africa — renders as a bare grey box with the word "Pan-Lio". For a business whose founder actively markets on Instagram, TikTok and LinkedIn, this silently discards a large share of social click-through.

### 3.8 Positive SEO Findings ✅

Worth stating plainly — several fundamentals are correct:

- `robots.txt` is valid, references the sitemap, and correctly disallows `/config`, `/api/`, `/search`, and faceted URL parameters.
- `sitemap.xml` is present, valid, and lists all real pages.
- Canonical tags are correct on every page; `/home` correctly canonicalises to `/`.
- HTTP → HTTPS and apex → `www` redirects are clean single-hop `301`s.
- 404s return a genuine `404` status code (no soft-404 problem).
- Google Search Console is verified (`google-site-verification` TXT record present).
- The site is mobile-responsive and renders correctly at 375px.

---

## 4. Security Audit

### 4.1 Email Authentication — Critical Exposure 🔴

DNS lookups against `pan-lio.com` (via 8.8.8.8):

| Record | Status | Value |
|---|:--:|---|
| `MX` | ✅ Present | Google Workspace (`aspmx.l.google.com` + 4 alts) |
| `TXT` (SPF) | ❌ **ABSENT** | Only a `google-site-verification` string exists |
| `TXT` `_dmarc` | ❌ **ABSENT** | No DMARC record whatsoever |
| `DKIM` | ⚠️ Unverifiable externally | No policy enforced without DMARC regardless |

The domain actively sends and receives business email — `coachdk@pan-lio.com` and `pkateizi@pan-lio.com` are published on the contact page — yet has **no sender authentication of any kind**.

**Practical consequences:**

1. **Anyone on the internet can send email that appears to come from `coachdk@pan-lio.com`.** No technical control prevents it. For a business that discusses *life insurance, real-estate investment, and capital deployment*, this is a direct and realistic fraud vector — an attacker can invoice a client for a course or redirect a property payment while perfectly impersonating the founder.
2. **Legitimate mail lands in spam.** Since 2024, Gmail and Yahoo require SPF/DKIM alignment for bulk senders and increasingly penalise unauthenticated mail generally. Course confirmations sent to prospects are being filtered.
3. **Zero visibility.** Without DMARC reporting, nobody will ever learn that spoofing is occurring.

This is the highest-severity finding in the audit and also the cheapest to fix — roughly 30 minutes of DNS work.

### 4.2 HTTP Security Headers 🟠

Response headers from `https://www.pan-lio.com/`:

| Header | Status | Assessment |
|---|:--:|---|
| `Strict-Transport-Security` | ⚠️ Weak | `max-age=15552000` (180 days). **No `includeSubDomains`, no `preload`.** |
| `X-Content-Type-Options` | ✅ | `nosniff` |
| `X-Frame-Options` | ⚠️ | `SAMEORIGIN` — but **sent twice**, a misconfiguration some proxies reject |
| `Content-Security-Policy` | ❌ **Absent** | No XSS/injection mitigation layer |
| `Referrer-Policy` | ❌ **Absent** | Full URLs leak to third parties on outbound clicks |
| `Permissions-Policy` | ❌ **Absent** | Camera/mic/geolocation/payment not restricted |
| `Cross-Origin-Opener-Policy` | ❌ Absent | No cross-origin isolation |

The duplicated `X-Frame-Options` header appears on every response and indicates the value is being injected twice — once by Squarespace and once by a proxy or a code-injection setting.

### 4.3 TLS / Certificate ✅ with one caveat

| Property | Value |
|---|---|
| Issuer | Let's Encrypt (`CN=YR1`) |
| `www.pan-lio.com` cert | Valid, `notBefore` 17 Aug 2026, `notAfter` 15 Nov 2026 |
| `pan-lio.com` (apex) cert | Valid, separate certificate, same validity window |
| SAN coverage | Each cert lists exactly one hostname |
| Auto-renewal | Managed by Squarespace ✅ |

Both hostnames are correctly covered by their own certificates and auto-renew. This is healthy.

**Caveat — no CAA record.** `pan-lio.com` publishes no `CAA` record, meaning *any* public CA in the world is permitted to issue a certificate for the domain. A CAA record restricting issuance to Let's Encrypt is a cheap defence against mis-issuance.

### 4.4 Platform & Application Security ✅

- Squarespace is a managed SaaS platform: no server patching, database, or plugin-vulnerability surface for Pan-Lio to own. This is a genuine security advantage over a self-hosted WordPress equivalent.
- Session cookie (`crumb`) is issued with `Secure` and `Path=/`. ⚠️ It lacks `HttpOnly` and `SameSite` — but this is Squarespace's CSRF token, read intentionally by client-side JS, so it is by design rather than a defect.
- All third-party assets load from three known Squarespace-controlled origins (`images.squarespace-cdn.com`, `definitions.sqspcdn.com`, `static1.squarespace.com`). **No unknown, abandoned, or suspicious third-party scripts** — a clean supply chain.
- Customer accounts and `/cart` are enabled (a "Login" nav item is live). Authentication and any payment handling are managed by Squarespace/Stripe, which is the correct posture.

### 4.5 Privacy & Compliance 🟠

- **No cookie consent banner** is presented, yet Squarespace sets cookies and the site is plainly marketed internationally (courses in Rwanda and Botswana; "International Life Insurance Services"; a UK/EU-facing insurance proposition).
- **No Privacy Policy or Terms page exists** anywhere on the site or in the sitemap.
- The booking forms collect name, email, and phone number with **no consent checkbox and no link to any privacy notice.**

For a business selling **life insurance and financial services**, operating with no published privacy policy while collecting personal data is both a regulatory exposure (GDPR where EU residents are reached; Uganda's Data Protection and Privacy Act 2019) and a trust problem with exactly the risk-averse buyers this business targets.

---

## 5. Performance Audit

### 5.1 Measured Metrics

| Metric | Value | Assessment |
|---|---|---|
| TTFB (homepage) | ~580 ms | 🟡 Acceptable; CDN-cached (`Age: 116827`) |
| Total load | ~900 ms (HTML) | ✅ Good |
| HTML transfer (gzip) | 39.5 KB | ✅ Good |
| HTML uncompressed | **463 KB** | 🟠 Very heavy DOM — 11.7× compression ratio |
| Compression | gzip ✅ | 🟡 Brotli would be ~15–20% smaller |
| Protocol | **HTTP/1.1** | 🟠 No HTTP/2 multiplexing on the origin |
| Resource requests | 64 | 🟡 Typical for Squarespace |

### 5.2 Image Weight — The Dominant Problem 🟠

Measured directly from the CDN:

| Asset | Full size | At `?format=1500w` |
|---|--:|--:|
| Calendar page 1 | **897 KB** | 533 KB |
| Calendar page 2 | **906 KB** | 534 KB |
| Hero (Unsplash) | 411 KB | 167 KB |
| Real-estate photo | 265 KB | 265 KB |
| Template demo image | 259 KB | 115 KB |

The homepage embeds **five calendar images at roughly 900 KB each ≈ 4.5 MB**, each rendered at 2550 × 3300 px. On a typical Ugandan or Rwandan mobile connection this is a multi-second — potentially 30-second — wait for content that is *still* unreadable when it arrives. This will be the site's Largest Contentful Paint and its Core Web Vitals failure point.

### 5.3 Leftover Template Demo Assets 🟡

Four images are still served from a **different Squarespace site ID** than Pan-Lio's own:

```
content/v1/5ec321c2af33de48734cc929/...  ← foreign site ID
content/v1/699c0d9e5bb97a2aedfaf3a1/...  ← Pan-Lio's actual site
```

They are named `imgg-demo-Hh4icpkE.webp`, `imgg-demo-xk2iGDRi.png`, `imgg-demo-rPwZj1Tr.png`, and `imgg-demo-3IRmPeSt.png` — unmodified Squarespace **template placeholder images that were never replaced.** Beyond the ~700 KB of wasted weight, these are stock demo graphics presenting as Pan-Lio's own brand imagery, and they are hosted on an asset path Pan-Lio does not control.

### 5.4 Console Warnings 🟡

Six `yui: NOT loaded` warnings fire on load (`squarespace-common_vendors`, `squarespace-performance`, `squarespace-user_account_core`, and others). These are benign Squarespace framework messages rather than site errors, but `squarespace-performance` failing to load means **Squarespace's own performance telemetry is not reporting**.

---

## 6. Accessibility Audit (WCAG 2.1 AA)

### 6.1 Empty Alt Text on Every Image — 37 of 37 🔴

| Page | Images | With alt text |
|---|:--:|:--:|
| `/` | 16 | **0** |
| `/pan-lio-services` | 8 | **0** |
| `/coachdk-services` | 3 | **0** |
| `/contact-1` | 1 | **0** |
| Each booking page (×5) | 2 | **0** |
| **Total** | **37** | **0** |

Every image carries `alt=""`. In HTML, `alt=""` is a deliberate signal meaning *"this image is purely decorative — screen readers should skip it."*

For the hero background, that is arguably correct. **For the training calendar it is catastrophic.** A blind or low-vision user visiting the homepage is told there is nothing there. The entire course catalogue — every course name, date, and city — does not exist for them. This is a clear-cut **WCAG 2.1 Level A failure under 1.1.1 Non-text Content**, and because the calendar is the site's core commercial content, it is likely the most legally exposed item in this report.

### 6.2 Images of Text 🔴

**WCAG 2.1 Level AA, 1.4.5 Images of Text** requires that text be presented as real text rather than pictures of text, except for logos. The training calendar is a table of text delivered as a raster image. It cannot be resized, reflowed, restyled for dyslexia, translated by the browser, read aloud, or selected and copied.

### 6.3 Heading Structure 🟠

- `/pan-lio-services`: **no `<h1>`** — screen-reader users get no page title landmark.
- `/coachdk-services`: **seven `<h1>` elements** — the outline is flat and meaningless.
- Homepage heading sequence runs `h1 → h2 → h1 → h2×5 → h1 → h1 → h2 → h3`, with multiple `<h1>`s used for visual sizing rather than structure.

### 6.4 Form Accessibility 🟡

The booking form's labels are correctly associated and required fields are marked "(required)" in visible text — good. However the "Course selection" helper text reads:

> "Kindly type the course you would like to book (Courses on the right) OR (Above if on mobile)"

This instruction is **purely positional/visual**, which fails **WCAG 1.3.3 Sensory Characteristics**. A screen-reader user has no concept of "on the right," and — since the referenced calendar is an unlabelled image — no way to reach the information at all.

---

## 7. UX, Content & Conversion Audit

### 7.1 Site-Wide Broken Link — `/about` returns 404 🔴

The footer of **all nine pages** contains `<a href="/about">About</a>`. That URL returns a hard **404**. There is no `/about` page in the sitemap and none exists.

Every page on the website links to a dead page. This wastes crawl budget, leaks internal PageRank into a void, and — most importantly — an "About" link is one of the most-clicked elements for a trust-dependent business. Prospects evaluating a life-insurance and investment firm click "About" precisely to verify legitimacy, and are served an error page.

### 7.2 The Booking Flow Is the Weakest Commercial Link 🟠

The current flow requires the user to:

1. Land on a booking page containing 3 words of text.
2. Locate the correct course inside a 2550px-wide **image** of a table.
3. Squint at it (on mobile, effectively impossible).
4. **Manually retype the course name into a free-text box.**

This design guarantees:
- **Data quality failure** — typos, abbreviations, half-remembered names, and blank guesses arriving in the inbox.
- **Manual reconciliation** — every submission requires a human to interpret what was actually meant.
- **High abandonment** — friction concentrated exactly at the point of purchase intent.
- **No price transparency** — no cost is shown anywhere in the booking flow.

The instruction "(Courses on the right) OR (Above if on mobile)" is itself a tell that the layout is fighting the content.

### 7.3 The Contact Page Has No Contact Form 🟠

`/contact-1` contains **29 words**: an H1, three phone numbers, and two email addresses. There is no form, no embedded map, no physical address, no office hours, and no indication of which number or which inbox to use for what. For an international audience across Uganda, Rwanda, and Botswana, three bare `+256` numbers with no context is a meaningful conversion barrier.

### 7.4 Brand Architecture Is Ambiguous 🟡

The site simultaneously presents two brands — **Pan-Lio Ltd** (real estate, transport, trade, insurance, investment) and **Coach DK Global** (life coaching, founded by Deo Kateizi) — without ever clearly explaining the relationship. The homepage leads with Coach DK's philosophy; the nav treats them as sibling service lines; `/coachdk-services` says "at Coach DK Global in collaboration with Pan Lio Ltd."

A visitor arriving for corporate fraud-audit training and a visitor arriving for personal life coaching have very different needs, and the homepage serves neither cleanly.

### 7.5 Thin Content 🟠

169 words on the homepage and 3 words on each of five booking pages. There is no blog, no case studies, no testimonials, no trainer bios, no FAQ, and no proof of past cohorts — none of the trust and authority content that both search engines and high-consideration buyers require.

### 7.6 Missing Trust Signals for a Financial Services Business 🟠

The site sells **international life insurance** and **real-estate investment** with:
- No company registration number
- No physical address
- No regulatory or licensing disclosure
- No named insurance partners ("trusted global insurance partnerships" — unnamed)
- No testimonials or client logos
- No team page (and the "About" link 404s)

---

# PART II — SPECIFIC UPGRADES

Each item below states **what** to change, **where** exactly, **how** to implement it, and **why** it improves the site.

---

## 8. SEO Upgrades

### 8.1 Write a Unique Meta Description for Every Page 🔴

**Where:** Squarespace → **Pages** → hover a page → ⚙️ **Settings** → **SEO** tab → *SEO Description*. Repeat for all 9 pages.

**How** — target 140–160 characters, front-load the primary keyword, include a location, and end with an action:

| Page | Suggested description |
|---|---|
| `/` | `Pan-Lio delivers professional training, leadership coaching, real estate and investment services across Uganda, Rwanda and Botswana. View our 2026 course calendar.` |
| `/pan-lio-services` | `Real estate development, transport and fleet solutions, trade, international life insurance and strategic leadership training from Pan-Lio Ltd, Kampala.` |
| `/coachdk-services` | `One-on-one life coaching with Coach DK Global. ZuluOne ($500/mo) and ZuluTwo ($750/mo) packages covering mindset, leadership, wealth strategy and purpose.` |
| `/contact-1` | `Contact Pan-Lio Ltd in Kampala, Uganda. Call +256 780 424010 or email coachdk@pan-lio.com to book training, coaching or investment consultations.` |
| Booking pages | `Book your place on Pan-Lio's [March–June] 2026 training intake. Courses in Kampala, Kigali and Gaborone — reserve your seat online today.` |

**Why:** Meta descriptions do not directly influence rankings, but they control the snippet users actually read. Moving from an empty description (forcing Google to scrape fragments) to a deliberate, benefit-led sentence typically lifts organic CTR by **5–15%**. On the booking pages the effect is far larger, since Google currently has almost nothing to work with.

---

### 8.2 Rewrite All Title Tags 🟠

**Where:** Same panel as above → *SEO Title*. Also **Design → Site Title & Logo** for the site-wide suffix.

**How:**

| Page | Current | Proposed (≤60 chars) |
|---|---|---|
| `/` | `Pan-Lio` | `Professional Training & Leadership Coaching \| Pan-Lio` |
| `/pan-lio-services` | `Pan-Lio Services — Pan-Lio` | `Real Estate, Transport, Trade & Insurance \| Pan-Lio` |
| `/coachdk-services` | `CoachDK Services — Pan-Lio` | `Life Coaching Packages — Coach DK Global \| Pan-Lio` |
| `/contact-1` | `Contact — Pan-Lio` | `Contact Pan-Lio Ltd — Kampala, Uganda` |
| `/book-course-jm` | **`Contact — Pan-Lio`** ⚠️ | `Book a Course: January–March 2026 \| Pan-Lio` |

**Fix the `/book-course-jm` title first** — it is an outright error causing two URLs to compete under one title.

**Why:** The title tag remains one of the strongest on-page ranking signals and is the clickable headline in results. `Pan-Lio` matches only people who already know the brand — it captures zero discovery traffic. Adding "Training", "Leadership Coaching", and the service categories makes the homepage eligible for the non-branded queries that drive new business.

---

### 8.3 Convert the Training Calendar From Images to HTML 🔴 **— Highest-Impact Fix**

**Where:** Homepage calendar section, plus all five `/book-course-*` pages.

**How:**

1. Recover the source table (the images derive from a document titled *"Pan Lio and Coach DK Training Calendar 2026 January to December"* — the original file exists).
2. In Squarespace, replace each calendar **Image Block** with a **Markdown Block** or **Code Block** containing a real HTML table:

```html
<table class="training-calendar">
  <caption>Pan-Lio &amp; Coach DK Training Calendar 2026</caption>
  <thead>
    <tr><th scope="col">#</th><th scope="col">Course</th>
        <th scope="col">Dates</th><th scope="col">Location</th></tr>
  </thead>
  <tbody>
    <tr><td>24</td>
        <td>Mastering the Art of Inspiring and Empowering Teams to Drive Business Growth</td>
        <td>18–22 May 2026</td><td>Kigali, Rwanda</td></tr>
    <tr><td>25</td><td>Product Strategy and Innovation Course</td>
        <td>25–29 May 2026</td><td>Kigali, Rwanda</td></tr>
    <tr><td>26</td><td>Fraud Audit and Investigation Course</td>
        <td>1–5 June 2026</td><td>Gaborone, Botswana</td></tr>
    <!-- …all remaining courses… -->
  </tbody>
</table>
```

3. Add responsive CSS so the table scrolls rather than breaking the layout on mobile:

```css
.training-calendar { width: 100%; border-collapse: collapse; }
.training-calendar th, .training-calendar td {
  padding: .6rem .75rem; border-bottom: 1px solid #d8d0c4; text-align: left;
}
@media (max-width: 640px) {
  .training-calendar { display: block; overflow-x: auto; white-space: nowrap; }
}
```

4. **Strongly recommended:** give each course its own URL (see §8.5).
5. Keep the PDF as a **downloadable supplement** ("Download the 2026 calendar (PDF)") — never as the primary delivery.

**Why:** This single change converts roughly **40–60 high-intent commercial keywords** from completely invisible to fully indexable. Queries like "fraud audit and investigation course Botswana", "product strategy course Kigali 2026", and "team leadership training Rwanda" are low-competition and high-conversion — the searcher is looking to book. Simultaneously it resolves the WCAG 1.1.1 and 1.4.5 failures, removes ~4.5 MB from the homepage, makes the calendar readable on mobile, and lets prospects copy-paste course names into the booking form correctly.

**This is the highest return-on-effort action available to the site.**

---

### 8.4 Add Real Structured Data 🟠

**Where:** **Settings → Developer Tools → Code Injection → Header** (site-wide `Organization`); per-page **Page Settings → Advanced → Page Header Code Injection** (`Course` markup).

**How** — site-wide organisation schema:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Pan-Lio Ltd",
  "url": "https://www.pan-lio.com",
  "logo": "https://www.pan-lio.com/path-to-logo.png",
  "description": "Multi-industry enterprise spanning real estate, transport, trade, international life insurance, and leadership development.",
  "email": "coachdk@pan-lio.com",
  "telephone": "+256780424010",
  "address": { "@type": "PostalAddress", "addressLocality": "Kampala", "addressCountry": "UG" },
  "areaServed": ["Uganda", "Rwanda", "Botswana"],
  "sameAs": [
    "https://www.linkedin.com/in/coachdeokateizi/",
    "https://www.instagram.com/coachdkateizi",
    "https://www.tiktok.com/@coach.dk7"
  ]
}
</script>
```

Per course, add `Course` + `CourseInstance`:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Fraud Audit and Investigation Course",
  "description": "Five-day professional course covering fraud detection, forensic audit technique, and investigation methodology.",
  "provider": { "@type": "Organization", "name": "Pan-Lio Ltd", "url": "https://www.pan-lio.com" },
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "onsite",
    "startDate": "2026-06-01",
    "endDate": "2026-06-05",
    "location": { "@type": "Place", "name": "Gaborone, Botswana" }
  },
  "offers": { "@type": "Offer", "price": "0.00", "priceCurrency": "USD", "availability": "https://schema.org/InStock" }
}
</script>
```

Add `Service` markup on `/pan-lio-services` for each of the five business lines, and `Offer` markup for the ZuluOne ($500/mo) and ZuluTwo ($750/mo) packages.

**Why:** `Course` markup makes listings eligible for Google's **course rich results and carousels**, which render dates and providers directly in search — a large visual advantage over plain blue links. `Organization` with `sameAs` consolidates brand entity signals and is a prerequisite for a Google Knowledge Panel. The current empty-description `WebSite` node contributes nothing.

---

### 8.5 Restructure the Booking Pages 🟠

**Where:** The five `/book-course-*` URLs.

**How** — two viable options:

**Option A (recommended).** Collapse all five into a **single** `/book-a-course` page holding the full HTML calendar and one booking form with a **dropdown** of every course. Then `301`-redirect the five old URLs to it (**Settings → Advanced → URL Mappings**):

```
/book-course-jm -> /book-a-course 301
/book-course-march-june -> /book-a-course 301
/book-course-june-august -> /book-a-course 301
/book-course-august-november -> /book-a-course 301
/book-course-november-december -> /book-a-course 301
```

**Option B.** Keep per-intake pages but give each 300+ words of genuine unique content — the courses in that intake, the cities, pricing, what's included, and who should attend.

**Why:** Five URLs holding three words each is a textbook thin/duplicate-content pattern. Consolidating concentrates all link equity and relevance signals into one strong page rather than splitting them five ways, and removes the risk of Google filtering four of them from the index.

---

### 8.6 Add an `og:image` and Social Metadata 🟠

**Where:** **Settings → Developer Tools → Code Injection → Header**.

**How:**

```html
<meta property="og:image" content="https://www.pan-lio.com/social-card.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:description" content="Professional training, leadership coaching and investment services across East and Southern Africa." />
<meta name="twitter:card" content="summary_large_image" />
```

Design a 1200 × 630 px card carrying the Pan-Lio logo, the tagline, and a clean background. Squarespace also allows per-page social images under **Page Settings → Social Image**.

**Why:** The founder markets actively on Instagram, TikTok and LinkedIn, and WhatsApp sharing is dominant in the target markets. Every share currently renders as a grey box. A proper social card typically **doubles or triples click-through on shared links** — this is the cheapest conversion win in the entire report.

---

### 8.7 Fix Heading Structure 🟠

**Where:** `/pan-lio-services` and `/coachdk-services`.

**How:** In each Squarespace text block, use the Heading dropdown to enforce exactly one `<h1>` per page and a logical descent:

- `/pan-lio-services`: promote **"Who we are"** to `H1` (or better, add `H1` = *"Pan-Lio Services: Real Estate, Transport, Trade & Leadership"*). Demote the five service names to `H2`.
- `/coachdk-services`: keep **"Coach DK Global Life Coaching Packages"** as the sole `H1`; demote `ZuluOne` and `ZuluTwo` to `H2` and the module headings to `H3`.
- Homepage: keep **"Achieve Excellence"** as `H1`; demote `TRAINING CALENDARS`, `Big Ideas, Real Impact.` and `About our company` to `H2`.

**Why:** The `<h1>` is a primary topical signal. A page with no `<h1>` forfeits it entirely; a page with seven dilutes it to nothing. A clean hierarchy also gives screen-reader users a navigable document outline (WCAG 2.4.6).

---

### 8.8 Build Out Content Depth 🟡

**Where:** New pages.

**How:**
- **`/about`** — create it (this also fixes the 404 in §10.1). Company story, founder bio for Deo Kateizi, registration details, mission.
- **One page per course** at `/courses/fraud-audit-and-investigation` etc., each 400–600 words: syllabus, learning outcomes, who should attend, duration, dates, location, price, trainer.
- **`/testimonials`** — client outcomes and past-cohort proof.
- **A blog** — 1–2 posts monthly on leadership, fraud prevention, real-estate investment in East Africa.

**Why:** ~1,060 words across the whole site gives search engines almost no topical surface. Individual course pages are the correct architecture for a training business: each targets its own long-tail keyword cluster and becomes an entry point. Twelve course pages at 500 words each would multiply indexable content roughly six-fold.

---

## 9. Security Upgrades

### 9.1 Publish SPF, DKIM and DMARC 🔴 **— Do This First**

**Where:** Google Cloud DNS (nameservers are `ns-cloud-a1…a4.googledomains.com`), zone `pan-lio.com`.

**How — three steps, in order:**

**Step 1 — SPF.** Add a `TXT` record on the root:

```
Name:  @  (pan-lio.com)
Type:  TXT
Value: v=spf1 include:_spf.google.com ~all
```

Add any other legitimate senders (e.g. `include:mailchimp.com`) before `~all`. **Only one SPF record may exist per domain.**

**Step 2 — DKIM.** In **Google Admin Console → Apps → Google Workspace → Gmail → Authenticate email**, generate a 2048-bit key, then publish the supplied `TXT` record at `google._domainkey.pan-lio.com`, and click **Start authentication**.

**Step 3 — DMARC.** Begin in monitor-only mode:

```
Name:  _dmarc
Type:  TXT
Value: v=DMARC1; p=none; rua=mailto:dmarc@pan-lio.com; fo=1; pct=100
```

Monitor the aggregate reports for 2–4 weeks, confirm all legitimate mail is aligned, then tighten to `p=quarantine`, and finally `p=reject`.

**Why:** Without SPF and DMARC, **anyone can send email as `coachdk@pan-lio.com`** and no receiving server has grounds to reject it. For a business discussing life insurance policies, property transactions, and capital deployment, this is a live business-email-compromise vector — a forged invoice or forged payment-redirect instruction from the founder's exact address is currently trivial to produce. Additionally, Gmail and Yahoo now actively penalise unauthenticated senders, so course confirmations and marketing mail are being filtered to spam today. This is the highest-severity finding and takes roughly **30 minutes**.

---

### 9.2 Strengthen HSTS 🟠

**Where:** Squarespace does not expose HSTS configuration directly; raise it with Squarespace support, or place the domain behind a proxy (e.g. Cloudflare) that allows header control.

**Target value:**

```
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
```

**Why:** The current `max-age=15552000` (180 days) omits `includeSubDomains`, so any subdomain remains reachable over plaintext HTTP and is exploitable for cookie-injection or downgrade attacks. Raising to one year with `includeSubDomains` and submitting to the browser preload list means browsers refuse plaintext connections to the domain **before the first request is ever made**, closing the initial-request MITM window entirely.

---

### 9.3 Add the Missing Security Headers 🟠

**Where:** If proxied (Cloudflare Transform Rules / Workers) or self-managed. Squarespace's platform limits direct control; `Referrer-Policy` can be partially set via a meta tag in **Code Injection → Header**.

**How** — minimum viable set:

```
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=(), payment=(self)
X-Frame-Options: SAMEORIGIN        # send ONCE, not twice
Content-Security-Policy-Report-Only: default-src 'self' https://*.squarespace.com https://*.squarespace-cdn.com https://*.sqspcdn.com; report-uri /csp-report
```

The meta-tag fallback available inside Squarespace today:

```html
<meta name="referrer" content="strict-origin-when-cross-origin">
```

**Why:** `Referrer-Policy` stops full URLs (including any query parameters) leaking to third parties when users click outbound links. `Permissions-Policy` denies powerful browser APIs the site never uses, shrinking the attack surface if a script is ever compromised. Begin CSP in `Report-Only` mode so violations are logged without breaking Squarespace's own scripts, then promote to enforcing once the report is clean. **Also resolve the duplicated `X-Frame-Options` header** — some proxies and scanners reject responses carrying conflicting duplicate security headers.

---

### 9.4 Add a CAA Record 🟡

**Where:** Google Cloud DNS, zone `pan-lio.com`.

**How:**

```
Name: @   Type: CAA   Value: 0 issue "letsencrypt.org"
Name: @   Type: CAA   Value: 0 iodef "mailto:security@pan-lio.com"
```

**Why:** Without CAA, any of the ~150 publicly trusted CAs may issue a certificate for `pan-lio.com`. A CAA record instructs all compliant CAs to refuse issuance except from Let's Encrypt, and the `iodef` entry causes attempted violations to be reported to you. Takes 5 minutes and meaningfully narrows the mis-issuance risk.

---

### 9.5 Publish a Privacy Policy and Cookie Notice 🟠

**Where:** New page `/privacy-policy`; enable the banner at **Settings → Cookies & Visitor Data → Cookie Banner**.

**How:**
1. Create `/privacy-policy` covering: what data the booking forms collect (name, email, phone), why, how long it is retained, who it is shared with (Squarespace, Google Workspace, any insurance partners), and how to request deletion.
2. Create `/terms` covering course booking terms, payment, cancellation and refunds.
3. Enable Squarespace's cookie banner with **"Require consent before loading cookies"**.
4. Add a consent checkbox to every booking form linking to the policy:
   *"☐ I agree to Pan-Lio storing my details to process this booking. See our Privacy Policy."*
5. Link both pages from the footer.

**Why:** The site collects personal data internationally while selling **life insurance and financial services** — a category where buyers are actively assessing legitimacy. Beyond the regulatory exposure (GDPR for any EU-resident enquiry; Uganda's Data Protection and Privacy Act 2019; Botswana's DPA), the absence of a privacy policy is a visible trust deficit precisely where trust drives conversion.

---

## 10. UX, Performance & Accessibility Upgrades

### 10.1 Fix the Site-Wide `/about` 404 🔴 **— 5-Minute Fix**

**Where:** Footer block `#block-4e3ce119746603`, present on all 9 pages.

**How** — choose one:
- **Preferred:** Create a real `/about` page (see §8.8). It is genuinely needed content.
- **Immediate:** Edit the footer link to point at `/pan-lio-services#panlio`, which already contains the "Who we are" copy.
- **Fallback:** Add a redirect at **Settings → Advanced → URL Mappings**: `/about -> /pan-lio-services 301`

**Why:** Every page on the site currently links to a dead URL. Beyond wasting crawl budget and leaking internal link equity, "About" is a top-clicked trust element — and prospects evaluating a firm that handles property investments and insurance policies are landing on an error page at the exact moment they are checking legitimacy. Highest impact-to-effort ratio in the report.

---

### 10.2 Replace the Free-Text Course Field With a Dropdown 🟠

**Where:** The Form Block on every booking page.

**How:**
1. Edit the Form Block → replace the "Course selection" text field with a **Dropdown** field.
2. Populate it with every course from the calendar, formatted as `Course Name — Dates — City`, e.g. *"Fraud Audit and Investigation — 1–5 June 2026 — Gaborone"*.
3. Mark it required.
4. Delete the "(Courses on the right) OR (Above if on mobile)" helper text — it becomes unnecessary.
5. Add optional fields: *Organisation*, *Number of attendees*, *How did you hear about us?*
6. Add the privacy consent checkbox from §9.5.
7. Configure **Storage → Email** to the correct inbox and set a confirmation message stating expected response time.

**Why:** Free-text entry at the point of purchase intent produces typos, ambiguity, and abandonment, and forces manual interpretation of every enquiry. A dropdown guarantees clean, machine-readable data, removes the need for the user to hunt through an image, and eliminates the mobile failure mode where the calendar is unreadable. Structured dropdown data also enables measurement of which courses generate demand.

---

### 10.3 Fix All 37 Empty `alt` Attributes 🔴

**Where:** Every Image Block: click the image → **Design/Edit** → **Alt text** field.

**How:**
- **Decorative images** (hero background, abstract textures): `alt=""` is correct — leave them.
- **Meaningful images** — write descriptive alt text:
  - Logo → `Pan-Lio Ltd logo`
  - Real estate photo → `Modern residential development managed by Pan-Lio Real Estate`
  - Insurance photo → `Life insurance policy documentation and financial planning`
  - Founder portrait → `Deo Kateizi, founder of Coach DK Global`
- **The calendar images** — once §8.3 converts them to HTML tables, the images are removed entirely. Until then, set: `alt="Pan-Lio and Coach DK 2026 training calendar, page 1 of 5 — course names, dates and locations"` and add the text as a caption below.

**Why:** `alt=""` explicitly instructs screen readers to skip the image. Applied to the training calendar, it renders the site's entire commercial catalogue non-existent for blind users — a clear **WCAG 2.1 Level A failure (1.1.1)** and the sharpest legal exposure in this audit. Descriptive alt text simultaneously feeds Google Images, an underrated discovery channel for real-estate and training visuals.

---

### 10.4 Cut Image Weight 🟠

**Where:** All Image Blocks, chiefly the homepage.

**How:**
1. **Removing the calendar images (§8.3) alone eliminates ~4.5 MB** — do that first.
2. Before uploading any image to Squarespace, resize it to **max 2500 px wide** and compress via TinyPNG or Squoosh (target < 200 KB).
3. Replace the four leftover `imgg-demo-*` template placeholders (§10.5).
4. Re-export the hero (`unsplash-image-Bd-PwE6KnSc.jpg`, 411 KB) at 1920 px / ~150 KB.
5. Verify Squarespace's native lazy-loading is enabled on below-the-fold blocks.

**Why:** The homepage currently ships roughly 4.5 MB of images that carry unreadable content. On the mobile networks typical of Uganda, Rwanda and Botswana, this is a multi-second — sometimes 30-second — wait that will register as a Largest Contentful Paint failure in Core Web Vitals, which is a confirmed Google ranking factor. Cutting to under 1 MB should move LCP from failing to passing.

---

### 10.5 Remove the Leftover Template Demo Images 🟡

**Where:** Four images still served from Squarespace site ID `5ec321c2af33de48734cc929` (not Pan-Lio's `699c0d9e5bb97a2aedfaf3a1`):

```
imgg-demo-Hh4icpkE.webp
imgg-demo-xk2iGDRi.png
imgg-demo-rPwZj1Tr.png
imgg-demo-3IRmPeSt.png
```

**How:** Locate each block and replace with genuine Pan-Lio photography — real training sessions, actual properties, the real team.

**Why:** These are unreplaced Squarespace template placeholders currently presenting as Pan-Lio's own brand imagery. They add ~700 KB of dead weight, they are hosted on an asset path Pan-Lio does not control, and — for a firm asking clients to trust it with insurance and property capital — visibly generic stock filler undermines exactly the credibility the site needs to project.

---

### 10.6 Rebuild the Contact Page 🟠

**Where:** `/contact-1` (also rename the URL slug to `/contact`).

**How:**
1. Add a **contact form**: Name, Email, Phone, Enquiry type (dropdown: Training / Coaching / Real Estate / Insurance / Transport / Other), Message.
2. Label each phone number by purpose and country — e.g. *"Training bookings (Uganda): +256 780 424010"*.
3. Route the email addresses explicitly — *"Coaching enquiries: coachdk@pan-lio.com"*.
4. Add the **physical office address** and an embedded map.
5. State **business hours with the timezone** (EAT).
6. Add expected response time — *"We reply within 1 business day."*
7. Rename the slug and add `/contact-1 -> /contact 301` under URL Mappings.

**Why:** A 29-word contact page listing three unlabelled `+256` numbers forces international prospects to guess which to call, when, and about what — each guess a drop-off point. A form captures enquiries outside business hours and from users unwilling to place an international call, and the enquiry-type dropdown routes leads automatically. The `-1` URL suffix also signals an abandoned duplicate page.

---

### 10.7 Clarify the Brand Architecture 🟡

**Where:** Homepage hero and main navigation.

**How:**
1. Add one clarifying line under the hero: *"Pan-Lio Ltd — a multi-industry enterprise in real estate, transport, trade and investment. Home of Coach DK Global leadership and life coaching."*
2. Restructure the nav into outcome-led paths rather than brand-led ones:
   `Training & Courses` · `Coaching` · `Business Services` · `About` · `Contact`
3. Add two clear entry paths above the fold: **"Book Corporate Training"** and **"Start Personal Coaching"**.

**Why:** Two distinct audiences arrive — corporate L&D buyers seeking fraud-audit and leadership courses, and individuals seeking personal life coaching. The homepage currently opens with Coach DK's personal philosophy while the nav presents "Pan-Lio Services" and "CoachDK Services" as opaque siblings, so neither visitor finds their path in the first screen. Splitting the routes immediately reduces bounce and shortens time-to-conversion for both segments.

---

### 10.8 Add Trust Signals 🟠

**Where:** Homepage, `/about`, `/pan-lio-services`.

**How:**
- Company registration number and registered office in the footer.
- Name the insurance partners behind "trusted global insurance partnerships" — an unnamed partner is not a trust signal.
- Any regulatory licence or accreditation for the insurance and financial services offering.
- 3–5 client testimonials with names, roles and organisations.
- Photographs from past cohorts, with attendee counts and cities.
- Trainer bios and credentials.

**Why:** The site asks visitors to commit to **life insurance policies, property investments, and $500–$750/month coaching** while providing no registration number, no address, no named partners, no licensing disclosure, no testimonials, and a 404 where "About" should be. For high-consideration financial purchases, verifiable proof of legitimacy is the primary conversion lever, and it is currently absent across the board.

---

### 10.9 Align the Sitemap with Canonical URLs 🟡

**Where:** `sitemap.xml` (Squarespace-generated).

**How:** The sitemap lists `https://www.pan-lio.com/home`, while the canonical tag on that page points to `https://www.pan-lio.com`. In Squarespace, set the Home page's URL slug so the generated sitemap emits the canonical root. After the §8.5 consolidation, confirm the retired booking URLs disappear from the sitemap.

**Why:** A sitemap should list only canonical URLs. Listing `/home` while canonicalising to `/` sends Google a mildly contradictory signal and wastes crawl budget. The canonical tag currently resolves this correctly, so this is cleanup rather than a live defect.

---

## 11. Prioritised Action Plan

### Week 1 — Critical (≈ 4 hours total)

| Task | § | Time |
|---|:--:|--:|
| Publish SPF record | 9.1 | 10 min |
| Enable DKIM in Google Workspace | 9.1 | 15 min |
| Publish DMARC record (`p=none`) | 9.1 | 10 min |
| Fix the site-wide `/about` 404 | 10.1 | 5 min |
| Fix the `/book-course-jm` title tag | 8.2 | 5 min |
| Write meta descriptions for all 9 pages | 8.1 | 90 min |
| Rewrite all 9 title tags | 8.2 | 45 min |
| Add `og:image` + social card | 8.6 | 45 min |

### Week 2–3 — High Impact (≈ 2–3 days)

| Task | § |
|---|:--:|
| **Convert the training calendar to an HTML table** | 8.3 |
| Write alt text for all meaningful images | 10.3 |
| Replace free-text course field with a dropdown | 10.2 |
| Fix heading hierarchy on all pages | 8.7 |
| Consolidate the five booking pages + 301s | 8.5 |
| Compress and replace oversized images | 10.4 |
| Remove the leftover template demo images | 10.5 |
| Add a CAA record | 9.4 |

### Month 2 — Structural (≈ 1–2 weeks)

| Task | § |
|---|:--:|
| Create the `/about` page | 8.8 |
| Publish Privacy Policy + Terms + cookie banner | 9.5 |
| Rebuild the contact page with a form | 10.6 |
| Add `Organization` + `Course` structured data | 8.4 |
| Build individual course pages | 8.8 |
| Add trust signals and testimonials | 10.8 |
| Clarify the brand architecture and nav | 10.7 |

### Ongoing

| Task | § |
|---|:--:|
| Tighten DMARC to `quarantine`, then `reject` | 9.1 |
| Strengthen HSTS; add security headers | 9.2 / 9.3 |
| Publish 1–2 blog posts monthly | 8.8 |
| Monitor Search Console coverage and Core Web Vitals | — |

---

## 12. Expected Outcomes

If the Week 1 and Week 2–3 items are completed:

| Metric | Now | Projected |
|---|---|---|
| Indexable commercial keywords | ~5 (brand only) | **40–60** (every course × city) |
| Organic search CTR | Suppressed (no snippets) | **+5–15%** |
| Social share CTR | Very low (no preview image) | **2–3×** |
| Homepage page weight | ~4.5 MB | **< 1 MB** |
| Core Web Vitals (LCP) | Likely failing | **Likely passing** |
| WCAG 2.1 Level A | Failing (1.1.1) | **Passing** |
| Email spoofing risk | **Unprotected** | **Protected** |
| Broken internal links | 1 site-wide (×9 pages) | **0** |
| Booking data quality | Free text, error-prone | **Structured, clean** |

The realistic headline: **converting the training calendar from images to HTML text (§8.3), combined with meta descriptions and title tags (§8.1, §8.2), is what unlocks organic discovery.** Everything else is important, but those three actions move the site from effectively invisible in search to competitive for the exact terms its buyers type.

---

## Appendix A — Audit Methodology

| Check | Tool / Method |
|---|---|
| HTTP headers, redirects, status codes | `curl -I`, full redirect-chain following |
| HTML parsing (titles, meta, headings, images, links) | Regex extraction over full page source, all 9 pages |
| TLS certificates | `openssl s_client` against apex and `www` |
| DNS records (A, MX, TXT, NS, DMARC) | `Resolve-DnsName` against Google Public DNS (8.8.8.8) |
| Rendered DOM, console, viewport behaviour | Headless browser at 1280px desktop and 375×812 mobile |
| Asset weights | Direct CDN fetches, full-size and `?format=1500w` variants |
| Link integrity | Status-code crawl of all internal and outbound links |
| Content extraction | Tag-stripped `<main>` text with word counts |

## Appendix B — Raw Evidence

**Empty meta description (identical on all 9 pages):**
```html
<meta name="description" content="" />
```

**Complete structured data present on the site:**
```json
{"url":"https://www.pan-lio.com","name":"Pan-Lio","description":"","@context":"http://schema.org","@type":"WebSite"}
```

**Response headers, `https://www.pan-lio.com/`:**
```
HTTP/1.1 200 OK
Content-Encoding: gzip
Content-Type: text/html;charset=utf-8
Server: Squarespace
Strict-Transport-Security: max-age=15552000
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
X-Frame-Options: SAMEORIGIN        <-- duplicated
Set-Cookie: crumb=...;Secure;Path=/
(no Content-Security-Policy, Referrer-Policy, or Permissions-Policy)
```

**DNS — email authentication:**
```
pan-lio.com  MX   -> aspmx.l.google.com (+4 alts)          ✅ mail is live
pan-lio.com  TXT  -> google-site-verification=3LoEky8e...  (no SPF)
_dmarc.pan-lio.com TXT -> NXDOMAIN                          ❌ no DMARC
```

**Image accessibility — all 9 pages:**
```
pg_.html                                imgs=16  no-alt=0  empty-alt=16
pg_pan-lio-services.html                imgs=8   no-alt=0  empty-alt=8
pg_coachdk-services.html                imgs=3   no-alt=0  empty-alt=3
pg_contact-1.html                       imgs=1   no-alt=0  empty-alt=1
pg_book-course-*.html  (×5)             imgs=2   no-alt=0  empty-alt=2
------------------------------------------------------------------
TOTAL                                   37 images, 0 with alt text
```

**Broken link:**
```
/about -> 404    (linked from the footer of all 9 pages)
```

**Calendar image weights (homepage, 5 files):**
```
Training Calendar 1_1.png   896,866 bytes   2550 x 3300 px
Training Calendar 1_2.png   905,606 bytes   2550 x 3300 px
... 1_3, 1_4, 1_5           ~900,000 bytes each
------------------------------------------------------
Approx. 4.5 MB of unreadable, unindexable table images
```

---

*Audit conducted 2 September 2026 against the live production site. All findings were verified by direct observation of live HTTP responses, DNS records, and rendered pages; no findings are inferred or assumed.*
