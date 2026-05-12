export type ArtDirectionProject = {
  id: string
  slug: string
  title: string
  category: string
  year: string
  coverImage: string
  coverPlaceholder: string
}

export const artDirectionProjects: ArtDirectionProject[] = [
  {
    id: 'saben-pay',
    slug: 'saben-pay',
    title: 'Saben Pay',
    category: 'Identidade Visual',
    year: '2024',
    coverImage: '/assets/saben/810775228869183.685ab4758fb7b.png',
    coverPlaceholder: '#e8e8e8',
  },
  {
    id: 'rosarinho',
    slug: 'rosarinho',
    title: 'Rosarinho Prince Vanguard',
    category: 'Identidade Visual · OOH',
    year: '2024',
    coverImage: '/assets/rosarinho/capa.png',
    coverPlaceholder: '#8a7a5a',
  },
  {
    id: 'bellyrisi',
    slug: 'bellyrisi',
    title: 'Bellyrisi',
    category: 'Identidade Visual',
    year: '2021',
    coverImage: '/assets/bellyrisi/capa.png',
    coverPlaceholder: '#9b8e82',
  },
  {
    id: 'coruja-grant',
    slug: 'coruja-grant',
    title: 'Coruja Grant',
    category: 'Personagem 3D · Motion',
    year: '2024',
    coverImage: '/assets/coruja-grant/CAPA.jpeg',
    coverPlaceholder: '#1a2e1a',
  },
]
