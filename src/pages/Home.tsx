import Frog from '../components/Frog'
import ProjectCard from '../components/ProjectCard'
import { featuredProjects } from '../data/projects'
import lilyLeft from '../assets/Lily_Left_Group.png'
import koiLeft from '../assets/Koi_Left.png'
import koiRight from '../assets/Koi_Right.png'
import koiRipple from '../assets/Koi_Ripple.png'
import lilyRight from '../assets/Lily_Right.png'
import lilyStem from '../assets/Lily_Stem.png'
import speechBubble from '../assets/speech-bubble.webp'
import styles from './Home.module.css'

/*
 * What the frog says. The ask lives in two places — in the bubble, and on its
 * own under the tagline once the screen is too narrow for the bubble — so it
 * is written once here.
 */
const GREETING = (
  <>
    oh, hi!
    <br />
    thanks for hopping by.
  </>
)
const ASK =
  'want to work together? i\u2019m seeking a product design role with a mission-driven team in NYC.'

export default function Home() {
  // the two-column grid stacks projects down the columns: even left, odd right
  const columns = [
    featuredProjects.filter((_, i) => i % 2 === 0),
    featuredProjects.filter((_, i) => i % 2 === 1),
  ]

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.intro}>
          <h1 className={styles.title}>hi! I’m kelley. </h1>
          <p className={styles.tagline}>
            {/* the space survives when the break is dropped on a narrow screen */}
            A product designer with a pond full of ideas{' '}
            <br className={styles.taglineBreak} />
            and the curiosity to dive deep.
          </p>
        </div>
        {/*
         * Under 1024px there is no room beside the frog for the bubble, so the
         * ask stands on its own here instead. Exactly one of the two is ever
         * displayed, so a screen reader never meets the sentence twice.
         */}
        <p className={styles.status}>{ASK}</p>
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

        {/*
         * The frog's aside, on its own layer over the same 1440 frame as the
         * decorations but outside the aria-hidden one: the second line is now
         * the only place on the page that says Kelley is looking for work, so
         * it has to reach a screen reader. Both lines stay in the document and
         * only their opacity moves, so both are read, in order, whatever the
         * animation happens to be showing.
         */}
        <div className={styles.speech}>
          <div className={styles.bubble}>
            <img className={styles.bubbleArt} src={speechBubble} alt="" />
            <p className={styles.lines}>
              <span className={`${styles.line} ${styles.lineFirst}`}>{GREETING}</span>
              <span className={`${styles.line} ${styles.lineSecond}`}>{ASK}</span>
            </p>
          </div>
        </div>

        <div className={styles.content}>
          <h2 id="featured-projects" className={styles.heading}>
            featured projects
          </h2>
          <div className={styles.projects}>
            {columns.map((column, i) => (
              <div key={i} className={styles.column}>
                {column.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
