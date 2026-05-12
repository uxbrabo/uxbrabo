import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Footer } from '@/components/layout/Footer'
import { CaseSection } from '@/components/casestudy/CaseSection'
import { MetricCard } from '@/components/casestudy/MetricCard'
import { BarChart } from '@/components/casestudy/BarChart'
import { DonutChart } from '@/components/casestudy/DonutChart'
import { QuoteBlock } from '@/components/casestudy/QuoteBlock'
import { ProcessStep } from '@/components/casestudy/ProcessStep'
import { InsightCard } from '@/components/casestudy/InsightCard'
import { PhoneMockupGallery } from '@/components/casestudy/PhoneMockupGallery'
import { LaptopMockupGallery } from '@/components/casestudy/LaptopMockupGallery'
import { Divider } from '@/components/ui/Divider'
import styles from './VemCaseStudy.module.css'

const v = (name: string) => `/assets/vem/${name}`

/* ─── DATA ───────────────────────────────────────────── */
const painPointsData = [
  { label: 'Dificuldade para recarregar sem sair de casa', value: 79 },
  { label: 'Não sabe o saldo antes de embarcar', value: 74 },
  { label: 'Filas longas nos postos de atendimento', value: 71 },
  { label: 'Processo de solicitação de cartão confuso', value: 65 },
  { label: 'Bloqueio de cartão perdido exige ida presencial', value: 58 },
]

const accessData = [
  { label: 'Usam smartphone para acessar serviços públicos', value: 84 },
  { label: 'Preferem resolver online a ir ao posto de atendimento', value: 77 },
  { label: 'Já tentaram recarregar online mas desistiram', value: 61 },
  { label: 'Não sabem que existe portal de autoatendimento', value: 54 },
  { label: 'Têm dificuldade com interfaces governamentais', value: 49 },
]

const heuristics = [
  { name: 'Visibilidade do status do sistema', before: 2, after: 9 },
  { name: 'Controle e liberdade do usuário', before: 3, after: 8 },
  { name: 'Prevenção de erros', before: 2, after: 9 },
  { name: 'Reconhecimento vs. memorização', before: 3, after: 9 },
  { name: 'Consistência e padrões', before: 2, after: 8 },
  { name: 'Design estético e minimalista', before: 2, after: 9 },
]

const usabilityBefore = [
  { label: 'Conclusão de tarefas-chave', value: 44 },
  { label: 'Satisfação geral (0–100)', value: 31 },
  { label: 'Confiança no sistema (0–100)', value: 36 },
  { label: 'NPS normalizado (0–100)', value: 22 },
]

const usabilityAfter = [
  { label: 'Conclusão de tarefas-chave', value: 92 },
  { label: 'Satisfação geral (0–100)', value: 79 },
  { label: 'Confiança no sistema (0–100)', value: 84 },
  { label: 'NPS normalizado (0–100)', value: 71 },
]

const processSteps = [
  {
    number: '01',
    phase: 'Descoberta',
    title: 'Entender o ecossistema do transporte público',
    description: 'Mapeei a jornada completa de quem usa o VEM — da compra do cartão à recarga e ao embarque. Analisei o portal existente, os terminais físicos, o atendimento presencial e os canais concorrentes (CittaMobi, RecargaPay) para entender onde o digital podia reduzir fricção.',
    methods: ['Desk Research', 'Análise do sistema atual', 'Entrevistas exploratórias (n=12)', 'Shadowing em terminais'],
  },
  {
    number: '02',
    phase: 'Pesquisa',
    title: 'Ouvir quem usa o transporte todo dia',
    description: 'Conduzi entrevistas com 5 perfis distintos de usuário (trabalhador, estudante, pessoa com deficiência, empregador e usuário casual) e um survey com 112 respondentes. O perfil dominante é de baixa renda, alta dependência do celular e baixa tolerância a erros digitais.',
    methods: ['Entrevistas profundas (n=18)', 'Survey quantitativo (n=112)', 'JTBD Framework', 'Jornada por tipo de cartão'],
  },
  {
    number: '03',
    phase: 'Definição',
    title: 'Cinco cartões, uma plataforma coerente',
    description: 'O VEM tem 5 tipos de cartão (Comum, Estudante, Trabalhador, Livre Acesso e Infantil), cada um com regras e fluxos distintos. O desafio foi criar uma arquitetura de informação unificada sem sobrecarregar o usuário com complexidade que não é dele.',
    methods: ['Personas (5 perfis)', 'Arquitetura de informação', 'Card sorting com usuários', 'Priorização MoSCoW'],
  },
  {
    number: '04',
    phase: 'Ideação',
    title: 'Design system acessível como base',
    description: 'Antes de qualquer tela, construí um design system com foco em acessibilidade WCAG AA — contraste de cor, tamanho de toque, tipografia legível. Para um serviço público usado por toda a população, acessibilidade não é diferencial, é requisito.',
    methods: ['Design System', 'Acessibilidade WCAG AA', 'Wireframes low-fi', 'Design Principles'],
  },
  {
    number: '05',
    phase: 'Design',
    title: 'Responsivo e claro para todos',
    description: 'Projetei cada tela em desktop e mobile simultaneamente. A linguagem foi pensada para usuários com baixa familiaridade digital — ações com nomes diretos, feedback visual em cada etapa, sem jargão técnico. O objetivo: qualquer pessoa consegue recarregar em menos de 3 minutos.',
    methods: ['Protótipo hi-fi (Desktop + Mobile)', 'Linguagem simples (Plain language)', 'Estados de UI completos', 'WCAG AA'],
  },
  {
    number: '06',
    phase: 'Validação',
    title: 'Testar com quem mais precisa',
    description: 'Priorizei usuários com menor familiaridade digital nos testes — trabalhadores e pessoas idosas. SUS Score subiu de 36 para 82. O maior ganho foi na recarga online: 100% dos participantes concluíram o fluxo sem ajuda, contra 38% no sistema anterior.',
    methods: ['Testes moderados (n=14)', 'Maze (n=24)', 'SUS Score', 'Think Aloud', 'Inclusão de usuários 50+'],
  },
]

const researchInsights = [
  {
    icon: '🚌',
    title: 'Saldo invisível = embaraço na catraca',
    body: '74% dos entrevistados já passaram pela situação de ter o cartão recusado na catraca sem saber o saldo. Além do constrangimento, gera atraso e desconfiança no sistema.',
  },
  {
    icon: '📍',
    title: 'Posto de atendimento como único recurso',
    body: '61% que tentaram usar o portal digital desistiram no meio do processo. O posto presencial na Soledade virou muleta por falta de alternativa digital funcional.',
  },
  {
    icon: '📱',
    title: 'Celular é a única tela que importa',
    body: '84% dos usuários acessam serviços públicos pelo smartphone. A maioria não tem computador em casa — o mobile não é uma versão secundária, é o produto principal.',
  },
  {
    icon: '🏢',
    title: 'Empregadores gerenciam cartões no papel',
    body: 'Empresas que fornecem VEM Trabalhador controlavam os cartões por planilha e telefone. Nenhuma interface de gestão em lote existia — processo manual, lento e propenso a erro.',
  },
]

const designPrinciples = [
  { title: 'Serviço público, experiência privada', body: 'O usuário não deveria perceber diferença entre usar o VEM digital e qualquer app de banco moderno. Ser público não é desculpa para UX ruim.' },
  { title: 'Zero jargão', body: 'Nenhum usuário sabe o que é "bilhetagem eletrônica" no cotidiano. Botões dizem o que fazem: "Recarregar meu cartão", não "Transacionar crédito".' },
  { title: 'Mobile como produto principal', body: 'Cada tela foi projetada primeiro para o celular. O desktop foi consequência — não o contrário como era antes.' },
  { title: 'Acessibilidade sem concessões', body: 'WCAG AA em todos os componentes. Tamanho mínimo de toque de 44px, contraste 4.5:1, fluxos funcionais com leitores de tela. O VEM Livre Acesso exige isso.' },
]

/* ─── COMPONENT ──────────────────────────────────────── */
export function VemCaseStudy() {
  return (
    <main className={styles.page}>

      {/* ─── HERO ─── */}
      <motion.section
        className={styles.hero}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img src={v('capa.png')} alt="" className={styles.heroBgImg} />
        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
          <motion.div
            className={styles.heroMeta}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <span>UX Design · UI Design · Web Responsivo</span>
            <span>2024</span>
          </motion.div>

          <motion.p
            className={styles.heroTagline}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            Portal digital do Vale Eletrônico Metropolitano — o cartão inteligente
            do transporte público da Região Metropolitana do Recife, projetado para
            que qualquer pessoa consiga recarregar, solicitar e gerenciar seu cartão
            sem sair de casa.
          </motion.p>
          <motion.a
            href="https://cartaovem.com.br/"
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

      {/* ─── OVERVIEW STRIP ─── */}
      <div className={styles.overviewStrip}>
        <div className={styles.overviewInner}>
          {[
            { label: 'Meu papel', value: 'Lead UX/UI Designer' },
            { label: 'Plataforma', value: 'Web — Desktop & Mobile' },
            { label: 'Duração', value: '5 meses' },
            { label: 'Time', value: '1 Designer · 4 Devs · 1 PM' },
            { label: 'Entregáveis', value: 'Research · Design System · 60+ telas · Handoff' },
          ].map((item) => (
            <div key={item.label} className={styles.overviewItem}>
              <span className={styles.overviewLabel}>{item.label}</span>
              <span className={styles.overviewValue}>{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ─── 01 · CONTEXTO ─── */}
      <CaseSection index="01" label="Contexto" title="O cartão que move Recife">
        <div className={styles.prose}>
          <p>
            O VEM — Vale Eletrônico Metropolitano — é o sistema de bilhetagem
            eletrônica do transporte público da <strong>Região Metropolitana do Recife</strong>.
            É o cartão que substitui o dinheiro em espécie para pagar passagens de ônibus
            e BRT, facilitando a integração entre linhas e eliminando o troco.
          </p>
          <p>
            São <strong>5 tipos de cartão</strong>: Comum, Estudante (meia-passagem),
            Trabalhador (fornecido pelo empregador), Livre Acesso (para pessoas com deficiência)
            e Infantil (gratuito até 6 anos). Cada um com regras, públicos e fluxos distintos.
          </p>
          <p>
            O desafio foi projetar um portal digital que atendesse todos esses perfis —
            do estudante de 15 anos ao trabalhador de 58 — com clareza, acessibilidade e
            sem depender do posto de atendimento na Rua da Soledade para resolver problemas simples.
          </p>
        </div>

        <div className={styles.contextStatsRow}>
          <div className={styles.contextStatItem}>
            <span className={styles.contextStatValue}>5</span>
            <span className={styles.contextStatTitle}>Tipos de cartão</span>
            <span className={styles.contextStatDesc}>Comum, Estudante, Trabalhador, Livre Acesso e Infantil — cada um com regras e fluxos próprios</span>
          </div>
          <div className={styles.contextStatDivider} />
          <div className={styles.contextStatItem}>
            <span className={styles.contextStatValue}>RMR</span>
            <span className={styles.contextStatTitle}>Região Metropolitana do Recife</span>
            <span className={styles.contextStatDesc}>Milhões de usuários do transporte público que dependem do VEM diariamente para se locomover</span>
          </div>
          <div className={styles.contextStatDivider} />
          <div className={styles.contextStatItem}>
            <span className={styles.contextStatValue}>84%</span>
            <span className={styles.contextStatTitle}>Acesso via smartphone</span>
            <span className={styles.contextStatDesc}>O portal anterior não era responsivo — o canal mais usado pela população estava sem suporte</span>
          </div>
        </div>
      </CaseSection>

      {/* ─── 02 · PROBLEMA ─── */}
      <CaseSection index="02" label="O Problema" title="Digital que não funciona é pior que o presencial" tinted>
        <QuoteBlock
          quote="Eu tentei recarregar pelo site três vezes. Na primeira não carregou. Na segunda não aceitou meu cartão. Na terceira desisti e fui ao terminal. Perdi a manhã."
          author="Entrevistada #05"
          role="Trabalhadora doméstica, usuária do VEM Trabalhador, 43 anos"
        />

        <div className={styles.problemStatement}>
          <p className={styles.psLabel}>Problem Statement</p>
          <p className={styles.psText}>
            Usuários do VEM precisam gerenciar um serviço essencial para o seu dia a dia, mas
            o portal digital é <strong>inacessível, confuso e não responsivo</strong> — forçando
            quem mais precisa de conveniência (trabalhadores, estudantes, pessoas com deficiência)
            a perder tempo em filas em postos físicos para resolver problemas que deveriam
            ter solução com três toques no celular.
          </p>
        </div>

        <div>
          <p className={styles.chartTitle}>Principais dores relatadas pelos usuários do VEM</p>
          <BarChart data={painPointsData} unit="%" />
          <p className={styles.chartSource}>Fonte: survey com 112 usuários do transporte público da RMR, Fev–Mar 2024</p>
        </div>
      </CaseSection>

      {/* ─── 03 · PESQUISA ─── */}
      <CaseSection index="03" label="Pesquisa" title="Cinco cartões, cinco realidades">
        <div className={styles.researchMethods}>
          {[
            { num: '18', label: 'Entrevistas em profundidade' },
            { num: '112', label: 'Respostas ao survey' },
            { num: '5', label: 'Perfis de usuário (por tipo de cartão)' },
            { num: '3', label: 'Shadowing em terminais integrados' },
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
          <p className={styles.chartTitle}>Comportamento digital dos usuários do transporte público</p>
          <BarChart data={accessData} unit="%" color="gray" />
          <p className={styles.chartSource}>Fonte: entrevistas + survey combinados, n=112</p>
        </div>

        <QuoteBlock
          quote="Minha empresa tem 80 funcionários com VEM Trabalhador. Eu controlo tudo por planilha e telefone. Quando alguém perde o cartão, eu preciso ir pessoalmente ao posto. Não tem como delegar."
          author="Entrevistado #12"
          role="Gestor de RH, empresa de logística, Recife"
        />

        {/* Personas */}
        <div className={styles.personaDual}>
          <div className={styles.persona}>
            <div className={styles.personaHeader}>
              <p className={styles.psLabel}>Persona 1 — usuário do VEM Estudante</p>
              <h3 className={styles.personaName}>Mariana Santos</h3>
              <p className={styles.personaRole}>17 anos · Estudante do ensino médio · Olinda, PE</p>
            </div>
            <div className={styles.personaBody}>
              <div className={styles.personaCol}>
                <p className={styles.personaColTitle}>Objetivos</p>
                <ul className={styles.personaList}>
                  <li>Recarregar sem sair de casa</li>
                  <li>Saber o saldo antes de pegar o ônibus</li>
                  <li>Renovar o benefício de meia-passagem</li>
                  <li>Bloquear se perder sem ir ao posto</li>
                </ul>
              </div>
              <div className={styles.personaCol}>
                <p className={styles.personaColTitle}>Frustrações</p>
                <ul className={styles.personaList}>
                  <li>Site não abre no celular direito</li>
                  <li>Teve o cartão recusado na catraca</li>
                  <li>Processo de cadastro estudantil confuso</li>
                  <li>Suporte só por telefone ou presencial</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.persona}>
            <div className={styles.personaHeader}>
              <p className={styles.psLabel}>Persona 2 — usuário do VEM Trabalhador</p>
              <h3 className={styles.personaName}>José Carlos</h3>
              <p className={styles.personaRole}>48 anos · Operador de caixa · Caruaru, PE</p>
            </div>
            <div className={styles.personaBody}>
              <div className={styles.personaCol}>
                <p className={styles.personaColTitle}>Objetivos</p>
                <ul className={styles.personaList}>
                  <li>Ver quando o saldo foi carregado pelo empregador</li>
                  <li>Solicitar 2ª via se perder</li>
                  <li>Consultar extrato de uso</li>
                  <li>Resolver tudo sem faltar ao trabalho</li>
                </ul>
              </div>
              <div className={styles.personaCol}>
                <p className={styles.personaColTitle}>Frustrações</p>
                <ul className={styles.personaList}>
                  <li>Posto de atendimento longe de casa</li>
                  <li>Horário do posto incompatível com trabalho</li>
                  <li>Não tem PC em casa para usar o portal</li>
                  <li>Baixa escolaridade digital</li>
                </ul>
              </div>
            </div>
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

        <motion.div
          className={styles.wireframeBlock}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8%' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.wireframeLabel}>
            <span>Wireframes</span>
            <span>Visão geral da arquitetura — 20+ telas estruturadas antes do hi-fi</span>
          </div>
          <img
            src={v('wireframe.png')}
            alt="Wireframes do portal VEM — visão geral de todas as telas"
            className={styles.wireframeImg}
          />
        </motion.div>
      </CaseSection>

      {/* ─── 05 · DESIGN SYSTEM ─── */}
      <CaseSection index="05" label="Design System" title="Acessibilidade como fundação">
        <div className={styles.prose} style={{ maxWidth: 720 }}>
          <p>
            Antes de projetar qualquer tela, construí o design system completo do VEM do zero —
            paleta de cores com contraste WCAG AA, escala tipográfica, sistema de botões com todos
            os estados, biblioteca de ícones e componentes documentados para handoff. Com 60+ telas
            em desktop e mobile, consistência não é opcional.
          </p>
        </div>

        {/* ── CORES ── */}
        <div className={styles.dsBlock}>
          <p className={styles.dsSectionTitle}>Paleta de cores</p>
          <div className={styles.dsColorGrid}>
            {[
              { hex: '#E75B32', name: 'Brand Orange', role: 'CTA principal, logo' },
              { hex: '#F67F1D', name: 'Orange Light', role: 'Hover, destaque' },
              { hex: '#0165AA', name: 'Brand Blue', role: 'Ações interativas' },
              { hex: '#259EDE', name: 'Blue Light', role: 'Links, secundário' },
              { hex: '#333333', name: 'Text Primary', role: 'Títulos e textos' },
              { hex: '#69615C', name: 'Text Secondary', role: 'Corpo de texto' },
              { hex: '#CCCCCC', name: 'Border', role: 'Separadores, bordas' },
              { hex: '#EEEEEE', name: 'Surface', role: 'Fundos alternados' },
              { hex: '#44AC48', name: 'Success', role: 'Concluído, sucesso' },
              { hex: '#CC0000', name: 'Error', role: 'Erro, cancelamento' },
              { hex: '#D3532E', name: 'Orange Dark', role: 'Hover destrutivo' },
              { hex: '#FFFFFF', name: 'White', role: 'Fundo principal' },
            ].map((c) => (
              <motion.div
                key={c.hex}
                className={styles.dsSwatch}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <div
                  className={styles.dsSwatchColor}
                  style={{
                    backgroundColor: c.hex,
                    border: c.hex === '#FFFFFF' ? '1px solid #EEEEEE' : 'none',
                  }}
                />
                <div className={styles.dsSwatchInfo}>
                  <span className={styles.dsSwatchHex}>{c.hex}</span>
                  <span className={styles.dsSwatchName}>{c.name}</span>
                  <span className={styles.dsSwatchRole}>{c.role}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── TIPOGRAFIA ── */}
        <div className={styles.dsBlock}>
          <p className={styles.dsSectionTitle}>Escala tipográfica</p>
          <div className={styles.dsTypeScale}>
            {[
              { label: 'Display', size: '48px', weight: '700', color: '#333333', sample: 'Vale Eletrônico' },
              { label: 'H1', size: '36px', weight: '700', color: '#333333', sample: 'Meus Cartões VEM' },
              { label: 'H2', size: '28px', weight: '700', color: '#333333', sample: 'Recarga online' },
              { label: 'H3', size: '20px', weight: '700', color: '#333333', sample: 'Solicitar segunda via' },
              { label: 'Body', size: '16px', weight: '400', color: '#69615C', sample: 'Recarregue seu cartão VEM de qualquer lugar, a qualquer hora.' },
              { label: 'Small', size: '14px', weight: '400', color: '#69615C', sample: 'Válido para todos os tipos de cartão VEM' },
              { label: 'Caption', size: '12px', weight: '400', color: '#69615C', sample: 'VEM — Vale Eletrônico Metropolitano · Recife, PE' },
            ].map((t) => (
              <div key={t.label} className={styles.dsTypeRow}>
                <span className={styles.dsTypeLabel}>{t.label}</span>
                <span className={styles.dsTypeMeta}>{t.size} · {t.weight === '700' ? 'Bold' : 'Regular'}</span>
                <span
                  className={styles.dsTypeSample}
                  style={{ fontSize: t.size, fontWeight: t.weight, color: t.color }}
                >
                  {t.sample}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── BOTÕES ── */}
        <div className={styles.dsBlock}>
          <p className={styles.dsSectionTitle}>Sistema de botões & estados</p>
          <div className={styles.dsButtonSection}>
            <div className={styles.dsButtonGroup}>
              <span className={styles.dsButtonGroupLabel}>Primário — Azul</span>
              <div className={styles.dsButtonRow}>
                <button className={styles.dsBtnBlue}>Acessar</button>
                <button className={styles.dsBtnBlueHover}>Hover</button>
                <button className={styles.dsBtnDisabled} disabled>Desabilitado</button>
              </div>
            </div>
            <div className={styles.dsButtonGroup}>
              <span className={styles.dsButtonGroupLabel}>Primário — Laranja</span>
              <div className={styles.dsButtonRow}>
                <button className={styles.dsBtnOrange}>Saiba mais</button>
                <button className={styles.dsBtnOrangeHover}>Hover</button>
                <button className={styles.dsBtnDisabled} disabled>Desabilitado</button>
              </div>
            </div>
            <div className={styles.dsButtonGroup}>
              <span className={styles.dsButtonGroupLabel}>Ações de lista</span>
              <div className={styles.dsActionRow}>
                <div className={styles.dsActionItem} style={{ backgroundColor: '#E75B32' }}>
                  <span>Definir como cartão principal</span>
                  <span className={styles.dsActionIcon}>›</span>
                </div>
                <div className={styles.dsActionItem} style={{ backgroundColor: '#0165AA' }}>
                  <span>Recarregar via chat online</span>
                  <span className={styles.dsActionIcon}>›</span>
                </div>
                <div className={styles.dsActionItem} style={{ backgroundColor: '#D3532E' }}>
                  <span>Bloqueio / Desbloqueio</span>
                  <span className={styles.dsActionIcon}>›</span>
                </div>
              </div>
            </div>
            <div className={styles.dsButtonGroup}>
              <span className={styles.dsButtonGroupLabel}>Status badges</span>
              <div className={styles.dsStatusRow}>
                <span className={styles.dsBadgeSuccess}>● Concluído</span>
                <span className={styles.dsBadgePending}>● Pendente</span>
                <span className={styles.dsBadgeError}>● Cancelado</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── CARDS ── */}
        <div className={styles.dsBlock}>
          <p className={styles.dsSectionTitle}>Componentes de card</p>
          <div className={styles.dsCardGrid}>
            {/* Card cartão físico */}
            <div className={styles.dsCardPhysical} style={{ background: 'linear-gradient(135deg, #E75B32, #D3532E)' }}>
              <div className={styles.dsCardLogo}>vem</div>
              <div className={styles.dsCardBottom}>
                <span className={styles.dsCardType}>VEM Estudante</span>
                <span className={styles.dsCardNumber}>•••• 4821</span>
              </div>
            </div>
            <div className={styles.dsCardPhysical} style={{ background: 'linear-gradient(135deg, #0165AA, #259EDE)' }}>
              <div className={styles.dsCardLogo}>vem</div>
              <div className={styles.dsCardBottom}>
                <span className={styles.dsCardType}>VEM Trabalhador</span>
                <span className={styles.dsCardNumber}>•••• 7304</span>
              </div>
            </div>
            {/* Feature card */}
            <div className={styles.dsCardFeature}>
              <div className={styles.dsCardFeatureLogo}>vem</div>
              <p className={styles.dsCardFeatureTitle}>Solicitação da 1ª e novas vias</p>
              <button className={styles.dsCardFeatureCta}>Saiba mais →</button>
            </div>
            {/* News card */}
            <div className={styles.dsCardNews}>
              <p className={styles.dsCardNewsTitle}>Novo horário de funcionamento do posto de atendimento SAC</p>
              <span className={styles.dsCardNewsDate}>16 de fevereiro de 2024</span>
            </div>
          </div>
        </div>

        {/* ── ÍCONES ── */}
        <div className={styles.dsBlock}>
          <p className={styles.dsSectionTitle}>Biblioteca de ícones</p>
          <div className={styles.dsIconSection}>
            {[
              {
                category: 'UI Controls',
                icons: ['→', '👤', 'ℹ', '✓', '⚠', '✕', '»', '↓'],
              },
              {
                category: 'Cartão & Pagamento',
                icons: ['💳', '💰', '🚫', '☝', '📲'],
              },
              {
                category: 'Serviços VEM',
                icons: ['🔔', '💲', '👤', '❌', '📱', '🪪'],
              },
              {
                category: 'Conta & Dados',
                icons: ['⭕', '🪪', '📋', '📄', '📅', '📍'],
              },
              {
                category: 'Social',
                icons: ['💬', '📷', '👤'],
              },
            ].map((cat) => (
              <div key={cat.category} className={styles.dsIconGroup}>
                <span className={styles.dsIconGroupLabel}>{cat.category}</span>
                <div className={styles.dsIconRow}>
                  {cat.icons.map((icon, i) => (
                    <div key={i} className={styles.dsIconItem}>{icon}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className={styles.dsIconImageWrapper}>
            <img src={v('ds-icones.png')} alt="Biblioteca de ícones VEM" className={styles.dsIconImage} />
          </div>
        </div>

        {/* ── HEADER & FOOTER ── */}
        <div className={styles.dsBlock}>
          <p className={styles.dsSectionTitle}>Navegação — Header & Footer</p>
          <div className={styles.dsNavPreview}>
            <div className={styles.dsHeader}>
              <div className={styles.dsHeaderLogo}>vem</div>
              <nav className={styles.dsHeaderNav}>
                {['Para você', 'Para empresas', 'Informativos', 'Sobre o VEM', 'Ajuda'].map((item) => (
                  <span key={item} className={styles.dsHeaderNavItem}>{item}</span>
                ))}
              </nav>
              <div className={styles.dsHeaderActions}>
                <span className={styles.dsHeaderAction}>Minha conta</span>
                <span className={[styles.dsHeaderAction, styles.dsHeaderActionActive].join(' ')}>Posto Virtual</span>
              </div>
            </div>
            <img src={v('ds-header-footer.png')} alt="Header e footer do VEM" className={styles.dsNavImage} />
          </div>
        </div>

        {/* ── PRINCÍPIOS ── */}
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
      </CaseSection>

      {/* ─── 06 · TELAS ─── */}
      <CaseSection index="06" label="Decisões de Design" title="Desktop e mobile em paralelo" tinted>

        {/* Desktop */}
        <div className={styles.screenSet}>
          <p className={styles.screenSetLabel}>Desktop</p>
          <LaptopMockupGallery
            columns={3}
            screens={[
              { id: 'home-d',   src: v('home-desktop.png'),                 label: 'Home' },
              { id: 'login-d',  src: v('login-desktop.png'),                label: 'Login' },
              { id: 'pv-d',     src: v('para-voce-desktop.png'),            label: 'Para Você' },
              { id: 'pe-d',     src: v('para-empresas-desktop.png'),        label: 'Para Empresas' },
              { id: 'cpf-d',    src: v('cadastro-cpf-desktop.png'),         label: 'Cadastro CPF' },
              { id: 'cnpj-d',   src: v('cadastro-cnpj-desktop.png'),        label: 'Cadastro CNPJ' },
              { id: 'cart-d',   src: v('cartoes-desktop.png'),              label: 'Meus Cartões' },
              { id: 'anal-d',   src: v('cartoes-analise-desktop.png'),      label: 'Análise de uso' },
              { id: 'pix-d',    src: v('cartoes-receber-pix-desktop.png'),  label: 'Recarga PIX' },
              { id: 'pv-desk',  src: v('primeira-via-desktop.png'),         label: 'Solicitar cartão' },
              { id: 'blq-d',    src: v('cartoes-bloqueio-desktop.png'),     label: 'Bloqueio' },
              { id: 'nv-d',     src: v('cartoes-nova-via-desktop.png'),     label: 'Segunda Via' },
              { id: 'err-d',    src: v('erro-desktop.png'),                 label: 'Erro' },
              { id: 'man-d',    src: v('manutencao-desktop.png'),           label: 'Manutenção' },
            ]}
          />
        </div>

        {/* Mobile */}
        <div className={styles.screenSet}>
          <p className={styles.screenSetLabel}>Mobile</p>
          <PhoneMockupGallery
            columns={4}
            screens={[
              { id: 'home-m',  src: v('home-mobile.png'),                  label: 'Home' },
              { id: 'login-m', src: v('login-mobile.png'),                 label: 'Login' },
              { id: 'pv-m',    src: v('para-voce-mobile.png'),             label: 'Para Você' },
              { id: 'pe-m',    src: v('para-empresas-mobile.png'),         label: 'Para Empresas' },
              { id: 'cpf-m',   src: v('cadastro-cpf-mobile.png'),          label: 'Cadastro CPF' },
              { id: 'cnpj-m',  src: v('cadastro-cnpj-mobile.png'),         label: 'Cadastro CNPJ' },
              { id: 'cart-m',  src: v('cartoes-mobile.png'),               label: 'Meus Cartões' },
              { id: 'anal-m',  src: v('cartoes-analise-mobile.png'),       label: 'Análise de uso' },
              { id: 'pix-m',   src: v('cartoes-receber-pix-mobile.png'),   label: 'Recarga PIX' },
              { id: 'pv-mob',  src: v('primeira-via-mobile.png'),          label: 'Solicitar cartão' },
              { id: 'blq-m',   src: v('cartoes-bloqueio-mobile.png'),      label: 'Bloqueio' },
              { id: 'nv-m',    src: v('cartoes-nova-via-mobile.png'),      label: 'Segunda Via' },
              { id: 'err-m',   src: v('erro-mobile.png'),                  label: 'Erro' },
              { id: 'man-m',   src: v('manutencao-mobile.png'),            label: 'Manutenção' },
            ]}
          />
        </div>

        {/* Heuristic */}
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

      {/* ─── 07 · TESTES ─── */}
      <CaseSection index="07" label="Testes de Usabilidade" title="Testando com quem mais precisa">
        <div className={styles.testInfo}>
          <div className={styles.testBlock}>
            <p className={styles.testBlockTitle}>Metodologia</p>
            <p className={styles.testBlockBody}>
              2 rodadas de testes moderados (7 participantes cada) + 1 não-moderada via Maze (24 participantes).
              Foco em usuários com baixa familiaridade digital — trabalhadores, estudantes e usuários acima de 50 anos,
              todos testando pelo celular.
            </p>
          </div>
          <div className={styles.testBlock}>
            <p className={styles.testBlockTitle}>Tarefas testadas</p>
            <ul className={styles.taskList}>
              <li>Recarregar o cartão via PIX</li>
              <li>Verificar saldo e extrato de uso</li>
              <li>Bloquear cartão perdido</li>
              <li>Solicitar segunda via</li>
              <li>Encontrar onde comprar o cartão pela primeira vez</li>
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
            <span className={styles.susValue}>36</span>
            <span className={styles.susLabel}>SUS Score — Antes<br /><small>"Inaceitável"</small></span>
          </div>
          <div className={styles.susArrow}>→</div>
          <div className={[styles.susItem, styles.susHighlight].join(' ')}>
            <span className={styles.susValue}>82</span>
            <span className={styles.susLabel}>SUS Score — Depois<br /><small>"Bom" (acima da média de 68)</small></span>
          </div>
        </div>

        <QuoteBlock
          quote="Consegui recarregar pelo celular pela primeira vez. Nunca tinha conseguido antes. Não preciso mais pedir para meu filho fazer por mim."
          author="Participante #11 — Teste de usabilidade"
          role="Dona de casa, usuária do VEM Comum, 54 anos"
        />
      </CaseSection>

      {/* ─── 08 · RESULTADOS ─── */}
      <CaseSection index="08" label="Resultados e Impacto" title="O que mudou de verdade" tinted>
        <div className={styles.metricsGrid}>
          <MetricCard value="82" label="SUS Score final" description="De 36 para 82 — de 'inaceitável' para 'bom' em duas rodadas de iteração" highlight index={0} />
          <MetricCard value="92%" label="Taxa de conclusão de tarefas" description="Contra 44% no sistema anterior — nos mesmos perfis de usuário" index={1} />
          <MetricCard value="+222%" label="NPS do produto" description="De 22 para 71 — usuários que antes recomendavam não usar passaram a recomendar" highlight index={2} />
          <MetricCard value="100%" label="Recarga concluída nos testes" description="Todos os participantes completaram a recarga sem ajuda — vs. 38% antes" index={3} />
          <MetricCard value="60+" label="Telas entregues" description="Desktop e Mobile com design system acessível e documentação completa de handoff" index={4} />
          <MetricCard value="WCAG AA" label="Acessibilidade" description="Conformidade total — especialmente crítico para o VEM Livre Acesso" index={5} />
        </div>

        <div className={styles.donutRow}>
          {[
            { value: 92, label: 'Conclusão de tarefas', sublabel: 'nos testes finais' },
            { value: 79, label: 'Satisfação geral', sublabel: 'pós-redesign' },
            { value: 84, label: 'Confiança no sistema', sublabel: 'pós-redesign' },
            { value: 71, label: 'NPS normalizado', sublabel: 'promotores do produto' },
          ].map((d, i) => (
            <motion.div key={d.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}>
              <DonutChart {...d} />
            </motion.div>
          ))}
        </div>
      </CaseSection>

      {/* ─── 09 · APRENDIZADOS ─── */}
      <CaseSection index="09" label="Aprendizados" title="O que eu levaria para o próximo projeto">
        <div className={styles.learningGrid}>
          {[
            {
              n: '1',
              title: 'Serviço público exige empatia dobrada',
              body: 'Usuários de serviços essenciais não têm a opção de "usar outro app". O peso de errar é maior — e a responsabilidade de acertar também. Pesquisa com usuários vulneráveis é inegociável.',
            },
            {
              n: '2',
              title: 'Mobile-first revelou o que desktop escondia',
              body: 'Projetar para telas pequenas expôs hierarquias fracas e fluxos desnecessariamente longos. Várias decisões de desktop foram revisadas porque no mobile ficava claro que estavam erradas.',
            },
            {
              n: '3',
              title: 'Linguagem simples é design',
              body: 'Renomear "transacionar crédito" para "recarregar meu cartão" aumentou a taxa de conclusão da tarefa em 40 pontos percentuais nos testes. Palavras são parte do UX.',
            },
            {
              n: '4',
              title: 'Acessibilidade desde o design system',
              body: 'Resolver acessibilidade no design system evitou retrabalho em cada tela. Contraste, tamanho de toque e hierarquia visual foram decisões tomadas uma vez — e valeram para as 60+ telas.',
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
            <motion.a href="/trabalho/cuca" className={styles.nextLink} whileHover={{ x: 6 }} transition={{ duration: 0.2 }}>
              <span className={styles.nextTitle}>Cuca App — Plataforma de aprendizagem</span>
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
