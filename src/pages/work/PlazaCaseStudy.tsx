import { ClipboardList, FileText, CreditCard, LayoutGrid } from 'lucide-react'
import { Footer } from '@/components/layout/Footer'
import { SEO } from '@/components/SEO'
import { CaseSection } from '@/components/casestudy/CaseSection'
import { CaseLayout, CaseHero, CaseMeta } from '@/components/casestudy/CaseLayout'
import { ProcessStep } from '@/components/casestudy/ProcessStep'
import { InsightCard } from '@/components/casestudy/InsightCard'
import { ScreenGallery } from '@/components/casestudy/ScreenGallery'
import styles from './PlazaCaseStudy.module.css'

const p = (name: string) => `/assets/plaza/${name}`

/* ─── DATA ───────────────────────────────────────────── */
const contributions = [
  {
    icon: LayoutGrid,
    title: 'Arquitetura de informação',
    body: 'Colaborei na definição da arquitetura de informação da plataforma, organizando os módulos de forma clara para o dia a dia do lojista.',
  },
  {
    icon: ClipboardList,
    title: 'Fluxos de cadastro e solicitação',
    body: 'Construí os fluxos de cadastro e de abertura de solicitações, estruturando etapas e formulários.',
  },
  {
    icon: FileText,
    title: 'Relatórios e comunicação',
    body: 'Trabalhei nos fluxos de relatórios e na comunicação entre lojistas e administração do shopping.',
  },
  {
    icon: CreditCard,
    title: 'Interfaces da plataforma',
    body: 'Criei as interfaces da plataforma em desktop e mobile, mantendo consistência visual entre os módulos.',
  },
]

const processSteps = [
  {
    number: '01',
    phase: 'Entendimento',
    title: 'Entender a operação e os perfis de uso',
    description:
      'Busquei entender como a comunicação entre lojistas e administração do shopping acontecia e quais módulos a plataforma precisaria cobrir: solicitações, crachás, mensalistas, circulares e projetos.',
    methods: ['Entendimento do contexto B2B', 'Mapeamento dos módulos', 'Perfis de acesso'],
  },
  {
    number: '02',
    phase: 'Arquitetura',
    title: 'Organizar os módulos em uma navegação única',
    description:
      'Colaborei na definição da arquitetura de informação, agrupando as funcionalidades de forma intuitiva para usuários que acessam o sistema em contexto operacional.',
    methods: ['Arquitetura de informação', 'Organização por perfil', 'Estrutura de navegação'],
  },
  {
    number: '03',
    phase: 'Fluxos',
    title: 'Construir os fluxos de cadastro e solicitação',
    description:
      'Estruturei os fluxos de cadastro, abertura e acompanhamento de solicitações, além dos fluxos de relatórios e comunicação entre lojista e administração.',
    methods: ['Fluxos de cadastro', 'Formulários por etapa', 'Fluxos de relatórios'],
  },
  {
    number: '04',
    phase: 'Interface',
    title: 'Desenhar telas responsivas: desktop e mobile',
    description:
      'Criei as interfaces da plataforma, com sidebar fixa no desktop e menu drawer no mobile, mantendo os mesmos fluxos e a hierarquia de informação nos dois contextos.',
    methods: ['UI Design', 'Layout desktop/mobile', 'Consistência visual'],
  },
]

const desktopScreens = [
  { id: 'db',  src: p('dashboard.png'),               label: 'Dashboard: visão geral' },
  { id: 'ds',  src: p('desktop-solicitacoes.png'),    label: 'Minhas Solicitações' },
  { id: 'dns', src: p('desktop-nova-solicitacao.png'),label: 'Nova Solicitação' },
  { id: 'dnc', src: p('desktop-nova-categoria.png'),  label: 'Nova Solicitação: Categoria' },
  { id: 'dc',  src: p('desktop-circulares.png'),      label: 'Circulares e Informativos' },
  { id: 'dn',  src: p('desktop-notificacoes.png'),    label: 'Notificações Recebidas' },
  { id: 'dcr', src: p('desktop-cracha.png'),          label: 'Liberação de Crachá' },
  { id: 'dm',  src: p('desktop-mensalistas.png'),     label: 'Mensalistas' },
  { id: 'dp',  src: p('desktop-projetos.png'),        label: 'Acompanhamento de Projetos' },
  { id: 'dco', src: p('desktop-contatos.png'),        label: 'Contatos' },
  { id: 'dmd', src: p('desktop-meus-dados.png'),      label: 'Meus Dados' },
  { id: 'dl',  src: p('desktop-login.png'),           label: 'Login' },
]

export function PlazaCaseStudy() {
  return (
    <main className={styles.page}>
      <SEO title="Shopping Plaza" description="Design da plataforma B2B de gestão de lojistas do Shopping Plaza Recife." />
      <CaseLayout sections={['Visão Geral', 'Minha Contribuição', 'Processo de Design', 'Telas Finais', 'Reflexão']}>

      {/* ── Hero ─────────────────────────────────────────── */}
      <CaseHero
        eyebrow="Shopping Plaza • Plataforma B2B • 2024"
        title="Plataforma de gestão para os lojistas do Shopping Plaza Recife"
        image={{ src: p('capa.png'), alt: 'Plaza Shopping, Central do Lojista' }}
      />

      <CaseMeta
        items={[
          { label: 'Meu papel',    value: 'UX/UI Designer (na Caju Agência Digital)' },
          { label: 'Período',      value: '2024' },
          { label: 'Contexto',     value: 'Plataforma B2B · equipe multidisciplinar' },
          { label: 'Contribuição', value: 'Arquitetura de informação · Fluxos · Interfaces' },
        ]}
      />

      {/* ── 01 Visão Geral ───────────────────────────────── */}
      <CaseSection index="01" label="Visão Geral" title="Uma central para conectar lojistas e administração">
        <div className={styles.prose}>
          <p>
            O Shopping Plaza Recife reúne muitos lojistas que dependem diariamente da
            estrutura operacional do shopping: manutenção, segurança, comunicados, crachás e
            gestão de vagas de mensalistas. A proposta foi reunir toda essa comunicação em uma
            <strong> plataforma B2B</strong> web e mobile, no lugar de processos manuais e dispersos.
          </p>
          <p>
            Atuei como UX/UI Designer na Caju Agência Digital. Colaborei na definição da
            arquitetura de informação, na construção dos fluxos de cadastro, relatórios e
            comunicação entre lojistas e administração, além da criação das interfaces da
            plataforma.
          </p>
        </div>
        <div className={styles.contextStatsRow}>
          <div className={styles.contextStatItem}>
            <span className={styles.contextStatValue}>B2B</span>
            <span className={styles.contextStatTitle}>Central do lojista</span>
            <span className={styles.contextStatDesc}>Canal único entre lojistas e administração do shopping</span>
          </div>
          <div className={styles.contextStatDivider} />
          <div className={styles.contextStatItem}>
            <span className={styles.contextStatValue}>7</span>
            <span className={styles.contextStatTitle}>Módulos</span>
            <span className={styles.contextStatDesc}>Solicitações, Crachá, Mensalistas, Circulares, Projetos, Notificações e Contatos</span>
          </div>
          <div className={styles.contextStatDivider} />
          <div className={styles.contextStatItem}>
            <span className={styles.contextStatValue}>Web + App</span>
            <span className={styles.contextStatTitle}>Desktop e mobile</span>
            <span className={styles.contextStatDesc}>Mesmos fluxos e hierarquia de informação nos dois contextos</span>
          </div>
        </div>
      </CaseSection>

      {/* ── 02 Minha Contribuição ────────────────────────── */}
      <CaseSection index="02" label="Minha Contribuição" title="O que eu fiz no projeto" tinted>
        <div className={styles.prose} style={{ maxWidth: 720 }}>
          <p>
            Atuei no design da plataforma B2B para gestão de lojistas, colaborando na definição
            da arquitetura de informação, na construção dos fluxos de cadastro, relatórios e
            comunicação entre lojistas e administração do shopping, além da criação das
            interfaces da plataforma.
          </p>
        </div>
        <div className={styles.insightGrid}>
          {contributions.map((ins, i) => (
            <InsightCard key={ins.title} icon={ins.icon} title={ins.title} body={ins.body} index={i} />
          ))}
        </div>
      </CaseSection>

      {/* ── 03 Processo de Design ────────────────────────── */}
      <CaseSection index="03" label="Processo de Design" title="Do entendimento à interface" tinted>
        <div className={styles.processGrid}>
          {processSteps.map((step, i) => (
            <ProcessStep key={step.number} {...step} index={i} />
          ))}
        </div>
      </CaseSection>

      {/* ── 04 Telas Finais ──────────────────────────────── */}
      <CaseSection index="04" label="Telas Finais" title="Desktop: sidebar fixa e navegação por módulo">
        <div className={styles.prose}>
          <p>
            No desktop, a navegação é feita por uma sidebar fixa à esquerda. A área de conteúdo
            adapta o layout conforme o módulo: listagem em cards para solicitações, formulário
            por etapas para nova solicitação, e tabela para mensalistas.
          </p>
        </div>
        <ScreenGallery screens={desktopScreens} columns={2} caption="Telas dos principais módulos da Central de Atendimento ao Lojista" />
      </CaseSection>

      {/* ── 05 Reflexão ──────────────────────────────────── */}
      <CaseSection index="05" label="Reflexão" title="O que esse projeto me ensinou" tinted>
        <div className={styles.prose}>
          <p>
            Projetar uma plataforma B2B interna exige calibrar o nível certo de complexidade. O
            lojista acessa o sistema em contexto operacional, então os fluxos precisam ser claros
            e diretos, com linguagem do dia a dia e baixa dependência de treinamento.
          </p>
          <p>
            Organizar bem a arquitetura de informação foi o que deu coerência ao produto: com
            vários módulos diferentes, agrupá-los de forma intuitiva foi tão importante quanto o
            desenho de cada tela.
          </p>
        </div>
      </CaseSection>
      </CaseLayout>

      <div className={styles.footerWrapper}>
        <Footer />
      </div>
    </main>
  )
}
