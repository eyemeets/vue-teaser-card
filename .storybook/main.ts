import { StorybookConfig } from '@storybook/vue3-vite'

const config: StorybookConfig = {
  framework: '@storybook/vue3-vite',
  stories: ['../src/**/*.stories.@(ts|js)'],
  addons: ['@storybook/addon-essentials'],
  async viteFinal(config) {
    const Unocss = await import('unocss/vite') 
    config.plugins?.push(Unocss.default())
    return config
  }
}

export default config
