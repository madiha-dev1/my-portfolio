import { useRef, useState } from 'react'
import { profile, skillsMedia } from '../data/portfolio'
import { sfx } from '../lib/sound'
import { SoundOff, SoundOn } from './Icons'

/** Portrait skills clip with its own volume button (browsers only allow sound after a tap). */
export default function SkillsVideo() {
  const ref = useRef(null)
  const [muted, setMuted] = useState(true)

  const toggle = () => {
    const v = ref.current
    if (!v) return
    v.muted = !v.muted
    v.volume = 1
    setMuted(v.muted)
    sfx.click(0)
    if (!v.muted) v.play().catch(() => {})
  }

  return (
    <>
      <video
        ref={ref}
        src={skillsMedia.video}
        muted
        loop
        playsInline
        autoPlay
        preload="metadata"
        aria-label={`${profile.name} introducing her skills`}
      />
      <button
        type="button"
        className="sound-btn skills-sound"
        onClick={toggle}
        aria-pressed={!muted}
        aria-label={muted ? 'Turn the sound on' : 'Turn the sound off'}
      >
        {muted ? <SoundOff /> : <SoundOn />}
        <span>{muted ? 'Sound on' : 'Sound off'}</span>
      </button>
    </>
  )
}
