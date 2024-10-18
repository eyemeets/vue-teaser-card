/// <reference types="vitest" />

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  test: {
    environment: 'jsdom'
  },
  plugins: [
    vue(),
    UnoCSS({
      content: {
        pipeline: {
          include: [
            // Ensure these are the right file types
            /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
            'src/**/*.stories.{js,ts}',  // Include story files
            'stories/**/*'
          ]
        }
      }
    })
  ]
})
