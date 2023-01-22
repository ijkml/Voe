<script setup lang="ts">
import { menuData } from '@data/header';
import type { MenuItem } from '@/types/header';

const { t } = useI18n();

const transMenu = (id: string) => t(`header.${id}.text`);

type HeaderLinks = (
  | { text: string; to: string; menu?: false }
  | { title: string; menu: { id: string; items: MenuItem[] } }
)[];

const headerLinks: HeaderLinks = [
  { text: 'home', to: '/' },
  { title: 'tour', menu: menuData.tour },
  { title: 'flight', menu: menuData.flight },
  { title: 'park', menu: menuData.park },
  { title: 'about', menu: menuData.about },
];
</script>

<template>
  <nav class="main-nav">
    <template v-for="hl in headerLinks" :key="hl.text">
      <LazyHeaderMenu v-if="hl.menu" v-bind="hl.menu">
        {{ transMenu(hl.title) }}
      </LazyHeaderMenu>
      <NuxtLink
        v-else
        :to="localizeUrl(hl.to)"
        tabindex="0"
        exact-active-class="active"
        class="header-link"
        :title="$t(`header.${hl.text}`)"
      >
        {{ $t(`header.${hl.text}`) }}
      </NuxtLink>
    </template>
  </nav>
</template>

<style scoped lang="scss">
.header-link,
:deep(.header-link) {
  @apply inline-flex bg-black font-medium px-3 py-1.5 rounded-md
    bg-opacity-0 select-none;

  &:focus,
  &:focus-visible {
    @apply outline-none;
  }

  &:hover,
  &:focus-visible {
    @apply bg-opacity-20;
  }

  &.active {
    @apply bg-opacity-20;

    &:hover,
    &:focus-visible {
      @apply bg-opacity-45;
    }
  }
}
</style>
