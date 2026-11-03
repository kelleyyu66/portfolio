import Frog from '../components/Frog'
import ProjectCard from '../components/ProjectCard'
import { featuredProjects } from '../data/projects'
import lilyLeft from '../assets/Lily_Left_Group.png'
import koiLeft from '../assets/Koi_Left.png'
import koiRight from '../assets/Koi_Right.png'
import koiRipple from '../assets/Koi_Ripple.png'
import lilyRight from '../assets/Lily_Right.png'
import lilyStem from '../assets/Lily_Stem.png'
import styles from './Home.module.css'

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.intro}>
          <h1 className={styles.title}>hi! I’m kelley. </h1>
          <p className={styles.tagline}>
            I bring clarity to complex problems and turn creative ideas into thoughtful experiences.
          </p>
        </div>
        <p className={styles.status}>
          looking for mission-driven opportunities in nyc <span aria-hidden="true">✨</span>
        </p>
      </section>

      <section className={styles.pond} aria-labelledby="featured-projects">
        <div className={styles.stage} aria-hidden="true">
          <Frog className={`${styles.decor} ${styles.frog}`} />
          <img className={`${styles.decor} ${styles.lilyLeft}`} src={lilyLeft} alt="" />
          <div className={`${styles.decor} ${styles.koi}`}>
            <img src={koiRipple} alt="" />
            <img className={styles.koiLeft} src={koiLeft} alt="" />
            <img className={styles.koiRight} src={koiRight} alt="" />
          </div>
          <img className={`${styles.decor} ${styles.lilyRight}`} src={lilyRight} alt="" />
          <img className={`${styles.decor} ${styles.lilyStem}`} src={lilyStem} alt="" />
        </div>

        <div className={styles.content}>
          <h2 id="featured-projects" className={styles.heading}>
            featured projects
          </h2>
          <div className={styles.projects}>
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
