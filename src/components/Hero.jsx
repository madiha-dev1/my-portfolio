import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { heroMedia, profile } from '../data/portfolio'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { ArrowRight, Mail, SoundOff, SoundOn } from './Icons'
import { faArrowRightArrowLeft, faCircle, faCircleArrowRight, faDownload } from '@fortawesome/free-solid-svg-icons'

const RESUME_URL = `${import.meta.env.BASE_URL}Madiha-Noor-Resume.pdf`

export default function Hero() {
  const videoRef = useRef(null)
  const [muted, setMuted] = useState(true)

  const toggleSound = () => {
    const video = videoRef.current
    if (!video) return
    video.muted = !video.muted
    setMuted(video.muted)
    if (!video.muted) video.play().catch(() => {})
  }

  return (
    <section className="hero" id="home">
      {/* object-fit: contain keeps the whole 16:9 frame visible, never cropped */}
      <video
        ref={videoRef}
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={`${profile.name} — ${profile.role}`}
      >
        <source src={heroMedia.video} type="video/mp4" />
      </video>

      <div className="hero-scrim" aria-hidden="true" />

      <div className="hero-inner">
        <div className="max-w-[720px]">
          <p className="eyebrow">
            <span className="eyebrow-dot" aria-hidden="true" />
            {profile.availability}
          </p>

          <h1>
            <span className="h1-lead">{profile.heroLead}</span>{' '}
            <span className="h1-name">{profile.name}</span>
          </h1>

          <div className="role-row">
            <span className="role-line" aria-hidden="true" />
            <p className="role">{profile.role}</p>
          </div>

          <div className="mt-7 flex flex-wrap gap-3.5">
            <a
              className="btn btn-primary"
              href={RESUME_URL}
              download="Madiha-Noor-Resume.pdf"
              onClick={() => window.open(RESUME_URL, '_blank', 'noopener')}
            >
            <FontAwesomeIcon icon={faDownload}/>
              <span>Download Resume</span>
            </a>
            <a className="btn btn-ghost" href={`mailto:${profile.email}`}>
              <FontAwesomeIcon icon={faCircleArrowRight}/>
              <span>Hire me</span>
            </a>
          </div>
          </div>
</div>

      <button
        type="button"
        className="sound-btn"
        onClick={toggleSound}
        aria-label={muted ? 'Unmute the introduction video' : 'Mute the introduction video'}
      >
        {muted ? <SoundOff /> : <SoundOn />}
      </button>
    </section>
  )
}