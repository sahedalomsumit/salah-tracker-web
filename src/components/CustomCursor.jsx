import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function CustomCursor() {
  const cursorRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const handleMouseMove = (e) => {
      gsap.to(cursor, { x: e.clientX - 6, y: e.clientY - 6, duration: 0.1 })
    }
    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return <div ref={cursorRef} id="cursor" className="hidden md:block" />
}
