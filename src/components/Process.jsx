import { Fragment, useEffect, useRef, useState } from 'react'
import { steps } from '../data.js'

export default function Process() {
  const refs = useRef([])
  const [active, setActive] = useState(0)

  // the step in the middle of the screen becomes the highlighted (red) one
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(Number(e.target.dataset.i)) }),
      { rootMargin: '-42% 0px -42% 0px' }
    )
    refs.current.forEach((el) => el && io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section className="white wv" id="process">
      <div className="proc">
        <div className="lead">
          <span className="tag">My process</span>
          <h2>Here's how I turn ideas into real-world applications</h2>
          <p>I follow a structured, creative, and highly technical approach to turn ideas into robust full-stack applications.</p>
        </div>
        <div id="path">
          {steps.map(([n, title, text], i) => (
            <Fragment key={n}>
              <div
                ref={(el) => (refs.current[i] = el)}
                data-i={i}
                className={`step${i % 2 ? '' : ' r'}${active === i ? ' on' : ''}`}
                style={{ '--t': `${i % 2 ? -2 : 2}deg` }}
              >
                <small>{n}</small><h3>{title}</h3><p>{text}</p>
              </div>
              {i < steps.length - 1 && (
                <svg className={`link${i < active ? ' on' : ''}`} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                  <path d={i % 2 ? 'M22 0C22 70 78 30 78 100' : 'M78 0C78 70 22 30 22 100'} />
                </svg>
              )}
            </Fragment>
          ))}
          <p className="ship">Ready to ship!</p>
        </div>
      </div>
    </section>
  )
}
