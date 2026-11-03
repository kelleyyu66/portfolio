import { Link, useLocation } from 'react-router'
import logo from '../assets/Logo.png'
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

export default function Nav() {
  const { pathname } = useLocation()

  return (
    <header className={styles.nav}>
      <Link to="/" className={styles.logo} aria-label="Kelley Yu — home">
        <img src={logo} alt="" width={72} height={68} />
      </Link>
      <nav aria-label="Main">
        <ul className={styles.links}>
          {links.map(({ label, to, external, isCurrent }) => (
            <li key={label}>
              {external ? (
                <a className={styles.link} href={to} target="_blank" rel="noreferrer">
                  {label}
                </a>
              ) : (
                <Link
                  className={styles.link}
                  to={to}
                  aria-current={(isCurrent ?? ((p) => p === to))(pathname) ? 'page' : undefined}
                >
                  {label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
