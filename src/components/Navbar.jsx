import { useState } from 'react'

const links = [['home', 'Home'], ['about', 'About'], ['skills', 'Skills'], ['projects', 'Projects'], ['contact', 'Contact']]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className={open ? 'open' : ''}>
      <a href="#home"><b>Madiha.</b></a>
      <ul>
        {links.map(([id, label]) => (
          <li key={id}><a href={`#${id}`} onClick={() => setOpen(false)}>{label}</a></li>
        ))}
      </ul>
      <a className="pill" href="#contact">Hire me</a>
      <button className="burger" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
        {open ? '✕' : '☰'}
      </button>
    </nav>
  )
}
