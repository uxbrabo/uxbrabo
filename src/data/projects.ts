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
      'Plataforma de capacitação da rede de distribuição da Moura — trilhas de desenvolvimento, gamificação com pontos e moedas, loja de brindes e relatórios para gestores.',
    coverPlaceholder: '#0B1533',
    coverImage: '/assets/academia-moura/hero.png',
  },
  {
    id: 'vem',
    slug: 'vem',
    title: 'VEM',
    subtitle: 'Plataforma de benefícios',
    category: 'UX DESIGN',
    year: '2024',
    description:
      'Portal digital do Vale Eletrônico Metropolitano — sistema de bilhetagem eletrônica do transporte público da Região Metropolitana do Recife.',
    coverPlaceholder: '#E75B32',
    coverImage: '/assets/vem/capa.png',
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
  },
  {
    id: 'shopping-plaza',
    slug: 'shopping-plaza',
    title: 'SHOPPING PLAZA',
    subtitle: 'Central do lojista',
    category: 'UX DESIGN',
    year: '2024',
    description:
      'Plataforma web e mobile de atendimento ao lojista do Shopping Plaza Recife — solicitações, crachás, circulares e gestão de mensalistas em um só lugar.',
    coverPlaceholder: '#00A896',
    coverImage: '/assets/plaza/capa.png',
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
  },
]
