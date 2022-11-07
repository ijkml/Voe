<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | Veo` : 'Veo | Fly Better';
  },
});
</script>

<template>
  <div class="app-layout--root">
    <NuxtLoadingIndicator />
    <TheHeader />
    <main class="py-20 px-10 text-center">
      <NuxtPage />
    </main>
    <TheFooter />
  </div>
</template>
