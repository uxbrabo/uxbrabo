import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Footer } from '@/components/layout/Footer'
import { SEO } from '@/components/SEO'
import styles from './NotFoundPage.module.css'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

export function NotFoundPage() {
  return (
    <main className={styles.page}>
      <SEO title="Página não encontrada" description="Essa página não existe ou foi movida." />
      <section className={styles.hero} aria-label="Página não encontrada">
        <motion.div
          className={styles.inner}
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.p className={styles.code} variants={fadeUp} aria-hidden="true">
            404
          </motion.p>
          <motion.h1 className={styles.title} variants={fadeUp}>
            Essa página não existe
          </motion.h1>
          <motion.p className={styles.subtitle} variants={fadeUp}>
            O link pode estar quebrado ou a página foi movida.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link to="/" className={styles.homeLink}>
              Voltar para a home
            </Link>
          </motion.div>
        </motion.div>
      </section>
      <div className={styles.footerWrapper}>
        <Footer />
      </div>
    </main>
  )
}
