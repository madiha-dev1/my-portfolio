import { Link } from "react-router-dom";

/* THEME
   Cyan glow #00E5FF · Dark navy #050B14 · Deep navy #071522 · Black navy #02070D
   Light cyan #8FFAFF · Soft cyan #00F6FE66 · Cyan border #00E5FF35 */

const plans = [
  {
    name: "Starter",
    price: "$299",
    desc: "Perfect for small businesses & landing pages",
    to: "/services",
  },
  {
    name: "Professional",
    price: "$599",
    desc: "Best for growing businesses & web apps",
    to: "/services",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$999+",
    desc: "For SaaS platforms & complex projects",
    to: "/services",
  },
];

export default function Pricing() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#050B14] via-[#071522] to-[#02070D] px-4 py-20 text-white">
      {/* soft glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_55%,rgba(0,229,255,0.12),transparent_70%)]"
      />

      {/* heading */}
      <div className="relative mx-auto max-w-2xl text-center">
        <span className="inline-block rounded-full border border-[#00E5FF35] bg-[#00E5FF]/10 px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-[#8FFAFF]">
          Pricing
        </span>
        <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">See Our Pricing</h2>
        <p className="mt-4 text-base text-white/60 md:text-lg">
          Transparent pricing for every budget. No hidden fees.
        </p>
      </div>

      {/* cards */}
      <div className="relative mx-auto mt-16 grid max-w-6xl items-center gap-8 md:grid-cols-3 md:gap-6">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={`relative flex flex-col items-center rounded-[36px] border px-8 text-center backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1.5 ${
              plan.popular
                ? "border-[#00E5FF]/50 bg-[#071522]/80 py-14 shadow-[0_0_80px_-20px_rgba(0,229,255,0.45)]"
                : "border-[#00E5FF35] bg-[#071522]/50 py-10"
            }`}
          >
            {plan.popular && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-[#00E5FF] to-[#8FFAFF] px-5 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-[#02070D] shadow-[0_0_25px_#00F6FE66]">
                Most Popular
              </span>
            )}

            <h3 className="text-xl font-semibold uppercase tracking-[0.15em] text-white/75">
              {plan.name}
            </h3>

            <p
              className={`mt-4 text-6xl font-extrabold tracking-tight ${
                plan.popular
                  ? "bg-gradient-to-r from-[#8FFAFF] to-[#00E5FF] bg-clip-text text-transparent"
                  : "text-white"
              }`}
            >
              {plan.price}
            </p>

            <p className="mt-5 max-w-[16rem] text-sm leading-6 text-white/55">{plan.desc}</p>

            <Link
              to={plan.to}
              className={`mt-10 inline-flex w-full items-center justify-center rounded-full px-6 py-4 text-base font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8FFAFF] ${
                plan.popular
                  ? "bg-gradient-to-r from-[#00E5FF] to-[#8FFAFF] text-[#02070D] shadow-[0_0_30px_#00F6FE66] hover:-translate-y-0.5 hover:shadow-[0_0_45px_#00E5FF]"
                  : "border-2 border-[#00E5FF]/40 text-[#8FFAFF] hover:border-[#00E5FF] hover:bg-[#00E5FF]/10 hover:shadow-[0_0_25px_#00F6FE66]"
              }`}
            >
              View Full Details
            </Link>
          </article>
        ))}
      </div>

      {/* scroll to top (agar site me pehle se hai to ye button hata do) */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
        className="fixed bottom-6 right-6 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#00E5FF] to-[#8FFAFF] text-[#02070D] shadow-[0_0_30px_#00F6FE66] transition hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8FFAFF]"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 19V5" />
          <path d="M5 12l7-7 7 7" />
        </svg>
      </button>
    </section>
  );
}