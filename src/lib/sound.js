/* Tiny WebAudio synth: no audio files needed.
   Browsers keep audio locked until the first tap/click, so the very first hover
   may be silent; every click and touch unlocks it. */
let ctx = null

function getCtx() {
  if (typeof window === 'undefined') return null
  const AC = window.AudioContext || window.webkitAudioContext
  if (!AC) return null
  if (!ctx) ctx = new AC()
  if (ctx.state === 'suspended') ctx.resume().catch(() => {})
  return ctx
}

function tone(freq, { dur = 0.12, type = 'sine', gain = 0.05, to = 0, delay = 0 } = {}) {
  const c = getCtx()
  if (!c) return
  const t0 = c.currentTime + delay
  const osc = c.createOscillator()
  const amp = c.createGain()
  osc.type = type
  osc.frequency.setValueAtTime(freq, t0)
  if (to) osc.frequency.exponentialRampToValueAtTime(to, t0 + dur)
  amp.gain.setValueAtTime(0.0001, t0)
  amp.gain.exponentialRampToValueAtTime(gain, t0 + 0.012)
  amp.gain.exponentialRampToValueAtTime(0.0001, t0 + dur)
  osc.connect(amp).connect(c.destination)
  osc.start(t0)
  osc.stop(t0 + dur + 0.02)
}

export const sfx = {
  /** soft tick when a pointer touches a control; `i` shifts the pitch per icon */
  hover(i = 0) {
    tone(540 + i * 60, { dur: 0.08, type: 'triangle', gain: 0.03, to: 700 + i * 60 })
  },
  /** two-note chime on press */
  click(i = 0) {
    tone(660 + i * 70, { dur: 0.16, type: 'sine', gain: 0.06 })
    tone(990 + i * 70, { dur: 0.22, type: 'sine', gain: 0.045, delay: 0.07 })
  },
}

/** spread onto any element: <a {...sfxProps(2)} /> */
export const sfxProps = (i = 0) => ({
  onPointerEnter: () => sfx.hover(i),
  onPointerDown: () => sfx.click(i),
})
