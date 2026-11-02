import { Link } from 'react-router'
import logo from '../assets/Logo.png'
import lotus from '../assets/Flower_Footer.png'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.cta}>
          <p className={styles.tagline}>
            Let’s create <strong>impact</strong> together.
          </p>
          <a className={styles.email} href="mailto:kelleyyu66@gmail.com">
            kelleyyu66@gmail.com
          </a>
        </div>

        <Link to="/" className={styles.brand} aria-label="Kelley Yu — home">
          <img src={logo} alt="" width={40} height={38} />
          <span>kelley yu</span>
        </Link>

        <img className={styles.lotus} src={lotus} alt="" width={176} height={216} />
      </div>
    </footer>
  )
}
