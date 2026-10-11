import { skills } from '../data.js'
import { useCountUp, useInView } from '../hooks.js'

function Row({ name, pct, active, delay }) {
  const v = useCountUp(pct, active, delay)
  return (
    <div className="row">
      <div><span>{name}</span><b>{v}%</b></div>
      <input
        className="rg"
        type="range"
        min="0"
        max="100"
        value={v}
        disabled
        readOnly
        style={{ '--v': v / 100 }}
        aria-label={`${name} ${pct} percent`}
      />
    </div>
  )
}

export default function Skills() {
  const [gridRef, seen] = useInView(0.2)
  return (
    <section id="skills" className="dark wv">
      <div className="head">
        <span className="badge">Technical stack</span>
        <h2>My skillset</h2>
        <p>The languages, frameworks, databases and tools I use to build full-stack web applications.</p>
      </div>
      <div ref={gridRef} className={`skills${seen ? ' in' : ''}`}>
        {Object.entries(skills).map(([title, rows], i) => (
          <div key={title} className="sk" style={{ '--d': `${i * 0.12}s` }}>
            <h3>{title}</h3>
            {rows.map(([name, pct]) => (
              <Row key={name} name={name} pct={pct} active={seen} delay={i * 120} />
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
