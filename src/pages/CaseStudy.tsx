import { useEffect } from 'react'
import { Navigate, useParams } from 'react-router'
import ProjectCard from '../components/ProjectCard'
import Waterline from '../components/Waterline'
import { findProject, nextProject } from '../data/projects'
import type { CaseImage } from '../data/projects'
import lilyRight from '../assets/Lily_Right.png'
import styles from './CaseStudy.module.css'

// Case study template: hero on sand → at-a-glance band → the story → back into the pond.
export default function CaseStudy() {
  const { slug } = useParams()
  const project = findProject(slug)

  useEffect(() => {
    if (!project) return
    const previous = document.title
    document.title = `${project.title} — Kelley Yu`
    return () => {
      document.title = previous
    }
  }, [project])

  if (!project) return <Navigate to="/" replace />

  const next = nextProject(project.slug)

  return (
    <article>
      <header className={`${styles.container} ${styles.hero}`}>
        <p className={styles.eyebrow}>
          {project.company} · {project.tags}
        </p>
        <h1 className={styles.title}>{project.title}</h1>
        <p className={styles.outcome}>{project.outcome}</p>
        <dl className={styles.meta}>
          {project.meta.map(({ label, value }) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
        <div className={styles.heroFrame}>
          <Picture image={{ ...project.heroImage, size: 'wide' }} />
        </div>
      </header>

      <section className={styles.glance} aria-label="At a glance">
        <ul className={`${styles.container} ${styles.highlights}`}>
          {project.highlights.map(({ value, label }) => (
            <li key={label}>
              <span className={styles.highlightValue}>{value}</span>
              <span className={styles.highlightLabel}>{label}</span>
            </li>
          ))}
        </ul>
      </section>

      <div className={styles.story}>
        {project.blocks.map((block, i) =>
          block.kind === 'quote' ? (
            <figure key={i} className={styles.quote}>
              <blockquote>{block.text}</blockquote>
              {block.attribution && <figcaption>{block.attribution}</figcaption>}
            </figure>
          ) : (
            <section key={i} className={styles.block}>
              <div className={styles.column}>
                <h2 className={styles.heading}>{block.heading}</h2>
                {block.paragraphs.map((text, j) => (
                  <p key={j} className={styles.paragraph}>
                    {text}
                  </p>
                ))}
              </div>
              {block.image && <Picture image={block.image} />}
            </section>
          ),
        )}
      </div>

      <section className={styles.next} aria-labelledby="next-project">
        <Waterline className={styles.waterline} />
        <div className={styles.water}>
          <div className={styles.container}>
            <img className={styles.lily} src={lilyRight} alt="" />
            <h2 id="next-project" className={styles.nextHeading}>
              swim to the next project
            </h2>
            <ProjectCard project={next} />
          </div>
        </div>
      </section>
    </article>
  )
}

const sizeClass: Record<CaseImage['size'], string> = {
  column: styles.imgColumn,
  wide: styles.imgWide,
  full: styles.imgFull,
}

// Shows the image when there is one, otherwise a placeholder that says what belongs there.
function Picture({ image }: { image: CaseImage }) {
  return (
    <figure className={`${styles.figure} ${sizeClass[image.size]}`}>
      {image.src ? (
        <img className={styles.img} src={image.src} alt={image.alt} />
      ) : (
        <div className={styles.placeholder} role="img" aria-label={image.alt}>
          <span>{image.alt}</span>
        </div>
      )}
      {image.caption && <figcaption className={styles.caption}>{image.caption}</figcaption>}
    </figure>
  )
}
