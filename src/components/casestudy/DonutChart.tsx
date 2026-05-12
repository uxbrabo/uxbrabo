import { motion } from 'framer-motion'
import styles from './DonutChart.module.css'

type DonutChartProps = {
  value: number
  label: string
  sublabel?: string
  size?: number
}

export function DonutChart({ value, label, sublabel, size = 160 }: DonutChartProps) {
  const r = 54
  const circ = 2 * Math.PI * r
  const offset = circ - (value / 100) * circ
  const strokeW = 8

  return (
    <div className={styles.wrapper}>
      <div className={styles.svgWrapper} style={{ width: size, height: size }}>
        <svg viewBox="0 0 120 120" width={size} height={size}>
          {/* Track */}
          <circle
            cx="60"
            cy="60"
            r={r}
            fill="none"
            stroke="rgba(0,0,0,0.07)"
            strokeWidth={strokeW}
          />
          {/* Fill */}
          <motion.circle
            cx="60"
            cy="60"
            r={r}
            fill="none"
            stroke="#000"
            strokeWidth={strokeW}
            strokeLinecap="round"
            strokeDasharray={circ}
            strokeDashoffset={circ}
            style={{ rotate: -90, transformOrigin: 'center' }}
            animate={{ strokeDashoffset: offset }}
            initial={{ strokeDashoffset: circ }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          />
        </svg>
        <div className={styles.center}>
          <span className={styles.value}>{value}%</span>
        </div>
      </div>
      <p className={styles.label}>{label}</p>
      {sublabel && <p className={styles.sublabel}>{sublabel}</p>}
    </div>
  )
}
