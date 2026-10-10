import { Link } from 'react-router-dom'
import { Logo } from '../Logo'
import { CONTACT_EMAIL } from '../../lib/leads'

const COLUMNS = [
  {
    title: 'Services',
    links: [
      { href: '/#services', label: 'Website design & build' },
      { href: '/#services', label: 'SEO setup' },
      { href: '/#services', label: 'Backlinks' },
      { href: '/#audit', label: 'Free website audit' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '/#work', label: 'Our work' },
      { href: '/#process', label: 'How we work' },
      { href: '/#faq', label: 'FAQ' },
      { to: '/articles', label: 'Articles' },
    ],
  },
  {
    title: 'Recent projects',
    links: [
      { href: 'https://www.maplesheet.ca', label: 'MapleSheet Co.', external: true },
      { href: 'https://finelinesglass.ca', label: 'Finelines Glass', external: true },
    ],
  },
]

const linkClass = 'text-sm text-text-secondary hover:text-text transition-colors'

function FooterLink({ link }) {
  if (link.to) {
    return <Link to={link.to} className={linkClass}>{link.label}</Link>
  }
  return (
    <a
      href={link.href}
      className={`${linkClass} inline-flex items-center gap-1.5`}
      {...(link.external ? { target: '_blank', rel: 'noopener' } : {})}
    >
      {link.label}
      {link.external && (
        <svg width="11" height="11" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M4 10L10 4M5 4h5v5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </a>
  )
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border pt-16 md:pt-24">
      <div className="pointer-events-none absolute -bottom-40 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full bg-blue opacity-[0.07] blur-[120px]" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-[1.3fr_2fr] gap-14 lg:gap-20 pb-14 md:pb-20">
          <div className="flex flex-col items-start gap-6">
            <Logo />
            <p className="font-display font-bold text-2xl md:text-3xl leading-tight">
              Get found. Get chosen.
              <br />
              Get <span className="text-gradient">growing.</span>
            </p>
            <p className="text-sm text-text-secondary leading-relaxed max-w-sm">
              Fast, custom websites with the SEO and backlinks to rank them, for businesses that
              want more customers from Google.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                to="/book"
                className="flex items-center h-11 px-5 rounded-full bg-gradient-brand text-ink text-sm font-bold"
              >
                Book a free strategy call
              </Link>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-2 h-11 px-5 rounded-full border border-white/15 text-sm font-bold hover:bg-white/5 transition-colors"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Email us
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
            {COLUMNS.map((col) => (
              <div key={col.title} className="flex flex-col gap-3.5">
                <span className="text-xs font-bold tracking-widest uppercase text-text-tertiary">
                  {col.title}
                </span>
                {col.links.map((l) => (
                  <FooterLink key={l.label} link={l} />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-7 border-t border-border">
          <span className="text-[13px] text-text-tertiary">
            &copy; {new Date().getFullYear()} LinoCon Digital. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-[13px] text-text-secondary hover:text-text transition-colors">
              {CONTACT_EMAIL}
            </a>
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="flex items-center gap-1.5 text-[13px] font-bold text-text-secondary hover:text-text transition-colors"
            >
              Back to top
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M7 11V3M3.5 6.5L7 3l3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div aria-hidden="true" className="relative select-none overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <span className="block font-display font-bold leading-[0.8] tracking-tight whitespace-nowrap text-[11.5vw] lg:text-[148px] text-transparent bg-clip-text bg-gradient-to-b from-white/[0.11] to-transparent translate-y-[18%]">
            LinoCon Digital
          </span>
        </div>
      </div>
    </footer>
  )
}
