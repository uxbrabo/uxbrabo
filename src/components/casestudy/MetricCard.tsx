import { motion } from 'framer-motion'
import styles from './MetricCard.module.css'

type MetricCardProps = {
  value: string
  label: string
  description?: string
  highlight?: boolean
  index?: number
}

export function MetricCard({ value, label, description, highlight = false, index = 0 }: MetricCardProps) {
  return (
    <motion.div
      className={[styles.card, highlight && styles.highlight].filter(Boolean).join(' ')}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <span className={styles.value}>{value}</span>
      <span className={styles.label}>{label}</span>
      {description && <p className={styles.description}>{description}</p>}
    </motion.div>
  )
}
