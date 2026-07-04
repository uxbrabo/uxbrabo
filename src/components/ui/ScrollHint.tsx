import { motion } from 'framer-motion'
import styles from './ScrollHint.module.css'

type ScrollHintProps = {
  label?: string
  className?: string
}

export function ScrollHint({ label, className = '' }: ScrollHintProps) {
  return (
    <motion.div
      className={[styles.hint, className].filter(Boolean).join(' ')}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {label && <span className={styles.label}>{label}</span>}
      <div className={styles.mouse} aria-hidden="true">
        <div className={styles.wheel} />
      </div>
    </motion.div>
  )
}
