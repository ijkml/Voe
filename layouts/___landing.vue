<script setup lang="ts">
import type { WritableComputedRef } from 'vue';

const nuxtApp = useNuxtApp();
nuxtApp.hook('page:start', closeSideNav);
</script>

<template>
  <div class="app-layout--default">
    <TheHeader blend />
    <main>
      <slot />
    </main>
    <TheFooter />
    <TheSidenav />
  </div>
</template>

<style scoped lang="scss">
.app-layout--default {
  @apply min-h-screen flex flex-col mx-auto
    max-w-screen-2xl relative;

  > footer {
    @apply mt-auto;
  }

  > main {
    @apply min-h-50;
  }

  > header {
    @apply max-w-screen-2xl;
  }
}
</style>
