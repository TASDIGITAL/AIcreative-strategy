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

// ---- Cloudflare media config ----
// Stream customer subdomain (Stream → Account details) + Images account hash
// (Images → Overview). Reels play via HLS (hls.js / native Safari).
const STREAM_SUB = "customer-nu01kh566wd16uur.cloudflarestream.com";
const IMG_HASH = "pnaB_hDVwnWnAmYyXpGy3A";
const streamHls = (uid) => "https://" + STREAM_SUB + "/" + uid + "/manifest/video.m3u8";
const streamPoster = (uid) => "https://" + STREAM_SUB + "/" + uid + "/thumbnails/thumbnail.jpg?time=1s&height=640";

// Video creatives — vertical 9:16 reels, hosted on Cloudflare Stream.
const REEL_UIDS = [
  "d5f1e57043ca048efa9870854da440a5", // AV41 — AI Concept "We do the work"
  "de8e9694fbdfbafdf56a2db95d12ce56", // TV7 — Video Ad AI Concept
  "8d0237ecfc1c83648e554672a380d05d", // TV1
  "659ed623b88636d6e1c9e8690caa2a15", // TV01 — AI Animation Before & After
  "cb1f97ee401473eaf42808e2ecadb604", // TV38
  "5f66eba552293b84011dfbdd02845cc9", // TV33
  "0f3632df91bd73e447efa4571d632664", // TV26 — Taste Reawakened
  "aacb9b272cdd28ba38ad70e77deda984", // AV34
  "9fa68d05bd9d274aa814a1ca6b752e08", // AV48 — Your grandma called
  "ee8d91803292b3ef427e657e42a13962", // TV2
  "ed18a1d6180c1facc666315200dc66fd", // TAS-VID01 — Wool stop motion
  "533088bad8b0b31268cd1ae33542f670", // Ai video V1
  "92e58ee865de78645a9466dd21636f8d", // Final Video Raw 3
  "bd8ce262143dc0495aa17e9958f6ce54", // ACH Artem
  "b8529e33d203490ff0c095dd56c09e3d", // ACH Maks
  "de979d0b5aeaddd2d5016af545bcfbeb", // ACH Max
  "10aeef699f910fb0692d00b2405a2608", // ACH Illia
  "f4c6e3fbae594a9823aaa87530e4291c", // ACH Dmyt
  "4377e273a9b785bba1d9b02f9b7b1a4d", // ACH Alks
  "57e7ba67f1eff67625c8f0ce7801d2c9", // FC Gin
  "edd432f4e7d9449211f14d800bd8c943", // ACH TRS
  "3f5b0eba69ee8fff951b871de5d4b687", // ACH Gin 104
  "0767f18821b06f002b514556a4af8841", // ACH Alexs
  "0edf3f71d5638a3976608dc7810a65b4", // ACH Nat
];
const VIDEOS = REEL_UIDS.map((uid, i) => ({
  id: "vid-" + (i + 1),
  label: "reel " + String(i + 1).padStart(2, "0"),
  src: streamHls(uid),
  poster: streamPoster(uid),
}));

// Static ads — uniform squares, hosted on Cloudflare Images.
const STATIC_IDS = [
  "de0256f8-9c4b-40d3-792e-976017299700",
  "eb21f2ba-6c77-47a9-8e99-7a3bd7425800",
  "31be8a79-66bc-4349-4c39-13f33c379b00",
  "fef41596-771d-4ff5-5115-152ca3954500",
  "26b31ffa-c04b-404c-bf1b-c66abb509b00",
  "22d51c8b-7cd9-40aa-53b2-01fba8e2e000",
  "7029d866-bdf2-44af-d3a0-d7c103f48400",
  "0fdebcaf-0b34-416e-0239-4f404fce4000",
  "1cea601e-f64d-4737-5304-9fa978416a00",
  "4521fc18-19c9-4fbc-bbcc-36d35d5b4200",
  "330adf96-2349-44ca-9bae-415dc942c500",
  "62280aa3-3fbf-4cc5-3566-c6ff2f2e8a00",
  "b7b8bcb1-74a5-48b8-c40f-55a346ba1600",
  "4165f6f5-8ea2-4bb4-661d-31f40d91fc00",
  "01509590-dec4-4ab2-2965-3f1615d2d600",
  "e40a0385-874c-4ab8-9ec1-edd864e62f00",
  "99d8dc6a-2305-4cef-ff26-50ec5a7a9300",
  "e3dd0a0f-383a-4471-15a3-1d4ed6781500",
  "5342a718-af14-4715-6eca-acfda4a0a100",
  "a7fd289c-a0b0-41c1-69d8-eaf3d8943300",
  "2f0a57c6-ab4a-43d6-09a6-964f8301c600",
  "9b24bc48-ccaf-449d-d8f5-a0478f46fb00",
  "dd6b5b0d-991c-4315-7685-5dcccb7fab00",
  "05f452e7-3d87-44b3-a72c-09152e4be700",
  "e53be6d6-7227-4b5d-cff2-66eb67780d00",
  "f7604390-7dce-458d-19c4-a2c2c9ad7e00",
  "24958447-c12f-4499-0e3f-a4c5f2d2fc00",
  "7c105582-d315-4dc6-019e-86108e9ec300",
  "d4a1ea90-cfb1-4404-f39b-e85b29f5ef00",
  "739e5993-8f68-4dda-15f3-2e1ad7764c00",
  "225c25c5-553b-4bc0-3c06-7c7eb8308200",
  "548b619d-a768-4f0e-dd6e-e304c35bbb00",
  "e529000b-3b9d-44f7-593e-8c07cf818c00",
  "97dc7386-b60e-4cb8-64f4-5bce4c37d200",
  "32eee552-340f-423f-989c-787af828a600",
  "8cb4a5cb-5b34-4e6b-f382-a1cc9872c000",
  "ef169a50-d2fd-4da4-0bb6-414e68e72300",
  "00c9b586-a8c3-45b3-8d07-896b77536f00",
  "769ee524-c680-4d60-aa66-0b1e32226300",
  "1e5a7cae-8f2c-4a02-aa9b-ca1abf1aa500",
  "7d291654-7c7d-4694-7b85-a2c08e2c4c00",
  "dab03d6b-3c1c-4e35-6ef3-41e44085d000",
  "c95312b5-c789-40d6-32a5-a388e5728500",
  "b0d62d58-eea6-452e-4cb9-4fa97304e300",
  "52b5c642-4aa7-448e-7c05-2265f380a500",
  "65965800-2f0d-4be3-d37b-4e54f167c400",
  "dc0fc724-def6-451d-1902-1356aae98300",
  "7f4f78f3-af1a-4083-23b8-5ea94e4fa800",
];
const STATICS = STATIC_IDS.map((id, i) => ({
  id: "ad-" + (i + 1),
  label: "static ad " + String(i + 1).padStart(2, "0"),
  src: "https://imagedelivery.net/" + IMG_HASH + "/" + id + "/public",
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

Object.assign(window, { CLIENTS, STACK, STATS, VIDEOS, STATICS, FAQS, STREAM_SUB });
