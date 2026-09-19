export default function Mark({ className = 'w-8 h-6' }) {
  return (
    <svg viewBox="0 0 30 24" fill="none" className={className}>
      <defs>
        <linearGradient id="brandGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2E6BFF" />
          <stop offset="100%" stopColor="#FF6A3D" />
        </linearGradient>
      </defs>
      <path d="M2 20 L9 9" stroke="url(#brandGradient)" strokeWidth="4" strokeLinecap="round" />
      <path d="M11 20 L18 5" stroke="url(#brandGradient)" strokeWidth="4" strokeLinecap="round" />
      <path d="M20 20 L28 2" stroke="url(#brandGradient)" strokeWidth="4" strokeLinecap="round" />
    </svg>
  )
}

export function Logo({ dark = false }) {
  return (
    <div className="flex items-center gap-3">
      <Mark />
      <span className={`font-display text-xl font-bold ${dark ? 'text-ink' : 'text-text'}`}>
        LinoCon Digital
      </span>
    </div>
  )
}
