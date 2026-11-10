import { useEffect, useRef } from 'react'
import Lightbox from '../components/Lightbox'
import lily from '../assets/Lily_Right.png'
import profile from '../assets/about/profile-park.webp'
import crochet1 from '../assets/about/crochet-1.webp'
import crochet2 from '../assets/about/crochet-2.webp'
import crochet3 from '../assets/about/crochet-3.webp'
import ripple from '../assets/about/ripple.mp4'
import ripplePoster from '../assets/about/ripple-poster.webp'
import golf from '../assets/about/golf.webp'
import typeDesign from '../assets/about/type-design.webp'
import styles from './About.module.css'

/*
 * The Ripple recording, which runs while it is on screen and holds still when
 * it isn't — the same way the home page's cards and the case studies' figures
 * do. It carries data-zoom too, so the phone can be opened at size rather than
 * squinted at.
 */
function RippleLoop() {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
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
      className={styles.ripple}
      data-zoom
      data-zoom-label="Ripple — a daily-habit app for sustainable choices"
      ref={ref}
      src={ripple}
      poster={ripplePoster}
      width={480}
      height={968}
      muted
      loop
      playsInline
      preload="none"
      aria-label="Ripple — a daily-habit app for sustainable choices"
    />
  )
}

/*
 * The pile: the crochet first, then the two that go with "currently learning".
 * They overlap the way a stack of prints does and fan apart under the pointer.
 */
const PHOTOS = [
  { src: crochet1, alt: 'A crocheted No-Face holding a tiny green leaf' },
  { src: crochet2, alt: 'A crocheted bumblebee held up to the camera' },
  { src: crochet3, alt: 'A white crocheted bunny sitting on a wooden table' },
  { src: golf, alt: 'Kelley mid-swing on a fairway' },
  { src: typeDesign, alt: 'Kelley drawing letterforms at a desk' },
]

export default function About() {
  useEffect(() => {
    document.title = 'About — Kelley Yu'
  }, [])

  return (
    <div className={styles.page}>
      <section className={`${styles.wide} ${styles.hero}`}>
        {/* the arch is its own element so it can clip: the lily hangs outside
            the frame and would be cut off with it */}
        <div className={styles.portrait}>
          <div className={styles.frame}>
            <img src={profile} alt="Kelley under the cherry blossoms" />
          </div>
          <img className={styles.lily} src={lily} alt="" aria-hidden="true" />
        </div>

        <div className={styles.intro}>
          <h1 className={styles.title}>hi, I’m kelley.</h1>
          <p className={styles.copy}>
            I’m a product designer with a background in consumer psychology and account
            management. I bring both perspectives to my work, designing for what people need and
            what businesses want to achieve.
          </p>
          <p className={styles.copy}>
            I recently received my Master’s in Human Computer Interaction and Design from the
            University of Washington.
          </p>
        </div>
      </section>

      <section className={`${styles.wide} ${styles.split}`}>
        <p className={styles.copy}>
          I’m especially curious about how design can help build more sustainable habits, one
          person, one action, one day at a time. That idea led to Ripple, a passion project that
          gamifies sustainable habits. It’s what inspired the pond theme on this site!
        </p>
        <div className={styles.rippleSlot}>
          <RippleLoop />
        </div>
      </section>

      <section className={`${styles.wide} ${styles.hobbies}`}>
        <p className={styles.copy}>
          Outside of work, I love dancing, crocheting, golfing, and dog-sitting. Currently learning
          type design.
        </p>

        <div className={styles.fan}>
          {PHOTOS.map((photo) => (
            <img key={photo.src} src={photo.src} alt={photo.alt} data-zoom loading="lazy" />
          ))}
        </div>
      </section>

      <Lightbox />
    </div>
  )
}
