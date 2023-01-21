<script setup lang="ts">
import hero from '@img/hero.webp?url';

const heroImg = `url(${hero})`;
</script>

<template>
  <section class="ze-hero" aria-labelledby="screamer">
    <h1 id="screamer" class="font-serif" v-text="$t('hero')" />
  </section>
</template>

<style lang="scss" scoped>
.ze-hero {
  @apply w-full text-white flex items-center justify-center;

  $overlay: hsla(0, 100%, 50%, 0.1);

  min-height: 400px;
  height: 99vh;
  max-height: 900px;

  background: linear-gradient(to bottom right, $overlay, $overlay),
    $brand-pri v-bind(heroImg) center / cover no-repeat;

  padding: ($nav-height * 1.5) 0;

  @apply lg:(bg-fixed) 2xl:(bg-local);

  #screamer {
    @apply font-semibold transition mb-20 p-5 text-center
      text-2.5rem sm:(text-2.8rem) md:(text-3.1rem);
  }
}
</style>
