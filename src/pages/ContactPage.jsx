import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { ArrowRight, CodeBranch, Download, LinkIcon, Mail } from '../components/Icons'
import { profile } from '../data/portfolio'

export default function ContactPage() {
  const [note, setNote] = useState(null)

  const keys = [
    { tag: 'Email', value: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
    { tag: 'GitHub', value: profile.socials[0].label, href: profile.socials[0].href, Icon: CodeBranch },
    { tag: 'LinkedIn', value: profile.socials[1].label, href: profile.socials[1].href, Icon: LinkIcon },
  ]

  /**
   * There is no server here, so the form hands the message to the visitor's own
   * mail client. Validation runs first and the note is always re-set, so a
   * stale error can never linger after a successful attempt.
   */
  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') || '').trim()
    const email = String(data.get('email') || '').trim()
    const subject = String(data.get('subject') || '').trim()
    const message = String(data.get('message') || '').trim()

    if (!name || !email || !message) {
      setNote({ text: 'Please fill in your name, your email and a message.', error: true })
      return
    }

    setNote({ text: 'Opening your email app with the message ready to send.', error: false })
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject || 'Website enquiry'
    )}&body=${encodeURIComponent(body)}`
  }

  return (
    <div className="pg">
      <PageHero kicker="Get in touch" title={profile.contactHeading} lead={profile.contactBody} />

      <section className="pg-section is-tight">
        <div className="pg-container">
          <div className="pg-grid pg-grid-3">
            {keys.map(({ tag, value, href, Icon }, index) => (
              <Reveal key={tag} as="a" href={href} className="pg-info-card" delay={index * 60}>
                <span className="pg-info-ico">
                  <Icon />
                </span>
                <span>
                  <span className="pg-info-k">{tag}</span>
                  <span className="pg-info-v">{value}</span>
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pg-section is-alt">
        <div className="pg-container pg-grid pg-grid-2">
          <Reveal>
            <p className="pg-kicker">Send a message</p>
            <h2 className="pg-title is-tight" style={{ fontSize: 'clamp(1.5rem, 2.6vw, 2rem)' }}>
              Tell me about the project.
            </h2>

            <form style={{ display: 'grid', gap: '16px' }} onSubmit={handleSubmit} noValidate>
              <div className="pg-field">
                <label htmlFor="cf-name">Your name</label>
                <input id="cf-name" name="name" type="text" placeholder="Jane Doe" autoComplete="name" />
              </div>
              <div className="pg-field">
                <label htmlFor="cf-email">Your email</label>
                <input id="cf-email" name="email" type="email" placeholder="jane@company.com" autoComplete="email" />
              </div>
              <div className="pg-field">
                <label htmlFor="cf-subject">Subject</label>
                <input id="cf-subject" name="subject" type="text" placeholder="New project — web app" />
              </div>
              <div className="pg-field">
                <label htmlFor="cf-message">Message</label>
                <textarea id="cf-message" name="message" placeholder="What are you building?" />
              </div>

              <div style={{ marginTop: '2px' }}>
                <button className="pg-btn pg-btn-primary" type="submit">
                  <span>Send Message</span>
                  <ArrowRight />
                </button>
              </div>

              <p
                id="form-note"
                className="pg-form-note"
                style={{ color: note?.error ? '#b1432f' : undefined }}
                role="status"
              >
                {note?.text ?? (
                  <>
                    This form has no server behind it &mdash; it opens your own email app with the message
                    already written, addressed to <a href={`mailto:${profile.email}`}>{profile.email}</a>.
                    Prefer that anyway? Just email me directly.
                  </>
                )}
              </p>
            </form>
          </Reveal>

          <Reveal delay={80}>
            <p className="pg-kicker">Rather skip the form?</p>
            <h2 className="pg-title is-tight" style={{ fontSize: 'clamp(1.5rem, 2.6vw, 2rem)' }}>
              Reach me directly.
            </h2>
            <p className="pg-lede">
              If you just want to talk through an idea first, that&#8217;s fine &mdash; send me a line and
              I&#8217;ll walk you through how I&#8217;d approach it.
            </p>

            <div className="pg-actions">
              <a className="pg-btn pg-btn-outline" href={`mailto:${profile.email}`}>
                <Mail />
                <span>{profile.email}</span>
              </a>
              <a className="pg-btn pg-btn-outline" href={profile.resumeHref}>
                <Download />
                <span>Download Resume</span>
              </a>
            </div>

            <div style={{ marginTop: '18px' }}>
              <Link className="pg-pill-link is-quiet" to="/">
                The animated home page
                <ArrowRight />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pg-section is-border">
        <div className="pg-container is-narrow pg-cta">
          <Reveal as="h2" className="pg-title is-tight" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>
            Not sure where to start?
          </Reveal>
          <Reveal as="p" className="pg-lede" delay={60}>
            Have a look at the work and the stack first &mdash; then tell me what you need.
          </Reveal>
          <Reveal className="pg-actions" delay={120}>
            <Link className="pg-btn pg-btn-primary" to="/work">
              <span>See My Work</span>
              <ArrowRight />
            </Link>
            <Link className="pg-btn pg-btn-outline" to="/skills">
              <span>See the Stack</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
