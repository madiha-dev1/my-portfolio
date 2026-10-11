import { useEffect, useRef, useState } from 'react'
import { profile } from '../data.js'
import { socials } from '../socials.js'
import { prefersReducedMotion } from '../hooks.js'

export default function Hero() {
  const vid = useRef(null)
  const [paused, setPaused] = useState(false)
  const [muted, setMuted] = useState(true)

  useEffect(() => {
    if (prefersReducedMotion()) vid.current?.pause()
  }, [])

  const togglePlay = () => {
    const v = vid.current
    v.paused ? v.play() : v.pause()
  }
  const toggleSound = () => {
    const v = vid.current
    const m = !v.muted
    v.muted = m
    v.volume = 1
    setMuted(m)
    if (!m && v.paused) v.play()
  }

  return (
    <section id="home" className="red">
      <div className="hero-copy">
        <h1>Hi, I'm {profile.short},<span>{profile.role}</span></h1>
        <p>{profile.heroText}</p>
        <div className="btns">
          <a className="btn w" href="#projects">View my work</a>
          <a className="btn" href="#contact">Contact me</a>
          <a className="btn" href={profile.resume} download="Madiha-Memon-Resume.pdf">Download resume</a>
        </div>
        <div className="social">
          {socials.map((s) => (
            <a key={s.name} className="soc" href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name} title={s.name}>
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={s.path} /></svg>
            </a>
          ))}
        </div>
      </div>
      <video
        ref={vid}
        className="bg"
        src="/assets/hero.mp4"
        poster="/assets/poster.jpg"
        autoPlay
        muted={muted}
        loop
        playsInline
        preload="auto"
        aria-label="Portrait video"
        onPlay={() => setPaused(false)}
        onPause={() => setPaused(true)}
      />
      <button className="reel snd" aria-label={muted ? 'Turn sound on' : 'Turn sound off'} onClick={toggleSound}>
        <b>{muted ? '🔇' : '🔊'}</b><small>{muted ? 'SOUND' : 'MUTE'}</small>
      </button>
      <button className="reel" aria-label={paused ? 'Play video' : 'Pause video'} onClick={togglePlay}>
        <b>{paused ? '▶' : '❚❚'}</b><small>{paused ? 'PLAY REEL' : 'PAUSE'}</small>
      </button>
    </section>
  )
}
