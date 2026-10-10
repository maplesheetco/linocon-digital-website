import { useRef, useState } from 'react'
import {
  AnimatePresence,
  m,
  useMotionValueEvent,
  useScroll,
  useReducedMotion,
} from 'framer-motion'
import Reveal from '../Reveal'
import useMediaQuery from '../../lib/useMediaQuery'
import { LinksVisual, SeoVisual, WebVisual } from '../visuals'

const SERVICES = [
  {
    kicker: '01 — Website Builder',
    title: 'Sites built to convert, not just exist.',
    body: 'Custom-built websites that load fast and turn visitors into leads. Not another templated theme.',
    points: ['Custom design for your brand', 'Built mobile-first', 'Enquiry forms and call booking built in'],
    Visual: WebVisual,
  },
  {
    kicker: '02 — SEO Setup',
    title: 'A technical foundation Google can actually rank.',
    body: 'Complete on-page and technical SEO, so Google understands what you do and who you serve.',
    points: ['Keyword mapping', 'Site structure and metadata', 'Speed fixes'],
    Visual: SeoVisual,
  },
  {
    kicker: '03 — Backlinks',
    title: 'Authority that compounds, not spam that gets penalized.',
    body: 'High-authority backlinks that move your rankings, without the spammy links that get sites penalized.',
    points: ['High-authority placements', 'Relevant to your industry', 'No link farms, ever'],
    Visual: LinksVisual,
  },
]

function Points({ points }) {
  return (
    <ul className="flex flex-col gap-2.5">
      {points.map((p) => (
        <li key={p} className="flex items-center gap-3 text-text-secondary">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0">
            <circle cx="9" cy="9" r="9" fill="#2E6BFF" fillOpacity="0.18" />
            <path d="M5.5 9.2l2.2 2.2 4.8-4.8" stroke="#2E6BFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {p}
        </li>
      ))}
    </ul>
  )
}

// Desktop: the section pins and the copy and illustration swap as you scroll,
// one service per screen of scrolling.
function StickyStory() {
  const ref = useRef(null)
  const [active, setActive] = useState(0)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    setActive(Math.min(SERVICES.length - 1, Math.floor(v * SERVICES.length)))
  })

  const s = SERVICES[active]

  return (
    <div ref={ref} className="relative" style={{ height: `${SERVICES.length * 100}vh` }}>
      <div className="sticky top-0 h-svh flex items-center">
        <div className="max-w-6xl w-full mx-auto px-10 grid grid-cols-[1fr_1fr] gap-16 items-center">
          <div className="flex gap-10">
            <div className="flex flex-col gap-3 pt-2">
              {SERVICES.map((_, i) => (
                <span
                  key={i}
                  className={`w-1 rounded-full transition-all duration-500 ${
                    i === active ? 'h-12 bg-gradient-brand' : 'h-6 bg-white/15'
                  }`}
                />
              ))}
            </div>
            <AnimatePresence mode="wait">
              <m.div
                key={active}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-start gap-5"
              >
                <span className="text-sm font-bold tracking-widest uppercase text-text-tertiary">
                  {s.kicker}
                </span>
                <h3 className="font-display font-bold text-4xl lg:text-5xl leading-tight">{s.title}</h3>
                <p className="text-lg text-text-secondary leading-relaxed max-w-md">{s.body}</p>
                <Points points={s.points} />
              </m.div>
            </AnimatePresence>
          </div>
          <AnimatePresence mode="wait">
            <m.div
              key={active}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.04 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex justify-center"
            >
              <s.Visual />
            </m.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

function Stacked() {
  return SERVICES.map((s) => (
    <div key={s.title} className="max-w-6xl mx-auto px-6 flex flex-col gap-10 py-20 border-t border-border">
      <Reveal className="flex flex-col items-start gap-5">
        <span className="text-sm font-bold tracking-widest uppercase text-text-tertiary">{s.kicker}</span>
        <h3 className="font-display font-bold text-3xl leading-tight">{s.title}</h3>
        <p className="text-lg text-text-secondary leading-relaxed">{s.body}</p>
        <Points points={s.points} />
      </Reveal>
      <Reveal className="flex justify-center" delay={0.1}>
        <s.Visual />
      </Reveal>
    </div>
  ))
}

export default function Services() {
  const reduce = useReducedMotion()
  const isDesktop = useMediaQuery('(min-width: 768px)')
  return (
    <section id="services" className="pt-28 md:pt-36">
      <Reveal className="max-w-6xl mx-auto px-6 md:px-10 pb-16 md:pb-8">
        <span className="text-sm font-bold tracking-widest uppercase text-orange">What we do</span>
        <h2 className="font-display font-bold text-4xl md:text-6xl leading-tight max-w-3xl mt-4">
          Three services. One growth system.
        </h2>
      </Reveal>
      {reduce || !isDesktop ? <Stacked /> : <StickyStory />}
    </section>
  )
}
