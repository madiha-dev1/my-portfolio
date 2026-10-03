import useMediaQuery from './useMediaQuery'

/** True when the visitor asked the OS to reduce motion. */
export default function useReducedMotion() {
  return useMediaQuery('(prefers-reduced-motion: reduce)')
}
