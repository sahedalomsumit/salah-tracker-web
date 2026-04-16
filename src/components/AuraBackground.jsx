import { useEffect } from 'react'
import gsap from 'gsap'

export default function AuraBackground() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      gsap.to('#aura-1', {
        x: (e.clientX - window.innerWidth / 2) * 0.05,
        y: (e.clientY - window.innerHeight / 2) * 0.05,
        duration: 2,
      })
      gsap.to('#aura-2', {
        x: -(e.clientX - window.innerWidth / 2) * 0.05,
        y: -(e.clientY - window.innerHeight / 2) * 0.05,
        duration: 2,
      })
    }
    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      <div className="aura" id="aura-1" style={{ top: '-10%', left: '-10%' }} />
      <div className="aura" id="aura-2" style={{ bottom: '-10%', right: '-10%' }} />
    </>
  )
}
