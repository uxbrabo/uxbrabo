import { motion } from 'framer-motion'
import { Footer } from '@/components/layout/Footer'
import { SEO } from '@/components/SEO'
import { slugifySection } from '@/components/casestudy/CaseSideNav'
import { CaseLayout, CaseHero, CaseMeta } from '@/components/casestudy/CaseLayout'
import styles from './OabPeCaseStudy.module.css'

/* ─── helpers ────────────────────────────────────────── */
function SectionHeader({ phase, title }: { phase: string; title: string }) {
  return (
    <div className={styles.sectionHeader} id={slugifySection(phase)}>
      <span className={styles.phaseLabel}>{phase}</span>
      <h2 className={styles.sectionTitle}>{title}</h2>
    </div>
  )
}

/* ─── DATA ───────────────────────────────────────────── */
const contributions = [
  {
    area: 'Desenvolvimento de interfaces',
    desc: 'Desenvolvi interfaces do portal, cuidando de layout, hierarquia visual e componentes de tela.',
  },
  {
    area: 'Reorganização da navegação',
    desc: 'Contribuí para a reorganização da navegação, para que os diferentes públicos encontrassem o que precisam com mais facilidade.',
  },
  {
    area: 'Clareza das informações',
    desc: 'Foco em tornar os serviços e conteúdos institucionais mais claros e acessíveis.',
  },
  {
    area: 'Acessibilidade e experiência',
    desc: 'Atenção à acessibilidade e à melhoria geral da experiência dos usuários no portal.',
  },
]

export function OabPeCaseStudy() {
  return (
    <main className={styles.page}>
      <SEO
        title="OAB Pernambuco"
        description="Participação no redesign do portal institucional da OAB Pernambuco, com desenvolvimento de interfaces e reorganização da navegação."
      />
      <CaseLayout sections={['Visão Geral', 'Minha Contribuição', 'Reflexão']}>

      {/* ── HERO ── */}
      <CaseHero
        eyebrow="OAB Pernambuco • Portal institucional • 2024"
        title="Participação no redesign do portal institucional da advocacia pernambucana"
        liveUrl="https://www.oabpe.org.br"
      />

      <CaseMeta
        items={[
          { label: 'Meu papel',    value: 'UX/UI Designer (na Caju Agência Digital)' },
          { label: 'Período',      value: '2024' },
          { label: 'Cliente',      value: 'OAB Pernambuco' },
          { label: 'Contribuição', value: 'Interfaces · Reorganização da navegação' },
        ]}
      />

      {/* ── VISÃO GERAL ── */}
      <section className={styles.section}>
        <SectionHeader phase="Visão Geral" title="Um portal que serve advogados, estudantes e público geral" />
        <div className={styles.contextGrid}>
          <div className={styles.contextMain}>
            <p className={styles.prose}>
              O portal institucional da OAB Pernambuco é o canal central entre a instituição e
              seus públicos: advogados registrados, estudantes de direito, imprensa e público
              geral. O redesign teve como objetivo modernizar a presença digital e tornar os
              serviços e conteúdos mais fáceis de acessar.
            </p>
            <p className={styles.prose}>
              Atuei como UX/UI Designer na Caju Agência Digital. Participei do redesign
              desenvolvendo interfaces e contribuindo para a reorganização da navegação, com
              foco em acessibilidade, clareza das informações e melhoria da experiência dos
              usuários.
            </p>
          </div>
        </div>
      </section>

      {/* ── MINHA CONTRIBUIÇÃO ── */}
      <section className={`${styles.section} ${styles.sectionTinted}`}>
        <SectionHeader phase="Minha Contribuição" title="O que eu fiz no projeto" />
        <div className={styles.deliverList}>
          {contributions.map((d, i) => (
            <motion.div
              key={d.area}
              className={styles.deliverRow}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className={styles.deliverNum}>0{i + 1}</span>
              <div className={styles.deliverContent}>
                <p className={styles.deliverArea}>{d.area}</p>
                <p className={styles.deliverDesc}>{d.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── REFLEXÃO ── */}
      <section className={styles.section}>
        <SectionHeader phase="Reflexão" title="O que esse projeto me ensinou" />
        <div className={styles.learningsGrid}>
          <div className={styles.learningBlock}>
            <p className={styles.learningTitle}>Institucional é o UX mais invisível</p>
            <p className={styles.learningText}>
              Em portais institucionais, o sucesso se mede pela ausência de fricção. O usuário
              não quer interagir com o site: quer encontrar o que precisa e sair. Isso orientou
              as decisões de navegação e de hierarquia da informação.
            </p>
          </div>
          <div className={styles.learningBlock}>
            <p className={styles.learningTitle}>Vários públicos, uma mesma porta de entrada</p>
            <p className={styles.learningText}>
              Advogados, estudantes e imprensa têm objetivos diferentes. Reorganizar a navegação
              pensando nesses perfis foi central para tornar o portal mais claro para todos.
            </p>
          </div>
        </div>
      </section>
      </CaseLayout>

      <div className={styles.footerWrapper}>
        <Footer />
      </div>
    </main>
  )
}
