import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/portfolio'
import useInView from '../hooks/useInView'
import { sfxProps } from '../lib/sound'
import { ArrowRight } from './Icons'
import Reveal from './Reveal'

function Panel({ project, index, panelRef }) {
  const [ref, inView] = useInView({ threshold: 0.25, rootMargin: '0px 0px -10% 0px' })

  const glow = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--gx', `${((e.clientX - r.left) / r.width) * 100}%`)
    e.currentTarget.style.setProperty('--gy', `${((e.clientY - r.top) / r.height) * 100}%`)
  }

  return (
    <article
      ref={(el) => {
        ref.current = el
        panelRef(el)
      }}
      className={`sc-panel${inView ? ' is-in' : ''}`}
      style={{ '--i': index }}
    >
      <div className="sc-card">
        <div className="sc-media" onPointerMove={glow}>
          <img src={project.image} alt={project.title} loading="lazy" />
          <span className="sc-glow" aria-hidden="true" />
          <span className="sc-sweep" aria-hidden="true" />
        </div>

        <div className="sc-copy">
          <span className="sc-num" aria-hidden="true">
            {project.num}
          </span>
          <p className="sc-tag">{project.tag}</p>
          <h3 className="sc-title" aria-label={project.title}>
            {project.title.split(' ').map((word, w) => (
              <span className="sc-word" key={word + w} aria-hidden="true">
                <span style={{ transitionDelay: `${180 + w * 90}ms` }}>{word}</span>
              </span>
            ))}
          </h3>
          <p className="sc-desc">{project.desc}</p>
          <Link className="sc-link" to="/contact" {...sfxProps(index + 1)}>
            <span>Ask me about it</span>
            <ArrowRight />
          </Link>
        </div>
      </div>
    </article>
  )
}

/**
 * Animated project showcase: a running title ribbon, then cards that stack on
 * top of each other as you scroll (earlier cards sink back), with masked title
 * reveals and a cursor-following glow on the image.
 * Used on the home page and on /work.
 */
export default function ProjectShowcase({ heading = true }) {
  const panels = useRef([])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    const update = () => {
      raf = 0
      const list = panels.current.filter(Boolean)
      list.forEach((el, i) => {
        const next = list[i + 1]
        if (!next) return
        const stick = el.getBoundingClientRect().top
        const gap = next.getBoundingClientRect().top - stick
        const p = Math.min(1, Math.max(0, 1 - gap / (window.innerHeight * 0.7)))
        el.style.setProperty('--sink', p.toFixed(3))
      })
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  const ribbon = [...projects, ...projects].map((p, i) => (
    <span key={i}>
      {p.title}
      <b aria-hidden="true">✦</b>
    </span>
  ))

  return (
    <section className="showcase" id="projects">
      {heading && (
        <div className="showcase-head">
          <Reveal as="p" className="kicker">
            Work
          </Reveal>
          <Reveal as="h2" className="sec-title">
            Projects I&#8217;ve shipped.
          </Reveal>
        </div>
      )}

      <div className="sc-ribbon" aria-hidden="true">
        <div className="sc-ribbon-track">{ribbon}</div>
      </div>

      <div className="sc-stack">
        {projects.map((project, i) => (
          <Panel
            key={project.num}
            project={project}
            index={i}
            panelRef={(el) => {
              panels.current[i] = el
            }}
          />
        ))}
      </div>
    </section>
  )
}
