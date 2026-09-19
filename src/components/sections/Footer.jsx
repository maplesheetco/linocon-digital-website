import { Logo } from '../Logo'

export default function Footer() {
  return (
    <footer className="border-t border-border pt-14 pb-10">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr] gap-10 pb-11">
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="text-sm text-text-tertiary max-w-xs">
              Websites, SEO, and backlinks for brands that want a system, not a scramble.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold tracking-widest uppercase text-text-tertiary">
              Services
            </span>
            <a href="#services" className="text-sm text-text-secondary">Website Builder</a>
            <a href="#services" className="text-sm text-text-secondary">SEO Setup</a>
            <a href="#services" className="text-sm text-text-secondary">Backlinks</a>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold tracking-widest uppercase text-text-tertiary">
              Contact
            </span>
            <a href="mailto:hello@linocondigital.com" className="text-sm text-text-secondary">
              hello@linocondigital.com
            </a>
            <span className="text-sm text-text-secondary">[Your City, Country]</span>
          </div>
        </div>
        <div className="flex items-center justify-between flex-wrap gap-3 pt-7 border-t border-border">
          <span className="text-[13px] text-text-tertiary">
            &copy; {new Date().getFullYear()} LinoCon Digital. All rights reserved.
          </span>
          <div className="flex gap-6">
            <a href="#" className="text-[13px] text-text-tertiary">Privacy</a>
            <a href="#" className="text-[13px] text-text-tertiary">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
