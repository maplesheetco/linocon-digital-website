import { useLayoutEffect, useRef, useState } from 'react'
import { m, useScroll, useReducedMotion } from 'framer-motion'
import { useScrollRange } from '../../lib/scroll'
import Reveal from '../Reveal'

const img = (name) => `${import.meta.env.BASE_URL}images/${name}`

const STEPS = [
  { n: '01', image: 'process-audit', title: 'Audit', body: "We review your current site, rankings and competitors to find exactly what's holding you back." },
  { n: '02', image: 'process-plan', title: 'Plan', body: 'You get a clear plan: the pages, the keywords and the links worth chasing, agreed before work starts.' },
  { n: '03', image: 'process-build', title: 'Build & launch', body: 'We design and build your site with SEO baked in, then launch it.' },
  { n: '04', image: 'process-grow', title: 'Grow', body: 'Ongoing SEO and backlinks, with regular reporting, so rankings and enquiries keep climbing.' },
]

function StepCard({ s }) {
  return (
    <div className="relative isolate overflow-hidden flex flex-col gap-5 rounded-3xl bg-surface border border-border p-8 md:p-10 min-h-[440px] md:min-h-0 md:w-[min(520px,40vw)] md:h-[420px] shrink-0">
      <img
        src={img(`${s.image}-1040.webp`)}
        srcSet={`${img(`${s.image}-600.webp`)} 600w, ${img(`${s.image}-1040.webp`)} 1040w`}
        sizes="(min-width: 768px) 520px, 100vw"
        width="1040"
        height="840"
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-20 w-full h-full object-cover object-right"
      />
      {/* Dark fade so the text stays readable over busy, bright images:
          heaviest behind the text at the top left, lighter where the
          picture's subject sits at the bottom right. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            'linear-gradient(180deg, rgba(11,11,16,0.88) 0%, rgba(11,11,16,0.74) 45%, rgba(11,11,16,0.2) 100%), linear-gradient(90deg, rgba(11,11,16,0.55) 0%, rgba(11,11,16,0) 70%)',
        }}
      />
      <div className="h-[3px] w-16 rounded-full bg-gradient-brand" />
      <span className="font-display font-bold text-6xl md:text-7xl text-white/25">{s.n}</span>
      <h3 className="font-display font-bold text-2xl md:text-3xl">{s.title}</h3>
      <p className="text-text leading-relaxed md:text-lg max-w-[34ch]">{s.body}</p>
    </div>
  )
}

function Heading() {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-[0.9fr_1.1fr] gap-6 md:gap-10 items-end pb-12 md:pb-14 w-full">
      <h2 className="font-display font-bold text-4xl md:text-6xl leading-tight">
        A system,
        <br />
        not a scramble.
      </h2>
      <p className="text-lg text-text-secondary leading-relaxed">
        Every project runs the same four steps, so you always know what&#39;s happening and what
        comes next.
      </p>
    </div>
  )
}

// Desktop: vertical scrolling slides the steps sideways while the section
// stays pinned.
function HorizontalTrack() {
  const ref = useRef(null)
  const trackRef = useRef(null)
  const [distance, setDistance] = useState(0)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const x = useScrollRange(scrollYProgress, [0.05, 0.95], [0, -distance])

  useLayoutEffect(() => {
    const measure = () => {
      if (trackRef.current) {
        setDistance(Math.max(0, trackRef.current.scrollWidth - window.innerWidth))
      }
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  return (
    <div ref={ref} className="relative h-[260vh]">
      <div className="sticky top-0 h-svh flex flex-col justify-center overflow-hidden">
        <Heading />
        <m.div
          ref={trackRef}
          style={{ x }}
          className="flex gap-6 w-max pl-[max(2.5rem,calc((100vw-72rem)/2+2.5rem))] pr-10"
        >
          {STEPS.map((s) => (
            <StepCard key={s.n} s={s} />
          ))}
        </m.div>
      </div>
    </div>
  )
}

export default function Process() {
  const reduce = useReducedMotion()
  return (
    <section id="process" className="border-t border-border">
      <div className={reduce ? 'py-28' : 'py-28 md:hidden'}>
        <Reveal>
          <Heading />
        </Reveal>
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-5">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <StepCard s={s} />
            </Reveal>
          ))}
        </div>
      </div>
      {!reduce && (
        <div className="hidden md:block">
          <HorizontalTrack />
        </div>
      )}
    </section>
  )
}
