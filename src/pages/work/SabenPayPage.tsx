import { motion } from 'framer-motion'
import { Footer } from '@/components/layout/Footer'
import styles from './SabenPayPage.module.css'

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
  { label: 'Entregas', value: 'Identidade Visual, Web, Social, OOH' },
  { label: 'Cliente', value: 'Saben Pay' },
  { label: 'Ano', value: '2024' },
]

const socialGrid = [
  { src: '/assets/saben/post02.png', alt: 'Post institucional Saben Pay' },
  { src: '/assets/saben/post03.png', alt: 'Post lifestyle Saben Pay' },
  { src: '/assets/saben/post07.png', alt: 'Post lifestyle Saben Pay' },
  { src: '/assets/saben/post08.png', alt: 'Post institucional Saben Pay' },
  { src: '/assets/saben/post09.png', alt: 'Post lifestyle Saben Pay' },
]

const videos = [
  '/assets/saben/ezgif-11d114180f4f173e.mp4',
  '/assets/saben/ezgif-131716726942b3c1.mp4',
  '/assets/saben/ezgif-1711d5cc9ef64d70.mp4',
  '/assets/saben/ezgif-1766be096bf3b9b5.mp4',
]

export function SabenPayPage() {
  return (
    <main className={styles.page}>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <img
          src="/assets/saben/cbd85b228869183.685c55927d3f7.webp"
          alt="Campanha OOH Saben Pay"
          className={styles.heroBg}
        />
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
              O Saben Pay nasce como um <strong>banco digital focado em simplificar pagamentos</strong> — uma plataforma que quer democratizar o acesso a serviços financeiros com a fluidez dos maiores players do mercado. O desafio era criar uma identidade que comunicasse inovação e confiança sem cair nos clichês visuais do setor financeiro tradicional.
            </p>
            <p>
              O briefing pedia uma marca <strong>acessível mas premium</strong>, capaz de competir visualmente com fintechs globais e ao mesmo tempo falar com o usuário brasileiro. A solução precisava funcionar do cartão físico ao post de redes sociais, do app mobile ao outdoor.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* ── Identidade Visual ── */}
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
            <span>Identidade Visual</span>
          </motion.div>
          <motion.div className={styles.prose} variants={fadeUp}>
            <p>
              O <strong>asterisco (*)</strong> foi escolhido como símbolo central da marca. Em tipografia, o asterisco remete a "nota de rodapé" — algo que merece atenção especial. No universo financeiro, ressignificamos isso como <strong>convergência de possibilidades</strong>: um ponto de encontro onde soluções, pessoas e transações se conectam.
            </p>
            <p>
              O verde limão <strong>#C5E84A</strong> é uma ruptura deliberada. O setor financeiro é dominado por azuis e verdes-escuros que comunicam segurança mas sufocam a diferenciação. A escolha de um verde elétrico posiciona o Saben Pay como <strong>fresh, moderno e acessível</strong> — sem abrir mão da seriedade garantida pelo preto e pelo branco.
            </p>
          </motion.div>
        </div>
        <motion.div className={styles.fullImg} variants={fadeUp}>
          <img
            src="/assets/saben/5f6ec6228869183.685ab4758d9cb.png"
            alt="Variações do logo Saben Pay"
          />
        </motion.div>
      </motion.section>

      {/* ── Website ── */}
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
            <span>Website</span>
          </motion.div>
          <motion.div className={styles.prose} variants={fadeUp}>
            <p>
              O site foi desenhado para <strong>converter pela clareza</strong>. Espaço em branco generoso, hierarquia tipográfica limpa e a tagline "Seu dinheiro no caminho certo" posicionada como o primeiro e único elemento de leitura acima da dobra. A fotografia em preto e branco de uma estrada aberta reforça a metáfora de <strong>direção e progresso</strong> — o verde dos CTAs aparece como único elemento cromático, guiando o olhar do usuário.
            </p>
          </motion.div>
        </div>
        <motion.div className={styles.mockupGrid} variants={stagger}>
          <motion.div className={styles.mockupDesktop} variants={fadeUp}>
            <img
              src="/assets/saben/662ccd228869183.685ab4758c944.png"
              alt="Website Saben Pay — desktop"
            />
          </motion.div>
          <motion.div className={styles.mockupMobile} variants={fadeUp}>
            <img
              src="/assets/saben/810775228869183.685ab4758fb7b.png"
              alt="Website Saben Pay — mobile"
            />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ── Conteúdo Social ── */}
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
            <span>Conteúdo Social</span>
          </motion.div>
          <motion.div className={styles.prose} variants={fadeUp}>
            <p>
              O sistema de posts foi desenvolvido em <strong>dois registros complementares</strong>. O registro institucional usa o verde limão em fundo sólido com tipografia bold e o asterisco como elemento gráfico principal — direto, memorável, reconhecível no feed. O registro lifestyle humaniza a marca com <strong>fotografias reais de pessoas</strong> usando serviços financeiros no cotidiano, com o logo discreto assinando o conteúdo.
            </p>
          </motion.div>
        </div>
        <motion.div className={styles.socialGrid} variants={stagger}>
          {socialGrid.map((item, i) => (
            <motion.div key={i} className={styles.socialItem} variants={fadeUp}>
              <img src={item.src} alt={item.alt} />
            </motion.div>
          ))}
        </motion.div>
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
            <span>05</span>
            <span>Campanha OOH</span>
          </motion.div>
          <motion.div className={styles.prose} variants={fadeUp}>
            <p>
              A adaptação para mídia exterior exigiu simplificação máxima. Em um outdoor, você tem <strong>3 segundos</strong> de atenção. A solução: tagline grande, rosto humano e logo limpo. A ausência de elementos decorativos é intencional — cada centímetro do espaço é usado para converter a atenção em lembrança de marca.
            </p>
          </motion.div>
        </div>
        <motion.div className={styles.fullImg} variants={fadeUp}>
          <img
            src="/assets/saben/cbd85b228869183.685c55927d3f7.webp"
            alt="Campanha OOH Saben Pay"
          />
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
            <span>06</span>
            <span>Papelaria</span>
          </motion.div>
          <motion.div className={styles.prose} variants={fadeUp}>
            <p>
              Os cartões de visita foram projetados em <strong>fundo escuro com impressão diferenciada</strong> — o asterisco aparece em relevo no verso, comunicando atenção ao detalhe que a marca promete aos seus usuários. O contraste entre o cartão escuro e o logo em spot transmite <strong>exclusividade e confiança</strong> — exatamente o posicionamento desejado para um banco digital que quer ser levado a sério.
            </p>
          </motion.div>
        </div>
        <motion.div className={styles.fullImg} variants={fadeUp}>
          <img
            src="/assets/saben/d9acf7228869183.685ab475900b5.webp"
            alt="Cartões de visita Saben Pay"
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
            <span>07</span>
            <span>Motion Design</span>
          </motion.div>
          <motion.div className={styles.prose} variants={fadeUp}>
            <p>
              O asterisco ganhou vida em animações pensadas para <strong>stories, reels e anúncios em vídeo</strong>. O movimento parte sempre do centro para as pontas — expansão, crescimento, abertura de possibilidades. A linguagem de motion segue o mesmo princípio da identidade: <strong>clean, direto e com o verde como acento</strong>.
            </p>
          </motion.div>
        </div>
        <motion.div className={styles.videoGrid} variants={stagger}>
          {videos.map((src, i) => (
            <motion.div key={i} className={styles.videoItem} variants={fadeUp}>
              <video
                src={src}
                autoPlay
                muted
                loop
                playsInline
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* ── Footer ── */}
      <div className={styles.footerWrapper}>
        <Footer />
      </div>

    </main>
  )
}
