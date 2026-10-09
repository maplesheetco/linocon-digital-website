import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Logo } from './Logo'

const LINKS = [
  { href: '/#services', label: 'Services' },
  { href: '/#work', label: 'Work' },
  { href: '/#process', label: 'Process' },
  { href: '/#audit', label: 'Free audit' },
  { href: '/#faq', label: 'FAQ' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location])

  const solid = scrolled || open

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        solid
          ? 'bg-ink/85 backdrop-blur-xl border-b border-border'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-10 h-16 md:h-20 flex items-center justify-between gap-4">
        <Link to="/" aria-label="LinoCon Digital home" onClick={() => window.scrollTo(0, 0)}>
          <Logo />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-text-secondary hover:text-text transition-colors"
            >
              {l.label}
            </a>
          ))}
          <Link
            to="/articles"
            className="text-sm font-semibold text-text-secondary hover:text-text transition-colors"
          >
            Articles
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/book"
            className="flex items-center h-10 md:h-11 px-4 md:px-6 rounded-full bg-gradient-brand text-ink text-sm font-bold whitespace-nowrap"
          >
            <span className="sm:hidden">Book a call</span>
            <span className="hidden sm:inline">Book a Strategy Call</span>
          </Link>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full border border-white/15"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              {open ? (
                <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              ) : (
                <path d="M2 5h14M2 9h14M2 13h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-border px-5 pb-6 pt-2 flex flex-col">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-4 text-lg font-semibold border-b border-border"
            >
              {l.label}
            </a>
          ))}
          <Link to="/articles" className="py-4 text-lg font-semibold">
            Articles
          </Link>
        </nav>
      )}
    </header>
  )
}
