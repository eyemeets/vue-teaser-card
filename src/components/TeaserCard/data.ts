import type { TeaserCardProps } from './types'
import { TeaserCardVariant } from './types'

export const cardData: TeaserCardProps[] = [
  {
    title: 'Porteføljeforvalterens tips til hvordan du unngår «fomo» i aksjemarkedet',
    maxTitleChar: 30,
    labels: ['Topic', 'Abonnent'],
    maxIngressChar: 120,
    enableMaxChar: true,
    numberBadge: 4,
    width: 100,
    paddingY: 12,
    paddingX: 10,
    variant: TeaserCardVariant.WithNumberHighlight
  },
  {
    title: 'Nedgang på Oslo Børs før kveldens rentebeskjed fra USA',
    maxTitleChar: 30,
    ingress: 'Konkurransetilsynet:',
    labels: ['Finans'],
    maxIngressChar: 120,
    enableMaxChar: true,
    mediaSrc: '/src/assets/teaser-image-2.webp',
    width: 125,
    paddingY: 3,
    paddingX: 3,
    variant: TeaserCardVariant.MediaFeatured
  },
  {
    title: 'Slik unngår IT-avdelingen å bli stående på perrongen når ledelsen tar digitalt ekspresstog inn i fremtiden.',
    maxTitleChar: 30,
    ingress: 'Doblet på en måned',
    labels: ['Annonse', 'Entur'],
    mediaSrc: '/src/assets/teaser-image-3.webp',
    maxIngressChar: 120,
    enableMaxChar: true,
    width: 125,
    paddingY: 3,
    paddingX: 3,
    variant: TeaserCardVariant.TextEmphasis
  },
  {
    title: 'Equinor har tapt over 200 milliarder kroner',
    ingress: 'Equinor har nå gitt oppsine eierandeler i fire russiske selskaper til Rosneft etter tre måneders arbeid og mer enn ti milliærder kroner i nedskrivninger.',
    labels: ['Dokumentar'],
    mediaSrc: '/src/assets/teaser-image-4.webp',
    width: 125,
    variant: TeaserCardVariant.LargeMedia
  }
].map((i, key) => ({
  id: `dn-card-${key}`,
  ...i
}))