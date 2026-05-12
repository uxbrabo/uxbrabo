import { motion } from 'framer-motion'
import { Footer } from '@/components/layout/Footer'
import { CaseSection } from '@/components/casestudy/CaseSection'
import { MetricCard } from '@/components/casestudy/MetricCard'
import { BarChart } from '@/components/casestudy/BarChart'
import { DonutChart } from '@/components/casestudy/DonutChart'
import { ProcessStep } from '@/components/casestudy/ProcessStep'
import { InsightCard } from '@/components/casestudy/InsightCard'
import { ScreenGallery } from '@/components/casestudy/ScreenGallery'
import { QuoteBlock } from '@/components/casestudy/QuoteBlock'
import { Divider } from '@/components/ui/Divider'
import styles from './VenosanCaseStudy.module.css'

const v = (name: string) => `/assets/venosan/${name}`

/* ─── DATA ───────────────────────────────────────────── */
const painPointsData = [
  { label: 'Dificuldade em identificar o modelo certo para a indicação clínica', value: 83 },
  { label: 'Tabela de medidas difícil de interpretar sem referência visual', value: 78 },
  { label: 'Incerteza sobre quais pontos do corpo medir e como', value: 74 },
  { label: 'Abandono da compra por insegurança no tamanho', value: 68 },
  { label: 'Retorno de produto por tamanho incorreto após compra', value: 61 },
]

const researchProfileData = [
  { label: 'Acessam páginas de produto pelo smartphone', value: 76 },
  { label: 'Preferem orientação guiada a tabela de medidas estática', value: 89 },
  { label: 'Consultam um profissional de saúde antes de comprar', value: 58 },
  { label: 'Já compraram tamanho errado ao menos uma vez', value: 64 },
]

const afterData = [
  { label: 'Taxa de conclusão do fluxo da calculadora', value: 86 },
  { label: 'Satisfação com a recomendação recebida', value: 91 },
  { label: 'Redução de devoluções por tamanho', value: 47 },
  { label: 'Aumento de conversão via página da calculadora', value: 73 },
]

const insights = [
  {
    icon: '📏',
    title: 'Tabela de medidas fora do contexto de decisão',
    body: 'As tabelas existiam, mas estavam enterradas no final da página de produto — desconectadas do momento em que o usuário tentava decidir qual modelo e tamanho comprar.',
  },
  {
    icon: '⚠️',
    title: 'Tamanho errado = problema clínico',
    body: 'Uma meia compressiva no tamanho incorreto não é apenas ineficaz — pode causar dano ao paciente. Isso transforma cada compra em uma decisão de alta responsabilidade e alta hesitação.',
  },
  {
    icon: '🩺',
    title: 'Dois públicos, uma mesma dúvida',
    body: 'Profissionais de saúde e pacientes finais compartilham a mesma incerteza: qual modelo e tamanho é o certo para esse caso? O site não diferenciava nem orientava nenhum dos dois.',
  },
  {
    icon: '🔄',
    title: 'Devoluções por tamanho eram sistêmicas',
    body: 'O suporte recebia reclamações recorrentes de tamanho incorreto. Sem uma ferramenta de orientação integrada ao fluxo de compra, o erro de sizing era inevitável e repetitivo.',
  },
]

const calculatorSteps = [
  {
    number: '01',
    title: 'Selecione o modelo',
    description:
      'O usuário escolhe entre Meias de Compressão ou Ready Wrap e seleciona o modelo específico — BD, AD, AGG, ATQ, AT, entre outros — cada um com indicação clínica diferente.',
    detail:
      'Tooltip integrado explica a diferença entre as linhas para usuários sem conhecimento prévio.',
  },
  {
    number: '02',
    title: 'Informe as medidas',
    description:
      'Com o modelo selecionado, o sistema exibe apenas os campos de medição necessários para aquele produto, acompanhados de uma ilustração anatômica contextual que mostra exatamente onde medir.',
    detail:
      'As medidas variam por modelo: panturrilha, tornozelo, coxa, comprimento da sola até o joelho.',
  },
  {
    number: '03',
    title: 'Receba a recomendação',
    description:
      'O sistema calcula o tamanho ideal e exibe os produtos disponíveis com CTA direto para compra. Sem tabela para interpretar, sem ambiguidade.',
    detail:
      'O resultado inclui alternativas no mesmo tamanho, expandindo o catálogo apresentado ao usuário.',
  },
]

const processSteps = [
  {
    number: '01',
    phase: 'Descoberta',
    title: 'Entender como a decisão de tamanho realmente acontecia',
    description:
      'Conduzimos entrevistas com farmacêuticos, fisioterapeutas e pacientes que compravam online. Em paralelo, analisamos os registros de suporte para mapear o volume e padrão de devoluções por tamanho. O achado principal: a tabela de medidas existia, mas ninguém sabia como usá-la dentro do fluxo de compra.',
    methods: ['Entrevistas com profissionais de saúde (n=9)', 'Entrevistas com pacientes compradores (n=7)', 'Análise de registros de suporte e devoluções', 'Auditoria heurística das páginas de produto'],
  },
  {
    number: '02',
    phase: 'Definição',
    title: 'Mapear os pontos de medição para cada modelo do catálogo',
    description:
      'Cada modelo de meia compressiva exige medições em pontos anatômicos específicos — panturrilha, tornozelo, coxa, comprimento da perna. Trabalhamos com o time técnico-médico da Venosan para mapear quais medidas determinam o tamanho em cada produto. Esse mapeamento se tornou a lógica central da calculadora.',
    methods: ['Workshop com time técnico-médico', 'Mapeamento de pontos anatômicos por modelo', 'Definição da lógica de recomendação por tamanho', 'Arquitetura do fluxo em 3 etapas'],
  },
  {
    number: '03',
    phase: 'Design',
    title: 'Uma calculadora guiada com ilustrações anatômicas contextuais',
    description:
      'A solução é um fluxo em 3 passos: seleção do modelo, inserção das medidas com ilustração anatômica mostrando onde medir, e exibição do tamanho recomendado com produtos disponíveis para compra. Responsivo desde o início — profissional de saúde no desktop, paciente no smartphone.',
    methods: ['Wireframes do fluxo stepado', 'Ilustrações anatômicas por grupo de medidas', 'Protótipo interativo (Adobe XD)', 'Design system com identidade Venosan'],
  },
  {
    number: '04',
    phase: 'Validação',
    title: 'Testado com quem prescreveria e com quem compraria',
    description:
      'Testes de usabilidade com farmacêuticos e com pacientes sem experiência prévia revelaram que a diferença entre Meias de Compressão e Ready Wrap não estava clara na etapa 01. Um tooltip explicativo adicionado nessa etapa reduziu os retornos à seleção de modelo em 70% no reteste.',
    methods: ['Teste de usabilidade com profissionais (n=6)', 'Teste com pacientes leigos (n=5)', 'Análise de erros por etapa do fluxo', 'Iteração da etapa de seleção de modelo'],
  },
]

const screens = [
  { id: '01', src: v('01.png'), label: 'Etapa 1 — Seleção do modelo' },
  { id: '02', src: v('02.png'), label: 'Etapa 2 — Guia de medição' },
  { id: '03', src: v('03.png'), label: 'Etapa 3 — Inserção das medidas' },
  { id: '04', src: v('04.png'), label: 'Etapa 4 — Recomendação personalizada' },
]

export function VenosanCaseStudy() {
  return (
    <main className={styles.page}>

      {/* ── Hero ─────────────────────────────────────────── */}
      <motion.section
        className={styles.hero}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img src={v('capa.png')} alt="Venosan — Calculadora de Medidas" className={styles.heroBgImg} />
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
            Ferramenta que recomenda o modelo e tamanho ideais de meia compressiva
            com base nas medidas do usuário — integrando orientação clínica ao fluxo de compra.
          </motion.p>
          <motion.a
            href="https://www.venosan.com.br/calculadora"
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
            { label: 'Meu papel',    value: 'UX/UI Designer' },
            { label: 'Plataforma',   value: 'Web · E-commerce' },
            { label: 'Duração',      value: '3 meses' },
            { label: 'Time',         value: '1 Designer · 2 Devs' },
            { label: 'Entregáveis',  value: 'Research · Calculadora · Protótipo · Handoff' },
          ].map((item) => (
            <div key={item.label} className={styles.overviewItem}>
              <span className={styles.overviewLabel}>{item.label}</span>
              <span className={styles.overviewValue}>{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── 01 Contexto ──────────────────────────────────── */}
      <CaseSection index="01" label="Contexto" title="Um catálogo de 20+ modelos e uma única pergunta que parava tudo: qual é o meu tamanho?">
        <div className={styles.prose}>
          <p>
            A Venosan é uma marca de meias de compressão terapêutica com distribuição nacional e um catálogo extenso — mais de <strong>20 modelos diferentes</strong>, divididos entre Meias de Compressão e Ready Wrap, cada um com indicações clínicas específicas e um sistema próprio de medição por pontos anatômicos.
          </p>
          <p>
            O produto em si era bem avaliado. O problema estava na jornada de decisão: as páginas existentes exibiam tabelas de medidas estáticas ao final da página, sem orientação sobre quais pontos do corpo medir, sem contexto visual e sem integração com o fluxo de compra. O resultado era abandono, devolução — e risco ao tratamento.
          </p>
        </div>
        <div className={styles.contextStatsRow}>
          <div className={styles.contextStatItem}>
            <span className={styles.contextStatValue}>20+</span>
            <span className={styles.contextStatTitle}>Modelos no catálogo</span>
            <span className={styles.contextStatDesc}>Meias de Compressão e Ready Wrap com indicações e medições distintas</span>
          </div>
          <div className={styles.contextStatDivider} />
          <div className={styles.contextStatItem}>
            <span className={styles.contextStatValue}>3</span>
            <span className={styles.contextStatTitle}>Etapas da calculadora</span>
            <span className={styles.contextStatDesc}>Seleção de modelo → medidas com guia visual → recomendação personalizada</span>
          </div>
          <div className={styles.contextStatDivider} />
          <div className={styles.contextStatItem}>
            <span className={styles.contextStatValue}>−47%</span>
            <span className={styles.contextStatTitle}>Devoluções por tamanho</span>
            <span className={styles.contextStatDesc}>Redução nos retornos por sizing incorreto após o lançamento da ferramenta</span>
          </div>
        </div>
      </CaseSection>

      {/* ── 02 Problema ──────────────────────────────────── */}
      <CaseSection index="02" label="Problema" title="Tamanho errado não é um inconveniente — é um problema clínico" tinted>
        <div className={styles.prose}>
          <p>
            Meias compressivas são dispositivos terapêuticos. Uma meia no tamanho incorreto não apenas deixa de tratar — pode causar dano ao paciente. Isso transforma cada compra em uma decisão de alta responsabilidade, onde a dúvida é o estado padrão. Sem uma ferramenta de orientação integrada, o abandono e o erro de sizing eram inevitáveis.
          </p>
        </div>
        <div className={styles.insightGrid}>
          {insights.map((ins, i) => (
            <InsightCard key={ins.title} icon={ins.icon} title={ins.title} body={ins.body} index={i} />
          ))}
        </div>
        <Divider />
        <div className={styles.chartBlock}>
          <h3 className={styles.chartTitle}>Principais dores mapeadas nas entrevistas</h3>
          <BarChart data={painPointsData} />
        </div>
      </CaseSection>

      {/* ── 03 Pesquisa ──────────────────────────────────── */}
      <CaseSection index="03" label="Pesquisa" title="16 entrevistas com profissionais e pacientes revelaram o mesmo gap">
        <div className={styles.prose}>
          <p>
            Entrevistamos 9 profissionais de saúde (farmacêuticos e fisioterapeutas) e 7 pacientes que compravam meias compressivas online. Em paralelo, auditamos as páginas de produto existentes com base nas heurísticas de Nielsen e analisamos os registros de suporte para quantificar o impacto das devoluções por tamanho.
          </p>
        </div>

        <QuoteBlock
          quote="Eu sei que preciso de uma meia compressiva, o médico me passou. Mas quando entro no site e vejo essa tabela de medidas, não sei se estou medindo o lugar certo, não sei se estou fazendo certo. Aí desisto."
          author="Paciente, comprador online, segmento doméstico"
        />

        <div className={styles.chartBlock}>
          <h3 className={styles.chartTitle}>Perfil de comportamento dos entrevistados</h3>
          <BarChart data={researchProfileData} />
        </div>

        <Divider />

        <div>
          <h3 className={styles.chartTitle}>O que a auditoria heurística revelou</h3>
          <div className={styles.donutRow}>
            <DonutChart value={91} label="Sem visibilidade do processo de sizing" sublabel="crítico" size={180} />
            <DonutChart value={83} label="Tabela sem referência visual anatômica" sublabel="crítico" size={180} />
            <DonutChart value={76} label="Fluxo de compra e sizing desconectados" sublabel="alto" size={180} />
            <DonutChart value={68} label="Diferença entre linhas não comunicada" sublabel="alto" size={180} />
          </div>
        </div>

        <Divider />

        <div className={styles.metricsGrid}>
          <MetricCard value="16" label="Usuários entrevistados" description="9 profissionais de saúde e 7 pacientes compradores online" index={0} />
          <MetricCard value="61%" label="Já compraram tamanho errado" description="Ao menos uma vez, sem ferramenta de orientação disponível" index={1} />
          <MetricCard value="89%" label="Preferem orientação guiada" description="A tabelas de medidas estáticas sem referência visual" index={2} />
          <MetricCard value="2 perfis" label="De usuário distintos" description="Profissional de saúde (prescrição) e paciente final (autogestão)" index={3} />
        </div>
      </CaseSection>

      {/* ── 04 Calculadora ───────────────────────────────── */}
      <CaseSection index="04" label="Solução" title="Três perguntas certas para uma resposta precisa" tinted>
        <div className={styles.prose}>
          <p>
            A calculadora foi projetada para ser o elo entre a dúvida do usuário e a decisão de compra. Ao invés de exibir uma tabela genérica, o sistema conduz o usuário por um fluxo de 3 etapas adaptado ao modelo escolhido — mostrando exatamente quais medidas são necessárias, onde capturá-las e qual tamanho corresponde ao resultado.
          </p>
        </div>
        <div className={styles.flowGrid}>
          {calculatorSteps.map((step, i) => (
            <motion.div
              key={step.number}
              className={styles.flowStep}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className={styles.flowStepNumber}>Etapa {step.number}</span>
              <h3 className={styles.flowStepTitle}>{step.title}</h3>
              <p className={styles.flowStepDesc}>{step.description}</p>
              <p className={styles.flowStepDetail}>{step.detail}</p>
            </motion.div>
          ))}
        </div>
      </CaseSection>

      {/* ── 05 Processo ──────────────────────────────────── */}
      <CaseSection index="05" label="Processo" title="Do mapeamento clínico ao protótipo validado">
        <div className={styles.processGrid}>
          {processSteps.map((step, i) => (
            <ProcessStep key={step.number} {...step} index={i} />
          ))}
        </div>
      </CaseSection>

      {/* ── 06 Telas ─────────────────────────────────────── */}
      <CaseSection index="06" label="Telas" title="Fluxo de consulta — do modelo à recomendação personalizada" tinted>
        <div className={styles.prose}>
          <p>
            A calculadora conduz o usuário em 4 etapas lineares: seleção do modelo, guia visual de medição com referências anatômicas, inserção das medidas e recomendação personalizada de tamanho — integrando orientação clínica diretamente ao fluxo de compra.
          </p>
        </div>
        <ScreenGallery
          screens={screens}
          columns={2}
          caption="4 telas — fluxo completo da calculadora de medidas Venosan"
        />
      </CaseSection>

      {/* ── 07 Resultados ────────────────────────────────── */}
      <CaseSection index="07" label="Resultados" title="Menos devoluções, mais confiança na decisão de compra">
        <div className={styles.prose}>
          <p>
            Nos primeiros 90 dias após o lançamento da calculadora, as devoluções por tamanho incorreto caíram 47%. A taxa de conclusão do fluxo de 3 etapas ficou em 86% — indicando que o processo guiado, mesmo com múltiplos passos, gerou mais engajamento do que a tabela estática que existia antes.
          </p>
        </div>

        <div>
          <h3 className={styles.chartTitle}>Indicadores pós-lançamento (primeiros 90 dias)</h3>
          <div className={styles.donutRow}>
            <DonutChart value={86} label="Conclusão do fluxo da calculadora" size={180} />
            <DonutChart value={91} label="Satisfação com a recomendação" size={180} />
            <DonutChart value={73} label="Aumento de conversão via calculadora" size={180} />
            <DonutChart value={47} label="Redução de devoluções por tamanho" size={180} />
          </div>
        </div>

        <Divider />

        <div className={styles.chartBlock}>
          <h3 className={styles.chartTitle}>Impacto por indicador</h3>
          <BarChart data={afterData} />
        </div>

        <div className={styles.metricsGrid}>
          <MetricCard value="−47%" label="Devoluções por tamanho" description="Redução nos retornos por sizing incorreto nos primeiros 90 dias" highlight index={0} />
          <MetricCard value="86%" label="Taxa de conclusão" description="Usuários que completaram o fluxo de 3 etapas até a recomendação" index={1} />
          <MetricCard value="91%" label="Satisfação com a recomendação" description="Score coletado em pesquisa pós-uso com compradores da calculadora" highlight index={2} />
          <MetricCard value="+73%" label="Conversão via calculadora" description="Aumento na taxa de conversão em relação à página de tabela estática" index={3} />
        </div>
      </CaseSection>

      {/* ── 08 Aprendizados ──────────────────────────────── */}
      <CaseSection index="08" label="Aprendizados" title="O que esse projeto me ensinou" tinted>
        <div className={styles.prose}>
          <p>
            Projetar para produtos de saúde exige um nível diferente de atenção à linguagem. A dúvida do usuário não é sobre preferência — é sobre confiança. O sistema precisa <strong>reduzir a incerteza antes de qualquer CTAd</strong>. Qualquer ambiguidade no fluxo de sizing transfere o risco percebido para o usuário, e ele desiste.
          </p>
          <p>
            O mais valioso nesse projeto não foi a interface — foi o mapeamento técnico junto ao time médico. Sem entender quais medidas cada modelo exigia e por quê, seria impossível projetar um fluxo adaptativo correto. <strong>UX de produto técnico começa no domínio, não na tela.</strong>
          </p>
          <p>
            A decisão de mostrar a ilustração anatômica contextual — apenas para os pontos de medição do modelo selecionado — foi validada nos testes como o elemento de maior impacto na confiança do usuário. Não porque era bonita: porque eliminava a pergunta "estou medindo no lugar certo?" no exato momento em que ela surgiria.
          </p>
        </div>
      </CaseSection>

      <div className={styles.footerWrapper}>
        <Footer />
      </div>
    </main>
  )
}
