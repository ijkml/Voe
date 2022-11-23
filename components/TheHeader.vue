<script setup lang="ts">
import insightsIcon from '@icons/insights.svg?component';
import automationsIcon from '@icons/automations.svg?component';
import reportsIcon from '@icons/reports.svg?component';

import type { MenuItem } from '@/types/header';

interface Props {
  blend?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  blend: false,
});

const { blend } = toRefs(props);

const { y: scrolledHeight } = useWindowScroll();

const breakpoints = useBreakpoints({
  large: 980,
});

const lgScreen = breakpoints.greaterOrEqual('large');

const scrolled = ref(false);
const elevated = ref(false);

watchThrottled(
  scrolledHeight,
  (nv, ov) => {
    if (scrolledHeight.value < 400) {
      scrolled.value = false;
      elevated.value = false;
    } else {
      elevated.value = true;
      scrolled.value = nv > ov;
    }
  },
  { throttle: 150 }
);

const solutions: MenuItem[] = [
  {
    name: 'Insights',
    description: 'Measure actions your users take',
    link: '/a',
    icon: insightsIcon,
  },
  {
    name: 'Automations',
    description: 'Create your own targeted content',
    link: '/b',
    icon: automationsIcon,
  },
  {
    name: 'Reports',
    description: 'Keep track of your growth',
    link: '/other',
    icon: reportsIcon,
  },
];

const headerLinks = [
  { text: 'Home', to: '/' },
  { text: 'Tour', to: '/other' },
  { title: 'Flights', menu: true, items: solutions },
  { title: 'Car Rental', menu: true, items: solutions },
  { text: 'Contact', to: '/contact' },
];
</script>

<template>
  <header :class="{ blend, scrolled, elevated }">
    <div>
      <TheLogo class="the-logo" />

      <nav v-if="lgScreen" class="main-nav">
        <template v-for="hl in headerLinks" :key="hl.text">
          <HeaderMenu v-if="hl.menu" :items="hl.items">
            {{ hl.title }}
          </HeaderMenu>
          <NuxtLink
            v-else
            :to="hl.to"
            tabindex="0"
            exact-active-class="active"
            class="header-link"
            :title="hl.text"
          >
            {{ hl.text }}
          </NuxtLink>
        </template>
      </nav>

      <div class="actions">
        <LanguageMenu tabindex="0" />
        <button tabindex="0" class="search-button">
          <div class="i-carbon-search" />
        </button>
        <SidenavButton v-if="!lgScreen" />
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.the-logo {
  @apply h-25px w-auto;
}

header {
  --hide-scroll: translateY(0);
  --bg: $brand-pri;

  @apply text-light-2 w-full top-0 z-16 visible bg-brand-pri;

  will-change: transform, visibility;
  transform: var(--hide-scroll);

  transition-property: transform, visibility, background-color, backdrop-filter;
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);

  @supports (
    (-webkit-backdrop-filter: blur(10px)) or (backdrop-filter: blur(10px))
  ) {
    @apply backdrop-filter backdrop-blur-4px;
  }

  &:not(.blend) {
    @apply sticky bg-opacity-80;
  }

  &.blend {
    @apply fixed bg-opacity-0;
  }

  &.scrolled {
    --hide-scroll: translateY(-101%);

    @apply invisible;
  }

  &.elevated {
    @apply bg-opacity-80;
  }

  > div {
    @apply w-full max-w-screen-xl h-14 mx-auto items-center
      flex px-4 py-2px sm:(px-6) justify-between;
  }
}

.main-nav {
  @apply flex items-center gap-2;
}

.header-link,
:deep(.header-link) {
  @apply inline-flex bg-black font-medium px-3 py-1.5
    rounded-md bg-opacity-0 select-none;

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

.actions {
  @apply flex gap-3 items-center;
}

.search-button {
  @apply py-2 px-2.5 hidden sm:inline-flex justify-center
    rounded-md select-none bg-black bg-opacity-20
      transition duration-250 items-center;

  &:focus,
  &:focus-visible {
    @apply outline-none;
  }

  div {
    @apply transition duration-250 delay-50 transform;
  }

  &:hover,
  &:focus-visible {
    @apply bg-opacity-40;

    div {
      @apply rotate-y-180;
    }
  }
}
</style>
