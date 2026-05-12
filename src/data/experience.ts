export type ExperienceItem = {
  id: string
  role: string
  company: string
  period: string
  description?: string
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
    id: 'partem-coordenador',
    role: 'Coordenador de Mídia',
    company: 'Agência Partem',
    period: '2026 → Presente · Recife, PE',
    description:
      'Coordenação estratégica de mídia e gestão direta das equipes de criação e redação, com foco especial nos projetos do Sebrae-PE. Responsável por garantir que entregas finais unam criatividade com os objetivos de negócio de cada cliente — atuando no planejamento de campanhas digitais, direção criativa do time e alinhamento direto com clientes institucionais.',
  },
  {
    id: 'makplan-arte',
    role: 'Diretor de Arte Sênior',
    company: 'Agência Makplan',
    period: '2025 → 2026 · Recife, PE',
    description:
      'Desenvolvimento de KVs e campanhas sazonais para o Shopping Costa Dourada, criação de identidades e peças para eventos institucionais da Prefeitura de Sertânia e direção de arte para campanhas de captação de alunos da Berlitz, com foco em performance e posicionamento digital.',
  },
  {
    id: 'moveon-ux',
    role: 'UX Designer',
    company: 'MoveOn · Caju Agência Digital',
    period: '2023 → 2025 · Recife, PE',
    description:
      'Redesenho completo do Cartão VEM — plataforma de transporte público urbano de Recife — resultando em 40% de aumento na satisfação dos usuários, com introdução de recarga online via Pix sem taxa de conveniência. Desenvolvimento de plataforma para lojistas do Shopping Plaza Recife e reorganização do portal da OAB Pernambuco, priorizando usabilidade, acessibilidade e presença digital.',
  },
  {
    id: 'adequa-arte',
    role: 'Diretor de Arte Sênior',
    company: 'Adequá Comunicação',
    period: '2023 → 2024 · Porto Alegre, RS',
    description:
      'Criação de campanha interna para a Unicred voltada ao alinhamento de equipes em torno do plano de expansão da cooperativa, com foco em comunicação clara, motivação e fortalecimento da cultura colaborativa.',
  },
  {
    id: 'caju-arte',
    role: 'Diretor de Arte Sênior',
    company: 'Caju Agência Digital',
    period: '2021 → 2022 · Recife, PE',
    description:
      'Concepção e liderança da criação de identidades visuais para marcas, garantindo que cada projeto transmita valores e objetivos estratégicos com criatividade e impacto. Desenvolvimento de conceitos para campanhas publicitárias multicanal, supervisionando a execução de vídeos, posts e anúncios digitais.',
  },
  {
    id: 'trevo-arte',
    role: 'Diretor de Arte',
    company: 'Trevo Comunicação',
    period: '2020 → 2022 · Belém, PA',
    description:
      'Direção de arte para campanhas e peças de comunicação, com atuação em branding, gestão de redes sociais e produção de conteúdo para marcas diversas.',
  },
]

export const education: EducationItem[] = [
  {
    id: 'ux-circuit',
    course: 'UX Designer',
    institution: 'Design Circuit',
    year: '2025 · Concluído',
    description:
      'Especialização em UX Design com foco em pesquisa qualitativa e quantitativa, metodologias centradas no usuário, prototipação e testes de usabilidade.',
  },
  {
    id: 'ads-unama',
    course: 'Análise e Desenvolvimento de Sistemas',
    institution: 'UNAMA — Universidade da Amazônia',
    year: '2023 · Interrompido',
    description:
      'Graduação com ênfase em desenvolvimento web e mobile, estrutura de dados e engenharia de software.',
  },
  {
    id: 'publicidade-feapa',
    course: 'Bacharelado em Publicidade e Propaganda',
    institution: 'FEAPA — Faculdade de Ensino Superior do Pará',
    year: '2019 · Concluído',
    description:
      'Formação em comunicação, branding, redação publicitária e gestão de projetos criativos. Base que orienta minha visão sobre como design e narrativa se complementam.',
  },
]
