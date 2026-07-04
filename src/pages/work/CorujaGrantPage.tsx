import { motion } from 'framer-motion'
import { Footer } from '@/components/layout/Footer'
import { SEO } from '@/components/SEO'
import styles from './CorujaGrantPage.module.css'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const overviewItems = [
  { label: 'Meu papel', value: 'Direção de Arte · 3D' },
  { label: 'Entregas', value: 'Personagem 3D, Uniformes, Comercial' },
  { label: 'Cliente', value: 'Escola Coruja Grant' },
  { label: 'Ano', value: '2024' },
]

const characters = [
  { src: '/assets/coruja-grant/Team Leader/Team Leader.png', label: 'Team Leader' },
  { src: '/assets/coruja-grant/Jogador de Futebol/Jogador de Futebol.png', label: 'Futebol' },
  { src: '/assets/coruja-grant/Jogador de Basquete/Jogador de Basquete.png', label: 'Basquete' },
  { src: '/assets/coruja-grant/Jogador de Beach Tenis/Jogador de Beach Tenis.png', label: 'Beach Tênis' },
  { src: '/assets/coruja-grant/Jiu-Jitsu/Jiu-Jitsu-Mascote-02.png', label: 'Jiu-Jitsu' },
]

const uniformes = [
  '/assets/coruja-grant/uniforme-2.png',
  '/assets/coruja-grant/uniforme-3.jpg',
  '/assets/coruja-grant/uniforme-4.jpg',
  '/assets/coruja-grant/uniforme-5.jpg',
  '/assets/coruja-grant/uniforme-6.jpg',
  '/assets/coruja-grant/uniforme-7.jpg',
]

export function CorujaGrantPage() {
  return (
    <main className={styles.page}>
      <SEO title="Coruja Grant, Direção de Arte" description="Direção de arte e criação de mascotes para Coruja Grant." />

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <video
          src="/assets/coruja-grant/Coruja-grant-15seg.mp4"
          autoPlay
          muted
          loop
          playsInline
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

      {/* ── Contexto ── */}
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
            <span>Contexto</span>
          </motion.div>
          <motion.div className={styles.prose} variants={fadeUp}>
            <p>
              A Escola Coruja Grant é um <strong>polo esportivo multidisciplinar</strong> em Recife que abriga modalidades como futebol, futsal, vôlei, basquete, tênis, beach tênis, jiu-jitsu e hipismo. O desafio era criar um mascote que representasse todas essas modalidades com energia e coerência visual, que funcionasse tanto na comunicação digital quanto na identidade física dos uniformes.
            </p>
            <p>
              A solução foi desenvolver um <strong>personagem 3D adaptável</strong>: uma coruja estilizada que assume o uniforme de cada modalidade, mantendo a mesma estrutura, proporções e personalidade em todas as versões. Isso garante reconhecimento imediato e liberdade criativa para expandir o sistema no futuro.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* ── Personagem 3D ── */}
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
            <span>Personagem 3D</span>
          </motion.div>
          <motion.div className={styles.prose} variants={fadeUp}>
            <p>
              O mascote foi modelado e renderizado inteiramente em 3D, o que permite <strong>luz, sombra e volume realistas</strong> impossíveis de alcançar em ilustração 2D. A base neutral, o Team Leader, é a versão "off-field" do personagem, com postura confiante e expressão carismática. A partir dela, cada variação esportiva recebe seu equipamento específico sem perder a identidade central.
            </p>
            <p>
              O processo de construção passou por conceito → modelagem de base → rigging de expressão → variações de uniforme → render final com iluminação de estúdio em fundo transparente, facilitando o uso em qualquer aplicação.
            </p>
          </motion.div>
        </div>

        {/* Character grid */}
        <motion.div className={styles.characterGrid} variants={stagger}>
          {characters.map((char, i) => (
            <motion.div key={i} className={styles.characterItem} variants={fadeUp}>
              <img src={char.src} alt={`Coruja Grant, ${char.label}`} />
              <span className={styles.characterLabel}>{char.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* ── Uniformes ── */}
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
            <span>Uniformes</span>
          </motion.div>
          <motion.div className={styles.prose} variants={fadeUp}>
            <p>
              Os uniformes foram desenvolvidos com a <strong>identidade visual da escola integrada ao design esportivo</strong>. O verde da marca aparece como cor primária em todas as modalidades, com detalhes em branco e preto que garantem contraste e leitura em campo. O mascote é bordado ou impresso em posição estratégica (costas e peitoral), reforçando o senso de time e pertencimento.
            </p>
          </motion.div>
        </div>
        <motion.div className={styles.uniformeGrid} variants={stagger}>
          {uniformes.map((src, i) => (
            <motion.div key={i} className={styles.uniformeItem} variants={fadeUp}>
              <img src={src} alt={`Uniforme Coruja Grant ${i + 1}`} />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* ── Comercial ── */}
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
            <span>Comercial</span>
          </motion.div>
          <motion.div className={styles.prose} variants={fadeUp}>
            <p>
              O comercial de 15 segundos foi produzido para veiculação em redes sociais e painéis digitais. O personagem 3D assume o papel de embaixador, apresentando as modalidades da escola em uma sequência dinâmica que reforça a energia e o espírito multiesportivo da Coruja Grant. A trilha sonora foi composta especificamente para o projeto, com BPM calibrado para o ritmo das transições.
            </p>
          </motion.div>
        </div>
        <motion.div className={styles.videoWrapper} variants={fadeUp}>
          <video
            src="/assets/coruja-grant/comercial.mp4"
            controls
            playsInline
            className={styles.comercialVideo}
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
