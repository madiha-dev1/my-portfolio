/* ---------------------------------------------------------------------------
   Every word on the site lives here, so copy changes never touch a component.
   All text is the same copy the original single-page site used.
   --------------------------------------------------------------------------- */

export const profile = {
  name: 'Madiha',
  logo: { lead: 'madiha', dot: '.', tail: 'dev' },
  role: 'Full Stack Developer',
  availability: 'Available for new projects',
  heroLead: 'Hi, I\u2019m',
  tagline: {
    before: 'I build ',
    strong: 'fast, scalable applications',
    after: ' \u2014 from database to UI, shipped with care and clean code.',
  },
  aboutHeading: 'I turn ideas into products that hold up under real traffic.',
  aboutBody:
    'I work across the stack \u2014 React and modern frontends on one end, Node/Django and databases on the other. I care about performance, clean architecture, and interfaces that feel effortless to use.',
  contactHeading: 'Let\u2019s build something fast and scalable together.',
  contactBody: 'Open to full-time roles and freelance projects. I usually reply within a day.',
  footer: '\u00a9 2026 Madiha. Built with React, Node.js, and a lot of coffee.',
  email: 'madihadev785@gmail.com',
  resumeHref: '#',
  socials: [
    { label: 'github.com/madiha-dev1', href: '#', kind: 'GitHub' },
    { label: 'linkedin.com/in/madiha-dev', href: '#', kind: 'LinkedIn' },
    { label: 'facebook.com/madiha', href: '#', kind: 'Facebook' },
  ],
}

export const heroMedia = { video: 'media/hero.mp4' }
export const skillsMedia = { video: 'media/skills.mp4', portrait: 'media/portrait.jpg' }

export const stats = [
  { k: 'Role', v: 'Full Stack Developer' },
  { k: 'Availability', v: 'Open to new projects' },
  { k: 'Engagements', v: 'Full-time roles & freelance projects' },
  { k: 'Reply time', v: 'Usually within a day' },
]

export const skillGroups = [
  {
    title: 'Frontend',
    items: [
      { name: 'React', note: 'Component-driven, performant frontends.' },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Python & Django', note: 'REST & realtime backends at scale.' },
      { name: 'PostgreSQL', note: 'Schema design, indexing, query tuning.' },
    ],
  },
  {
    title: 'Infrastructure',
    items: [
      { name: 'Docker & CI/CD', note: 'Shippable, reproducible deployments.' },
      { name: 'System Design', note: 'Architectures that scale with users.' },
    ],
  },
]

export const toolbox = [
  'HTML',
  'CSS',
  'JavaScript',
  'Bootstrap',
  'ReactJS',
  'Python',
  'Django',
  'PostgreSQL',
]

export const projects = [
  {
    num: '01',
    tag: 'Full Stack \u00b7 SaaS',
    title: 'Analytics Dashboard',
    desc: 'Realtime metrics platform serving 10k+ daily active users, built on React and PostgreSQL.',
    image: 'media/project-1.jpg',
  },
  {
    num: '02',
    tag: 'API \u00b7 Backend',
    title: 'Payments Service',
    desc: 'High-throughput payment API with retry queues and audit logging, built on Node.js.',
    image: 'media/project-2.jpg',
  },
  {
    num: '03',
    tag: 'Web App',
    title: 'Booking Platform',
    desc: 'End-to-end scheduling app with live availability sync across time zones.',
    image: 'media/project-3.jpg',
  },
]


export const navItems = [
  { to: '/', label: 'Home', end: true, icon: 'Home' },
  { to: '/about', label: 'About', icon: 'User' },
  { to: '/services', label: 'Services', icon: 'Layers' },
  { to: '/projects', label: 'Projects', icon: 'Briefcase' },
  { to: '/skills', label: 'Skills', icon: 'Code' },
  { to: '/contact', label: 'Contact', icon: 'MailSolid' },
]


