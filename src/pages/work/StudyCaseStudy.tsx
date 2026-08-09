import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Bot, Zap, Brain, Trophy, Clock, Layers } from 'lucide-react'
import { Footer } from '@/components/layout/Footer'
import { SEO } from '@/components/SEO'
import { CaseSection } from '@/components/casestudy/CaseSection'
import { CaseLayout, CaseHero, CaseMeta } from '@/components/casestudy/CaseLayout'
import { MetricCard } from '@/components/casestudy/MetricCard'
import { QuoteBlock } from '@/components/casestudy/QuoteBlock'
import { ProcessStep } from '@/components/casestudy/ProcessStep'
import { InsightCard } from '@/components/casestudy/InsightCard'
import { PhoneMockupGallery } from '@/components/casestudy/PhoneMockupGallery'
import { Divider } from '@/components/ui/Divider'
import styles from './StudyCaseStudy.module.css'

const s = (name: string) => `/assets/study/${name}`

/* ─── DATA ───────────────────────────────────────────── */

const designDecisions = [
  {
    icon: Brain,
    title: 'BKT: não é só quiz, é ciência',
    body: 'Bayesian Knowledge Tracing modela a probabilidade real de domínio de cada habilidade. O app recomenda o que estudar com base em impacto real no avanço, não em ordem aleatória.',
  },
  {
    icon: Trophy,
    title: 'Gamificação que mantém o hábito',
    body: 'XP, streak, ranking e medalhas não são decoração: são o sistema de recompensa variável que transforma sessões de estudo em hábito sustentável. A Arena de Quizzes adiciona competição real entre alunos.',
  },
  {
    icon: Bot,
    title: 'Tutor socrático, não oráculo',
    body: 'O Tutor IA não entrega respostas: faz perguntas que guiam o aluno a descobri-las. Abordagem baseada em método socrático + ciência cognitiva: aprendizado ativo retém 2-3x mais que leitura passiva.',
  },
  {
    icon: Layers,
    title: 'Dark mode first e sistema de cores por matéria',
    body: 'Interface escura reduz fadiga ocular para sessões noturnas (o horário mais comum de estudo). Cada disciplina tem cor exclusiva: identidade visual e orientação espacial em uma única decisão.',
  },
]

const businessDecisions = [
  {
    title: 'ENEM como porta de entrada',
    body: 'Foco estratégico no ENEM (3,9M candidatos/ano) cria alta urgência e motivação intrínseca. Um aluno motivado a passar no vestibular tem propensão de pagamento e engajamento muito maiores que plataformas genéricas.',
  },
  {
    title: 'Multi-persona desde o MVP',
    body: 'Aluno, Família, Professor e Escola no mesmo produto. Não é complexidade desnecessária: é distribuição viral. O aluno atrai a família, a família atrai a escola. Um usuário traz três stakeholders.',
  },
  {
    title: 'Grafo de conhecimento como moat',
    body: 'O knowledge graph com BKT é o ativo estratégico do produto: quanto mais o aluno usa, mais preciso fica o modelo de lacunas. Dados de aprendizado criam um flywheel de personalização difícil de replicar.',
  },
  {
    title: 'B2C como laboratório para B2B',
    body: 'O produto começa B2C direto ao aluno para validar retenção e produto. O mesmo produto escala para B2B2C (venda para escolas) com mínimas adaptações: Dashboard de turma, gestão de tarefas por professor.',
  },
]

const processSteps = [
  {
    number: '01',
    phase: 'Concepção',
    title: 'Problema antes de solução',
    description: 'Mapeei o mercado EdTech brasileiro, analisei Duolingo, Khan Academy e Anki para identificar o espaço de oportunidade: nenhum produto combinava mapa de habilidades adaptativo + gamificação + IA socrática no contexto ENEM.',
    methods: ['Análise competitiva', 'Benchmarking UX', 'Desk research EdTech BR', 'Identificação de gaps'],
  },
  {
    number: '02',
    phase: 'Arquitetura',
    title: 'Decisões que determinam o produto',
    description: 'Definição do knowledge graph, sistema de XP e nivelamento, fluxo multi-persona e arquitetura de informação das 12 telas. Usei o Claude como parceiro de raciocínio para questionar hipóteses e explorar trade-offs antes de qualquer pixel.',
    methods: ['Information Architecture', 'User flows', 'Knowledge graph design', 'Sistema de gamificação'],
  },
  {
    number: '03',
    phase: 'Design System',
    title: 'Tokens antes de componentes',
    description: 'Construí o design system completo: paleta dark-first com 5 cores de área de conhecimento, escala tipográfica, tokens CSS para sombras e espaçamentos. Zero valores hardcoded: dark e light mode adaptativos desde o dia 1.',
    methods: ['Design tokens CSS', 'Paleta multi-área', 'Tipografia Space Grotesk', 'Dark/light mode'],
  },
  {
    number: '04',
    phase: 'Prototipação com IA',
    title: 'Do conceito ao código funcional',
    description: 'Aqui o processo mudou de vez: em vez de prototipar no Figma, usei o Claude Code para gerar código React real das telas. Testei interações reais no browser e no simulador iOS em ciclos de horas, não semanas.',
    methods: ['Claude Code como parceiro', 'React + Framer Motion', 'Capacitor iOS', 'Testes no simulador'],
  },
  {
    number: '05',
    phase: 'Iteração',
    title: 'Feedback rápido = produto melhor',
    description: 'Com o app rodando no simulador desde cedo, o ciclo de feedback foi radicalmente mais rápido: ver o app real no iPhone muda completamente o que se nota de falha de design versus ver no Figma.',
    methods: ['Testes no simulador iOS', 'Feedback de contexto real', 'Animações Framer Motion', 'Safe areas iOS'],
  },
  {
    number: '06',
    phase: 'Entrega',
    title: '14 telas funcionais em semanas',
    description: 'MVP completo com Home, Mapa de Conhecimento, Quiz Arena, Flashcards, Pomodoro, Hub de Conteúdo, Tutor IA, Conquistas, Tarefas, Perfil e Desempenho, rodando como app nativo no iPhone via Capacitor.',
    methods: ['14 telas funcionais', 'iOS nativo (Capacitor)', 'Animações com propósito', 'Design system completo'],
  },
]

/* ─── COMPONENT ──────────────────────────────────────── */
export function StudyCaseStudy() {
  return (
    <main className={styles.page}>
      <SEO
        title="Study, App EdTech com IA"
        description="Como usei IA para conceber, prototipar e entregar um app iOS completo de estudos para o ENEM em semanas."
      />
      <CaseLayout sections={['Visão Geral', 'Resultados', 'Observações Iniciais', 'IA no Processo', 'Processo de Design', 'Decisões de Design', 'Tutor IA', 'Decisões de Negócio', 'Reflexão']}>

      {/* ─── HERO ─── */}
      <CaseHero
        eyebrow="Study • Projeto autoral · 2025"
        title="Um app de estudos para o ENEM com IA socrática, do conceito ao iOS em semanas"
        image={{ src: s('home.png'), alt: 'Tela principal do Study' }}
      />

      <CaseMeta
        items={[
          { label: 'Meu papel', value: 'Product Designer + Dev' },
          { label: 'Período', value: 'Projeto autoral · 2025' },
          { label: 'Stack', value: 'React · Capacitor · Framer Motion' },
          { label: 'Habilidades', value: 'Product Design · Front-end · IA no processo' },
        ]}
      />

      {/* ─── 01 · VISÃO GERAL ─── */}
      <CaseSection index="01" label="Visão Geral" title="Por que o Study existe?">
        <div className={styles.prose}>
          <p>
            O ENEM é a maior prova do Brasil: <strong>3,9 milhões de candidatos por ano</strong>.
            A maioria estuda por conta própria, sem orientação personalizada, sem saber quais
            lacunas têm maior impacto na nota e sem um sistema que os mantenha consistentes ao longo de meses.
          </p>
          <p>
            As plataformas existentes resolvem parcialmente o problema: Duolingo tem gamificação
            mas não tem profundidade pedagógica. Khan Academy tem conteúdo mas não engaja
            a geração que cresceu com TikTok. Anki tem ciência (repetição espaçada) mas tem
            interface de 2008.
          </p>
          <p>
            O Study surge para ocupar esse espaço: a interseção entre <strong>ciência do aprendizado</strong>
            {' '}(BKT, espaçamento espaçado, método socrático), <strong>design de produto moderno</strong>
            {' '}(dark mode, animações com propósito, feedback imediato) e
            {' '}<strong>gamificação que cria hábito</strong>, não decoração.
          </p>
          <p>
            Este é um <strong>projeto autoral</strong>: concebi, desenhei e desenvolvi o Study por
            conta própria, sem briefing de cliente, para explorar até onde um Designer de Produto
            consegue chegar sozinho usando IA como parceira de raciocínio e código.
          </p>
        </div>

        <div className={styles.contextStatsRow}>
          <div className={styles.contextStatItem}>
            <span className={styles.contextStatValue}>3,9M</span>
            <span className={styles.contextStatTitle}>Candidatos/ano no ENEM</span>
            <span className={styles.contextStatDesc}>O maior vestibular do mundo, e a maioria estuda sem personalização ou adaptação ao próprio ritmo</span>
          </div>
          <div className={styles.contextStatDivider} />
          <div className={styles.contextStatItem}>
            <span className={styles.contextStatValue}>Mobile</span>
            <span className={styles.contextStatTitle}>Primeiro dispositivo do estudante</span>
            <span className={styles.contextStatDesc}>O celular é onde o aluno realmente estuda, e a maioria dos apps não é pensada para ele</span>
          </div>
          <div className={styles.contextStatDivider} />
          <div className={styles.contextStatItem}>
            <span className={styles.contextStatValue}>Hábito</span>
            <span className={styles.contextStatTitle}>O desafio central</span>
            <span className={styles.contextStatDesc}>Manter a consistência ao longo de meses é mais difícil do que encontrar conteúdo</span>
          </div>
        </div>
      </CaseSection>

      {/* ─── 02 · RESULTADOS ─── */}
      <CaseSection index="02" label="Resultados" title="O que foi entregue" tinted>
        <div className={styles.metricsGrid}>
          <MetricCard value="14" label="Telas funcionais" description="Home, Mapa, Arena, Flashcards, Foco, Hub, Tutor IA, Conquistas, Tarefas, Perfil, Desempenho e mais" highlight index={0} />
          <MetricCard value="60+" label="Ícones SVG customizados" description="Sistema de ícones próprio com identidade consistente em todas as telas e estados" index={1} />
          <MetricCard value="5" label="Áreas de conhecimento com cores exclusivas" description="Matemática (azul), Linguagens (roxo), Ciências (verde), Humanas (âmbar), Accent (coral)" index={2} />
          <MetricCard value="100%" label="Dark e light mode adaptativos" description="Zero valores de cor hardcoded: design tokens CSS em todos os componentes via useColors()" highlight index={3} />
          <MetricCard value="iOS" label="App nativo via Capacitor" description="Build flow completo: React → Vite → Capacitor → WKWebView → iPhone 16 Pro" index={4} />
          <MetricCard value="Semanas" label="Do conceito ao produto rodando" description="Processo tradicional: 3-4 meses. Com AI-assisted design: semanas, sem sacrificar qualidade" index={5} />
        </div>
      </CaseSection>

      {/* ─── 03 · OBSERVAÇÕES INICIAIS ─── */}
      <CaseSection index="03" label="Observações Iniciais" title="Estudar é difícil. Manter o hábito é ainda mais.">
        <div className={styles.problemStatement}>
          <p className={styles.psLabel}>A hipótese que orientou o produto</p>
          <p className={styles.psText}>
            Muitos estudantes do ENEM abandonam rotinas de estudo não por falta de conteúdo
            disponível, mas porque <strong>não visualizam suas lacunas reais, não recebem direção
            personalizada e não têm um sistema que os recompense por consistência</strong>.
            O mercado tem muitas plataformas de conteúdo; a proposta do Study é ser uma
            plataforma de hábito.
          </p>
        </div>

        <div className={styles.prose}>
          <p>
            A partir dessa hipótese, defini as barreiras que o produto deveria atacar: a
            dificuldade de manter consistência, a falta de clareza sobre onde estão as maiores
            lacunas de conhecimento, o conteúdo genérico demais e a ausência de feedback imediato
            sobre o aprendizado.
          </p>
        </div>
      </CaseSection>

      {/* ─── 04 · IA NO PROCESSO ─── */}
      <CaseSection index="04" label="IA no Processo" title="Como o Claude Code transformou meu workflow" tinted>
        <div className={styles.aiProcessHero}>
          <div className={styles.aiProcessText}>
            <p className={styles.aiProcessLead}>
              Este projeto foi construído com uma pergunta central: <strong>o que muda quando um Designer de Produto
              usa IA não só para gerar imagens, mas como parceiro real de raciocínio e desenvolvimento?</strong>
            </p>
            <p>
              A resposta é: o ciclo de concepção → validação → entrega colapsa de meses para semanas.
              Não porque a IA substitui o designer, mas porque ela elimina a fricção entre
              uma boa ideia e um produto testável.
            </p>
          </div>
        </div>

        <div className={styles.aiStepsRow}>
          {[
            {
              icon: Brain,
              phase: 'Arquitetura',
              before: 'Semanas desenhando fluxos no Figma, apresentando para o time, esperando feedback',
              after: 'Conversa de 30 minutos com o Claude explorando trade-offs de arquitetura, saindo com decisões documentadas',
            },
            {
              icon: Zap,
              phase: 'Prototipação',
              before: 'Protótipo no Figma que simula, mas não responde: você nunca sabe se vai funcionar no celular',
              after: 'Código React funcional gerado com Claude Code: app real no simulador iOS em horas, não semanas',
            },
            {
              icon: Clock,
              phase: 'Iteração',
              before: 'Ciclo: designer → handoff → dev → feedback → volta para o designer. Cada iteração: dias',
              after: 'Ciclo: ver o problema no simulador → ajustar o código com Claude Code → testar. Cada iteração: minutos',
            },
          ].map((step, i) => (
            <motion.div
              key={step.phase}
              className={styles.aiStep}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className={styles.aiStepIcon}>
                <step.icon size={20} strokeWidth={1.5} />
              </div>
              <h3 className={styles.aiStepPhase}>{step.phase}</h3>
              <div className={styles.aiStepComparison}>
                <div className={styles.aiStepBefore}>
                  <span className={styles.aiStepBadge}>Antes</span>
                  <p>{step.before}</p>
                </div>
                <div className={styles.aiStepAfter}>
                  <span className={[styles.aiStepBadge, styles.aiStepBadgeAfter].join(' ')}>Com IA</span>
                  <p>{step.after}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className={styles.aiReflection}>
          <p className={styles.aiReflectionLabel}>Reflexão honesta</p>
          <p className={styles.aiReflectionText}>
            IA não elimina o trabalho de design: elimina a <em>fricção mecânica</em> entre
            pensar e testar. A decisão de usar dark mode first, de estruturar o BKT como
            sistema central ou de tornar o tutor socrático em vez de direto: essas são decisões
            de designer que a IA não toma. O que a IA faz é garantir que, uma vez tomada a
            decisão, ela vira produto em horas.
            <strong> O designer que usa IA bem não é substituído: se torna 10x mais produtivo.</strong>
          </p>
        </div>
      </CaseSection>

      {/* ─── 05 · PROCESSO DE DESIGN ─── */}
      <CaseSection index="05" label="Processo de Design" title="De zero ao app iOS nativo">
        <div className={styles.processGrid}>
          {processSteps.map((step, i) => (
            <ProcessStep key={step.number} {...step} index={i} />
          ))}
        </div>

        <div className={styles.timelineNote}>
          <div className={styles.timelineNoteInner}>
            <Zap size={16} strokeWidth={1.5} className={styles.timelineNoteIcon} />
            <p>
              <strong>14 telas funcionais, design system completo, app nativo iOS.</strong>{' '}
              Um processo tradicional (designer → handoff → dev) levaria 3-4 meses mínimos.
              Com AI-assisted design, o ciclo completo durou semanas, sem sacrificar qualidade de código ou experiência.
            </p>
          </div>
        </div>
      </CaseSection>

      {/* ─── 06 · DECISÕES DE DESIGN ─── */}
      <CaseSection index="06" label="Decisões de Design" title="Cada decisão tem uma razão" tinted>
        <div className={styles.insightGrid}>
          {designDecisions.map((d, i) => (
            <InsightCard key={d.title} icon={d.icon} title={d.title} body={d.body} index={i} />
          ))}
        </div>

        {/* PRINCIPAIS TELAS */}
        <div className={styles.screenSet}>
          <p className={styles.screenSetLabel}>Principais telas do produto</p>
          <PhoneMockupGallery
            columns={4}
            noScroll
            screens={[
              { id: 'home', src: s('home.png'), label: 'Home: Dashboard' },
              { id: 'mapa1', src: s('mapa-matematica.png'), label: 'Mapa de Conhecimento · BKT' },
              { id: 'ar1', src: s('arena-ranking.png'), label: 'Quiz Arena: Ranking' },
              { id: 'fl1', src: s('flashcards.png'), label: 'Flashcards por matéria' },
            ]}
          />
          <p className={styles.screenCaption}>
            Cada tela carrega uma das decisões de design acima: dashboard com progresso sempre
            visível, mapa de habilidades guiado por BKT, competição saudável na Arena e revisão
            espaçada nos Flashcards.
          </p>
        </div>
      </CaseSection>

      {/* ─── 07 · TUTOR IA ─── */}
      <CaseSection index="07" label="Tutor IA" title="Socrático por design, não por acidente">
        <div className={styles.tutorLayout}>
          <div className={styles.tutorText}>
            <p>
              O Tutor IA do Study não responde perguntas: <strong>faz perguntas</strong>.
              Essa decisão contraintuitiva é baseada em décadas de pesquisa em ciência cognitiva:
              o aprendizado ativo (descoberta guiada) retém 2-3x mais do que receber a resposta diretamente.
            </p>
            <p>
              Quando o aluno pede ajuda com equação do 2º grau, o Tutor não resolve:
              pergunta que métodos ele conhece, pede que identifique os coeficientes,
              guia até a descoberta. A resposta final vem do próprio aluno.
            </p>

            <div className={styles.tutorPrinciples}>
              {[
                { n: '5', label: 'Estágios de aprendizagem', desc: 'Contexto → Conceito → Exemplo → Exercício → Validação' },
                { n: '3', label: 'Ações rápidas', desc: '"Acertei" · "Preciso de dica" · "Explica diferente"' },
                { n: '∞', label: 'Progressões adaptativas', desc: 'Nível de dica aumenta gradualmente, nunca entrega a resposta de bandeja' },
              ].map((p) => (
                <div key={p.n} className={styles.tutorPrincipleItem}>
                  <span className={styles.tutorPrincipleN}>{p.n}</span>
                  <div>
                    <strong>{p.label}</strong>
                    <p>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.tutorPhone}>
            <PhoneMockupGallery
              columns={1}
              noScroll
              screens={[
                { id: 'tutor', src: s('tutor-ia.png'), label: 'Tutor IA: método socrático' },
              ]}
            />
          </div>
        </div>
      </CaseSection>

      {/* ─── 08 · DECISÕES DE NEGÓCIO ─── */}
      <CaseSection index="08" label="Decisões de Negócio" title="Produto que pensa como empresa" tinted>
        <div className={styles.businessGrid}>
          {businessDecisions.map((d, i) => (
            <motion.div
              key={d.title}
              className={styles.businessCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <span className={styles.businessN}>{String(i + 1).padStart(2, '0')}</span>
              <h3 className={styles.businessTitle}>{d.title}</h3>
              <p className={styles.businessBody}>{d.body}</p>
            </motion.div>
          ))}
        </div>

        <QuoteBlock
          quote="O knowledge graph com BKT é o ativo mais valioso: quanto mais o aluno usa, mais o modelo aprende sobre ele. É um flywheel de dados que concorrentes não conseguem copiar do dia para a noite."
          author="Decisão de produto"
          role="Registro de decisão, Arquitetura do sistema Study"
        />
      </CaseSection>

      {/* ─── 09 · REFLEXÃO ─── */}
      <CaseSection index="09" label="Reflexão" title="O que esse projeto me ensinou">
        <div className={styles.learningGrid}>
          {[
            {
              n: '1',
              title: 'IA amplifica decisões de design, não as substitui',
              body: 'Cada decisão de produto (usar BKT, tornar o tutor socrático, criar cores por matéria) foi minha. O Claude acelerou a implementação dessas decisões. O valor do designer está no julgamento, não na execução mecânica.',
            },
            {
              n: '2',
              title: 'Código real > protótipo simulado',
              body: 'Testar no simulador iOS desde cedo revelou problemas que o Figma nunca mostraria: safe areas, performance de animação, touch targets, tamanho de fonte em tela real. Design decisions mudam quando você vê no dispositivo.',
            },
            {
              n: '3',
              title: 'Design system é produto, não custo',
              body: 'Investir tempo nos tokens CSS no começo (paleta, tipografia, espaçamentos, dark mode) multiplicou a velocidade de todas as telas seguintes. Cada nova tela saiu consistente por padrão, sem revisão.',
            },
            {
              n: '4',
              title: 'Animações mudam a percepção de qualidade',
              body: 'As animações com Framer Motion (stagger de entrada, spring no podium, glow no timer) são o que separa "app funcional" de "app que parece premium". O mesmo conteúdo, com ou sem animação, gera percepções radicalmente diferentes.',
            },
          ].map((l, i) => (
            <motion.div
              key={l.n}
              className={styles.learning}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
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
          <p className={styles.nextLabel}>Próximo projeto</p>
          <Link to="/trabalho/vem" className={styles.nextLink}>
            <span className={styles.nextTitle}>VEM, Mobilidade urbana</span>
            <ArrowUpRight size={24} strokeWidth={1.5} className={styles.nextArrow} />
          </Link>
        </div>
      </section>
      </CaseLayout>

      <Divider />
      <Footer />
    </main>
  )
}
