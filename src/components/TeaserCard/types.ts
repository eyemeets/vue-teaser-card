// Define the valid values for width and height
type Dimension = 1 | 2 | 3 | 4 | 5 | 10 | 15 | 20 | 30 | 40 | 50 | 100 | 150 | 200 | number // Number values

export interface TeaserCardProps {
  id: string
  title: string
  maxTitleChar?: number
  ingress?: string
  maxIngressChar?: number
  enableMaxChar?: boolean
  labels?: string[]
  numberBadge?: number
  width?: Dimension
  height?: Dimension
  paddingY?: Dimension
  paddingX?: Dimension
  mediaSrc?: string
  variant: TeaserCardVariant
}

export enum TeaserCardVariant {
  WithNumberHighlight = 'withNumberHighlight',
  MediaFeatured = 'mediaFeatured',
  TextEmphasis = 'textEmphasis',
  LargeMedia = 'largeMedia'
}

export interface CardEmitters {
  (e: 'actionMedia', payload: ActionPayload): void
  (e: 'actionContent', payload: ActionPayload): void
}
// Define the payload type for media and content actions
export interface ActionPayload {
  title: string
  id: string
}
