import { motion } from 'framer-motion'
import styles from './ProcessStep.module.css'

type ProcessStepProps = {
  number: string
  phase: string
  title: string
  description: string
  methods: string[]
  index?: number
}

export function ProcessStep({ number, phase, title, description, methods, index = 0 }: ProcessStepProps) {
  return (
    <motion.div
      className={styles.step}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={styles.header}>
        <span className={styles.number}>{number}</span>
        <span className={styles.phase}>{phase}</span>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.methods}>
        {methods.map((m) => (
          <li key={m} className={styles.method}>{m}</li>
        ))}
      </ul>
    </motion.div>
  )
}
