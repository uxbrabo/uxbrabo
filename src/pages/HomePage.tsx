import { motion } from 'framer-motion'
import { Footer } from '@/components/layout/Footer'
import { ProjectsShowcase } from '@/components/sections/home/ProjectsShowcase'
import { HeroTimeline } from '@/components/sections/home/HeroTimeline'
import { AuroraBackground } from '@/components/ui/AuroraBackground'
import { projects } from '@/data/projects'
import { SEO } from '@/components/SEO'
import styles from './HomePage.module.css'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
}

export function HomePage() {
  return (
    <main className={styles.page}>
      <SEO />
      {/* Hero */}
      <AuroraBackground className={styles.hero} aria-label="Apresentação">
        <div className={styles.heroInner}>
          <motion.h1
            className={styles.heroTitle}
            variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            Me chamo Brabo, sou <em>Designer de Produto</em> com foco em UX/UI
          </motion.h1>
          <motion.div
            className={styles.heroTimelineWrap}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.15 }}
          >
            <HeroTimeline />
          </motion.div>
        </div>
      </AuroraBackground>

      {/* Projects */}
      <ProjectsShowcase projects={projects.filter((p) => !p.hidden)} />

      {/* Footer */}
      <div className={styles.footerWrapper}>
        <Footer />
      </div>
    </main>
  )
}
