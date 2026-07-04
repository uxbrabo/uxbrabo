import { Link } from 'react-router-dom'
import styles from './Logo.module.css'

type LogoProps = {
  onClick?: () => void
}

export function Logo({ onClick }: LogoProps) {
  return (
    <Link to="/" className={styles.logo} onClick={onClick} aria-label="uxbrabo, página inicial">
      <span className={styles.wordmark}>uxbrabo</span>
      <span className={styles.trademark} aria-hidden="true">©</span>
    </Link>
  )
}
