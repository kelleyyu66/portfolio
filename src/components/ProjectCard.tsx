import { useEffect, useRef } from 'react'
import { Link } from 'react-router'
import HeroTravelBlend from './HeroTravelBlend'
import playbookHero from '../assets/playbook/hero-animation.mp4'
import playbookHeroPoster from '../assets/playbook/hero-animation-poster.webp'
import type { Project } from '../data/projects'
import styles from './ProjectCard.module.css'

type Props = {
  project: Project
}

/*
 * A recording standing in for the thumbnail. It runs while the card is on
 * screen and holds still when it isn't, the way the Road Trip Jam card's live
 * hero does — and it stays on its poster for anyone who has asked for less
 * motion. It is decoration: the card's own title does the telling.
 */
function CardLoop({ src, poster }: { src: string; poster: string }) {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void el.play().catch(() => {})
        } else {
          el.pause()
        }
      },
      { threshold: 0.25 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <video
      className={styles.image}
      ref={ref}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="metadata"
      tabIndex={-1}
      aria-hidden="true"
    />
  )
}

/*
 * Figma 627:2195 — a card the full width of the column: the work itself, then a
 * row carrying the company mark, the name, what it was, and a line about it.
 * The type is white, straight on the pond.
 */
export default function ProjectCard({ project }: Props) {
  return (
    <article className={styles.card}>
      <div className={styles.frame} style={{ aspectRatio: project.imageAspect }}>
        {project.cardMedia === 'travel-blend' ? (
          // it brings its own tint with it
          <div className={styles.heroCrop}>
            <HeroTravelBlend />
          </div>
        ) : project.cardMedia === 'playbook' ? (
          <>
            <CardLoop src={playbookHero} poster={playbookHeroPoster} />
            <span className={styles.scrim} aria-hidden="true" />
          </>
        ) : project.image ? (
          <>
            <img className={styles.image} src={project.image} alt="" loading="lazy" />
            <span className={styles.scrim} aria-hidden="true" />
          </>
        ) : (
          <div className={styles.image} />
        )}
      </div>

      <div className={styles.text}>
        {/* the mark and the company sign the card, above the name of the work */}
        <p className={styles.company}>
          <span className={styles.logo}>
            {project.logo && <img src={project.logo} alt="" width={40} height={40} loading="lazy" />}
          </span>
          {project.companyName ?? project.company}
        </p>
        <h3 className={styles.title}>
          {/* the link stretches over the whole card */}
          <Link to={`/work/${project.slug}`} className={styles.link}>
            {project.cardTitle}
          </Link>
        </h3>
        <p className={styles.description}>{project.description}</p>
      </div>
    </article>
  )
}
