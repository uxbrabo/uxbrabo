import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Footer } from '@/components/layout/Footer'
import { ProjectsShowcase } from '@/components/sections/home/ProjectsShowcase'
import { ScrollHint } from '@/components/ui/ScrollHint'
import { projects } from '@/data/projects'
import { SEO } from '@/components/SEO'
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

const titleStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const maskLine = {
  hidden: { y: '110%' },
  show: { y: '0%', transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
}

const titleWords = ['Designer', 'de', 'Produto']

export function HomePage() {
  return (
    <main className={styles.page}>
      <SEO />
      {/* Hero */}
      <section className={styles.hero} aria-label="Apresentação">
        <motion.div
          className={styles.heroInner}
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.h1 className={styles.heroTitle} variants={titleStagger} aria-label="Designer de Produto">
            {titleWords.map((word, i) => (
              <span className={styles.maskWrap} key={i} aria-hidden="true">
                <motion.span className={styles.maskInner} variants={maskLine}>
                  {word}
                </motion.span>
              </span>
            ))}
          </motion.h1>
          <motion.p className={styles.heroSubtitle} variants={fadeUp}>
            <strong>Mais de 5 anos transitando entre UX/UI, direção de arte, desenvolvimento front-end e IA integrada ao processo</strong>
            {', criando produtos que fazem sentido para quem usa e geram resultado para quem investe.'}
          </motion.p>

          {/* Status + CTA */}
          <motion.div className={styles.heroStatusRow} variants={fadeUp}>
            <div className={styles.heroStatus}>
              <span className={styles.heroStatusDot} aria-hidden="true" />
              Aberto a projetos remotos · PJ
            </div>
            <Link to="/contato" className={styles.heroCtaBtn}>
              Fale comigo
            </Link>
          </motion.div>

        </motion.div>

        {/* Scroll hint — bottom of hero */}
        <ScrollHint className={styles.heroScrollHint} />
      </section>

      {/* Projects */}
      <ProjectsShowcase projects={projects.filter((p) => !p.hidden)} />

      {/* Footer */}
      <div className={styles.footerWrapper}>
        <Footer />
      </div>
    </main>
  )
}
