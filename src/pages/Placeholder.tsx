import styles from './Placeholder.module.css'

type Props = {
  title: string
}

// Empty page for nav destinations that haven't been designed yet.
export default function Placeholder({ title }: Props) {
  return (
    <section className={styles.placeholder}>
      <h1 className="visually-hidden">{title}</h1>
    </section>
  )
}
