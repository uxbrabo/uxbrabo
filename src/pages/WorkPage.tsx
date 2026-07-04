import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Footer } from '@/components/layout/Footer'
import { projects } from '@/data/projects'
import { artDirectionProjects } from '@/data/artDirection'
import { SEO } from '@/components/SEO'
import styles from './WorkPage.module.css'

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

export function WorkPage() {
  return (
    <main className={styles.page}>
      <SEO title="Trabalhos" description="Projetos de UX Design, direção de arte e desenvolvimento front-end por Lucas Brabo." />

      {/* UX Design */}
      <section className={styles.category} aria-label="UX Design">
        <div className={styles.categoryHeader}>
          <p className={styles.categoryLabel}>UX Design</p>
        </div>
        <motion.div
          className={styles.grid}
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-10%' }}
        >
          {projects.filter((p) => !p.hidden).map((project, i) => (
            <motion.div key={project.id} variants={fadeUp}>
              <Link
                to={`/trabalho/${project.slug}`}
                className={styles.card}
                aria-label={`Ver projeto ${project.title}`}
              >
                {project.coverImage ? (
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    width={800}
                    height={600}
                    className={styles.cardImg}
                    style={{ backgroundColor: project.coverPlaceholder }}
                    loading={i === 0 ? undefined : 'lazy'}
                    fetchPriority={i === 0 ? 'high' : undefined}
                  />
                ) : (
                  <div
                    className={styles.cardImg}
                    style={{ backgroundColor: project.coverPlaceholder }}
                  />
                )}
                <div className={styles.cardOverlay}>
                  <p className={styles.cardTitle}>{project.title}</p>
                  <p className={styles.cardMeta}>{project.subtitle} · {project.year}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Direção de Arte */}
      <section className={styles.category} aria-label="Direção de Arte">
        <div className={styles.categoryHeader}>
          <p className={styles.categoryLabel}>Direção de Arte</p>
        </div>
        <motion.div
          className={styles.artGrid}
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-10%' }}
        >
          {artDirectionProjects.map((project) => (
            <motion.div key={project.id} variants={fadeUp}>
              <Link
                to={`/arte/${project.slug}`}
                className={styles.card}
                aria-label={`Ver projeto ${project.title}`}
              >
                {project.coverImage ? (
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    width={800}
                    height={600}
                    className={styles.artCardImg}
                    style={{ backgroundColor: project.coverPlaceholder }}
                    loading="lazy"
                  />
                ) : (
                  <div
                    className={styles.artCardImg}
                    style={{ backgroundColor: project.coverPlaceholder }}
                  />
                )}
                <div className={styles.cardOverlay}>
                  <p className={styles.cardTitle}>{project.title}</p>
                  <p className={styles.cardMeta}>{project.category} · {project.year}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <div className={styles.footerWrapper}>
        <Footer />
      </div>

    </main>
  )
}
