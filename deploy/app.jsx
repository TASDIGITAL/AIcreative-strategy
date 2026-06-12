/* ============================================================
   App — composes the page + wires Tweaks
   ============================================================ */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroTreatment": "centered",
  "accent": "#9D7BFF",
  "headline": "AI ad creatives that beat your best ad.|Or you don’t pay.",
  "sub": "TAS Digital produces AI-powered video and static ads engineered to outperform whatever you’re running today — guaranteed.",
  "cta": "Book a call",
  "videoId": "b22cd8378f8eb0293c78ffc7b711c320"
}/*EDITMODE-END*/;

function renderHeadline(text) {
  return <AnimatedHeadline text={text} />;
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [lb, setLb] = useState(null); // {item, kind}

  // push accent into CSS
  useEffect(() => {
    document.documentElement.style.setProperty("--accent", t.accent);
  }, [t.accent]);

  const openLb = useCallback((item, kind) => setLb({ item, kind }), []);

  return (
    <>
      <Nav cta={t.cta} />
      <Hero
        treatment={t.heroTreatment}
        headline={renderHeadline(t.headline)}
        sub={t.sub}
        cta={t.cta}
        videoId={t.videoId}
      />
      <Logos />
      <Stats />
      <Trust />
      <Videos onOpen={openLb} />
      <Statics onOpen={openLb} />
      <TechStack />
      <FAQ />
      <FinalCTA cta={t.cta} />
      <Footer />

      {lb && <Lightbox item={lb.item} kind={lb.kind} onClose={() => setLb(null)} />}

      <TweaksPanel>
        <TweakSection label="Hero layout" />
        <TweakRadio
          label="Treatment" value={t.heroTreatment}
          options={[
            { value: "centered", label: "Centered" },
            { value: "statement", label: "Statement" },
            { value: "split", label: "Split" },
          ]}
          onChange={(v) => setTweak("heroTreatment", v)} />

        <TweakSection label="Brand accent" />
        <TweakColor
          label="Accent" value={t.accent}
          options={["#9D7BFF", "#7A2CC0", "#5B8DEF", "#C77DFF", "#22D3A0"]}
          onChange={(v) => setTweak("accent", v)} />

        <TweakSection label="Copy" />
        <TweakText label="Headline" value={t.headline} placeholder="Use | to break the line"
          onChange={(v) => setTweak("headline", v)} />
        <TweakText label="Sub-headline" value={t.sub}
          onChange={(v) => setTweak("sub", v)} />
        <TweakText label="CTA label" value={t.cta}
          onChange={(v) => setTweak("cta", v)} />

        <TweakSection label="VSL video" />
        <TweakText label="YouTube ID" value={t.videoId} placeholder="e.g. dQw4w9WgXcQ"
          onChange={(v) => setTweak("videoId", v)} />
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
