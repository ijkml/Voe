<script setup lang="ts">
definePageMeta({
  layout: 'landing',
});
</script>

<template>
  <div>
    <section class="hero">
      <h1 class="screamer">Fly with peace of mind</h1>
    </section>
    <div class="test">
      <section class="h-150vh bg-blue-300"></section>
      <section class="h-150vh bg-white"></section>
      <section class="h-150vh bg-blue-800"></section>
      <section class="h-150vh bg-blue-500"></section>
    </div>
  </div>
</template>

<style scoped lang="scss">
.hero {
  @apply w-full text-white flex items-center justify-center;

  $overlay: hsla(0, 100%, 50%, 0.1);

  min-height: clamp(400px, 99vh, 900px);
  padding-top: $nav-height * 1.5;
  background: linear-gradient(to bottom right, $overlay, $overlay),
    url('@img/hero-pattern.svg') top left / contain repeat,
    $brand-pri url('@img/hero.jpg') center / cover no-repeat;
}

.screamer {
  @apply text-5xl font-semibold pb-25 tracking-wide;

  font-family: Venturis;
}
</style>
