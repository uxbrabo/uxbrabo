import { motion } from 'framer-motion'
import styles from './QuoteBlock.module.css'

type QuoteBlockProps = {
  quote: string
  author: string
  role?: string
}

export function QuoteBlock({ quote, author, role }: QuoteBlockProps) {
  return (
    <motion.blockquote
      className={styles.wrapper}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={styles.mark} aria-hidden="true">"</div>
      <p className={styles.quote}>{quote}</p>
      <footer className={styles.author}>
        <span className={styles.name}>{author}</span>
        {role && <span className={styles.role}>{role}</span>}
      </footer>
    </motion.blockquote>
  )
}
