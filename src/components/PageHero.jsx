import Reveal from './Reveal'

export default function PageHero({ kicker, title, lead, plain = false }) {
  return (
    <section className={`pg-hero${plain ? ' is-plain' : ''}`}>
      <div className="pg-hero-copy">
        <Reveal as="p" className="pg-kicker">
          {kicker}
        </Reveal>
        <Reveal as="h1" className="pg-title is-tight">
          {title}
        </Reveal>
        {lead ? (
          <Reveal as="p" className="pg-lede" delay={80}>
            {lead}
          </Reveal>
        ) : null}
      </div>
    </section>
  )
}
