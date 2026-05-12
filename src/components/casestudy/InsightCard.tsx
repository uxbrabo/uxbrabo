import { motion } from 'framer-motion'
import styles from './InsightCard.module.css'

type InsightCardProps = {
  icon: string
  title: string
  body: string
  index?: number
}

export function InsightCard({ icon, title, body, index = 0 }: InsightCardProps) {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <span className={styles.icon} aria-hidden="true">{icon}</span>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.body}>{body}</p>
    </motion.div>
  )
}
