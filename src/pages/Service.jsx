import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { m } from 'framer-motion'
import Reveal from '../components/Reveal'
import { ServiceImage } from '../components/visuals'
import { SERVICES, getService, servicePath } from '../lib/services'
import { getArticle } from '../lib/articles'
import usePageMeta from '../lib/usePageMeta'

function Check() {
  return (
    <svg width="20" height="20" viewBox="0 0 18 18" fill="none" className="shrink-0 mt-0.5" aria-hidden="true">
      <circle cx="9" cy="9" r="9" fill="#2E6BFF" fillOpacity="0.18" />
      <path d="M5.5 9.2l2.2 2.2 4.8-4.8" stroke="#2E6BFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="transition-transform group-hover:translate-x-1">
      <path d="M3 7h8M7.5 3.5L11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Buttons({ center = false }) {
  return (
    <div
      className={`w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 ${
        center ? 'justify-center' : 'justify-center lg:justify-start'
      }`}
    >
      <a
        href="/#audit"
        className="flex items-center justify-center h-14 px-7 rounded-full bg-gradient-brand text-ink text-base font-bold"
      >
        Get your free audit
      </a>
      <Link
        to="/book"
        className="flex items-center justify-center h-14 px-7 rounded-full border border-white/20 text-base font-bold hover:bg-white/5 transition-colors"
      >
        Book a strategy call
      </Link>
    </div>
  )
}

export default function Service() {
  const { slug } = useParams()
  const s = getService(slug)

  usePageMeta(s?.metaTitle, s?.metaDescription)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!s) return <Navigate to="/#services" replace />

  const others = SERVICES.filter((o) => o.slug !== s.slug)
  const article = s.article && getArticle(s.article)

  return (
    <>
      <section className="relative overflow-hidden pt-28 md:pt-36 lg:pt-40 pb-16 md:pb-24">
        <div className="pointer-events-none absolute -top-64 -left-64 w-[800px] h-[800px] rounded-full opacity-20 bg-[radial-gradient(closest-side,var(--color-blue),transparent)]" />
        <div className="pointer-events-none absolute -top-12 -right-72 w-[880px] h-[880px] rounded-full opacity-15 bg-[radial-gradient(closest-side,var(--color-orange),transparent)]" />

        <div className="relative max-w-6xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Slide only, no fade, like the homepage headline: the h1 stays
              visible from the first paint. */}
          <m.div
            key={s.slug}
            initial={{ y: 24 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6"
          >
            <nav aria-label="Breadcrumb" className="text-sm text-text-tertiary">
              <a href="/#services" className="hover:text-text transition-colors">Services</a>
              <span className="mx-2">/</span>
              <span className="text-text-secondary">{s.name}</span>
            </nav>
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-balance">
              {s.name}: <span className="text-gradient">{s.title}</span>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-text-secondary text-balance">{s.intro}</p>
            <Buttons />
          </m.div>
          <div className="flex justify-center">
            <ServiceImage key={s.slug} name={s.image} alt={s.alt} eager />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 border-t border-border">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <Reveal>
            <span className="text-sm font-bold tracking-widest uppercase text-orange">What&#39;s included</span>
            <h2 className="font-display font-bold text-3xl md:text-5xl leading-tight max-w-3xl mt-4 mb-12">
              {s.body}
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {s.included.map((item, i) => (
              <Reveal
                key={item.title}
                delay={(i % 3) * 0.08}
                className="rounded-3xl border border-border bg-surface p-7 md:p-8 flex flex-col gap-3"
              >
                <h3 className="font-display font-bold text-xl md:text-2xl leading-snug">{item.title}</h3>
                <p className="text-text-secondary leading-relaxed">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 border-t border-border">
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16">
          <Reveal className="flex flex-col gap-6">
            <span className="text-sm font-bold tracking-widest uppercase text-orange">Is it right for you?</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl leading-tight">
              {s.name} is a good fit if&hellip;
            </h2>
            <ul className="flex flex-col gap-4">
              {s.fit.map((f) => (
                <li key={f} className="flex items-start gap-3 text-lg text-text-secondary">
                  <Check />
                  {f}
                </li>
              ))}
            </ul>
            {article && (
              <Link
                to={`/articles/${article.slug}`}
                className="group inline-flex items-center gap-2 text-sm font-bold text-text mt-2"
              >
                Read: {article.title}
                <Arrow />
              </Link>
            )}
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-4">
            <span className="text-sm font-bold tracking-widest uppercase text-text-tertiary">Works even better with</span>
            {others.map((o) => (
              <Link
                key={o.slug}
                to={servicePath(o)}
                className="group flex items-center justify-between gap-6 rounded-2xl border border-border bg-surface p-6 md:p-7 hover:border-blue transition-colors"
              >
                <div className="flex flex-col gap-1.5">
                  <span className="font-display font-bold text-xl">{o.name}</span>
                  <span className="text-text-secondary">{o.menu}</span>
                </div>
                <Arrow />
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 md:py-28 border-t border-border">
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[640px] rounded-full opacity-20 bg-[radial-gradient(closest-side,color-mix(in_srgb,var(--color-blue)_50%,var(--color-orange)),transparent)]" />
        <Reveal className="relative max-w-3xl mx-auto px-6 md:px-10 flex flex-col items-center text-center gap-6">
          <h2 className="font-display font-bold text-4xl md:text-6xl leading-[1.05] text-balance">
            Not sure where to <span className="text-gradient">start?</span>
          </h2>
          <p className="text-lg md:text-xl text-text-secondary">
            Get a free audit of your current site, or book a free strategy call and we&#39;ll recommend the most
            practical next step.
          </p>
          <Buttons center />
        </Reveal>
      </section>
    </>
  )
}
