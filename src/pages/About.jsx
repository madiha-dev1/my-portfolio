import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { ArrowRight, CodeBranch, Download, LinkIcon, Mail } from '../components/Icons'
import { profile, projects, stats, toolbox } from '../data/portfolio'

export default function About() {
  const keys = [
    { tag: 'Email', value: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
    { tag: 'GitHub', value: profile.socials[0].label, href: profile.socials[0].href, Icon: CodeBranch },
    { tag: 'LinkedIn', value: profile.socials[1].label, href: profile.socials[1].href, Icon: LinkIcon },
  ]

  return (
    <div className="pg">
      {/* ------------------------------------------------------------ hero */}
      <section className="pg-hero">
        <div className="pg-hero-copy">
          <Reveal as="p" className="pg-kicker">
            {profile.availability}
          </Reveal>
          <Reveal as="h1" className="pg-title">
            {profile.heroLead} <em>{profile.name}</em>
          </Reveal>
          <Reveal as="p" className="pg-lede">
            {profile.tagline.before}
            <strong>{profile.tagline.strong}</strong>
            {profile.tagline.after}
          </Reveal>
          <Reveal className="pg-actions">
            <Link className="pg-btn pg-btn-primary" to="/work">
              <span>View My Work</span>
              <ArrowRight />
            </Link>
            <Link className="pg-btn pg-btn-outline" to="/contact">
              <Mail />
              <span>Contact Me</span>
            </Link>
          </Reveal>
        </div>

        <Reveal delay={100} className="pg-portrait">
          <img src="media/portrait.jpg" alt={profile.name} />
        </Reveal>
      </section>

      {/* --------------------------------------------------------- who I am */}
      <section className="pg-section is-tight">
        <div className="pg-container">
          <Reveal as="p" className="pg-kicker">
            Who I am
          </Reveal>
          <Reveal as="h2" className="pg-title is-tight" style={{ fontSize: 'clamp(1.7rem, 3vw, 2.3rem)' }}>
            {profile.aboutHeading}
          </Reveal>
          <Reveal as="p" className="pg-lede" style={{ maxWidth: '700px' }}>
            {profile.aboutBody}
          </Reveal>

          <div className="pg-grid pg-grid-4" style={{ marginTop: '12px' }}>
            {stats.map((item, index) => (
              <Reveal key={item.k} className="pg-stat" delay={index * 60}>
                <span className="pg-stat-k">{item.k}</span>
                <span className="pg-stat-v">{item.v}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- stack */}
      <section className="pg-section is-alt">
        <div className="pg-container">
          <Reveal as="p" className="pg-kicker">
            What I work with
          </Reveal>
          <Reveal as="h2" className="pg-title is-tight" style={{ fontSize: 'clamp(1.7rem, 3vw, 2.3rem)' }}>
            The stack I reach for.
          </Reveal>

          <Reveal className="pg-actions" style={{ marginBottom: '26px' }}>
            {toolbox.map((tech) => (
              <span className="pg-tag" key={tech}>
                {tech}
              </span>
            ))}
          </Reveal>

          <Reveal>
            <Link className="pg-pill-link" to="/skills">
              <span>See the full stack</span>
              <ArrowRight />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* -------------------------------------------------------------- work */}
      <section className="pg-section is-tight">
        <div className="pg-container">
          <Reveal as="p" className="pg-kicker">
            Selected work
          </Reveal>
          <Reveal as="h2" className="pg-title is-tight" style={{ fontSize: 'clamp(1.7rem, 3vw, 2.3rem)' }}>
            Projects I&#8217;ve shipped
          </Reveal>

          <div className="pg-grid pg-grid-3" style={{ marginTop: '30px' }}>
            {projects.map((project, index) => (
              <Reveal key={project.num} as={Link} to="/work" className="pg-card" delay={index * 60}>
                <p className="pg-proj-tag">{project.tag}</p>
                <h3 className="pg-card-title">{project.title}</h3>
                <p style={{ fontSize: '0.92rem', lineHeight: 1.65, color: 'var(--pg-dim)' }}>{project.desc}</p>
                <span
                  className="pg-pill-link"
                  style={{ marginTop: '16px', border: 'none', paddingBottom: 0 }}
                >
                  Read more <ArrowRight />
                </span>
              </Reveal>
            ))}
          </div>

          <Reveal className="pg-actions" style={{ marginTop: '30px' }}>
            <Link className="pg-btn pg-btn-primary" to="/work">
              <span>See all work</span>
              <ArrowRight />
            </Link>
            <Link className="pg-btn pg-btn-outline" to="/">
              <span>3D vault on the home page</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ----------------------------------------------------------- contact */}
      <section className="pg-section is-alt is-border">
        <div className="pg-container">
          <Reveal as="p" className="pg-kicker">
            Get in touch
          </Reveal>
          <Reveal as="h2" className="pg-title is-tight" style={{ fontSize: 'clamp(1.7rem, 3vw, 2.3rem)' }}>
            {profile.contactHeading}
          </Reveal>
          <Reveal as="p" className="pg-lede" style={{ maxWidth: '700px' }}>
            {profile.contactBody}
          </Reveal>

          <div className="pg-grid pg-grid-3" style={{ marginTop: '14px', marginBottom: '30px' }}>
            {keys.map(({ tag, value, href, Icon }, index) => (
              <Reveal key={tag} as="a" href={href} className="pg-info-card" delay={index * 60}>
                <span className="pg-info-ico">
                  <Icon />
                </span>
                <span>
                  <span className="pg-info-k">{tag}</span>
                  <span className="pg-info-v">{value}</span>
                </span>
              </Reveal>
            ))}
          </div>

          <Reveal className="pg-actions">
            <Link className="pg-btn pg-btn-primary" to="/contact">
              <span>Go to the contact page</span>
              <ArrowRight />
            </Link>
            <a className="pg-btn pg-btn-outline" href={profile.resumeHref}>
              <Download />
              <span>Download Resume</span>
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
