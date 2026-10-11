import { useRef, useState } from 'react'
import { profile } from '../data.js'
import { useInView } from '../hooks.js'

export default function About() {
  const [frameRef, seen] = useInView(0.3)
  const fileRef = useRef(null)
  const [photo, setPhoto] = useState('/assets/about.jpg')

  // click the frame to try your own photo
  const onFile = (e) => {
    const f = e.target.files[0]
    if (!f) return
    const r = new FileReader()
    r.onload = () => setPhoto(r.result)
    r.readAsDataURL(f)
  }

  return (
    <section id="about" className="red wv">
      <span className="spark" style={{ left: '6%', bottom: '26%' }}>✦</span>
      <span className="spark" style={{ right: '9%', top: '110px' }}>✦</span>
      <div className="about">
        <div className="hang">
          <div
            ref={frameRef}
            className={`frame${seen ? ' in' : ''}`}
            role="button"
            tabIndex={0}
            title="Click to change photo"
            onClick={() => fileRef.current.click()}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); fileRef.current.click() }
            }}
          >
            <img src={photo} alt="Portrait" />
          </div>
        </div>
        <div>
          <h2>Hello!</h2>
          <p>Hi, my name is <mark>{profile.short.toUpperCase()}</mark>, {profile.about}</p>
          <div className="tech">
            <div>
              <i>
                <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
                  <path fill="#3776ab" d="M15.9 2C10.5 2 10.8 4.3 10.8 4.3v2.4h5.2v.8H8.6S5 7.1 5 12.6s3.1 5.3 3.1 5.3H10v-2.5s-.1-3.1 3-3.1h5.2s2.9 0 2.9-2.8V5.1S21.6 2 15.9 2zm-2.9 1.7a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  <path fill="#ffd43b" d="M16.1 30c5.4 0 5.1-2.3 5.1-2.3v-2.4H16v-.8h7.4s3.6.4 3.6-5.1-3.1-5.3-3.1-5.3H22v2.5s.1 3.1-3 3.1h-5.2s-2.9 0-2.9 2.8v4.6S10.4 30 16.1 30zm2.9-1.7a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                </svg>
              </i>PYTHON
            </div>
            <div><i style={{ background: '#092e20', color: '#fff', font: '900 15px var(--sans)' }}>dj</i>DJANGO</div>
            <div>
              <i>
                <svg viewBox="-12 -12 24 24" width="28" height="28" fill="none" stroke="#61dafb" strokeWidth="1.2" aria-hidden="true">
                  <ellipse rx="10" ry="4" />
                  <ellipse rx="10" ry="4" transform="rotate(60)" />
                  <ellipse rx="10" ry="4" transform="rotate(120)" />
                  <circle r="1.8" fill="#61dafb" stroke="none" />
                </svg>
              </i>REACT
            </div>
            <div>
              <i>
                <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#e8212a" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" aria-hidden="true">
                  <path d="M12 2 3 7l9 5 9-5-9-5z" />
                  <path d="M3 12l9 5 9-5" />
                  <path d="M3 17l9 5 9-5" />
                </svg>
              </i>FULL STACK
            </div>
          </div>
        </div>
      </div>
      <input ref={fileRef} type="file" accept="image/*" hidden onChange={onFile} />
    </section>
  )
}
