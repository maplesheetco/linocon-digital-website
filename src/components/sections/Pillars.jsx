import Reveal from '../Reveal'

function BrowserVisual() {
  return (
    <div className="w-full max-w-md rounded-2xl bg-surface border border-border overflow-hidden shadow-2xl">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
        <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
      </div>
      <div className="p-6 flex flex-col gap-3">
        <div className="h-24 rounded-xl bg-gradient-brand opacity-90" />
        <div className="h-3 w-3/4 rounded-full bg-white/10" />
        <div className="h-3 w-1/2 rounded-full bg-white/10" />
        <div className="grid grid-cols-3 gap-3 mt-2">
          <div className="h-14 rounded-lg bg-white/5 border border-border" />
          <div className="h-14 rounded-lg bg-white/5 border border-border" />
          <div className="h-14 rounded-lg bg-white/5 border border-border" />
        </div>
      </div>
    </div>
  )
}

function SeoVisual() {
  return (
    <div className="w-full max-w-md rounded-2xl bg-surface border border-border p-8 shadow-2xl">
      <div className="flex items-center gap-2 px-4 h-11 rounded-full border border-border mb-8">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <circle cx="11" cy="11" r="7" stroke="#2E6BFF" strokeWidth="1.6" />
          <path d="M20 20l-4.3-4.3" stroke="#2E6BFF" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
        <span className="text-sm text-text-secondary">yoursite.com</span>
      </div>
      <svg viewBox="0 0 300 120" className="w-full h-28">
        <polyline
          points="0,100 50,90 100,70 150,75 200,40 250,30 300,10"
          fill="none"
          stroke="url(#seoLine)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient id="seoLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2E6BFF" />
            <stop offset="100%" stopColor="#FF6A3D" />
          </linearGradient>
        </defs>
      </svg>
      <div className="flex justify-between text-xs text-text-tertiary mt-2 font-semibold uppercase tracking-wider">
        <span>Week 1</span>
        <span>Week 12</span>
      </div>
    </div>
  )
}

function LinksVisual() {
  const nodes = [
    [40, 20], [200, 10], [280, 60], [220, 110], [60, 100], [10, 55],
  ]
  return (
    <div className="w-full max-w-md rounded-2xl bg-surface border border-border p-8 shadow-2xl flex items-center justify-center">
      <svg viewBox="0 0 300 130" className="w-full h-40">
        {nodes.map(([x, y], i) => (
          <line
            key={i}
            x1="150"
            y1="65"
            x2={x}
            y2={y}
            stroke="url(#linkGrad)"
            strokeWidth="1.5"
            opacity="0.6"
          />
        ))}
        <defs>
          <linearGradient id="linkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2E6BFF" />
            <stop offset="100%" stopColor="#FF6A3D" />
          </linearGradient>
        </defs>
        {nodes.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="8" fill="#1A1A24" stroke="#2A2A34" strokeWidth="1.5" />
        ))}
        <circle cx="150" cy="65" r="14" fill="url(#linkGrad)" />
      </svg>
    </div>
  )
}

const PILLARS = [
  {
    kicker: '01 — Website Builder',
    title: 'Sites built to convert, not just exist.',
    body: 'Custom-built, conversion-ready websites that load fast and turn visitors into leads — not another templated theme.',
    Visual: BrowserVisual,
  },
  {
    kicker: '02 — SEO Setup',
    title: 'A technical foundation Google can actually rank.',
    body: 'Complete on-page and technical SEO foundation — keyword mapping, site structure, and speed fixes so Google can actually rank you.',
    Visual: SeoVisual,
  },
  {
    kicker: '03 — Backlinks',
    title: 'Authority that compounds, not spam that gets penalized.',
    body: 'High-authority backlink building that moves your rankings — without the spammy links that get you penalized.',
    Visual: LinksVisual,
  },
]

export default function Pillars() {
  return (
    <section id="services" className="py-10">
      <Reveal className="max-w-6xl mx-auto px-6 md:px-10 pb-20 md:pb-28">
        <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight max-w-2xl">
          The foundation your rankings are built on.
        </h2>
      </Reveal>

      {PILLARS.map((p, i) => (
        <div
          key={p.title}
          className={`max-w-6xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center gap-12 md:gap-16 py-24 md:py-32 border-t border-border ${
            i % 2 === 1 ? 'md:flex-row-reverse' : ''
          }`}
        >
          <Reveal className="flex-1 flex flex-col items-start gap-5" y={36}>
            <span className="text-sm font-bold tracking-widest uppercase text-text-tertiary">
              {p.kicker}
            </span>
            <h3 className="font-display font-bold text-3xl md:text-4xl leading-tight">
              {p.title}
            </h3>
            <p className="text-lg text-text-secondary leading-relaxed max-w-md">{p.body}</p>
          </Reveal>
          <Reveal className="flex-1 flex justify-center" delay={0.15} y={36}>
            <p.Visual />
          </Reveal>
        </div>
      ))}
    </section>
  )
}
