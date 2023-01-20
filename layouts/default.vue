<script setup lang="ts">
import type { WritableComputedRef } from 'vue';

const route = useRoute();
const blendHeader = ref(localeHome.includes(route.path));

const nuxtApp = useNuxtApp();
nuxtApp.hook('page:start', closeSideNav);
nuxtApp.hook('page:finish', () => {
  blendHeader.value = localeHome.includes(route.path);
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

const i18nHead = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true,
});

useHead({
  htmlAttrs: i18nHead.value.htmlAttrs,
  link: i18nHead.value.link,
  meta: i18nHead.value.meta,
});
</script>

<template>
  <div class="app-layout--default" data-scroll>
    <TheHeader :blend="blendHeader" />
    <main>
      <slot :key="route.path" />
    </main>
    <TheFooter />
    <TheSidenav />
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
