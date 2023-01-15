<script setup lang="ts">
import type { WritableComputedRef } from 'vue';

const route = useRoute();
const blendHeader = ref([localizeUrl('/'), '/'].includes(route.path));

const nuxtApp = useNuxtApp();
nuxtApp.hook('page:start', closeSideNav);
nuxtApp.hook('page:finish', () => {
  blendHeader.value = [localizeUrl('/'), '/'].includes(route.path);
});

let isLocked: WritableComputedRef<boolean> | null = null;

watch(navIsOpen, (nv) => {
  isLocked !== null && (isLocked.value = nv);
});

onMounted(() => {
  window.addEventListener('orientationchange', closeSideNav);
  isLocked = useScrollLock(document.documentElement, false);
});

onUnmounted(() => {
  window.removeEventListener('orientationchange', closeSideNav);
});
</script>

<template>
  <div class="app-layout--default" data-scroll>
    <TheHeader :blend="blendHeader" />
    <main>
      <slot />
    </main>
    <TheFooter v-once />
    <TheSidenav v-once />
    <BlurryOverlay />
  </div>
</template>

<style scoped lang="scss">
.app-layout--default {
  --at-apply: min-h-screen flex flex-col mx-auto max-w-screen-2xl relative;

  > footer {
    --at-apply: mt-auto;
  }

  > main {
    --at-apply: min-h-50;
  }

  > header {
    --at-apply: max-w-screen-2xl;
  }
}
</style>
