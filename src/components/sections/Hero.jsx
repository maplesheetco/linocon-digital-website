import { useRef } from 'react'
import { m, useScroll, useReducedMotion } from 'framer-motion'
import { useScrollRange } from '../../lib/scroll'
import { Link } from 'react-router-dom'
import { HeroDevice, LeadNotification, RankBadge } from '../visuals'

// Apple-style opener: the headline is pinned while you scroll, then fades
// back as the site preview rises up and fills the screen.
export default function Hero() {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })

  const textOpacity = useScrollRange(scrollYProgress, [0, 0.18], [1, 0])
  const textScale = useScrollRange(scrollYProgress, [0, 0.18], [1, 0.92])
  const textY = useScrollRange(scrollYProgress, [0, 0.18], [0, -80])
  const deviceY = useScrollRange(scrollYProgress, [0, 0.55], ['72%', '0%'])
  const deviceScale = useScrollRange(scrollYProgress, [0, 0.55], [0.82, 1])
  const deviceOpacity = useScrollRange(scrollYProgress, [0, 0.12, 0.3], [0.5, 0.5, 1])
  const badgeOpacity = useScrollRange(scrollYProgress, [0.55, 0.7], [0, 1])
  const badgeY = useScrollRange(scrollYProgress, [0.55, 0.7], [24, 0])
  const leadOpacity = useScrollRange(scrollYProgress, [0.68, 0.82], [0, 1])
  const leadY = useScrollRange(scrollYProgress, [0.68, 0.82], [24, 0])

  const motionStyle = (style) => (reduce ? undefined : style)

  return (
    <section ref={ref} id="top" className={reduce ? 'relative' : 'relative h-[260vh]'}>
      <div
        className={`${reduce ? '' : 'sticky top-0 h-svh'} overflow-hidden flex flex-col items-center`}
      >
        <div className="pointer-events-none absolute -top-40 -left-40 w-[560px] h-[560px] rounded-full bg-blue opacity-20 blur-[120px]" />
        <div className="pointer-events-none absolute top-16 -right-48 w-[620px] h-[620px] rounded-full bg-orange opacity-15 blur-[140px]" />

        <m.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full"
        >
          <m.div
            style={motionStyle({ opacity: textOpacity, scale: textScale, y: textY })}
            className="max-w-4xl mx-auto px-6 pt-32 md:pt-40 flex flex-col items-center text-center gap-6 md:gap-7"
          >
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/15">
              <span className="w-1.5 h-1.5 rounded-full bg-orange" />
              <span className="text-xs font-bold tracking-widest text-text-secondary uppercase">
                Websites, SEO &amp; backlinks
              </span>
            </div>

            <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-8xl leading-[1.02] text-balance">
              Growth isn&#39;t luck.
              <br />
              It&#39;s a <span className="text-gradient">system.</span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed text-text-secondary max-w-2xl text-balance">
              We build fast websites that turn visitors into enquiries, then get them found on
              Google with proper SEO and backlinks. One team, one system, no guesswork.
            </p>

            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Link
                to="/book"
                className="flex items-center h-14 px-7 rounded-full bg-gradient-brand text-ink text-base font-bold"
              >
                Book a free strategy call
              </Link>
              <a
                href="#audit"
                className="flex items-center h-14 px-7 rounded-full border border-white/20 text-base font-bold hover:bg-white/5 transition-colors"
              >
                Get a free audit
              </a>
            </div>
          </m.div>
        </m.div>

        <m.div
          style={motionStyle({ y: deviceY, scale: deviceScale, opacity: deviceOpacity })}
          className={`${
            reduce ? 'relative mt-16 mb-24' : 'absolute inset-0 pt-24 pointer-events-none'
          } w-full flex items-center justify-center px-4 md:px-10`}
        >
          <div className="relative w-full max-w-5xl">
            <HeroDevice />
            <m.div
              style={motionStyle({ opacity: badgeOpacity, y: badgeY })}
              className="absolute -top-6 left-0 md:-left-10 scale-75 md:scale-100 origin-top-left"
            >
              <RankBadge />
            </m.div>
            <m.div
              style={motionStyle({ opacity: leadOpacity, y: leadY })}
              className="absolute -bottom-6 right-0 md:-right-10 scale-75 md:scale-100 origin-bottom-right"
            >
              <LeadNotification />
            </m.div>
          </div>
        </m.div>
      </div>
    </section>
  )
}
