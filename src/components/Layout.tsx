import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router'
import Nav from './Nav'
import Footer from './Footer'
import styles from './Layout.module.css'

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

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
