import { motion } from 'framer-motion'
import styles from './BarChart.module.css'

type BarData = {
  label: string
  value: number
  maxValue?: number
}

type BarChartProps = {
  data: BarData[]
  title?: string
  unit?: string
  color?: 'black' | 'gray'
}

export function BarChart({ data, title, unit = '%', color = 'black' }: BarChartProps) {
  const max = Math.max(...data.map((d) => d.value))

  return (
    <div className={styles.wrapper}>
      {title && <p className={styles.title}>{title}</p>}
      <div className={styles.chart}>
        {data.map((bar, i) => (
          <div key={bar.label} className={styles.barRow}>
            <span className={styles.barLabel}>{bar.label}</span>
            <div className={styles.barTrack}>
              <motion.div
                className={[styles.barFill, styles[color]].join(' ')}
                style={{ width: `${(bar.value / max) * 100}%` }}
                initial={{ width: 0 }}
                whileInView={{ width: `${(bar.value / max) * 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
            <span className={styles.barValue}>
              {bar.value}{unit}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
