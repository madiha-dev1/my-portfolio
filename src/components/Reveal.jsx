import useInView from '../hooks/useInView'

/**
 * Fades + lifts its children in once they scroll into view.
 * Renders as any element via `as` (default div) so it can wrap links, etc.
 */
export default function Reveal({ as: Tag = 'div', className = '', delay = 0, children, ...rest }) {
  const [ref, inView] = useInView()
  const style = delay ? { transitionDelay: `${delay}ms`, ...(rest.style || {}) } : rest.style

  return (
    <Tag
      {...rest}
      ref={ref}
      style={style}
      className={['reveal', inView ? 'is-in' : '', className].filter(Boolean).join(' ')}
    >
      {children}
    </Tag>
  )
}
