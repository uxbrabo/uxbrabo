import { motion } from 'framer-motion'
import { Divider } from '@/components/ui/Divider'
import styles from './ContactItem.module.css'

type ContactItemProps = {
  label: string
  value: string
  href: string
  external?: boolean
}

export function ContactItem({ label, value, href, external = false }: ContactItemProps) {
  return (
    <div className={styles.wrapper}>
      <Divider />
      <div className={styles.inner}>
        <p className={styles.label}>{label}</p>
        <motion.a
          className={styles.valueLink}
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          whileHover={{ x: 6, opacity: 0.7 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className={styles.bullet} aria-hidden="true">•</span>
          <span className={styles.value}>{value}</span>
        </motion.a>
      </div>
    </div>
  )
}
