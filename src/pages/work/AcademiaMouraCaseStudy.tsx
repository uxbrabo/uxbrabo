import { motion } from 'framer-motion'
import { Map, Trophy, Users, BarChart2, Navigation, Film, Radio, TrendingUp, Gift, ClipboardList } from 'lucide-react'
import { Footer } from '@/components/layout/Footer'
import { SEO } from '@/components/SEO'
import { CaseSection } from '@/components/casestudy/CaseSection'
import { MetricCard } from '@/components/casestudy/MetricCard'
import { BarChart } from '@/components/casestudy/BarChart'
import { DonutChart } from '@/components/casestudy/DonutChart'
import { InsightCard } from '@/components/casestudy/InsightCard'
import { ScreenGallery } from '@/components/casestudy/ScreenGallery'
import { PhoneMockupGallery } from '@/components/casestudy/PhoneMockupGallery'
import { QuoteBlock } from '@/components/casestudy/QuoteBlock'
import { Divider } from '@/components/ui/Divider'
import styles from './AcademiaMouraCaseStudy.module.css'

const a = (name: string) => `/assets/academia-moura/${name}`

/* ─── DATA ───────────────────────────────────────────── */
const painPointsData = [
  { label: 'Dificuldade de acesso a treinamentos presenciais nas regiões remotas', value: 84 },
  { label: 'Conteúdo de treinamento inconsistente entre distribuidores e regiões', value: 79 },
  { label: 'Sem registro centralizado de quem foi treinado e no quê', value: 73 },
  { label: 'Falta de incentivo para continuar aprendendo após o básico', value: 68 },
  { label: 'Gestores sem visibilidade do impacto do treinamento nas vendas', value: 61 },
]

const researchProfileData = [
  { label: 'Tiveram acesso limitado a treinamentos presenciais no último ano', value: 84 },
  { label: 'Preferem formatos de aprendizado digital ao presencial', value: 71 },
  { label: 'Nunca receberam certificado de treinamento da Moura', value: 88 },
  { label: 'Queriam progressão clara e reconhecimento pelo esforço', value: 76 },
]

const afterData = [
  { label: 'Taxa de conclusão de cursos iniciados', value: 78 },
  { label: 'Satisfação com a experiência de aprendizado', value: 86 },
  { label: 'Engajamento ativo mensal na plataforma', value: 91 },
  { label: 'Redução de custo por treinamento vs. presencial', value: 60 },
]

const insights = [
  {
    icon: Map,
    title: 'Capacitação sem escala geográfica',
    body: 'Treinamentos presenciais chegavam apenas às capitais e grandes centros. Distribuidores em cidades menores — responsáveis por parcela significativa das vendas — ficavam meses sem atualização de produto ou técnica de vendas.',
  },
  {
    icon: Trophy,
    title: 'Sem incentivo para ir além do básico',
    body: 'Sem um mecanismo de reconhecimento, distribuidores e revendedores completavam apenas o conteúdo exigido. Não havia nenhuma razão para explorar cursos complementares ou aprofundar conhecimento.',
  },
  {
    icon: Users,
    title: 'Dois perfis com necessidades distintas',
    body: 'Distribuidores gerenciam estoques e logística — precisam de gestão financeira e visão operacional. Revendedores estão na ponta de vendas — precisam de técnica comercial e fidelização de cliente. A capacitação tratava os dois da mesma forma.',
  },
  {
    icon: BarChart2,
    title: 'Gestão no escuro',
    body: 'Gerentes regionais não tinham como saber quais membros da rede foram treinados, o que absorveram ou como isso impactava o desempenho. Decisões de suporte e incentivo eram baseadas em intuição.',
  },
]

const modules = [
  {
    icon: Navigation,
    title: 'Trilhas de Desenvolvimento',
    desc: '5 trilhas temáticas — Varejo Automotivo, Financeiro, Vendas, Marketing e Pessoas — com progressão sequencial e certificado ao concluir.',
  },
  {
    icon: Film,
    title: 'Cursos e Aulas em Vídeo',
    desc: 'Biblioteca de cursos em vídeo com tabs de Quiz, Material de Apoio, Dúvidas Frequentes e Avaliações integradas ao mesmo fluxo.',
  },
  {
    icon: Radio,
    title: 'Conexão Revenda',
    desc: 'Hub de conteúdo especializado para revendedores — vídeos curtos de técnica de vendas, fidelização e gestão de clientes no ponto de venda.',
  },
  {
    icon: TrendingUp,
    title: 'Meu Progresso',
    desc: 'Painel pessoal com pontos, moedas e classificação Bronze/Prata/Ouro. Extrato de movimentações e regras de gamificação com transparência total.',
  },
  {
    icon: Gift,
    title: 'Loja de Brindes',
    desc: 'Catálogo de itens resgatáveis com moedas acumuladas — brindes com a identidade Moura que reforçam pertencimento à rede.',
  },
  {
    icon: ClipboardList,
    title: 'Relatórios',
    desc: 'Painel administrativo para gestores com visibilidade de engajamento, conclusão por membro, desempenho por trilha e evolução da rede.',
  },
]

const gamLevels = [
  {
    badge: '🥉 Bronze',
    range: '0 — 2.499',
    label: 'pontos',
    desc: 'Nível de entrada. Acesso completo ao catálogo de cursos e trilhas básicas.',
  },
  {
    badge: '🥈 Prata',
    range: '2.500 — 7.499',
    label: 'pontos',
    desc: 'Acesso a conteúdos exclusivos e prioridade no suporte da equipe Moura.',
  },
  {
    badge: '🥇 Ouro',
    range: '7.500+',
    label: 'pontos',
    desc: 'Máximo reconhecimento. Benefícios comerciais e destaque na rede regional.',
  },
]

const processSteps = [
  {
    number: '01',
    phase: 'Descoberta',
    title: 'Mapear como a rede aprendia — e por que parava de aprender',
    description:
      'Conduzimos entrevistas com distribuidores, revendedores e gestores regionais em 4 estados. O objetivo era entender não apenas as barreiras de acesso ao treinamento, mas o que motivava (ou desmotivava) o aprendizado contínuo. O padrão foi claro: sem reconhecimento, sem progressão visível, a tendência era parar no mínimo.',
    methods: ['Entrevistas com distribuidores e revendedores (n=18)', 'Entrevistas com gestores regionais (n=6)', 'Análise de registros de treinamentos anteriores', 'Mapeamento da jornada de capacitação AS IS'],
  },
  {
    number: '02',
    phase: 'Definição',
    title: 'Dois perfis, cinco trilhas e um sistema de progressão',
    description:
      'Com base nas entrevistas, definimos os dois perfis de usuário (Distribuidor e Revendedor) com módulos de acesso distintos. As 5 trilhas de desenvolvimento foram estruturadas em parceria com o time de treinamento da Moura — cada uma com cursos sequenciais, quiz validador e certificado. O sistema de pontos e moedas foi desenhado para refletir esforço real, não apenas tempo de acesso.',
    methods: ['Workshop de definição de trilhas com time Moura', 'Mapeamento de permissões por perfil', 'Design das regras de gamificação', 'Arquitetura de informação e navegação'],
  },
  {
    number: '03',
    phase: 'Design',
    title: 'Dark mode, sidebar fixa e hierarquia de conteúdo clara',
    description:
      'A linguagem visual adota o azul-marinho profundo da identidade Moura com âmbar como acor de ação e progresso. A sidebar fixa organiza os 6 módulos principais com ícones sem label — reduzindo ruído visual e priorizando o conteúdo. O design system foi construído com componentes reutilizáveis para cards de trilha, aulas e loja.',
    methods: ['Design system completo (dark mode)', 'Sidebar com navegação por ícones', 'Componentes de card, quiz e progresso', 'Protótipo interativo (Figma)'],
  },
  {
    number: '04',
    phase: 'Validação',
    title: 'Testado com distribuidores reais em contexto operacional',
    description:
      'Realizamos testes moderados com distribuidores e revendedores em condições de uso real — acesso em campo, com smartphone, em momentos de pausa da operação. O maior achado: o fluxo de resgate na Loja de Brindes não deixava claro quantas moedas o usuário tinha antes de acessar a loja. Adicionamos o saldo fixo no header da loja — e o abandono nessa tela caiu 40% no reteste.',
    methods: ['Teste de usabilidade com distribuidores (n=8)', 'Teste com revendedores (n=6)', 'Análise de erros por módulo', 'Iteração da Loja de Brindes e tela de Progresso'],
  },
]

const desktopScreens = [
  { id: 'dh',  src: a('home-desktop.png'),        label: 'Home — hero em vídeo e continuar assistindo' },
  { id: 'don', src: a('onboarding-desktop.png'),   label: 'Onboarding — primeiro acesso' },
  { id: 'dt',  src: a('trilhas-desktop.png'),      label: 'Trilhas de Desenvolvimento' },
  { id: 'dtc', src: a('trilhas-curso-desktop.png'),label: 'Trilha — Gestão Financeira (cursos)' },
  { id: 'dc',  src: a('cursos-desktop.png'),       label: 'Catálogo de cursos' },
  { id: 'dcu', src: a('curso-desktop.png'),        label: 'Aula em vídeo com progresso lateral' },
  { id: 'dq',  src: a('quiz-desktop.png'),         label: 'Quiz — validação do aprendizado' },
  { id: 'dp',  src: a('progresso-desktop.png'),    label: 'Meu Progresso — pontos e moedas' },
  { id: 'dl',  src: a('loja-desktop.png'),         label: 'Loja de Brindes' },
  { id: 'dco', src: a('conexao-desktop.png'),      label: 'Conexão Revenda' },
  { id: 'dr',  src: a('relatorio-desktop.png'),    label: 'Relatórios — painel de gestão' },
  { id: 'dce', src: a('certificado-desktop.png'),  label: 'Certificado de conclusão' },
]

const mobileScreens = [
  { id: 'mh',  src: a('home-mobile.png'),      label: 'Home mobile' },
  { id: 'mt',  src: a('trilhas-mobile.png'),   label: 'Trilhas mobile' },
  { id: 'mc',  src: a('curso-mobile.png'),     label: 'Aula em vídeo' },
  { id: 'mq',  src: a('quiz-mobile.png'),      label: 'Quiz mobile' },
  { id: 'mp',  src: a('progresso-mobile.png'), label: 'Meu Progresso' },
  { id: 'ml',  src: a('loja-mobile.png'),      label: 'Loja de Brindes' },
]

export function AcademiaMouraCaseStudy() {
  return (
    <main className={styles.page}>
      <SEO title="Academia Moura EAD" description="Case study da plataforma de ensino a distância da Academia Moura." />

      {/* ── Hero ─────────────────────────────────────────── */}
      <motion.section
        className={styles.hero}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img src={a('hero.png')} alt="Academia Moura EAD" className={styles.heroBgImg} fetchPriority="high" />
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
            Plataforma de EAD para capacitação da rede de distribuidores da Moura —
            trilhas de desenvolvimento, gamificação com pontos e moedas, e loja de brindes.
          </motion.p>
          <motion.a
            href="https://ead.academiamoura.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.heroLiveLink}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Ver projeto no ar →
          </motion.a>
        </div>
      </motion.section>

      {/* ── Overview strip ───────────────────────────────── */}
      <div className={styles.overviewStrip}>
        <div className={styles.overviewInner}>
          {[
            { label: 'Meu papel',     value: 'Lead UX/UI Designer' },
            { label: 'Plataforma',    value: 'Web — Desktop & Mobile' },
            { label: 'Duração',       value: '5 meses' },
            { label: 'Time',          value: '1 Designer · 4 Devs · 1 PM' },
            { label: 'Entregáveis',   value: 'Research · Design System · Protótipo · Handoff' },
          ].map((item) => (
            <div key={item.label} className={styles.overviewItem}>
              <span className={styles.overviewLabel}>{item.label}</span>
              <span className={styles.overviewValue}>{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── 01 Contexto ──────────────────────────────────── */}
      <CaseSection index="01" label="Contexto" title="Uma rede nacional de distribuidores capacitada por workshops presenciais e PDFs">
        <div className={styles.prose}>
          <p>
            A Moura é uma das maiores fabricantes de baterias do Brasil, com uma rede de <strong>distribuidores e revendedores espalhados por todo o país</strong>. A capacitação dessa rede era feita de forma fragmentada: workshops presenciais esporádicos, manuais em PDF e grupos de WhatsApp regionais. Conteúdo inconsistente, alcance limitado e zero visibilidade de impacto.
          </p>
          <p>
            O desafio era construir uma plataforma de EAD que não apenas entregasse conteúdo — mas que criasse um <strong>ciclo de engajamento contínuo</strong> através de gamificação, progressão visível e recompensas tangíveis. Uma academia digital para quem aprender é também uma forma de crescer dentro da rede.
          </p>
        </div>
        <div className={styles.contextStatsRow}>
          <div className={styles.contextStatItem}>
            <span className={styles.contextStatValue}>5</span>
            <span className={styles.contextStatTitle}>Trilhas de desenvolvimento</span>
            <span className={styles.contextStatDesc}>Varejo Automotivo, Financeiro, Vendas, Marketing e Pessoas — com certificação ao concluir</span>
          </div>
          <div className={styles.contextStatDivider} />
          <div className={styles.contextStatItem}>
            <span className={styles.contextStatValue}>2</span>
            <span className={styles.contextStatTitle}>Perfis de usuário</span>
            <span className={styles.contextStatDesc}>Distribuidor e Revendedor — com módulos, permissões e jornadas distintas</span>
          </div>
          <div className={styles.contextStatDivider} />
          <div className={styles.contextStatItem}>
            <span className={styles.contextStatValue}>91%</span>
            <span className={styles.contextStatTitle}>Engajamento ativo mensal</span>
            <span className={styles.contextStatDesc}>Usuários que acessaram a plataforma ao menos uma vez por semana nos primeiros 3 meses</span>
          </div>
        </div>
      </CaseSection>

      {/* ── 02 Problema ──────────────────────────────────── */}
      <CaseSection index="02" label="Problema" title="Sem escala, sem incentivo e sem visibilidade" tinted>
        <div className={styles.prose}>
          <p>
            A Moura tinha um problema clássico de capacitação de rede B2B: como treinar centenas de pontos de venda espalhados pelo Brasil de forma consistente, mensurável e economicamente viável? O treinamento presencial não escalava. O PDF não engajava. E o gestor regional não sabia dizer quem havia aprendido o quê.
          </p>
        </div>
        <div className={styles.insightGrid}>
          {insights.map((ins, i) => (
            <InsightCard key={ins.title} icon={ins.icon} title={ins.title} body={ins.body} index={i} />
          ))}
        </div>
        <Divider />
        <div className={styles.chartBlock}>
          <h3 className={styles.chartTitle}>Principais barreiras de capacitação mapeadas</h3>
          <BarChart data={painPointsData} />
        </div>
      </CaseSection>

      {/* ── 03 Pesquisa ──────────────────────────────────── */}
      <CaseSection index="03" label="Pesquisa" title="18 entrevistas revelaram o que mantinha a rede parada no básico">
        <div className={styles.prose}>
          <p>
            Entrevistamos 18 distribuidores e revendedores em 4 estados, além de 6 gestores regionais da Moura. A pergunta central não era "você gostaria de uma plataforma de EAD?" — era "por que você parou de aprender depois do treinamento inicial?". A resposta, em variações, foi sempre a mesma: não havia próximo passo claro, e não havia razão tangível para dar esse passo.
          </p>
        </div>

        <QuoteBlock
          quote="Eu fiz o treinamento quando entrei na rede. Depois nunca mais apareceu nada. Se tivesse algo novo, eu estudaria — mas ninguém me falou que tinha, e eu também não ia ficar procurando."
          author="Revendedor, região Nordeste"
        />

        <div className={styles.chartBlock}>
          <h3 className={styles.chartTitle}>Perfil dos entrevistados — acesso e expectativas de aprendizado</h3>
          <BarChart data={researchProfileData} />
        </div>

        <Divider />

        <div>
          <h3 className={styles.chartTitle}>O que os dados de treinamento anterior revelaram</h3>
          <div className={styles.donutRow}>
            <DonutChart value={88} label="Nunca receberam certificado de conclusão" sublabel="n=24" size={180} />
            <DonutChart value={84} label="Tiveram acesso limitado a treinamentos" sublabel="n=24" size={180} />
            <DonutChart value={76} label="Queriam progressão e reconhecimento visíveis" sublabel="n=24" size={180} />
            <DonutChart value={71} label="Preferem aprendizado digital ao presencial" sublabel="n=24" size={180} />
          </div>
        </div>

        <Divider />

        <div className={styles.metricsGrid}>
          <MetricCard value="18" label="Membros da rede entrevistados" description="Distribuidores e revendedores em 4 estados brasileiros" index={0} />
          <MetricCard value="6" label="Gestores regionais entrevistados" description="Responsáveis por supervisionar e reportar desempenho da rede" index={1} />
          <MetricCard value="88%" label="Nunca receberam certificado" description="Da rede entrevistada, sem nenhum registro formal de capacitação" index={2} />
          <MetricCard value="2 perfis" label="Com jornadas distintas" description="Distribuidor (operacional) e Revendedor (comercial) — necessidades opostas" index={3} />
        </div>
      </CaseSection>

      {/* ── 04 Solução ───────────────────────────────────── */}
      <CaseSection index="04" label="Solução" title="Uma academia com seis módulos e um sistema de progressão gamificado">
        <div className={styles.prose}>
          <p>
            A plataforma foi construída em torno de um princípio: <strong>aprender tem que valer a pena</strong>. Cada módulo se conecta ao sistema de pontos e moedas — que alimenta a classificação do usuário e desbloqueia recompensas na Loja de Brindes. A progressão é visível, o reconhecimento é tangível e o conteúdo é organizado em trilhas com início, meio e fim claro.
          </p>
        </div>
        <div className={styles.moduleList}>
          {modules.map((mod, i) => {
            const Icon = mod.icon
            return (
              <motion.div
                key={mod.title}
                className={styles.moduleListItem}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className={styles.moduleListNum}>0{i + 1}</span>
                <span className={styles.moduleListIcon}><Icon size={20} strokeWidth={1.5} aria-hidden="true" /></span>
                <div className={styles.moduleListContent}>
                  <h3 className={styles.moduleListTitle}>{mod.title}</h3>
                  <p className={styles.moduleListDesc}>{mod.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        <Divider />

        <div className={styles.prose}>
          <p>
            O sistema de gamificação tem três níveis de classificação baseados em pontos acumulados. Cada nível desbloqueia benefícios progressivos — de acesso a conteúdos exclusivos até vantagens comerciais com a Moura. As moedas, por sua vez, são acumuladas separadamente e usadas exclusivamente na Loja de Brindes.
          </p>
        </div>
        <div className={styles.gamificationBanner}>
          {gamLevels.map((lvl, i) => (
            <motion.div
              key={lvl.badge}
              className={styles.gamLevel}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className={styles.gamLevelBadge}>{lvl.badge}</span>
              <span className={styles.gamLevelRange}>{lvl.range}</span>
              <span className={styles.gamLevelDesc}>{lvl.desc}</span>
            </motion.div>
          ))}
        </div>
      </CaseSection>

      {/* ── 05 Processo ──────────────────────────────────── */}
      <CaseSection index="05" label="Processo" title="Da jornada AS IS ao design system em dark mode" tinted>
        <div className={styles.timeline}>
          {processSteps.map((step, i) => (
            <motion.div
              key={step.number}
              className={styles.timelineItem}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={styles.timelineNode}>{step.number}</div>
              <p className={styles.timelinePhase}>{step.phase}</p>
              <h3 className={styles.timelineTitle}>{step.title}</h3>
              <p className={styles.timelineDesc}>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </CaseSection>

      {/* ── 06 Telas ─────────────────────────────────────── */}
      <CaseSection index="06" label="Telas" title="Desktop — sidebar fixa, dark mode e hierarquia de conteúdo clara">
        <div className={styles.prose}>
          <p>
            A navegação é feita por uma sidebar fixa com ícones sem label — priorizando o conteúdo e reduzindo ruído visual. O dark mode azul-marinho reforça a identidade Moura e cria contraste claro para os elementos de ação em âmbar. Cada módulo adapta o layout conforme a natureza do conteúdo: carrossel para trilhas, player para aulas, tabela para relatórios.
          </p>
        </div>
        <ScreenGallery
          screens={desktopScreens}
          columns={2}
          caption="12 telas desktop — Home, onboarding, trilhas, cursos, quiz, progresso, loja, conexão, relatórios e certificado"
        />

        <Divider />

        <div className={styles.prose}>
          <p>
            O mobile mantém a sidebar como menu drawer — acessível pelo ícone no canto superior esquerdo. O conteúdo em vídeo ocupa toda a largura da tela com controles nativos, e o quiz é apresentado card a card com opções em tela cheia para facilitar a seleção no smartphone.
          </p>
        </div>
        <PhoneMockupGallery screens={mobileScreens} />
      </CaseSection>

      {/* ── 07 Resultados ────────────────────────────────── */}
      <CaseSection index="07" label="Resultados" title="Engajamento acima do esperado nos primeiros 90 dias">
        <div className={styles.prose}>
          <p>
            O maior indicador de sucesso foi o engajamento semanal: 91% dos usuários ativos acessaram a plataforma ao menos uma vez por semana — um número muito acima da média histórica de plataformas corporativas de EAD. A taxa de conclusão de cursos iniciados ficou em 78%, e a satisfação com a experiência de aprendizado em 86%.
          </p>
        </div>

        <div>
          <h3 className={styles.chartTitle}>Indicadores pós-lançamento (primeiros 90 dias)</h3>
          <div className={styles.donutRow}>
            <DonutChart value={91} label="Engajamento ativo semanal" size={180} />
            <DonutChart value={78} label="Taxa de conclusão dos cursos" size={180} />
            <DonutChart value={86} label="Satisfação com a experiência" size={180} />
            <DonutChart value={60} label="Redução de custo vs. presencial" size={180} />
          </div>
        </div>

        <Divider />

        <div className={styles.chartBlock}>
          <h3 className={styles.chartTitle}>Impacto por indicador</h3>
          <BarChart data={afterData} />
        </div>

        <div className={styles.metricsGrid}>
          <MetricCard value="91%" label="Engajamento ativo semanal" description="Usuários que acessaram a plataforma ao menos uma vez por semana" highlight index={0} />
          <MetricCard value="78%" label="Conclusão de cursos iniciados" description="Taxa acima da média de mercado para EAD corporativo (referência: 50–60%)" index={1} />
          <MetricCard value="86%" label="Satisfação com o aprendizado" description="Score coletado em pesquisa pós-uso com distribuidores e revendedores" highlight index={2} />
          <MetricCard value="−60%" label="Custo por treinamento" description="Redução comparada ao custo médio de um workshop presencial por participante" index={3} />
        </div>
      </CaseSection>

      {/* ── 08 Aprendizados ──────────────────────────────── */}
      <CaseSection index="08" label="Aprendizados" title="O que esse projeto me ensinou" tinted>
        <div className={styles.prose}>
          <p>
            Gamificação mal desenhada gera comportamento superficial — o usuário faz o mínimo para ganhar pontos, não para aprender. O cuidado principal foi garantir que o sistema de progressão refletisse <strong>esforço real de aprendizado</strong>, não apenas tempo de tela. Quiz obrigatório antes do certificado, pontos atribuídos por conclusão de aula — não por visualização — e moedas como recompensa separada de pontos foram decisões de design deliberadas para evitar esse atalho.
          </p>
          <p>
            Projetar para uma rede B2B distribuída exige pensar em contexto de uso adverso. O membro da rede acessa a plataforma no celular, durante um intervalo de 10 minutos, com conexão 4G instável. <strong>Cada tela precisa ser funcional em isolamento</strong>: o usuário não vai ter o fluxo completo na cabeça — ele vai entrar, fazer uma coisa, sair. Isso moldou a decisão de exibir o progresso no curso na própria tela da aula, sem precisar acessar o painel de progresso separado.
          </p>
          <p>
            O maior aprendizado foi sobre motivação intrínseca versus extrínseca. A Loja de Brindes funciona — mas o que retinha usuários na plataforma a longo prazo era o <strong>progresso na trilha e a proximidade do certificado</strong>. A barra de progresso da trilha mostrou ser o elemento mais consultado no teste. Às vezes o mais simples é o mais poderoso.
          </p>
        </div>
      </CaseSection>

      <div className={styles.footerWrapper}>
        <Footer />
      </div>
    </main>
  )
}
