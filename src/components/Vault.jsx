import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/portfolio'
import useMediaQuery from '../hooks/useMediaQuery'
import useReducedMotion from '../hooks/useReducedMotion'
import useScrollProgress from '../hooks/useScrollProgress'
import { ArrowRight } from './Icons'

const STEP = 120 // degrees between neighbouring cards
const FALLOFF = 150 // how far from the front a card starts to dim

/**
 * Scroll-driven 3D orbital project vault.
 * Progress is written straight to CSS custom properties (--orbit / --focus) from
 * the rAF loop, so scrolling never re-renders the three cards. On narrow screens
 * or with reduced motion it degrades to a plain grid of readable cards.
 */
export default function Vault() {
  const scrollRef = useRef(null)
  const stageRef = useRef(null)
  const cardRefs = useRef([])
  const narrow = useMediaQuery('(max-width: 900px)')
  const reduced = useReducedMotion()
  const flat = narrow || reduced
  const [active, setActive] = useState(0)

  const apply = useCallback(
    (progress) => {
      if (flat) return
      const orbit = progress * (projects.length - 1) * STEP
      stageRef.current?.style.setProperty('--orbit', `${orbit.toFixed(2)}deg`)

      let bestIndex = 0
      let bestFocus = -1
      projects.forEach((_, i) => {
        const raw = i * STEP - orbit
        const delta = (((raw % 360) + 540) % 360) - 180 // -180..180
        const focus = Math.max(0, 1 - Math.abs(delta) / FALLOFF)
        cardRefs.current[i]?.style.setProperty('--focus', focus.toFixed(4))
        if (focus > bestFocus) {
          bestFocus = focus
          bestIndex = i
        }
      })
      setActive((prev) => (prev === bestIndex ? prev : bestIndex))
    },
    [flat]
  )

  useScrollProgress(scrollRef, apply, { enabled: !flat })

  // when we switch into flat mode, clear any inline focus values left behind
  useEffect(() => {
    if (!flat) return
    cardRefs.current.forEach((card) => card?.style.removeProperty('--focus'))
  }, [flat])

  const jumpTo = (index) => {
    const el = scrollRef.current
    if (!el || flat) return
    const distance = el.offsetHeight - window.innerHeight
    const top = window.scrollY + el.getBoundingClientRect().top + (index / (projects.length - 1)) * distance
    window.scrollTo({ top, behavior: 'smooth' })
  }

  const handleTilt = (event) => {
    if (flat) return
    const el = event.currentTarget
    const rect = el.getBoundingClientRect()
    const nx = ((event.clientX - rect.left) / rect.width) * 2 - 1
    const ny = ((event.clientY - rect.top) / rect.height) * 2 - 1
    el.style.setProperty('--mx', (nx * 4).toFixed(2))
    el.style.setProperty('--my', (ny * -4).toFixed(2))
  }

  const clearTilt = (event) => {
    event.currentTarget.style.setProperty('--mx', '0')
    event.currentTarget.style.setProperty('--my', '0')
  }

  return (
    <section className={`vault${flat ? ' is-flat' : ''}`} id="projects">
      <div className="vault-scroll" ref={scrollRef}>
        <div className="vault-sticky" onMouseMove={handleTilt} onMouseLeave={clearTilt}>
          <div className="vault-horizon" aria-hidden="true" />
          <div className="vault-floor" aria-hidden="true" />
          <div className="vault-ring" aria-hidden="true" />
          <div className="vault-ring is-outer" aria-hidden="true" />

          <div className="vault-ghost" aria-hidden="true">
            {projects[active]?.num}
          </div>

          <div className="vault-stage" ref={stageRef}>
            <div className="vault-stage-inner">
              {projects.map((project, i) => (
                <article
                  key={project.num}
                  className="vault-card"
                  style={{ '--i': i }}
                  ref={(el) => {
                    cardRefs.current[i] = el
                  }}
                >
                  <div className="vc-face">
                    <img className="vc-photo" src={project.image} alt="" aria-hidden="true" loading="lazy" />
                    <span className="vc-scrim" aria-hidden="true" />
                    <div className="vc-body">
                      <span className="vc-num">{project.num}</span>
                      <p className="vc-tag">{project.tag}</p>
                      <h3 className="vc-title">{project.title}</h3>
                      <p className="vc-desc">{project.desc}</p>
                      <Link className="vc-link" to="/contact">
                        Ask me about it
                        <ArrowRight className="ml-[7px] inline h-[13px] w-[13px]" />
                      </Link>
                    </div>
                  </div>
                  <div className="vc-back" aria-hidden="true" />
                  <div className="vc-side vc-l" aria-hidden="true" />
                  <div className="vc-side vc-r" aria-hidden="true" />
                  <div className="vc-side vc-t" aria-hidden="true" />
                  <div className="vc-side vc-b" aria-hidden="true" />
                  <div className="vc-rim" aria-hidden="true" />
                </article>
              ))}
            </div>
          </div>

          {!flat && (
            <>
              <p className="vault-hint">Scroll to orbit</p>
              <div className="vault-rail">
                {projects.map((project, i) => (
                  <button
                    key={project.num}
                    type="button"
                    className={i === active ? 'is-active' : ''}
                    onClick={() => jumpTo(i)}
                  >
                    {project.num} {project.title}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
