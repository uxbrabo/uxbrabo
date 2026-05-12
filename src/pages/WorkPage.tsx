import { Link } from 'react-router-dom'
import { Footer } from '@/components/layout/Footer'
import { projects } from '@/data/projects'
import { artDirectionProjects } from '@/data/artDirection'
import styles from './WorkPage.module.css'

export function WorkPage() {
  return (
    <main className={styles.page}>

      {/* UX Design */}
      <section className={styles.category} aria-label="UX Design">
        <div className={styles.categoryHeader}>
          <p className={styles.categoryLabel}>UX Design</p>
        </div>
        <div className={styles.grid}>
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/trabalho/${project.slug}`}
              className={styles.card}
              aria-label={`Ver projeto ${project.title}`}
            >
              <img
                src={project.coverImage}
                alt={project.title}
                className={styles.cardImg}
                style={{ backgroundColor: project.coverPlaceholder }}
              />
              <div className={styles.cardOverlay}>
                <p className={styles.cardTitle}>{project.title}</p>
                <p className={styles.cardMeta}>{project.subtitle} · {project.year}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Direção de Arte */}
      <section className={styles.category} aria-label="Direção de Arte">
        <div className={styles.categoryHeader}>
          <p className={styles.categoryLabel}>Direção de Arte</p>
        </div>
        <div className={styles.artGrid}>
          {artDirectionProjects.map((project) => (
            <Link
              key={project.id}
              to={`/arte/${project.slug}`}
              className={styles.card}
              aria-label={`Ver projeto ${project.title}`}
            >
              <img
                src={project.coverImage}
                alt={project.title}
                className={styles.artCardImg}
                style={{ backgroundColor: project.coverPlaceholder }}
              />
              <div className={styles.cardOverlay}>
                <p className={styles.cardTitle}>{project.title}</p>
                <p className={styles.cardMeta}>{project.category} · {project.year}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <div className={styles.footerWrapper}>
        <Footer />
      </div>

    </main>
  )
}
