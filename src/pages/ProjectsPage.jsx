import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { ArrowRight, ExternalLink } from '../components/Icons'
import { useState, useEffect, useCallback } from "react";


const projects = [
  {
    tag: "Frontend",
    title: "Library Management System",
    desc: "An admin dashboard to add books and users, assign and return books, and keep track of recent activity with a clean, responsive layout.",
    tech: ["React.js", "Bootstrap", "React Router"],
    image: "/media/library-desktop.jpg",
    mobileImage: "/media/library-mobile.jpg",
    demo: "https://madiha-dev1.github.io/library-management-project/",
  },
  {
    tag: "Frontend",
    title: "Expense Tracker",
    desc: "Track daily expenses by title, amount, category and date, delete selected entries and see the running total at a glance.",
    tech: ["React.js", "JavaScript", "Bootstrap"],
    image: "/media/expense-desktop.jpg",
    mobileImage: "/media/expense-mobile.jpg",
    demo: "https://madiha-dev1.github.io/expense-tracker-app/",
  },
  {
    tag: "In Progress",
    title: "E-Commerce Website",
    desc: "A modern online store with product listings, a shopping cart and a smooth checkout flow. This project is currently under development \u2014 the live demo will be added soon.",
    tech: ["React.js"],
    image: "/media/ecommerce-desktop.jpg",
    mobileImage: "/media/ecommerce-mobile.jpg",
    demo: "#",
  },
  {
    tag: "Full Stack",
    title: "Restaurant Web App",
    desc: "Deploying this project came with its own challenges, but I made sure everything was done right — proper sign-in/sign-up authentication, and a UI that's modern, clean, and includes smooth animations throughout.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    image: "/media/project-1.jpg",
    mobileImage: "",
    demo: "#",
  },
  {
    tag: "Frontend",
    title: "SaaS Landing Page",
    desc: "A conversion-focused landing page with pricing tiers, animated feature sections and a fully responsive layout.",
    tech: ["React.js", "Tailwind CSS"],
    image: "/media/project-2.jpg",
    mobileImage: "",
    demo: "#",
  },
  {
    tag: "E-Commerce",
    title: "Shopify Store",
    desc: "A custom Shopify theme with a fast product grid, quick-view cart drawer and a clean checkout flow.",
    tech: ["Shopify", "Liquid", "JavaScript"],
    image: "/media/project-3.jpg",
    mobileImage: "",
    demo: "#",
  },
  {
    tag: "WordPress",
    title: "Business Website",
    desc: "A custom WordPress build for a client with a lightweight theme, SEO setup and an easy-to-edit admin.",
    tech: ["WordPress", "PHP", "Elementor"],
    image: "/media/project-4.jpg",
    mobileImage: "",
    demo: "#",
  },
  {
    tag: "Full Stack",
    title: "Task Manager",
    desc: "A task dashboard with drag-and-drop boards, user accounts and real-time updates.",
    tech: ["React.js", "Node.js", "MongoDB"],
    image: "/media/project-5.jpg",
    mobileImage: "",
    demo: "#",
  },
];

const ChevronLeft = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M15 18l-6-6 6-6" />
  </svg>
);
const ChevronRight = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 18l6-6-6-6" />
  </svg>
);
const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <path d="M15 3h6v6" />
    <path d="M10 14L21 3" />
  </svg>
);

function Screen({ src, alt, position = "center" }) {
  return (
    <img
      src={src}
      alt={alt}
      className="h-full w-full bg-[#02070D] object-cover"
      style={{ objectPosition: position }}
    />
  );
}

function DeviceMockup({ project }) {
  return (
    <div className="relative mx-auto w-full max-w-[780px] rounded-2xl">
      {/* monitor */}
      <div className="overflow-hidden rounded-xl border-[6px] border-[#0b1c2c] bg-[#02070D] shadow-[0_0_90px_-25px_rgba(0,246,254,0.35)] sm:rounded-2xl sm:border-8">
        <div className="aspect-[16/9]">
          <Screen src={project.image} alt={project.title} />
        </div>
      </div>
      <div className="mx-auto h-8 w-24 bg-gradient-to-b from-[#0b1c2c] to-[#071522] sm:h-12 sm:w-36" />
      <div className="mx-auto h-1.5 w-40 rounded-full bg-[#0b1c2c] sm:h-2 sm:w-56" />

      {/* phone (mobileImage nahi hai to same image top se crop hoti hai) */}
      <div className="absolute -bottom-2 -right-1 w-[22%] min-w-[80px] rounded-[18px] border-[4px] border-[#0b1c2c] bg-[#02070D] shadow-[0_10px_40px_-8px_#00E5FF35] sm:-bottom-4 sm:-right-14 sm:w-[21%] sm:rounded-[24px] sm:border-[5px]">
        <div className="aspect-[9/19] overflow-hidden rounded-[13px] sm:rounded-[19px]">
          <Screen src={project.mobileImage || project.image} alt="" position="top" />
        </div>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = projects.length;
  const project = projects[index];

  const go = useCallback((dir) => setIndex((i) => (i + dir + total) % total), [total]);

  // autoplay (hover / focus par ruk jata hai)
  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => go(1), 6000);
    return () => clearInterval(id);
  }, [paused, go]);

  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") go(-1);
    if (e.key === "ArrowRight") go(1);
  };

  return (
    <div className="pg">
      <style>{`
        @keyframes ppSlideIn { from { opacity: 0; transform: translateY(14px) scale(.985); } to { opacity: 1; transform: none; } }
        @keyframes ppFloat { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        .pp-slide-in { animation: ppSlideIn .55s cubic-bezier(.2,.7,.2,1) both; }
        .pp-float { animation: ppFloat 6s ease-in-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          .pp-slide-in, .pp-float { animation: none; }
        }
      `}</style>

      <PageHero
        kicker="Selected work"
        title={<>Featured <em>Projects</em></>}
        lead="A collection of web projects showing my frontend, backend and full-stack development work."
      />

      <section className="pg-section is-tight">
        <div
          className="relative px-2 py-10 outline-none sm:px-4"
          tabIndex={0}
          aria-roledescription="carousel"
          aria-label="Projects"
          onKeyDown={onKeyDown}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          {/* ambient glow (soft, koi hard edge nahi) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_55%_at_50%_42%,rgba(0,229,255,0.16),transparent_70%)]"
          />

          <div className="relative mx-auto flex max-w-6xl items-center gap-4">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous project"
              className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#00E5FF35] bg-[#071522]/80 text-[#00E5FF] transition hover:scale-110 hover:border-[#00E5FF] hover:shadow-[0_0_20px_#00F6FE66] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#8FFAFF] sm:flex"
            >
              <ChevronLeft />
            </button>

            <div key={index} className="pp-slide-in min-w-0 flex-1" aria-live="polite">
              <div className="pp-float px-0 py-6 sm:px-6">
                <DeviceMockup project={project} />
              </div>
            </div>

            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next project"
              className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#00E5FF35] bg-[#071522]/80 text-[#00E5FF] transition hover:scale-110 hover:border-[#00E5FF] hover:shadow-[0_0_20px_#00F6FE66] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#8FFAFF] sm:flex"
            >
              <ChevronRight />
            </button>
          </div>

          {/* dots (+ mobile arrows) */}
          <div className="relative mt-6 flex items-center justify-center gap-3">
            <button type="button" onClick={() => go(-1)} aria-label="Previous project" className="text-[#00E5FF] sm:hidden">
              <ChevronLeft />
            </button>
            <div className="flex items-center gap-2" role="tablist" aria-label="Choose project">
              {projects.map((p, i) => (
                <button
                  key={p.title}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Show ${p.title}`}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index
                      ? "w-6 bg-[#00E5FF] shadow-[0_0_10px_#00E5FF]"
                      : "w-1.5 bg-[#00E5FF]/25 hover:bg-[#00E5FF]/60"
                  }`}
                />
              ))}
            </div>
            <button type="button" onClick={() => go(1)} aria-label="Next project" className="text-[#00E5FF] sm:hidden">
              <ChevronRight />
            </button>
          </div>

          {/* info */}
          <div key={`info-${index}`} className="pp-slide-in relative mx-auto mt-12 max-w-2xl px-2">
            <div className="rounded-2xl border border-transparent p-4 transition-colors hover:border-[#00E5FF35] hover:bg-[#071522]/60">
              <div className="flex flex-wrap items-center gap-4">
                <span className="rounded-full border border-[#00E5FF35] bg-[#00E5FF]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8FFAFF]">
                  {project.tag}
                </span>
                <h2 className="text-2xl font-semibold text-white md:text-3xl">{project.title}</h2>
              </div>

              <p className="mt-4 text-sm leading-7 text-white/65">{project.desc}</p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-[#00E5FF35] bg-[#02070D]/60 px-3 py-1 text-xs font-medium text-[#8FFAFF] transition hover:border-[#00E5FF] hover:shadow-[0_0_12px_#00F6FE66]"
                  >
                    {t}
                  </li>
                ))}
              </ul>

              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#00E5FF] to-[#8FFAFF] px-6 py-3 text-sm font-semibold text-[#02070D] shadow-[0_0_28px_#00F6FE66] transition hover:-translate-y-0.5 hover:shadow-[0_0_40px_#00E5FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8FFAFF]"
              >
                <ExternalIcon />
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="pg-section is-alt is-border">
        <div className="pg-container is-narrow pg-cta">
          <Reveal as="h2" className="pg-title is-tight">Want to work together?</Reveal>
          <Reveal as="p" className="pg-lede" delay={60}>Have a project in mind? Let’s talk about what you need.</Reveal>
          <Reveal className="pg-actions" delay={120}>
            <Link className="pg-btn pg-btn-primary" to="/contact">
              <span>Let’s Talk</span><ArrowRight />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}