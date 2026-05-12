import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Project } from '@/data/projects'
import styles from './ProjectSlider.module.css'

const INTERVAL = 5000

const slideVariants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 80 : -80 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -80 : 80 }),
}

type Props = { projects: Project[] }

export function ProjectSlider({ projects }: Props) {
  const [current, setCurrent] = useState(0)
  const [dir, setDir] = useState(1)
  const total = projects.length

  useEffect(() => {
    const id = setTimeout(() => {
      setDir(1)
      setCurrent(c => (c + 1) % total)
    }, INTERVAL)
    return () => clearTimeout(id)
  }, [current, total])

  const goNext = () => {
    setDir(1)
    setCurrent(c => (c + 1) % total)
  }

  const goPrev = () => {
    setDir(-1)
    setCurrent(c => (c - 1 + total) % total)
  }

  const project = projects[current]

  return (
    <section className={styles.root}>
      {/* Prev/Next nav — top right */}
      <div className={styles.nav}>
        <span className={styles.navCount}>
          <span>{String(current + 1).padStart(2, '0')}</span>
          <span className={styles.navSep}>/</span>
          <span>{String(total).padStart(2, '0')}</span>
        </span>
        <button className={styles.navBtn} onClick={goPrev} aria-label="Projeto anterior">
          <ArrowLeft size={18} strokeWidth={1.5} />
        </button>
        <button className={styles.navBtn} onClick={goNext} aria-label="Próximo projeto">
          <ArrowRight size={18} strokeWidth={1.5} />
        </button>
      </div>

      {/* Slide track */}
      <div className={styles.track}>
        <AnimatePresence initial={false} custom={dir}>
          <motion.article
            key={project.id}
            className={styles.slide}
            custom={dir}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Background */}
            <div
              className={styles.bg}
              style={{
                backgroundColor: project.coverPlaceholder,
                ...(project.coverImage && {
                  backgroundImage: `url(${project.coverImage})`,
                }),
              }}
            />
            <div className={styles.overlay} />

            {/* Content */}
            <div className={styles.content}>
              <div className={styles.meta}>
                <span className={styles.category}>{project.category}</span>
                <h2 className={styles.title}>{project.title}</h2>
                <p className={styles.desc}>{project.description}</p>
              </div>
              <Link
                to={`/trabalho/${project.slug}`}
                className={styles.ctaLink}
                aria-label={`Ver projeto ${project.title}`}
              >
                <motion.span
                  className={styles.cta}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <span>Saiba mais</span>
                  <ArrowRight size={16} strokeWidth={1.5} />
                </motion.span>
              </Link>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>

      {/* Auto-progress bar */}
      <motion.div
        key={`progress-${current}`}
        className={styles.progressBar}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: INTERVAL / 1000, ease: 'linear' }}
      />
    </section>
  )
}
