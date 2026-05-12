import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import { Divider } from '@/components/ui/Divider'
import styles from './AccordionItem.module.css'

type AccordionItemProps = {
  role: string
  company: string
  period: string
  description?: string
}

export function AccordionItem({ role, company, period, description }: AccordionItemProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className={styles.wrapper}>
      <button
        className={styles.trigger}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <div className={styles.triggerMain}>
          <div className={styles.roleRow}>
            <span className={styles.role}>{role}</span>
            <span className={styles.dot} aria-hidden="true" />
            <span className={styles.period}>{period}</span>
          </div>
          <motion.span
            className={styles.icon}
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.25 }}
            aria-hidden="true"
          >
            <Plus size={20} strokeWidth={1.5} />
          </motion.span>
        </div>
        <p className={styles.company}>{company}</p>
      </button>

      <AnimatePresence initial={false}>
        {open && description && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className={styles.body}
          >
            <p className={styles.description}>{description}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <Divider />
    </div>
  )
}
