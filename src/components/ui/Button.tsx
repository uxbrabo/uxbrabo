import { motion } from 'framer-motion'
import styles from './Button.module.css'

type ButtonVariant = 'filled' | 'ghost' | 'text'

type ButtonProps = {
  children: React.ReactNode
  variant?: ButtonVariant
  onClick?: () => void
  href?: string
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
  external?: boolean
  download?: boolean | string
}

export function Button({
  children,
  variant = 'filled',
  onClick,
  href,
  className = '',
  type = 'button',
  disabled = false,
  external = false,
  download,
}: ButtonProps) {
  const cls = [styles.button, styles[variant], className].filter(Boolean).join(' ')

  const hoverAnim = variant === 'filled' || variant === 'ghost' ? {} : { opacity: 0.5 }

  if (href) {
    return (
      <motion.a
        href={href}
        className={cls}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        download={download}
        whileHover={hoverAnim}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      className={cls}
      onClick={onClick}
      disabled={disabled}
      whileHover={hoverAnim}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.button>
  )
}
