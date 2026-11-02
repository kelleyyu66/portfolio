import { useEffect, useRef, useState } from 'react'
import frogOpen from '../assets/Frog_Group.png'
import frogBlink from '../assets/Frog_Blink.png'
import styles from './Frog.module.css'

type Props = {
  className?: string
}

const BLINK_MS = 140
const random = (min: number, max: number) => min + Math.random() * (max - min)

// Frog on its lily pad: blinks every few seconds (sometimes twice) and always blinks on hover.
export default function Frog({ className = '' }: Props) {
  const [blinking, setBlinking] = useState(false)
  const timers = useRef<number[]>([])

  const later = (fn: () => void, ms: number) => {
    timers.current.push(window.setTimeout(fn, ms))
  }

  const blink = (times = 1) => {
    setBlinking(true)
    later(() => {
      setBlinking(false)
      if (times > 1) later(() => blink(times - 1), 120)
    }, BLINK_MS)
  }

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const scheduleIdleBlink = () => {
      later(() => {
        blink(Math.random() < 0.25 ? 2 : 1)
        scheduleIdleBlink()
      }, random(3500, 7500))
    }
    scheduleIdleBlink()

    const pending = timers.current
    return () => pending.forEach(clearTimeout)
  }, [])

  return (
    <div
      className={`${styles.frog} ${blinking ? styles.blinking : ''} ${className}`}
      onPointerEnter={() => blink()}
    >
      <img className={styles.open} src={frogOpen} alt="" />
      <img className={styles.closed} src={frogBlink} alt="" />
    </div>
  )
}
