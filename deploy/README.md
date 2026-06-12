# TAS Digital — VSL Landing Page

Static site. No build step required — deploys as-is to Cloudflare Pages.

## Deploy (Cloudflare Pages)

**Option A — dashboard (fastest):**
Cloudflare dash → Compute → Workers & Pages → Create → Pages →
"Upload assets" → drag the contents of this folder → name it `tas-landing` → Deploy.
Then: project → Custom domains → add your domain/subdomain.

**Option B — Git (best for ongoing Cowork iteration):**
Push this folder to a GitHub repo (e.g. TASDIGITAL/tas-landing), then
Pages → Create → "Connect to Git" → pick the repo.
Build settings: framework = None, build command = (empty), output dir = `/`.
Every push to `main` auto-deploys.

## Architecture

- `index.html` — entry; loads React (production) + Babel standalone, then the JSX files
- `styles.css` / `sections.css` — design system + section styles
- `data.jsx` — **ALL CONTENT LIVES HERE** (clients, videos, statics, stack, FAQs, stats)
- `components.jsx` — shared pieces (VSL player, lightbox, count-up, reveal)
- `hero.jsx` — nav + 3 hero treatments (active one set in `app.jsx` TWEAK_DEFAULTS)
- `sections.jsx` — logos, stats, trust/reviews carousel, reels, statics, FAQ, CTA
- `app.jsx` — composition + tweak defaults (hero treatment, accent, copy, VSL id)
- `tweaks-panel.jsx` — design-review tooling; inert in production, safe to keep

## Plugging in real media

**VSL:** set `videoId` in `app.jsx` TWEAK_DEFAULTS to the YouTube ID.

**Video reels (Cloudflare Stream):** in `data.jsx`, give each VIDEOS entry:
```js
src: "https://customer-<SUBDOMAIN>.cloudflarestream.com/<VIDEO_UID>/downloads/default.mp4",
poster: "https://customer-<SUBDOMAIN>.cloudflarestream.com/<VIDEO_UID>/thumbnails/thumbnail.jpg",
```
Note: enable "MP4 downloads" per video in Stream for the `/downloads/` URL,
or swap `src` to the HLS manifest + add hls.js if preferred.

**Static ads (Cloudflare Images):** in `data.jsx`, give each STATICS entry:
```js
src: "https://imagedelivery.net/<ACCOUNT_HASH>/<IMAGE_ID>/public",
```

**Client logos:** currently text names in CLIENTS (data.jsx); swap to
`<img>` files in `assets/` when logo files are available.

## Performance note (future optimization)

JSX is compiled in-browser by Babel standalone (~150ms on modern devices,
acceptable). For maximum ad-traffic performance, precompile the JSX to plain
JS (esbuild/babel CLI) and drop the Babel script tag. Content and design
need no changes for that migration.
