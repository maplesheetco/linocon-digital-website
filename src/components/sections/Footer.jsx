import { Link } from 'react-router-dom'
import { Logo } from '../Logo'
import { CONTACT_EMAIL } from '../../lib/leads'

export default function Footer() {
  return (
    <footer className="border-t border-border pt-14 pb-10">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr] gap-10 pb-11">
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="text-sm text-text-tertiary max-w-xs">
              <span className="block font-display font-bold text-base text-text mb-1">
                Get found. Get chosen. Get growing.
              </span>
              Websites, SEO and backlinks for businesses that want more customers.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold tracking-widest uppercase text-text-tertiary">
              Services
            </span>
            <a href="/#services" className="text-sm text-text-secondary">Website Builder</a>
            <a href="/#services" className="text-sm text-text-secondary">SEO Setup</a>
            <a href="/#services" className="text-sm text-text-secondary">Backlinks</a>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold tracking-widest uppercase text-text-tertiary">
              Contact
            </span>
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm text-text-secondary">
              {CONTACT_EMAIL}
            </a>
            <Link to="/book" className="text-sm text-text-secondary">Book a strategy call</Link>
            <Link to="/articles" className="text-sm text-text-secondary">Articles</Link>
          </div>
        </div>
        <div className="flex items-center justify-between flex-wrap gap-3 pt-7 border-t border-border">
          <span className="text-[13px] text-text-tertiary">
            &copy; {new Date().getFullYear()} LinoCon Digital. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  )
}
