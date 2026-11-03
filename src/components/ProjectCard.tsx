import { Link } from 'react-router'
import HeroTravelBlend from './HeroTravelBlend'
import type { Project } from '../data/projects'
import styles from './ProjectCard.module.css'

type Props = {
  project: Project
}

/*
 * Figma 627:2195 — a card the full width of the column: the work itself, then a
 * row carrying the company mark, the name, what it was, and a line about it.
 * The type is white, straight on the pond.
 */
export default function ProjectCard({ project }: Props) {
  return (
    <article className={styles.card}>
      <div
        className={styles.frame}
        style={project.cardMedia ? undefined : { aspectRatio: project.imageAspect }}
      >
        {project.cardMedia === 'travel-blend' ? (
          <HeroTravelBlend />
        ) : project.image ? (
          <img className={styles.image} src={project.image} alt="" loading="lazy" />
        ) : (
          <div className={styles.image} />
        )}
        {/* Figma 671:33196 — a tenth of black over the whole frame */}
        <span className={styles.scrim} aria-hidden="true" />
      </div>

      <div className={styles.meta}>
        {project.logo && (
          <span className={styles.logo}>
            <img src={project.logo} alt="" width={40} height={40} loading="lazy" />
          </span>
        )}
        <div className={styles.text}>
          <div className={styles.headline}>
            <h3 className={styles.title}>
              {/* the link stretches over the whole card */}
              <Link to={`/work/${project.slug}`} className={styles.link}>
                {project.cardTitle}
              </Link>
            </h3>
            <ul className={styles.tags}>
              {project.tags.map((tag) => (
                <li key={tag} className={styles.tag}>
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <p className={styles.description}>{project.description}</p>
        </div>
      </div>
    </article>
  )
}
