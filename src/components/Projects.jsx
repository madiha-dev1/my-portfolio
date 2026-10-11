import { projects } from '../data.js'
import { useInView } from '../hooks.js'

function ProjectCard({ p, i }) {
  const [ref, seen] = useInView(0.15)
  return (
    <article ref={ref} className={`proj${seen ? ' in' : ''}`} style={{ '--d': `${i * 0.08}s` }}>
      <h3>{p.title}</h3>
      <p>{p.desc}</p>
      <div className="tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
      <div className="links">
        {p.links.map((l) => (
          <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>
        ))}
        {p.soon && <span className="soon">{p.soon}</span>}
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="dark wv">
      <div className="head">
        <h2>Work that speaks for itself</h2>
        <p>Projects I have built while learning and practising full-stack development.</p>
      </div>
      <div className="stack">
        {projects.map((p, i) => <ProjectCard key={p.title} p={p} i={i} />)}
      </div>
    </section>
  )
}
