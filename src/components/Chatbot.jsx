import { useEffect, useRef, useState } from 'react'
import { localReply } from '../lib/localBot.js'

const GREETING =
  "Hi! I'm Madiha's AI assistant 👋 Ask me about her skills, projects, resume, or how to contact her."
const CHIPS = ['What are her skills?', 'Show me her projects', 'How can I contact Madiha?', 'Download resume']

// turn URLs and emails inside a reply into clickable links
const LINK_RE = /(https?:\/\/[^\s]+|[\w.+-]+@[\w-]+\.[\w.-]+)/g
function linkify(text) {
  return text.split(LINK_RE).map((part, i) => {
    if (i % 2 === 0) return part
    const clean = part.replace(/[.,;:!?)]+$/, '')
    const rest = part.slice(clean.length)
    const href = clean.startsWith('http') ? clean : `mailto:${clean}`
    return (
      <span key={i}>
        <a href={href} target="_blank" rel="noopener noreferrer" className="break-all underline underline-offset-2">{clean}</a>
        {rest}
      </span>
    )
  })
}

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [msgs, setMsgs] = useState([{ role: 'assistant', content: GREETING }])
  const [input, setInput] = useState('')
  const [busy, setBusy] = useState(false)
  const listRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    const el = listRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [msgs, busy, open])

  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  async function send(text) {
    const q = text.trim()
    if (!q || busy) return
    const next = [...msgs, { role: 'user', content: q }]
    setMsgs(next)
    setInput('')
    setBusy(true)

    let reply = null
    try {
      const ctrl = new AbortController()
      const timer = setTimeout(() => ctrl.abort(), 25000)
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next.slice(1) }), // skip the greeting
        signal: ctrl.signal,
      })
      clearTimeout(timer)
      if (!res.ok) throw new Error('chat api ' + res.status)
      reply = (await res.json()).reply
    } catch {
      reply = null
    }
    if (!reply) reply = localReply(q) // AI server unavailable → built-in answers
    setMsgs((m) => [...m, { role: 'assistant', content: reply }])
    setBusy(false)
  }

  const field = '[font-family:inherit]'

  return (
    <>
      {open && (
        <div
          role="dialog"
          aria-label="Chat with Madiha's AI assistant"
          className="fixed inset-x-3 bottom-[calc(5.5rem_+_env(safe-area-inset-bottom,0px))] z-50 flex h-[min(560px,calc(100svh_-_8rem))] animate-pop flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0f0f0f] text-white shadow-[0_24px_60px_rgba(0,0,0,.55)] sm:left-auto sm:right-6 sm:w-[380px]"
        >
          {/* header */}
          <div className="flex items-center gap-3 bg-gradient-to-r from-brand to-brand-dark px-4 py-3">
            <div className="relative">
              <img src="/assets/about.jpg" alt="" className="h-10 w-10 rounded-full border-2 border-white/60 object-cover" />
              <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-brand-dark bg-green-400" />
            </div>
            <div className="min-w-0 flex-1 leading-tight">
              <p className="m-0 text-base font-extrabold">Madiha's AI</p>
              <p className="m-0 text-xs text-white/85">Ask me anything about Madiha Memon</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className={`grid h-8 w-8 cursor-pointer place-items-center rounded-full border-0 bg-black/25 text-white hover:bg-black/40 ${field}`}
            >
              ✕
            </button>
          </div>

          {/* messages */}
          <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4" aria-live="polite">
            {msgs.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] whitespace-pre-wrap break-words rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    m.role === 'user' ? 'rounded-br-sm bg-brand text-white' : 'rounded-bl-sm bg-[#1c1c1c] text-white/90'
                  }`}
                >
                  {m.role === 'user' ? m.content : linkify(m.content)}
                </div>
              </div>
            ))}

            {msgs.length === 1 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {CHIPS.map((c) => (
                  <button
                    key={c}
                    onClick={() => send(c)}
                    className={`cursor-pointer rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/90 transition hover:border-brand hover:bg-brand/20 ${field}`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            )}

            {busy && (
              <div className="flex justify-start" aria-label="Madiha's AI is typing">
                <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-sm bg-[#1c1c1c] px-4 py-3.5">
                  {[0, 150, 300].map((d) => (
                    <span key={d} className="h-2 w-2 animate-bounce rounded-full bg-white/60" style={{ animationDelay: `${d}ms` }} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* input */}
          <form
            onSubmit={(e) => { e.preventDefault(); send(input) }}
            className="flex items-center gap-2 border-t border-white/10 p-3"
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              maxLength={500}
              placeholder="Type your question…"
              aria-label="Your message"
              className={`min-w-0 flex-1 rounded-full border border-white/10 bg-[#1c1c1c] px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-brand ${field}`}
            />
            <button
              type="submit"
              disabled={busy || !input.trim()}
              aria-label="Send message"
              className="grid h-10 w-10 shrink-0 cursor-pointer place-items-center rounded-full border-0 bg-brand text-white transition hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-50"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 2 11 13" /><path d="M22 2 15 22l-4-9-9-4 20-7z" />
              </svg>
            </button>
          </form>
          <p className="m-0 px-4 pb-2.5 text-center text-[10px] text-white/40">AI assistant · answers may not always be accurate</p>
        </div>
      )}

      {/* floating button (right side) */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Close chat' : "Chat with Madiha's AI"}
        aria-expanded={open}
        className="group fixed bottom-[calc(1.25rem_+_env(safe-area-inset-bottom,0px))] right-4 z-50 grid h-14 w-14 cursor-pointer place-items-center rounded-full border border-white/30 bg-brand text-white shadow-[0_8px_24px_rgba(255,42,26,.5)] transition hover:scale-105 hover:bg-brand-dark sm:right-6"
      >
        {!open && <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-brand/40" />}
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1.1-4.6A8 8 0 1 1 21 12z" />}
        </svg>
        {!open && (
          <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-full bg-white px-3 py-1.5 text-xs font-bold text-ink opacity-0 shadow-lg transition group-hover:opacity-100 sm:block">
            Ask Madiha's AI
          </span>
        )}
      </button>
    </>
  )
}
