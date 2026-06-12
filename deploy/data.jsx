/* ============================================================
   TAS Digital — placeholder content
   Swap these for real assets later (logos, video IDs, images).
   ============================================================ */

// Client logos — real brand names (text wordmarks for now). 40+ → "200+ brands".
const CLIENTS = [
  "Desert Rose", "Casual Hermits", "Lone Star Mushrooms", "Ronen Chen", "Dagmi Outdoors",
  "8000 Kicks", "Gratsi", "LoveÉcru", "SEP", "Almond Hair", "Sotomayor Marketing", "TCK",
  "Lash by Maya", "Quintessentially", "Matchday Mystery", "Breathium", "Indios Popup",
  "Not Your Grandma's", "Backgammon Galaxy", "iSculpt", "StartEngine", "CropSalt",
  "Snack Verse", "Sweetapolita", "The EID Tree", "Viral Content Design", "MacKinnon Highlands",
  "Gearforce USA", "Subsoccer", "Commit Action", "Mattress Central", "Le Pratique du Motard",
  "Ergonomist", "Afsennah", "Ryvalia", "Turmerry", "Mechanic Superstore", "Blackout Coffee",
  "Rise Band", "Orange Mod", "Quality Garden Supplies", "Rapid Test", "Shadana Yoga",
  "Snack First", "School",
];

// Headline proof numbers.
const STATS = [
  { value: "$90M+", label: "generated for our clients" },
  { value: "8,500+", label: "creatives produced last year" },
  { value: "3×", label: "average return on ad spend" },
];

// AI tech stack — the pipeline behind every creative.
const STACK = [
  { name: "ChatGPT 2.0", role: "Image generation", note: "On-brand concepts and product imagery generated and iterated at scale." },
  { name: "A3A", role: "Analysis", note: "Deep ad and funnel analysis that pinpoints exactly what to test next." },
  { name: "Kling AI", role: "AI video", note: "Photo-real generative video for scroll-stopping motion ads." },
  { name: "Claude Cowork Skills", role: "Creative skills", note: "Custom Claude skills that turn a brief into production-ready creative." },
  { name: "Claude Cowork + n8n", role: "Automation", note: "Cowork agents wired into n8n pipelines — brief to delivery, hands-off." },
  { name: "Suno", role: "AI audio", note: "Original music and sound beds tailored to every cut." },
  { name: "Google Flow", role: "AI filmmaking", note: "Cinematic AI scenes and camera work that feel directed, not generated." },
];

// Video creatives — vertical 9:16 reels.
// To go live: set `src` to an MP4 URL (R2 / Stream / any host), e.g.
//   src: "https://media.tas-digital.com/reel-01.mp4", poster: "assets/reels/reel-01.jpg"
const VIDEOS = Array.from({ length: 12 }).map((_, i) => ({
  id: "vid-" + (i + 1),
  label: "reel " + String(i + 1).padStart(2, "0"),
  tag: ["UGC", "Hook", "Product", "Testimonial", "Demo", "Story"][i % 6],
  src: null, // MP4 URL
  poster: null, // optional thumbnail image
}));

// Static ads — uniform squares. Set `src` to an image path/URL to go live.
const STATICS = Array.from({ length: 24 }).map((_, i) => ({
  id: "ad-" + (i + 1),
  label: "static ad " + String(i + 1).padStart(2, "0"),
  src: null, // image URL
}));

const FAQS = [
  {
    q: "How does the “beat your ads or you don’t pay” guarantee work?",
    a: "We build AI-generated creatives and run them head-to-head against your current best performer. If our ads don’t outperform on the metric we agree on up front — usually CTR, CPA or ROAS — you don’t pay for that batch. Simple as that. We define the win condition together before a single ad goes live.",
  },
  {
    q: "What exactly do you deliver each month?",
    a: "A rolling library of fresh creatives: short-form video reels, UGC-style hooks, and static ads sized for every placement. Volume scales with your plan, but every asset is built to be tested, iterated, and scaled — not just to look pretty in a deck.",
  },
  {
    q: "Are these really “AI” creatives — or just templates?",
    a: "Real production powered by AI tooling. We use generative models for ideation, scripting, visuals and variation, then a human creative team directs and polishes every asset. You get the speed of AI with the taste of a senior creative team.",
  },
  {
    q: "What platforms do you create for?",
    a: "Meta (Facebook & Instagram), TikTok, YouTube and the rest of the usual suspects. We deliver in every aspect ratio and placement so you’re never re-cropping or re-shooting to fit a new channel.",
  },
  {
    q: "How fast can we get started?",
    a: "Most clients are live with first creatives inside 7–10 days of the kickoff call. We start with a short strategy and asset audit, then go straight into production against your guarantee metric.",
  },
  {
    q: "Do I keep the rights to everything?",
    a: "Yes. Every creative we produce is yours to keep and run wherever you like, forever — no licensing games, no usage caps.",
  },
];

Object.assign(window, { CLIENTS, STACK, STATS, VIDEOS, STATICS, FAQS });
