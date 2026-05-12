import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Logo } from '@/components/ui/Logo'
import styles from './Navbar.module.css'

const navLinks = [
  { to: '/trabalho', label: 'Trabalho', external: false },
  { to: '/sobre', label: 'Sobre mim', external: false },
  { to: '/contato', label: 'Contato', external: false },
]

const cvHref = '/assets/curriculo-lucas-brabo.pdf'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <motion.header
        className={[styles.navbar, scrolled && styles.scrolled].filter(Boolean).join(' ')}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles.inner}>
          <Logo />

          <nav className={styles.desktopNav} aria-label="Navegação principal">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  [styles.navLink, isActive && styles.active].filter(Boolean).join(' ')
                }
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href={cvHref}
              className={styles.navLink}
              download="Curriculo-Lucas-Brabo.pdf"
            >
              CV
            </a>
          </nav>

          <button
            className={styles.menuToggle}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav aria-label="Menu mobile">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      [styles.mobileLink, isActive && styles.active].filter(Boolean).join(' ')
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05, duration: 0.3 }}
              >
                <a
                  href={cvHref}
                  className={styles.mobileLink}
                  download="Curriculo-Lucas-Brabo.pdf"
                  onClick={() => setMenuOpen(false)}
                >
                  CV
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
