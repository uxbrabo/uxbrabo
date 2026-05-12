import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Footer } from '@/components/layout/Footer'
import { SEO } from '@/components/SEO'
import { CaseSection } from '@/components/casestudy/CaseSection'
import { MetricCard } from '@/components/casestudy/MetricCard'
import { BarChart } from '@/components/casestudy/BarChart'
import { DonutChart } from '@/components/casestudy/DonutChart'
import { QuoteBlock } from '@/components/casestudy/QuoteBlock'
import { ProcessStep } from '@/components/casestudy/ProcessStep'
import { InsightCard } from '@/components/casestudy/InsightCard'
import { PhoneMockupGallery } from '@/components/casestudy/PhoneMockupGallery'
import { Divider } from '@/components/ui/Divider'
import styles from './CucaCaseStudy.module.css'

/* ─── ASSETS ─────────────────────────────────────────── */
const s = (name: string) => `/assets/cuca/${name}`

/* ─── DATA ───────────────────────────────────────────── */
const painPointsData = [
  { label: 'Não consegue acompanhar o próprio progresso', value: 78 },
  { label: 'Interface dos apps atuais é confusa', value: 71 },
  { label: 'Conteúdo não é adaptado ao nível do aluno', value: 65 },
  { label: 'Falta de motivação sem feedback imediato', value: 62 },
  { label: 'Dificuldade de estudar no celular', value: 54 },
]

const motivationData = [
  { label: 'Ver progresso e evolução visível', value: 84 },
  { label: 'Competir e se comparar com amigos', value: 76 },
  { label: 'Recompensas por conquistas', value: 69 },
  { label: 'Conteúdo diversificado (vídeo, texto, quiz)', value: 65 },
  { label: 'Recomendações personalizadas de estudo', value: 58 },
]

const heuristics = [
  { name: 'Visibilidade do status do sistema', before: 3, after: 9 },
  { name: 'Controle e liberdade do usuário', before: 4, after: 8 },
  { name: 'Prevenção de erros', before: 3, after: 9 },
  { name: 'Reconhecimento vs. memorização', before: 5, after: 9 },
  { name: 'Consistência e padrões', before: 4, after: 9 },
  { name: 'Design estético e minimalista', before: 3, after: 8 },
]

const usabilityBefore = [
  { label: 'Conclusão de tarefas-chave', value: 54 },
  { label: 'Satisfação geral (0-100)', value: 43 },
  { label: 'Retenção semanal', value: 38 },
  { label: 'NPS normalizado (0-100)', value: 34 },
]

const usabilityAfter = [
  { label: 'Conclusão de tarefas-chave', value: 91 },
  { label: 'Satisfação geral (0-100)', value: 78 },
  { label: 'Retenção semanal', value: 67 },
  { label: 'NPS normalizado (0-100)', value: 71 },
]

const processSteps = [
  {
    number: '01',
    phase: 'Descoberta',
    title: 'Entender o ecossistema edtech',
    description: 'Mapeei o mercado de educação digital no Brasil, analisei 5 concorrentes diretos e realizei entrevistas exploratórias com estudantes e famílias para entender barreiras reais antes de qualquer decisão de design.',
    methods: ['Desk Research', 'Análise competitiva', 'Entrevistas exploratórias (n=8)', 'Benchmarking UX'],
  },
  {
    number: '02',
    phase: 'Pesquisa',
    title: 'Ouvir alunos, pais e educadores',
    description: 'Conduzi entrevistas em profundidade com 3 perfis: estudantes (usuários primários), pais (Portal da Família) e professores. O survey quantitativo validou as hipóteses qualitativas com 87 respondentes.',
    methods: ['Entrevistas profundas (n=14)', 'Survey quantitativo (n=87)', 'JTBD Framework', 'Affinity Mapping'],
  },
  {
    number: '03',
    phase: 'Definição',
    title: 'Transformar achados em foco',
    description: 'Sintetizei os dados em personas distintas por perfil (aluno, pai, professor), construí mapas de jornada e definimos problem statements claros com o time de produto para guiar as decisões.',
    methods: ['Personas (3 perfis)', 'Jornada de usuário', 'HMW Statements', 'Priorização MoSCoW'],
  },
  {
    number: '04',
    phase: 'Ideação',
    title: 'Explorar antes de construir',
    description: 'Sessões de Crazy 8s revelaram que o diferencial do Cuca seria a combinação de gamificação (Arena de Quizzes + XP) com inteligência no acompanhamento de desempenho e recomendações do Tutor Virtual.',
    methods: ['Crazy 8s', 'Design Principles', 'Information Architecture', 'Card Sorting', 'Votação de ideias'],
  },
  {
    number: '05',
    phase: 'Design',
    title: 'Do wireframe ao pixel',
    description: 'Desenvolvi o sistema de design completo com componentes reutilizáveis, partindo de wireframes de baixa fidelidade para validar fluxos e chegando ao protótipo hi-fi com acessibilidade WCAG AA.',
    methods: ['Wireframes low-fi', 'Sistema de design', 'Protótipo hi-fi', 'Acessibilidade WCAG AA', 'Motion guidelines'],
  },
  {
    number: '06',
    phase: 'Validação',
    title: 'Testar, medir, iterar',
    description: '2 rodadas de testes moderados + 1 não-moderada via Maze. O score SUS subiu de 42 para 81 entre as rodadas. 23 iterações documentadas antes do handoff final.',
    methods: ['Testes moderados (n=12)', 'Maze (n=18)', 'SUS Score', 'Think Aloud', 'Análise heurística'],
  },
]

const researchInsights = [
  {
    icon: '📊',
    title: 'Progresso invisível = abandono',
    body: '78% dos alunos não sabiam quanto haviam estudado nem qual era sua taxa de acerto. Sem visualizar evolução, a motivação despenca em menos de 2 semanas.',
  },
  {
    icon: '🏆',
    title: 'Competição saudável é motivadora',
    body: '76% dos entrevistados disseram que estudariam mais se pudessem comparar seu desempenho com amigos — o fundamento da Arena de Quizzes.',
  },
  {
    icon: '📱',
    title: 'Mobile é o único canal real',
    body: '81% do estudo acontecia via smartphone, em sessões curtas (10-15 min). A experiência precisava ser otimizada para o polegar e para a atenção fragmentada.',
  },
  {
    icon: '👨‍👩‍👧',
    title: 'Família quer participar',
    body: '68% dos pais disseram querer acompanhar o progresso dos filhos, mas as plataformas existentes não ofereciam visibilidade — o que originou o Portal da Família.',
  },
]

const designPrinciples = [
  { title: 'Progresso sempre visível', body: 'Taxa de acertos, tempo de estudo, etapas concluídas — o aluno vê sua evolução em qualquer ponto do app, não só em uma tela dedicada.' },
  { title: 'Competição que une', body: 'A Arena de Quizzes usa XP e rankings para motivar — mas o foco é no progresso individual. Competir com amigos é opcional e positivo, nunca excludente.' },
  { title: 'Tutor Virtual como aliado', body: 'A IA detecta padrões de erro e recomenda conteúdo específico. "Você está dominando Geometria" é tão importante quanto "Revise Sistemas de Equações".' },
  { title: 'Família dentro do fluxo', body: 'O Portal da Família não é um relatório PDF mensal — é acesso em tempo real ao mesmo progresso que o aluno vê, sem fricção de login separado.' },
]

/* ─── COMPONENT ──────────────────────────────────────── */
export function CucaCaseStudy() {
  return (
    <main className={styles.page}>
      <SEO title="Cuca — App de Estudos" description="Case study do app de estudos Cuca, plataforma gamificada de aprendizado." />

      {/* ─── HERO ─── */}
      <motion.section
        className={styles.hero}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img src={s('hero-cover.png')} alt="" className={styles.heroBg} fetchPriority="high" />
        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
          <motion.div
            className={styles.heroMeta}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <span>UX Design · Product Design · iOS & Android</span>
            <span>2025</span>
          </motion.div>

          <motion.p
            className={styles.heroTagline}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            Plataforma de aprendizagem que une gamificação, Tutor Virtual com IA
            e acompanhamento familiar para transformar o estudo numa rotina que
            alunos realmente querem manter.
          </motion.p>
        </div>
      </motion.section>

      {/* ─── OVERVIEW STRIP ─── */}
      <div className={styles.overviewStrip}>
        <div className={styles.overviewInner}>
          {[
            { label: 'Meu papel', value: 'Lead UX/UI Designer' },
            { label: 'Plataforma', value: 'iOS & Android' },
            { label: 'Duração', value: '4 meses' },
            { label: 'Time', value: '1 Designer · 3 Devs · 1 PM' },
            { label: 'Entregáveis', value: 'Research · Design System · Protótipo · Handoff' },
          ].map((item) => (
            <div key={item.label} className={styles.overviewItem}>
              <span className={styles.overviewLabel}>{item.label}</span>
              <span className={styles.overviewValue}>{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ─── 01 · CONTEXTO ─── */}
      <CaseSection index="01" label="Contexto" title="Por que o Cuca existe?">
        <div className={styles.prose}>
          <p>
            O Brasil tem <strong>mais de 46 milhões de estudantes</strong> no ensino básico, mas as
            plataformas de apoio ao aprendizado disponíveis no mercado foram projetadas para desktop,
            tratam o celular como afterthought e ignoram o papel da família no processo educativo.
          </p>
          <p>
            O Cuca surgiu para preencher esse vácuo: um app mobile-first que combina
            <strong> conteúdo multimídia</strong> (vídeo aulas, PDFs, artigos),
            <strong> gamificação</strong> (Arena de Quizzes com XP e rankings),
            <strong> inteligência adaptativa</strong> (Tutor Virtual) e
            <strong> portal familiar</strong> — tudo integrado em uma experiência fluida e motivadora.
          </p>
          <p>
            Entrei no projeto com um MVP funcional mas com sérios problemas de usabilidade e
            retenção. Meu papel foi redesenhar a experiência do zero, mantendo a visão de produto
            e entregando um design system escalável.
          </p>
        </div>

        <div className={styles.contextStatsRow}>
          <div className={styles.contextStatItem}>
            <span className={styles.contextStatValue}>46M+</span>
            <span className={styles.contextStatTitle}>Estudantes no ensino básico</span>
            <span className={styles.contextStatDesc}>Público potencial do Cuca — plataformas existentes ignoravam o mobile e a família</span>
          </div>
          <div className={styles.contextStatDivider} />
          <div className={styles.contextStatItem}>
            <span className={styles.contextStatValue}>13%</span>
            <span className={styles.contextStatTitle}>Taxa de conclusão de cursos online</span>
            <span className={styles.contextStatDesc}>Média no Brasil em 2024 — desengajamento por falta de progresso visível e motivação</span>
          </div>
          <div className={styles.contextStatDivider} />
          <div className={styles.contextStatItem}>
            <span className={styles.contextStatValue}>R$5,2bi</span>
            <span className={styles.contextStatTitle}>Mercado de educação digital</span>
            <span className={styles.contextStatDesc}>Tamanho do mercado EdTech no Brasil — com enorme espaço para experiências melhores</span>
          </div>
        </div>
      </CaseSection>

      {/* ─── 02 · PROBLEMA ─── */}
      <CaseSection index="02" label="O Problema" title="O que estava quebrando o aprendizado?" tinted>
        <QuoteBlock
          quote="Eu abro o app, não sei por onde continuar, fico perdido nas opções e fecho. No dia seguinte faço a mesma coisa. Depois de uma semana desinstalei."
          author="Entrevistado #06"
          role="Estudante do ensino médio, 16 anos"
        />

        <div className={styles.problemStatement}>
          <p className={styles.psLabel}>Problem Statement</p>
          <p className={styles.psText}>
            Estudantes abandonam plataformas de aprendizado não por falta de conteúdo, mas porque
            <strong> não enxergam progresso, não sentem pertencimento e a experiência mobile é frustrante</strong>.
            O desengajamento começa nos primeiros 10 minutos — e a maioria dos apps não faz nada para evitá-lo.
          </p>
        </div>

        <div>
          <p className={styles.chartTitle}>Principais dores relatadas pelos estudantes</p>
          <BarChart data={painPointsData} unit="%" />
          <p className={styles.chartSource}>Fonte: survey com 87 estudantes de plataformas online, Jan–Fev 2025</p>
        </div>
      </CaseSection>

      {/* ─── 03 · PESQUISA ─── */}
      <CaseSection index="03" label="Pesquisa" title="Três perspectivas, um produto">
        <div className={styles.researchMethods}>
          {[
            { num: '14', label: 'Entrevistas em profundidade' },
            { num: '87', label: 'Respostas ao survey' },
            { num: '3', label: 'Perfis entrevistados (aluno, pai, professor)' },
            { num: '5', label: 'Concorrentes analisados' },
          ].map((m) => (
            <div key={m.label} className={styles.methodBox}>
              <span className={styles.methodNum}>{m.num}</span>
              <span className={styles.methodLabel}>{m.label}</span>
            </div>
          ))}
        </div>

        <div className={styles.insightGrid}>
          {researchInsights.map((insight, i) => (
            <InsightCard key={insight.title} {...insight} index={i} />
          ))}
        </div>

        <div>
          <p className={styles.chartTitle}>O que mais motiva estudantes a continuar estudando</p>
          <BarChart data={motivationData} unit="%" color="gray" />
          <p className={styles.chartSource}>Fonte: entrevistas + survey combinados, metodologia JTBD, n=87</p>
        </div>

        <QuoteBlock
          quote="Se eu soubesse que minha filha está estudando, quanto ela está acertando, onde ela está errando mais — eu conseguia ajudar muito mais. Hoje não sei de nada."
          author="Entrevistado #11"
          role="Pai de estudante do 9º ano"
        />

        {/* Persona */}
        <div className={styles.persona}>
          <div className={styles.personaHeader}>
            <p className={styles.psLabel}>Persona primária — aluno</p>
            <h3 className={styles.personaName}>João Pedro</h3>
            <p className={styles.personaRole}>16 anos · Ensino médio · São Luís, MA</p>
          </div>
          <div className={styles.personaBody}>
            <div className={styles.personaCol}>
              <p className={styles.personaColTitle}>Objetivos</p>
              <ul className={styles.personaList}>
                <li>Melhorar notas em Matemática e Ciências</li>
                <li>Passar no ENEM com nota acima de 700</li>
                <li>Estudar sem depender só do colégio</li>
                <li>Aprender no ritmo dele, sem pressão</li>
              </ul>
            </div>
            <div className={styles.personaCol}>
              <p className={styles.personaColTitle}>Frustrações</p>
              <ul className={styles.personaList}>
                <li>Apps cheios de notificação inútil</li>
                <li>Não sabe onde parou no estudo</li>
                <li>Conteúdo muito difícil ou muito fácil</li>
                <li>Nenhum app parece feito pra ele</li>
              </ul>
            </div>
            <div className={styles.personaCol}>
              <p className={styles.personaColTitle}>Comportamentos</p>
              <ul className={styles.personaList}>
                <li>Estuda 20-30 min pelo celular à noite</li>
                <li>Gosta de games e ranking entre amigos</li>
                <li>Troca áudio e vídeo com a turma</li>
                <li>Desinstala apps que não engajam em 3 dias</li>
              </ul>
            </div>
          </div>
          <div className={styles.personaQuote}>
            <p>"Se tiver ranking, eu vou querer subir. Se tiver desafio com meu amigo, eu aceito. Competição me faz estudar mais."</p>
          </div>
        </div>
      </CaseSection>

      {/* ─── 04 · PROCESSO ─── */}
      <CaseSection index="04" label="Processo" title="Como eu trabalhei" tinted>
        <div className={styles.processGrid}>
          {processSteps.map((step, i) => (
            <ProcessStep key={step.number} {...step} index={i} />
          ))}
        </div>
      </CaseSection>

      {/* ─── 05 · DESIGN ─── */}
      <CaseSection index="05" label="Decisões de Design" title="Princípios que guiaram cada tela">
        <div className={styles.principleGrid}>
          {designPrinciples.map((p, i) => (
            <motion.div
              key={p.title}
              className={styles.principleCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <h3 className={styles.principleTitle}>{p.title}</h3>
              <p className={styles.principleBody}>{p.body}</p>
            </motion.div>
          ))}
        </div>

        {/* ONBOARDING */}
        <div className={styles.screenSet}>
          <p className={styles.screenSetLabel}>Onboarding & Autenticação</p>
          <PhoneMockupGallery
            columns={4}
            screens={[
              { id: 'ob1',   src: s('onboarding-1.png'), label: 'Onboarding 1' },
              { id: 'ob2',   src: s('onboarding-2.png'), label: 'Onboarding 2' },
              { id: 'ob3',   src: s('onboarding-3.png'), label: 'Onboarding 3' },
              { id: 'login', src: s('login.png'),         label: 'Login' },
            ]}
          />
        </div>

        {/* HOME & DESEMPENHO */}
        <div className={styles.screenSet}>
          <p className={styles.screenSetLabel}>Home & Acompanhamento de Desempenho</p>
          <PhoneMockupGallery
            columns={3}
            fixedNav
            screens={[
              { id: 'home',   src: s('home.png'),        label: 'Home' },
              { id: 'desemp', src: s('desempenho.png'),  label: 'Meu Desempenho' },
              { id: 'disc',   src: s('disciplinas.png'), label: 'Minhas Disciplinas' },
            ]}
          />
        </div>

        {/* HUB DE CONTEÚDO */}
        <div className={styles.screenSet}>
          <p className={styles.screenSetLabel}>HUB de Conteúdos</p>
          <PhoneMockupGallery
            columns={3}
            fixedNav
            screens={[
              { id: 'hub1', src: s('hub-conteudo.png'),   label: 'HUB de Conteúdo' },
              { id: 'hub2', src: s('hub-conteudo-2.png'), label: 'HUB variação' },
              { id: 'hub3', src: s('hub-pdfs.png'),        label: 'PDFs' },
            ]}
          />
        </div>

        {/* ARENA QUIZZES */}
        <div className={styles.screenSet}>
          <p className={styles.screenSetLabel}>Arena de Quizzes — gamificação</p>
          <PhoneMockupGallery
            columns={4}
            fixedNav
            screens={[
              { id: 'aq1', src: s('arena-quizzes.png'),          label: 'Arena — ranking' },
              { id: 'aq2', src: s('arena-amigos.png'),            label: 'Arena — amigos' },
              { id: 'aq3', src: s('quiz-matematica.png'),         label: 'Quiz — escolha' },
              { id: 'aq4', src: s('quiz-questao-matematica.png'), label: 'Quiz — questão' },
            ]}
          />
        </div>

        {/* QUIZ FLOW */}
        <div className={styles.screenSet}>
          <p className={styles.screenSetLabel}>Fluxo completo do Quiz — Matemática</p>
          <PhoneMockupGallery
            columns={4}
            fixedNav
            screens={[
              { id: 'qf1', src: s('quiz-iniciar.png'),            label: 'Iniciar quiz' },
              { id: 'qf2', src: s('quiz-questao-matematica.png'), label: 'Questão' },
              { id: 'qf3', src: s('quiz-conclusao.png'),          label: 'Conclusão' },
              { id: 'qf4', src: s('estudo-colaborativo.png'),     label: 'Estudo colaborativo' },
            ]}
          />
        </div>

        {/* Heuristic comparison */}
        <div className={styles.heuristicTable}>
          <p className={styles.chartTitle}>Avaliação heurística — antes × depois (Nielsen, 0-10)</p>
          <div className={styles.htHeader}>
            <span>Heurística</span>
            <span>Antes</span>
            <span>Depois</span>
          </div>
          {heuristics.map((h, i) => (
            <motion.div
              key={h.name}
              className={styles.htRow}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <span className={styles.htName}>{h.name}</span>
              <span className={[styles.htScore, styles.before].join(' ')}>{h.before}/10</span>
              <span className={[styles.htScore, styles.after].join(' ')}>{h.after}/10</span>
            </motion.div>
          ))}
        </div>
      </CaseSection>

      {/* ─── 06 · TESTES ─── */}
      <CaseSection index="06" label="Testes de Usabilidade" title="Validando com usuários reais" tinted>
        <div className={styles.testInfo}>
          <div className={styles.testBlock}>
            <p className={styles.testBlockTitle}>Metodologia</p>
            <p className={styles.testBlockBody}>
              2 rodadas de testes moderados (6 participantes cada) + 1 rodada não-moderada via Maze
              (18 participantes). Perfil: estudantes do ensino médio e fundamental, 13–18 anos,
              com acesso a smartphone próprio.
            </p>
          </div>
          <div className={styles.testBlock}>
            <p className={styles.testBlockTitle}>Tarefas testadas</p>
            <ul className={styles.taskList}>
              <li>Encontrar e continuar uma disciplina em andamento</li>
              <li>Verificar taxa de acertos e tempo de estudo</li>
              <li>Iniciar e completar um quiz na Arena</li>
              <li>Localizar um vídeo no HUB de Conteúdo</li>
              <li>Adicionar um amigo e ver o ranking</li>
            </ul>
          </div>
        </div>

        <div className={styles.beforeAfter}>
          <div className={styles.baCol}>
            <p className={styles.baLabel}>Antes do redesign</p>
            <BarChart data={usabilityBefore} unit="" />
          </div>
          <div className={styles.baCol}>
            <p className={styles.baLabel}>Depois do redesign</p>
            <BarChart data={usabilityAfter} unit="" />
          </div>
        </div>

        <div className={styles.susScore}>
          <div className={styles.susItem}>
            <span className={styles.susValue}>42</span>
            <span className={styles.susLabel}>SUS Score — Antes<br /><small>"Marginalmente aceitável"</small></span>
          </div>
          <div className={styles.susArrow}>→</div>
          <div className={[styles.susItem, styles.susHighlight].join(' ')}>
            <span className={styles.susValue}>81</span>
            <span className={styles.susLabel}>SUS Score — Depois<br /><small>"Bom" (acima da média de 68)</small></span>
          </div>
        </div>

        <QuoteBlock
          quote="Nunca tinha visto um app de estudo que parece game. Eu fiquei com vontade de subir no ranking — e pra isso precisei estudar mais. Não percebi quando o estudo virou diversão."
          author="Participante #04 — Teste de usabilidade"
          role="Estudante do 2º ano do ensino médio, 16 anos"
        />
      </CaseSection>

      {/* ─── 07 · RESULTADOS ─── */}
      <CaseSection index="07" label="Resultados e Impacto" title="O que mudou de verdade">
        <div className={styles.metricsGrid}>
          <MetricCard value="+68%" label="Duração média de sessão" description="De 8 para 13,4 minutos — mais tempo real de aprendizado por acesso" highlight index={0} />
          <MetricCard value="81" label="SUS Score final" description="Acima da média de mercado (68) — classificado como 'Bom' por Sauro & Lewis" index={1} />
          <MetricCard value="91%" label="Taxa de conclusão de tarefas" description="Usuários completaram as 5 tarefas-chave com sucesso nos testes finais" index={2} />
          <MetricCard value="+109%" label="NPS do produto" description="De 34 para 71 — de 'passivo' para 'promotor' consolidado" highlight index={3} />
          <MetricCard value="-76%" label="Abandono na sessão" description="Usuários que saíam do app no meio de uma tarefa, antes de concluí-la" index={4} />
          <MetricCard value="23" label="Iterações documentadas" description="Mudanças rastreadas entre wireframe e handoff final, todas baseadas em testes" index={5} />
        </div>

        <div className={styles.donutRow}>
          {[
            { value: 91, label: 'Conclusão de tarefas', sublabel: 'nos testes finais' },
            { value: 78, label: 'Satisfação geral', sublabel: 'pós-redesign' },
            { value: 67, label: 'Retenção semanal', sublabel: 'usuários ativos' },
            { value: 81, label: 'Mobile adoption', sublabel: 'principal canal de acesso' },
          ].map((d, i) => (
            <motion.div key={d.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}>
              <DonutChart {...d} />
            </motion.div>
          ))}
        </div>
      </CaseSection>

      {/* ─── 08 · APRENDIZADOS ─── */}
      <CaseSection index="08" label="Aprendizados" title="O que eu levaria para o próximo projeto">
        <div className={styles.learningGrid}>
          {[
            {
              n: '1',
              title: 'Gamificação só funciona com base sólida de UX',
              body: 'XP e ranking foram diferenciais reais — mas só depois que a navegação, o feedback e o progresso visível foram consertados. Gamificação sobre UX ruim não salva o produto.',
            },
            {
              n: '2',
              title: 'Múltiplos perfis exigem múltiplas jornadas',
              body: 'Aluno, pai e professor têm objetivos completamente diferentes. O Portal da Família nasceu de pesquisa — sem ela, teria ficado de fora do MVP e perdido um diferencial real.',
            },
            {
              n: '3',
              title: 'Mobile-first não é só tela pequena',
              body: 'Projetar para mobile mudou a lógica de hierarquia, tamanho de toque e atenção fragmentada. Cada decisão foi testada com o polegar — não só visualmente aprovada.',
            },
            {
              n: '4',
              title: 'Design System economizou semanas',
              body: 'Componentes reutilizáveis desde o início reduziram 40% das revisões no handoff. A equipe de dev entregou a interface com muito menos idas e vindas.',
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
            <motion.a href="/trabalho/venosan" className={styles.nextLink} whileHover={{ x: 6 }} transition={{ duration: 0.2 }}>
              <span className={styles.nextTitle}>Venosan — Calculadora de meias compressivas</span>
              <ArrowUpRight size={32} strokeWidth={1} />
            </motion.a>
          </div>
        </div>
      </section>

      <div className={styles.footerWrapper}>
        <Footer />
      </div>
    </main>
  )
}
