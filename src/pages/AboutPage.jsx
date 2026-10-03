import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { ArrowRight, Mail } from '../components/Icons'
import { profile, stats, toolbox, projects } from '../data/portfolio'

export default function AboutPage() {
  return (
    <div className="pg">
      <section className="pg-hero">
        <div className="pg-hero-copy">
          <Reveal as="p" className="pg-kicker">{profile.availability}</Reveal>
          <Reveal as="h1" className="pg-title">Hi, I’m <em>{profile.name}</em></Reveal>
          <Reveal as="p" className="pg-lede">
            I build <strong>modern, responsive web experiences</strong> with React, Python, Django and PostgreSQL.
          </Reveal>
          <Reveal className="pg-actions">
            <Link className="pg-btn pg-btn-primary" to="/work"><span>View My Work</span><ArrowRight /></Link>
            <Link className="pg-btn pg-btn-outline" to="/contact"><Mail /><span>Contact Me</span></Link>
          </Reveal>
        </div>
        <Reveal delay={100} className="pg-portrait">
          <img src="media/portrait.jpg" alt={profile.name} />
        </Reveal>
      </section>

      <section className="pg-section is-tight">
        <div className="pg-container">
          <Reveal as="p" className="pg-kicker">Who I am</Reveal>
          <Reveal as="h2" className="pg-title is-tight">I’m a web developer and a learner who loves building useful digital experiences.</Reveal>
          <Reveal as="p" className="pg-lede" style={{ maxWidth: '700px' }}>
            I focus on frontend development with React and I’m growing my backend skills with Python, Django and PostgreSQL. My goal is to turn ideas into clean, responsive and user-friendly websites and applications.
          </Reveal>

          <div className="pg-grid pg-grid-4" style={{ marginTop: '22px' }}>
            {stats.map((item, index) => (
              <Reveal key={item.k} className="pg-stat" delay={index * 60}>
                <span className="pg-stat-k">{item.k}</span>
                <span className="pg-stat-v">{item.v}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pg-section is-alt">
        <div className="pg-container">
          <Reveal as="p" className="pg-kicker">My stack</Reveal>
          <Reveal as="h2" className="pg-title is-tight">Technologies I work with.</Reveal>
          <Reveal className="pg-actions" style={{ marginTop: '22px' }}>
            {toolbox.map(tech => <span className="pg-tag" key={tech}>{tech}</span>)}
          </Reveal>
        </div>
      </section>

      <section className="pg-section is-tight">
        <div className="pg-container">
          <Reveal as="p" className="pg-kicker">Selected work</Reveal>
          <Reveal as="h2" className="pg-title is-tight">Projects I’ve built.</Reveal>
          <div className="pg-grid pg-grid-3" style={{ marginTop: '30px' }}>
            {projects.map((project, index) => (
              <Reveal key={project.num} className="pg-card" delay={index * 60}>
                <p className="pg-proj-tag">{project.tag}</p>
                <h3 className="pg-card-title">{project.title}</h3>
                <p style={{ fontSize: '0.92rem', lineHeight: 1.65, color: 'var(--pg-dim)' }}>{project.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
