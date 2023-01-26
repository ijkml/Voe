<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | Voe` : 'Voe | Fly Better';
  },
});

const { finalizePendingLocaleChange } = useI18n();
const onBeforeEnter = async () => {
  await finalizePendingLocaleChange();
};

useSeoMeta({
  ogImage: 'https://voey.netlify.app/img/og-image.png',
  ogUrl: 'https://voey.netlify.app',
  ogSiteName: 'Voe',
  ogType: 'website',
  ogLocale: 'en_US',
  ogLocaleAlternate: ['es_ES', 'fr_FR', 'ja_JP', 'zh_CN'],
  twitterSite: '@ijk_ml',
});
</script>

<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage :transition="{ name: 'page', mode: 'out-in', onBeforeEnter }" />
  </NuxtLayout>
</template>
