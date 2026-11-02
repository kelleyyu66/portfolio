import { Link, NavLink } from 'react-router'
import logo from '../assets/Logo.png'
import styles from './Nav.module.css'

const links = [
  { to: '/work', label: 'work' },
  { to: '/playground', label: 'playground' },
  { to: '/about', label: 'about' },
  { to: '/resume', label: 'resume' },
]

export default function Nav() {
  return (
    <header className={styles.nav}>
      <Link to="/" className={styles.logo} aria-label="Kelley Yu — home">
        <img src={logo} alt="" width={72} height={68} />
      </Link>
      <nav aria-label="Main">
        <ul className={styles.links}>
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink to={to} className={styles.link}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
