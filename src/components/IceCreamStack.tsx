import { Fragment, useEffect, useRef, useState } from 'react'
import coneImg from '../assets/rtj/cone.webp'
import scoopImg from '../assets/rtj/scoop.webp'
import sprinklesImg from '../assets/rtj/sprinkles.webp'
import blendPoster from '../assets/rtj/travel-blend-poster.webp'
import wrappedPoster from '../assets/rtj/wrapped-poster.webp'
import gemsPoster from '../assets/rtj/hidden-gems-poster.webp'
import blendFlow from '../assets/rtj/travel-blend-flow.mp4'
import wrappedFlow from '../assets/rtj/wrapped-flow.mp4'
import gemsFlow from '../assets/rtj/hidden-gems-flow.mp4'
import styles from './IceCreamStack.module.css'

/*
 * Figma 386:370 / 508:12094 / 512:13357. Three rows that share one illustration:
 * the cone pins first, the scoop scrolls up and locks into it, then the sprinkles,
 * and the finished cone releases when the last row ends. The pieces are transparent
 * crops of one drawing, so stacking them at the offsets below rebuilds it exactly.
 */
const CONE_W = 120

const rows = [
  {
    key: 'cone',
    piece: coneImg,
    pieceClass: 'cone',
    caption: ['The Cone:', 'Support & Alignment'],
    title: 'Travel Blend + Shared Itinerary',
    body:
      'Enter the Jam through the Travel Blend, and you’ll see a shared itinerary that keeps everyone on the same page while making it easy to find and add stops. No need to pass around phones or interrupt the driver’s navigation.',
    poster: blendPoster,
    video: blendFlow,
    videoAlt: 'Joining a Road Trip Jam for North Cascades and sharing your travel preferences',
  },
  {
    key: 'scoop',
    piece: scoopImg,
    pieceClass: 'scoop',
    caption: ['The Ice Cream:', 'Human Connection'],
    title: 'Road Trip Wrapped',
    body:
      'An interactive, shareable story that brings together trip stats, photos, and magical moments – preserving the shared memories that would have gotten lost in the camera roll.',
    poster: wrappedPoster,
    video: wrappedFlow,
    videoAlt: 'A Road Trip Wrapped card surfacing on the map after the trip',
  },
  {
    key: 'sprinkles',
    piece: sprinklesImg,
    pieceClass: 'sprinkles',
    caption: ['The Sprinkles:', 'Spontaneous Discovery'],
    title: 'Hidden Gems',
    body:
      'Worth-it spots marked by trusted friends and other travelers that pop up on your route. Find a hidden gem, and mark it on the map for the next traveler to find.',
    poster: gemsPoster,
    video: gemsFlow,
    videoAlt: 'Hidden gems other travelers marked surfacing along the North Cascades route',
  },
] as const

export default function IceCreamStack() {
  const railRefs = useRef<(HTMLDivElement | null)[]>([])
  const coneRef = useRef<HTMLImageElement>(null)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const [active, setActive] = useState(0)

  useEffect(() => {
    let frame = 0

    const measure = () => {
      frame = 0
      const cone = coneRef.current
      if (!cone) return
      const coneRect = cone.getBoundingClientRect()
      if (!coneRect.width) return
      // the cone sits 53.5 design-px below the top of the stack, so its rendered
      // width tells us the scale and therefore where the pin line falls
      const pinLine = coneRect.top - 53.5 * (coneRect.width / CONE_W)

      let next = 0
      railRefs.current.forEach((rail, i) => {
        if (rail && rail.getBoundingClientRect().top <= pinLine + 1) next = i
      })
      setActive(next)
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure)
    }

    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  // the recordings are the heavy assets on this page, so each one only fetches
  // and plays while its own row is in view
  useEffect(() => {
    const videos = videoRefs.current.filter((el): el is HTMLVideoElement => el !== null)
    if (!videos.length) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      videos.forEach((el) => {
        el.preload = 'metadata'
        el.controls = true
      })
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLVideoElement
          if (entry.isIntersecting) {
            void el.play().catch(() => void (el.controls = true))
          } else {
            el.pause()
          }
        })
      },
      { rootMargin: '200px 0px' },
    )
    videos.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className={styles.stage}>
      <div className={styles.rows}>
        {rows.map((row, i) => (
          // flat children: each rail spans from its own row to the end of the grid,
          // which is what lets the pieces pin one after another and release together
          <Fragment key={row.key}>
            <div className={`${styles.rail} ${styles[`rail${i + 1}`]}`} ref={(el) => void (railRefs.current[i] = el)}>
              <img
                className={`${styles.piece} ${styles[row.pieceClass]}`}
                ref={i === 0 ? coneRef : undefined}
                src={row.piece}
                alt=""
              />
              {/* one caption for the whole stack, cross-fading as each piece lands */}
              {i === 0 && (
                <p className={styles.caption} aria-live="polite">
                  {rows.map((candidate, j) => (
                    <span key={candidate.key} className={styles.captionLine} aria-hidden={j !== active} data-on={j === active}>
                      {candidate.caption[0]}
                      <br />
                      {candidate.caption[1]}
                    </span>
                ))}
              </p>
            )}
            {/* one column: every piece keeps its own caption instead */}
            <p className={styles.captionStacked}>
              {row.caption[0]}
              <br />
              {row.caption[1]}
            </p>
          </div>

          <div className={`${styles.body} ${styles[`body${i + 1}`]}`}>
            <div className={styles.text}>
              <h3 className={styles.title}>{row.title}</h3>
              <p className={styles.copy}>{row.body}</p>
            </div>
            <div className={styles.panel}>
              <video
                className={styles.phone}
                ref={(el) => void (videoRefs.current[i] = el)}
                src={row.video}
                poster={row.poster}
                width={520}
                height={1130}
                muted
                loop
                playsInline
                preload="none"
                aria-label={row.videoAlt}
              />
            </div>
          </div>
        </Fragment>
        ))}
      </div>
    </div>
  )
}
