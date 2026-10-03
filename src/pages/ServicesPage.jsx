import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { ArrowRight, Code, Server, Layers, Database, Smartphone, Shield } from '../components/Icons'

const services = [
  { Icon: Code, title: 'Frontend Development', text: 'Responsive, modern interfaces built with React, JavaScript and clean reusable components.', tags: ['React', 'JavaScript', 'Bootstrap', 'Responsive UI'] },
  { Icon: Server, title: 'Backend Development', text: 'Python and Django backend solutions with clean APIs and reliable application logic.', tags: ['Python', 'Django', 'REST APIs', 'Authentication'] },
  { Icon: Layers, title: 'Full Stack Solutions', text: 'Complete web applications connecting polished frontends with practical backend systems.', tags: ['React', 'Django', 'APIs', 'Deployment'] },
  { Icon: Database, title: 'Database Design', text: 'Structured and maintainable data solutions using PostgreSQL and efficient data modeling.', tags: ['PostgreSQL', 'SQL', 'Data Modeling'] },
  { Icon: Smartphone, title: 'Mobile Responsive', text: 'Websites that adapt smoothly across phones, tablets and desktop screens.', tags: ['Mobile First', 'Responsive UI', 'Cross Browser'] },
  { Icon: Shield, title: 'Secure Web Apps', text: 'Authentication and sensible security practices for modern web applications.', tags: ['Auth', 'Validation', 'CORS', 'Security'] },
]

export default function ServicesPage() {
  return (
    <div className="pg">
      <PageHero
        kicker="What I can build"
        title={<>Development <em>Services</em></>}
        lead="Modern web solutions focused on clean design, responsive experiences and practical functionality."
      />

      <section className="pg-section is-tight">
        <div className="pg-container">
          <div className="pg-grid pg-grid-3">
            {services.map(({ Icon, title, text, tags }, index) => (
              <Reveal key={title} className="pg-card" delay={index * 60}>
                <span className="pg-info-ico"><Icon /></span>
                <h3 className="pg-card-title" style={{ marginTop: '18px' }}>{title}</h3>
                <p className="pg-lede" style={{ fontSize: '0.95rem' }}>{text}</p>
                <div className="pg-actions" style={{ marginTop: '18px', gap: '7px' }}>
                  {tags.map(tag => <span className="pg-tag" key={tag}>{tag}</span>)}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pg-section is-alt is-border">
        <div className="pg-container is-narrow pg-cta">
          <Reveal as="h2" className="pg-title is-tight">Ready to build your project?</Reveal>
          <Reveal as="p" className="pg-lede" delay={60}>Tell me what you want to create and we can plan the next step.</Reveal>
          <Reveal className="pg-actions" delay={120}>
            <Link className="pg-btn pg-btn-primary" to="/contact">
              <span>Contact Me</span><ArrowRight />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
