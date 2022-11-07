<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';

import type { MenuItem } from '@/types/header';

const props = defineProps<{
  items: MenuItem[];
}>();

const { items } = toRefs(props);
</script>

<template>
  <Popover v-slot="{ open: active, close }" class="relative">
    <PopoverButton :class="{ active }" class="group header-link">
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
              :title="`${item.name}: ${item.description}`"
              :to="item.link"
              class="pop-panel-item"
              exact-active-class="active"
              @click="close"
            >
              <div class="ppi-icon">
                <component :is="item.icon"></component>
              </div>
              <div class="ppi-body">
                <p>{{ item.name }}</p>
                <p>
                  {{ item.description }}
                </p>
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
    @apply ml-2 mr--1 h-5 w-5 transition-transform
      transform duration-200;

    &.active {
      @apply rotate-180;
    }
  }
}

.pop-panel-body {
  @apply absolute z-10 mt-3 w-screen max-w-sm
    transform px-4 sm:px-0 right-1
      lg:(right-1/2 translate-x-1/2);

  > div {
    @apply overflow-hidden rounded-lg shadow-lg
      ring-1 ring-black ring-opacity-5;
  }
}

.pop-panel-container {
  @apply relative grid gap-8 bg-white p-7;
}

.pop-panel-item {
  @apply flex items-center rounded-lg p-2 -m-3 transition
    ease-in-out focus:outline-none hover:bg-brand-pri/10;

  &:focus-visible {
    @apply ring ring-brand-pri ring-opacity-50 bg-brand-pri/5;
  }

  &.active {
    @apply bg-brand-pri/10;

    &:hover {
      @apply bg-brand-pri/20;
    }
  }
}

.ppi-icon {
  @apply flex h-10 w-10 shrink-0 items-center
    justify-center text-white sm:h-12 sm:w-12;
}

.ppi-body {
  @apply ml-4;

  :nth-child(1) {
    @apply text-sm font-medium text-zinc-700;
  }

  :nth-child(2) {
    @apply text-sm text-zinc-500;
  }
}
</style>
