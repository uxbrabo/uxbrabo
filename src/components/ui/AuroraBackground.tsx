import type { HTMLAttributes, ReactNode } from 'react'
import styles from './AuroraBackground.module.css'

type AuroraBackgroundProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
  showRadialGradient?: boolean
}

export function AuroraBackground({
  children,
  className,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) {
  return (
    <div className={[styles.aurora, className].filter(Boolean).join(' ')} {...props}>
      <div className={styles.layerWrap} aria-hidden="true">
        <div className={showRadialGradient ? `${styles.layer} ${styles.radialMask}` : styles.layer} />
      </div>
      {children}
    </div>
  )
}
