import { Helmet } from 'react-helmet-async'

type Props = {
  title?: string
  description?: string
}

const BASE = 'Lucas Brabo, Designer de Produto'
const BASE_DESC = 'Designer de Produto com experiência em UX/UI e uma trajetória entre comunicação, direção de arte e design de produtos digitais.'

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Lucas Brabo',
  jobTitle: 'Designer de Produto',
  url: 'https://uxbrabo.com',
  image: 'https://uxbrabo.com/assets/lucas-brabo.png',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Recife',
    addressRegion: 'PE',
    addressCountry: 'BR',
  },
  sameAs: [
    'https://www.linkedin.com/in/uxbrabo/',
    'https://read.cv/uxbrabo',
  ],
}

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
      <script type="application/ld+json">{JSON.stringify(personJsonLd)}</script>
    </Helmet>
  )
}
