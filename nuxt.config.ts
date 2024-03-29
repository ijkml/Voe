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
    'nuxt-unhead',
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
    '@nuxtjs/critters',
    'vite-plugin-vue-type-imports/nuxt',
    '@nuxtjs/i18n',
    'nuxt-swiper',
  ],
  unhead: {},
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
  swiper: {
    modules: [],
  },
  i18n: {
    strategy: 'prefix',
    baseUrl: 'https://voey.netlify.app',
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
        iso: 'en',
        file: 'en.json',
      },
      {
        code: 'es',
        iso: 'es',
        file: 'es.json',
      },
      {
        code: 'fr',
        iso: 'fr',
        file: 'fr.json',
      },
      {
        code: 'ja',
        iso: 'ja',
        file: 'ja.json',
      },
      {
        code: 'zh',
        iso: 'zh',
        file: 'zh.json',
      },
    ],
  },
});
