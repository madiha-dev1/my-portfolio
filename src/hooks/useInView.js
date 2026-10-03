import { useEffect, useRef, useState } from 'react'

/**
 * Reveal-on-scroll. Returns [ref, inView].
 * A safety timer guarantees content is never left invisible, even if the
 * observer never fires (very short pages, instant jumps, odd browsers).
 */
export default function useInView({
  threshold = 0.12,
  rootMargin = '0px 0px -8% 0px',
  safetyMs = 3000,
} = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true)
            io.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin }
    )
    io.observe(el)

    const timer = window.setTimeout(() => setInView(true), safetyMs)

    return () => {
      io.disconnect()
      window.clearTimeout(timer)
    }
  }, [threshold, rootMargin, safetyMs])

  return [ref, inView]
}
