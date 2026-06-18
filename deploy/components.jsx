/* ============================================================
   Shared building blocks
   ============================================================ */
const { useState, useEffect, useRef, useCallback } = React;

/* Striped placeholder w/ monospace label — stand-in for real media */
function Placeholder({ label, style, className = "", children }) {
  return (
    <div className={"ph " + className} style={style}>
      {children}
      {label && <span className="ph-label">{label}</span>}
    </div>
  );
}

/* Simple 5-star row (allowed primitive shape) */
function Stars({ size = 18, color = "var(--accent)", value = 5, gap = 3 }) {
  return (
    <span style={{ display: "inline-flex", gap }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24"
          fill={i < value ? color : "var(--line)"} aria-hidden="true">
          <path d="M12 2.5l2.9 6.06 6.6.86-4.85 4.6 1.23 6.58L12 17.9l-5.88 3.2 1.23-6.58L2.5 9.42l6.6-.86L12 2.5z" />
        </svg>
      ))}
    </span>
  );
}

/* Reveal-on-scroll: visible is the resting state; we ADD `pre` to hide until
   in view, then remove it. This way the element is never stuck hidden if a
   transition can't run (background tab, print, throttling). */
function Reveal({ children, delay = 0, as: Tag = "div", className = "", style, immediate = false }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(immediate);
  useEffect(() => {
    if (immediate) return;
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") { setShown(true); return; }
    const fb = setTimeout(() => setShown(true), 1000);
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setShown(true); clearTimeout(fb); io.disconnect(); } },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => { clearTimeout(fb); io.disconnect(); };
  }, [immediate]);
  return (
    <Tag ref={ref} className={"reveal " + (shown ? "" : "pre ") + className} style={{ transitionDelay: delay + "ms", ...style }}>
      {children}
    </Tag>
  );
}

/* Count-up number: parses "$90M+", "8,500+", "3×" and ticks the numeric part up when scrolled into view */
function CountUp({ value, duration = 1400 }) {
  const ref = useRef(null);
  const [disp, setDisp] = useState(value);
  useEffect(() => {
    const m = String(value).match(/^([^0-9]*)([\d,.]+)(.*)$/);
    const el = ref.current;
    if (!m || !el || typeof IntersectionObserver === "undefined" ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setDisp(value); return; }
    const prefix = m[1], suffix = m[3];
    const hasComma = m[2].includes(",");
    const target = parseFloat(m[2].replace(/,/g, ""));
    const fmt = (n) => prefix + (hasComma ? n.toLocaleString("en-US") : String(n)) + suffix;
    let raf, settle;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      // zero out only at the moment counting starts; snap to final value
      // even if rAF is frozen (print/export/throttled contexts)
      setDisp(fmt(0));
      settle = setTimeout(() => setDisp(value), duration + 500);
      const t0 = performance.now();
      const tick = (now) => {
        const p = Math.min(1, (now - t0) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        if (p < 1) { setDisp(fmt(Math.round(target * eased))); raf = requestAnimationFrame(tick); }
        else { setDisp(value); clearTimeout(settle); }
      };
      raf = requestAnimationFrame(tick);
    }, { threshold: 0.5 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); clearTimeout(settle); };
  }, [value, duration]);
  return <span ref={ref} className="countup">{disp}</span>;
}

/* Headline with word-by-word slide-in. "line1|line2" — line 2+ gets the accent color.
   `settled` forces words visible after a timeout so the headline can never be
   stuck hidden if CSS animations don't run (print/export/frozen timelines). */
function AnimatedHeadline({ text }) {
  let w = 0;
  const parts = String(text).split("|");
  const [settled, setSettled] = useState(false);
  useEffect(() => {
    setSettled(false);
    const t = setTimeout(() => setSettled(true), 1200);
    return () => clearTimeout(t);
  }, [text]);
  return (
    <span className={"hwrap" + (settled ? " settled" : "")}>
      {parts.map((line, li) => (
        <React.Fragment key={li}>
          {li > 0 && <br />}
          {line.trim().split(/\s+/).map((word, i) => (
            <React.Fragment key={i}>
              <span className={"hw" + (li > 0 && parts.length > 1 ? " hl" : "")}
                style={{ animationDelay: (w++ * 60) + "ms" }}>{word}</span>
              {" "}
            </React.Fragment>
          ))}
        </React.Fragment>
      ))}
    </span>
  );
}

/* ---- Cloudflare Stream / HLS helpers ----
   Reels + VSL are hosted on Cloudflare Stream and delivered as HLS.
   Safari plays HLS natively; everywhere else we attach hls.js (loaded in
   index.html). Sources are only attached on first interaction (hover/click)
   so non-engaging visitors cost ~zero Stream delivery. */
function isHlsSrc(src) { return /\.m3u8($|\?)/.test(src || ""); }

function attachStreamSrc(el, src) {
  if (!el || !src || el.dataset.srcAttached) return;
  el.dataset.srcAttached = "1";
  if (!isHlsSrc(src)) { el.src = src; return; }
  // Prefer hls.js wherever MSE is available (Chrome/Firefox/Edge — their
  // native canPlayType for HLS can report "maybe" yet stall). Native HLS is
  // the fallback for iOS Safari, where hls.js isn't supported.
  if (window.Hls && window.Hls.isSupported()) {
    const h = new window.Hls({ maxBufferLength: 12 });
    h.loadSource(src);
    h.attachMedia(el);
    el._hls = h;
  } else {
    el.src = src; // native HLS (iOS Safari) or last-resort fallback
  }
}

function detachStreamSrc(el) {
  if (!el) return;
  if (el._hls) { try { el._hls.destroy(); } catch (e) {} delete el._hls; }
  // Fully release the underlying MediaSource / decoders so we don't pile up
  // live media elements (browsers cap concurrent decoders — leaking them
  // breaks playback and drops audio until a refresh).
  el.removeAttribute("src");
  try { el.load(); } catch (e) {}
  delete el.dataset.srcAttached;
}

/* The VSL — 16:9 click-to-play facade. Accepts a YouTube ID or a Cloudflare
   Stream video UID (32-char hex); no media loads until the visitor clicks. */
function VSLPlayer({ videoId, badge }) {
  const [playing, setPlaying] = useState(false);
  const isStream = /^[0-9a-f]{32}$/.test(videoId || "");
  const embedSrc = isStream
    ? `https://${window.STREAM_SUB}/${videoId}/iframe?autoplay=true&preload=metadata`
    : `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
  const posterSrc = isStream
    ? `https://${window.STREAM_SUB}/${videoId}/thumbnails/thumbnail.jpg?time=2s&height=720`
    : null;
  return (
    <div className="vsl">
      {badge && <div className="vsl-badge">{badge}</div>}
      <div className="vsl-frame">
        {playing && videoId ? (
          <iframe
            src={embedSrc}
            title="TAS Digital VSL" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen
          />
        ) : (
          <button className="vsl-poster" onClick={() => setPlaying(true)} aria-label="Play video">
            {posterSrc ? (
              <img src={posterSrc} alt="" loading="eager"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
            ) : (
              <Placeholder label="VSL · 16:9" />
            )}
            <span className="vsl-play"><PlayIcon size={30} /></span>
            <span className="vsl-dur">1:13</span>
          </button>
        )}
      </div>
    </div>
  );
}

function PlayIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8 5.5v13a.8.8 0 0 0 1.22.68l10.4-6.5a.8.8 0 0 0 0-1.36L9.22 4.82A.8.8 0 0 0 8 5.5z" />
    </svg>
  );
}

/* Lightbox video — attaches the HLS source on mount (user already clicked).
   Tries to play WITH sound first; if the browser blocks unmuted autoplay it
   falls back to muted playback so the video always plays (controls let the
   viewer unmute). The HLS instance is destroyed on close. */
function LightboxVideo({ item }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.muted = false;
    attachStreamSrc(el, item.src);
    el.play().catch(() => { el.muted = true; el.play().catch(() => {}); });
    return () => detachStreamSrc(el);
  }, [item]);
  return (
    <video ref={ref} className="lb-video" poster={item.poster || undefined}
      controls autoPlay playsInline />
  );
}

/* Lightbox modal for videos / statics */
function Lightbox({ item, kind, onClose }) {
  // Lock background scroll for the modal's lifetime, and ALWAYS restore it on
  // unmount — no matter how the modal closes (button, backdrop, Escape). Empty
  // deps so the lock can't get stuck by re-renders / changing onClose identity.
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev || ""; };
  }, []);
  // Escape-to-close, reading the latest onClose via a ref.
  const closeRef = useRef(onClose);
  closeRef.current = onClose;
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") closeRef.current(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);
  if (!item) return null;
  const vertical = kind === "video";
  return (
    <div className="lb" onClick={onClose}>
      <button className="lb-close" onClick={onClose} aria-label="Close">×</button>
      <div className={"lb-stage " + (vertical ? "lb-vert" : "lb-flex")} onClick={(e) => e.stopPropagation()}>
        {vertical && item.src ? (
          <LightboxVideo item={item} />
        ) : !vertical && item.src ? (
          <img className="lb-img" src={item.src} alt={item.label} />
        ) : (
          <Placeholder
            label={item.label}
            style={vertical
              ? { aspectRatio: "9 / 16", height: "min(82vh, 720px)", borderRadius: 18 }
              : { aspectRatio: "1 / 1", maxHeight: "82vh", width: "min(620px, 88vw)", borderRadius: 18 }}>
            {vertical && <span className="vsl-play sm"><PlayIcon /></span>}
          </Placeholder>
        )}
      </div>
    </div>
  );
}

Object.assign(window, { Placeholder, Stars, Reveal, VSLPlayer, PlayIcon, Lightbox, CountUp, AnimatedHeadline, attachStreamSrc, detachStreamSrc });
