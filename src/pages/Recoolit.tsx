import { useEffect } from 'react'
import Lightbox from '../components/Lightbox'
import ReadingProgress from '../components/ReadingProgress'
import type { ProgressSection } from '../components/ReadingProgress'
import { LoopVideo, NextProject, PullQuote, SectionHead } from '../components/CaseStudyParts'
import hero from '../assets/recoolit/hero.webp'
import oldSite from '../assets/recoolit/old-site.webp'
import personaCustomer from '../assets/recoolit/persona-customer.webp'
import personaInvestor from '../assets/recoolit/persona-investor.webp'
import personaPartner from '../assets/recoolit/persona-partner.webp'
import competitorInspo from '../assets/recoolit/competitor-inspo.webp'
import storyFrames from '../assets/recoolit/story-frames.webp'
import copyDoc from '../assets/recoolit/copy-doc.webp'
import explainerLo from '../assets/recoolit/explainer-lo.webp'
import explainerMid from '../assets/recoolit/explainer-mid.webp'
import explainerHi from '../assets/recoolit/explainer-hi.webp'
import styleGuide from '../assets/recoolit/style-guide.webp'
import typography from '../assets/recoolit/typography.webp'
import benefits from '../assets/recoolit/benefits.mp4'
import benefitsPoster from '../assets/recoolit/benefits-poster.webp'
import whyRefrigerants from '../assets/recoolit/why-refrigerants.webp'
import howItWorks from '../assets/recoolit/how-it-works.webp'
import headerHero from '../assets/recoolit/header-hero.webp'
import ourMission from '../assets/recoolit/our-mission.webp'
import partners from '../assets/recoolit/partners.webp'
import comparisons from '../assets/recoolit/comparisons.webp'
import businesses from '../assets/recoolit/businesses.mp4'
import businessesPoster from '../assets/recoolit/businesses-poster.webp'
import team from '../assets/recoolit/team.mp4'
import finalPrototype from '../assets/recoolit/final-prototype.mp4'
import finalPrototypePoster from '../assets/recoolit/final-prototype-poster.webp'
import teamPoster from '../assets/recoolit/team-poster.webp'
import roadTripHero from '../assets/rtj/hero-photo.webp'
import base from '../styles/caseStudy.module.css'
import styles from './Recoolit.module.css'

/*
 * Recoolit, migrated from the old Wix portfolio. It is written on the Playbook
 * page's chrome — the same measures, the same explorations, the plain white
 * ground — and keeps the original copy word for word.
 *
 * The beats run background → research → design process → key designs →
 * reflections. The old site is shown early, straight under the overview, so the
 * problem is visible before it is described.
 */
const SECTIONS: ProgressSection[] = [
  { id: 'background', label: 'Background' },
  { id: 'research', label: 'Research' },
  { id: 'design-process', label: 'Design process' },
  { id: 'key-designs', label: 'Key designs' },
  { id: 'reflections', label: 'Reflections' },
]

/* the three people the site had to speak to, with the marks the old page used */
const PERSONAS = [
  {
    image: personaCustomer,
    name: 'Customers in the US',
    who: 'Businesses & individuals looking to reduce their carbon footprint',
    want:
      'Wants to quickly understand Recoolit’s work and if their offsets are high quality and worth purchasing',
  },
  {
    image: personaInvestor,
    name: 'VC Investors',
    who: 'Climate investors in the United States',
    want: 'Wants to find a company with a competitive advantage in the market',
  },
  {
    image: personaPartner,
    name: 'Partners in Indonesia',
    who: 'AC technicians, building owners, manufacturers, etc.',
    want: 'Wants to look for partnership opportunities for their own businesses',
  },
]

const FIDELITY = [
  { src: explainerLo, label: 'Low-Fidelity', height: 2468 },
  { src: explainerMid, label: 'Mid-Fidelity', height: 2820 },
  { src: explainerHi, label: 'High-Fidelity', height: 3022 },
]

export default function Recoolit() {
  useEffect(() => {
    const previous = document.title
    document.title = 'Designing a Compelling Narrative with Recoolit — Kelley Yu'
    /* like Playbook, this case study reads on plain white rather than the sand
       everything else is drawn on; the token carries the footer and the rail */
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
          <h1 className={base.title}>
            Designing a compelling narrative around an overlooked climate problem
          </h1>
          <p className={base.subtitle}>
            Recoolit is a climate tech startup that captures and destroys harmful refrigerant waste
            from cooling devices.
          </p>
        </div>
        <hr className={base.rule} />
        <dl className={`${base.meta} ${styles.meta}`}>
          <div>
            <dt>Role</dt>
            <dd>UX designer (contractor)</dd>
          </div>
          <div>
            <dt>Timeline</dt>
            <dd>March – June 2023</dd>
          </div>
          <div>
            <dt>Contributions</dt>
            <dd>
              Information architecture, visual design, copywriting, content strategy, wireframing,
              prototyping, testing
            </dd>
          </div>
          <div>
            <dt>Impact</dt>
            <dd>
              Landed a{' '}
              <a
                className={styles.metaLink}
                href="https://blog.google/company-news/outreach-and-initiatives/sustainability/google-eliminating-superpollutants-to-help-atmosphere/"
                target="_blank"
                rel="noreferrer"
              >
                partnership with Google
              </a>{' '}
              in May 2025 to eliminate 25,000 tons of superpollutants by 2030 🎉
            </dd>
          </div>
        </dl>
      </header>

      <div className={`${base.xwide} ${styles.heroArt}`}>
        <img
          className={styles.heroShot}
          data-zoom
          src={hero}
          alt="Four screens of the redesigned Recoolit site laid out at an angle on a deep blue ground"
          width={2200}
          height={1444}
        />
      </div>

      <div className={base.sections}>
        <section className={`${base.col} ${base.intro}`}>
          <h2 className={base.heading}>Project Overview</h2>
          <p className={base.lede}>
            Recoolit is a climate tech startup that captures and destroys harmful refrigerant waste
            from cooling devices, which otherwise creates massive environmental impact.
          </p>
          <p className={base.copy}>
            Their initial web app was unstyled bootstrap, wasn’t getting much engagement, and didn’t
            reflect their impactful work in the space. They wanted a:
          </p>
          <ul className={styles.list}>
            <li>Modern responsive website</li>
            <li>With streamlined navigation</li>
            <li>That tells a cohesive story</li>
          </ul>
        </section>

        {/* the old site, moved up here so the problem is seen before it is read */}
        <figure className={`${base.figure} ${base.wide}`}>
          <img
            className={base.figureImage}
            data-zoom
            src={oldSite}
            alt="The original Recoolit website: long blocks of running text on a plain bootstrap page with almost no imagery"
            width={2000}
            height={1163}
            loading="lazy"
          />
          <figcaption>
            Original website: The excessive text and lack of images overwhelms users while still
            leaving them confused.
          </figcaption>
        </figure>

        <section id="research" className={`${base.col} ${base.block} ${base.anchor}`}>
          <SectionHead eyebrow="Research" heading="Defining the problem" />
          <p className={base.copy}>
            After running a few usability tests on first-time users, I noticed a significant problem:
            users don’t know what the heck Recoolit is doing. Information about their work is
            scattered across multiple pages, and explained with way too many words.
          </p>
          <p className={base.copy}>
            Their current sales were mostly from friends and investors deep in the climate industry,
            but their conversion rate from the website was close to 0%.
          </p>
        </section>

        <PullQuote className={base.col} attribution="—Usability test participant" width={560}>
          “It has about 3x too many words!”
        </PullQuote>

        <section className={`${base.wide} ${base.block}`}>
          <h2 className={base.heading}>Understanding our users</h2>
          <ul className={styles.personas}>
            {PERSONAS.map((person) => (
              <li key={person.name} className={styles.persona}>
                <img src={person.image} alt="" width={128} height={128} loading="lazy" />
                <h3 className={base.subheading}>{person.name}</h3>
                <p className={base.small}>{person.who}</p>
                <p className={base.small}>{person.want}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className={`${base.col} ${styles.challenge}`}>
          <p className={styles.challengeLabel}>The Challenge</p>
          <h2 className={styles.challengeText}>
            Effectively conveying Recoolit’s mission and why it matters to customers, investors, and
            partners.
          </h2>
        </section>

        <section className={`${base.wide} ${styles.spaced}`}>
          <div className={`${styles.textCol} ${base.block}`}>
            <h2 className={base.heading}>Learning from competitors</h2>
            <p className={base.copy}>
              The competitors that caught my eye right away featured large hero images with striking
              photos of our earth. This immediately conveyed a sense of a collective mission. The
              websites that effectively communicated a clear story also struck a perfect balance
              between informative and concise text.
            </p>
            <p className={base.copy}>
              Recoolit stood out amongst its competitors for the high quality of its carbon offsets
              and its transparency, which I decided to emphasize on its website.
            </p>
          </div>

          <figure className={`${styles.art} ${styles.mid}`}>
            <p className={styles.artLabel}>Competitor Inspo Board</p>
            <img
              className={base.figureImage}
              data-zoom
              src={competitorInspo}
              alt="A board of competitor home pages, most of them leading with a wide photograph of the earth"
              width={1400}
              height={1442}
              loading="lazy"
            />
          </figure>

          <div className={`${styles.textCol} ${base.block} ${base.tight}`}>
            <p className={base.copy}>
              From my competitive analysis, I found the opportunity to utilize the following features
              on Recoolit’s home page:
            </p>
            <ul className={styles.list}>
              <li>Large geometric fonts for a modern, futuristic look</li>
              <li>Large hero images containing striking photos of our earth</li>
              <li>Our goal and our impact</li>
              <li>Statistics to highlight the significance of the problem</li>
              <li>Different call to action sections for different users</li>
            </ul>
          </div>
        </section>

        {/* ---------- the design process ---------- */}
        <section id="design-process" className={`${styles.exploration} ${base.anchor}`}>
          <div className={`${base.col} ${base.block}`}>
            <SectionHead eyebrow="Design process" heading="Telling a clear and compelling narrative" />
            <p className={base.copy}>
              In order to tell a more coherent story, I consolidated and condensed information about
              what Recoolit did from four separate pages to one explainer page. I used copywriting
              strategies and findings from competitive research to craft a explainer page narrative
              using story frames. This helped communicate page priority and flow early in the
              project.
            </p>
          </div>

          <figure className={`${styles.art} ${styles.mid}`}>
            <img
              className={`${base.figureImage} ${styles.flat}`}
              data-zoom
              src={storyFrames}
              alt="Five stacked story frames down the explainer page: mission statement, problem and solution, how it works, benefits, and the call to action"
              width={1400}
              height={1413}
              loading="lazy"
            />
            <figcaption className={styles.artNote}>
              Previously, calls to action were placed before the user even knew what Recoolit did and
              why they should purchase. This flow tells a complete story and is more likely to leave
              the user convinced to take action at the end.
            </figcaption>
          </figure>
        </section>

        <section className={styles.exploration}>
          <div className={`${base.col} ${base.block}`}>
            <h2 className={base.heading}>Testing and iteration</h2>
            <p className={base.copy}>
              Crafting copy that struck the perfect balance between being informative and concise was
              a big focus and challenge. I prioritized refining the explainer page within a Google
              Doc, where I actively sought and incorporated feedback from two groups: potential users
              who were newcomers to the industry, and stakeholders with deep industry knowledge.
            </p>
            <p className={base.copy}>
              This approach allowed me to ensure the message was accurate yet easy to understand for
              those unfamiliar with the sector. If Recoolit’s mission was to prevent a billion tonnes
              of CO2e by 2030, they had to widen their audience and make their language more
              accessible and engaging.
            </p>
          </div>

          <figure className={`${styles.art} ${styles.reading}`}>
            <img
              className={base.figureImage}
              data-zoom
              src={copyDoc}
              alt="A Google Doc of the explainer page copy, marked up with comments and tracked edits"
              width={1600}
              height={851}
              loading="lazy"
            />
            <figcaption className={styles.artNote}>
              Explainer page copy iteration. Working in a Google Doc allowed me to focus purely on
              storytelling.
            </figcaption>
          </figure>

          <ul className={`${base.wide} ${styles.fidelity}`}>
            {FIDELITY.map((step) => (
              <li key={step.label}>
                <figure className={styles.fidelityFigure}>
                  <span className={styles.fidelityFrame}>
                    <img
                      data-zoom
                      src={step.src}
                      alt={`The explainer page at ${step.label.toLowerCase()}, the whole page end to end`}
                      width={760}
                      height={step.height}
                      loading="lazy"
                    />
                  </span>
                  <figcaption className={styles.artLabel}>{step.label}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.exploration}>
          <div className={`${base.col} ${base.block}`}>
            <h2 className={base.heading}>Shaping Recoolit’s visual identity</h2>
            <p className={base.copy}>
              In order to create a cohesive and unique brand identity, I embraced the hot pink and
              ice blue color scheme in Recoolit’s logo as the primary brand colors, representing the
              hot, high pressure gas and cold, low pressure gas in the cooling process.
            </p>
            <p className={base.copy}>
              I used the gradient color on the most important CTAs to make them stand out, including
              “buy offsets” and “contact us”.
            </p>
          </div>

          <figure className={`${styles.art} ${styles.reading}`}>
            <img
              className={base.figureImage}
              data-zoom
              src={styleGuide}
              alt="The Recoolit style guide: the wordmark on light and dark, beside the palette of light blue, pink, light pink, the gradient, deep blue and gray blue"
              width={1400}
              height={993}
              loading="lazy"
            />
          </figure>

          <div className={base.col}>
            <p className={base.copy}>
              In an attempt to turn an inherently unsexy project of destroying refrigerant waste sexy,
              I chose a grotesque and a geometric san serif font for a clean, techy, and friendly
              look. The two fonts offer both legibility and personality, presenting Recoolit as both a
              professional and friendly tech company.
            </p>
          </div>

          <figure className={`${styles.art} ${styles.reading}`}>
            <img
              className={base.figureImage}
              data-zoom
              src={typography}
              alt="The type sheet: a grotesque paired with a geometric sans serif, set out at display, heading and body sizes"
              width={1400}
              height={699}
              loading="lazy"
            />
          </figure>
        </section>

        {/* ---------- the key designs ---------- */}
        <section id="key-designs" className={`${styles.exploration} ${base.anchor}`}>
          <div className={`${base.col} ${base.block}`}>
            <SectionHead
              eyebrow="Key designs"
              heading="Making information digestible and accessible"
            />
            <p className={base.copy}>
              After the first round of testing, I realized that users didn’t fully understand what
              Recoolit was doing, because 1) headers were not specific enough, 2) there was too much
              technical jargon, and 3) there was too much body text, which users were not reading. I
              utilized design techniques to offer more detail without presenting too much information
              upfront.
            </p>
          </div>

          <figure className={`${styles.art} ${styles.large}`}>
            <p className={styles.artLabel}>“What are refrigerants?” “What is additionality?”</p>
            <LoopVideo
              src={benefits}
              poster={benefitsPoster}
              label="The benefits row on the live site: hovering a card turns it over to reveal the explanation behind the term"
              width={1440}
              height={712}
            />
            <figcaption className={styles.artNote}>
              After testing with accordion drop-downs, I opted for hover-cards as they required less
              clicks.
            </figcaption>
          </figure>

          <figure className={`${styles.art} ${styles.large}`}>
            <img
              className={base.figureImage}
              data-zoom
              src={whyRefrigerants}
              alt="The why refrigerants row: 2000x worse than CO2, 6% of global emissions, and ranked the #1 climate solution"
              width={1440}
              height={274}
              loading="lazy"
            />
            <figcaption className={styles.artNote}>
              I contextualized the problem with surprising statistics and familiar proxies like CO2.
            </figcaption>
          </figure>

          <figure className={`${styles.art} ${styles.reading}`}>
            <img
              className={base.figureImage}
              data-zoom
              src={howItWorks}
              alt="The how it works section: four numbered steps — recover, transport, destroy, track — each with its own diagram"
              width={1440}
              height={1418}
              loading="lazy"
            />
            <figcaption className={styles.artNote}>
              Instead of a wall of text explaining how it works, I visualized the process to make it
              more clear
            </figcaption>
          </figure>
        </section>

        <section className={styles.exploration}>
          <div className={`${base.col} ${base.block}`}>
            <h2 className={base.heading}>Using copy and tone to appeal to emotion</h2>
            <p className={base.copy}>
              I used powerful language like “most neglected problem in climate change,” and “we need
              all hands on deck” to evoke curiosity, empathy, and create urgency. Recoolit’s voice is
              optimistic, direct, and determined.
            </p>
          </div>

          <figure className={`${styles.art} ${styles.large}`}>
            <img
              className={base.figureImage}
              data-zoom
              src={headerHero}
              alt="The home page header: a mountain photograph under the line “Empowering sustainable cooling”"
              width={1440}
              height={808}
              loading="lazy"
            />
            <figcaption className={styles.artNote}>
              The title is succinct and descriptive, while the subtitle entices users to learn more.
            </figcaption>
          </figure>

          <figure className={`${styles.art} ${styles.large}`}>
            <img
              className={base.figureImage}
              data-zoom
              src={ourMission}
              alt="The our mission section: “The planet is burning, and we need all hands on deck”, beside a photograph of a burning forest"
              width={1440}
              height={734}
              loading="lazy"
            />
            <figcaption className={styles.artNote}>
              The header and imagery create a sense of urgency.
            </figcaption>
          </figure>

          <figure className={`${styles.art} ${styles.large}`}>
            <img
              className={base.figureImage}
              data-zoom
              src={partners}
              alt="The our partners section: fifteen partner logos laid out in a grid under one line about the transition"
              width={1440}
              height={841}
              loading="lazy"
            />
            <figcaption className={styles.artNote}>
              This section proudly acknowledges partners and reiterates the collective commitment to
              the mission.
            </figcaption>
          </figure>
        </section>

        <section className={styles.exploration}>
          <div className={`${base.col} ${base.block}`}>
            <h2 className={base.heading}>Guiding users to take action</h2>
            <p className={base.copy}>
              I wanted Recoolit’s different user groups to easily achieve their goals on our website.
              I created a 3 column purchase section that effectively presents call to actions to
              different users.
            </p>
          </div>

          <figure className={`${styles.art} ${styles.large}`}>
            <img
              className={base.figureImage}
              data-zoom
              src={comparisons}
              alt="The purchase section in three columns — business, consumer and enterprise — each offset compared to homes, people and flights"
              width={1268}
              height={779}
              loading="lazy"
            />
            <figcaption className={styles.artNote}>
              I drew comparisons to homes and flights so that users are able to better understand the
              impact of their purchases.
            </figcaption>
          </figure>

          <figure className={`${styles.art} ${styles.large}`}>
            <LoopVideo
              src={businesses}
              poster={businessesPoster}
              label="The partner explainers on the live site, each one opening to say how that group takes part"
              width={1280}
              height={894}
            />
            <figcaption className={styles.artNote}>
              These explainers for target partners make it easy to identify who can participate in
              this ecosystem, allowing them to quickly find information that is most applicable.
            </figcaption>
          </figure>
        </section>

        <section className={styles.exploration}>
          <div className={`${base.col} ${base.block}`}>
            <h2 className={base.heading}>Humanizing the website</h2>
            <p className={base.copy}>
              Since Recoolit didn’t have any high quality photos of their work in Indonesia, I wanted
              to humanize the site and add personality where possible.
            </p>
          </div>

          <PullQuote className={base.col} attribution="—Usability test participant" width={560}>
            “I can’t tell if this is a real company”
          </PullQuote>

          <figure className={`${styles.art} ${styles.reading}`}>
            <LoopVideo
              src={team}
              poster={teamPoster}
              label="The meet the team grid: hovering a portrait swaps it for a second, more candid photograph"
              width={1200}
              height={1440}
            />
            <figcaption className={styles.artNote}>
              The real people behind Recoolit!
            </figcaption>
          </figure>
        </section>

        <section className={`${styles.exploration} ${styles.closeArt}`}>
          <div className={base.col}>
            <h2 className={base.heading}>Prototype walkthrough</h2>
          </div>
          <figure className={`${styles.art} ${styles.large}`}>
            <LoopVideo
              src={finalPrototype}
              poster={finalPrototypePoster}
              label="A walkthrough of the finished prototype, scrolling the explainer page from the header through to the call to action"
              width={1280}
              height={682}
            />
          </figure>
        </section>

        {/* ---------- reflections ---------- */}
        <section id="reflections" className={`${base.col} ${base.block} ${base.anchor}`}>
          <SectionHead eyebrow="Reflections" heading="Impact" />
          <p className={base.copy}>
            Since the launch of my redesign, Recoolit has secured two critical partnerships with
            Sequestr and Wren, the leading carbon marketplace for individuals. These partnerships
            cover all existing operating expenses, enabling Recoolit to shift their focus from
            survival to growth.
          </p>
        </section>

        <section className={`${base.col} ${base.block}`}>
          <h2 className={base.heading}>Next Steps</h2>
          <p className={base.copy}>
            My contract was completed when I handed off my designs to the developer team, but if I get
            the chance to collaborate further with Recoolit, I would like to focus on:
          </p>
          <ol className={styles.steps}>
            <li>
              <strong>Increasing customer value</strong> by redesigning the registry and purchase
              receipt page, making each purchase feel impactful. Take advantage of Recoolit’s
              traceability, and show the impact of a user’s entire lifecycle in an interactive,
              user-friendly format.
            </li>
            <li>
              <strong>Improving interactivity</strong> to tell a better story. Explore using animation
              and scrollytelling techniques to make their story and website more engaging.
            </li>
            <li>
              <strong>Ensuring the website is accessible and useful to partners in Indonesia.</strong>{' '}
              Conduct tests with users in Indonesia and make sure they can achieve their goals on the
              site.
            </li>
            <li>
              <strong>Tracking page views, session duration, bounce rate, and conversion</strong> to
              identify the pages users are clicking on and dropping off from.
            </li>
          </ol>
        </section>

        <section className={base.learningsSection}>
          <div className={`${base.col} ${base.block} ${base.tight}`}>
            <p className={base.eyebrow}>Learnings</p>
            <div className={base.learnings}>
              <div>
                <h2 className={base.heading}>
                  Effective UX writing can be powerful in telling a compelling story.
                </h2>
                <p className={base.copy}>
                  I realized through user testing that the length of my sentences, word choice, and
                  information placement all directly affect users’ comprehension of our mission and
                  their likelihood to convert. Conducting tests specifically focused on the copy
                  proved to be extremely valuable.
                </p>
              </div>
              <div>
                <h2 className={base.heading}>
                  Utilize an 8px grid for more consistent layout and spacing.
                </h2>
                <p className={base.copy}>
                  I initially used arbitrary column sizes and vertical spacing, but cleaned everything
                  up midway through in order for consistency and to reduce the workload for the
                  developer. Next time, I’ll start with a defined spacing system and use an 8px grid
                  layout from the beginning for a more seamless handoff.
                </p>
              </div>
            </div>
          </div>
        </section>

        <p className={`${base.col} ${base.thanks}`}>Thank you for reading!</p>

        <NextProject
          className={base.wide}
          to="/work/finding-magic-on-the-road"
          title="Making Road Trips Magical with Google Maps"
          image={roadTripHero}
        />
      </div>

      <ReadingProgress sections={SECTIONS} />
      <Lightbox />
    </article>
  )
}
