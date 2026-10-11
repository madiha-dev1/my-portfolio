import { useEffect, useRef, useState } from 'react'

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion:reduce)').matches

/** Returns [ref, seen] — `seen` becomes true once the element scrolls into view. */
export function useInView(threshold = 0.3) {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setSeen(true)
        io.disconnect()
      }
    }, { threshold })
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])
  return [ref, seen]
}

/** Animates a number from 0 to `target` (ease-out cubic) once `active` is true. */
export function useCountUp(target, active, delay = 0, duration = 1100) {
  const [v, setV] = useState(0)
  useEffect(() => {
    if (!active) return
    if (prefersReducedMotion()) { setV(target); return }
    let raf
    const start = performance.now()
    const tick = (now) => {
      const p = Math.min(1, Math.max(0, (now - start - delay) / duration))
      setV(Math.round(target * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [active, target, delay, duration])
  return v
}
