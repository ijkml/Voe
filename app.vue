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
</script>

<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage :transition="{ name: 'page', mode: 'out-in', onBeforeEnter }" />
  </NuxtLayout>
</template>
