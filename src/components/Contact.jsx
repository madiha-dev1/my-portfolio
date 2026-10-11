import { useLayoutEffect, useRef, useState } from 'react'
import { profile } from '../data.js'

export default function Contact() {
  const giant = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  // keep the giant CONTACT word inside the screen
  useLayoutEffect(() => {
    const fit = () => {
      const g = giant.current
      if (!g) return
      g.style.fontSize = ''
      let f = parseFloat(getComputedStyle(g).fontSize)
      while (g.scrollWidth > g.clientWidth && f > 30) { f -= 3; g.style.fontSize = f + 'px' }
    }
    fit()
    window.addEventListener('resize', fit)
    document.fonts?.ready.then(fit)
    return () => window.removeEventListener('resize', fit)
  }, [])

  // opens the visitor's email app
  const send = () => {
    const subject = encodeURIComponent('Portfolio enquiry from ' + form.name)
    const body = encodeURIComponent(form.message + '\n\n' + form.email)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="white wv">
      <h2 className="giant" ref={giant}>Contact</h2>
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <label>First name<input placeholder="Your first name" value={form.name} onChange={set('name')} /></label>
        <label>Email<input type="email" placeholder="you@email.com" value={form.email} onChange={set('email')} /></label>
        <label className="full">Message<textarea rows="3" placeholder="Tell me about your project" value={form.message} onChange={set('message')} /></label>
        <div className="full"><button className="btn w" type="button" onClick={send}>Send message</button></div>
      </form>
    </section>
  )
}
