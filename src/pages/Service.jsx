import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { m } from 'framer-motion'
import Reveal from '../components/Reveal'
import { PROJECTS } from '../components/sections/Work'
import { SERVICES, getService, servicePath } from '../lib/services'
import { SERVICE_PAGES } from '../lib/servicePages'
import { getArticle } from '../lib/articles'
import usePageMeta from '../lib/usePageMeta'

const img = (name) => `${import.meta.env.BASE_URL}images/${name}`

function Check() {
  return (
    <svg width="20" height="20" viewBox="0 0 18 18" fill="none" className="shrink-0 mt-0.5" aria-hidden="true">
      <circle cx="9" cy="9" r="9" fill="#2E6BFF" fillOpacity="0.18" />
      <path d="M5.5 9.2l2.2 2.2 4.8-4.8" stroke="#2E6BFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Cross() {
  return (
    <svg width="20" height="20" viewBox="0 0 18 18" fill="none" className="shrink-0 mt-0.5" aria-hidden="true">
      <circle cx="9" cy="9" r="9" fill="#FF6B3D" fillOpacity="0.16" />
      <path d="M6.2 6.2l5.6 5.6M11.8 6.2l-5.6 5.6" stroke="#FF6B3D" strokeWidth="1.8" strokeLinecap="round" />
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

function TextLink({ link }) {
  return (
    <Link to={link.to} className="group inline-flex items-center gap-2 text-sm font-bold text-text mt-1">
      {link.label}
      <Arrow />
    </Link>
  )
}

function Headline({ text, accent }) {
  const i = accent ? text.indexOf(accent) : -1
  if (i === -1) return text
  return (
    <>
      {text.slice(0, i)}
      <span className="text-gradient">{accent}</span>
      {text.slice(i + accent.length)}
    </>
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
        Get a free audit
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

function Eyebrow({ children }) {
  return <span className="text-sm font-bold tracking-widest uppercase text-orange">{children}</span>
}

// `compact` is used inside a two-column pair, where headings are a size smaller.
function Heading({ children, compact }) {
  return (
    <h2
      className={`font-display font-bold leading-tight mt-4 text-balance ${
        compact ? 'text-2xl md:text-4xl' : 'text-3xl md:text-5xl max-w-3xl'
      }`}
    >
      {children}
    </h2>
  )
}

function Quote({ children }) {
  return (
    <blockquote className="border-l-2 border-orange pl-5 text-lg md:text-xl leading-relaxed text-text">
      &ldquo;{children}&rdquo;
    </blockquote>
  )
}

function Cards({ s }) {
  return (
    <>
      <Reveal className="mb-12">
        <Eyebrow>{s.eyebrow}</Eyebrow>
        <Heading>{s.heading}</Heading>
      </Reveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {s.items.map((item, i) => (
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
    </>
  )
}

function Checklist({ s }) {
  const Icon = s.tone === 'avoid' ? Cross : Check
  return (
    <div className="grid lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-16 items-start">
      <Reveal className="flex flex-col gap-5">
        <div>
          <Eyebrow>{s.eyebrow}</Eyebrow>
          <Heading compact>{s.heading}</Heading>
        </div>
        {s.intro && <p className="text-lg text-text-secondary leading-relaxed">{s.intro}</p>}
        {s.quote && <Quote>{s.quote}</Quote>}
      </Reveal>
      <Reveal delay={0.1}>
        <ul className="grid sm:grid-cols-2 gap-3">
          {s.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-border bg-surface px-5 py-4 text-text-secondary leading-snug"
            >
              <Icon />
              {item}
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  )
}

function Flow({ s, compact }) {
  const detailed = s.steps.some((st) => st.body)
  return (
    <Reveal className="flex flex-col gap-6">
      <div>
        <Eyebrow>{s.eyebrow}</Eyebrow>
        <Heading compact={compact}>{s.heading}</Heading>
      </div>
      {s.body && <p className="text-lg text-text-secondary leading-relaxed max-w-3xl">{s.body}</p>}
      {detailed ? (
        <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-2">
          {s.steps.map((st, i) => (
            <li key={st.title} className="relative rounded-3xl border border-border bg-surface p-7 flex flex-col gap-2">
              <span className="text-sm font-bold text-text-tertiary">0{i + 1}</span>
              <span className="font-display font-bold text-2xl text-gradient w-fit">{st.title}</span>
              <span className="text-text-secondary leading-relaxed">{st.body}</span>
            </li>
          ))}
        </ol>
      ) : (
        <ol className="flex flex-wrap items-center gap-2.5">
          {s.steps.map((st, i) => (
            <li key={st.title} className="flex items-center gap-2.5">
              <span className="px-4 py-2.5 rounded-full border border-white/15 bg-surface text-sm font-bold">
                {st.title}
              </span>
              {i < s.steps.length - 1 && (
                <span aria-hidden="true" className="text-orange font-bold">
                  &rarr;
                </span>
              )}
            </li>
          ))}
        </ol>
      )}
      {s.note && <p className="text-text-secondary leading-relaxed max-w-3xl">{s.note}</p>}
      {s.link && <TextLink link={s.link} />}
    </Reveal>
  )
}

function Text({ s, compact }) {
  return (
    <Reveal className={`flex flex-col gap-5 ${compact ? '' : 'max-w-3xl'}`}>
      <div>
        <Eyebrow>{s.eyebrow}</Eyebrow>
        <Heading compact={compact}>{s.heading}</Heading>
      </div>
      {s.body?.map((p) => (
        <p key={p} className="text-lg text-text-secondary leading-relaxed">
          {p}
        </p>
      ))}
      {s.quote && <Quote>{s.quote}</Quote>}
      {s.link && <TextLink link={s.link} />}
    </Reveal>
  )
}

function Pair({ s }) {
  return (
    <div className="grid lg:grid-cols-2 gap-14 lg:gap-16">
      {s.items.map((item) =>
        item.type === 'flow' ? (
          <Flow key={item.heading} s={item} compact />
        ) : (
          <Text key={item.heading} s={item} compact />
        ),
      )}
    </div>
  )
}

function Process({ s }) {
  return (
    <>
      <Reveal className="mb-12">
        <Eyebrow>{s.eyebrow}</Eyebrow>
        <Heading>{s.heading}</Heading>
      </Reveal>
      <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {s.steps.map((st, i) => (
          <Reveal key={st.title} as={m.li} delay={i * 0.08} className="flex flex-col gap-4 border-t-2 border-white/10 pt-6">
            <span className="w-11 h-11 rounded-full bg-gradient-brand text-ink font-display font-bold text-lg flex items-center justify-center">
              {i + 1}
            </span>
            <h3 className="font-display font-bold text-2xl">{st.title}</h3>
            <p className="text-text-secondary leading-relaxed">{st.body}</p>
          </Reveal>
        ))}
      </ol>
    </>
  )
}

function Proof({ s }) {
  return (
    <>
      <Reveal className="mb-12">
        <Eyebrow>{s.eyebrow}</Eyebrow>
        <Heading>{s.heading}</Heading>
      </Reveal>
      <div className="grid md:grid-cols-2 gap-6">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.08}>
            <a
              href={p.url}
              target="_blank"
              rel="noopener"
              className="group flex flex-col h-full rounded-3xl border border-border bg-surface overflow-hidden hover:border-blue transition-colors"
            >
              <img
                src={img(`${p.image}-700.webp`)}
                width="700"
                height="478"
                alt={`The ${p.name} website on desktop and phone`}
                loading="lazy"
                decoding="async"
                className="w-full h-auto"
              />
              <div className="flex flex-col gap-3 p-7 md:p-8 flex-1">
                <span className="text-xs font-bold tracking-widest uppercase text-text-tertiary">{p.kind}</span>
                <h3 className="font-display font-bold text-2xl">{p.name}</h3>
                <p className="text-text-secondary leading-relaxed flex-1">{p.body}</p>
                <span className="inline-flex items-center gap-2 text-sm font-bold mt-1">
                  Visit {p.domain}
                  <Arrow />
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </>
  )
}

function Note({ s }) {
  return (
    <Reveal className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-blue/15 via-surface to-orange/10 p-8 md:p-12 flex flex-col gap-4">
      <Eyebrow>{s.eyebrow}</Eyebrow>
      <h2 className="font-display font-bold text-2xl md:text-4xl leading-tight max-w-3xl text-balance">{s.heading}</h2>
      <p className="text-lg text-text-secondary leading-relaxed max-w-3xl">{s.body}</p>
    </Reveal>
  )
}

const SECTIONS = { cards: Cards, checklist: Checklist, flow: Flow, text: Text, pair: Pair, process: Process, proof: Proof, note: Note }

export default function Service() {
  const { slug } = useParams()
  const s = getService(slug)
  const page = SERVICE_PAGES[slug]

  usePageMeta(s?.metaTitle, s?.metaDescription)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!s || !page) return <Navigate to="/#services" replace />

  const others = SERVICES.filter((o) => o.slug !== s.slug)
  const article = s.article && getArticle(s.article)
  const [w, h] = page.imageSize

  return (
    <>
      <section className="relative overflow-hidden pt-28 md:pt-36 lg:pt-40 pb-16 md:pb-24">
        <div className="pointer-events-none absolute -top-64 -left-64 w-[800px] h-[800px] rounded-full opacity-20 bg-[radial-gradient(closest-side,var(--color-blue),transparent)]" />
        <div className="pointer-events-none absolute -top-12 -right-72 w-[880px] h-[880px] rounded-full opacity-15 bg-[radial-gradient(closest-side,var(--color-orange),transparent)]" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-[45fr_55fr] gap-12 lg:gap-14 items-center">
          {/* Slide only, no fade, like the homepage headline: the h1 stays
              visible from the first paint. */}
          <m.div
            key={s.slug}
            initial={{ y: 24 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6"
          >
            <span className="text-sm font-bold tracking-widest uppercase text-text-tertiary">{s.kicker}</span>
            <h1 className="font-display font-bold text-5xl sm:text-6xl xl:text-7xl leading-[1.02] text-balance">
              <Headline text={page.headline} accent={page.accent} />
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-text-secondary text-balance">{page.intro}</p>
            <Buttons />
          </m.div>
          <div className="w-full max-w-2xl mx-auto lg:max-w-none">
            <img
              key={s.slug}
              src={img(`${page.image}-1080.webp`)}
              srcSet={`${img(`${page.image}-640.webp`)} 640w, ${img(`${page.image}-1080.webp`)} 1080w`}
              sizes="(min-width: 1280px) 640px, (min-width: 1024px) 52vw, (min-width: 768px) 672px, 100vw"
              width={w}
              height={h}
              alt={page.imageAlt}
              fetchPriority="high"
              decoding="async"
              className="w-full h-auto rounded-2xl md:rounded-3xl border border-white/10 shadow-2xl shadow-black/60"
            />
          </div>
        </div>
      </section>

      {page.sections.map((sec, i) => {
        const Section = SECTIONS[sec.type]
        return (
          <section key={i} className="py-20 md:py-28 border-t border-border">
            <div className="max-w-6xl mx-auto px-6 md:px-10">
              <Section s={sec} />
            </div>
          </section>
        )
      })}

      <section className="py-20 md:py-28 border-t border-border">
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <Reveal className="flex flex-col gap-4">
            <Eyebrow>Explore more</Eyebrow>
            <Heading compact>The services work even better together.</Heading>
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
          <h2 className="font-display font-bold text-4xl md:text-6xl leading-[1.05] text-balance">{page.cta.heading}</h2>
          <p className="text-lg md:text-xl text-text-secondary">{page.cta.body}</p>
          <Buttons center />
        </Reveal>
      </section>
    </>
  )
}
