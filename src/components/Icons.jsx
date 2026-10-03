/* One place for every icon, all inheriting currentColor. */
const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

export function ArrowRight({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" strokeWidth="2.4" {...base}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

export function ArrowUp({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" strokeWidth="2.4" {...base}>
      <line x1="12" y1="19" x2="12" y2="5" />
      <polyline points="5 12 12 5 19 12" />
    </svg>
  )
}

export function Mail({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" strokeWidth="1.9" {...base}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="M3.5 7.5l7.6 5.2a1.6 1.6 0 0 0 1.8 0l7.6-5.2" />
    </svg>
  )
}

export function Download({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" strokeWidth="1.9" {...base}>
      <path d="M12 3v12" />
      <polyline points="7 10 12 15 17 10" />
      <path d="M4 20h16" />
    </svg>
  )
}

export function CodeBranch({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" strokeWidth="1.9" {...base}>
      <circle cx="6.5" cy="6" r="2.5" />
      <circle cx="6.5" cy="18" r="2.5" />
      <circle cx="17.5" cy="9" r="2.5" />
      <path d="M6.5 8.5v7" />
      <path d="M17.5 11.5c0 2.9-3.4 3.3-6.6 3.8" />
    </svg>
  )
}

export function LinkIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" strokeWidth="1.9" {...base}>
      <path d="M10 13.5a3.5 3.5 0 0 0 5 0l3-3a3.5 3.5 0 0 0-5-5l-1 1" />
      <path d="M14 10.5a3.5 3.5 0 0 0-5 0l-3 3a3.5 3.5 0 0 0 5 5l1-1" />
    </svg>
  )
}

export function Menu({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" strokeWidth="2" {...base}>
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  )
}

export function SoundOn({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" strokeWidth="1.9" {...base}>
      <path d="M4 9v6h3l5 4V5L7 9H4z" />
      <path d="M16 8.5a5 5 0 0 1 0 7" />
      <path d="M18.5 6a8.5 8.5 0 0 1 0 12" />
    </svg>
  )
}

export function SoundOff({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" strokeWidth="1.9" {...base}>
      <path d="M4 9v6h3l5 4V5L7 9H4z" />
      <line x1="16" y1="9.5" x2="21" y2="14.5" />
      <line x1="21" y1="9.5" x2="16" y2="14.5" />
    </svg>
  )
}

export function Home({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 3.2 2.6 11.4a.9.9 0 0 0 .6 1.6H5v7a1 1 0 0 0 1 1h4v-5.5h4V21h4a1 1 0 0 0 1-1v-7h1.8a.9.9 0 0 0 .6-1.6L12 3.2z" />
    </svg>
  )
}

export function User({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <circle cx="12" cy="7.5" r="4.6" />
      <path d="M3.5 21c0-4.6 3.8-7.4 8.5-7.4s8.5 2.8 8.5 7.4a.9.9 0 0 1-.9.9H4.4a.9.9 0 0 1-.9-.9z" />
    </svg>
  )
}

export function Code({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="8 6 2.5 12 8 18" />
      <polyline points="16 6 21.5 12 16 18" />
      <line x1="14" y1="4.5" x2="10" y2="19.5" />
    </svg>
  )
}

export function Briefcase({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M9 3.5A1.5 1.5 0 0 0 7.5 5v1.5H4A2 2 0 0 0 2 8.5v3.2h20V8.5a2 2 0 0 0-2-2h-3.5V5A1.5 1.5 0 0 0 15 3.5H9zm0 1.5h6v1.5H9V5z" />
      <path d="M2 13.2V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.8h-8.5v1.3h-3v-1.3H2z" />
    </svg>
  )
}

export function MailSolid({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M3.5 4.5h17A1.5 1.5 0 0 1 22 6v.4l-10 6.2L2 6.4V6a1.5 1.5 0 0 1 1.5-1.5z" />
      <path d="M2 8.6V18a1.5 1.5 0 0 0 1.5 1.5h17A1.5 1.5 0 0 0 22 18V8.6l-9.4 5.8a1.2 1.2 0 0 1-1.2 0L2 8.6z" />
    </svg>
  )
}

export function Github({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.77-.24.77-.54v-2.1c-3.13.68-3.79-1.33-3.79-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.63 1.22 3.27.93.1-.73.39-1.22.71-1.5-2.5-.28-5.13-1.25-5.13-5.56 0-1.23.44-2.23 1.16-3.02-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.1 1.15a10.7 10.7 0 0 1 5.64 0c2.15-1.45 3.1-1.15 3.1-1.15.61 1.55.23 2.7.11 2.98.72.79 1.16 1.79 1.16 3.02 0 4.32-2.63 5.27-5.14 5.55.4.35.76 1.03.76 2.08v3.08c0 .3.2.65.78.54A11.2 11.2 0 0 0 12 .8z" />
    </svg>
  )
}

export function Linkedin({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.2 2.5h15.6a1.7 1.7 0 0 1 1.7 1.7v15.6a1.7 1.7 0 0 1-1.7 1.7H4.2a1.7 1.7 0 0 1-1.7-1.7V4.2a1.7 1.7 0 0 1 1.7-1.7zM7.9 9.5H5.2V18h2.7V9.5zM6.55 5.4a1.55 1.55 0 1 0 0 3.1 1.55 1.55 0 0 0 0-3.1zM18.8 18v-4.7c0-2.3-1.2-3.9-3.3-3.9-1.1 0-1.9.6-2.3 1.2V9.5h-2.6V18h2.7v-4.5c0-1.2.6-1.9 1.6-1.9s1.5.7 1.5 1.9V18h2.4z" />
    </svg>
  )
}

export function Facebook({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 1.5a10.5 10.5 0 0 0-1.64 20.87v-7.36H7.7V12h2.66V9.85c0-2.63 1.56-4.08 3.96-4.08 1.15 0 2.35.2 2.35.2v2.58h-1.32c-1.3 0-1.7.8-1.7 1.63V12h2.9l-.46 3.01h-2.44v7.36A10.5 10.5 0 0 0 12 1.5z" />
    </svg>
  )
}

export function Server({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" strokeWidth="1.8" {...base}>
      <rect x="3" y="4" width="18" height="6.5" rx="2" />
      <rect x="3" y="13.5" width="18" height="6.5" rx="2" />
      <line x1="7" y1="7.25" x2="7.01" y2="7.25" />
      <line x1="7" y1="16.75" x2="7.01" y2="16.75" />
    </svg>
  )
}

export function Layers({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" strokeWidth="1.8" {...base}>
      <polygon points="12 3 21.5 8 12 13 2.5 8 12 3" />
      <polyline points="2.5 12 12 17 21.5 12" />
      <polyline points="2.5 16 12 21 21.5 16" />
    </svg>
  )
}


export function Database({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" strokeWidth="1.8" {...base}>
      <ellipse cx="12" cy="5" rx="8.5" ry="3" />
      <path d="M3.5 5v14c0 1.7 3.8 3 8.5 3s8.5-1.3 8.5-3V5" />
      <path d="M3.5 12c0 1.7 3.8 3 8.5 3s8.5-1.3 8.5-3" />
    </svg>
  )
}

export function Smartphone({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" strokeWidth="1.8" {...base}>
      <rect x="6" y="2.5" width="12" height="19" rx="2" />
      <line x1="10" y1="18.5" x2="14" y2="18.5" />
    </svg>
  )
}

export function Shield({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" strokeWidth="1.8" {...base}>
      <path d="M12 3 20 6v5c0 5.2-3.4 8.8-8 10-4.6-1.2-8-4.8-8-10V6l8-3z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

export function ExternalLink({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" strokeWidth="1.9" {...base}>
      <path d="M14 5h5v5" />
      <path d="M19 5 10 14" />
      <path d="M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5" />
    </svg>
  )
}
