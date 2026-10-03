import { profile } from '../data/portfolio'
import { sfxProps } from '../lib/sound'
import { Facebook, Github, Linkedin } from './Icons'

const ICONS = { GitHub: Github, LinkedIn: Linkedin, Facebook }

/** Fixed left rail: line, GitHub, LinkedIn, Facebook, line. Every touch plays a sound. */
export default function SocialRail() {
  return (
    <aside className="social-rail" aria-label="Social links">
      <span className="rail-line" aria-hidden="true" />
      {profile.socials.map((s, i) => {
        const Icon = ICONS[s.kind]
        if (!Icon) return null
        return (
          <a
            key={s.kind}
            className="rail-btn"
            href={s.href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={s.kind}
            {...sfxProps(i + 1)}
          >
            <Icon />
          </a>
        )
      })}
      <span className="rail-line" aria-hidden="true" />
    </aside>
  )
}
