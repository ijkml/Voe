<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
import type { LocaleCode } from '@/types';

const { locale } = useI18n();
const { push } = useRouter();

interface Locale {
  short: string;
  long: string;
  code: LocaleCode;
}

const languages: Readonly<Locale[]> = [
  { short: 'English', long: 'English', code: 'en' },
  { short: '简体中文', long: '简体中文 / Simplified Chinese', code: 'zh' },
  { short: 'Español', long: 'Español', code: 'es' },
  { short: 'Française', long: 'Française', code: 'fr' },
  { short: '日本語', long: '日本語 / Japanese', code: 'ja' },
] as const;

const current = computed(() => {
  return languages.find((l) => l.code === locale.value)?.short;
});

function setLanguage(code: LocaleCode) {
  if (locale.value !== code) {
    const { fullPath } = useRoute();
    // const plainUrl = removeLocaleCode(fullPath);
    // const intlUrl = localePath(plainUrl, code);
    // push(intlUrl);
    push(localePath(removeLocaleCode(fullPath), code));
  }
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
      <span class="wrapper">
        {{ current }}
        <span
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
          v-for="lang in languages"
          v-slot="{ active }"
          :key="lang.short"
        >
          <button
            class="menu-item"
            :class="{ active }"
            @click="setLanguage(lang.code)"
          >
            {{ lang.long }}
          </button>
        </MenuItem>
      </MenuItems>
    </Transition>
  </Menu>
</template>

<style lang="scss" scoped>
.menu-root {
  --at-apply: relative inline-block text-left;

  &:focus,
  &:focus-visible {
    --at-apply: outline-none;
  }
}

.menu-button {
  --at-apply: inline-flex w-full justify-center rounded-md px-2.5 py-2 text-sm
    font-medium text-white bg-black bg-opacity-20 transition duration-250
    sm:(px-4);

  &:focus,
  &:focus-visible {
    --at-apply: outline-none;
  }

  &:hover,
  &:focus-visible {
    --at-apply: bg-opacity-40;

    .wrapper > span {
      --at-apply: rotate-90;
    }
  }

  .lang {
    --at-apply: h-5 w-5 sm:(mr-2 ml--1);
  }

  .wrapper {
    --at-apply: hidden sm:inline-flex;

    > span {
      --at-apply: transition-transform transform ml-2 -mr-1 h-5 w-5
        duration-200 backface-hidden block;

      &.open {
        --at-apply: rotate-180;
      }
    }
  }
}

.menu-body {
  --at-apply: absolute right--10 mt-1 w-44 origin-top-right shadow-lg rounded-md
    bg-light-2 ring-1 ring-black/5 overflow-hidden sm:(right-0 w-56)
    text-zinc-800 py-1px dark:(bg-brand-pri-dark text-zinc-1) overflow-hidden;

  &:focus,
  &:focus-visible {
    --at-apply: outline-none;
  }
}

.menu-item {
  --at-apply: flex w-full items-center rounded-sm font-medium px-4 py-3 text-sm
    text-left focus:outline-none;

  &.active {
    --at-apply: text-brand-pri bg-zinc-3/80 dark:(bg-brand-pri/50 text-white);
  }
}
</style>
