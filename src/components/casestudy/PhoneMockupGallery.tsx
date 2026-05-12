import styles from './PhoneMockupGallery.module.css'

type Screen = { id: string; src: string; label: string }

type Props = {
  screens: Screen[]
  animated?: boolean
  fixedNav?: boolean
  columns?: 2 | 3 | 4
}

export function PhoneMockupGallery({ screens, animated = false, fixedNav = false, columns = 3 }: Props) {
  return (
    <div
      className={styles.grid}
      style={{ '--phone-cols': columns } as React.CSSProperties}
    >
      {screens.map((screen, i) => (
        <figure
          key={screen.id}
          className={styles.item}
          style={animated ? { '--delay': `${i * 1.3}s` } as React.CSSProperties : undefined}
        >
          <div className={styles.frame}>
            <div className={styles.pill} />
            <div className={fixedNav ? styles.viewportFixed : styles.viewport}>
              {fixedNav ? (
                <>
                  <div className={styles.scrollArea}>
                    <img
                      src={screen.src}
                      alt={screen.label}
                      className={animated ? styles.imgFixed : styles.imgStatic}
                      loading="lazy"
                    />
                  </div>
                  <img
                    src={screen.src}
                    alt=""
                    aria-hidden
                    className={styles.navBarOverlay}
                    loading="lazy"
                  />
                </>
              ) : (
                <img
                  src={screen.src}
                  alt={screen.label}
                  className={animated ? styles.img : styles.imgStatic}
                  loading="lazy"
                />
              )}
            </div>
          </div>
          <figcaption className={styles.label}>{screen.label}</figcaption>
        </figure>
      ))}
    </div>
  )
}
