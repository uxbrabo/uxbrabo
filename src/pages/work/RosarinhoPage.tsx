import { motion } from 'framer-motion'
import { Footer } from '@/components/layout/Footer'
import styles from './RosarinhoPage.module.css'

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
  { label: 'Entregas', value: 'Identidade, OOH, Material de Vendas, Motion' },
  { label: 'Cliente', value: 'Seu Pernambuco Construtora' },
  { label: 'Ano', value: '2024' },
]

export function RosarinhoPage() {
  return (
    <main className={styles.page}>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <img
          src="/assets/rosarinho/capa.png"
          alt="Rosarinho Prince Vanguard — campanha OOH"
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
              Rosarinho é um bairro. Antes de ser um empreendimento, é um endereço com história — encravado na Zona Norte do Recife, com a vida que pulsa nos mercados, nas igrejas, nas calçadas. Nomear um empreendimento com o nome do bairro é um gesto raro: é escolher <strong>pertencer antes de vender</strong>.
            </p>
            <p>
              O desafio era criar uma identidade capaz de honrar esse nome. <strong>Premium o suficiente para aspirar, próximo o suficiente para pertencer</strong>. O dourado da marca não é ostentação — é a cor de quem construiu algo com cuidado e quer que isso seja visto. O símbolo circular remete à rosa, à origem do nome, ao ciclo completo de um sonho que virou endereço.
            </p>
            <p>
              A campanha foi pensada para quem já conhece o bairro de cor. A tagline <em>"No coração da Zona Norte"</em> não é apenas geolocalização — é <strong>um reconhecimento de identidade</strong>. Para quem cresceu nessa parte da cidade, comprar no Rosarinho Prince Vanguard é uma forma de dizer: eu sou daqui, e agora tenho um lugar à minha altura.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* ── Campanha OOH ── */}
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
            <span>Campanha OOH</span>
          </motion.div>
          <motion.div className={styles.prose} variants={fadeUp}>
            <p>
              O outdoor foi desenhado para funcionar em movimento — em segundos, lendo de um carro. A estrutura do layout segue uma lógica clara: <strong>emoção à esquerda, informação à direita</strong>. O casal abraçado sobre a skyline do Recife vende o sonho; o produto, o preço e a construtora fecham a argumentação racional. Dois discursos, um único olhar.
            </p>
          </motion.div>
        </div>
        <motion.div className={styles.oohGrid} variants={stagger}>
          <motion.div variants={fadeUp}>
            <img
              src="/assets/rosarinho/capa.png"
              alt="Rosarinho — outdoor contra o céu"
            />
          </motion.div>
          <motion.div variants={fadeUp}>
            <img
              src="/assets/rosarinho/9b65cd206547997.66ce4a5683123.png"
              alt="Rosarinho — outdoor em contexto urbano"
            />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ── Planta ── */}
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
            <span>Material de Vendas</span>
          </motion.div>
          <motion.div className={styles.prose} variants={fadeUp}>
            <p>
              A planta humanizada traduz o espaço bruto em <strong>vida cotidiana</strong>. Não é um desenho técnico — é uma promessa de como a luz vai entrar pela janela da sala, de como a cozinha vai receber a família no fim de semana. O material de vendas precisa fazer o comprador ver a si mesmo dentro do imóvel antes de assinar qualquer documento.
            </p>
          </motion.div>
        </div>
        <motion.div className={styles.fullImg} variants={fadeUp}>
          <img
            src="/assets/rosarinho/pernambucosalvadordesahumpavtipor02-17286787068928.webp"
            alt="Rosarinho Prince Vanguard — planta humanizada"
          />
        </motion.div>
      </motion.section>

      {/* ── Motion ── */}
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
            <span>Motion</span>
          </motion.div>
          <motion.div className={styles.prose} variants={fadeUp}>
            <p>
              Os vídeos ampliam o alcance da campanha para o digital — stories, reels e anúncios em vídeo. A animação da marca dá vida ao símbolo circular, reforçando o conceito de <strong>movimento e chegada</strong>. O comercial combina os elementos visuais da campanha impressa com o ritmo do vídeo curto, otimizado para capturar a atenção nos primeiros dois segundos.
            </p>
          </motion.div>
        </div>
        <motion.div className={styles.videoGrid} variants={stagger}>
          <motion.div className={styles.videoItem} variants={fadeUp}>
            <video
              src="/assets/rosarinho/animation.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
          </motion.div>
          <motion.div className={styles.videoItem} variants={fadeUp}>
            <video
              src="/assets/rosarinho/videoplayback.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ── Footer ── */}
      <div className={styles.footerWrapper}>
        <Footer />
      </div>

    </main>
  )
}
