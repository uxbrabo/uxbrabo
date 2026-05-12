import { motion } from 'framer-motion'
import { Divider } from '@/components/ui/Divider'
import styles from './CaseSection.module.css'

type CaseSectionProps = {
  index: string
  label: string
  title?: string
  children: React.ReactNode
  tinted?: boolean
}

export function CaseSection({ index, label, title, children, tinted = false }: CaseSectionProps) {
  return (
    <section className={[styles.section, tinted && styles.tinted].filter(Boolean).join(' ')}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <Divider />
          <div className={styles.headerRow}>
            <motion.span
              className={styles.index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {index}
            </motion.span>
            <motion.div
              className={styles.headerText}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className={styles.label}>{label}</p>
              {title && <h2 className={styles.title}>{title}</h2>}
            </motion.div>
          </div>
        </div>
        <div className={styles.body}>{children}</div>
      </div>
    </section>
  )
}
