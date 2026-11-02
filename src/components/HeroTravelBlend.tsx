import photo from '../assets/rtj/hero-photo.webp'
import glow from '../assets/rtj/hero-glow.svg'
import sparkle from '../assets/rtj/hero-sparkle.webp'
import ring from '../assets/rtj/hero-ring.svg'
import route from '../assets/rtj/hero-route.svg'
import glowJosie from '../assets/rtj/hero-glow-josie.svg'
import glowKelley from '../assets/rtj/hero-glow-kelley.svg'
import glowWinnie from '../assets/rtj/hero-glow-winnie.svg'
import glowRakshit from '../assets/rtj/hero-glow-rakshit.svg'
import avatarJosie from '../assets/rtj/hero-avatar-josie.webp'
import avatarKelley from '../assets/rtj/hero-avatar-kelley.webp'
import avatarWinnie from '../assets/rtj/hero-avatar-winnie.webp'
import avatarRakshit from '../assets/rtj/hero-avatar-rakshit.webp'
import styles from './HeroTravelBlend.module.css'

/*
 * Figma 662:4264 — the case study hero, drawn on a 1030×635 stage.
 * Everything inside .stage is positioned in Figma pixels: --u is one of them,
 * derived from the container width so the whole composition scales as a unit.
 *
 * The loop runs 7.74s, matching the Figma timeline (cohort root 380:43):
 *   0.0–4.2s  Gemini builds the Travel Blend while the avatars orbit and the
 *             preference lines cycle
 *   4.2–4.9s  the avatars hand off to the route, the stops pop in
 *   6.6–7.2s  everything fades out before the loop restarts
 */
export default function HeroTravelBlend() {
  return (
    <div className={styles.hero}>
      <img
        className={styles.photo}
        src={photo}
        alt="A car on a winding road along a mountain ridge above the clouds"
        width={1030}
        height={635}
      />

      <div className={styles.stage} aria-hidden="true">
        <div className={styles.prompt}>
          <img className={styles.glow} src={glow} alt="" />
          <p className={styles.titleA}>Creating your Travel Blend...</p>
          <img className={styles.sparkle} src={sparkle} alt="" />
          <p className={styles.titleB}>A little something for everyone...</p>
          <div className={styles.lines}>
            <p className={styles.line1}>Everyone loves wildlife</p>
            <p className={styles.line2}>You prefer short and scenic hikes</p>
            <p className={styles.line3}>Kayaking is on the bucket list</p>
          </div>
        </div>

        <div className={styles.cluster}>
          <img className={styles.ring} src={ring} alt="" />
          <Avatar name="josie" glow={glowJosie} photo={avatarJosie} />
          <Avatar name="kelley" glow={glowKelley} photo={avatarKelley} />
          <Avatar name="winnie" glow={glowWinnie} photo={avatarWinnie} />
          <Avatar name="rakshit" glow={glowRakshit} photo={avatarRakshit} />
        </div>

        <div className={styles.chips}>
          <span className={`${styles.chip} ${styles.chipPark}`}>🏞️</span>
          <span className={`${styles.chip} ${styles.chipBird}`}>🦜</span>
          <span className={`${styles.chip} ${styles.chipBurger}`}>🍔</span>
          <span className={`${styles.chip} ${styles.chipRoo}`}>🦘</span>
          <span className={`${styles.chip} ${styles.chipKayak}`}>🚣🏽‍♂️</span>
          <span className={`${styles.chip} ${styles.chipLeaf}`}>🍁</span>
          <span className={`${styles.chip} ${styles.chipDonut}`}>🍩</span>
          <span className={`${styles.chip} ${styles.chipTaco}`}>🌮</span>
        </div>

        <img className={styles.route} src={route} alt="" />
      </div>
    </div>
  )
}

function Avatar({ name, glow, photo }: { name: string; glow: string; photo: string }) {
  return (
    <div className={`${styles.avatar} ${styles[name]}`}>
      <img className={styles.avatarGlow} src={glow} alt="" />
      <span className={styles.avatarClip}>
        <img src={photo} alt="" />
      </span>
    </div>
  )
}
