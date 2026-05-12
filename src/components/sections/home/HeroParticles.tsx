import styles from './HeroParticles.module.css'

const particles = [
  { x: 8,  y: 72, size: 3, opacity: 0.12, duration: 18, delay: 0 },
  { x: 15, y: 40, size: 2, opacity: 0.08, duration: 22, delay: 3 },
  { x: 23, y: 85, size: 4, opacity: 0.10, duration: 16, delay: 7 },
  { x: 31, y: 55, size: 2, opacity: 0.14, duration: 20, delay: 1 },
  { x: 38, y: 30, size: 3, opacity: 0.08, duration: 25, delay: 5 },
  { x: 44, y: 68, size: 2, opacity: 0.10, duration: 19, delay: 9 },
  { x: 52, y: 20, size: 4, opacity: 0.07, duration: 23, delay: 2 },
  { x: 58, y: 80, size: 2, opacity: 0.12, duration: 17, delay: 6 },
  { x: 64, y: 45, size: 3, opacity: 0.09, duration: 21, delay: 4 },
  { x: 71, y: 62, size: 2, opacity: 0.13, duration: 26, delay: 8 },
  { x: 77, y: 35, size: 4, opacity: 0.07, duration: 18, delay: 11 },
  { x: 83, y: 75, size: 2, opacity: 0.10, duration: 20, delay: 3 },
  { x: 89, y: 50, size: 3, opacity: 0.09, duration: 24, delay: 7 },
  { x: 94, y: 25, size: 2, opacity: 0.12, duration: 16, delay: 1 },
  { x: 5,  y: 90, size: 3, opacity: 0.08, duration: 22, delay: 5 },
  { x: 19, y: 15, size: 2, opacity: 0.11, duration: 28, delay: 10 },
  { x: 27, y: 60, size: 4, opacity: 0.07, duration: 19, delay: 6 },
  { x: 46, y: 92, size: 2, opacity: 0.10, duration: 23, delay: 2 },
  { x: 55, y: 48, size: 3, opacity: 0.13, duration: 17, delay: 8 },
  { x: 67, y: 18, size: 2, opacity: 0.08, duration: 21, delay: 4 },
  { x: 75, y: 82, size: 3, opacity: 0.11, duration: 25, delay: 9 },
  { x: 86, y: 38, size: 2, opacity: 0.09, duration: 20, delay: 12 },
  { x: 92, y: 70, size: 4, opacity: 0.07, duration: 18, delay: 3 },
  { x: 12, y: 55, size: 2, opacity: 0.12, duration: 22, delay: 7 },
  { x: 35, y: 78, size: 3, opacity: 0.09, duration: 26, delay: 5 },
  { x: 61, y: 33, size: 2, opacity: 0.11, duration: 19, delay: 11 },
  { x: 79, y: 58, size: 4, opacity: 0.07, duration: 24, delay: 2 },
  { x: 97, y: 88, size: 2, opacity: 0.10, duration: 16, delay: 8 },
]

export function HeroParticles() {
  return (
    <div className={styles.container} aria-hidden="true">
      {particles.map((p, i) => (
        <span
          key={i}
          className={styles.dot}
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
