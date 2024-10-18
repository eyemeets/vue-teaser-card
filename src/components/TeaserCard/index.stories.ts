import { cardData } from './data'
import TeaserCard from './index.vue'
import type { ActionPayload, TeaserCardProps } from './types'
import type { StoryFn } from '@storybook/vue3' // Import StoryFn to type the template properly

export default {
  title: 'Components/TeaserCard',
  component: TeaserCard,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['withNumberHighlight', 'mediaFeatured', 'textEmphasis', 'largeMedia']
      }
    },
    onActionMedia: { action: 'actionMedia' },
    onActionContent: { action: 'actionContent' }
  }
}

// Basic template for all variants
const Template: StoryFn<TeaserCardProps> = (args) => ({
  components: { TeaserCard },
  setup() {
    return { args }
  },
  template: `
    <TeaserCard
      v-bind="args"
      @actionMedia="onActionMedia"
      @actionContent="onActionContent"
    />
  `,
  methods: {
    onActionMedia: (payload: ActionPayload) => {
      console.log('Media clicked:', payload)
    },
    onActionContent: (payload: ActionPayload) => {
      console.log('Content clicked:', payload)
    }
  }
})

// Generate different stories for each variant
export const WithNumberHighlight = Template.bind({})
WithNumberHighlight.args = { ...cardData[0] }

export const MediaFeatured = Template.bind({})
MediaFeatured.args = { ...cardData[1] }

export const TextEmphasis = Template.bind({})
TextEmphasis.args = { ...cardData[2] }

export const LargeMedia = Template.bind({})
LargeMedia.args = { ...cardData[3] }
