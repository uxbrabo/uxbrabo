import { useState } from 'react'
import { heroTimeline } from '@/data/heroTimeline'
import styles from './HeroTimeline.module.css'

export function HeroTimeline() {
  const [active, setActive] = useState(0)

  return (
    <div className={styles.timeline} onMouseLeave={() => setActive(0)}>
      <ul className={styles.column}>
        {heroTimeline.map((item, i) => (
          <li
            key={item.year}
            className={i === active ? `${styles.cell} ${styles.active}` : styles.cell}
            onMouseEnter={() => setActive(i)}
          >
            {item.year}
          </li>
        ))}
      </ul>
      <ul className={styles.column}>
        {heroTimeline.map((item, i) => (
          <li
            key={item.company}
            className={
              i === active ? `${styles.cell} ${styles.company} ${styles.active}` : `${styles.cell} ${styles.company}`
            }
            onMouseEnter={() => setActive(i)}
          >
            {item.company}
          </li>
        ))}
      </ul>
      <ul className={styles.column}>
        {heroTimeline.map((item, i) => (
          <li
            key={item.role}
            className={i === active ? `${styles.cell} ${styles.active}` : styles.cell}
            onMouseEnter={() => setActive(i)}
          >
            {item.role}
          </li>
        ))}
      </ul>
    </div>
  )
}
