import { motion } from 'framer-motion'
import { Footer } from '@/components/layout/Footer'
import { AccordionItem } from '@/components/sections/about/AccordionItem'
import { Button } from '@/components/ui/Button'
import { experiences, education } from '@/data/experience'
import { SEO } from '@/components/SEO'
import styles from './AboutPage.module.css'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

type AboutSectionProps = {
  letter: string
  label: string
  children: React.ReactNode
}

function AboutSection({ letter, label, children }: AboutSectionProps) {
  return (
    <motion.div
      className={styles.section}
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-10%' }}
    >
      <motion.div className={styles.sectionLetter} variants={fadeUp} aria-hidden="true">
        {letter}
      </motion.div>
      <div className={styles.sectionContent}>
        <motion.p className={styles.sectionLabel} variants={fadeUp}>
          {label}
        </motion.p>
        {children}
      </div>
    </motion.div>
  )
}

export function AboutPage() {
  return (
    <main className={styles.page}>
      <SEO title="Sobre" description="Conheça Lucas Brabo — Designer de Produto e desenvolvedor front-end com mais de 5 anos de experiência em UX/UI, direção de arte e código." />
      {/* Intro hero */}
      <section className={styles.intro}>
        <div className={styles.introLeft}>
          <motion.div
            className={styles.introStack}
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            <motion.h1 className={styles.introTitle} variants={fadeUp}>
              Hey :) Sou Lucas,
              <br />designer de produto
              <br />e diretor de arte
            </motion.h1>

            <motion.div className={styles.introBody} variants={fadeUp}>
              <p>
                Mais de 5 anos transitando entre UX/UI, direção de arte e desenvolvimento
                front-end — sempre com o mesmo objetivo: criar produtos que fazem sentido
                para quem usa e geram resultado para quem investe.
              </p>
              <p>
                Recife, Pernambuco. Atualmente coordenando mídia na Agência Partem.{' '}
                <a href="https://wa.me/5581998286538" target="_blank" rel="noopener noreferrer" className={styles.whatsappLink}><strong>Vamos conversar?</strong></a>
              </p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Button
                variant="filled"
                href="/assets/curriculo-lucas-brabo.pdf"
                download="Curriculo-Lucas-Brabo-2026.pdf"
                className={styles.cvBtn}
              >
                Baixe aqui meu CV
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className={styles.introRight}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          aria-hidden="true"
        >
          <img
            src="/assets/lucas-brabo.png"
            alt="Lucas Brabo"
            className={styles.photo}
          />
        </motion.div>
      </section>

      {/* A — Resumo */}
      <div className={styles.sections}>
        <AboutSection letter="A/" label="Resumo Profissional">
          <motion.p className={styles.resumeText} variants={fadeUp}>
            Atuo nas três frentes que moldam um produto digital: <strong>UX/UI</strong> — pesquisa
            com usuários, fluxos, wireframes, protótipos e testes de usabilidade;{' '}
            <strong>direção de arte</strong> — identidade visual, campanhas e branding; e{' '}
            <strong>desenvolvimento front-end</strong> — HTML, CSS, JavaScript, React e Vite.
            Essa combinação me permite ir da ideia ao código sem perder a experiência do usuário
            de vista.
          </motion.p>
        </AboutSection>

        {/* B — Experiência */}
        <AboutSection letter="B/" label="Experiências de trabalho">
          <motion.div className={styles.accordionList} variants={stagger}>
            {experiences.map((exp) => (
              <motion.div key={exp.id} variants={fadeUp}>
                <AccordionItem
                  role={exp.role}
                  company={exp.company}
                  period={exp.period}
                  description={exp.description}
                />
              </motion.div>
            ))}
          </motion.div>
        </AboutSection>

        {/* C — Formação */}
        <AboutSection letter="C/" label="Formação Acadêmica">
          <motion.div className={styles.accordionList} variants={stagger}>
            {education.map((edu) => (
              <motion.div key={edu.id} variants={fadeUp}>
                <AccordionItem
                  role={edu.course}
                  company={edu.institution}
                  period={edu.year}
                  description={edu.description}
                />
              </motion.div>
            ))}
          </motion.div>
        </AboutSection>
      </div>

      <div className={styles.footerWrapper}>
        <Footer />
      </div>
    </main>
  )
}
