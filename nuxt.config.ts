import { fileURLToPath } from 'url';
import svgLoader from 'vite-svg-loader';

export default defineNuxtConfig({
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    },
  },
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
    'vite-plugin-vue-type-imports/nuxt',
    '@nuxtjs/web-vitals',
  ],
  alias: {
    '@img': fileURLToPath(new URL('./assets/images', import.meta.url)),
    '@icons': fileURLToPath(new URL('./assets/icons', import.meta.url)),
    // '#data': fileURLToPath(new URL('./assets/data', import.meta.url)),
  },
  experimental: {
    reactivityTransform: false,
    inlineSSRStyles: false,
  },
  css: ['@unocss/reset/tailwind.css', '@/assets/styles/root.scss'],
  colorMode: {
    classSuffix: '',
    fallback: 'dark',
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/global.scss" as *;',
        },
      },
    },
    plugins: [
      svgLoader({
        defaultImport: 'url',
      }),
    ],
  },
});
