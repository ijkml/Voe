<script setup lang="ts">
import insightsIcon from '@icons/insights.svg?component';
import automationsIcon from '@icons/automations.svg?component';
import reportsIcon from '@icons/reports.svg?component';

import type { MenuItem } from '@/types/header';

const headerLinks = [
  { text: 'Home', to: '/' },
  { text: 'Tour', to: '/other' },
];

const solutions: MenuItem[] = [
  {
    name: 'Insights',
    description: 'Measure actions your users take',
    link: '/',
    icon: insightsIcon,
  },
  {
    name: 'Automations',
    description: 'Create your own targeted content',
    link: '/',
    icon: automationsIcon,
  },
  {
    name: 'Reports',
    description: 'Keep track of your growth',
    link: '/other',
    icon: reportsIcon,
  },
];

const headerMenus: { title: string; items: MenuItem[] }[] = [
  { title: 'Flights', items: solutions },
  { title: 'Car Rental', items: solutions },
];
</script>

<template>
  <header>
    <div>
      <TheLogo class="the-logo" />
      <!-- center -->
      <nav class="main-nav">
        <template v-for="hl in headerLinks" :key="hl.text">
          <NuxtLink
            :to="hl.to"
            tabindex="0"
            exact-active-class="active"
            class="header-link"
            :title="hl.text"
          >
            {{ hl.text }}
          </NuxtLink>
        </template>
        <HeaderMenu v-for="hm in headerMenus" :key="hm.title" :items="hm.items">
          {{ hm.title }}
        </HeaderMenu>
      </nav>
      <!-- right -->
      <div class="actions">
        <LanguageMenu />
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.the-logo {
  @apply h-25px w-auto;
}

header {
  @apply bg-brand-pri text-light-2;

  > div {
    @apply w-full max-w-screen-xl h-13 mx-auto
      flex items-center px-4 sm:(px-6) justify-between;
  }
}

.main-nav {
  @apply flex items-center gap-3;
}

.header-link,
:deep(.header-link) {
  @apply px-2 py-0.5 font-medium relative inline-flex items-center z-1;

  transition: color 0.5s;
  transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);

  &::before,
  &::after {
    content: '';

    @apply absolute z--1 bottom-0 left-0 w-full transition
      h-6px duration-500 opacity-25 bg-purple-3;

    transform: scale3d(0, 1, 1);
    transform-origin: 0% 50%;
    transition: transform 0.5s;
    transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
  }

  &:focus {
    @apply outline-none;
  }

  &:hover,
  &:focus-visible {
    &::before {
      transform: scale3d(1, 1, 1);
    }
  }

  &.active {
    @apply font-semibold;

    &::before {
      transform: scale3d(1, 1, 1);
    }

    &:hover,
    &:focus-visible {
      &::after {
        transform: scale3d(1, 1, 1);
      }
    }
  }
}
</style>
