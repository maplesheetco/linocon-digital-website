import Reveal from '../Reveal'

const TILES = [
  {
    title: 'Custom design.',
    accent: 'Zero templates.',
    body: 'Every site is designed around your business and your customers, so you stand out instead of blending in.',
    className: 'md:col-span-2 md:row-span-2 bg-gradient-to-br from-blue/25 via-surface to-orange/20',
    big: true,
  },
  {
    title: 'Mobile-first.',
    body: 'Most of your visitors are on a phone. Your site is built for them first.',
  },
  {
    title: 'Fast by default.',
    body: 'Lean code and optimized images, so pages load quickly on any connection.',
  },
  {
    title: 'Leads, not just visits.',
    body: 'Clear calls to action, enquiry forms and call booking that land in your inbox and calendar.',
    className: 'md:col-span-2',
  },
  {
    title: 'SEO built in.',
    body: 'Keyword mapping, site structure and metadata from day one, not bolted on later.',
  },
]

export default function Included() {
  return (
    <section className="py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal>
          <span className="text-sm font-bold tracking-widest uppercase text-orange">Every website includes</span>
          <h2 className="font-display font-bold text-4xl md:text-6xl leading-tight max-w-3xl mt-4 mb-14">
            Everything you need to win customers online.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 md:auto-rows-[minmax(220px,auto)] gap-4 md:gap-5">
          {TILES.map((t, i) => (
            <Reveal
              key={t.title}
              delay={(i % 3) * 0.08}
              y={40}
              className={`rounded-3xl border border-border p-8 md:p-10 flex flex-col justify-end gap-3 ${
                t.className ?? ''
              } ${t.className?.includes('bg-') ? '' : 'bg-surface'}`}
            >
              <h3
                className={`font-display font-bold leading-tight ${
                  t.big ? 'text-4xl md:text-6xl' : 'text-2xl md:text-3xl'
                }`}
              >
                {t.title}
                {t.accent && (
                  <>
                    <br />
                    <span className="text-gradient">{t.accent}</span>
                  </>
                )}
              </h3>
              <p className={`text-text-secondary leading-relaxed ${t.big ? 'text-lg max-w-md' : ''}`}>{t.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
