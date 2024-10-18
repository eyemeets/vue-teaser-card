import 'uno.css'
import { setup } from '@storybook/vue3'
import TeaserCard from '../src/components/TeaserCard/index.vue'

setup((app) => {
  app.component('TeaserCard', TeaserCard)
})
