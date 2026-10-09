// Illustrations used across the homepage. The mockups are pre-rendered WebP
// images in public/images (with a half-size copy for phones); the small
// overlay cards are plain HTML so they can animate on their own.

const img = (name) => `${import.meta.env.BASE_URL}images/${name}`

export function HeroDevice() {
  return (
    <img
      src={img('hero-1600.webp')}
      srcSet={`${img('hero-800.webp')} 800w, ${img('hero-1600.webp')} 1600w`}
      sizes="(min-width: 1024px) 1024px, 100vw"
      width="1600"
      height="937"
      alt="A local business website designed by LinoCon Digital, shown on a laptop and a phone"
      fetchPriority="high"
      className="w-full h-auto drop-shadow-2xl"
    />
  )
}

function ServiceImage({ name, alt }) {
  return (
    <img
      src={img(`${name}-900.webp`)}
      srcSet={`${img(`${name}-600.webp`)} 600w, ${img(`${name}-900.webp`)} 900w`}
      sizes="(min-width: 768px) 480px, 100vw"
      width="900"
      height="675"
      alt={alt}
      loading="lazy"
      decoding="async"
      className="w-full max-w-lg h-auto"
    />
  )
}

export const WebVisual = () => (
  <ServiceImage name="web" alt="A fast, mobile-friendly business website receiving a new enquiry" />
)
export const SeoVisual = () => (
  <ServiceImage name="seo" alt="A business ranking first on Google with organic traffic trending up" />
)
export const LinksVisual = () => (
  <ServiceImage name="links" alt="High-authority websites linking to your site to build its authority" />
)

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
