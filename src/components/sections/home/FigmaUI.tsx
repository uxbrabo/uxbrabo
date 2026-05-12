import React from 'react'
import {
  MousePointer2, Frame, PenTool, Square, Type, Hand, MessageSquare, Minus,
} from 'lucide-react'
import styles from './FigmaUI.module.css'

type Tool = { icon: React.ElementType; label: string; active?: boolean } | { type: 'sep' }

const tools: Tool[] = [
  { icon: MousePointer2, label: 'Move', active: true },
  { icon: Frame,         label: 'Frame' },
  { type: 'sep' },
  { icon: PenTool,       label: 'Pen' },
  { icon: Square,        label: 'Rectangle' },
  { icon: Type,          label: 'Text' },
  { type: 'sep' },
  { icon: Hand,          label: 'Hand' },
  { icon: MessageSquare, label: 'Comment' },
]

export function FigmaUI() {
  return (
    <>
      {/* ── Left toolbar ── */}
      <div className={styles.leftBar}>
        {tools.map((t, i) => {
          if ('type' in t) return <div key={i} className={styles.sep} />
          const Icon = t.icon
          return (
            <button
              key={i}
              className={`${styles.tool} ${t.active ? styles.toolActive : ''}`}
              tabIndex={-1}
              aria-hidden="true"
              title={t.label}
            >
              <Icon size={16} strokeWidth={1.5} />
            </button>
          )
        })}
      </div>

      {/* ── Right panel ── */}
      <div className={styles.rightPanel}>
        {/* Tabs */}
        <div className={styles.tabs}>
          <span className={`${styles.tab} ${styles.tabActive}`}>Design</span>
          <span className={styles.tab}>Prototype</span>
        </div>

        {/* Layer */}
        <div className={styles.section}>
          <p className={styles.sectionTitle}>Layer</p>
          <div className={styles.layerRow}>
            <Frame size={12} strokeWidth={1.5} className={styles.layerIcon} />
            <span className={styles.layerName}>Hero / Desktop</span>
            <Minus size={10} strokeWidth={1.5} className={styles.layerVis} />
          </div>
        </div>

        <div className={styles.divider} />

        {/* Alignment */}
        <div className={styles.section}>
          <p className={styles.sectionTitle}>Alignment</p>
          <div className={styles.alignGrid}>
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className={styles.alignBtn} />
            ))}
          </div>
        </div>

        <div className={styles.divider} />

        {/* Position */}
        <div className={styles.section}>
          <div className={styles.propGrid}>
            <div className={styles.propField}>
              <span className={styles.propLabel}>X</span>
              <span className={styles.propValue}>0</span>
            </div>
            <div className={styles.propField}>
              <span className={styles.propLabel}>Y</span>
              <span className={styles.propValue}>0</span>
            </div>
            <div className={styles.propField}>
              <span className={styles.propLabel}>W</span>
              <span className={styles.propValue}>1440</span>
            </div>
            <div className={styles.propField}>
              <span className={styles.propLabel}>H</span>
              <span className={styles.propValue}>900</span>
            </div>
            <div className={styles.propField}>
              <span className={styles.propLabel}>R</span>
              <span className={styles.propValue}>0</span>
            </div>
            <div className={styles.propField}>
              <span className={styles.propLabel}>—</span>
              <span className={styles.propValue}>0</span>
            </div>
          </div>
        </div>

        <div className={styles.divider} />

        {/* Fill */}
        <div className={styles.section}>
          <div className={styles.rowBetween}>
            <p className={styles.sectionTitle}>Fill</p>
            <span className={styles.addBtn}>+</span>
          </div>
          <div className={styles.fillRow}>
            <div className={styles.fillSwatch} />
            <span className={styles.propValue}>FFFFFF</span>
            <span className={styles.propMuted}>100%</span>
          </div>
        </div>

        <div className={styles.divider} />

        {/* Typography */}
        <div className={styles.section}>
          <p className={styles.sectionTitle}>Text</p>
          <div className={styles.propField} style={{ marginBottom: 6 }}>
            <span className={styles.propValue} style={{ flex: 1 }}>Inter</span>
          </div>
          <div className={styles.propGrid}>
            <div className={styles.propField}>
              <span className={styles.propLabel}>Size</span>
              <span className={styles.propValue}>48</span>
            </div>
            <div className={styles.propField}>
              <span className={styles.propLabel}>Wt</span>
              <span className={styles.propValue}>600</span>
            </div>
            <div className={styles.propField}>
              <span className={styles.propLabel}>Lh</span>
              <span className={styles.propValue}>Auto</span>
            </div>
            <div className={styles.propField}>
              <span className={styles.propLabel}>Ls</span>
              <span className={styles.propValue}>–1%</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
