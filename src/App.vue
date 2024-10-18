<script setup lang="ts">
import { cardData } from './components/TeaserCard/data'
import TeaserCard from './components/TeaserCard/index.vue'
import type { ActionPayload } from './components/TeaserCard/types'

// Handlers for click events on teaser cards
const handleActionMedia = (payload: ActionPayload) => {
  console.log('Media action triggered:', payload)
}

const handleActionContent = (payload: ActionPayload) => {
  console.log('Content action triggered:', payload)
}
</script>

<template>
  <div class="grid-container">
    <TeaserCard
      v-for="item in cardData"
      :key="item.id"
      v-bind="item"
      @action-media="handleActionMedia"
      @action-content="handleActionContent"
    />
  </div>
</template>