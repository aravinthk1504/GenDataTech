import { useEffect, useRef } from 'react'

/**
 * Attaches an IntersectionObserver that adds the `is-visible` class
 * once the element scrolls into view. Pairs with the `.reveal` CSS
 * utility defined in index.css.
 */
export default function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('is-visible')
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return ref
}
