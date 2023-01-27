<script setup lang="ts">
import type { LocaleCode } from '@/types';
import { ogLocales } from '#imports';

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | Voe` : 'Voe · Fly Better';
  },
});

const { finalizePendingLocaleChange } = useI18n();
const onBeforeEnter = async () => {
  await finalizePendingLocaleChange();
};

const { locale } = useI18n();

// remove the current locale from the `ogLocales` obj,
// `Object.values` convert to [...], filter out `undefined`
const ogLocaleAlternate = Object.values({
  ...ogLocales,
  [locale.value]: undefined,
}).filter((l) => !!l);

const ogUrl = 'https://voey.netlify.app';
const ogLocale = ogLocales[locale.value as LocaleCode] || ogLocales.en;
const ogImage = `${ogUrl}/img/og-${locale.value}.png`;

useSeoMeta({
  ogUrl,
  ogImage,
  ogLocale,
  ogLocaleAlternate,
  ogSiteName: 'Voe',
  ogType: 'website',
  twitterSite: '@ijk_ml',
});
</script>

<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage :transition="{ name: 'page', mode: 'out-in', onBeforeEnter }" />
  </NuxtLayout>
</template>
