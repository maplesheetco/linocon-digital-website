import Reveal from '../Reveal'

const BENEFITS = [
  {
    title: 'Faster websites',
    body: 'Pages that load quickly on any phone, so visitors stay.',
    icon: <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />,
  },
  {
    title: 'More visibility',
    body: 'Show up on Google when local customers search for you.',
    icon: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="M20 20l-4.3-4.3" />
      </>
    ),
  },
  {
    title: 'More customers',
    body: 'Clear calls to action that turn visits into enquiries.',
    icon: (
      <>
        <circle cx="9" cy="8" r="3.5" />
        <path d="M2.5 20c.8-3.6 3.4-5.5 6.5-5.5s5.7 1.9 6.5 5.5" />
        <path d="M16 4.8a3.5 3.5 0 010 6.4M18.5 14.8c1.6.8 2.6 2.5 3 5.2" />
      </>
    ),
  },
]

export default function Benefits() {
  return (
    <section className="border-y border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border">
        {BENEFITS.map((b, i) => (
          <Reveal key={b.title} delay={i * 0.08} y={16} className="flex items-start gap-4 py-6 sm:py-8 sm:px-6 first:sm:pl-0 last:sm:pr-0">
            <span className="shrink-0 w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-orange">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                {b.icon}
              </svg>
            </span>
            <div className="flex flex-col gap-1">
              <h2 className="font-display font-bold text-lg md:text-xl">{b.title}</h2>
              <p className="text-sm md:text-base text-text-secondary leading-relaxed">{b.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
