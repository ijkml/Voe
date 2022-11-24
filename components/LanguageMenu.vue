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

onMounted(() => {
  document.querySelectorAll('.menu-root').forEach((elem) => {
    elem.setAttribute('tabindex', '-1');
  });
});
</script>

<template>
  <Menu v-slot="{ open }" as="div" class="menu-root">
    <MenuButton class="menu-button" tabindex="0" title="Choose language">
      <LanguageIcon aria-hidden="true" class="lang" />
      <span class="wrapper">
        {{ current }}
        <div
          :class="{ open }"
          class="i-carbon-chevron-down"
          aria-hidden="true"
        />
      </span>
    </MenuButton>

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

  &:focus,
  &:focus-visible {
    @apply outline-none bg-yellow;
  }
}

.menu-button {
  @apply inline-flex w-full justify-center rounded-md
    px-2.5 py-2 text-sm font-medium text-white bg-black
      bg-opacity-20 hover:bg-opacity-40 transition duration-250
        sm:(px-4);

  &:focus,
  &:focus-visible {
    @apply outline-none;
  }

  &:focus-visible {
    @apply bg-red;
  }

  .lang {
    @apply h-5 w-5 sm:(mr-2 ml--1);
  }

  .wrapper {
    @apply hidden sm:inline-flex;

    > div {
      @apply transition-transform transform ml-2 -mr-1 h-5 w-5
        duration-200;

      &.open {
        @apply rotate-180;
      }
    }
  }
}

.menu-body {
  @apply absolute right--10 mt-1 w-44 sm:w-56 origin-top-right
    shadow-lg rounded-md bg-fuchsia-50 ring-1 ring-black/5
      overflow-hidden sm:(right-0);

  &:focus,
  &:focus-visible {
    @apply outline-none;
  }
}

.menu-item {
  @apply group flex w-full items-center rounded-sm
    px-2.5 py-2.5 text-sm text-zinc-800 text-left;

  &.active {
    @apply bg-brand-pri/10;
  }
}
</style>
