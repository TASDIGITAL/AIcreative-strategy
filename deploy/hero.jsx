/* ============================================================
   Nav + Hero (3 toggleable treatments)
   ============================================================ */

function Nav({ cta }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={"nav" + (scrolled ? " scrolled" : "")}>
      <div className="wrap nav-inner">
        <a className="brand" href="#top">
          <img className="brand-logo" src="assets/logo-white.png" alt="TAS Digital" />
        </a>
        <div className="nav-links">
          <a className="nav-link" href="#work">Work</a>
          <a className="nav-link" href="#stack">AI stack</a>
          <a className="nav-link" href="#reviews">Reviews</a>
          <a className="nav-link" href="#faq">FAQ</a>
          <a className="btn btn-primary" style={{ padding: "12px 22px", fontSize: 15 }} href="#book">{cta}</a>
        </div>
      </div>
    </nav>);

}

/* shared bits used across treatments */
function GuaranteePill() {
  return (
    <span className="pill">
      <span className="dot-live" /> Beat your ads — or you don’t pay
    </span>);

}
function HeroTrust({ cta }) {
  return (
    <div className="hero-cta-row">
      <a href="#book" className="btn btn-primary btn-lg">{cta} <span aria-hidden="true">→</span></a>
      <div className="hero-micro">
        <Stars size={15} />
        <span><strong>4.9/5</strong> from 200+ brands · no lock-in contracts</span>
      </div>
    </div>);

}

function Hero({ treatment, headline, sub, cta, videoId }) {
  const badge = <><span className="dot-live" /> Performance guarantee</>;

  /* A — Centered classic VSL */
  if (treatment === "centered") {
    return (
      <header className="hero hero-centered" id="top">
        <div className="hero-aura" />
        <div className="wrap">
          <Reveal immediate className="hero-top">
            <GuaranteePill />
            <h1 className="hero-h1">{headline}</h1>
            <p className="hero-sub">{sub}</p>
          </Reveal>
          <Reveal immediate delay={120} className="hero-video-wrap">
            <VSLPlayer videoId={videoId} badge={badge} />
          </Reveal>
          <Reveal immediate delay={200}><HeroTrust cta={cta} /></Reveal>
        </div>
      </header>);

  }

  /* B — Big statement headline, video below */
  if (treatment === "statement") {
    return (
      <header className="hero hero-statement" id="top">
        <div className="hero-aura" />
        <div className="wrap">
          <Reveal immediate>
            <GuaranteePill />
            <h1 className="hero-h1 huge">{headline}</h1>
            <div className="statement-grid">
              <p className="hero-sub">{sub}</p>
              <HeroTrust cta={cta} />
            </div>
          </Reveal>
          <Reveal immediate delay={140} className="hero-video-wrap wide">
            <VSLPlayer videoId={videoId} badge={badge} />
          </Reveal>
        </div>
      </header>);

  }

  /* C — Split: copy left, video right */
  return (
    <header className="hero hero-split" id="top">
      <div className="hero-aura side" />
      <div className="wrap split-grid">
        <Reveal immediate className="split-copy">
          <GuaranteePill />
          <h1 className="hero-h1">{headline}</h1>
          <p className="hero-sub">{sub}</p>
          <HeroTrust cta={cta} />
        </Reveal>
        <Reveal immediate delay={140} className="split-video">
          <VSLPlayer videoId={videoId} badge={badge} />
        </Reveal>
      </div>
    </header>);

}

Object.assign(window, { Nav, Hero });