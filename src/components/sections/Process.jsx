import Reveal from '../Reveal'

const STEPS = [
  { n: '01', title: 'Discover', body: 'Audit your funnel, market, and current channels to find where growth is actually stuck.' },
  { n: '02', title: 'Strategy', body: 'A prioritized 90-day plan tied to pipeline and revenue — not impressions.' },
  { n: '03', title: 'Build & Launch', body: 'Campaigns, content, and pages built and shipped by the same team that planned them.' },
  { n: '04', title: 'Optimize & Scale', body: "Weekly reporting and testing, so budget keeps moving toward what's actually working." },
]

export default function Process() {
  return (
    <section id="process" className="py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal className="grid md:grid-cols-[0.9fr_1.1fr] gap-10 items-end pb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight">
            A system,
            <br />
            not a scramble.
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            Every engagement runs the same four-stage loop &mdash; so growth compounds instead of
            restarting every quarter.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1} className="flex flex-col gap-4">
              <div className="h-[3px] w-full rounded-full bg-gradient-brand" />
              <span className="font-display font-bold text-4xl text-white/15">{s.n}</span>
              <h3 className="font-display font-semibold text-xl">{s.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
