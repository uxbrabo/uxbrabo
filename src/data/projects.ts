export type Project = {
  id: string
  slug: string
  title: string
  subtitle: string
  category: string
  year: string
  description: string
  coverPlaceholder: string
  coverImage?: string
  /** Set when coverImage is a raw screenshot (no device frame baked in) and needs a live CSS mockup. */
  coverMockup?: 'phone' | 'browser'
  /** Raw screenshot used inside the Home mockup frame. Falls back to coverImage when unset. */
  mockupImage?: string
  /** Excludes the project from public listings (Home, Work grid) without deleting its data or route. */
  hidden?: boolean
}

export const projects: Project[] = [
  {
    id: 'academia-moura',
    slug: 'academia-moura',
    title: 'ACADEMIA MOURA',
    subtitle: 'Plataforma EAD',
    category: 'UX DESIGN',
    year: '2024',
    description:
      'Plataforma de capacitação da rede de distribuição da Moura, com trilhas de desenvolvimento, gamificação com pontos e moedas, loja de brindes e relatórios para gestores.',
    coverPlaceholder: '#0B1533',
    coverImage: '/assets/academia-moura/hero.png',
    coverMockup: 'browser',
    mockupImage: '/assets/academia-moura/home-desktop.png',
    hidden: true,
  },
  {
    id: 'vem',
    slug: 'vem',
    title: 'VEM',
    subtitle: 'Plataforma de benefícios',
    category: 'UX DESIGN',
    year: '2024',
    description:
      'Portal digital do Vale Eletrônico Metropolitano, sistema de bilhetagem eletrônica do transporte público da Região Metropolitana do Recife.',
    coverPlaceholder: '#E75B32',
    coverImage: '/assets/vem/capa.png',
    coverMockup: 'browser',
    mockupImage: '/assets/vem/home-desktop.png',
  },
  {
    id: 'venosan',
    slug: 'venosan',
    title: 'VENOSAN',
    subtitle: 'Calculadora de meias',
    category: 'UX DESIGN',
    year: '2024',
    description:
      'Ferramenta que recomenda o tamanho e modelo ideais de meias compressivas com base nas medidas do usuário.',
    coverPlaceholder: '#1a1a1a',
    coverImage: '/assets/venosan/capa.png',
    coverMockup: 'browser',
    mockupImage: '/assets/venosan/home-hero-clean.png',
  },
  {
    id: 'shopping-plaza',
    slug: 'shopping-plaza',
    title: 'SHOPPING PLAZA',
    subtitle: 'Central do lojista',
    category: 'UX DESIGN',
    year: '2024',
    description:
      'Plataforma web e mobile de atendimento ao lojista do Shopping Plaza Recife, reunindo solicitações, crachás, circulares e gestão de mensalistas em um só lugar.',
    coverPlaceholder: '#00A896',
    coverImage: '/assets/plaza/capa.png',
    coverMockup: 'browser',
    mockupImage: '/assets/plaza/dashboard.png',
  },
  {
    id: 'study',
    slug: 'study',
    title: 'STUDY',
    subtitle: 'EdTech · App iOS com IA',
    category: 'AI-ASSISTED DESIGN',
    year: '2025',
    description:
      'App EdTech mobile-first para o ENEM com IA socrática, mapa de conhecimento adaptativo (BKT) e gamificação, concebido, prototipado e entregue como app iOS nativo com Claude Code.',
    coverPlaceholder: '#0a0a0a',
    coverImage: '/assets/study/home.png',
    coverMockup: 'phone',
  },
  {
    id: 'cuca',
    slug: 'cuca',
    title: 'CUCA',
    subtitle: 'Gestão educacional',
    category: 'UX DESIGN',
    year: '2025',
    description:
      'Plataforma de gestão educacional que centraliza processos acadêmicos e administrativos de instituições de ensino.',
    coverPlaceholder: '#0d0d0d',
    coverImage: '/assets/cuca/card-thumb.png',
    hidden: true,
  },
  {
    id: 'oab-pe',
    slug: 'oab-pe',
    title: 'OAB PERNAMBUCO',
    subtitle: 'Portal institucional',
    category: 'UX DESIGN',
    year: '2024',
    description:
      'Redesign completo do portal institucional da Ordem dos Advogados do Brasil, Seccional Pernambuco, com arquitetura de informação, design responsivo e organização de 15+ serviços para a advocacia pernambucana.',
    coverPlaceholder: '#05122e',
    coverImage: '',
    hidden: true,
  },
]
