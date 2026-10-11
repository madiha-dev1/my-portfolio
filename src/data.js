// All portfolio content lives here. The website AND the chatbot read from this file,
// so when you edit something here, both are updated.

export const profile = {
  name: 'Madiha Memon',
  short: 'Madiha',
  role: 'Full Stack Developer',
  email: 'madihadev785@gmail.com',
  resume: '/assets/Madiha-Memon-Resume.pdf',
  heroText:
    'I build responsive, full-stack web applications with React, Django, Python and PostgreSQL.',
  about:
    'a full stack developer who builds clean, responsive and scalable web applications with React, Django and PostgreSQL.',
  links: {
    github: 'https://github.com/madiha-dev1',
    linkedin: 'https://www.linkedin.com/in/madiha-dev-31554142a/',
    instagram: 'https://www.instagram.com/madiha_.dev',
    tiktok: 'https://www.tiktok.com/@madiha_dev',
    telegram: 'https://t.me/madihadev',
  },
}

export const skills = {
  Languages: [['Python', 85], ['JavaScript', 80], ['HTML', 95], ['CSS', 90]],
  Frontend: [['React', 80], ['Bootstrap', 90], ['Responsive design', 90]],
  Backend: [['Django', 80], ['REST APIs', 75], ['Authentication', 70]],
  Database: [['PostgreSQL', 80], ['SQL queries', 80], ['Database design', 75]],
  Tools: [['Git & GitHub', 85], ['VS Code', 90], ['Postman', 70]],
  Concepts: [['OOP', 80], ['CRUD operations', 90], ['Problem solving', 85]],
}

export const steps = [
  ['01', 'Research', 'I start by understanding goals, user requirements and technical constraints to lay a rock-solid foundation.'],
  ['02', 'Design', 'Crafting clean architecture, intuitive interfaces and pixel-perfect wireframes for an accessible experience.'],
  ['03', 'Develop', 'Building scalable backends and responsive frontends using modern tech stacks and best practices.'],
  ['04', 'Deploy', 'Rigorous testing, performance tuning and smooth deployment to the cloud, followed by ongoing support.'],
]

export const projects = [
  {
    title: 'Library Management System',
    desc: "A web application to manage a library's books and members, including records of books issued and returned.",
    tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'React'],
    links: [
      { label: 'GitHub', href: 'https://github.com/madiha-dev1/library-management-project' },
      { label: 'Live demo ↗', href: 'https://madiha-dev1.github.io/library-management-project/' },
    ],
  },
  {
    title: 'Expense Tracker',
    desc: 'Record daily income and expenses in one place and see clearly where the money goes.',
    tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'React'],
    links: [
      { label: 'GitHub', href: 'https://github.com/madiha-dev1/expense-tracker-app' },
      { label: 'Live demo ↗', href: 'https://madiha-dev1.github.io/expense-tracker-app/' },
    ],
  },
  {
    title: 'E-commerce Website',
    desc: 'An online store with product listings, a shopping cart and a layout that works on every screen size. Currently in progress.',
    tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'React'],
    links: [{ label: 'GitHub', href: 'https://github.com/madiha-dev1' }],
    soon: 'Live demo · in progress',
  },
  {
    title: 'Personal Portfolio',
    desc: 'This portfolio: a responsive, animated website that presents my skills, projects and resume.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    links: [{ label: 'GitHub', href: 'https://github.com/madiha-dev1/my-portfolio' }],
    soon: 'Live link · coming soon',
  },
]

export const certificates = [
  ['Certification · 2025', 'Full Stack Web Development', 'Completed a hands-on course covering React, Node.js, Express and MongoDB with a final capstone project.'],
  ['Certification · 2025', 'JavaScript Algorithms & Data Structures', 'Solved 300+ practice problems on arrays, recursion, sorting and dynamic programming.'],
  ['Certification · 2024', 'Responsive Web Design', 'Built five responsive projects using HTML, CSS, Flexbox and Grid.'],
  ['Cloud · 2024', 'AWS Cloud Practitioner', 'Learned core AWS services, cloud security basics, pricing models and architecture principles.'],
  ['Hackathon · 2024', 'Hackathon Participation Certificate', 'Built and presented a working prototype within 24 hours as part of a team.'],
  ['Course · 2023', 'Git & GitHub Essentials', 'Practiced branching, pull requests, merge conflicts and collaborative workflows.'],
]