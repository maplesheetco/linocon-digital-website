import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const cards = [
  { eyebrow: 'Built for you', title: 'Website Builder', desc: 'Fast, conversion-ready pages', rotate: '-rotate-6', pos: 'top-4 left-2 md:left-0', tint: false },
  { eyebrow: 'Technical', title: 'SEO Setup', desc: 'Rankings that stick', rotate: 'rotate-3', pos: 'top-52 left-32 md:left-36', tint: false, z: 'z-10' },
  { eyebrow: 'Authority', title: 'Backlinks', desc: 'Links that actually count', rotate: 'rotate-6', pos: 'top-8 right-0', tint: true },
]

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-32 md:pt-48 md:pb-40">
      <div className="pointer-events-none absolute -top-40 -left-40 w-[560px] h-[560px] rounded-full bg-blue opacity-20 blur-[120px]" />
      <div className="pointer-events-none absolute top-16 -right-48 w-[620px] h-[620px] rounded-full bg-orange opacity-15 blur-[140px]" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start gap-7"
        >
          <div className="flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/15">
            <span className="w-1.5 h-1.5 rounded-full bg-orange" />
            <span className="text-xs font-bold tracking-widest text-text-secondary uppercase">
              Websites, SEO &amp; backlinks
            </span>
          </div>

          <h1 className="font-display font-bold text-5xl md:text-7xl leading-[1.03]">
            Growth isn&#39;t luck.
            <br />
            It&#39;s a <span className="text-gradient">system.</span>
          </h1>

          <p className="text-lg md:text-xl leading-relaxed text-text-secondary max-w-lg">
            LinoCon Digital builds fast, conversion-ready websites and backs them with the SEO
            setup and backlinks that actually move you up Google &mdash; one team, one system, no
            guesswork.
          </p>

          <div className="flex items-center gap-7 flex-wrap">
            <Link
              to="/book"
              className="flex items-center h-14 px-7 rounded-full bg-gradient-brand text-ink text-base font-bold"
            >
              Book a Strategy Call
            </Link>
            <a href="#process" className="flex items-center gap-2 text-base font-bold">
              See how we work
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[440px] hidden md:block"
        >
          {cards.map((c) => (
            <div
              key={c.title}
              className={`absolute w-64 p-6 rounded-3xl border border-white/10 shadow-2xl ${c.rotate} ${c.pos} ${c.z ?? ''} ${
                c.tint
                  ? 'bg-gradient-to-br from-blue/20 to-orange/15'
                  : 'bg-surface'
              }`}
            >
              <span className="text-xs font-bold tracking-widest uppercase text-text-secondary">
                {c.eyebrow}
              </span>
              <div className="font-display text-2xl font-bold mt-2.5">{c.title}</div>
              <p className="text-sm text-text-secondary mt-2">{c.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
