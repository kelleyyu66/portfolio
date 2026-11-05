import { useEffect } from 'react'
import Lightbox from '../components/Lightbox'
import ReadingProgress from '../components/ReadingProgress'
import type { ProgressSection } from '../components/ReadingProgress'
import { Callout, LoopVideo, PullQuote, SectionHead } from '../components/CaseStudyParts'
import journeyMap from '../assets/playbook/journey-map.webp'
import matrix from '../assets/playbook/prioritization-matrix.webp'
import heroHome from '../assets/playbook/hero-home.webp'
import heroCompetitors from '../assets/playbook/hero-competitors.webp'
import modelAnnotated from '../assets/playbook/model-annotated.webp'
import stepFlow from '../assets/playbook/step-flow.webp'
import modelFinal from '../assets/playbook/model-final.mp4'
import modelFinalPoster from '../assets/playbook/model-final-poster.webp'
import privateWorkspace from '../assets/playbook/private-workspace.mp4'
import privateWorkspacePoster from '../assets/playbook/private-workspace-poster.webp'
import competitiveLandscape from '../assets/playbook/competitive-landscape.webp'
import logoBeforeAfter from '../assets/playbook/logo-before-after.webp'
import finalScreens from '../assets/playbook/final-screens.webp'
import base from '../styles/caseStudy.module.css'
import styles from './Playbook.module.css'

/*
 * Playbook, migrated from the old portfolio. It follows the Road Trip Jam page:
 * the same measures, the same band of water under the design work, the same
 * rail along the bottom. The hero artwork is still a blank placeholder.
 *
 * The beats run background → research → process → finals → reflections. The
 * explorations are the story here, so they come before the finished screens.
 */
const SECTIONS: ProgressSection[] = [
  { id: 'background', label: 'Background' },
  { id: 'research', label: 'Research' },
  { id: 'design-process', label: 'Design process' },
  { id: 'final-designs', label: 'Final designs' },
  { id: 'reflections', label: 'Reflections' },
]

export default function Playbook() {
  useEffect(() => {
    const previous = document.title
    document.title = 'Meeting Investors Where They Already Work — Kelley Yu'
    /* this case study reads on plain white rather than the sand everything
       else is drawn on; the token carries the footer and the rail with it */
    document.body.dataset.ground = 'white'
    return () => {
      document.title = previous
      delete document.body.dataset.ground
    }
  }, [])

  return (
    <article className={base.page}>
      <header id="background" className={`${base.wide} ${base.hero} ${base.anchor}`}>
        <div className={base.heroText}>
          <h1 className={base.title}>Meeting Investors Where They Already Work</h1>
          <p className={base.subtitle}>
            Designing an AI tool to help investors get deals done faster.
          </p>
        </div>
        <hr className={base.rule} />
        <dl className={base.meta}>
          <div>
            <dt>Role</dt>
            <dd>
              Product designer
              
            </dd>
          </div>
          <div>
            <dt>Context</dt>
            <dd>
              Playbook M&A (contract role)
              <br />
              Aug 2023–March 2024
            </dd>
          </div>
          <div>
            <dt>Team</dt>
            <dd>
              Founder
              <br />
              Product Manager
              <br />
              Engineer
              <br />
              Designer
            </dd>
          </div>
          <div>
            <dt>Tools</dt>
            <dd>Figma</dd>
          </div>
        </dl>
      </header>

      <div className={`${base.xwide} ${styles.heroArt}`}>
        <p className={`${styles.pair} ${styles.heroPair}`}>
          <span>Before</span>
          <span>After</span>
        </p>
        <img className={styles.heroShot} data-zoom src={heroHome} alt="The company profile before, on a dark sidebar with dense running text, and after, laid out in cards" width={2060} height={1007} />
        <img className={styles.heroShot} data-zoom src={heroCompetitors} alt="The competitive landscape before, a ruled table on a gradient, and after, on a grey scale with filters and zebra rows" width={2060} height={745} loading="lazy" />
      </div>

      <div className={base.sections}>
        <section className={`${base.col} ${base.intro}`}>
          <p className={base.lede}>
            Closing deals is hard. M&amp;A professionals spend <strong>80+ hours a week</strong> on
            manual tasks. Playbook is an early-stage software startup using AI to streamline company
            evaluation and deal execution for investors.
          </p>
          <Callout label="What I did">
            <ul className={styles.contributions}>
              <li>Ran user research to validate the problem statement</li>
              <li>
                Helped shape the product vision and value proposition that set Playbook apart from
                its competitors
              </li>
              <li>
                Redesigned the web app interface to look more modern and have a more intuitive experience
              </li>
            </ul>
          </Callout>
        </section>

        <section className={`${base.wide} ${styles.spaced}`}>
          <div className={`${styles.textCol} ${base.block}`}>
            <SectionHead
              eyebrow="The problem"
              heading="Early interest, but not enough value to pay for."
            />
            <p className={base.copy}>
              Playbook had early user interest, but the platform didn’t add enough value for users
              to want to pay for it. Interviews showed it needed something more to set it apart from
              competitors, and that the website itself read as{' '}
              <strong>clunky and hard to scan</strong>.
            </p>
          </div>
          <figure className={`${base.figure} ${styles.mid}`}>
            <img className={base.figureImage} data-zoom src={journeyMap} alt="A customer journey map across pre-deal, deal is live and valuation, with rows for user actions, goals, tools, pain points and opportunities" width={1600} height={1134} loading="lazy" />
            <figcaption>
              I mapped the deal process end to end so the team could zoom out and see where else the
              work broke down.
            </figcaption>
          </figure>
          <figure className={`${base.figure} ${styles.mid}`}>
            <img className={base.figureImage} data-zoom src={matrix} alt="A two-by-two of opportunities plotted by effort against value, sorted into do now, do next, do later and don’t do" width={1600} height={1129} loading="lazy" />
            <figcaption>
              Then a prioritization matrix, to advise the founder on which openings to take first.
            </figcaption>
          </figure>
        </section>

        <section id="research" className={`${base.col} ${base.block} ${base.tight} ${base.anchor}`}>
          <p className={base.eyebrow}>What the research said</p>
          <ul className={base.insights}>
            <li className={base.insight}>
              <p>
                <strong>75%</strong> of users preferred the tools they already had. However
                inefficient, those tools were so engrained in their workflow that they were
                reluctant to switch.
              </p>
            </li>
            <li className={base.insight}>
              <p>
                <strong>62%</strong> had privacy concerns about the AI document reader. Privacy is
                paramount in the deal world, and the AI was prone to inconsistency.
              </p>
            </li>
            <li className={base.insight}>
              <p>
                <strong>67%</strong> thought the website looked clunky and hard to scan — and too
                close to Pitchbook, our biggest competitor.
              </p>
            </li>
          </ul>
        </section>

        <PullQuote className={base.col} attribution="—Interview participant" width={560}>
          “This might have a bit more than Pitchbook or Crunchbase. I’m not sure how much I’d pay
          given I have information on a lot of this already.”
        </PullQuote>

        {/* ---------- the explorations ---------- */}
        <section id="design-process" className={`${styles.exploration} ${base.anchor}`}>
          <div className={`${base.col} ${base.block}`}>
            <SectionHead
              eyebrow="Design exploration #1"
              heading="How might we integrate the platform into the tools users already have, like Excel?"
            />
            <p className={base.copy}>
              Our hypothesis was that users needed something to automate their Excel models and
              save them hours. Two iterations proved the hypothesis right and the shape wrong.
            </p>
          </div>

          <figure className={styles.art}>
            <p className={styles.artLabel}>Ver 1—Import and export</p>
            <img className={base.figureImage} data-zoom src={modelAnnotated} alt="The transaction model output, annotated: the export button users never reached, an unclear input flow, and tables that scrolled sideways" width={2480} height={1543} loading="lazy" />
          </figure>

          <figure className={styles.art}>
            <p className={styles.artLabel}>Ver 2—Step flow</p>
            <img className={base.figureImage} data-zoom src={stepFlow} alt="The same model broken into a long sequence of smaller screens" width={2600} height={730} loading="lazy" />
            <figcaption className={styles.artNote}>
              Progressive disclosure cut the cognitive load, but users abandoned the long process
              halfway through — and still reached for Excel.
            </figcaption>
          </figure>

          <figure className={`${styles.art} ${styles.large} ${styles.beat}`}>
            <p className={styles.artLabel}>Final—Excel plug-in</p>
            <LoopVideo
              src={modelFinal}
              poster={modelFinalPoster}
              label="The plug-in running inside Excel: a cap table is highlighted, exit assumptions entered, and the waterfall written back into the sheet"
              width={1280}
              height={686}
            />
            <figcaption className={styles.artNote}>
              Rather than moving users off Excel, I proposed meeting them inside it. Despite the UI
              constraints of the plug-in format, the flow mirrors the web app, so data transfers
              without relearning anything.
            </figcaption>
          </figure>

          <div className={base.col}>
            <Callout label="The breakthrough">
              Users didn’t want to leave Excel. They wanted the new tool to make the Excel they
              already had faster.
            </Callout>
          </div>
        </section>

        <section className={styles.exploration}>
          <div className={`${base.col} ${base.block}`}>
            <SectionHead
              eyebrow="Design exploration #2"
              heading="How might we use design to answer privacy concerns about AI?"
            />
            <p className={base.copy}>
              While we could have changed the underlying technology to use on-premise software or
              create AI sandboxes, they were expensive to implement, and we needed to test and move
              quickly as an early-stage startup. I borrowed a pattern users already knew as private
              — incognito, or dark mode — to signal a private workspace.
            </p>
          </div>

          <figure className={`${styles.art} ${styles.narrow}`}>
            <p className={styles.artLabel}>Private workspace mode</p>
            <LoopVideo
              src={privateWorkspace}
              poster={privateWorkspacePoster}
              label="The company profile turning from light to dark as private workspace mode is switched on"
              width={900}
              height={854}
            />
          </figure>

          <div className={base.col}>
            <p className={base.copy}>
              The private workspace raised use of Document AI by <strong>8%</strong>. However, users
              were still wary of an AI chat that stored data in the cloud, and ChatGPT and Copilot
              had shipped stronger document readers in the meantime. We dropped the feature and
              moved AI elsewhere — though the dark-mode-as-private signal is an idea I’d use again.
            </p>
          </div>
        </section>

        <section className={styles.exploration}>
          <div className={`${base.col} ${base.block}`}>
            <SectionHead
              eyebrow="Design exploration #3"
              heading="How might we make a UI that is easy to scan and doesn’t look like the competition?"
            />
            <p className={base.copy}>
              I started with gradient backgrounds and a glassmorphism effect to suit the AI
              features. Users called it “cool, but slightly distracting”. I opted for simpler UI,
              keeping the gradient and pops of color in areas like the data visualizations, logos,
              AI features, and buttons.
            </p>
          </div>

          <figure className={styles.art}>
            <p className={`${styles.pair} ${styles.landscapePair}`}>
              <span>First iteration</span>
              <span>Final iteration</span>
            </p>
            <img className={base.figureImage} data-zoom src={competitiveLandscape} alt="The competitive landscape before and after, annotated: the gradient background and table rules removed, a grayscale palette, the gradient kept for AI, and zebra rows added" width={2480} height={994} loading="lazy" />
          </figure>

          <div className={base.col}>
            <p className={base.copy}>
              I also redesigned Playbook’s logo, using the gradient as its unique brand color to
              represent AI technology and differentiate it from competitors with an older UI.
            </p>
          </div>

          <figure className={`${styles.art} ${styles.small}`}>
            <img className={`${base.figureImage} ${styles.flat}`} data-zoom src={logoBeforeAfter} alt="The old Playbook wordmark beside the new one, annotated: two font styles with different cap heights, replaced by a vector P inside a book" width={1448} height={315} loading="lazy" />
          </figure>
        </section>

        <section id="final-designs" className={`${styles.exploration} ${base.anchor}`}>
          <div className={base.col}>
            <SectionHead
              eyebrow="Final designs"
              heading="A web app you can scan, and a plug-in you don’t have to learn"
            />
          </div>
          <figure className={styles.art}>
            <img className={base.figureImage} data-zoom src={finalScreens} alt="Six screens of the redesigned platform: search, the company overview and financials, product detail, customer case studies, the competitive landscape and the market summary" width={2200} height={1646} loading="lazy" />
            <figcaption className={styles.artNote}>
              The redesigned platform, end to end.
            </figcaption>
          </figure>
        </section>

        <section id="reflections" className={`${base.col} ${base.block} ${base.anchor}`}>
          <SectionHead eyebrow="Impact" heading="25% more engagement, and the first paying users" />
          <p className={base.copy}>
            The design work has driven a <strong>25% increase in user engagement</strong>, and the
            Excel plug-in has brought in <strong>8 paying users</strong> so far. The qualitative
            feedback has been warm too, particularly on the plug-in and the competitor mapping tool.
          </p>
        </section>

        <PullQuote className={base.col} attribution="—Playbook user" width={600}>
          “This is super helpful for sense checking my work and for when I need to know
          distributions really quickly.”
        </PullQuote>

        <section className={base.learningsSection}>
          <div className={`${base.col} ${base.block} ${base.tight}`}>
            <p className={base.eyebrow}>Learnings</p>
            <div className={base.learnings}>
              <div>
                <h2 className={base.heading}>Stay flexible</h2>
                <p className={base.copy}>
                  Being able to drop an idea quickly and pivot when it doesn’t land is critical in a product's early stages.
                </p>
              </div>
              <div>
                <h2 className={base.heading}>Prioritization is key</h2>
                <p className={base.copy}>
                  I worked closely with the PM to determine which problems are
                  worth solving, and in what order.
                </p>
              </div>
              <div>
                <h2 className={base.heading}>Engage with early users</h2>
                <p className={base.copy}>
                  Finding product market fit is hard. Capturing a specific user group's interest and focusing on solving their needs first will help with gaining early adopters. The plug-in came from listening to people who
                  refused to leave their spreadsheet.
                </p>
              </div>
            </div>
          </div>
        </section>

        <p className={`${base.col} ${base.thanks}`}>Thank you for reading!</p>
      </div>

      <ReadingProgress sections={SECTIONS} />
      <Lightbox />
    </article>
  )
}
