import styles from './Waterline.module.css'

type Props = {
  className?: string
  /** flip the crest so the band closes at its bottom edge */
  flip?: boolean
}

// The one wave the site uses wherever a band of water meets the sand.
export default function Waterline({ className = '', flip = false }: Props) {
  return (
    <svg
      className={`${styles.wave} ${flip ? styles.flip : ''} ${className}`}
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d="M0 48 C 240 8, 480 72, 720 40 S 1200 8, 1440 36 V80 H0 Z" />
    </svg>
  )
}
