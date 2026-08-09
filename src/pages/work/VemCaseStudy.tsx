import { motion } from 'framer-motion'
import { ArrowUpRight, Route, Layers, Smartphone, PenTool } from 'lucide-react'
import { Footer } from '@/components/layout/Footer'
import { SEO } from '@/components/SEO'
import { CaseSection } from '@/components/casestudy/CaseSection'
import { CaseLayout, CaseHero, CaseMeta } from '@/components/casestudy/CaseLayout'
import { ProcessStep } from '@/components/casestudy/ProcessStep'
import { InsightCard } from '@/components/casestudy/InsightCard'
import { PhoneMockupGallery } from '@/components/casestudy/PhoneMockupGallery'
import { LaptopMockupGallery } from '@/components/casestudy/LaptopMockupGallery'
import { Divider } from '@/components/ui/Divider'
import styles from './VemCaseStudy.module.css'

const v = (name: string) => `/assets/vem/${name}`

/* ─── DATA ───────────────────────────────────────────── */
const processSteps = [
  {
    number: '01',
    phase: 'Contexto',
    title: 'Entender o ecossistema do cartão VEM',
    description: 'Antes de desenhar, busquei entender o produto: os 5 tipos de cartão (Comum, Estudante, Trabalhador, Livre Acesso e Infantil), suas regras e as principais jornadas de quem usa o transporte público da Região Metropolitana do Recife. Isso orientou as decisões de navegação e de interface.',
    methods: ['Análise do produto atual', 'Mapeamento das jornadas', 'Estudo dos tipos de cartão'],
  },
  {
    number: '02',
    phase: 'Fluxos',
    title: 'Revisar a navegação e reduzir fricção',
    description: 'Contribuí para a revisão dos fluxos de navegação, com atenção especial ao onboarding. O objetivo foi reorganizar as jornadas para reduzir pontos de fricção e tornar tarefas comuns (como recarregar e consultar o cartão) mais diretas.',
    methods: ['Revisão de fluxos', 'Arquitetura de informação', 'Foco no onboarding'],
  },
  {
    number: '03',
    phase: 'Interfaces',
    title: 'Criar novas telas em desktop e mobile',
    description: 'Criei novas interfaces trabalhando desktop e mobile de forma consistente, priorizando clareza e linguagem simples, já que o VEM é usado por um público amplo e com diferentes níveis de familiaridade digital.',
    methods: ['UI Design', 'Design responsivo', 'Linguagem simples'],
  },
  {
    number: '04',
    phase: 'Prototipação',
    title: 'Prototipar e apoiar a evolução da experiência',
    description: 'Prototipei as telas para validar as decisões de fluxo e interface, apoiando a evolução da experiência ao longo do processo, em colaboração com o time.',
    methods: ['Protótipos de alta fidelidade', 'Prototipação de fluxos', 'Colaboração com o time'],
  },
]

const contributions = [
  {
    icon: Route,
    title: 'Revisão de fluxos',
    body: 'Contribuí para a revisão dos fluxos de navegação, reorganizando as jornadas para reduzir pontos de fricção.',
  },
  {
    icon: Smartphone,
    title: 'Onboarding',
    body: 'Foco na redução de atrito no processo de onboarding, para facilitar a entrada de novos usuários.',
  },
  {
    icon: PenTool,
    title: 'Novas interfaces',
    body: 'Criação de novas telas em desktop e mobile, com atenção à clareza e à consistência visual.',
  },
  {
    icon: Layers,
    title: 'Prototipação',
    body: 'Prototipação em alta fidelidade para validar decisões de design junto ao time.',
  },
]

/* ─── COMPONENT ──────────────────────────────────────── */
export function VemCaseStudy() {
  return (
    <main className={styles.page}>
      <SEO title="VEM App" description="Contribuição no redesenho do app VEM, cartão inteligente do transporte público do Recife." />
      <CaseLayout sections={['Visão Geral', 'Minha Contribuição', 'Processo de Design', 'Telas Finais', 'Reflexão']}>

      {/* ─── HERO ─── */}
      <CaseHero
        eyebrow="VEM • Mobilidade urbana • 2024"
        title="Contribuição no redesenho do cartão inteligente do transporte público do Recife"
        liveUrl="https://cartaovem.com.br/"
        image={{ src: v('capa.png'), alt: 'Portal VEM em desktop e mobile' }}
      />

      <CaseMeta
        items={[
          { label: 'Meu papel', value: 'UX/UI Designer (na Caju Agência Digital)' },
          { label: 'Período', value: '2024' },
          { label: 'Contexto', value: 'Projeto com equipe multidisciplinar' },
          { label: 'Contribuição', value: 'Revisão de fluxos · Novas interfaces · Prototipação' },
        ]}
      />

      {/* ─── 01 · VISÃO GERAL ─── */}
      <CaseSection index="01" label="Visão Geral" title="O cartão que move Recife">
        <div className={styles.prose}>
          <p>
            O VEM (Vale Eletrônico Metropolitano) é o sistema de bilhetagem
            eletrônica do transporte público da <strong>Região Metropolitana do Recife</strong>.
            É o cartão que substitui o dinheiro em espécie para pagar passagens de ônibus
            e BRT, facilitando a integração entre linhas.
          </p>
          <p>
            São <strong>5 tipos de cartão</strong>: Comum, Estudante (meia-passagem),
            Trabalhador (fornecido pelo empregador), Livre Acesso (para pessoas com deficiência)
            e Infantil. Cada um com regras, públicos e fluxos distintos.
          </p>
          <p>
            Atuei como UX/UI Designer na Caju Agência Digital, colaborando com uma equipe
            multidisciplinar no redesenho do aplicativo. Minha contribuição envolveu a revisão
            dos fluxos de navegação, a criação de novas interfaces e a prototipação, sempre
            buscando equilibrar as necessidades do negócio e a experiência do usuário.
          </p>
        </div>

        <div className={styles.contextStatsRow}>
          <div className={styles.contextStatItem}>
            <span className={styles.contextStatValue}>5</span>
            <span className={styles.contextStatTitle}>Tipos de cartão</span>
            <span className={styles.contextStatDesc}>Comum, Estudante, Trabalhador, Livre Acesso e Infantil, cada um com regras próprias</span>
          </div>
          <div className={styles.contextStatDivider} />
          <div className={styles.contextStatItem}>
            <span className={styles.contextStatValue}>RMR</span>
            <span className={styles.contextStatTitle}>Região Metropolitana do Recife</span>
            <span className={styles.contextStatDesc}>Público amplo que depende do transporte público para se locomover diariamente</span>
          </div>
          <div className={styles.contextStatDivider} />
          <div className={styles.contextStatItem}>
            <span className={styles.contextStatValue}>Web + App</span>
            <span className={styles.contextStatTitle}>Desktop e mobile</span>
            <span className={styles.contextStatDesc}>Interfaces pensadas de forma consistente entre os dois contextos de uso</span>
          </div>
        </div>
      </CaseSection>

      {/* ─── 02 · MINHA CONTRIBUIÇÃO ─── */}
      <CaseSection index="02" label="Minha Contribuição" title="O que eu fiz no projeto" tinted>
        <div className={styles.prose} style={{ maxWidth: 720 }}>
          <p>
            Participei do redesenho do aplicativo mobile, contribuindo para a revisão dos
            fluxos de navegação, a criação de novas interfaces e a prototipação. Apoiei a
            evolução da experiência do usuário por meio da reorganização das jornadas e da
            redução de pontos de fricção no processo de onboarding.
          </p>
        </div>

        <div className={styles.insightGrid}>
          {contributions.map((insight, i) => (
            <InsightCard key={insight.title} {...insight} index={i} />
          ))}
        </div>
      </CaseSection>

      {/* ─── 03 · PROCESSO DE DESIGN ─── */}
      <CaseSection index="03" label="Processo de Design" title="Como eu trabalhei">
        <div className={styles.processGrid}>
          {processSteps.map((step, i) => (
            <ProcessStep key={step.number} {...step} index={i} />
          ))}
        </div>

        <motion.div
          className={styles.wireframeBlock}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8%' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.wireframeLabel}>
            <span>Wireframes</span>
            <span>Estruturação das telas antes do alta fidelidade</span>
          </div>
          <img
            src={v('wireframe.png')}
            alt="Wireframes do portal VEM, visão geral das telas"
            className={styles.wireframeImg}
          />
        </motion.div>
      </CaseSection>

      {/* ─── 04 · TELAS FINAIS ─── */}
      <CaseSection index="04" label="Telas Finais" title="Desktop e mobile em paralelo" tinted>

        {/* Desktop */}
        <div className={styles.screenSet}>
          <p className={styles.screenSetLabel}>Desktop: principais telas</p>
          <LaptopMockupGallery
            columns={4}
            screens={[
              { id: 'home-d',  src: v('home-desktop.png'),                label: 'Home' },
              { id: 'cart-d',  src: v('cartoes-desktop.png'),              label: 'Meus Cartões' },
              { id: 'pix-d',   src: v('cartoes-receber-pix-desktop.png'),  label: 'Recarga PIX' },
              { id: 'pv-desk', src: v('primeira-via-desktop.png'),         label: 'Solicitar cartão' },
            ]}
          />
        </div>

        {/* Mobile */}
        <div className={styles.screenSet}>
          <p className={styles.screenSetLabel}>Mobile: mesmas jornadas</p>
          <PhoneMockupGallery
            columns={2}
            screens={[
              { id: 'home-m', src: v('home-mobile.png'),                 label: 'Home' },
              { id: 'cart-m', src: v('cartoes-mobile.png'),               label: 'Meus Cartões' },
              { id: 'pix-m',  src: v('cartoes-receber-pix-mobile.png'),   label: 'Recarga PIX' },
              { id: 'pv-mob', src: v('primeira-via-mobile.png'),          label: 'Solicitar cartão' },
            ]}
          />
        </div>
      </CaseSection>

      {/* ─── 05 · REFLEXÃO ─── */}
      <CaseSection index="05" label="Reflexão" title="O que esse projeto me ensinou">
        <div className={styles.learningGrid}>
          {[
            {
              n: '1',
              title: 'Serviço usado por todo tipo de pessoa',
              body: 'Projetar para um público tão amplo, com diferentes níveis de familiaridade digital, reforçou a importância de linguagem simples e de fluxos diretos.',
            },
            {
              n: '2',
              title: 'Mobile no centro da experiência',
              body: 'O celular é o canal mais usado por boa parte dos usuários, o que exige pensar cada jornada primeiro para telas pequenas.',
            },
            {
              n: '3',
              title: 'Onboarding como ponto crítico',
              body: 'Reduzir atrito na entrada faz diferença direta na percepção do produto. Pequenas reorganizações de jornada tiveram impacto na clareza.',
            },
            {
              n: '4',
              title: 'Trabalho em equipe multidisciplinar',
              body: 'Contribuir dentro de um time, alinhando design a negócio e desenvolvimento, foi parte central da entrega.',
            },
          ].map((l, i) => (
            <motion.div key={l.n} className={styles.learning} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}>
              <span className={styles.learningN}>{l.n}</span>
              <div>
                <h3 className={styles.learningTitle}>{l.title}</h3>
                <p className={styles.learningBody}>{l.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </CaseSection>

      {/* ─── NEXT PROJECT ─── */}
      <section className={styles.nextProject}>
        <div className={styles.nextInner}>
          <Divider />
          <div className={styles.nextContent}>
            <p className={styles.nextLabel}>Próximo projeto</p>
            <motion.a href="/trabalho/shopping-plaza" className={styles.nextLink} whileHover={{ x: 6 }} transition={{ duration: 0.2 }}>
              <span className={styles.nextTitle}>Shopping Plaza, Central do lojista</span>
              <ArrowUpRight size={32} strokeWidth={1} />
            </motion.a>
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
