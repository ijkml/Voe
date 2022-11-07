<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
import LanguageIcon from '@icons/language.svg?component';

const languages = [
  { short: 'English', long: 'English' },
  { short: '简体中文', long: '简体中文 / Simplified Chinese' },
  { short: 'Español', long: 'Español' },
  { short: 'Française', long: 'Française' },
  { short: '日本語', long: '日本語 / Japanese' },
];

const current = ref(languages[0].short);

function setLanguage(index: number) {
  current.value = languages[index].short;
}
</script>

<template>
  <Menu v-slot="{ open }" as="div" class="menu-root">
    <div>
      <MenuButton class="menu-button">
        <LanguageIcon aria-hidden="true" class="lang" />
        {{ current }}
        <div
          :class="{ open }"
          class="i-carbon-chevron-down"
          aria-hidden="true"
        />
      </MenuButton>
    </div>

    <Transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems class="menu-body">
        <MenuItem
          v-for="(lang, i) in languages"
          v-slot="{ active }"
          :key="lang.short"
        >
          <button class="menu-item" :class="{ active }" @click="setLanguage(i)">
            {{ lang.long }}
          </button>
        </MenuItem>
      </MenuItems>
    </Transition>
  </Menu>
</template>

<style lang="scss" scoped>
.menu-root {
  @apply relative inline-block text-left;
}

.menu-button {
  @apply inline-flex w-full justify-center rounded-md
    bg-opacity-20 px-4 py-2 text-sm font-medium text-white
      hover:bg-opacity-30 focus:outline-none bg-black
        focus-visible:(ring-2 ring-white/75);

  .lang {
    @apply h-5 w-5 mr-2 ml--1;
  }

  > div {
    @apply transition-transform transform ml-2 -mr-1 h-5 w-5
      duration-200;

    &.open {
      @apply rotate-180;
    }
  }
}

.menu-body {
  @apply absolute right-1 mt-1 w-56 origin-top-right
    shadow-lg rounded-md bg-white ring-1 ring-black/5
      focus:outline-none overflow-hidden;
}

.menu-item {
  @apply group flex w-full items-center rounded-sm
    px-2.5 py-2.5 text-sm text-zinc-800;

  &.active {
    @apply bg-brand-pri/10;
  }
}
</style>
