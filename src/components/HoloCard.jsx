import { useRef } from 'react'
import { profile, skillsMedia, toolbox } from '../data/portfolio'
import useReducedMotion from '../hooks/useReducedMotion'

/** Portrait card with a ring of skill chips orbiting it, tilting toward the cursor. */
export default function HoloCard() {
  const cardRef = useRef(null)
  const reduced = useReducedMotion()

  const handleMove = (event) => {
    if (reduced) return
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const nx = ((event.clientX - rect.left) / rect.width) * 2 - 1
    const ny = ((event.clientY - rect.top) / rect.height) * 2 - 1
    card.style.transform = `perspective(700px) rotateY(${nx * 10}deg) rotateX(${-ny * 10}deg)`
  }

  const handleLeave = () => {
    const card = cardRef.current
    if (card) card.style.transform = ''
  }

  return (
    <div className="holo-stage" onMouseMove={handleMove} onMouseLeave={handleLeave}>
      <div className="chip-orbit" aria-hidden="true">
        {toolbox.map((label, i) => (
          <span
            key={label}
            className="chip"
            style={{
              '--a': `${(360 / toolbox.length) * i}deg`,
              '--r': 'min(200px, 60vw)',
              animationDelay: `${(-26 / toolbox.length) * i}s`,
            }}
          >
            {label}
          </span>
        ))}
      </div>

      <div className="holo-card" ref={cardRef}>
        <img src={skillsMedia.portrait} alt={`${profile.name}, ${profile.role}`} loading="lazy" />
        <div className="holo-meta">
          <span className="holo-role">{profile.role}</span>
          <span className="holo-name">{profile.name}</span>
        </div>
      </div>
    </div>
  )
}
