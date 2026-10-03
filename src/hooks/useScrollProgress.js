import { useEffect, useRef } from 'react'

/**
 * Scroll progress (0..1) of a tall container, smoothed with requestAnimationFrame.
 *
 * Deliberately does NOT keep progress in React state: it hands each frame to
 * `onProgress` so the consumer can write a CSS variable / style directly. That
 * keeps a 60fps scroll animation from re-rendering the tree on every frame.
 */
export default function useScrollProgress(elRef, onProgress, { smoothing = 0.16, enabled = true } = {}) {
  const cbRef = useRef(onProgress)
  cbRef.current = onProgress

  useEffect(() => {
    const el = elRef.current
    if (!el || !enabled) return

    let target = 0
    let current = 0
    let raf = 0
    let alive = true

    const read = () => {
      const rect = el.getBoundingClientRect()
      const total = rect.height - window.innerHeight
      target = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0
    }

    const tick = () => {
      current += (target - current) * smoothing
      if (Math.abs(target - current) < 0.0005) current = target
      cbRef.current?.(current)
      if (alive) raf = requestAnimationFrame(tick)
    }

    read()
    cbRef.current?.(current)
    raf = requestAnimationFrame(tick)
    window.addEventListener('scroll', read, { passive: true })
    window.addEventListener('resize', read)

    return () => {
      alive = false
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', read)
      window.removeEventListener('resize', read)
    }
  }, [elRef, smoothing, enabled])
}
