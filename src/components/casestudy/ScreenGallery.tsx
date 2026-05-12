import { motion } from 'framer-motion'
import styles from './ScreenGallery.module.css'

type Screen = {
  id: string
  src?: string
  label: string
  aspectRatio?: string
}

type ScreenGalleryProps = {
  screens: Screen[]
  columns?: 2 | 3 | 4
  caption?: string
}

export function ScreenGallery({ screens, columns = 3, caption }: ScreenGalleryProps) {
  return (
    <figure className={styles.wrapper}>
      <div
        className={styles.grid}
        style={{ '--cols': columns } as React.CSSProperties}
      >
        {screens.map((screen, i) => (
          <motion.div
            key={screen.id}
            className={styles.screen}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
          >
            {screen.src ? (
              <img
                src={screen.src}
                alt={screen.label}
                className={styles.image}
                loading="lazy"
              />
            ) : (
              <div
                className={styles.placeholder}
                style={{ aspectRatio: screen.aspectRatio ?? '9/19.5' }}
                aria-label={`Tela: ${screen.label}`}
              >
                <span className={styles.placeholderLabel}>{screen.label}</span>
              </div>
            )}
          </motion.div>
        ))}
      </div>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  )
}
