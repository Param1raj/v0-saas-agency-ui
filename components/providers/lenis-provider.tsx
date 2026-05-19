"use client"

import { ReactLenis } from 'lenis/react'
import { ReactNode, useEffect, useState } from 'react'

export function LenisProvider({ children }: { children: ReactNode }) {
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    const checkTouch = () => {
      const hasTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0)
      setIsTouch(hasTouch)
    }
    checkTouch()
  }, [])

  if (isTouch) {
    return <>{children}</>
  }

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  )
}
