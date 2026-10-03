import { useEffect, useState } from 'react'
import useReducedMotion from '../hooks/useReducedMotion'

const WORD = 'PORTFOLIO'

/**
 * Full-width PORTFOLIO wordmark shown before the home page.
 * Locks scrolling while it plays, then hands off. Skipped entirely (rendered
 * as nothing) when the visitor prefers reduced motion.
 */
export default function Intro() {
  const reduced = useReducedMotion()
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    if (reduced) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const timer = window.setTimeout(() => setHidden(true), 2700)
    return () => {
      window.clearTimeout(timer)
      document.body.style.overflow = previous || ''
    }
  }, [reduced])

  useEffect(() => {
    if (hidden && !reduced) document.body.style.overflow = ''
  }, [hidden, reduced])

  if (reduced) return null

  return (
    <div
      className={`intro${hidden ? ' is-hidden' : ''}`}
      aria-hidden="true"
      onClick={() => setHidden(true)}
    >
      <span className="intro-sweep" />
      <div className="intro-word">
        {WORD.split('').map((letter, i) => (
          <span key={`${letter}-${i}`}>{letter}</span>
        ))}
      </div>
    </div>
  )
}
