import { profile } from '../data.js'

export default function Footer() {
  const { github, linkedin, instagram } = profile.links
  const a = { target: '_blank', rel: 'noopener noreferrer' }
  return (
    <footer>
      <b>madiha memon</b>© 2026 Madiha Memon ·{' '}
      <a href={github} {...a}>github</a> · <a href={linkedin} {...a}>linkedin</a> · <a href={instagram} {...a}>instagram</a>
    </footer>
  )
}
