import { Link } from 'react-router-dom'
import type { Project } from '@/data/projects'
import styles from './ProjectScrollCard.module.css'

type ProjectScrollCardProps = {
  project: Project
  index: number
}

export function ProjectScrollCard({ project, index }: ProjectScrollCardProps) {
  return (
    <article
      className={styles.card}
      style={{ zIndex: index + 1 }}
    >
      {/* Background */}
      <div className={styles.imageWrapper}>
        <div
          className={styles.imageBg}
          style={{
            backgroundColor: project.coverPlaceholder,
            ...(project.coverImage && {
              backgroundImage: `url(${project.coverImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center top',
            }),
          }}
        />
        <div className={styles.overlay} />
      </div>

      {/* Content */}
      <div className={styles.content}>

        {/* Left — title + description */}
        <div className={styles.textGroup}>
          <p className={styles.meta}>{project.category} · {project.year}</p>
          <h2 className={styles.title}>{project.title}</h2>
          <p className={styles.description}>{project.description}</p>
        </div>

        {/* Center — mockup */}
        <div className={styles.mockup}>
          {project.coverImage ? (
            <img
              src={project.coverImage}
              alt={project.title}
              className={styles.mockupImg}
            />
          ) : (
            <div
              className={styles.mockupPlaceholder}
              style={{ backgroundColor: project.coverPlaceholder }}
            />
          )}
        </div>

        {/* Right — CTA */}
        <Link
          to={`/trabalho/${project.slug}`}
          className={styles.ctaWrapper}
          aria-label={`Ver projeto ${project.title}`}
        >
          <span className={styles.cta}>Saiba mais</span>
        </Link>

      </div>
    </article>
  )
}
