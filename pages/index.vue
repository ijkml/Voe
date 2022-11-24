<script setup lang="ts">

</script>

<template>
  <div>
    <section class="hero">
      <h1 class="screamer">Fly with peace of mind</h1>
    </section>
    <div class="test">
      <!-- <section class="h-150vh bg-blue-300"></section> -->
      <!-- <section class="h-150vh bg-white"></section> -->
      <!-- <section class="h-150vh bg-blue-800"></section> -->
      <!-- <section class="h-150vh bg-blue-500"></section> -->
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
    $brand-pri url('@img/hero.avif') center / cover no-repeat;

  @apply lg:bg-fixed 2xl:bg-local;
}

.screamer {
  @apply text-3.3rem font-medium pb-25 tracking-wide;

  // font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont;
  font-family: Venturis;
}
</style>
