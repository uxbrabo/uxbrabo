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

const stack = [
  'Figma', 'Adobe XD', 'FigJam', 'Miro', 'Notion',
  'HTML', 'CSS', 'JavaScript', 'React', 'Git', 'SQL',
]

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
      <SEO title="Sobre" description="Conheça Lucas Brabo, Designer de Produto com experiência em UX/UI e uma trajetória entre comunicação, direção de arte e design de produtos digitais." />
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
              <br />Designer de Produto
              <br />(UX/UI)
            </motion.h1>

            <motion.div className={styles.introBody} variants={fadeUp}>
              <p>
                Sou Designer de Produto com experiência em UX/UI e uma trajetória
                construída entre comunicação, direção de arte e design de produtos
                digitais. Nos últimos anos direcionei minha atuação para o
                desenvolvimento de produtos: criação de interfaces, definição de fluxos,
                arquitetura de informação, prototipagem em alta fidelidade e handoff para
                desenvolvimento.
              </p>
              <p>
                Na Caju, colaborei com equipes multidisciplinares em projetos de UX/UI,
                sempre buscando equilibrar necessidades do negócio e experiência do
                usuário. Atualmente desenvolvo o Study, um aplicativo educacional para o
                mercado brasileiro, onde atuo de ponta a ponta na concepção do produto.{' '}
                <a href="https://wa.me/5581998286538" target="_blank" rel="noopener noreferrer" className={styles.whatsappLink}><strong>Vamos conversar?</strong></a>
              </p>
              <p>
                Minha formação em Publicidade e Propaganda complementa minha visão de
                produto, permitindo conectar objetivos de negócio, comunicação e
                experiência do usuário. Também atuo com direção de arte, um repertório
                extra que soma na hora de pensar interface e comunicação visual.
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
            Meu foco é <strong>Design de Produto (UX/UI)</strong>: pesquisa com usuários,
            definição de fluxos, arquitetura de informação, wireframes, protótipos de alta
            fidelidade e handoff para desenvolvimento. Tenho conhecimento em{' '}
            <strong>HTML, CSS, JavaScript, React, Git e SQL</strong>, o que facilita a
            colaboração com equipes de desenvolvimento durante todo o processo. Minha vivência
            em <strong>direção de arte</strong> soma um repertório extra de identidade visual e
            comunicação.
          </motion.p>
          <motion.ul className={styles.stackList} variants={stagger} aria-label="Stack técnica">
            {stack.map((item) => (
              <motion.li key={item} className={styles.stackTag} variants={fadeUp}>
                {item}
              </motion.li>
            ))}
          </motion.ul>
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
                  projects={exp.projects}
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
