import { Link } from 'react-router'
import type { Project } from '../data/projects'
import styles from './ProjectCard.module.css'

type Props = {
  project: Project
  /** reading order, so the single-column layout keeps the original sequence */
  order?: number
}

// Figma 397:296 — image with a company chip, then title and tags, white on the pond.
export default function ProjectCard({ project, order }: Props) {
  return (
    <article className={styles.card} style={{ order }}>
      <div className={styles.frame} style={{ aspectRatio: project.imageAspect }}>
        {project.image ? (
          <img className={styles.image} src={project.image} alt="" />
        ) : (
          <div className={styles.image} />
        )}
        <p className={styles.chip}>
          {project.logo && (
            <span className={styles.chipLogo}>
              <img src={project.logo} alt="" width={32} height={32} />
            </span>
          )}
          {project.company}
        </p>
      </div>
      <div className={styles.text}>
        <h3 className={styles.title}>
          {/* the link stretches over the whole card */}
          <Link to={`/work/${project.slug}`} className={styles.link}>
            {project.title}
          </Link>
        </h3>
        <p className={styles.tags}>{project.tags}</p>
      </div>
    </article>
  )
}
