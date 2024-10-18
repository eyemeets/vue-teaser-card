import { defineConfig, presetUno, presetWind, presetWebFonts } from 'unocss'
import { presetTypography } from 'unocss'
import { createLocalFontProcessor } from '@unocss/preset-web-fonts/local'

// Define dimension values
const dimensionValues = [1, 2, 3, 4, 5, 10, 12, 15, 20, 25, 30, 40, 50, 65, 75, 100, 110, 125, 135, 145, 150, 200]

// Generate utility classes for width, height, padding
const dimensionClasses = dimensionValues.flatMap(value => [
  `w-${value}`,         // Width classes
  `h-${value}`,         // Height classes
  `px-${value}`,        // Horizontal padding
  `py-${value}`         // Vertical padding
])

// Create the safelist
const safelist: string[] = [
  ...dimensionClasses
]

const theme = {
  colors: {
    // Generated with https://www.tints.dev
    brand: {
      50: '#E8FDFB',
      100: '#D1FAF7',
      200: '#A2F6EF',
      300: '#74F1E7',
      400: '#41ECDE',
      500: '#17E3D2',
      600: '#12B5A7',
      700: '#0D867C',
      800: '#095851',
      900: '#042825',
      950: '#021311'
    },
    frost: {
      50: '#FFFFFF',
      100: '#FBFCFE',
      200: '#FBFCFE',
      300: '#FBFCFE',
      400: '#F7F9FD',
      500: '#F7F9FD',
      600: '#F3F5FC',
      700: '#F3F5FC',
      800: '#F3F5FC',
      900: '#EEF2FB',
      950: '#EEF2FB'
    }
  }
}

export default defineConfig({
  safelist,
  theme,
  presets: [
    presetUno(),
    presetWind(),
    presetTypography(),
    presetWebFonts({
      provider: 'none', // Disable remote provider
      fonts: {
        clash: 'Clash Grotesk'
      },
      processors: createLocalFontProcessor({
        cacheDir: 'node_modules/.cache/unocss/fonts',
        fontAssetsDir: 'public/assets/fonts',
        fontServeBaseUrl: '/assets/fonts'
      })
    })
  ]
})
