import { motion } from 'framer-motion'
import { Footer } from '@/components/layout/Footer'
import { SEO } from '@/components/SEO'
import styles from './BellyrisiPage.module.css'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const overviewItems = [
  { label: 'Meu papel', value: 'Direção de Arte' },
  { label: 'Entregas', value: 'Identidade Visual, Papelaria, Espaço' },
  { label: 'Cliente', value: 'Bellyrisi Odontologia' },
  { label: 'Ano', value: '2021' },
]

export function BellyrisiPage() {
  return (
    <main className={styles.page}>
      <SEO title="Bellyrisi — Direção de Arte" description="Direção de arte e identidade visual para Bellyrisi." />

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <img
          src="/assets/bellyrisi/capa.png"
          alt="Bellyrisi Odontologia Integrada — recepção"
          className={styles.heroBg}
        />
        <div className={styles.heroOverlay} />
      </section>

      {/* ── Overview strip ── */}
      <div className={styles.overviewStrip}>
        <div className={styles.overviewInner}>
          {overviewItems.map((item) => (
            <div key={item.label} className={styles.overviewItem}>
              <span className={styles.overviewLabel}>{item.label}</span>
              <span className={styles.overviewValue}>{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Conceito ── */}
      <motion.section
        className={styles.section}
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-10%' }}
      >
        <div className={styles.sectionInner}>
          <motion.div className={styles.sectionLabel} variants={fadeUp}>
            <span>01</span>
            <span>Conceito</span>
          </motion.div>
          <motion.div className={styles.prose} variants={fadeUp}>
            <p>
              Duas dentistas decidiram unir não apenas seus consultórios — decidiram unir seus nomes. Jobelly e Risia construíram algo juntas muito antes de qualquer logotipo: construíram confiança. <strong>Bellyrisi nasce desse ato de cumplicidade</strong>, do tipo raro que só existe entre quem compartilha não só uma sala, mas uma visão de mundo.
            </p>
            <p>
              O briefing pedia uma marca premium para uma clínica de odontologia integrada. Mas o que estava por trás era mais profundo: <strong>duas histórias que escolheram se tornar uma só</strong>. A identidade precisava carregar esse peso — não como ornamento, mas como estrutura. Cada escolha visual precisava ser a extensão desse gesto de união.
            </p>
            <p>
              A odontologia vive obcecada pelo branco clínico, pelo azul asséptico, pela frieza que supostamente transmite higiene. <strong>Bellyrisi escolheu o oposto</strong>. O taupe — quente, ponderado, com a sofisticação de quem não precisa gritar — rompe o padrão do setor para propor algo diferente: um lugar onde você é acolhido antes de ser tratado.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* ── Naming & Símbolo ── */}
      <motion.section
        className={styles.section}
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-10%' }}
      >
        <div className={styles.sectionInner}>
          <motion.div className={styles.sectionLabel} variants={fadeUp}>
            <span>02</span>
            <span>Naming & Símbolo</span>
          </motion.div>
          <motion.div className={styles.prose} variants={fadeUp}>
            <p>
              O nome foi a primeira decisão de design. <strong>Belly + Risi</strong> — extraídos dos apelidos das sócias — formam uma palavra nova que soa natural, memorável e carregada de significado pessoal. Não é um nome inventado: é uma assinatura compartilhada.
            </p>
            <p>
              O símbolo segue a mesma lógica. <strong>B + R + a forma de um dente</strong> se fundem em um glifo único: orgânico, fluido, assimétrico na medida certa. Ele parece dois elementos que se entrelaçam — como dois caminhos que se encontram e decidem seguir juntos. Há leveza no traço, mas há intenção em cada curva.
            </p>
          </motion.div>
        </div>
        <motion.div className={styles.fullImg} variants={fadeUp}>
          <img
            src="/assets/bellyrisi/69ec2e140201781.623cff5e66339.webp"
            alt="Construção do nome e símbolo Bellyrisi"
          />
        </motion.div>
      </motion.section>

      {/* ── Identidade ── */}
      <motion.section
        className={styles.section}
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-10%' }}
      >
        <div className={styles.sectionInner}>
          <motion.div className={styles.sectionLabel} variants={fadeUp}>
            <span>03</span>
            <span>Identidade</span>
          </motion.div>
          <motion.div className={styles.prose} variants={fadeUp}>
            <p>
              O taupe <strong>#9B8E82</strong> é a cor que ancora tudo. Nem frio nem quente em excesso — ele ocupa o espaço entre a sofisticação e o acolhimento. Sobre ele, o branco do logo respira. Sobre o branco, o taupe assina com discrição. As duas versões convivem sem hierarquia: <strong>a marca funciona nos dois mundos</strong>, escuro e claro, sem perder personalidade.
            </p>
          </motion.div>
        </div>
        <motion.div className={styles.duoGrid} variants={stagger}>
          <motion.div variants={fadeUp}>
            <img
              src="/assets/bellyrisi/fa4a11140201781.623cff5e677e0.webp"
              alt="Bellyrisi — versão em fundo claro"
            />
          </motion.div>
          <motion.div variants={fadeUp}>
            <img
              src="/assets/bellyrisi/b6feba140201781.623d042e698f5.webp"
              alt="Bellyrisi — versão em fundo taupe"
            />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ── Papelaria ── */}
      <motion.section
        className={styles.section}
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-10%' }}
      >
        <div className={styles.sectionInner}>
          <motion.div className={styles.sectionLabel} variants={fadeUp}>
            <span>04</span>
            <span>Papelaria</span>
          </motion.div>
          <motion.div className={styles.prose} variants={fadeUp}>
            <p>
              A papelaria foi projetada para que cada ponto de contato físico reforce a mesma sensação: <strong>cuidado com o detalhe</strong>. O cartão de visita, o crachá, o papel timbrado, a caneta — todos carregam o símbolo com consistência. O sistema de identidade não termina na tela; ele existe nas mãos de quem entra na clínica pela primeira vez.
            </p>
          </motion.div>
        </div>
        <motion.div className={styles.fullImg} variants={fadeUp}>
          <img
            src="/assets/bellyrisi/d82f47140201781.623d114e700c1.webp"
            alt="Papelaria Bellyrisi — flatlay completo"
          />
        </motion.div>
      </motion.section>

      {/* ── Campanha ── */}
      <motion.section
        className={styles.section}
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-10%' }}
      >
        <div className={styles.sectionInner}>
          <motion.div className={styles.sectionLabel} variants={fadeUp}>
            <span>05</span>
            <span>Aplicação</span>
          </motion.div>
          <motion.div className={styles.prose} variants={fadeUp}>
            <p>
              A marca existe para servir o sorriso — não no sentido clínico, mas no sentido humano. A aplicação editorial com fotografia em tons sépia mantém a paleta da identidade enquanto coloca <strong>a emoção do sorriso no centro da comunicação</strong>. A odontologia como ato de cuidado, não de correção.
            </p>
          </motion.div>
        </div>
        <motion.div className={styles.posterWrapper} variants={fadeUp}>
          <img
            src="/assets/bellyrisi/1e88fe140201781.623cff5e66adc.gif"
            alt="Bellyrisi — aplicação editorial com fotografia"
          />
        </motion.div>
      </motion.section>

      {/* ── Footer ── */}
      <div className={styles.footerWrapper}>
        <Footer />
      </div>

    </main>
  )
}
