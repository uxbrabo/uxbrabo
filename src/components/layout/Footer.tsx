import { Link } from 'react-router-dom'
import { ArrowUp } from 'lucide-react'
import styles from './Footer.module.css'

const nav = [
  { label: 'Trabalho', to: '/trabalho' },
  { label: 'Sobre mim', to: '/sobre' },
  { label: 'Contato', to: '/contato' },
]

const contacts = [
  { label: 'luckas.brabo@gmail.com', href: 'mailto:luckas.brabo@gmail.com' },
  { label: '+55 81 99828-6538', href: 'https://wa.me/5581998286538' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/lucasbrabo', external: true },
]

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className={styles.footer}>
      {/* Editorial headline */}
      <div className={styles.headline}>
        <p className={styles.headlineText}>Vamos trabalhar<br />juntos?</p>
      </div>

      {/* Grid */}
      <div className={styles.grid}>
        {/* Identity */}
        <div className={styles.col}>
          <p className={styles.colName}>Lucas Brabo</p>
          <p className={styles.colRole}>Designer de Produto<br />& Front-end Developer</p>
        </div>

        {/* Navigation */}
        <div className={styles.col}>
          <p className={styles.colLabel}>Navegação</p>
          <ul className={styles.linkList}>
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className={styles.link}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacts */}
        <div className={styles.col}>
          <p className={styles.colLabel}>Contato</p>
          <ul className={styles.linkList}>
            {contacts.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={styles.link}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <p className={styles.copy}>© 2025 Lucas Brabo · Recife, PE</p>
        <button className={styles.toTop} onClick={scrollToTop} aria-label="Voltar para o topo">
          <span>Topo</span>
          <ArrowUp size={14} strokeWidth={1.5} />
        </button>
      </div>
    </footer>
  )
}
