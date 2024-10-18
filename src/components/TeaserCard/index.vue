<script setup lang="ts">
import { computed } from 'vue'
import type { CardEmitters, TeaserCardProps } from './types'

/**
 * Props for the TeaserCard component.
 * @typedef {Object} TeaserCardProps
 * @property {string} id - The unique identifier for the teaser card.
 * @property {string} title - The title of the teaser card, optional truncation enabled by `maxTitleChar` when `enableMaxChar` is true.
 * @property {number} [maxTitleChar] - Optional maximum number of characters for the title when truncation is enabled.
 * @property {string} ingress - The ingress (intro text) for the teaser card, optional truncation enabled by `maxIngressChar` when `enableMaxChar` is true.
 * @property {number} [maxIngressChar] - Optional maximum number of characters for the ingress when truncation is enabled.
 * @property {boolean} [enableMaxChar] - Optional flag to enable or disable character truncation for title and ingress.
 * @property {string[]} [labels] - Optional labels or tags for the teaser card (e.g., "topic", "abonnent", "finans").
 * @property {number} [numberBadge] - The number for the teaser card badge.
 * @property {number} [width] - Optional maximum width for the teaser card (values can be 1, 2, 3, 4, 5, 10, 12, 15, 20, 25, 30, 40, 50, 100, 150, 200).
 * @property {number} [height] - Optional maximum height for the teaser card (values can be 1, 2, 3, 4, 5, 10, 12, 15, 20, 25, 30, 40, 50, 100, 150, 200).
 * @property {number} [paddingY] - Optional vertical padding for the teaser card (values can be 1, 2, 3, 4, 5, 10, 12, 15, 20, 25, 30, 40, 50, 100, 150, 200).
 * @property {number} [paddingX] - Optional horizontal padding for the teaser card (values can be 1, 2, 3, 4, 5, 10, 12, 15, 20, 25, 30, 40, 50, 100, 150, 200).
 * @property {string} [mediaSrc] - The media source URL for the image to display.
 * @property {'withNumberHighlight' | 'mediaFeatured' | 'textEmphasis' | 'largeMedia'} variant - The layout variant of the teaser card.
 */
const props = defineProps<TeaserCardProps>()

/**
 * Emits for the TeaserCard component.
 * @typedef {Object} CardEmitters
 * @property {(e: 'actionMedia', payload: ActionPayload) => void} actionMedia - Emitted when the media is clicked.
 * @property {(e: 'actionContent', payload: ActionPayload) => void} actionContent - Emitted when the title is clicked.
 */
const emit = defineEmits<CardEmitters>()

/**
 * Computed property to limit the title length to a maximum of 30 characters.
 * @returns {string} The limited title string.
 */
const limitedTitle = computed(() => {
  if (props.enableMaxChar && props.maxTitleChar && props.title.length > props.maxTitleChar) {
    return `${props.title.substring(0, props.maxTitleChar).trim()}..` // Trimming extra space
  }
  return props.title
})

/**
 * Computed property to limit the ingress length to a maximum of 120 characters if `ingress` is provided.
 * @returns {string | undefined} The limited ingress string or undefined if ingress is not provided.
 */
const limitedIngress = computed(() => {
  if (props.ingress) {
    if (props.enableMaxChar && props.maxIngressChar && props.ingress.length > props.maxIngressChar) {
      // Subtract 2 to account for the ".." being appended, so the final result is exactly maxIngressChar
      return `${props.ingress.substring(0, props.maxIngressChar - 1).trim()}..`
    }
    return props.ingress
  }
  return ''
})


/**
 * Handles the click event on the media.
 * Emits the 'actionMedia' event with title and id as payload.
 */
const handleMediaClick = () => {
  emit('actionMedia', {
    title: limitedTitle.value,
    id: props.id
  })
}

/**
 * Handles the click event on the title.
 * Emits the 'actionContent' event with title and id as payload.
 */
const handleTitleClick = () => {
  emit('actionContent', {
    title: limitedTitle.value,
    id: props.id
  })
}
</script>

<template>
  <div
    class="teaser-card"
    :class="[
      variant,
      { [`w-${width}`]: width },
      { [`h-${height}`]: height },
      { [`px-${paddingX}`]: paddingX },
      { [`py-${paddingY}`]: paddingY }
    ]"
  >
    <div
      v-if="variant === 'withNumberHighlight' && numberBadge"
      class="number-badge"
    >
      {{ numberBadge }}
    </div>

    <div
      class="media"
      @click="handleMediaClick"
    >
      <img
        v-if="mediaSrc"
        :src="mediaSrc"
        :alt="limitedTitle"
      >
    </div>
    <div class="content-box">
      <h2
        class="title"
        @click="handleTitleClick"
      >
        {{ limitedTitle }}
      </h2>
      <p
        v-if="ingress"
        class="ingress"
        :title="ingress"
      >
        {{ limitedIngress }}
      </p>

      <div
        v-if="labels && labels.length > 0"
        class="labels"
      >
        <span
          v-for="(label, index) in labels"
          :key="label"
          class="label"
        >
          {{ label }}
          <span
            v-if="index < labels.length - 1"
            class="separator"
          >|</span>
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" src="./styles.css" />
