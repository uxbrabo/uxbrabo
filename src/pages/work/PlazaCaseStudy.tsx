import { motion } from 'framer-motion'
import { Footer } from '@/components/layout/Footer'
import { SEO } from '@/components/SEO'
import { CaseSection } from '@/components/casestudy/CaseSection'
import { MetricCard } from '@/components/casestudy/MetricCard'
import { BarChart } from '@/components/casestudy/BarChart'
import { DonutChart } from '@/components/casestudy/DonutChart'
import { ProcessStep } from '@/components/casestudy/ProcessStep'
import { InsightCard } from '@/components/casestudy/InsightCard'
import { ScreenGallery } from '@/components/casestudy/ScreenGallery'
import { QuoteBlock } from '@/components/casestudy/QuoteBlock'
import { Divider } from '@/components/ui/Divider'
import styles from './PlazaCaseStudy.module.css'

const p = (name: string) => `/assets/plaza/${name}`

/* ─── SVG AVATARS ────────────────────────────────────── */
function AvatarPatricia() {
  return (
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" width="72" height="72">
      {/* Background */}
      <circle cx="60" cy="60" r="60" fill="#F2E0CC" />
      {/* Body / blouse */}
      <path d="M8 120 Q8 92 28 86 Q42 92 60 92 Q78 92 92 86 Q112 92 112 120Z" fill="#B07D62" />
      {/* Neck */}
      <rect x="53" y="74" width="14" height="20" rx="5" fill="#D9996A" />
      {/* Hair back */}
      <ellipse cx="60" cy="50" rx="27" ry="30" fill="#6B3A20" />
      {/* Head */}
      <ellipse cx="60" cy="54" rx="23" ry="25" fill="#D9996A" />
      {/* Hair top */}
      <path d="M37 46 Q37 26 60 24 Q83 26 83 46 Q80 36 72 32 Q66 28 60 28 Q54 28 48 32 Q40 36 37 46Z" fill="#6B3A20" />
      {/* Hair sides long */}
      <path d="M37 46 Q33 58 35 74 Q38 68 38 56Z" fill="#6B3A20" />
      <path d="M83 46 Q87 58 85 74 Q82 68 82 56Z" fill="#6B3A20" />
      {/* Eyes */}
      <ellipse cx="52" cy="53" rx="3.5" ry="3.5" fill="#2A1508" />
      <ellipse cx="68" cy="53" rx="3.5" ry="3.5" fill="#2A1508" />
      {/* Eye shine */}
      <circle cx="54" cy="51.5" r="1.2" fill="rgba(255,255,255,0.7)" />
      <circle cx="70" cy="51.5" r="1.2" fill="rgba(255,255,255,0.7)" />
      {/* Eyebrows */}
      <path d="M48 47 Q52 45 56 47" stroke="#6B3A20" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M64 47 Q68 45 72 47" stroke="#6B3A20" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Nose */}
      <path d="M58 58 Q60 62 62 58" stroke="#C07A50" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Smile */}
      <path d="M53 67 Q60 73 67 67" stroke="#C07A50" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  )
}

function AvatarMarcos() {
  return (
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" width="72" height="72">
      {/* Background */}
      <circle cx="60" cy="60" r="60" fill="#D9E8F5" />
      {/* Body / polo */}
      <path d="M8 120 Q8 92 28 86 Q42 92 60 92 Q78 92 92 86 Q112 92 112 120Z" fill="#1E3A5F" />
      {/* Collar */}
      <path d="M48 88 L60 96 L72 88 L68 86 L60 92 L52 86Z" fill="#E8E8E8" />
      {/* Neck */}
      <rect x="53" y="74" width="14" height="20" rx="5" fill="#B8762E" />
      {/* Head */}
      <ellipse cx="60" cy="54" rx="24" ry="26" fill="#C68030" />
      {/* Hair — short, close cut */}
      <path d="M36 50 Q36 26 60 24 Q84 26 84 50 Q82 40 74 34 Q68 28 60 28 Q52 28 46 34 Q38 40 36 50Z" fill="#1A0E06" />
      {/* Hair fade sides */}
      <path d="M36 50 Q34 56 36 64 Q38 60 38 54Z" fill="#1A0E06" />
      <path d="M84 50 Q86 56 84 64 Q82 60 82 54Z" fill="#1A0E06" />
      {/* Eyes */}
      <ellipse cx="52" cy="54" rx="3.5" ry="3.5" fill="#1A0E06" />
      <ellipse cx="68" cy="54" rx="3.5" ry="3.5" fill="#1A0E06" />
      {/* Eye shine */}
      <circle cx="54" cy="52.5" r="1.2" fill="rgba(255,255,255,0.7)" />
      <circle cx="70" cy="52.5" r="1.2" fill="rgba(255,255,255,0.7)" />
      {/* Eyebrows */}
      <path d="M48 48 Q52 46 56 48" stroke="#1A0E06" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M64 48 Q68 46 72 48" stroke="#1A0E06" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Nose */}
      <path d="M58 59 Q60 63 62 59" stroke="#A0671A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Subtle smile */}
      <path d="M54 68 Q60 73 66 68" stroke="#A0671A" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  )
}

/* ─── DATA ───────────────────────────────────────────── */
const callReasonsData = [
  { label: 'Abertura de solicitação via formulário físico', value: 44 },
  { label: 'Acompanhamento de chamado em planilha compartilhada', value: 29 },
  { label: 'Consulta de circular em pasta de arquivo físico', value: 16 },
  { label: 'Solicitação de crachá com documentação em papel', value: 11 },
]

const painPointsData = [
  { label: 'Abertura de chamado exigia formulário físico ou ida ao administrativo', value: 91 },
  { label: 'Sem visibilidade do status após registrar solicitação', value: 87 },
  { label: 'Circulares chegavam por WhatsApp ou papel avulso', value: 83 },
  { label: 'Liberação de crachá exigia presença física com documentação', value: 78 },
  { label: 'Gestão de mensalistas centralizada em planilha sem acesso do lojista', value: 72 },
]

const requestTypeData = [
  { label: 'Manutenção e infraestrutura', value: 45 },
  { label: 'Segurança e controle de acesso', value: 28 },
  { label: 'Comunicação e circulares', value: 18 },
  { label: 'Acompanhamento de projetos', value: 9 },
]

const afterData = [
  { label: 'Solicitações abertas digitalmente', value: 94 },
  { label: 'Satisfação geral dos lojistas', value: 88 },
  { label: 'Redução de registros presenciais e físicos', value: 65 },
  { label: 'Crachás liberados sem ida presencial', value: 91 },
]

const insights = [
  {
    icon: '📋',
    title: 'Processo manual e fragmentado',
    body: 'Cada tipo de solicitação seguia um caminho diferente: formulário físico, planilha compartilhada, pasta de arquivo ou presença no administrativo. Não havia um único canal — havia vários processos desconectados.',
  },
  {
    icon: '🔍',
    title: 'Sem rastreabilidade',
    body: 'Após entregar um formulário ou registrar uma entrada na planilha, o lojista não tinha como acompanhar o status — gerava idas desnecessárias ao administrativo e retrabalho para a equipe.',
  },
  {
    icon: '📄',
    title: 'Circulares sem confirmação de leitura',
    body: 'Comunicados importantes chegavam por WhatsApp, e-mail avulso ou papel impresso. O shopping não tinha garantia de que a informação chegou ao responsável certo.',
  },
  {
    icon: '🪪',
    title: 'Crachá com documentação em papel',
    body: 'Qualquer liberação ou cancelamento de crachá exigia presença física no administrativo com documentação física — interrompendo a operação da loja por horas.',
  },
]

const processSteps = [
  {
    number: '01',
    phase: 'Descoberta',
    title: 'Mapear o fluxo real antes de projetar qualquer tela',
    description:
      'O ponto de partida foi entender como o processo funcionava na prática: como um lojista abria um chamado? Fazíamos shadowing com a equipe do SAC, acompanhamos o preenchimento de formulários físicos e analisamos 6 meses de registros em planilha. Ficou claro que não havia um único fluxo — havia vários processos paralelos e desconectados, todos manuais.',
    methods: ['Shadowing com atendentes do SAC', 'Entrevistas com lojistas (n=14)', 'Análise de planilhas e registros físicos', 'Mapeamento do fluxo AS IS'],
  },
  {
    number: '02',
    phase: 'Definição',
    title: 'Sete módulos, uma experiência unificada',
    description:
      'Com base nos fluxos mapeados, definimos os módulos que a plataforma precisaria cobrir. O desafio era agrupar tudo de forma intuitiva para usuários B2B que não são tech-savvy e que acessam o sistema em contexto operacional — às vezes sob pressão, com pouco tempo.',
    methods: ['Card sorting com lojistas', 'Arquitetura de informação', 'Mapeamento por perfil de usuário', 'Priorização MoSCoW'],
  },
  {
    number: '03',
    phase: 'Design',
    title: 'Desktop com sidebar fixa, mobile com drawer',
    description:
      'O lojista acessa a plataforma do escritório e da loja. Projetamos uma experiência responsiva onde o desktop usa sidebar fixa e o mobile usa menu drawer — mantendo os mesmos fluxos e hierarquia de informação. O design system adotou teal como cor primária, alinhado à identidade do Plaza Shopping.',
    methods: ['Wireframes de baixa fidelidade', 'Protótipo interativo (Adobe XD)', 'Design system completo', 'Layout adaptativo desktop/mobile'],
  },
  {
    number: '04',
    phase: 'Teste',
    title: 'Validação com lojistas e time operacional',
    description:
      'Testes com 8 lojistas e 4 atendentes do SAC revelaram que o fluxo de Nova Solicitação precisava de uma etapa extra para seleção de categoria antes do formulário. Essa iteração reduziu erros de categorização de chamados em 60% no reteste.',
    methods: ['Teste de usabilidade (n=12)', 'Análise de erros por tarefa', 'Iteração do fluxo de solicitação', 'Aprovação com stakeholders'],
  },
]

const desktopScreens = [
  { id: 'db',  src: p('dashboard.png'),               label: 'Dashboard — visão geral' },
  { id: 'ds',  src: p('desktop-solicitacoes.png'),    label: 'Minhas Solicitações' },
  { id: 'dns', src: p('desktop-nova-solicitacao.png'),label: 'Nova Solicitação' },
  { id: 'dnc', src: p('desktop-nova-categoria.png'),  label: 'Nova Solicitação — Categoria' },
  { id: 'dc',  src: p('desktop-circulares.png'),      label: 'Circulares e Informativos' },
  { id: 'dn',  src: p('desktop-notificacoes.png'),    label: 'Notificações Recebidas' },
  { id: 'dcr', src: p('desktop-cracha.png'),          label: 'Liberação de Crachá' },
  { id: 'dm',  src: p('desktop-mensalistas.png'),     label: 'Mensalistas' },
  { id: 'dp',  src: p('desktop-projetos.png'),        label: 'Acompanhamento de Projetos' },
  { id: 'dco', src: p('desktop-contatos.png'),        label: 'Contatos' },
  { id: 'dmd', src: p('desktop-meus-dados.png'),      label: 'Meus Dados' },
  { id: 'dl',  src: p('desktop-login.png'),           label: 'Login' },
]

/* ─── PERSONAS ───────────────────────────────────────── */
const personas = [
  {
    name: 'Patricia Santos',
    avatar: <AvatarPatricia />,
    role: 'Responsável de loja — Moda',
    age: '38 anos · Gerente',
    access: 'Acesso completo',
    accessDesc: 'Solicitações, Crachá, Mensalistas, Circulares, Projetos, Notificações e Contatos',
    goals: [
      'Resolver solicitações sem sair da loja',
      'Acompanhar o status dos chamados em tempo real',
      'Liberar e cancelar crachás de funcionários online',
      'Receber circulares com confirmação de leitura',
    ],
    pains: [
      'Perde até 40 min por dia em filas de telefone',
      'Não sabe se o chamado foi atendido ou não',
      'Circulares importantes perdidas no WhatsApp',
      'Precisa ir ao administrativo para cada crachá',
    ],
    context: 'Alterna entre o notebook do escritório e o celular no salão de vendas. Alta frequência de contato com o SAC.',
  },
  {
    name: 'Marcos Oliveira',
    avatar: <AvatarMarcos />,
    role: 'Supervisor de operações — Alimentação',
    age: '29 anos · Supervisor',
    access: 'Acesso restrito',
    accessDesc: 'Solicitações, Notificações, Circulares e Informativos, Contatos',
    goals: [
      'Abrir solicitações de manutenção rapidamente',
      'Consultar informativos e comunicados do shopping',
      'Receber notificações sobre o status dos chamados',
    ],
    pains: [
      'Não tem acesso a funções que precisaria usar',
      'Recebe circulares por canais informais e perde prazos',
      'Depende do responsável para ações que poderia fazer',
    ],
    context: 'Acessa principalmente pelo smartphone durante o turno. Perfil menos tech-savvy, precisa de interface simples.',
  },
]

export function PlazaCaseStudy() {
  return (
    <main className={styles.page}>
      <SEO title="Shopping Plaza" description="Case study do redesign digital do Shopping Plaza." />

      {/* ── Hero ─────────────────────────────────────────── */}
      <motion.section
        className={styles.hero}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img src={p('capa.png')} alt="Plaza Shopping — Central do Lojista" className={styles.heroBgImg} fetchPriority="high" />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <motion.div
            className={styles.heroMeta}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <span>UX Design · UI Design</span>
            <span>2024</span>
          </motion.div>
          <motion.p
            className={styles.heroTagline}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            Plataforma web e mobile que substituiu formulários físicos e planilhas do Shopping Plaza Recife —
            chamados, crachás, circulares e mensalistas em um único canal rastreável.
          </motion.p>
        </div>
      </motion.section>

      {/* ── Overview strip ───────────────────────────────── */}
      <div className={styles.overviewStrip}>
        <div className={styles.overviewInner}>
          {[
            { label: 'Meu papel',    value: 'Lead UX/UI Designer' },
            { label: 'Plataforma',   value: 'Web · Mobile' },
            { label: 'Duração',      value: '4 meses' },
            { label: 'Time',         value: '1 Designer · 3 Devs · 1 PM' },
            { label: 'Entregáveis',  value: 'Research · 7 módulos · Design System · Handoff' },
          ].map((item) => (
            <div key={item.label} className={styles.overviewItem}>
              <span className={styles.overviewLabel}>{item.label}</span>
              <span className={styles.overviewValue}>{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── 01 Contexto ──────────────────────────────────── */}
      <CaseSection index="01" label="Contexto" title="Um shopping com 150 lojas e uma operação ainda no papel">
        <div className={styles.prose}>
          <p>
            O Shopping Plaza Recife tem mais de <strong>150 lojistas</strong> que dependem diariamente da estrutura operacional do shopping — manutenção, segurança, comunicados, crachás e gestão de vagas de mensalistas. Toda essa comunicação era gerenciada de forma manual: <strong>formulários físicos, planilhas Excel compartilhadas e pastas de arquivo no administrativo</strong>.
          </p>
          <p>
            Para abrir um chamado, o lojista precisava preencher um formulário em papel e entregá-lo pessoalmente. Para consultar o status, ia ao administrativo ou aguardava retorno. Não havia rastreabilidade, não havia histórico acessível e a equipe operacional conciliava tudo em planilhas — sem visibilidade em tempo real.
          </p>
        </div>
        <div className={styles.contextStatsRow}>
          <div className={styles.contextStatItem}>
            <span className={styles.contextStatValue}>150+</span>
            <span className={styles.contextStatTitle}>Lojistas atendidos</span>
            <span className={styles.contextStatDesc}>Lojas ativas no Shopping Plaza Recife usando a Central</span>
          </div>
          <div className={styles.contextStatDivider} />
          <div className={styles.contextStatItem}>
            <span className={styles.contextStatValue}>7</span>
            <span className={styles.contextStatTitle}>Módulos integrados</span>
            <span className={styles.contextStatDesc}>Solicitações, Crachá, Mensalistas, Circulares, Projetos, Notificações e Contatos</span>
          </div>
          <div className={styles.contextStatDivider} />
          <div className={styles.contextStatItem}>
            <span className={styles.contextStatValue}>−65%</span>
            <span className={styles.contextStatTitle}>Processos presenciais</span>
            <span className={styles.contextStatDesc}>Redução em registros físicos e deslocamentos ao administrativo após o lançamento</span>
          </div>
        </div>
      </CaseSection>

      {/* ── 02 Problema ──────────────────────────────────── */}
      <CaseSection index="02" label="Problema" title="Processos paralelos, sem rastreabilidade e sem escala" tinted>
        <div className={styles.prose}>
          <p>
            Abrir um chamado, liberar um crachá ou consultar uma circular — cada uma dessas ações seguia um fluxo diferente, manual e desconectado. Formulários físicos se perdiam, planilhas ficavam desatualizadas e o lojista não tinha visibilidade alguma após registrar uma solicitação. O problema não era apenas operacional: era de confiança no processo.
          </p>
        </div>
        <div className={styles.insightGrid}>
          {insights.map((ins, i) => (
            <InsightCard key={ins.title} icon={ins.icon} title={ins.title} body={ins.body} index={i} />
          ))}
        </div>
        <Divider />
        <div className={styles.chartBlock}>
          <h3 className={styles.chartTitle}>Dores mapeadas com lojistas entrevistados</h3>
          <BarChart data={painPointsData} />
        </div>
      </CaseSection>

      {/* ── 03 Pesquisa ──────────────────────────────────── */}
      <CaseSection index="03" label="Pesquisa" title="14 entrevistas, 6 meses de planilhas e um padrão claro">
        <div className={styles.prose}>
          <p>
            Conduzimos entrevistas em profundidade com 14 responsáveis de lojas de segmentos variados — alimentação, moda, serviços e âncoras — e sessões de shadowing com a equipe operacional do SAC. Cruzamos os dados qualitativos com a análise de 6 meses de registros em planilha para identificar padrões de volume, tipo de solicitação e tempo de resolução. O resultado revelou um processo operacionalmente insustentável — e completamente invisível para o lojista.
          </p>
        </div>

        <QuoteBlock
          quote="Cada solicitação era um processo diferente. Pra manutenção você ia ao administrativo e preenchia um formulário. Pra crachá era outro papel, outro balcão. E depois você ficava sem saber se alguém tinha visto, se ia ser resolvido, quando ia acontecer."
          author="Gerente de loja, segmento de moda"
        />

        {/* Motivos das ligações */}
        <div className={styles.chartBlock}>
          <h3 className={styles.chartTitle}>Como era feito o registro de cada tipo de solicitação</h3>
          <BarChart data={callReasonsData} />
        </div>

        <Divider />

        {/* Distribuição de solicitações */}
        <div className={styles.chartBlock}>
          <h3 className={styles.chartTitle}>Distribuição dos tipos de solicitação (histórico SAC)</h3>
          <BarChart data={requestTypeData} color="gray" />
        </div>

        <Divider />

        {/* Device usage - donuts */}
        <div>
          <h3 className={styles.chartTitle}>Perfil de acesso dos lojistas entrevistados</h3>
          <div className={styles.donutRow}>
            <DonutChart value={92} label="Usam smartphone no trabalho" sublabel="n=14" size={180} />
            <DonutChart value={68} label="Acessam sistemas pelo notebook" sublabel="n=14" size={180} />
            <DonutChart value={61} label="Alternam entre os dois dispositivos" sublabel="n=14" size={180} />
            <DonutChart value={79} label="Preferem autoatendimento ao processo presencial" sublabel="n=14" size={180} />
          </div>
        </div>

        <Divider />

        {/* Métricas de pesquisa */}
        <div className={styles.metricsGrid}>
          <MetricCard value="14" label="Lojistas entrevistados" description="Segmentos de alimentação, moda, serviços e âncoras" index={0} />
          <MetricCard value="6 meses" label="Registros de chamados analisados" description="Histórico do SAC para identificar padrões de volume e tipo" index={1} />
          <MetricCard value="40 min" label="Tempo médio por solicitação" description="Da saída da loja até entrega do formulário físico no administrativo e retorno" index={2} />
          <MetricCard value="2 perfis" label="De usuário definidos" description="Responsável de loja (acesso completo) e demais lojistas (restrito)" index={3} />
        </div>
      </CaseSection>

      {/* ── 04 Personas ──────────────────────────────────── */}
      <CaseSection index="04" label="Personas" title="Dois perfis, experiências distintas dentro do mesmo sistema" tinted>
        <div className={styles.prose}>
          <p>
            A plataforma serve dois tipos de usuário com necessidades e permissões diferentes. O <strong>Responsável de loja</strong> tem acesso completo a todos os módulos — incluindo crachás e mensalistas. Os <strong>demais lojistas</strong> têm acesso restrito, sem as funcionalidades administrativas. Essa distinção foi determinante para a arquitetura de navegação.
          </p>
        </div>
        <div className={styles.personaDual}>
          {personas.map((persona, idx) => (
            <motion.div
              key={persona.name}
              className={styles.persona}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={styles.personaHeader}>
                <div className={styles.personaAvatar}>{persona.avatar}</div>
                <div>
                  <p className={styles.personaName}>{persona.name}</p>
                  <p className={styles.personaRole}>{persona.role}</p>
                  <p className={styles.personaAge}>{persona.age}</p>
                </div>
              </div>
              <div className={styles.personaAccessBadge}>
                <span className={styles.personaAccessLabel}>{persona.access}</span>
                <p className={styles.personaAccessDesc}>{persona.accessDesc}</p>
              </div>
              <div className={styles.personaBody}>
                <div className={styles.personaCol}>
                  <p className={styles.personaColTitle}>Objetivos</p>
                  <ul className={styles.personaList}>
                    {persona.goals.map(g => <li key={g}>{g}</li>)}
                  </ul>
                </div>
                <div className={styles.personaCol}>
                  <p className={styles.personaColTitle}>Frustrações</p>
                  <ul className={styles.personaList}>
                    {persona.pains.map(p => <li key={p}>{p}</li>)}
                  </ul>
                </div>
              </div>
              <p className={styles.personaContext}>{persona.context}</p>
            </motion.div>
          ))}
        </div>
      </CaseSection>

      {/* ── 05 Processo ──────────────────────────────────── */}
      <CaseSection index="05" label="Processo" title="Do shadowing ao protótipo validado">
        <div className={styles.processGrid}>
          {processSteps.map((step, i) => (
            <ProcessStep key={step.number} {...step} index={i} />
          ))}
        </div>
      </CaseSection>

      {/* ── 06 Telas ─────────────────────────────────────── */}
      <CaseSection index="06" label="Telas" title="Desktop — sidebar fixa e navegação contextual" tinted>
        <div className={styles.prose}>
          <p>
            No desktop, a navegação é feita por uma sidebar fixa à esquerda. O header exibe o nome do usuário e acesso rápido ao perfil. A área de conteúdo adapta o layout conforme o módulo — listagem em cards para solicitações, formulário stepado para nova solicitação, e tabela para mensalistas.
          </p>
        </div>
        <ScreenGallery screens={desktopScreens} columns={2} caption="12 telas desktop — todos os módulos da Central de Atendimento ao Lojista" />
      </CaseSection>

      {/* ── 07 Resultados ────────────────────────────────── */}
      <CaseSection index="07" label="Resultados" title="Produtividade mensurada, operação desburocratizada">
        <div className={styles.prose}>
          <p>
            Após o lançamento, o volume de deslocamentos ao administrativo e de registros em papel caiu de forma expressiva. Os lojistas passaram a abrir, acompanhar e encerrar solicitações diretamente pela plataforma — sem formulário, sem ida física, sem depender de planilha. A equipe operacional ganhou visibilidade centralizada de todos os chamados em tempo real, com histórico auditável.
          </p>
        </div>

        {/* Donut charts de resultado */}
        <div>
          <h3 className={styles.chartTitle}>Indicadores pós-lançamento (primeiros 90 dias)</h3>
          <div className={styles.donutRow}>
            <DonutChart value={94} label="Solicitações abertas digitalmente" size={180} />
            <DonutChart value={91} label="Crachás liberados sem presença física" size={180} />
            <DonutChart value={88} label="Satisfação dos lojistas" size={180} />
            <DonutChart value={65} label="Redução de registros e idas presenciais" size={180} />
          </div>
        </div>

        <Divider />

        <div className={styles.chartBlock}>
          <h3 className={styles.chartTitle}>Impacto por indicador</h3>
          <BarChart data={afterData} />
        </div>

        <div className={styles.metricsGrid}>
          <MetricCard value="−65%" label="Registros presenciais" description="Redução em formulários físicos e deslocamentos ao administrativo nos primeiros 60 dias" highlight index={0} />
          <MetricCard value="94%" label="Adesão ao canal digital" description="Lojistas usando a plataforma nos primeiros 3 meses" index={1} />
          <MetricCard value="91%" label="Crachás liberados online" description="Sem necessidade de visita ao administrativo do shopping" index={2} />
          <MetricCard value="88%" label="Satisfação dos lojistas" description="Score de satisfação coletado na pesquisa pós-lançamento" highlight index={3} />
        </div>
      </CaseSection>

      {/* ── 08 Aprendizados ──────────────────────────────── */}
      <CaseSection index="08" label="Aprendizados" title="O que esse projeto me ensinou" tinted>
        <div className={styles.prose}>
          <p>
            Digitalizar um processo manual não é apenas criar uma interface — é primeiro entender <strong>por que o processo manual existe da forma que existe</strong>. Nesse projeto, o formulário físico não era um problema de tecnologia: era um problema de confiança. O lojista precisava de um comprovante tangível de que sua solicitação existia. A plataforma precisou substituir essa sensação, não só o papel.
          </p>
          <p>
            Projetar para B2B interno exige calibrar o nível certo de complexidade. O lojista não escolhe usar a plataforma — ele é orientado a usar. Isso significa que a <strong>curva de adoção precisa ser quase zero</strong>: fluxos óbvios, linguagem do contexto operacional e zero dependência de treinamento formal.
          </p>
          <p>
            A decisão de manter dois perfis de acesso distintos foi validada nos testes: quando o menu mostrava funcionalidades que o usuário não podia usar, a taxa de erro aumentava. <strong>Menos opções visíveis = menos confusão</strong>. A interface precisa refletir exatamente o que aquele usuário pode fazer — nem mais, nem menos. Essa separação foi a decisão de arquitetura mais impactante do projeto.
          </p>
        </div>
      </CaseSection>

      <div className={styles.footerWrapper}>
        <Footer />
      </div>
    </main>
  )
}
