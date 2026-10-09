import { useId } from 'react'

// Illustrations used across the homepage. Pure SVG/CSS so they cost nothing
// to load.

function BrowserChrome({ url = 'yourbusiness.com', children, className = '' }) {
  return (
    <div
      className={`w-full rounded-2xl bg-surface border border-border overflow-hidden shadow-2xl shadow-black/50 ${className}`}
    >
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
        <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
        <span className="ml-3 flex-1 max-w-xs h-6 rounded-md bg-white/5 text-[11px] text-text-tertiary flex items-center px-3">
          {url}
        </span>
      </div>
      {children}
    </div>
  )
}

export function HeroDevice() {
  return (
    <BrowserChrome className="max-w-4xl">
      <div className="grid md:grid-cols-[1.3fr_1fr] gap-6 p-6 md:p-10">
        <div className="flex flex-col gap-4">
          <div className="h-3 w-24 rounded-full bg-orange/70" />
          <div className="h-7 md:h-9 w-11/12 rounded-lg bg-white/85" />
          <div className="h-7 md:h-9 w-2/3 rounded-lg bg-white/85" />
          <div className="h-3 w-full rounded-full bg-white/10 mt-2" />
          <div className="h-3 w-5/6 rounded-full bg-white/10" />
          <div className="flex gap-3 mt-3">
            <div className="h-10 w-32 rounded-full bg-gradient-brand" />
            <div className="h-10 w-24 rounded-full border border-white/20" />
          </div>
        </div>
        <div className="hidden md:block rounded-xl bg-gradient-brand opacity-90 min-h-40" />
      </div>
      <div className="grid grid-cols-3 gap-3 md:gap-4 px-6 md:px-10 pb-8 md:pb-10">
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-16 md:h-24 rounded-xl bg-white/5 border border-border" />
        ))}
      </div>
    </BrowserChrome>
  )
}

export function LeadNotification() {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-surface-2/95 border border-white/10 backdrop-blur px-4 py-3 shadow-2xl shadow-black/60">
      <span className="w-9 h-9 rounded-full bg-gradient-brand flex items-center justify-center text-ink font-bold">
        +
      </span>
      <div>
        <div className="text-sm font-bold">New booking request</div>
        <div className="text-xs text-text-secondary">Strategy call &middot; just now</div>
      </div>
    </div>
  )
}

export function RankBadge() {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-surface-2/95 border border-white/10 backdrop-blur px-4 py-3 shadow-2xl shadow-black/60">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="11" cy="11" r="7" stroke="#2E6BFF" strokeWidth="2" />
        <path d="M20 20l-4.3-4.3" stroke="#2E6BFF" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <div>
        <div className="text-sm font-bold">Page 1 on Google</div>
        <div className="text-xs text-text-secondary">&ldquo;plumber near me&rdquo;</div>
      </div>
    </div>
  )
}

export function BrowserVisual() {
  return (
    <BrowserChrome className="max-w-md">
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
    </BrowserChrome>
  )
}

export function SeoVisual() {
  const id = useId()
  return (
    <div className="w-full max-w-md rounded-2xl bg-surface border border-border p-8 shadow-2xl shadow-black/50">
      <div className="flex items-center gap-2 px-4 h-11 rounded-full border border-border mb-8">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <circle cx="11" cy="11" r="7" stroke="#2E6BFF" strokeWidth="1.6" />
          <path d="M20 20l-4.3-4.3" stroke="#2E6BFF" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
        <span className="text-sm text-text-secondary">yourbusiness.com</span>
      </div>
      <svg viewBox="0 0 300 120" className="w-full h-28">
        <defs>
          <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2E6BFF" />
            <stop offset="100%" stopColor="#FF6A3D" />
          </linearGradient>
        </defs>
        <polyline
          points="0,100 50,90 100,70 150,75 200,40 250,30 300,10"
          fill="none"
          stroke={`url(#${id})`}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="flex justify-between text-xs text-text-tertiary mt-2 font-semibold uppercase tracking-wider">
        <span>Week 1</span>
        <span>Week 12</span>
      </div>
    </div>
  )
}

export function LinksVisual() {
  const nodes = [
    [40, 20], [200, 10], [280, 60], [220, 110], [60, 100], [10, 55],
  ]
  const id = useId()
  return (
    <div className="w-full max-w-md rounded-2xl bg-surface border border-border p-8 shadow-2xl shadow-black/50 flex items-center justify-center">
      <svg viewBox="0 0 300 130" className="w-full h-40">
        <defs>
          <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2E6BFF" />
            <stop offset="100%" stopColor="#FF6A3D" />
          </linearGradient>
        </defs>
        {nodes.map(([x, y], i) => (
          <line key={i} x1="150" y1="65" x2={x} y2={y} stroke={`url(#${id})`} strokeWidth="1.5" opacity="0.6" />
        ))}
        {nodes.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="8" fill="#1A1A24" stroke="#2A2A34" strokeWidth="1.5" />
        ))}
        <circle cx="150" cy="65" r="14" fill={`url(#${id})`} />
      </svg>
    </div>
  )
}
