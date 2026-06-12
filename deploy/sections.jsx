/* ============================================================
   Logos · Trust · Videos · Statics · FAQ · CTA · Footer
   ============================================================ */

/* ---- Client logos marquee ---- */
function Logos() {
  const row = [...CLIENTS, ...CLIENTS];
  return (
    <section className="logos-band" aria-label="Brands we work with">
      <div className="wrap">
        <p className="logos-kicker">Trusted by performance teams at 200+ brands</p>
      </div>
      <div className="marquee">
        <div className="marquee-track">
          {row.map((name, i) => (
            <div className="logo-cell" key={i}>
              <span className="logo-ph">{name}</span>
            </div>
          ))}
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
function TrustBadge({ platform, score, scoreLabel, sub, accent }) {
  return (
    <div className="trust-card">
      <div className="trust-top">
        <span className="trust-plat">{platform}</span>
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
    // snap fights animated scroll — relax it for the duration, then restore
    const prev = el.style.scrollSnapType;
    el.style.scrollSnapType = "none";
    el.scrollTo({ left: target, behavior: "smooth" });
    clearTimeout(el._snapT);
    el._snapT = setTimeout(() => { el.style.scrollSnapType = prev; }, 520);
  }, []);

  // pointer drag-to-scroll
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
        {REVIEWS.map((r, i) => <ReviewCard key={i} r={r} />)}
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
          <span className="eyebrow center">The receipts</span>
          <h2>Rated for results, not just vibes.</h2>
          <p>Hundreds of five-star reviews across Google, Trustpilot, Clutch, Fiverr &amp; Upwork — from the brands running our creatives every day.</p>
        </div>

        <div className="trust-grid">
          <TrustBadge platform="Trustpilot" score="4.9" scoreLabel="/5" accent="var(--accent)"
            sub="“Excellent” · 23 five-star reviews" />
          <TrustBadge platform="Google" score="5.0" scoreLabel="/5" accent="var(--gold)"
            sub="30+ five-star reviews" />
          <TrustBadge platform="Clutch" score="5.0" scoreLabel="/5" accent="var(--accent)"
            sub="15+ verified client reviews" />
          <TrustBadge platform="Fiverr & Upwork" score="5.0" scoreLabel="/5" accent="var(--gold)"
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
    if (el) { attachStreamSrc(el, v.src); el.play().catch(() => {}); }
  };
  const hoverOut = () => { const el = vidRef.current; if (el) { el.pause(); el.currentTime = 0; } };
  return (
    <button className="reel" onClick={() => onOpen(v, "video")} aria-label={"Play " + v.label}
      onMouseEnter={hoverIn} onMouseLeave={hoverOut} onFocus={hoverIn} onBlur={hoverOut}>
      {v.src ? (
        <video ref={vidRef} className="reel-media" poster={v.poster || undefined}
          muted loop playsInline preload="metadata" />
      ) : (
        <Placeholder label={v.label} style={{ position: "absolute", inset: 0, borderRadius: 14 }} />
      )}
      <span className="vsl-play sm"><PlayIcon size={20} /></span>
    </button>
  );
}

function Videos({ onOpen }) {
  return (
    <section className="section work-section" id="work">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow center">Video creatives</span>
          <h2>Scroll-stopping video, built to be tested.</h2>
          <p>UGC hooks, demos and story ads — a fresh batch every week, in every aspect ratio you run.</p>
        </div>
        <div className="reel-grid">
          {VIDEOS.map((v, i) => (
            <Reveal key={v.id} delay={(i % 5) * 60} className="reel-item">
              <ReelTile v={v} onOpen={onOpen} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Static ads grid (uniform squares) ---- */
function Statics({ onOpen }) {
  return (
    <section className="section statics-section" id="statics">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow center">Static ads</span>
          <h2>Thumb-stopping statics, at scale.</h2>
          <p>Every placement, every angle. {STATICS.length} of the hundreds we ship each month.</p>
        </div>
        <div className="static-grid">
          {STATICS.map((s, i) => (
            <button key={s.id} className="static-item" onClick={() => onOpen(s, "static")}
              aria-label={"View " + s.label}>
              {s.src ? (
                <img className="static-media" src={s.src} alt={s.label} loading="lazy" />
              ) : (
                <Placeholder label={s.label} style={{ position: "absolute", inset: 0 }} />
              )}
            </button>
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
          <span className="eyebrow center">Our AI stack</span>
          <h2>The tech behind every winning creative.</h2>
          <p>A purpose-built AI production pipeline — directed by a senior creative team, end to end.</p>
        </div>
        <div className="stack-grid">
          {STACK.map((s, i) => (
            <Reveal key={s.name} delay={(i % 3) * 80} className="stack-card">
              <span className="stack-step">{String(i + 1).padStart(2, "0")}</span>
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

/* ---- FAQ ---- */
function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section" id="faq">
      <div className="wrap faq-wrap">
        <div className="faq-aside">
          <span className="eyebrow">FAQ</span>
          <h2>Questions, answered.</h2>
          <p>Still unsure? Book a call and we’ll map your guarantee live.</p>
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
          <span className="pill"><span className="dot-live" /> Beat your ads — or you don’t pay</span>
          <h2 className="cta-h">Let’s build ads that beat<br />the ones you’re running now.</h2>
          <p className="cta-sub">Book a free strategy call. We’ll audit your current creatives and set the exact metric we have to beat — risk-free.</p>
          <div className="cta-actions">
            <a href="#" className="btn btn-primary btn-lg">{cta} <span aria-hidden="true">→</span></a>
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
        <p className="footer-tag">AI creatives that beat your current ads — or you don’t pay.</p>
        <span className="footer-copy">© {new Date().getFullYear()} TAS Digital</span>
      </div>
    </footer>
  );
}

Object.assign(window, { Logos, Stats, Trust, Videos, Statics, TechStack, FAQ, FinalCTA, Footer });
