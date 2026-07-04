import { motion } from 'framer-motion'
import { Footer } from '@/components/layout/Footer'
import { ContactItem } from '@/components/sections/contact/ContactItem'
import { Divider } from '@/components/ui/Divider'
import styles from './ContactPage.module.css'

const contactItems = [
  {
    label: 'Email',
    value: 'luckas.brabo@gmail.com',
    href: 'mailto:luckas.brabo@gmail.com',
    external: false,
  },
  {
    label: 'Linkedin',
    value: '@uxbrabo',
    href: 'https://www.linkedin.com/in/uxbrabo/',
    external: true,
  },
  {
    label: 'CV',
    value: 'download CV',
    href: 'https://read.cv/uxbrabo',
    external: true,
  },
]

export function ContactPage() {
  return (
    <main className={styles.page}>
      {/* Hero */}
      <section className={styles.hero} aria-label="Contato">
        <motion.h1
          className={styles.heroTitle}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          Olá!&nbsp;&nbsp;;) Diz ai&nbsp;…
        </motion.h1>
      </section>

      {/* Contact list */}
      <section className={styles.contactList} aria-label="Links de contato">
        {contactItems.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <ContactItem
              label={item.label}
              value={item.value}
              href={item.href}
              external={item.external}
            />
          </motion.div>
        ))}
        <Divider />
      </section>

      <div className={styles.footerWrapper}>
        <Footer />
      </div>
    </main>
  )
}
