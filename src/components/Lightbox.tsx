import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import styles from './Lightbox.module.css'

/*
 * Every asset on the page opens into a centred overlay where it can be read at
 * size and magnified. Rather than wiring a handler into each figure, this
 * listens for clicks on anything carrying data-zoom, so an asset becomes
 * openable by marking it up — which is also what makes the whole set clickable
 * without touching a dozen call sites.
 */

type Shot =
  | { kind: 'image'; src: string; caption: string }
  | { kind: 'video'; src: string; poster: string; caption: string }

export default function Lightbox() {
  const [shot, setShot] = useState<Shot | null>(null)
  const [zoomed, setZoomed] = useState(false)
  const [origin, setOrigin] = useState('50% 50%')
  const closeButton = useRef<HTMLButtonElement>(null)
  const opener = useRef<HTMLElement | null>(null)

  const close = useCallback(() => {
    setShot(null)
    setZoomed(false)
    setOrigin('50% 50%')
    opener.current?.focus()
  }, [])

  /* open on a click, or on Enter/Space for anyone on a keyboard */
  useEffect(() => {
    const open = (el: HTMLElement) => {
      opener.current = el
      /* the written description, before the affordance was added to it */
      const caption = el.dataset.zoomLabel ?? el.getAttribute('alt') ?? ''
      if (el instanceof HTMLImageElement) {
        setShot({ kind: 'image', src: el.currentSrc || el.src, caption })
      } else if (el instanceof HTMLVideoElement) {
        setShot({ kind: 'video', src: el.currentSrc || el.src, poster: el.poster, caption })
      }
    }

    const onClick = (event: MouseEvent) => {
      const el = (event.target as HTMLElement | null)?.closest<HTMLElement>('[data-zoom]')
      if (el) open(el)
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Enter' && event.key !== ' ') return
      const el = (event.target as HTMLElement | null)?.closest<HTMLElement>('[data-zoom]')
      if (!el) return
      event.preventDefault()
      open(el)
    }

    document.addEventListener('click', onClick)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('click', onClick)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  /* the markers are plain images and videos, so give them the affordance. It
     keeps the written description aside first, and runs once per element, so a
     second pass can't read its own work back and double the label. */
  useEffect(() => {
    document.querySelectorAll<HTMLElement>('[data-zoom]').forEach((el) => {
      if (el.dataset.zoomReady) return
      const name = el.getAttribute('alt') || el.getAttribute('aria-label') || ''
      el.dataset.zoomLabel = name
      el.dataset.zoomReady = 'true'
      el.tabIndex = 0
      el.setAttribute('role', 'button')
      el.setAttribute('aria-label', name ? `${name} — open larger` : 'Open larger')
    })
  }, [])

  /* escape closes it, and the page underneath holds still while it is open */
  useEffect(() => {
    if (!shot) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
    }
    document.addEventListener('keydown', onKeyDown)
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButton.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previous
    }
  }, [shot, close])

  if (!shot) return null

  const magnify = (event: React.MouseEvent<HTMLImageElement>) => {
    if (!zoomed) return
    const box = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - box.left) / box.width) * 100
    const y = ((event.clientY - box.top) / box.height) * 100
    setOrigin(`${x.toFixed(1)}% ${y.toFixed(1)}%`)
  }

  const startZoom = (event: React.MouseEvent<HTMLImageElement>) => {
    event.stopPropagation()
    const box = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - box.left) / box.width) * 100
    const y = ((event.clientY - box.top) / box.height) * 100
    setOrigin(`${x.toFixed(1)}% ${y.toFixed(1)}%`)
    setZoomed((on) => !on)
  }

  return createPortal(
    <div
      className={styles.backdrop}
      role="dialog"
      aria-modal="true"
      aria-label={shot.caption || 'Asset'}
      onClick={close}
    >
      <button ref={closeButton} className={styles.close} type="button" onClick={close} aria-label="Close">
        ×
      </button>

      {shot.kind === 'image' ? (
        <img
          className={`${styles.media} ${styles.image}`}
          src={shot.src}
          alt={shot.caption}
          data-zoomed={zoomed}
          style={{ transformOrigin: origin }}
          onClick={startZoom}
          onMouseMove={magnify}
        />
      ) : (
        <video
          className={styles.media}
          src={shot.src}
          poster={shot.poster}
          aria-label={shot.caption}
          controls
          autoPlay
          loop
          muted
          playsInline
          onClick={(event) => event.stopPropagation()}
        />
      )}
    </div>,
    document.body,
  )
}
