import { profile } from '../data/portfolio'
import { ArrowUp } from './Icons'

export default function Footer() {
  return (
    <footer className="border-t border-[color:var(--line)] py-[30px] px-[6vw] pb-[130px] text-[0.82rem] text-dim">
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-4">
        <span>{profile.footer}</span>
        {/* a button, not href="#top": HashRouter owns the URL hash */}
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="inline-flex cursor-pointer items-center gap-2 border-0 bg-none p-0 font-semibold text-neon hover:[text-shadow:0_0_14px_rgba(0,232,245,0.6)]"
        >
          Back to top
          <ArrowUp className="h-[14px] w-[14px]" />
        </button>
      </div>
    </footer>
  )
}
