import { fileURLToPath } from 'url';
import svgLoader from 'vite-svg-loader';

export default defineNuxtConfig({
  app: {
    // pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
      htmlAttrs: {
        lang: 'en-US',
      },
      meta: [{ name: 'description', content: 'Voe Air' }],
    },
  },
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
    'vite-plugin-vue-type-imports/nuxt',
    '@nuxtjs/i18n',
    'nuxt-swiper',
  ],
  alias: {
    '@img': fileURLToPath(new URL('./assets/images', import.meta.url)),
    '@icons': fileURLToPath(new URL('./assets/icons', import.meta.url)),
    '@data': fileURLToPath(new URL('./assets/data', import.meta.url)),
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
  swiper: {},
  i18n: {
    strategy: 'prefix',
    skipSettingLocaleOnNavigate: true,
    detectBrowserLanguage: {
      useCookie: false,
      fallbackLocale: 'en',
    },
    vueI18n: {
      fallbackLocale: 'en',
      legacy: false,
    },
    lazy: true,
    defaultLocale: 'en',
    types: 'composition',
    langDir: 'i18n/locales',
    locales: [
      {
        code: 'en',
        file: 'en.json',
      },
      {
        code: 'es',
        file: 'es.json',
      },
      {
        code: 'fr',
        file: 'fr.json',
      },
      {
        code: 'ja',
        file: 'ja.json',
      },
      {
        code: 'zh',
        file: 'zh.json',
      },
    ],
  },
});
