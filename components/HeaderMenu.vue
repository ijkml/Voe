<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';

import type { MenuItem } from '@/types/header';

const props = defineProps<{
  items: MenuItem[];
  id: string;
}>();

const { items, id } = toRefs(props);

const { t } = useI18n();

const transMenu = (index: string) => t(`header.${id.value}.menu.${index}`);
</script>

<template>
  <Popover v-slot="{ open: active, close }" class="relative">
    <PopoverButton :class="{ active }" class="header-link">
      <slot />
      <div
        :class="{ active }"
        class="icon i-carbon-chevron-down"
        aria-hidden="true"
      />
    </PopoverButton>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="translate-y-1 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-1 opacity-0"
    >
      <PopoverPanel class="pop-panel-body">
        <div>
          <div class="pop-panel-container">
            <NuxtLink
              v-for="item in items"
              :key="item.name"
              :title="`${transMenu(item.name)}: ${transMenu(item.description)}`"
              :to="localizeUrl(item.link)"
              class="pop-panel-item"
              exact-active-class="active"
              @click="close"
            >
              <div class="ppi-icon">
                <component :is="item.icon"></component>
              </div>
              <div class="ppi-body">
                <p v-text="transMenu(item.name)" />
                <p v-text="transMenu(item.description)" />
              </div>
            </NuxtLink>
          </div>
        </div>
      </PopoverPanel>
    </Transition>
  </Popover>
</template>

<style lang="scss" scoped>
.header-link {
  .icon {
    @apply ml-2 mr--1 h-4.5 w-4.5 transition-transform
      transform duration-200 self-center;

    &.active {
      @apply rotate-180;
    }
  }
}

.pop-panel-body {
  --at-apply: absolute z-10 mt-3 w-screen max-w-sm transform px-4 sm:px-0
    right-1/2 translate-x-1/2;

  > div {
    --at-apply: overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5
        dark:(border border-brand-pri shadow-none ring-none);
  }
}

.pop-panel-container {
  --at-apply: relative grid gap-8 p-7 bg-light-2 dark:(bg-brand-pri-dark);
}

.pop-panel-item {
  --at-apply: flex items-center rounded-lg p-2 -m-3 transition ease-in-out;

  &:focus,
  &:focus-visible {
    --at-apply: outline-none;
  }

  &:hover {
    @apply bg-brand-pri bg-opacity-10 dark:(bg-opacity-50);
  }

  &:focus-visible {
    @apply ring ring-brand-pri/50 bg-brand-pri/5
      dark:(ring-brand-pri bg-brand-pri/40);
  }

  &.active {
    @apply bg-brand-pri/10 dark:(bg-zinc/20);

    &:hover {
      @apply bg-brand-pri/20 dark:(bg-brand-pri/50);
    }
  }
}

.ppi-icon {
  @apply flex h-10 w-10 p-1 shrink-0 items-center justify-center
    sm:(h-12 w-12 p-1.6) rounded-md of-hidden text-brand-pri
      bg-brand-pri/10 dark:(text-brand-sec bg-brand-sec/10);

    :where(svg) {
      @apply fill-current;
    }
}

.ppi-body {
  @apply ml-4 text-sm;

  :nth-child(1) {
    @apply font-medium text-zinc-700 dark:(text-zinc-100);
  }

  :nth-child(2) {
    @apply text-zinc-500 dark:(text-zinc-300) line-clamp-2;
  }
}
</style>
