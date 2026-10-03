import { useEffect, useRef, useState } from 'react'
import { profile } from '../data/portfolio'
import useMediaQuery from '../hooks/useMediaQuery'
import useReducedMotion from '../hooks/useReducedMotion'
import { ArrowRight, CodeBranch, LinkIcon, Mail } from './Icons'

const KEYS = [
  { tag: 'Email', value: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
  { tag: 'GitHub', value: profile.socials[0].label, href: profile.socials[0].href, Icon: CodeBranch },
  { tag: 'LinkedIn', value: profile.socials[1].label, href: profile.socials[1].href, Icon: LinkIcon },
]

/**
 * The contact console: a gyroscopic emitter above three extruded keycaps.
 * Hovering or focusing a key presses it in, ignites its beam and makes the gyro
 * precess toward it.
 */
export default function SignalCore() {
  const stageRef = useRef(null)
  const [armed, setArmed] = useState(false)
  const [locked, setLocked] = useState(false)
  const narrow = useMediaQuery('(max-width: 900px)')
  const reduced = useReducedMotion()
  const live = !narrow && !reduced

  useEffect(() => {
    const el = stageRef.current
    if (!el) return
    if (reduced || typeof IntersectionObserver === 'undefined') {
      setArmed(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setArmed(true)
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.22 }
    )
    io.observe(el)
    const timer = window.setTimeout(() => setArmed(true), 2600) // safety net
    return () => {
      io.disconnect()
      window.clearTimeout(timer)
    }
  }, [reduced])

  const handleMove = (event) => {
    if (!live) return
    const el = stageRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const nx = Math.max(-1, Math.min(1, ((event.clientX - rect.left) / rect.width) * 2 - 1))
    const ny = Math.max(-1, Math.min(1, ((event.clientY - rect.top) / rect.height) * 2 - 1))
    el.style.setProperty('--px', nx.toFixed(3))
    el.style.setProperty('--py', ny.toFixed(3))
  }

  const unlock = () => {
    const el = stageRef.current
    el?.style.setProperty('--lt', '0')
    el?.style.setProperty('--ly2', '0')
    setLocked(false)
  }

  const handleLeave = () => {
    const el = stageRef.current
    el?.style.setProperty('--px', '0')
    el?.style.setProperty('--py', '0')
    unlock()
  }

  const lockAt = (index) => {
    const el = stageRef.current
    if (!live || !el) return
    const offset = index - (KEYS.length - 1) / 2
    el.style.setProperty('--lt', (offset * 7).toFixed(1))
    el.style.setProperty('--ly2', (offset * -9).toFixed(1))
    setLocked(true)
  }

  return (
    <section className="section overflow-hidden border-t border-[color:var(--line)]" id="contact">
      <div
        ref={stageRef}
        className={`core mx-auto max-w-[1180px]${armed ? ' is-armed' : ''}${locked ? ' is-locked' : ''}`}
      >
        <div
          className="core-stage"
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
        >
          <div className="core-glow" aria-hidden="true" />
          <div className="core-floor" aria-hidden="true">
            <span className="core-scanwrap">
              <span className="core-scan" />
            </span>
          </div>

          <div className="core-copy">
            <p className="kicker">Get in touch</p>
            <h2 className="sec-title">{profile.contactHeading}</h2>
            <div className="core-slab">
              <p className="m-0 text-[1.02rem] leading-[1.7]">{profile.contactBody}</p>
            </div>
          </div>

          <div className="core-bay">
            <span className="core-gyro" aria-hidden="true">
              <span className="core-orbit o1"><span className="core-ring" /></span>
              <span className="core-orbit o2"><span className="core-ring" /></span>
              <span className="core-orbit o3"><span className="core-ring" /></span>
              <span className="core-orb" />
            </span>

            <span className="core-bus" aria-hidden="true"><span /></span>

            <div className="core-keys">
              {KEYS.map(({ tag, value, href, Icon }, i) => (
                <a
                  key={tag}
                  className="core-key"
                  href={href}
                  onMouseEnter={() => lockAt(i)}
                  onFocus={() => lockAt(i)}
                  onBlur={unlock}
                >
                  <span className="core-key-base" aria-hidden="true" />
                  <span className="core-beam" aria-hidden="true" />
                  <span className="core-key-face">
                    <span className="core-key-ico"><Icon /></span>
                    <span className="core-key-body">
                      <span className="core-key-tag">{tag}</span>
                      <span className="core-key-val">{value}</span>
                    </span>
                    <span className="core-key-go"><ArrowRight /></span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
