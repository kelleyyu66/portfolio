import { useRef, useState } from 'react'
import { Link, useLocation } from 'react-router'
import logo from '../assets/Logo.png'
import { featuredProjects } from '../data/projects'
import styles from './Nav.module.css'

const RESUME_URL =
  'https://drive.google.com/file/d/1xXBOXbhZ7xwkL7sBv-D5ZCoZyk6Ob9sH/view?usp=sharing'

type NavItem = {
  label: string
  to: string
  external?: boolean
  /** which paths light the link up; an exact match on `to` by default */
  isCurrent?: (pathname: string) => boolean
}

const links: NavItem[] = [
  {
    label: 'work',
    to: '/#featured-projects',
    // the work lives on the home page now, and the case studies hang off /work
    isCurrent: (pathname) => pathname === '/' || pathname.startsWith('/work'),
  },
  { label: 'about', to: '/about' },
  { label: 'resume', to: RESUME_URL, external: true },
]

/*
 * The case studies, by the company they were done for — the list comes from the
 * projects themselves so the menu can never drift from what is on the site.
 */
const work = featuredProjects.map((project) => ({
  label: project.company,
  to: `/work/${project.slug}`,
}))

export default function Nav() {
  const { pathname } = useLocation()
  const [openWork, setOpenWork] = useState(false)
  const closing = useRef(0)

  /*
   * The menu follows the pointer and the keyboard both. Leaving is given a beat
   * so the diagonal from "work" down to the first case study doesn't close it
   * mid-journey, and focus moving between the items inside cancels the close.
   */
  const open = () => {
    window.clearTimeout(closing.current)
    setOpenWork(true)
  }

  const close = (delay = 0) => {
    window.clearTimeout(closing.current)
    closing.current = window.setTimeout(() => setOpenWork(false), delay)
  }

  return (
    <header className={styles.nav}>
      <Link to="/" className={styles.logo} aria-label="Kelley Yu — home">
        <img src={logo} alt="" width={72} height={68} />
      </Link>
      <nav aria-label="Main">
        <ul className={styles.links}>
          {links.map(({ label, to, external, isCurrent }) => {
            const current = !external && (isCurrent ?? ((p) => p === to))(pathname)

            if (label === 'work') {
              return (
                <li
                  key={label}
                  className={styles.hasMenu}
                  onMouseEnter={open}
                  onMouseLeave={() => close(120)}
                  onFocus={open}
                  onBlur={() => close(0)}
                  onKeyDown={(event) => {
                    if (event.key === 'Escape') close(0)
                  }}
                >
                  <Link
                    className={styles.link}
                    to={to}
                    aria-current={current ? 'page' : undefined}
                    aria-expanded={openWork}
                    aria-haspopup="true"
                  >
                    {label}
                  </Link>
                  <ul className={styles.menu} data-open={openWork || undefined}>
                    {work.map((project) => (
                      <li key={project.to}>
                        <Link
                          className={styles.menuLink}
                          to={project.to}
                          tabIndex={openWork ? undefined : -1}
                          onClick={() => close(0)}
                          aria-current={pathname === project.to ? 'page' : undefined}
                        >
                          {project.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              )
            }

            return (
              <li key={label}>
                {external ? (
                  <a className={styles.link} href={to} target="_blank" rel="noreferrer">
                    {label}
                  </a>
                ) : (
                  <Link
                    className={styles.link}
                    to={to}
                    aria-current={current ? 'page' : undefined}
                  >
                    {label}
                  </Link>
                )}
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
