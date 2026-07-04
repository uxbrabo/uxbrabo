import { motion } from 'framer-motion'
import { Footer } from '@/components/layout/Footer'
import { SEO } from '@/components/SEO'
import styles from './OabPeCaseStudy.module.css'

/* ─── helpers ────────────────────────────────────────── */
const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
})

function SectionHeader({ phase, title }: { phase: string; title: string }) {
  return (
    <div className={styles.sectionHeader}>
      <span className={styles.phaseLabel}>{phase}</span>
      <h2 className={styles.sectionTitle}>{title}</h2>
    </div>
  )
}

/* ─── DATA ───────────────────────────────────────────── */

const insights = [
  {
    n: '01',
    title: 'Três públicos, uma mesma porta de entrada',
    body: 'O site precisava servir simultaneamente ao advogado registrado buscando serviços, ao estudante acompanhando o Exame de Ordem e à imprensa buscando notícias. Cada perfil tinha comportamentos e objetivos radicalmente diferentes — e o menu anterior tratava todos da mesma forma.',
  },
  {
    n: '02',
    title: 'Serviços enterrados em texto',
    body: 'Dos 15+ serviços disponíveis (Movimentação, Anuidade, Certificado Digital, Exame de Ordem etc.), nenhum tinha acesso direto visível. Tudo passava por um menu textual sem hierarquia visual, o que gerava volume alto de ligações e mensagens de suporte para tarefas simples.',
  },
  {
    n: '03',
    title: 'Conteúdo sem organização temporal',
    body: 'Notícias, galeria de eventos e vídeos da TV OAB-PE coexistiam sem separação clara. Um evento de posse de novos advogados aparecia misturado a uma nota pública e a um vídeo institucional — sem filtro, sem categorização, sem busca eficiente.',
  },
  {
    n: '04',
    title: '28 subseções sem representação digital',
    body: 'A OAB-PE tem presença em 28 municípios do estado, de Afogados da Ingazeira a Vitória de Santo Antão. Cada subseção precisava de representação e acesso claro no portal, sem criar complexidade adicional para quem busca apenas a sede em Recife.',
  },
]

const deliverables = [
  {
    area: 'Homepage',
    desc: 'Carousel de banners responsivos (1440×570 desktop / 375×510 mobile), bloco de 30 serviços mais acessados em dois grupos de 15, seção de últimas notícias, galeria de eventos e TV OAB-PE com grid de vídeos.',
  },
  {
    area: 'Navegação',
    desc: 'Menu em duas camadas com 8 categorias principais (Institucional, Comunicação, Comissões, Ouvidoria, Prerrogativas, Serviços, Subseções, Integridade) e submenus expansíveis. Menu hamburger para mobile com comportamento adaptado.',
  },
  {
    area: 'Notícias',
    desc: 'Grid com cards de imagem + categoria + título + data, paginação progressiva com botão "Ver mais", compartilhamento social integrado (WhatsApp, e-mail, redes sociais) em cada artigo.',
  },
  {
    area: 'Galeria',
    desc: 'Organização cronológica reversa de álbuns de eventos (juramentos, posses, inaugurações). Thumbnail + título + data com link para álbum completo. Paginação progressiva.',
  },
  {
    area: 'TV OAB-PE',
    desc: 'Grid com 50+ vídeos integrados ao YouTube (@OABPERNAMBUCO), agrupados por tema: Lideranças & Gestão, Inaugurações, Desenvolvimento Profissional, Marcos Institucionais. Link direto ao canal.',
  },
  {
    area: 'Subseções',
    desc: 'Dropdown com as 28 subseções pernambucanas em ordem alfabética, de Afogados da Ingazeira a Vitória de Santo Antão, com navegação para página específica de cada unidade.',
  },
  {
    area: 'Footer',
    desc: 'Endereço completo, CNPJ, telefone e horários de funcionamento. Links reorganizados por categoria (Institucional, Serviços, Comunicação). Integração com 5 plataformas sociais.',
  },
]

export function OabPeCaseStudy() {
  return (
    <main className={styles.page}>
      <SEO
        title="OAB Pernambuco"
        description="Redesign do portal institucional da OAB-PE — arquitetura de informação, design responsivo e organização de 15+ serviços para a Ordem dos Advogados do Brasil, Seccional Pernambuco."
      />

      {/* ════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════ */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <motion.div className={styles.heroChips} {...fade(0.2)}>
            <span className={styles.chip}>Web Design</span>
            <span className={styles.chip}>UI Design</span>
            <span className={styles.chip}>Front-end</span>
            <span className={styles.chip}>2024</span>
          </motion.div>

          <motion.h1 className={styles.heroTitle} {...fade(0.35)}>
            OAB<br />Pernambuco
          </motion.h1>

          <motion.p className={styles.heroSub} {...fade(0.5)}>
            Redesign completo do portal institucional da Ordem dos Advogados
            do Brasil, Seccional Pernambuco — arquitetura de informação,
            design responsivo e organização de 15+ serviços para a advocacia pernambucana.
          </motion.p>

          <motion.a
            href="https://www.oabpe.org.br"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.heroLink}
            {...fade(0.65)}
          >
            Ver site no ar →
          </motion.a>
        </div>

        {/* metadata bar */}
        <div className={styles.metaBar}>
          {[
            { k: 'Cliente',    v: 'OAB Pernambuco' },
            { k: 'Meu papel',  v: 'UI Designer · Front-end' },
            { k: 'Plataforma', v: 'Web — Desktop & Mobile' },
            { k: 'Público',    v: 'Advogados, estudantes, imprensa' },
            { k: 'Subseções',  v: '28 municípios de PE' },
            { k: 'Status',     v: 'Lançado — no ar' },
          ].map((i) => (
            <div key={i.k} className={styles.metaItem}>
              <span className={styles.metaKey}>{i.k}</span>
              <span className={styles.metaVal}>{i.v}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          TL;DR
      ════════════════════════════════════════════════ */}
      <section className={styles.section}>
        <SectionHeader phase="TL;DR" title="O projeto em 1 minuto" />
        <div className={styles.tldrGrid}>
          {[
            {
              label: 'Problema',
              text: 'O portal institucional da OAB-PE não refletia a escala e a complexidade da organização. Serviços dispersos, navegação sem hierarquia visual e ausência de responsividade adequada comprometiam o acesso diário de milhares de advogados.',
            },
            {
              label: 'O que eu fiz',
              text: 'Redesign completo do portal — arquitetura de informação, componentes de UI, layout responsivo, integração com TV/YouTube, seção de notícias e galeria de eventos, e cobertura digital das 28 subseções pernambucanas.',
            },
            {
              label: 'Impacto',
              text: 'Portal institucional moderno e responsivo, com 30 serviços acessíveis diretamente na homepage, conteúdo organizado por tipo (notícias, galeria, TV) e presença digital de todas as 28 subseções do estado.',
            },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              className={styles.tldrCard}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className={styles.tldrNum}>0{i + 1}</span>
              <p className={styles.tldrLabel}>{item.label}</p>
              <p className={styles.tldrText}>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          CONTEXTO & DESAFIO
      ════════════════════════════════════════════════ */}
      <section className={styles.section}>
        <SectionHeader phase="Contexto & Desafio" title="A maior ordem de advogados do Nordeste precisava de um portal à sua altura" />
        <div className={styles.contextGrid}>
          <div className={styles.contextMain}>
            <p className={styles.prose}>
              A OAB Pernambuco (CNPJ 09.791.484/0001-09) representa a advocacia pernambucana em suas 28 subseções pelo estado, com sede na Rua Imperador Dom Pedro II, no centro do Recife. É o principal órgão de representação, regulação e defesa da categoria no estado — e o site é o canal central entre a instituição e todos os advogados registrados, estudantes de direito e público em geral.
            </p>
            <p className={styles.prose}>
              O desafio não era apenas visual. Era de <strong>arquitetura de informação</strong>: como organizar uma estrutura com 8 categorias de navegação, mais de 40 páginas, 15 serviços distintos, TV com 50+ vídeos, galeria de eventos, 28 subseções e 5 integrações externas — de forma que qualquer usuário chegasse ao que precisa em poucos cliques, independente do dispositivo.
            </p>
            <p className={styles.prose}>
              <strong>Objetivos de negócio:</strong> modernizar a presença digital da OAB-PE, reduzir o volume de dúvidas e solicitações que chegavam por telefone e garantir que serviços críticos (anuidade, movimentação, certificado digital) fossem acessíveis sem fricção.
            </p>
          </div>
          <div className={styles.contextSide}>
            <div className={styles.constraintBox}>
              <p className={styles.constraintTitle}>Contexto do projeto</p>
              <ul className={styles.constraintList}>
                <li><strong>Audiência:</strong> Advogados registrados, estudantes de direito, imprensa e público geral</li>
                <li><strong>Escala:</strong> 28 subseções em todo Pernambuco</li>
                <li><strong>Conteúdo:</strong> Portal de notícias ativo, galeria de eventos recorrentes e TV com vídeos institucionais</li>
                <li><strong>Integrações:</strong> YouTube, portais externos de anuidade, CNA, FGV (Exame de Ordem) e outros</li>
              </ul>
            </div>
          </div>
        </div>

        {/* stats */}
        <div className={styles.statsRow}>
          {[
            { v: '28', t: 'Subseções no estado', d: 'De Afogados da Ingazeira a Vitória de Santo Antão' },
            { v: '15+', t: 'Serviços organizados', d: 'De movimentação a certificado digital e Exame de Ordem' },
            { v: '50+', t: 'Vídeos na TV OAB-PE', d: 'Integrados ao YouTube e organizados por tema no portal' },
            { v: '8', t: 'Categorias de navegação', d: 'Com submenus expansíveis e hierarquia clara por perfil de usuário' },
          ].map((s) => (
            <div key={s.t} className={styles.statItem}>
              <span className={styles.statValue}>{s.v}</span>
              <span className={styles.statTitle}>{s.t}</span>
              <span className={styles.statDesc}>{s.d}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          DESCOBERTA
      ════════════════════════════════════════════════ */}
      <section className={`${styles.section} ${styles.sectionTinted}`}>
        <SectionHeader phase="Descoberta" title="Três públicos com objetivos incompatíveis usando a mesma porta de entrada" />
        <div className={styles.discoveryGrid}>
          <div className={styles.discoveryLeft}>
            <p className={styles.colTitle}>Perguntas que guiaram o mapeamento</p>
            <ul className={styles.questionList}>
              <li>Quem são os usuários e o que cada perfil precisa fazer no portal?</li>
              <li>Quais serviços geram mais dúvidas e chamadas de suporte?</li>
              <li>Como usuários mobile chegam e navegam no site atual?</li>
              <li>Qual conteúdo é mais acessado — e qual está inacessível sem saber onde procurar?</li>
            </ul>

            <p className={styles.colTitle} style={{ marginTop: 32 }}>Métodos utilizados</p>
            <ul className={styles.methodList}>
              {[
                'Mapeamento do conteúdo existente (auditoria de IA)',
                'Análise dos 15+ serviços e seus fluxos de acesso',
                'Benchmark com portais de outras seccionais da OAB',
                'Inventário das 28 subseções e suas necessidades',
                'Revisão das integrações externas ativas',
              ].map((m) => (
                <li key={m} className={styles.methodItem}>
                  <span className={styles.methodDot} />
                  {m}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.discoveryRight}>
            <p className={styles.colTitle}>Principais achados</p>
            {insights.map((ins) => (
              <div key={ins.n} className={styles.insightRow}>
                <span className={styles.insightNum}>{ins.n}</span>
                <div>
                  <p className={styles.insightTitle}>{ins.title}</p>
                  <p className={styles.insightBody}>{ins.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.quoteBlock}>
          <p className={styles.quoteText}>"A advocacia pernambucana merece um portal que funcione como ela — presente em todo o estado, acessível a qualquer hora, sem burocracia para chegar ao que precisa."</p>
          <p className={styles.quoteAuthor}>Diretriz do projeto</p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          DEFINIÇÃO
      ════════════════════════════════════════════════ */}
      <section className={styles.section}>
        <SectionHeader phase="Definição" title="Arquitetura que serve três públicos sem confundir nenhum" />

        <div className={styles.problemStatement}>
          <p className={styles.problemLabel}>Problema definido</p>
          <p className={styles.problemText}>
            Advogados registrados, estudantes e imprensa que acessam o portal da OAB-PE
            precisam de <em>caminhos claros por perfil e acesso imediato a serviços</em> porque
            a estrutura atual trata todos da mesma forma, forçando navegação desnecessária em um menu sem hierarquia visual.
          </p>
        </div>

        <div className={styles.jtbdRow}>
          <p className={styles.colTitle}>Jobs to be Done por perfil</p>
          <ul className={styles.jtbdList}>
            <li><strong>Advogado registrado:</strong> Acessar serviços (anuidade, movimentação, certificado digital) rapidamente, sem precisar lembrar onde estão no menu</li>
            <li><strong>Estudante / candidato:</strong> Encontrar informações sobre o Exame de Ordem e como se inscrever na OAB</li>
            <li><strong>Imprensa / público:</strong> Acessar notícias, publicações, agenda de eventos e contatos institucionais</li>
            <li><strong>Advogado do interior:</strong> Encontrar a subseção mais próxima e seus contatos entre as 28 unidades do estado</li>
          </ul>
        </div>

        <div className={styles.requirementsGrid}>
          {[
            {
              label: 'Must have',
              color: styles.reqMust,
              items: [
                'Acesso direto a serviços na homepage',
                'Menu com hierarquia por tipo de conteúdo',
                'Responsividade completa (mobile-first)',
                'Seção de notícias com busca e paginação',
                'Cobertura das 28 subseções',
                'TV OAB-PE com vídeos categorizados',
              ],
            },
            {
              label: 'Nice to have',
              color: styles.reqNice,
              items: [
                'Filtros por categoria nas notícias',
                'Calendário de eventos visível',
                'Busca global no portal',
                'Páginas individuais para cada subseção',
              ],
            },
            {
              label: 'Fora do escopo',
              color: styles.reqOut,
              items: [
                'Portal de login próprio (redirecionamento externo mantido)',
                'App mobile nativo',
                'Área restrita de advogados integrada',
              ],
            },
          ].map((col) => (
            <div key={col.label} className={`${styles.reqCol} ${col.color}`}>
              <p className={styles.reqLabel}>{col.label}</p>
              <ul className={styles.reqList}>
                {col.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          DESIGN — DELIVER
      ════════════════════════════════════════════════ */}
      <section className={`${styles.section} ${styles.sectionTinted}`}>
        <SectionHeader phase="Design & Entrega" title="O que foi construído — seção por seção" />

        <div className={styles.deliverList}>
          {deliverables.map((d, i) => (
            <motion.div
              key={d.area}
              className={styles.deliverRow}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className={styles.deliverNum}>0{i + 1}</span>
              <div className={styles.deliverContent}>
                <p className={styles.deliverArea}>{d.area}</p>
                <p className={styles.deliverDesc}>{d.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Placeholder para screenshots */}
        <div className={styles.screenPlaceholder}>
          <p className={styles.screenPlaceholderText}>Screenshots do portal</p>
          <p className={styles.screenPlaceholderHint}>
            Adicione aqui prints da homepage, notícias, TV OAB-PE, subseções e footer
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          DECISÕES DE DESIGN
      ════════════════════════════════════════════════ */}
      <section className={styles.section}>
        <SectionHeader phase="Decisões de Design" title="Escolhas que moldaram a experiência" />

        <div className={styles.alternativesGrid}>
          {[
            {
              title: 'Serviços na homepage, não apenas no menu',
              desc: 'Em vez de esconder os 15+ serviços só no menu dropdown, trouxemos os 30 mais acessados para a homepage em dois blocos com ícone e label. Isso elimina o comportamento de "procurar onde está" para tarefas recorrentes como anuidade e movimentação.',
              tag: 'Arquitetura',
            },
            {
              title: 'Separação de conteúdo por tipo, não por data',
              desc: 'Notícias, galeria de eventos e TV OAB-PE são três naturezas de conteúdo diferentes. Mantê-los em seções distintas — em vez de um feed único — permite que cada público vá direto ao que consome habitualmente, sem scrollar por tudo.',
              tag: 'IA',
            },
            {
              title: 'Banners responsivos com proporções distintas',
              desc: 'Desktop usa 1440×570px (paisagem ampla), mobile usa 375×510px (quase retrato). A troca de imagem por breakpoint garante foco no assunto — sem cortes indesejados ou rostos cortados na versão mobile.',
              tag: 'Visual',
            },
            {
              title: 'Dropdown único para 28 subseções',
              desc: 'Com 28 unidades municipais, listar todas em cards seria ruído para quem busca a sede em Recife. O dropdown em ordem alfabética resolve a descoberta para quem é do interior sem criar complexidade para a maioria dos usuários.',
              tag: 'Componente',
            },
          ].map((alt) => (
            <div key={alt.title} className={styles.decisionCard}>
              <span className={styles.decisionTag}>{alt.tag}</span>
              <p className={styles.altTitle}>{alt.title}</p>
              <p className={styles.altDesc}>{alt.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          RESULTADOS
      ════════════════════════════════════════════════ */}
      <section className={`${styles.section} ${styles.sectionTinted}`}>
        <SectionHeader phase="Resultados" title="Portal no ar — o que foi entregue" />

        <div className={styles.tableWrapper}>
          <table className={styles.beforeAfterTable}>
            <thead>
              <tr>
                <th>Dimensão</th>
                <th>Antes</th>
                <th>Depois</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  d: 'Acesso a serviços',
                  before: 'Apenas via menu textual, sem destaque visual',
                  after: '30 serviços acessíveis diretamente na homepage com ícone e label',
                },
                {
                  d: 'Responsividade',
                  before: 'Layout sem adaptação adequada para mobile',
                  after: 'Design responsivo com imagens de hero distintas por breakpoint e menu hamburger',
                },
                {
                  d: 'Conteúdo de vídeo',
                  before: 'Sem seção dedicada — YouTube externo',
                  after: 'TV OAB-PE com 50+ vídeos integrados e categorizados no portal',
                },
                {
                  d: 'Subseções',
                  before: 'Sem presença digital organizada',
                  after: '28 subseções cobertas com navegação por dropdown em ordem alfabética',
                },
                {
                  d: 'Galeria de eventos',
                  before: 'Sem organização visual consistente',
                  after: 'Grid cronológico com álbuns de eventos, thumbnail, título e data',
                },
                {
                  d: 'Navegação',
                  before: 'Menu plano sem hierarquia por perfil',
                  after: '8 categorias com submenus expansíveis organizados por tipo de usuário',
                },
              ].map((row) => (
                <tr key={row.d}>
                  <td>{row.d}</td>
                  <td>{row.before}</td>
                  <td className={styles.tdAfter}>{row.after}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          APRENDIZADOS
      ════════════════════════════════════════════════ */}
      <section className={styles.section}>
        <SectionHeader phase="Aprendizados" title="O que esse projeto me ensinou" />

        <div className={styles.learningsGrid}>
          <div className={styles.learningBlock}>
            <p className={styles.learningTitle}>Institucional é o UX mais invisível</p>
            <p className={styles.learningText}>
              Em portais institucionais, o sucesso se mede pela ausência de fricção, não por engajamento. O usuário não quer interagir com o site — quer encontrar o que precisa e sair. Isso moldou cada decisão de IA: hierarquia de serviços, separação de tipos de conteúdo e acesso direto na homepage foram todas respostas ao comportamento de "chego, clico, saio".
            </p>
          </div>
          <div className={styles.learningBlock}>
            <p className={styles.learningTitle}>Escala geográfica exige estrutura, não lista</p>
            <p className={styles.learningText}>
              Com 28 subseções em municípios distintos, a tentação é criar uma página por unidade. A solução foi mais simples e mais escalável: um dropdown único, ordenado alfabeticamente, que resolve a descoberta sem criar 28 páginas para manter. Às vezes a estrutura mais eficiente para o usuário é também a mais simples de manter.
            </p>
          </div>
          <div className={styles.learningBlock}>
            <p className={styles.learningTitle}>Conteúdo recorrente precisa de sistema, não de layout</p>
            <p className={styles.learningText}>
              Juramentos de novos advogados acontecem toda semana. Notícias saem diariamente. A TV acumula vídeos todo mês. Projetar para conteúdo dinâmico significa garantir que o componente funcione com 5 itens e com 500 — e que a adição de um novo álbum de galeria não quebre o ritmo visual da página.
            </p>
          </div>
        </div>
      </section>

      <div className={styles.footerWrapper}>
        <Footer />
      </div>
    </main>
  )
}
