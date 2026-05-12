import { Helmet } from 'react-helmet-async'

type Props = {
  title?: string
  description?: string
}

const BASE = 'Lucas Brabo — Designer de Produto'
const BASE_DESC = 'Mais de 5 anos transitando entre UX/UI, direção de arte e desenvolvimento front-end — criando produtos que fazem sentido para quem usa.'

export function SEO({ title, description }: Props) {
  const fullTitle = title ? `${title} · uxbrabo` : BASE
  const desc = description ?? BASE_DESC

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
    </Helmet>
  )
}
