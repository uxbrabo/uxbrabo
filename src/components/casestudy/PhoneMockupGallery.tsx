import styles from './PhoneMockupGallery.module.css'

type Screen = { id: string; src: string; label: string }

type Props = {
  screens: Screen[]
  fixedNav?: boolean
  columns?: 1 | 2 | 3 | 4
  /** Screenshots already match the device frame exactly — no scroll needed. */
  noScroll?: boolean
}

/**
 * Default mode: the frame hugs the screenshot's real proportions — no crop,
 * no blank filler. Very long pages just cap at a max height and scroll.
 * fixedNav mode (Cuca): needs a fixed phone-ratio viewport so the nav bar
 * overlay can stay pinned while the content behind it scrolls.
 */
export function PhoneMockupGallery({ screens, fixedNav = false, columns = 3, noScroll = false }: Props) {
  return (
    <div
      className={styles.grid}
      style={{ '--phone-cols': columns } as React.CSSProperties}
    >
      {screens.map((screen) => (
        <figure key={screen.id} className={styles.item}>
          <div className={styles.frame}>
            <div className={styles.pill} />
            <div className={fixedNav ? styles.viewportFixed : styles.viewport}>
              <div
                className={[
                  fixedNav ? styles.scrollAreaFixed : styles.scrollArea,
                  noScroll && styles.noScroll,
                ].filter(Boolean).join(' ')}
              >
                <img
                  src={screen.src}
                  alt={screen.label}
                  className={styles.img}
                  loading="lazy"
                />
              </div>
              {!fixedNav && !noScroll && <div className={styles.scrollFade} aria-hidden="true" />}
              {fixedNav && (
                <img
                  src={screen.src}
                  alt=""
                  aria-hidden="true"
                  className={styles.navBarOverlay}
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
