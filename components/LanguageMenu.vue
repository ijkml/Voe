<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';

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
  return languages.find((l) => l.code === locale.value) as Locale;
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
</script>

<template>
  <Popover v-slot="{ open, close }" class="relative">
    <PopoverButton class="menu-button">
      <span class="short" v-text="current.code" />
      <span class="wrapper">
        {{ current.short }}
        <span
          :class="{ open }"
          class="i-carbon-chevron-down"
          aria-hidden="true"
        />
      </span>
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
          <button
            v-for="lang in languages"
            :key="lang.short"
            class="menu-item"
            @click="
              () => {
                close();
                setLanguage(lang.code);
              }
            "
            v-text="lang.long"
          />
        </div>
      </PopoverPanel>
    </Transition>
  </Popover>
</template>

<style scoped lang="scss">
.menu-root {
  @apply relative inline-block text-left;

  &:focus,
  &:focus-visible {
    @apply outline-none;
  }
}

:deep(.menu-button) {
  @apply inline-flex w-full justify-center rounded-md px-2.5 py-2 text-sm
    font-medium text-white bg-black bg-opacity-20 transition duration-250
    sm:(px-4);

  &:focus,
  &:focus-visible {
    @apply outline-none;
  }

  &:hover,
  &:focus-visible {
    @apply bg-opacity-40;

    .wrapper > span {
      @apply rotate-90;
    }
  }

  .lang {
    @apply h-5 w-5 sm:(mr-2 ml--1);
  }

  .short {
    @apply inline-flex sm:hidden uppercase;
  }

  .wrapper {
    @apply hidden sm:inline-flex;

    > span {
      @apply transition-transform transform ml-2 -mr-1 h-5 w-5
        duration-200 backface-hidden block delay-50;

      &.open {
        @apply rotate-180;
      }
    }
  }
}

.pop-panel-body {
  @apply absolute right--10 mt-1 w-44 origin-top-right sm:(right-0 w-56);

  > div {
    @apply rounded-md shadow-lg bg-light-2 text-zinc-800
      ring-(1 black/5) py-1px of-hidden dark:shadow-none
        dark:(bg-brand-pri-dark text-zinc-1 ring-brand-pri/85);
  }
}

.menu-item {
  @apply flex w-full items-center rounded-sm font-medium
    px-4 py-3 text-sm text-left focus:outline-none;

  &:hover,
  &:focus-visible {
    @apply text-brand-pri bg-zinc-3/80
      dark:(bg-brand-pri/50 text-white);
  }
}
</style>
