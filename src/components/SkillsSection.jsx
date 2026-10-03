import { Link } from 'react-router-dom'
import { skillGroups, toolbox } from '../data/portfolio'
import Reveal from './Reveal'
import SkillsVideo from './SkillsVideo'
import { ArrowRight, Code, Layers, Server } from './Icons'

const GROUP_ICONS = { Frontend: Code, Backend: Server, Infrastructure: Layers }

export default function SkillsSection() {
  return (
    <section className="section" id="skills">
      <div className="mx-auto max-w-[1180px]">
        <Reveal as="p" className="kicker">
          Skills
        </Reveal>
        <Reveal as="h2" className="sec-title">
          The stack I reach for.
        </Reveal>

        <div className="skills-grid">
          <Reveal className="skills-portrait">
            <SkillsVideo />
          </Reveal>

          <div className="sk-list">
            {skillGroups.map((group, index) => {
              const Icon = GROUP_ICONS[group.title] || Code
              return (
                <Reveal key={group.title} className="sk-card" delay={index * 80}>
                  <header className="sk-head">
                    <span className="sk-icon">
                      <Icon />
                    </span>
                    <h3 className="sk-title">{group.title}</h3>
                  </header>
                  <ul className="sk-items">
                    {group.items.map((item) => (
                      <li key={item.name} className="sk-item">
                        <strong>{item.name}</strong>
                        <span>{item.note}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              )
            })}
          </div>
        </div>

        <Reveal className="mt-9 flex flex-wrap gap-2.5">
          {toolbox.map((tech) => (
            <span className="tag" key={tech}>
              {tech}
            </span>
          ))}
        </Reveal>

        <Reveal className="mt-7">
          <Link className="btn btn-ghost" to="/skills">
            <span>See the full stack</span>
            <ArrowRight className="btn-ico" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
