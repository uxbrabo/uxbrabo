import styles from './LaptopMockupGallery.module.css'

type Screen = { id: string; src: string; label: string }

export function LaptopMockupGallery({ screens, columns = 2 }: { screens: Screen[]; columns?: 2 | 3 | 4 }) {
  return (
    <div className={styles.grid} style={{ '--laptop-cols': columns } as React.CSSProperties}>
      {screens.map((screen) => (
        <figure key={screen.id} className={styles.item}>
          <div className={styles.laptop}>
            <div className={styles.screen}>
              <div className={styles.camera} />
              <div className={styles.viewport}>
                <div className={styles.scrollArea}>
                  <img
                    src={screen.src}
                    alt={screen.label}
                    className={styles.img}
                    loading="lazy"
                  />
                </div>
                <div className={styles.scrollFade} aria-hidden="true" />
              </div>
            </div>
            <div className={styles.base}>
              <div className={styles.notch} />
            </div>
          </div>
          <figcaption className={styles.label}>{screen.label}</figcaption>
        </figure>
      ))}
    </div>
  )
}
