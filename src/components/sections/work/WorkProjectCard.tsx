import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { Project } from '@/data/projects'
import styles from './WorkProjectCard.module.css'

type WorkProjectCardProps = {
  project: Project
  index: number
}

export function WorkProjectCard({ project, index }: WorkProjectCardProps) {
  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-5%' }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link to={`/trabalho/${project.slug}`} className={styles.link} aria-label={`Ver projeto ${project.title}`}>
        <div className={styles.imageWrapper}>
          <motion.div
            className={styles.imageBg}
            style={{
              backgroundColor: project.coverPlaceholder,
              ...(project.coverImage && {
                backgroundImage: `url(${project.coverImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center top',
              }),
            }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>

        <div className={styles.info}>
          <div className={styles.meta}>
            <span className={styles.category}>{project.category}</span>
            <span className={styles.year}>{project.year}</span>
          </div>
          <div className={styles.titles}>
            <h2 className={styles.title}>{project.title}</h2>
            <p className={styles.subtitle}>{project.subtitle}</p>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
