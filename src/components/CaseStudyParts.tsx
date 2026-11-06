import { useEffect, useRef } from 'react'
import type { CSSProperties } from 'react'
import type { ReactNode } from 'react'
import { Link } from 'react-router'
import styles from '../styles/caseStudy.module.css'

/*
 * The small pieces a case study is written out of. They were local to the Road
 * Trip Jam page; they live here so a second case study reads in the same voice.
 */

export function SectionHead({
  eyebrow,
  heading,
  level = 'h2',
  dark = false,
}: {
  eyebrow: string
  heading: string
  level?: 'h2' | 'h3'
  dark?: boolean
}) {
  const Heading = level
  return (
    <div className={styles.sectionHead}>
      <p className={`${styles.eyebrow} ${dark ? styles.eyebrowDark : ''}`}>{eyebrow}</p>
      <Heading className={level === 'h2' ? styles.heading : styles.subheading}>{heading}</Heading>
    </div>
  )
}

export function Callout({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className={styles.callout}>
      <p className={styles.calloutLabel}>{label}</p>
      {typeof children === 'string' ? <p className={styles.copy}>{children}</p> : children}
    </div>
  )
}

export function PullQuote({
  children,
  attribution,
  width,
  className = '',
}: {
  children: ReactNode
  attribution: string
  width?: number
  className?: string
}) {
  return (
    <figure className={`${styles.quote} ${className}`}>
      <span className={styles.quoteMark} aria-hidden="true" />
      <blockquote style={width ? { maxWidth: `calc(${width} * var(--s))` } : undefined}>
        {children}
      </blockquote>
      <figcaption>{attribution}</figcaption>
    </figure>
  )
}

export function Arrow() {
  return (
    <svg className={styles.arrow} viewBox="0 0 32 12" width="32" height="12" aria-hidden="true">
      <path
        d="M0 6h30m-5.5-4.5L30 6l-5.5 4.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/*
 * A block standing in for artwork still to be brought over. It names what
 * belongs there, so the page reads as a layout rather than a gap.
 */
export function Placeholder({
  label,
  ratio = '16 / 9',
  caption,
}: {
  label: string
  ratio?: string
  caption?: string
}) {
  const block = (
    <div className={styles.placeholder} style={{ aspectRatio: ratio }}>
      {label}
    </div>
  )

  if (!caption) return block

  return (
    <figure className={styles.figure}>
      {block}
      <figcaption>{caption}</figcaption>
    </figure>
  )
}

/*
 * A short recording that only fetches and plays while it is on screen, and
 * hands itself over to the controls if autoplay is refused or motion is off.
 */
export function LoopVideo({
  src,
  poster,
  label,
  width,
  height,
}: {
  src: string
  poster: string
  label: string
  width: number
  height: number
}) {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.preload = 'metadata'
      el.controls = true
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void el.play().catch(() => void (el.controls = true))
        } else {
          el.pause()
        }
      },
      { rootMargin: '200px 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <video
      className={styles.figureImage}
      data-zoom
      ref={ref}
      src={src}
      poster={poster}
      width={width}
      height={height}
      muted
      loop
      playsInline
      preload="none"
      aria-label={label}
    />
  )
}

/*
 * The hand-off at the foot of a case study: a small plate of the next project's
 * hero beside its title, so the link shows what it is pointing at rather than
 * only naming it.
 */
export function NextProject({
  to,
  title,
  image,
  className = '',
}: {
  to: string
  title: string
  image: string
  className?: string
}) {
  return (
    <section className={`${styles.nextProject} ${className}`}>
      <p className={styles.nextLabel}>Check out the next project:</p>
      <Link className={styles.nextLink} to={to}>
        <span className={styles.nextThumb}>
          <img src={image} alt="" loading="lazy" />
        </span>
        <span className={styles.nextTitle}>{title}</span>
        <Arrow />
      </Link>
    </section>
  )
}

export type Annotation = {
  /** where the pin sits, as a fraction of the picture: [x, y] */
  at: [number, number]
  /** which way the note reads from the pin */
  side: 'left' | 'right'
  text: string
}

/*
 * A screenshot with notes pinned to it. The picture holds the middle 46% of the
 * figure and the notes sit in the margins either side, tethered by a rule — so
 * a reader can see which part of the screen each note is about.
 *
 * Positions are fractions of the picture, which is what keeps the pins on their
 * targets when the picture goes full width on a phone. There the tethers and
 * notes fold away and the notes read as a numbered list under it instead.
 */
const PLATE_LEFT = 27
const PLATE_WIDTH = 46

export function Annotated({
  src,
  alt,
  width,
  height,
  notes,
  layout = 'margins',
}: {
  src: string
  alt: string
  width: number
  height: number
  notes: Annotation[]
  /** 'margins' writes the notes either side; 'key' numbers them underneath */
  layout?: 'margins' | 'key'
}) {
  return (
    <figure className={`${styles.annotated} ${layout === 'key' ? styles.keyed : ''}`}>
      <div className={styles.plate}>
        <img
          className={styles.annotatedImage}
          data-zoom
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
        />
        {notes.map((note, i) => {
          const x = PLATE_LEFT + note.at[0] * PLATE_WIDTH
          const leader = note.side === 'right' ? 75 - x : x - 25
          return (
            <span
              key={note.text}
              className={styles.pin}
              data-side={note.side}
              style={
                {
                  left: `${(note.at[0] * 100).toFixed(2)}%`,
                  top: `${(note.at[1] * 100).toFixed(2)}%`,
                  '--leader': `${leader.toFixed(2)}cqw`,
                } as CSSProperties
              }
            >
              <span className={styles.pinDot} aria-hidden="true">
                {i + 1}
              </span>
              <span className={styles.leader} aria-hidden="true" />
              <span className={styles.note}>{note.text}</span>
            </span>
          )
        })}
      </div>

      {/* the same notes, for when there are no margins to write in */}
      <ol className={styles.noteList}>
        {notes.map((note) => (
          <li key={note.text}>{note.text}</li>
        ))}
      </ol>
    </figure>
  )
}
