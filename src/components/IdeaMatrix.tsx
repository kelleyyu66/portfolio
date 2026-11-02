import { useEffect, useId, useState } from 'react'
import groupFeedImg from '../assets/rtj/ov-group-feed.webp'
import keychainImg from '../assets/rtj/ov-keychain.webp'
import easterEggsImg from '../assets/rtj/ov-easter-eggs.webp'
import styles from './IdeaMatrix.module.css'

// Figma 380:43 → 574:7258, an 832×530 card. Chip coordinates are the card's own
// pixel grid; --u is one of those pixels, so the whole plot scales as a unit.
const CARD_W = 832
const CARD_H = 530

type Exploration = {
  image: string
  /** the overlay image is a square crop in the design, not a full-width one */
  square?: boolean
  title: string
  description: string
  reason: string
}

const explorations: Record<string, Exploration> = {
  groupFeed: {
    image: groupFeedImg,
    title: 'Group Feed',
    description:
      'A central feed in the Road Trip Jam that shows essential information like weather, packing list, etc.',
    reason:
      'While we thought this would be useful, the idea wasn’t that innovative and was already solved by other apps.',
  },
  keychain: {
    image: keychainImg,
    square: true,
    title: 'Keychain Camera',
    description:
      'A disposable-inspired camera that captures memories along your route without the phone distractions.',
    reason:
      'The barrier to adoption outweighed its value, so we carried the memory-mapping concept into Road Trip Wrapped instead.',
  },
  easterEggs: {
    image: easterEggsImg,
    title: 'Easter Eggs',
    description: 'Leave surprises for friends to unbox at places you’ve visited.',
    reason:
      'Inspired by Pokemon Go, Easter Eggs encouraged discovery and connection, but required too much effort for limited practical value.',
  },
}

type Chip = {
  label: string
  x: number
  y: number
  pursued?: boolean
  exploration?: keyof typeof explorations
  /** open the panel to the left — these chips sit too close to the right edge */
  flip?: boolean
}

const chips: Chip[] = [
  { label: 'Shared Itinerary', x: 313, y: 114, pursued: true },
  { label: 'Wrapped', x: 124, y: 143, pursued: true },
  { label: 'Hidden Gems', x: 465, y: 146, pursued: true },
  { label: 'AR timelapse', x: 595, y: 150 },
  { label: 'Group Feed', x: 244, y: 187, exploration: 'groupFeed' },
  { label: 'Smart Itinerary', x: 405, y: 198 },
  { label: 'Keychain Camera', x: 603, y: 209, exploration: 'keychain', flip: true },
  { label: 'Road Trip Passport', x: 185, y: 230, pursued: true },
  { label: 'Short List', x: 444, y: 245 },
  { label: 'Easter Eggs', x: 586, y: 263, exploration: 'easterEggs', flip: true },
  { label: 'Magic 8 Ball', x: 139, y: 352 },
]

function ArrowUpRight() {
  return (
    <svg className={styles.chipArrow} viewBox="0 0 8 8" width="8" height="8" aria-hidden="true">
      <path
        d="M0.7 7.3 7.3 0.7M2.6 0.7h4.7v4.7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function IdeaMatrix() {
  const [open, setOpen] = useState<string | null>(null)
  const idBase = useId()

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(null)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  const pos = (n: number) => `calc(${n} * var(--u))`

  return (
    <div className={styles.root}>
      <div className={styles.card}>
        <p className={styles.title}>Idea Prioritization Matrix</p>
        <p className={styles.caption}>
          Hover over <ArrowUpRight /> to see our explorations and why we let them go.
        </p>

        <svg className={styles.axes} viewBox={`0 0 ${CARD_W} ${CARD_H}`} aria-hidden="true">
          <defs>
            <marker id={`${idBase}-head`} markerWidth="7" markerHeight="7" refX="5.6" refY="3.5" orient="auto">
              <path d="M0 0.6 5.8 3.5 0 6.4" fill="none" stroke="currentColor" strokeWidth="1.1" />
            </marker>
          </defs>
          <path d="M89 464V62" markerEnd={`url(#${idBase}-head)`} />
          <path d="M86 464h695" markerEnd={`url(#${idBase}-head)`} />
        </svg>

        <p className={`${styles.axisLabel} ${styles.axisY}`}>USEFULNESS + MAGIC</p>
        <p className={`${styles.axisLabel} ${styles.axisX}`}>USER EFFORT</p>

        {chips.map((chip) => {
          const style = { left: pos(chip.x), top: pos(chip.y) }
          const className = `${styles.chip} ${chip.pursued ? styles.pursued : styles.dropped}`

          if (!chip.exploration) {
            return (
              <span key={chip.label} className={className} style={style}>
                {chip.label}
              </span>
            )
          }

          const exploration = explorations[chip.exploration]
          const panelId = `${idBase}-${chip.exploration}`
          const isOpen = open === chip.exploration

          return (
            <div
              key={chip.label}
              className={styles.chipWrap}
              style={style}
              onPointerEnter={() => setOpen(chip.exploration!)}
              onPointerLeave={() => setOpen((current) => (current === chip.exploration ? null : current))}
            >
              <button
                type="button"
                className={`${className} ${styles.chipButton}`}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : chip.exploration!)}
                onFocus={() => setOpen(chip.exploration!)}
              >
                {chip.label}
                <ArrowUpRight />
              </button>
              {/* anchored to the right of the chip; the 12px gap is inside the
                  hover area so the pointer can cross it without closing */}
              <div
                className={`${styles.anchor} ${chip.flip ? styles.anchorFlip : ''}`}
                hidden={!isOpen}
              >
                <Exploration id={panelId} exploration={exploration} />
              </div>
            </div>
          )
        })}

        <ul className={styles.legend}>
          <li>
            <span className={`${styles.swatch} ${styles.pursued}`} />
            Pursued
          </li>
          <li>
            <span className={`${styles.swatch} ${styles.dropped}`} />
            Not pursued
          </li>
        </ul>
      </div>
    </div>
  )
}

function Exploration({ id, exploration }: { id?: string; exploration: Exploration }) {
  return (
    <div id={id} className={styles.overlay} role="group" aria-label={exploration.title}>
      <img
        className={`${styles.overlayImage} ${exploration.square ? styles.overlayImageSquare : ''}`}
        src={exploration.image}
        alt=""
      />
      <div className={styles.overlayText}>
        <p className={styles.overlayTitle}>{exploration.title}</p>
        <p className={styles.overlayBody}>{exploration.description}</p>
        <p className={styles.overlayReason}>{exploration.reason}</p>
      </div>
    </div>
  )
}
