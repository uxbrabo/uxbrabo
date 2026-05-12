import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Footer } from '@/components/layout/Footer'
import { ProjectScrollCard } from '@/components/sections/home/ProjectScrollCard'
import { projects } from '@/data/projects'
import styles from './HomePage.module.css'

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
}


export function HomePage() {
  return (
    <main className={styles.page}>
      {/* Hero */}
      <section className={styles.hero} aria-label="Apresentação">
        <motion.div
          className={styles.heroInner}
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.h1 className={styles.heroTitle} variants={fadeUp}>
            Designer de Produto
          </motion.h1>
          <motion.p className={styles.heroSubtitle} variants={fadeUp}>
            <strong>Mais de 5 anos transitando entre UX/UI, direção de arte e desenvolvimento front-end</strong>
            {' '}— criando produtos que fazem sentido para quem usa e geram resultado para quem investe.
          </motion.p>

          {/* Status + CTA */}
          <motion.div className={styles.heroStatusRow} variants={fadeUp}>
            <div className={styles.heroStatus}>
              <span className={styles.heroStatusDot} aria-hidden="true" />
              Disponível para novos projetos
            </div>
            <Link to="/contato" className={styles.heroCtaBtn}>
              Fale comigo
            </Link>
          </motion.div>

        </motion.div>

        {/* Scroll hint — bottom of hero */}
        <motion.div
          className={styles.heroScrollHint}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          aria-hidden="true"
        >
          <div className={styles.heroScrollMouse}>
            <div className={styles.heroScrollWheel} />
          </div>
        </motion.div>
      </section>

      {/* Projects */}
      <section className={styles.projects} aria-label="Projetos em destaque">
        {projects.map((project, i) => (
          <ProjectScrollCard key={project.id} project={project} index={i} />
        ))}
      </section>

      {/* Footer */}
      <div className={styles.footerWrapper}>
        <Footer />
      </div>
    </main>
  )
}
