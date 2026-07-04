import { useRef, useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { Project } from '@/data/projects'
import { ScrollHint } from '@/components/ui/ScrollHint'
import styles from './ProjectsShowcase.module.css'

const easeSoft = [0.4, 0, 0.2, 1] as const
const imageTransition = { duration: 0.9, ease: easeSoft }

const textVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.22, ease: easeSoft } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.55, ease: easeSoft } },
}

type Props = {
  projects: Project[]
}

export function ProjectsShowcase({ projects }: Props) {
  const trackRef = useRef<HTMLElement>(null)
  const [index, setIndex] = useState(0)

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start start', 'end end'],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    mass: 0.6,
  })

  useMotionValueEvent(smoothProgress, 'change', (v) => {
    const next = Math.min(projects.length - 1, Math.max(0, Math.floor(v * projects.length)))
    setIndex((current) => (current === next ? current : next))
  })

  const project = projects[index]
  const current = String(index + 1).padStart(2, '0')
  const total = String(projects.length).padStart(2, '0')

  const goToProject = (i: number) => {
    const el = trackRef.current
    if (!el) return
    const segment = el.offsetHeight / projects.length
    window.scrollTo({ top: el.offsetTop + segment * i + segment / 2, behavior: 'smooth' })
  }

  return (
    <section
      ref={trackRef}
      className={styles.track}
      style={{ height: `${projects.length * 100}vh` }}
      aria-label="Projetos"
    >
      <div className={styles.sticky}>
        <div className={styles.textCol}>
          <p className={styles.meta}>
            <span className={styles.index}>{current} / {total}</span>
            {project.category} · {project.year}
          </p>

          <div className={styles.textStage}>
            <AnimatePresence mode="sync">
              <motion.div
                key={project.id}
                className={styles.textAnim}
                variants={textVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <h2 className={styles.title}>{project.title}</h2>
                <p className={styles.description}>{project.description}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <Link to={`/trabalho/${project.slug}`} className={styles.cta}>
            Saiba mais
          </Link>
        </div>

        <div className={styles.imageCol}>
          {projects.map((p, i) => {
            const isActive = i === index
            const pointerEvents: 'auto' | 'none' = isActive ? 'auto' : 'none'
            const commonMotion = {
              animate: { opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0.97 },
              transition: imageTransition,
              style: { pointerEvents },
            }

            const mockupSrc = p.mockupImage ?? p.coverImage

            if (p.coverMockup === 'phone' && mockupSrc) {
              return (
                <motion.div key={p.id} className={styles.mockupWrap} {...commonMotion}>
                  <div className={styles.mockupFrame}>
                    <div className={styles.mockupPill} />
                    <img
                      src={mockupSrc}
                      alt={p.title}
                      className={styles.mockupImg}
                      decoding="async"
                    />
                  </div>
                </motion.div>
              )
            }

            if (p.coverMockup === 'browser' && mockupSrc) {
              return (
                <motion.div key={p.id} className={styles.mockupWrap} {...commonMotion}>
                  <div className={styles.browserFrame}>
                    <div className={styles.browserBar}>
                      <span className={styles.browserDot} />
                      <span className={styles.browserDot} />
                      <span className={styles.browserDot} />
                    </div>
                    <div className={styles.browserScreen}>
                      <img
                        src={mockupSrc}
                        alt={p.title}
                        className={styles.browserImg}
                        decoding="async"
                      />
                    </div>
                  </div>
                </motion.div>
              )
            }

            if (p.coverImage) {
              return (
                <motion.img
                  key={p.id}
                  src={p.coverImage}
                  alt={p.title}
                  className={styles.image}
                  decoding="async"
                  {...commonMotion}
                />
              )
            }

            return (
              <motion.div
                key={p.id}
                className={styles.imagePlaceholder}
                style={{ backgroundColor: p.coverPlaceholder, ...commonMotion.style }}
                animate={commonMotion.animate}
                transition={commonMotion.transition}
              />
            )
          })}
        </div>

        <div className={styles.dots} role="tablist" aria-label="Navegar entre projetos">
          {projects.map((p, i) => (
            <button
              key={p.id}
              type="button"
              className={styles.dot}
              data-active={i === index}
              aria-label={`Ver projeto ${p.title}`}
              aria-current={i === index}
              onClick={() => goToProject(i)}
            />
          ))}
        </div>

        <AnimatePresence>
          {index === 0 && (
            <ScrollHint
              key="scroll-hint"
              label="Role para ver mais projetos"
              className={styles.scrollHint}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
