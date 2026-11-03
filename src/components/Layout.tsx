import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router'
import Nav from './Nav'
import Footer from './Footer'
import styles from './Layout.module.css'

export default function Layout() {
  const { pathname, hash } = useLocation()

  // a route change starts at the top, unless the link named an anchor
  useEffect(() => {
    const target = hash ? document.getElementById(hash.slice(1)) : null
    if (!target) {
      window.scrollTo(0, 0)
      return
    }
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    target.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' })
  }, [pathname, hash])

  return (
    <div className={styles.page}>
      <Nav />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
