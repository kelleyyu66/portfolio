import { useEffect } from 'react'
import type { ReactNode } from 'react'
import HeroTravelBlend from '../components/HeroTravelBlend'
import IceCreamStack from '../components/IceCreamStack'
import IdeaMatrix from '../components/IdeaMatrix'
import Waterline from '../components/Waterline'
import ReadingProgress from '../components/ReadingProgress'
import type { ProgressSection } from '../components/ReadingProgress'
import navEveryday from '../assets/rtj/nav-everyday.webp'
import navRoadTrip from '../assets/rtj/nav-roadtrip.webp'
import problemCar from '../assets/rtj/problem-car.webp'
import posterA from '../assets/rtj/poster-a.webp'
import posterB from '../assets/rtj/poster-b.webp'
import iconCollaborative from '../assets/rtj/icon-collaborative.webp'
import iconTrust from '../assets/rtj/icon-trust.webp'
import iconSpontaneous from '../assets/rtj/icon-spontaneous.webp'
import iconMagic from '../assets/rtj/icon-magic.webp'
import iceCreamModel from '../assets/rtj/ice-cream-model.webp'
import frogPond from '../assets/rtj/frog-pond.webp'
import dd1Ver1 from '../assets/rtj/dd1-ver1.webp'
import dd1Ver2 from '../assets/rtj/dd1-ver2.webp'
import dd1Final from '../assets/rtj/dd1-final.webp'
import dd1Passport from '../assets/rtj/dd1-passport.webp'
import dd2One from '../assets/rtj/dd2-01.webp'
import dd2Two from '../assets/rtj/dd2-02.webp'
import dd2Three from '../assets/rtj/dd2-03.webp'
import googleTeam from '../assets/rtj/google-team.webp'
import styles from './RoadTripJam.module.css'

/* the five beats the bottom rail steps through, in page order */
const SECTIONS: ProgressSection[] = [
  { id: 'background', label: 'Background' },
  { id: 'research', label: 'Research' },
  { id: 'final-designs', label: 'Final designs' },
  { id: 'design-process', label: 'Design process' },
  { id: 'reflections', label: 'Reflections' },
]

// Figma 380:43. One-off page: the shared CaseStudy template still serves the
// other three projects.
export default function RoadTripJam() {
  useEffect(() => {
    const previous = document.title
    document.title = 'Making Road Trips Magical with Google Maps — Kelley Yu'
    return () => {
      document.title = previous
    }
  }, [])

  return (
    <article className={styles.page}>
      <header id="background" className={`${styles.wide} ${styles.hero} ${styles.anchor}`}>
        <div className={styles.heroText}>
          <h1 className={styles.title}>Making Road Trips Magical with Google Maps</h1>
          <p className={styles.subtitle}>
            Integrating Gemini into Google Maps for a collaborative road trip experience.
          </p>
        </div>
        <hr className={styles.rule} />
        <dl className={styles.meta}>
          <div>
            <dt>Role</dt>
            <dd>Product designer</dd>
          </div>
          <div>
            <dt>Context</dt>
            <dd>
              UW MHCI+D Master’s Capstone,
              <br />
              Feb–August 2026
            </dd>
          </div>
          <div>
            <dt>Team</dt>
            <dd>
              Kelley Yu
              <br />
              Winnie Cheng
              <br />
              Rakshit Keswani
              <br />
              Josephine Waliman
            </dd>
          </div>
          <div>
            <dt>Tools</dt>
            <dd>Figma, Cursor, Gemini</dd>
          </div>
        </dl>
        <HeroTravelBlend />
      </header>

      <div className={styles.sections}>
        <section className={`${styles.col} ${styles.intro}`}>
          <p className={styles.lede}>
            In a world competing for our attention, road trips invite us to slow down, be present, and connect
            with each other and the world around us. I was excited to partner with Google Maps to integrate
            Gemini into the platform to explore an untapped opportunity: road trips.
          </p>
          <Callout label="Guiding AI principle">
            Use AI where it adds meaningful value to road trips, with care for people and the planet.
          </Callout>
        </section>

        <section className={`${styles.col} ${styles.block}`}>
          <SectionHead eyebrow="The opportunity" heading="Taking Google Maps beyond A → B" />
          <p className={styles.copy}>
            Google Maps helps millions of people navigate from point A to point B, but it doesn’t account for
            what makes road trips special: a flexible itinerary, spontaneous discoveries, and human connection.
          </p>
          <div className={styles.diagrams}>
            <figure className={styles.diagram}>
              <img src={navEveryday} alt="A straight dotted route from point A to point B" width={148} height={151} />
              <figcaption>Everyday Navigation</figcaption>
            </figure>
            <figure className={styles.diagram}>
              <img
                src={navRoadTrip}
                alt="A wandering dotted route that loops through points A to E"
                width={208}
                height={153}
              />
              <figcaption>Road Trip Navigation</figcaption>
            </figure>
          </div>
          <p className={styles.copy}>
            We focused on <strong>young adults aged 18-24 traveling with friends.</strong> Their evolving brand
            preferences were an opportunity for Google Maps to build early loyalty.
          </p>
        </section>

        <section className={`${styles.col} ${styles.block}`}>
          <SectionHead eyebrow="The problem" heading="Road trips are collaborative and fluid, but the tools are not." />
          <p className={styles.copy}>
            Road trippers are juggling apps across multiple phones, coordinating different preferences, and
            constantly negotiating what to do next while trying not to miss an exit.
          </p>
          <figure className={styles.figure}>
            <img className={styles.figureImage} src={problemCar} alt="Four friends in a car, each buried in their own phone" width={680} height={408} />
            <figcaption>Image generated by Gemini — I swear I’m a safe driver!</figcaption>
          </figure>
        </section>

        <section id="research" className={`${styles.wide} ${styles.funFinding} ${styles.anchor}`}>
          <div className={styles.funFindingText}>
            <SectionHead eyebrow="Fun finding" heading="Recruiting Gen Z required thinking like Gen Z" level="h3" />
            <p className={styles.small}>
              I proposed putting up posters around UW’s campus to recruit our target audience. When responses
              were slow, I experimented with a more Gen-Z design that generated{' '}
              <strong>2x as many survey responses.</strong>
            </p>
          </div>
          <div className={styles.posters}>
            <figure className={styles.poster}>
              <figcaption>Poster A</figcaption>
              <img src={posterA} alt="The first recruitment poster: a scenic road trip photo" width={200} height={283} />
            </figure>
            <figure className={styles.poster}>
              <figcaption>Poster B</figcaption>
              <img src={posterB} alt="The Gen-Z recruitment poster: a meme-styled layout" width={200} height={283} />
            </figure>
          </div>
        </section>

        <section className={`${styles.col} ${styles.block} ${styles.tight}`}>
          <p className={styles.eyebrow}>Key insights from interviews</p>
          <ul className={styles.insights}>
            <li className={styles.insight}>
              <img src={iconCollaborative} alt="" width={26} height={24} />
              <p>
                Road trips are <strong>collaborative</strong>, but navigation tools treat the car like a{' '}
                <strong>single person</strong>.
              </p>
            </li>
            <li className={styles.insight}>
              <img src={iconSpontaneous} alt="" width={26} height={24} />
              <p>
                The best road trip moments are <strong>spontaneous</strong>, but spontaneity takes{' '}
                <strong>coordination</strong>.
              </p>
            </li>
            <li className={styles.insight}>
              <img src={iconTrust} alt="" width={24} height={24} />
              <p>
                Travelers trust <strong>friends and locals</strong> more than AI to recommend{' '}
                <strong>worth-it stops</strong>.
              </p>
            </li>
            <li className={styles.insight}>
              <img src={iconMagic} alt="" width={24} height={24} />
              <p>
                The magic of road trips lives in <strong>shared bonds</strong> and <strong>memories</strong>.
              </p>
            </li>
          </ul>
        </section>

        <PullQuote className={styles.col} attribution="—Interview Participant 3" width={512}>
          “I trust recommendations from another person, 100 times over AI.”
        </PullQuote>

        <section className={`${styles.col} ${styles.block}`}>
          <SectionHead eyebrow="Reframing the approach" heading="AI should make room for magic, not create it." />
          <p className={styles.copy}>
            Participants’ skepticism toward AI prompted me to refocus its role on helping group coordination.
          </p>
          <Callout label="Intentional AI">
            <div className={styles.shift}>
              <div className={styles.shiftBefore}>
                <p className={styles.shiftTitle}>AI creates the magic</p>
                <p className={styles.shiftBody}>Finds hidden gems, suggest plans</p>
              </div>
              <Arrow />
              <div className={styles.shiftAfter}>
                <p className={styles.shiftTitle}>AI makes room for magic</p>
                <p className={styles.shiftBody}>Helps friends find common ground, reduces cognitive load</p>
              </div>
            </div>
          </Callout>
        </section>

        <section className={styles.framework}>
          <div className={`${styles.col} ${styles.block}`}>
            <SectionHead eyebrow="From research to design" heading="Turning messy insights into a design framework" />
            <p className={styles.copy}>
              With nine research insights spanning the road-trip journey, I saw a need for a shared framework
              to guide our design decisions. I proposed organizing our findings around “MAGIC,” which then
              evolved into our <strong>Ice Cream Model of Road Trip Magic</strong>, inspired by a
              participant’s analogy:
            </p>
          </div>

          <PullQuote className={styles.col} attribution="—Interview Participant 8">
            “The memories are great, those specific magical moments. But it’s like... the sprinkles, whereas
            the connections are the ice cream.”
          </PullQuote>

          <div className={styles.model}>
            <div className={styles.modelCard}>
            <p className={styles.cardTitle}>The Ice Cream Model of Road Trip Magic</p>
            <div className={styles.modelBody}>
              <img
                className={styles.modelImage}
                src={iceCreamModel}
                alt="An ice cream cone: sprinkles on a scoop in a waffle cone"
                width={242}
                height={460}
              />
              <span className={`${styles.modelRule} ${styles.modelRule1}`} />
              <span className={`${styles.modelRule} ${styles.modelRule2}`} />
              <span className={`${styles.modelRule} ${styles.modelRule3}`} />
              <dl className={styles.modelKey}>
                <div>
                  <dt>
                    <span className={styles.sprinklesKey}>Sprinkles:</span> Spontaneous Discovery
                  </dt>
                  <dd>Unexpected detours and memorable moments</dd>
                </div>
                <div>
                  <dt>
                    <span className={styles.scoopKey}>Ice Cream:</span> Human Connection
                  </dt>
                  <dd>Conversation, bonding, shared experiences</dd>
                </div>
                <div>
                  <dt>
                    <span className={styles.coneKey}>Cone:</span> Support and Alignment
                  </dt>
                  <dd>Inclusive decision making, seamless coordination, driver support</dd>
                </div>
              </dl>
            </div>
          </div>
            <p className={styles.modelCaption}>
              The ice cream model became our design compass, ensuring that spontaneous discovery never came at
              the expense of group alignment or safety.
            </p>
          </div>
        </section>

        <section id="final-designs" className={`${styles.finals} ${styles.anchor}`}>
          <div className={styles.col}>
            <SectionHead eyebrow="Final designs" heading="Road Trip Jam: Planning and Discovering Together" />
          </div>
          <IceCreamStack />
        </section>

        {/* ---------- the blue band ---------- */}
        <section id="design-process" className={`${styles.deepDives} ${styles.anchor}`} aria-label="Design deep dives">
          <Waterline className={styles.waveTop} />
          <div className={styles.deepDivesInner}>
            <img className={styles.frog} src={frogPond} alt="" width={141} height={157} />
            <div className={`${styles.wide} ${styles.deepDive}`}>
              <div className={styles.deepDiveHead}>
                <SectionHead eyebrow="Design deep dive #1" heading="Reducing effort to entry" dark />
                <p className={styles.copy}>
                  I explored some fun onboarding concepts that could help Gemini give better recommendations to
                  travelers. I then used AI to rapidly create designs for testing.
                </p>
              </div>

              <div className={styles.panel}>
                <div className={styles.versions}>
                  <div className={styles.version}>
                    <p className={styles.panelLabel}>Ver 1</p>
                    <figure className={styles.labelled}>
                      <figcaption className={styles.imageLabel}>Personality Quiz</figcaption>
                      <img src={dd1Ver1} alt="Three quiz screens asking what makes you pull over" width={427} height={297} />
                    </figure>
                    <p className={styles.small}>A participant found the 10-screen quiz too long and the answers too limiting.</p>
                  </div>
                  <Arrow />
                  <div className={styles.version}>
                    <p className={styles.panelLabel}>Ver 2</p>
                    <figure className={styles.labelled}>
                      <figcaption className={styles.imageLabel}>Slider Quiz</figcaption>
                      <img src={dd1Ver2} alt="Three screens of preference sliders" width={419} height={290} />
                    </figure>
                    <p className={styles.small}>Sliders added nuance, but still required too much effort.</p>
                  </div>
                </div>
              </div>

              <div className={styles.panel}>
                <p className={styles.panelLabel}>Final—Opt-in personalization</p>
                <div className={styles.optIn}>
                  <div className={styles.optInMain}>
                    <figure className={styles.labelled}>
                      <figcaption className={styles.imageLabel}>Automatic Travel Blend</figcaption>
                      <img src={dd1Final} alt="Three screens building a Travel Blend for the group" width={587} height={414} />
                    </figure>
                    <p className={styles.small}>
                      I replaced the quiz with an <strong>opt-in flow</strong> where Gemini uses existing travel
                      history to personalize recommendations for the group.
                    </p>
                    <Callout label="Intentional AI">
                      Gemini uses existing preferences with consent to reduce setup effort.
                    </Callout>
                  </div>
                  <span className={styles.plus} aria-hidden="true">
                    +
                  </span>
                  <div className={styles.optInAside}>
                    <figure className={styles.labelled}>
                      <figcaption className={styles.imageLabel}>Road Trip Passport</figcaption>
                      <img src={dd1Passport} alt="A trip passport screen listing travel preferences" width={186} height={402} />
                    </figure>
                    <p className={styles.small}>
                      <strong>Trip Passport</strong> became a separate feature within one’s profile where
                      travelers can review and edit their preferences.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            <div className={`${styles.wide} ${styles.deepDive}`}>
              <div className={styles.deepDiveHead}>
                <SectionHead eyebrow="Design deep dive #2" heading="Making the shared itinerary easier to scan" dark />
                <p className={styles.copy}>
                  Early iterations created with AI were extremely information-dense and visually cluttered. We
                  simplified the hierarchy and UI within Figma so that travelers could quickly see upcoming stops
                  without getting overwhelmed.
                </p>
              </div>

              <div className={`${styles.panel} ${styles.panelSnug}`}>
                <div className={styles.iterations}>
                  <div className={styles.iteration}>
                    <p className={styles.panelLabel}>01 — Initial</p>
                    <img src={dd2One} alt="The first itinerary: a dense list over the map" width={208} height={442} />
                    <p className={styles.small}>Comprehensive, but too much information.</p>
                  </div>
                  <Arrow />
                  <div className={styles.iteration}>
                    <p className={styles.panelLabel}>02 — Revised</p>
                    <img src={dd2Two} alt="The revised itinerary: a cleaner map with a sheet" width={218} height={451} />
                    <p className={styles.small}>Much less cluttered, but itinerary isn’t clear on map.</p>
                  </div>
                  <Arrow />
                  <div className={styles.iteration}>
                    <p className={styles.panelLabel}>03 — Final</p>
                    <img src={dd2Three} alt="The final itinerary: route and stops legible together" width={218} height={451} />
                    <p className={styles.small}>Shows the most necessary information on the map and the sheet.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Waterline className={styles.waveBottom} flip />
        </section>

        <section id="reflections" className={`${styles.col} ${styles.block} ${styles.anchor}`}>
          <SectionHead eyebrow="Impact & reception" heading="Google loved the fresh perspective" />
          <p className={styles.copy}>
            Road Trip Jam was met with very positive feedback from our Google Maps partners. They recognized its
            potential to reimagine an established product and saw opportunities for the experience to resonate
            beyond our Gen Z audience.
          </p>
          <figure className={styles.figure}>
            <img className={styles.figureImage} src={googleTeam} alt="The project team on a video call with the Google Maps partners" width={680} height={256} />
            <figcaption>The wonderful Google team + a newly-born Noogler!</figcaption>
          </figure>
        </section>

        <PullQuote className={styles.col} attribution="—Sr. Staff Design Manager @ Google" width={490}>
          “It’s a fresh perspective on a very, frankly, old product.”
        </PullQuote>

        <section className={styles.learningsSection}>
          <div className={`${styles.col} ${styles.block} ${styles.tight}`}>
            <p className={styles.eyebrow}>Learnings</p>
            <div className={styles.learnings}>
              <div>
                <h2 className={styles.heading}>Design for the messy real world</h2>
                <p className={styles.copy}>
                  Going on our own road trips helped us uncover friction points and constraints we would’ve
                  missed otherwise—from the different needs of drivers and passengers to spotty cell service
                  and motion sickness from prolonged screen use.
                </p>
              </div>
              <div>
                <h2 className={styles.heading}>Show the right information at the right moment</h2>
                <p className={styles.copy}>
                  More information isn’t always better. We learned to simplify our shared itinerary and reveal
                  map details progressively as users zoomed in, keeping the interface useful without
                  overwhelming travelers on a relaxing road trip.
                </p>
              </div>
              <div>
                <h2 className={styles.heading}>Know when to let good ideas go</h2>
                <p className={styles.copy}>
                  Struggling to narrow down on our many ideas, we used 2x2s to help us focus. We evaluated each
                  idea on a scale of user effort vs. usefulness + magic.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.matrix}>
            <IdeaMatrix />
          </div>
        </section>

        <p className={`${styles.col} ${styles.thanks}`}>Thank you for reading!</p>
      </div>

      <ReadingProgress sections={SECTIONS} />
    </article>
  )
}

function SectionHead({
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

function Callout({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className={styles.callout}>
      <p className={styles.calloutLabel}>{label}</p>
      {typeof children === 'string' ? <p className={styles.copy}>{children}</p> : children}
    </div>
  )
}

function PullQuote({
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
      <blockquote style={width ? { maxWidth: `calc(${width} * var(--s))` } : undefined}>{children}</blockquote>
      <figcaption>{attribution}</figcaption>
    </figure>
  )
}

function Arrow() {
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
