<script setup lang="ts">
import { menuData } from '@data/header';
import type { MenuItem } from '@/types/header';

const { t } = useI18n();

interface NavLink {
  id: string;
  drop: MenuItem[];
}

const asideNav = ref<null | HTMLElement>(null);

const [visible, close] = [navIsOpen, closeSideNav];

onClickOutside(asideNav, () => {
  visible.value && close();
});

const { about, flight, park, tour } = menuData;

const navLinks = [flight, park, tour, about].map(({ id, items }): NavLink => {
  return { id, drop: items };
});

const transMenu = (id: string, index: string) =>
  t(`header.${id}.menu.${index}`);
</script>

<template>
  <aside
    id="app-sidebar-menu"
    ref="asideNav"
    aria-label="Menu"
    :class="[visible && 'visible--nav']"
  >
    <div class="header" tabindex="-1">
      <div class="_left" tabindex="-1">
        <button class="nav-button" type="button" title="Search" tabindex="0">
          <div class="i-carbon-search"></div>
        </button>

        <DarkToggle still class="dark-toggle" />
      </div>

      <button
        class="nav-button"
        type="button"
        title="Close Menu"
        tabindex="0"
        @click="close"
      >
        <div class="i-carbon-close"></div>
      </button>
    </div>
    <hr class="hr" tabindex="-1" />

    <div class="body" tabindex="-1">
      <template v-for="nl of navLinks" :key="nl.id">
        <div class="item-group-cont" tabindex="-1">
          <div class="subheader" tabindex="-1">{{ t(`nav.${nl.id}`) }}</div>

          <div class="item-group" tabindex="-1">
            <NuxtLink
              v-for="sv of nl.drop"
              :key="sv.name"
              :to="localizeUrl(sv.link)"
              tabindex="0"
              exact-active-class="active"
            >
              {{ transMenu(nl.id, sv.name) }}
            </NuxtLink>
          </div>
        </div>

        <hr class="hr" />
      </template>
    </div>

    <hr class="hr" tabindex="-1" />
    <SocialBlock class="footer" />
  </aside>
</template>

<style lang="scss" scoped>
#app-sidebar-menu {
  --offscreen-w: translateX(101%);

  height: auto;
  max-height: min(98vh, 100%);
  transform: var(--offscreen-w);
  will-change: transform;
  transition: 350ms cubic-bezier(0.4, 0, 0.2, 1);
  top: 0.5px;

  --at-apply: z-20 fixed flex w-full max-w-260px flex-col right-0
    rounded-bl-lg overflow-y-auto invisible overflow-x-hidden
      border-l border-b border-zinc will-change-transform bg-light-2
        dark:(border-brand-pri text-zinc-2 bg-brand-pri-dark);

  &.visible--nav {
    --offscreen-w: translateX(0);
    visibility: visible;
  }
}

.item-group-cont {
  --at-apply: p-4;

  & + hr {
    --at-apply: w-4/5;

  }
  &:last-of-type + hr {
    @apply hidden;
  }
}

.subheader {
  --at-apply: block text-xs font-semibold
    uppercase tracking-widest mb-4 mt-1;
}

.item-group {
  --at-apply: ml-1 space-y-4px;

  a {
    --at-apply: block -mx-2 py-2 px-6 relative font-medium
      rounded transition duration-280 cursor-pointer
        focus:outline-none;

    &:focus-visible,
    &:hover {
      --at-apply: text-brand-pri bg-zinc-200
        dark:(bg-brand-pri text-white);
    }

    &.active {
      --at-apply: text-brand-pri bg-zinc-2/70
        dark:(text-zinc-50 bg-white/8);

      &::before {
        --at-apply: absolute w-4px h-full bg-current top-0 left-0
          opacity-80 block content-[''] transition-colors;
      }

      &:focus-visible,
      &:hover {
        --at-apply: bg-zinc-3/80 dark:(bg-brand-pri);
      }
    }
  }
}

.header {
  --at-apply: flex items-center justify-between p-3;
}

.dark-toggle {
  &:hover,
  &:focus-visible {
    --at-apply: bg-opacity-88 dark:(bg-opacity-100);
  }
}

._left {
  --at-apply: inline-flex gap-2;
}

.dark-toggle,
.nav-button {
  --at-apply: focus:outline-none bg-zinc-300 transition
    inline-flex items-center justify-center p-1.5
      rounded duration-250 cursor-pointer bg-opacity-30
        dark:(bg-brand-pri bg-opacity-30);
}

.nav-button {
  &:hover,
  &:focus-visible {
    --at-apply: bg-opacity-100;
  }

  > div {
    --at-apply: transition;
  }
}

hr {
  @apply dark:(border-brand-pri);
}

.footer {
  --at-apply: p-2;
}
</style>
