<script setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | Veo` : 'Veo | Fly Better';
  },
});
</script>

<template>
  <main class="py-20 px-10 text-center">
    <NuxtPage />
    <TheFooter />
    <!-- <TheLogo /> -->
  </main>
</template>

<style>
html,
body,
#__nuxt {
  height: 100vh;
  margin: 0;
  padding: 0;
}

html.dark {
  background: #222;
  color: white;
}
</style>
