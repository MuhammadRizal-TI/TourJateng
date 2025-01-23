import { useEffect } from 'react'
import { useAnimation, useInView } from 'framer-motion'

export const useScrollAnimation = (ref: React.RefObject<HTMLElement>) => {
  const controls = useAnimation()
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return controls
}

