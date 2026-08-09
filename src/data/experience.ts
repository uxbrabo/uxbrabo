export type ExperienceItem = {
  id: string
  role: string
  company: string
  period: string
  description?: string
  projects?: { title: string; description: string }[]
}

export type EducationItem = {
  id: string
  course: string
  institution: string
  year: string
  description?: string
}

export const experiences: ExperienceItem[] = [
  {
    id: 'study-produto',
    role: 'Product Designer (Projeto Autoral)',
    company: 'Study EdTech · Autônomo',
    period: 'Jun 2026 → Presente · Recife, PE (Remoto)',
    description:
      'Idealização e desenvolvimento de um aplicativo educacional para o mercado brasileiro, atuando de ponta a ponta na concepção do produto, estratégia de experiência, design e implementação. O projeto usa Inteligência Artificial para oferecer uma jornada de aprendizagem personalizada, adaptativa e centrada no estudante: visão e estratégia de produto, pesquisa, mapeamento de jornadas, arquitetura da informação, wireframes e protótipos de alta fidelidade no Figma, construção de um Design System (Light/Dark) e desenvolvimento das interfaces com validação contínua durante a implementação.',
  },
  {
    id: 'makplan-arte',
    role: 'Diretor de Arte Sênior',
    company: 'Makplan · Marketing e Planejamento',
    period: 'Jan 2025 → Presente · Recife, PE',
    description:
      'Desenvolvimento de estratégias visuais para campanhas de comunicação, branding e marketing, participando desde a concepção criativa até a entrega final dos projetos. Trabalho em parceria com atendimento, planejamento, redação e mídia para transformar objetivos de negócio em soluções visuais consistentes. Principais contas: Shopping Costa Dourada, Berlitz Brasil e campanhas eleitorais para partidos e candidatos em diferentes níveis de governo.',
  },
  {
    id: 'caju-ux',
    role: 'UX/UI Designer',
    company: 'Caju Agência Digital',
    period: 'Jan 2023 → Mar 2025 · Recife, PE (Remoto)',
    description:
      'Atuação em projetos de produtos digitais, colaborando com equipes multidisciplinares na criação de interfaces e experiências centradas no usuário. Participação nas etapas de definição de fluxos, arquitetura de informação, wireframes, protótipos de alta fidelidade e handoff para desenvolvimento.',
    projects: [
      {
        title: 'VEM App · Mobilidade urbana',
        description:
          'Participei do redesenho do aplicativo mobile, contribuindo para a revisão dos fluxos de navegação, criação de novas interfaces e prototipação. Apoiei a evolução da experiência do usuário por meio da reorganização das jornadas e da redução de pontos de fricção no processo de onboarding.',
      },
      {
        title: 'Shopping Plaza Recife',
        description:
          'Atuei no design da plataforma B2B para gestão de lojistas, colaborando na definição da arquitetura de informação, construção dos fluxos de cadastro, relatórios e comunicação entre lojistas e administração do shopping, além da criação das interfaces da plataforma.',
      },
      {
        title: 'OAB Pernambuco',
        description:
          'Participei do redesign do portal institucional, desenvolvendo interfaces e contribuindo para a reorganização da navegação, com foco em acessibilidade, clareza das informações e melhoria da experiência dos usuários.',
      },
    ],
  },
  {
    id: 'adequa-arte',
    role: 'Diretor de Arte',
    company: 'Adequá Comunicação',
    period: 'Jan 2023 → Ago 2024 · Porto Alegre, RS',
    description:
      'Atuação como Diretor de Arte freelance para a Adequá, agência especializada em comunicação estratégica e branding, desenvolvendo projetos com foco em identidade visual e engajamento.',
  },
]

export const education: EducationItem[] = [
  {
    id: 'ux-circuit',
    course: 'UX, Produto e Tecnologia',
    institution: 'Design Circuit',
    year: 'Jan 2025 → Dez 2025',
    description:
      'Curso focado em UX, produto e tecnologia, com formação prática voltada para o mercado. Reforçou a base técnica em design de produto, aprofundando ferramentas, processos e tendências atuais de experiência do usuário e desenvolvimento de interfaces.',
  },
  {
    id: 'publicidade-feapa',
    course: 'Bacharelado em Publicidade e Propaganda',
    institution: 'FEAPA (Faculdade de Ensino Superior do Pará)',
    year: 'Jan 2016 → Dez 2019 · Belém, PA',
    description:
      'Criação publicitária, redação, direção de arte, marketing, comportamento do consumidor, planejamento de mídia e mídias digitais.',
  },
]
