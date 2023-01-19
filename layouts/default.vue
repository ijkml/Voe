<script setup lang="ts">
import type { WritableComputedRef } from 'vue';

const route = useRoute();
const blendHeader = ref(localeHome.includes(route.path));

const { t } = useI18n();

const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true,
});

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
</script>

<template>
  <Html :lang="head.htmlAttrs?.lang">
    <Head>
      <template v-for="link in head.link" :key="link.id">
        <Link
          :id="link.id"
          :rel="link.rel"
          :href="link.href"
          :hreflang="link.hreflang"
        />
      </template>
      <template v-for="meta in head.meta" :key="meta.id">
        <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
      </template>
    </Head>
  </Html>
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
