import { useEffect, useState } from 'react'
import styles from './CaseSideNav.module.css'

export function slugifySection(label: string) {
  return label
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

type CaseSideNavProps = {
  sections: string[]
}

export function CaseSideNav({ sections }: CaseSideNavProps) {
  const [active, setActive] = useState('')

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(slugifySection(s)))
      .filter((el): el is HTMLElement => el !== null)
    if (els.length === 0) return

    const onScroll = () => {
      const marker = window.innerHeight * 0.35
      let current = ''
      for (const el of els) {
        if (el.getBoundingClientRect().top <= marker) current = el.id
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [sections])

  return (
    <nav className={styles.nav} aria-label="Índice do estudo de caso">
      <ul className={styles.list}>
        {sections.map((label) => {
          const id = slugifySection(label)
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                className={id === active ? `${styles.link} ${styles.active}` : styles.link}
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
              >
                {label}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
