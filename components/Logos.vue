<script setup lang="ts">
import LogoVue from '@img/logos/LogoVue.svg?component';
import LogoNuxt from '@img/logos/LogoNuxt.svg?component';
// import LogoVueUse from '@img/logos/LogoVueUse.svg?component';
import LogoHeadless from '@img/logos/LogoHeadless.svg?component';
import LogoUno from '@img/logos/LogoUno.svg?component';
import LogoVite from '@img/logos/LogoVite.svg?component';

const logos = [
  {
    title: 'Vue',
    link: 'https://vuejs.org/',
    icon: LogoVue,
  },
  {
    title: 'Nuxt',
    link: 'https://nuxt.com/',
    icon: LogoNuxt,
  },
  {
    title: 'Vite',
    link: 'https://vitejs.dev/',
    icon: LogoVite,
  },
  // {
  //   title: 'VueUse',
  //   link: '',
  //   icon: LogoVueUse,
  // },
  {
    title: 'UnoCSS',
    link: 'https://github.com/unocss/unocss/',
    icon: LogoUno,
  },
  {
    title: 'Headless UI',
    link: 'https://headlessui.com/',
    icon: LogoHeadless,
  },
];
</script>

<template>
  <div class="logo-root">
    <a
      v-for="l in logos"
      :key="l.title"
      :href="l.link"
      class="logo"
      target="_blank"
      :title="l.title"
      rel="noopener noreferrer"
    >
      <component :is="l.icon"></component>
    </a>
  </div>
</template>

<style lang="scss" scoped>
.logo-root {
  @apply inline-flex flex-wrap p-1 gap-4 items-center justify-center;
}

.logo {
  svg {
    @apply w-6 h-auto;
  }
}
</style>
