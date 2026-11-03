import { useCallback, useEffect, useState } from 'react'
import styles from './ReadingProgress.module.css'

export type ProgressSection = { id: string; label: string }

/*
 * A hairline across the bottom of the window that says how far into a long case
 * study you are, and lets you jump between its parts. Every section is named all
 * the way along; the one you are reading is the one set in bold.
 *
 * The fill is measured in sections rather than in pixels, so it meets a tick
 * exactly as you cross into the next part however long that part happens to run.
 */
export default function ReadingProgress({ sections }: { sections: ProgressSection[] }) {
  const [active, setActive] = useState(0)
  const [within, setWithin] = useState(0)
  const [past, setPast] = useState(false)

  useEffect(() => {
    let frame = 0

    const measure = () => {
      frame = 0
      const tops = sections.map((section) => {
        const el = document.getElementById(section.id)
        return el ? el.getBoundingClientRect().top + window.scrollY : 0
      })

      const last = document.getElementById(sections[sections.length - 1].id)
      const article = last?.closest('article')
      const end = article
        ? article.getBoundingClientRect().bottom + window.scrollY
        : document.documentElement.scrollHeight

      // a reading line a third of the way down the window: a section becomes the
      // current one when you are looking at it, not when its first pixel appears
      const line = window.scrollY + window.innerHeight * 0.3

      // the line can never reach the foot of the article, so the last section
      // finishes where the article does — the moment the footer comes into view
      const finish = end - window.innerHeight * 0.7

      let i = 0
      tops.forEach((top, n) => {
        if (line >= top) i = n
      })

      const from = tops[i]
      const to = i + 1 < tops.length ? tops[i + 1] : finish

      setActive(i)
      setWithin(to > from ? Math.min(1, Math.max(0, (line - from) / (to - from))) : 1)
      setPast(line >= finish)
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
  }, [sections])

  const go = useCallback((id: string) => {
    const target = document.getElementById(id)
    if (!target) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    target.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' })
  }, [])

  return (
    <nav className={styles.bar} aria-label="Case study sections" data-past={past}>
      <ol className={styles.items}>
        {sections.map((section, i) => (
          <li key={section.id}>
            <button
              type="button"
              className={styles.item}
              aria-current={i === active ? 'true' : undefined}
              onClick={() => go(section.id)}
            >
              {section.label}
            </button>
          </li>
        ))}
      </ol>

      <div className={styles.track} aria-hidden="true">
        <span className={styles.rail} />
        <span
          className={styles.fill}
          style={{ width: `${(((active + within) / sections.length) * 100).toFixed(2)}%` }}
        />
        {sections.slice(1).map((section, i) => (
          <span
            key={section.id}
            className={styles.tick}
            style={{ left: `${(((i + 1) / sections.length) * 100).toFixed(2)}%` }}
          />
        ))}
      </div>
    </nav>
  )
}
