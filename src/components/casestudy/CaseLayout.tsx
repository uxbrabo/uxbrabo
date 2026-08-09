import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { CaseSideNav } from './CaseSideNav'
import styles from './CaseLayout.module.css'

type CaseLayoutProps = {
  sections: string[]
  children: ReactNode
}

export function CaseLayout({ sections, children }: CaseLayoutProps) {
  return (
    <div className={`${styles.layout} case-theme`}>
      <aside className={styles.sidebar}>
        <Link to="/trabalho" className={styles.back}>
          <ArrowLeft size={15} strokeWidth={1.75} />
          <span>Voltar</span>
        </Link>
        <CaseSideNav sections={sections} />
      </aside>
      <div className={styles.content}>{children}</div>
    </div>
  )
}

type CaseMetaProps = {
  items: Array<{ label: string; value: string }>
}

export function CaseMeta({ items }: CaseMetaProps) {
  return (
    <div className={styles.meta}>
      {items.map((item) => (
        <div key={item.label} className={styles.metaItem}>
          <span className={styles.metaLabel}>{item.label}</span>
          <span className={styles.metaValue}>{item.value}</span>
        </div>
      ))}
    </div>
  )
}

type CaseHeroProps = {
  eyebrow: string
  title: ReactNode
  image?: { src: string; alt: string }
  liveUrl?: string
}

export function CaseHero({ eyebrow, title, image, liveUrl }: CaseHeroProps) {
  return (
    <header className={styles.hero}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h1 className={styles.title}>{title}</h1>
      {liveUrl && (
        <a href={liveUrl} target="_blank" rel="noopener noreferrer" className={styles.liveLink}>
          Ver projeto no ar →
        </a>
      )}
      {image && (
        <div className={styles.heroPanel}>
          <img src={image.src} alt={image.alt} className={styles.heroImage} fetchPriority="high" />
        </div>
      )}
    </header>
  )
}
