import { Link, NavLink } from 'react-router-dom'
import { navItems, profile, skillsMedia } from '../data/portfolio'
import { sfxProps } from '../lib/sound'
import { Briefcase, Code, Home, MailSolid, User, Layers } from './Icons'

const ICONS = { Home, User, Code, Briefcase, MailSolid, Layers }

/** Round avatar (left), "Hire Me" (right) and the floating icon dock at the bottom. */
export default function Nav() {
  // "Work" ka duplicate icon dock se hata diya
  const items = navItems.filter((item) => item.label !== 'Work')

  return (
    <>
      <header className="top-bar">
        <Link to="/" className="top-avatar" aria-label={`${profile.name} — home`} {...sfxProps(0)}>
          <img src={skillsMedia.portrait} alt="" />
        </Link>
        <Link to="/contact" className="hire-btn" {...sfxProps(3)}>
          Hire Me
        </Link>
      </header>

      <nav className="dock" aria-label="Main">
        {items.map((item, i) => {
          const Icon = ICONS[item.icon]
          return (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className="dock-link"
              aria-label={item.label}
              {...sfxProps(i)}
            >
              <Icon />
              <span className="dock-tip" aria-hidden="true">
                {item.label}
              </span>
            </NavLink>
          )
        })}
      </nav>
    </>
  )
}