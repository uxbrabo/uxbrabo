import { motion } from 'framer-motion'
import { slugifySection } from './CaseSideNav'
import styles from './CaseSection.module.css'

type CaseSectionProps = {
  index?: string
  label: string
  title?: string
  children: React.ReactNode
  tinted?: boolean
}

export function CaseSection({ label, title, children }: CaseSectionProps) {
  return (
    <section id={slugifySection(label)} className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className={styles.label}>{label}</p>
          {title && <h2 className={styles.title}>{title}</h2>}
        </motion.div>
        <div className={styles.body}>{children}</div>
      </div>
    </section>
  )
}
