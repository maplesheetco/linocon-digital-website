import Reveal from '../Reveal'

const img = (name) => `${import.meta.env.BASE_URL}images/${name}`

const PROJECTS = [
  {
    name: 'MapleSheet Co.',
    url: 'https://www.maplesheet.ca',
    domain: 'maplesheet.ca',
    kind: 'Online store',
    body: 'A fast online store for Google Sheets investment trackers made for Canadian investors, with product pages, free tools, articles and checkout.',
    tags: ['Website', 'SEO', 'E-commerce'],
    image: 'work-maplesheet',
  },
  {
    name: 'Finelines Glass',
    url: 'https://finelinesglass.ca',
    domain: 'finelinesglass.ca',
    kind: 'Local business',
    body: 'A new website for a Vancouver glass installation company with 30+ years in business, moved off Wix, with services, projects and estimate requests.',
    tags: ['Website', 'Local SEO', 'Lead capture'],
    image: 'work-finelines',
  },
]

export default function Work() {
  return (
    <section id="work" className="py-28 md:py-36 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal>
          <span className="text-sm font-bold tracking-widest uppercase text-orange">Our work</span>
          <h2 className="font-display font-bold text-4xl md:text-6xl leading-tight max-w-3xl mt-4 mb-14 md:mb-20">
            Websites we&#39;ve built.
          </h2>
        </Reveal>

        <div className="flex flex-col gap-20 md:gap-28">
          {PROJECTS.map((p, i) => (
            <div
              key={p.name}
              className={`grid md:grid-cols-[1.35fr_1fr] gap-8 md:gap-14 items-center ${
                i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
              }`}
            >
              <Reveal y={48}>
                <a href={p.url} target="_blank" rel="noopener" aria-label={`Visit ${p.domain}`}>
                  <img
                    src={img(`${p.image}-1200.webp`)}
                    srcSet={`${img(`${p.image}-700.webp`)} 700w, ${img(`${p.image}-1200.webp`)} 1200w`}
                    sizes="(min-width: 768px) 640px, 100vw"
                    width="1200"
                    height="820"
                    alt={`The ${p.name} website on desktop and phone`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto transition-transform duration-500 hover:-translate-y-1"
                  />
                </a>
              </Reveal>
              <Reveal delay={0.1} className="flex flex-col items-start gap-5">
                <span className="text-sm font-bold tracking-widest uppercase text-text-tertiary">{p.kind}</span>
                <h3 className="font-display font-bold text-3xl md:text-4xl leading-tight">{p.name}</h3>
                <p className="text-lg text-text-secondary leading-relaxed">{p.body}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="px-3 py-1.5 rounded-full border border-white/15 text-xs font-bold text-text-secondary">
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener"
                  className="flex items-center gap-2 text-base font-bold mt-2 hover:text-orange transition-colors"
                >
                  Visit {p.domain}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M4 10L10 4M5 4h5v5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
