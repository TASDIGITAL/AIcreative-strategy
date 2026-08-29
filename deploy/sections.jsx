/* ============================================================
   Logos · Trust · Videos · Statics · FAQ · CTA · Footer
   ============================================================ */

/* ---- Client logos marquee ---- */
function Logos() {
  return (
    <section className="logos-band" aria-label="Brands we work with">
      <div className="wrap">
        <p className="logos-kicker">Trusted by performance teams at 200+ brands</p>
      </div>
      <div className="logos-strip-mq">
        <div className="logos-strip-track">
          <img className="logos-strip" src="assets/clients-strip.png" alt="Client logos" />
          <img className="logos-strip" src="assets/clients-strip.png" alt="" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

/* ---- Proof numbers band ---- */
function Stats() {
  return (
    <section className="stats-band" aria-label="Results in numbers">
      <div className="wrap stats-grid">
        {STATS.map((s, i) => (
          <Reveal key={i} delay={i * 90} className="stat-cell">
            <div className="stat-value"><CountUp value={s.value} /></div>
            <p className="stat-label">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---- Trust / reviews ---- */
/* ---- Review platform logos (clickable) ---- */
const PLAT = {
  trustpilot: { name: "Trustpilot", href: "https://www.trustpilot.com/review/tas-digital.com", ico: (<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#00B67A" d="M17.227 16.67l2.19 6.742-7.413-5.388 5.223-1.354zM24 9.31h-9.165L12.005.589l-2.84 8.723L0 9.3l7.422 5.397-2.84 8.714 7.422-5.388 4.583-3.326L24 9.311z" /></svg>) },
  google: { name: "Google", href: "https://www.google.com/search?sca_esv=600194805&hl=en-GB&authuser=0&tbm=lcl&q=TAS+Digital+Reviews&rflfq=1&num=20&rldimm=8934839716947509311&sa=X#lkt=LocalPoiReviews", ico: (<svg viewBox="0 0 48 48" aria-hidden="true"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" /><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" /><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" /><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" /></svg>) },
  clutch: { name: "Clutch", href: "https://clutch.co/profile/tas-digital-0", nameStyle: { color: "#FF3D2E" } },
  fiverr: { name: "Fiverr", href: "https://www.fiverr.com/agencies/tasdigital", ico: (<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#1DBF73" d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-.85c-.546 0-.84.41-.84 1.092v2.466h-1.61v-3.558h-.684c-.547 0-.84.41-.84 1.092v2.466h-1.61v-4.874h1.61v.74c.264-.574.626-.74 1.163-.74h1.972v.74c.264-.574.625-.74 1.162-.74h.527v1.316zm-6.786 1.501h-3.359c.088.546.43.858 1.006.858.43 0 .732-.175.83-.487l1.425.4c-.351.848-1.22 1.364-2.255 1.364-1.748 0-2.549-1.355-2.549-2.515 0-1.14.703-2.505 2.45-2.505 1.856 0 2.471 1.384 2.471 2.408 0 .224-.01.37-.02.477zm-1.562-.945c-.04-.42-.342-.81-.889-.81-.508 0-.81.225-.908.81h1.797zM7.508 15.44h1.416l1.767-4.874h-1.62l-.86 2.837-.878-2.837H5.72l1.787 4.874zm-6.6 0H2.51v-3.558h1.524v3.558h1.591v-4.874H2.51v-.302c0-.332.235-.536.606-.536h.918V8.412H2.85c-1.162 0-1.943.712-1.943 1.755v.4H0v1.316h.908v3.558z" /></svg>) },
  upwork: { name: "Upwork", href: "https://www.upwork.com/freelancers/ecommgrowth?mp_source=share", ico: (<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#6FDA44" d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" /></svg>) },
};

function PlatformLink({ k }) {
  const p = PLAT[k];
  return (
    <a className="trust-logo" href={p.href} target="_blank" rel="noopener noreferrer" aria-label={p.name + " reviews"}>
      {p.ico ? <span className="trust-logo-ico">{p.ico}</span> : null}
      <span className="trust-logo-name" style={p.nameStyle || null}>{p.name}</span>
    </a>
  );
}

function TrustBadge({ logos, score, scoreLabel, sub, accent }) {
  return (
    <div className="trust-card">
      <div className="trust-top">
        <span className="trust-plat">{logos.map((k) => <PlatformLink key={k} k={k} />)}</span>
        <Stars size={19} color={accent} />
      </div>
      <div className="trust-score" style={{ color: accent }}>
        {score}<span>{scoreLabel}</span>
      </div>
      <p className="trust-sub">{sub}</p>
    </div>
  );
}

const REVIEWS = [
  { name: "Blackout Coffee Co.", role: "DTC coffee brand", platform: "Google", text: "Talal and his team give their all to make you a happy customer. Been a customer for over a year and our sales have grown from $50k to $600k a month. Great people that know what they are doing." },
  { name: "Hannah Hoskins", role: "Founder", platform: "Google", text: "The proof is completely in my sales. They’ve managed to get 6 times the amount spent on ads, massively increasing my revenue. I can’t actually keep stock in long enough at the moment!" },
  { name: "Luke Miller", role: "DTC brand owner", platform: "Trustpilot", text: "After going through 4 agencies over 4 years we have finally found a long-term partner for our paid ads and creative. Communication is the best I’ve ever experienced and our sales have increased substantially since partnering with them." },
  { name: "Ilkka Mattila", role: "Performance marketing client", platform: "Trustpilot", text: "Ad production, concept creation, and media buying under one roof was exactly what we were missing. TAS is not just an agency — it’s a process-driven growth partner with genuine out-of-the-box thinking." },
  { name: "Patrik Šulla", role: "Business owner", platform: "Google", text: "An absolute game-changer. They’ve taken our Facebook campaigns to the next level, helping us double our sales and giving us space to focus on growing our company. One of our best decisions." },
  { name: "Achilleas Petris", role: "Gratsi Wine", platform: "Google", text: "They’ve done a great job executing our ad concepts, iterating quickly based on performance, and incorporating feedback across both static and UGC video ads. The process feels smooth." },
  { name: "Ali Zia", role: "Mattress Central", platform: "Trustpilot", text: "High-quality creative content and ad campaigns focused on driving real ROI rather than just generating traffic. We’ve seen significant improvements in our ad performance, customer engagement, and overall creative output." },
  { name: "Luca Bisacchi", role: "Agency partner", platform: "Trustpilot", text: "We’ve scaled an account’s ad spend to $70k per month while generating 40+ creative ads monthly. Their expertise in creating engaging, effective ads has been crucial to our success." },
  { name: "G. Stouffer", role: "Ecommerce founder", platform: "Trustpilot", text: "Before TAS Digital, our ad account was a messy headache. Now it’s a finely-tuned revenue engine. They built a complete, cogent creative strategy focused on the customer experience that now drives the bulk of our revenue. A partner that focuses relentlessly on revenue and strategic growth." },
  { name: "Alec Brodie", role: "Creative lead", platform: "Trustpilot", text: "An essential video partner, especially in producing high-performing UGC content. Their ability to consistently deliver a high volume of creatives keeps our creative flywheel moving." },
  { name: "Ronen Chen", role: "Brand owner", platform: "Google", text: "We started 2 months ago and I’m already so impressed — I really feel I’m in good hands. Talal is super professional and his team is so eager to succeed. The results are coming in." },
  { name: "James Griffin", role: "DTC founder", platform: "Trustpilot", text: "They’re not just an advertising company — they feel like part of our team and consistently go above and beyond to help us grow. A truly symbiotic relationship." },
  { name: "Gilbert Hasballa", role: "Marketing lead", platform: "Trustpilot", text: "Amazing for our ad creative! They helped us sharpen our strategy and we quickly saw a 30% lift in engagement and higher conversions. Knowledgeable, easy to work with, and truly cares about getting results." },
  { name: "Verified Client", role: "via Clutch", platform: "Clutch", text: "What truly sets TAS Digital apart is their teamwork and well-structured approach. They delivered rapid results within a month and improved ad performance significantly." },
  { name: "Kimani Oletu", role: "Brand owner", platform: "Google", text: "Working with TAS Digital has been a fantastic experience. They are a highly organized agency and have done an excellent job creating new and innovative video creative for our ads in the international market. Highly recommend them!" },
  { name: "Micke Walles", role: "Ecommerce owner", platform: "Google", text: "We had a fantastic team that truly listened to our needs and adapted to our budget. What I appreciated the most was their cost-efficient approach to spending. Our sales have increased, and I am very satisfied with the work they have done!" },
  { name: "Bernardo Carreira", role: "CEO, 8000Kicks", platform: "Clutch", text: "Their focus on delivering results was impressive. TAS Digital delivered measurable results, improving our ROAS. Their structured, efficient workflow and results-oriented approach made them stand out." },
  { name: "Andrew Thony", role: "Owner, ecommerce brand", platform: "Clutch", text: "TAS Digital’s attention to detail in their reports and ability to learn about my product and market are impressive. They’ve helped us grow sales by 35% over several quarters, with clear increases in traffic and ROAS." },
  { name: "Ali Essaidi", role: "CEO, marketing management co.", platform: "Clutch", text: "TAS Digital’s organized and structured approach is impressive. We’ve seen an improvement in our conversion rates and cost per lead, and the team consistently delivers on time and proactively communicates." },
  { name: "Tue Rasmussen", role: "Business owner", platform: "Google", text: "Excellent agency. Would recommend in regards to Meta and Google PPC." },
  { name: "Ishat Kalra", role: "Ecommerce lead", platform: "Google", text: "Best advertising company. Helped a lot with creatives. Highly recommended." },
  { name: "Majd Almaamoun", role: "Brand owner", platform: "Google", text: "TAS Digital is consistently helping us with Meta Ads, Google Ads and funnel strategies. The team is patient and experienced — after we implemented their strategies, we saw a big difference in our results." },
  { name: "Chiara Barbara Madeddu", role: "Marketing lead", platform: "Google", text: "Our weekly advertising consultations with TAS Digital are insightful — the team is always helping with strategy, creative ideas, targeting, and sometimes they go deep into landing page optimisations as well." },
  { name: "Mathieu Minne", role: "Brand owner", platform: "Google", text: "We are working with TAS for months now — they are passionate with what they do, and they understand clearly how to create advertising strategies with Meta ads and Google Ads." },
  { name: "marisa pesce", role: "Ecommerce owner", platform: "Google", text: "Great team and great harmony between all advertising channels — they run our Meta and Google ads with consistent designs and results." },
  { name: "Badr G", role: "Brand owner", platform: "Google", text: "Things are going really well — the stats have noticeably improved since we started collaborating. Click-throughs and conversions are all looking much better. Your strategy and adjustments are clearly paying off." },
  { name: "Lisa Larina", role: "Ecommerce brand", platform: "Google", text: "We are having an excellent experience working with TAS Digital on the strategic execution of Meta ads for our ecommerce brand. Their expertise and approach led to outstanding results — significantly increased traffic, conversions, and sales." },
  { name: "Besho Adel", role: "Ecommerce founder", platform: "Google", text: "TAS Digital agency is fantastic to work with. The team is professional and diverse, with members working remotely from all over the world. Their expertise in e-commerce growth is impressive." },
  { name: "Mónica", role: "Agency partner", platform: "Google", text: "We’ve found a valuable partner who plays a crucial role in helping us deliver exceptional digital advertising services to our clients. Their expertise and collaborative approach have been pivotal." },
  { name: "Almond Hair", role: "Ecommerce brand", platform: "Google", text: "A professional, disciplined and successful team. Everything is planned and programmed. After we started working with this team, we experienced significant increases in our sales. Quality teammates, all experts in their fields." },
  { name: "Ali G", role: "Founder, Leading Care", platform: "Clutch", text: "They are good in every sense. TAS Digital’s campaigns have increased our profitability. The team is professional and delivers work on time, according to schedule." },
  { name: "Anonymous", role: "Owner, e-commerce company", platform: "Clutch", text: "In a sea of non-performing digital agencies, it is great to work with nice people who deliver what they promise. Their work has resulted in positive ROAS and boosted our profits." },
  { name: "Billie Florsheim", role: "Fashion brand", platform: "Clutch", text: "I’m happy with their work. The team’s project management approach was perfect, and they delivered great results managing our ads across our Google and Meta accounts." },
  { name: "Filipe Santos", role: "CMO, digital platform", platform: "Google", text: "TAS Digital completely exceeded my expectations — they feel more like a partner than just another agency. In less than a month they proved they could deliver results: from managing my digital ads to developing creative strategy, research and targeting, they’ve been very pro!" },
  { name: "FWD Social", role: "Agency", platform: "Google", text: "Expertly and thoroughly done from start to finish. Excellent job, definitely recommend!" },
  { name: "joeseiky", role: "via Fiverr", platform: "Fiverr", text: "These guys have the right team and system for creative strategy. They know what they’re doing. If you run D2C and need creatives, this team is for you." },
  { name: "Verified Client", role: "via Upwork", platform: "Upwork", text: "Exceptional work in creatives and UGC management, coming up with innovative concepts that truly elevated our project. Communication was seamless and enjoyable." },
];

function ReviewCard({ r }) {
  return (
    <figure className="review-card">
      <div className="review-head">
        <Stars size={15} />
        <span className="review-plat">{r.platform}</span>
      </div>
      <blockquote className="review-text">“{r.text}”</blockquote>
      <figcaption className="review-who">
        <span className="review-ava">{r.name[0]}</span>
        <span><strong>{r.name}</strong><span>{r.role}</span></span>
      </figcaption>
    </figure>
  );
}

function ReviewCarousel() {
  const trackRef = useRef(null);
  const drag = useRef({ down: false, startX: 0, startScroll: 0, moved: false });

  const nudge = useCallback((dir) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector(".review-card");
    const step = card ? card.offsetWidth + 20 : el.clientWidth * 0.8;
    const max = el.scrollWidth - el.clientWidth;
    const target = Math.max(0, Math.min(max, el.scrollLeft + dir * step));
    const prev = el.style.scrollSnapType;
    el.style.scrollSnapType = "none";
    el.scrollTo({ left: target, behavior: "smooth" });
    clearTimeout(el._snapT);
    el._snapT = setTimeout(() => { el.style.scrollSnapType = prev; }, 520);
  }, []);

  const onDown = (e) => {
    const el = trackRef.current;
    drag.current = { down: true, startX: e.clientX, startScroll: el.scrollLeft, moved: false };
    el.setPointerCapture?.(e.pointerId);
  };
  const onMove = (e) => {
    if (!drag.current.down) return;
    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > 4) drag.current.moved = true;
    trackRef.current.scrollLeft = drag.current.startScroll - dx;
  };
  const onUp = (e) => {
    drag.current.down = false;
    trackRef.current.releasePointerCapture?.(e.pointerId);
  };

  return (
    <div className="carousel">
      <div
        className="review-track"
        ref={trackRef}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerCancel={onUp}
        onClickCapture={(e) => { if (drag.current.moved) { e.preventDefault(); e.stopPropagation(); } }}
      >
        {[...REVIEWS].sort((a, b) => {
          const order = ["Gilbert Hasballa", "Kimani Oletu", "Ali Zia", "Luca Bisacchi", "Achilleas Petris", "G. Stouffer", "Alec Brodie"];
          const ai = order.indexOf(a.name), bi = order.indexOf(b.name);
          return (ai < 0 ? 99 : ai) - (bi < 0 ? 99 : bi);
        }).map((r, i) => <ReviewCard key={i} r={r} />)}
      </div>
      <div className="carousel-nav">
        <button className="car-btn" onClick={() => nudge(-1)} aria-label="Previous reviews">←</button>
        <button className="car-btn" onClick={() => nudge(1)} aria-label="More reviews">→</button>
      </div>
    </div>
  );
}

function Trust() {
  return (
    <section className="section" id="reviews">
      <div className="wrap">
        <div className="section-head">
          <h2>Rated for results, not just vibes.</h2>
          <p>Hundreds of five-star reviews across Google, Trustpilot, Clutch, Fiverr &amp; Upwork — from the brands running our creatives every day.</p>
        </div>

        <div className="trust-grid">
          <TrustBadge logos={["trustpilot"]} score="4.9" scoreLabel="/5" accent="var(--accent)"
            sub="“Excellent” · 23 five-star reviews" />
          <TrustBadge logos={["google"]} score="5.0" scoreLabel="/5" accent="var(--gold)"
            sub="30+ five-star reviews" />
          <TrustBadge logos={["clutch"]} score="5.0" scoreLabel="/5" accent="var(--accent)"
            sub="15+ verified client reviews" />
          <TrustBadge logos={["fiverr", "upwork"]} score="5.0" scoreLabel="/5" accent="var(--gold)"
            sub="Hundreds of five-star reviews" />
        </div>
      </div>

      <ReviewCarousel />
    </section>
  );
}

/* ---- Video reels grid ----
   Tiles show the Stream thumbnail (poster) only; the HLS source is attached
   lazily on first hover/focus so idle visitors cost ~zero delivery. */
function ReelTile({ v, onOpen }) {
  const vidRef = useRef(null);
  const hoverIn = () => {
    const el = vidRef.current;
    if (!el) return;
    el.muted = true;                 // hover previews are always silent
    attachStreamSrc(el, v.src);
    el.play().catch(() => {});
  };
  // Tear the player down on mouse-out so only the hovered tile keeps a live
  // media decoder. Leaving them all alive exhausts the browser's decoder pool
  // and breaks playback / drops audio until a refresh.
  const hoverOut = () => { detachStreamSrc(vidRef.current); };
  // Free the decoder if the tile unmounts while still playing.
  useEffect(() => () => detachStreamSrc(vidRef.current), []);
  return (
    <button className="reel" onClick={() => onOpen(v, "video")} aria-label={"Play " + v.label}
      onMouseEnter={hoverIn} onMouseLeave={hoverOut} onFocus={hoverIn} onBlur={hoverOut}>
      {v.src ? (
        <video ref={vidRef} className="reel-media" poster={v.poster || undefined}
          muted loop playsInline preload="none" />
      ) : (
        <Placeholder label={v.label} style={{ position: "absolute", inset: 0, borderRadius: 14 }} />
      )}
      <span className="vsl-play sm"><PlayIcon size={20} /></span>
    </button>
  );
}

function Videos({ onOpen }) {
  const half = Math.ceil(VIDEOS.length / 2);
  const rows = [VIDEOS.slice(0, half), VIDEOS.slice(half)];
  return (
    <section className="section work-section" id="work">
      <div className="wrap">
        <div className="section-head">
          <h2>Animated ads people stop to watch.</h2>
          <p>Motion, character and story — the ad format unlocking fresh reach and new audiences, in every aspect ratio you run.</p>
        </div>
      </div>
      <div className="reel-marquee">
        {rows.map((row, r) => (
          <div className={"reel-row " + (r === 0 ? "a" : "b")} key={r}>
            {[...row, ...row].map((v, i) => (
              <div className="reel-mq" key={r + "-" + i} aria-hidden={i >= row.length}>
                <ReelTile v={v} onOpen={onOpen} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---- Static ads — auto-scrolling carousel (non-interactive) ---- */
function Statics() {
  const row = [...STATICS, ...STATICS];
  return (
    <section className="section statics-section" id="statics">
      <div className="wrap">
        <div className="section-head">
          <h2>Matching statics for every story.</h2>
          <p>Every placement, every angle — statics that carry the same characters and world as your animation.</p>
        </div>
      </div>
      <div className="marquee statics-marquee">
        <div className="marquee-track statics-track">
          {row.map((s, i) => (
            <div className={"static-cell" + (s.vertical ? " static-cell--v" : "")} key={s.id + "-" + i} aria-hidden={i >= STATICS.length}>
              <img className="static-media" src={s.src} alt={s.label} loading="lazy" decoding="async" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- AI tech stack ---- */
function TechStack() {
  return (
    <section className="section stack-section" id="stack">
      <div className="wrap">
        <div className="section-head">
          <h2>The tech behind every winning creative.</h2>
          <p>A purpose-built AI production pipeline — directed by a senior creative team, end to end.</p>
        </div>
        <div className="stack-grid">
          {STACK.map((s, i) => (
            <Reveal key={s.name} delay={(i % 3) * 80} className="stack-card">
              <span className="stack-step">{String(i + 1).padStart(2, "0")}</span>
              <img className={"stack-logo" + (s.logo.endsWith(".png") ? " stack-logo--chip" : "")} src={"assets/logos/" + s.logo} alt={s.name + " logo"} />
              <div className="stack-name">{s.name}</div>
              <span className="stack-role">{s.role}</span>
              <p className="stack-note">{s.note}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Process (animated) ---- */
function Process() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % PROCESS.length), 1500);
    return () => clearInterval(id);
  }, []);
  return (
    <section className="section process-section" id="process">
      <div className="wrap">
        <div className="section-head">
          <h2>How we make every animation ad.</h2>
          <p>Eight steps from blank page to finished, animated creative — checked frame by frame.</p>
        </div>
        <div className="process-flow">
          {PROCESS.map((p, i) => (
            <div className={"proc-step" + (i === active ? " active" : "") + (i < active ? " done" : "")} key={i}>
              <div className="proc-node"><span>{i + 1}</span></div>
              <div className="proc-label"><strong>{p.t}</strong><span>{p.d}</span></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Pricing ---- */
function Comparison() {
  const oldWay = [
    { role: "Scriptwriter", cost: "$250" },
    { role: "Storyboard artist", cost: "$400" },
    { role: "Illustrator / character design", cost: "$800" },
    { role: "Motion designer / animator", cost: "$500" },
    { role: "Editor & sound design", cost: "$150" },
  ];
  return (
    <section className="section compare-section" id="compare">
      <div className="wrap">
        <div className="section-head">
          <h2>Real animation used to cost a fortune.</h2>
          <p>To make one animated ad the old way, you had to hire a whole crew — and wait weeks. We do it with AI and a senior creative team, for a fraction of the price.</p>
        </div>
        <div className="compare-grid">
          <div className="compare-vs" aria-hidden="true">VS</div>
          <div className="compare-card old">
            <div className="compare-tag">The old way · one video</div>
            <ul className="compare-list">
              {oldWay.map((o) => (
                <li key={o.role}><span>{o.role}</span><span className="compare-cost">{o.cost}</span></li>
              ))}
            </ul>
            <div className="compare-total">
              <span>Around</span>
              <strong>$2,100<span className="per">/ video</span></strong>
              <span className="compare-time">3–5 weeks · per single video</span>
            </div>
          </div>
          <div className="compare-card tas">
            <div className="compare-tag">With TAS · AI animation</div>
            <ul className="compare-list">
              <li><span>Idea, concept &amp; script</span><span className="compare-cost">Included</span></li>
              <li><span>Characters, worlds &amp; motion</span><span className="compare-cost">Included</span></li>
              <li><span>Voiceover &amp; final edit</span><span className="compare-cost">Included</span></li>
              <li><span>2 variations per video</span><span className="compare-cost">Included</span></li>
              <li><span>3 free revisions</span><span className="compare-cost">Included</span></li>
              <li><span>Senior creative direction</span><span className="compare-cost">Included</span></li>
            </ul>
            <div className="compare-total">
              <span>From</span>
              <strong>$370<span className="per">/ video</span></strong>
              <span className="compare-time">Days, not weeks · at scale</span>
            </div>
            <a href="#book" className="btn btn-primary compare-cta">Partner with us →</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="section pricing-section" id="pricing">
      <div className="wrap">
        <div className="section-head">
          <h2>AI animation ads, priced to scale.</h2>
          <p>Full concept-to-delivery animation ad production — idea, concept, script, generation and editing — with 3 free revisions on every package.</p>
        </div>
        <div className="pricing-grid">
          {PRICING.map((p) => (
            <div className={"price-card" + (p.highlight ? " feat" : "")} key={p.name}>
              {p.badge ? <span className="price-badge">{p.badge}</span> : null}
              <div className="price-name">{p.name}</div>
              <p className="price-lead">{p.lead}</p>
              <div className="price-amount">
                <span className="num">{p.perVideo}</span>
                <span className="unit">{p.unit}</span>
              </div>
              <div className="price-total">{p.total}</div>
              <ul className="price-feats">
                {p.features.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
              <a href="#book" className="btn btn-primary price-cta">Partner with us →</a>
            </div>
          ))}
        </div>
        <p className="price-note">Every package includes full conceptualization + 3 free revisions. Prices are per video; add 2 variations per video on any package.</p>
      </div>
    </section>
  );
}

/* ---- FAQ ---- */
function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section" id="faq">
      <div className="wrap faq-wrap">
        <div className="faq-aside">
          <h2>Questions, answered.</h2>
          <p>Still unsure? Book a call and we’ll map your first animation concepts live.</p>
          <a href="#book" className="btn btn-ghost" style={{ marginTop: 8 }}>Book a call →</a>
        </div>
        <div className="faq-list">
          {FAQS.map((f, i) => (
            <div className={"faq-item" + (open === i ? " open" : "")} key={i}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{f.q}</span>
                <span className="faq-icon" aria-hidden="true">{open === i ? "−" : "+"}</span>
              </button>
              <div className="faq-a"><p>{f.a}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Final CTA ---- */
function FinalCTA({ cta }) {
  return (
    <section className="section cta-section" id="book">
      <div className="wrap">
        <div className="cta-box">
          <div className="cta-aura" />
          <h2 className="cta-h">Let’s make AI ads convert.</h2>
          <p className="cta-sub">Book a free strategy call. We’ll look at your funnel and map the animation concepts that open up your next audience.</p>
          <div className="cta-actions">
            <a href="https://api.leadconnector.com/widget/booking/xLLOotTNuy3Hkhfg6Oi0?utm_source=aicreatives_lp&utm_medium=landing_page&utm_campaign=aicreatives" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">{cta} <span aria-hidden="true">→</span></a>
            <span className="cta-note">30 min · no pitch deck · walk away with a plan</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <a className="brand" href="#top"><img className="brand-logo" src="assets/logo-white.png" alt="TAS Digital" /></a>
        <p className="footer-tag">AI animation ads that unlock new audiences.</p>
        <div className="footer-right">
          <a className="footer-social" href="https://www.instagram.com/tasdigital/" target="_blank" rel="noopener noreferrer" aria-label="TAS Digital on Instagram">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" /></svg>
          </a>
          <span className="footer-copy">© {new Date().getFullYear()} TAS Digital</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Logos, Stats, Trust, Videos, Statics, TechStack, Process, Comparison, Pricing, FAQ, FinalCTA, Footer });

