import { motion } from 'framer-motion'
import { Ruler, AlertTriangle, Stethoscope, RefreshCw } from 'lucide-react'
import { Footer } from '@/components/layout/Footer'
import { SEO } from '@/components/SEO'
import { CaseSection } from '@/components/casestudy/CaseSection'
import { CaseLayout, CaseHero, CaseMeta } from '@/components/casestudy/CaseLayout'
import { ProcessStep } from '@/components/casestudy/ProcessStep'
import { InsightCard } from '@/components/casestudy/InsightCard'
import { ScreenGallery } from '@/components/casestudy/ScreenGallery'
import styles from './VenosanCaseStudy.module.css'

const v = (name: string) => `/assets/venosan/${name}`

/* ─── DATA ───────────────────────────────────────────── */
const insights = [
  {
    icon: Ruler,
    title: 'Tabela de medidas fora do contexto de decisão',
    body: 'As tabelas de medidas existiam, mas ficavam no final da página de produto, desconectadas do momento em que o usuário decidia qual modelo e tamanho comprar.',
  },
  {
    icon: AlertTriangle,
    title: 'Tamanho correto importa',
    body: 'Uma meia compressiva é um dispositivo terapêutico. O tamanho certo faz diferença, o que torna a compra uma decisão de alta responsabilidade e hesitação.',
  },
  {
    icon: Stethoscope,
    title: 'Dois públicos, uma mesma dúvida',
    body: 'Profissionais de saúde e pacientes finais compartilham a mesma incerteza: qual modelo e tamanho é o certo para esse caso?',
  },
  {
    icon: RefreshCw,
    title: 'Sizing precisava entrar no fluxo',
    body: 'Sem uma ferramenta de orientação integrada ao fluxo de compra, a dúvida de tamanho ficava sem resposta no momento certo.',
  },
]

const calculatorSteps = [
  {
    number: '01',
    title: 'Selecione o modelo',
    description:
      'O usuário escolhe entre Meias de Compressão ou Ready Wrap e seleciona o modelo específico, cada um com indicação clínica diferente.',
    detail:
      'Tooltip integrado explica a diferença entre as linhas para usuários sem conhecimento prévio.',
  },
  {
    number: '02',
    title: 'Informe as medidas',
    description:
      'Com o modelo selecionado, o sistema exibe apenas os campos de medição necessários, acompanhados de uma ilustração anatômica que mostra onde medir.',
    detail:
      'As medidas variam por modelo: panturrilha, tornozelo, coxa, comprimento da sola até o joelho.',
  },
  {
    number: '03',
    title: 'Receba a recomendação',
    description:
      'O sistema indica o tamanho ideal e exibe os produtos disponíveis com acesso direto à compra, sem tabela para interpretar.',
    detail:
      'O resultado inclui alternativas no mesmo tamanho, ampliando o catálogo apresentado.',
  },
]

const processSteps = [
  {
    number: '01',
    phase: 'Entendimento',
    title: 'Entender o catálogo e a lógica de medição',
    description:
      'Busquei entender os modelos do catálogo (Meias de Compressão e Ready Wrap) e como cada um define o tamanho a partir de pontos anatômicos específicos. Essa lógica virou a base da calculadora.',
    methods: ['Estudo do catálogo', 'Pontos de medição por modelo', 'Lógica de recomendação'],
  },
  {
    number: '02',
    phase: 'Fluxo',
    title: 'Estruturar a calculadora em 3 etapas',
    description:
      'Defini um fluxo linear em 3 passos: seleção do modelo, inserção das medidas com apoio visual e exibição do tamanho recomendado, conectando a orientação ao momento da compra.',
    methods: ['Arquitetura do fluxo', 'Wireframes das etapas', 'Definição dos campos por modelo'],
  },
  {
    number: '03',
    phase: 'Interface',
    title: 'Desenhar telas guiadas com ilustrações contextuais',
    description:
      'Criei as interfaces com ilustrações anatômicas mostrando onde medir, pensadas para funcionar bem tanto no desktop quanto no smartphone.',
    methods: ['UI Design', 'Ilustrações de apoio', 'Design responsivo'],
  },
  {
    number: '04',
    phase: 'Prototipação',
    title: 'Prototipar e refinar o fluxo',
    description:
      'Prototipei o fluxo para validar as etapas e refinar a etapa de seleção de modelo, que era o ponto de maior dúvida entre as linhas.',
    methods: ['Protótipo interativo (Adobe XD)', 'Refinamento do fluxo', 'Handoff'],
  },
]

const screens = [
  { id: '01', src: v('01.png'), label: 'Etapa 1: Seleção do modelo' },
  { id: '02', src: v('02.png'), label: 'Etapa 2: Guia de medição' },
  { id: '03', src: v('03.png'), label: 'Etapa 3: Inserção das medidas' },
  { id: '04', src: v('04.png'), label: 'Etapa 4: Recomendação personalizada' },
]

export function VenosanCaseStudy() {
  return (
    <main className={styles.page}>
      <SEO title="Venosan, Calculadora de Medidas" description="Calculadora de medidas para meias de compressão Venosan: fluxo guiado de recomendação de tamanho." />
      <CaseLayout sections={['Visão Geral', 'Observações', 'Processo de Design', 'Telas Finais', 'Reflexão']}>

      {/* ── Hero ─────────────────────────────────────────── */}
      <CaseHero
        eyebrow="Venosan • Calculadora de medidas • 2024"
        title="Uma calculadora que recomenda o tamanho ideal de meia compressiva"
        liveUrl="https://www.venosan.com.br/calculadora"
        image={{ src: v('home-hero-clean.png'), alt: 'Venosan, em dúvida sobre o tamanho ideal para você?' }}
      />

      <CaseMeta
        items={[
          { label: 'Meu papel',    value: 'UX/UI Designer (na Caju Agência Digital)' },
          { label: 'Período',      value: '2024' },
          { label: 'Contexto',     value: 'Ferramenta web · equipe multidisciplinar' },
          { label: 'Contribuição', value: 'Fluxo · Interfaces · Prototipação' },
        ]}
      />

      {/* ── 01 Visão Geral ───────────────────────────────── */}
      <CaseSection index="01" label="Visão Geral" title="Um catálogo extenso e uma pergunta que travava a compra: qual é o meu tamanho?">
        <div className={styles.prose}>
          <p>
            A Venosan é uma marca de meias de compressão terapêutica com um catálogo extenso,
            dividido entre <strong>Meias de Compressão e Ready Wrap</strong>, cada linha com
            indicações clínicas específicas e um sistema próprio de medição por pontos anatômicos.
          </p>
          <p>
            O desafio estava na jornada de decisão: as páginas exibiam tabelas de medidas
            estáticas, sem orientação sobre quais pontos medir e sem integração com o fluxo de
            compra. A solução foi uma <strong>calculadora guiada em 3 etapas</strong> que conduz
            o usuário do modelo à recomendação de tamanho. Atuei como UX/UI Designer na Caju
            Agência Digital, no fluxo, nas interfaces e na prototipação.
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

      {/* ── 02 Observações ───────────────────────────────── */}
      <CaseSection index="02" label="Observações" title="O sizing precisava entrar no momento da decisão" tinted>
        <div className={styles.prose}>
          <p>
            Meias compressivas são dispositivos terapêuticos, e o tamanho certo faz diferença no
            resultado. Isso torna a compra uma decisão de alta responsabilidade, em que a dúvida é
            o estado padrão. Sem uma ferramenta de orientação integrada, a insegurança sobre o
            tamanho ficava sem resposta no momento certo.
          </p>
        </div>
        <div className={styles.insightGrid}>
          {insights.map((ins, i) => (
            <InsightCard key={ins.title} icon={ins.icon} title={ins.title} body={ins.body} index={i} />
          ))}
        </div>
      </CaseSection>

      {/* ── 03 Processo de Design ────────────────────────── */}
      <CaseSection index="03" label="Processo de Design" title="Do catálogo ao fluxo guiado">
        <div className={styles.processGrid}>
          {processSteps.map((step, i) => (
            <ProcessStep key={step.number} {...step} index={i} />
          ))}
        </div>
      </CaseSection>

      {/* ── 04 Telas Finais ──────────────────────────────── */}
      <CaseSection index="04" label="Telas Finais" title="Fluxo de consulta: do modelo à recomendação" tinted>
        <div className={styles.prose}>
          <p>
            A calculadora conduz o usuário em etapas lineares: seleção do modelo, guia visual de
            medição com referências anatômicas, inserção das medidas e recomendação de tamanho,
            integrando a orientação ao fluxo de compra.
          </p>
        </div>
        <ScreenGallery
          screens={screens}
          columns={2}
          caption="Telas do fluxo da calculadora de medidas Venosan"
        />
      </CaseSection>

      {/* ── 05 Reflexão ──────────────────────────────────── */}
      <CaseSection index="05" label="Reflexão" title="O que esse projeto me ensinou">
        <div className={styles.prose}>
          <p>
            Projetar para produtos de saúde exige atenção redobrada à linguagem e à clareza. A
            dúvida do usuário é sobre confiança, então o sistema precisa <strong>reduzir a
            incerteza antes de qualquer CTA</strong>.
          </p>
          <p>
            Entender a lógica de medição de cada modelo foi o que permitiu desenhar um fluxo
            adaptativo correto. <strong>UX de produto técnico começa no domínio, não na tela.</strong>
          </p>
          <p>
            Mostrar a ilustração anatômica contextual, apenas para os pontos do modelo
            selecionado, foi a decisão que mais ajudou a responder a pergunta "estou medindo no
            lugar certo?" no exato momento em que ela surge.
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
